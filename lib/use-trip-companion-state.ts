"use client";

import { useEffect, useMemo, useState } from "react";
import { triggerHaptic } from "@/lib/haptics";
import { getAllTripDays, getCityGuide } from "@/lib/guide-config";
import {
  profileUpdatedEvent,
  readStoredProfile,
  writeStoredProfile,
} from "@/lib/profile-storage";
import {
  defaultProfile,
  getRecommendedStopCount,
  getSchedulePeriod,
  getTripBlocks,
  normalizeProfile,
  TravelerProfile,
} from "@/lib/trip-logic";
import { getStopChoiceOption } from "@/lib/stop-insights";

export type SelectionState = Record<string, string>;
export type NotesState = Record<string, string>;
export type StopChoiceState = Record<
  string,
  {
    optionId?: string;
    customName?: string;
    customLink?: string;
  }
>;

function loadLocalJson<T>(key: string, fallback: T): T {
  if (typeof window === "undefined") return fallback;
  try {
    const raw = window.localStorage.getItem(key);
    return raw ? (JSON.parse(raw) as T) : fallback;
  } catch {
    return fallback;
  }
}

function loadSelectedStops() {
  const next = loadLocalJson<Record<string, string | boolean>>("trip-companion-selected", {});
  const legacyChecked = loadLocalJson<Record<string, boolean>>("trip-companion-checked", {});
  const legacyFavorites = loadLocalJson<Record<string, boolean>>("trip-companion-favorites", {});
  return {
    ...legacyChecked,
    ...legacyFavorites,
    ...next,
  };
}

const stopDayLookup = new Map(
  getAllTripDays().flatMap((day) => day.sections.flatMap((section) => section.stops.map((stop) => [stop.id, day.id] as const)))
);

function normalizeSelectedStops(raw: Record<string, string | boolean>) {
  const next: SelectionState = {};

  for (const [stopId, value] of Object.entries(raw)) {
    if (typeof value === "string" && stopDayLookup.has(stopId)) {
      next[stopId] = value;
      continue;
    }

    if (value) {
      const sourceDayId = stopDayLookup.get(stopId);
      if (sourceDayId) {
        next[stopId] = sourceDayId;
      }
    }
  }

  return next;
}

export function useTripCompanionState() {
  const [selectedStops, setSelectedStops] = useState<SelectionState>({});
  const [notes, setNotes] = useState<NotesState>({});
  const [stopChoices, setStopChoices] = useState<StopChoiceState>({});
  const [profile, setProfile] = useState<TravelerProfile>(defaultProfile);

  useEffect(() => {
    setSelectedStops(normalizeSelectedStops(loadSelectedStops()));
    setNotes(loadLocalJson<NotesState>("trip-companion-notes", {}));
    setStopChoices(loadLocalJson<StopChoiceState>("trip-companion-stop-choices", {}));
    setProfile(readStoredProfile());
  }, []);

  useEffect(() => {
    function handleProfileUpdated(event: Event) {
      const nextProfile = (event as CustomEvent<TravelerProfile>).detail;
      setProfile(normalizeProfile(nextProfile));
    }

    window.addEventListener(profileUpdatedEvent, handleProfileUpdated as EventListener);
    return () => {
      window.removeEventListener(profileUpdatedEvent, handleProfileUpdated as EventListener);
    };
  }, []);

  const guide = useMemo(() => getCityGuide(profile.cityId), [profile.cityId]);
  const tripBlocks = useMemo(() => getTripBlocks(profile), [profile]);
  const recommendedStopCount = useMemo(() => getRecommendedStopCount(profile.pace), [profile.pace]);

  const allStops = useMemo(
    () =>
      guide.tripDays.flatMap((day) =>
        day.sections.flatMap((section, sectionIndex) =>
          section.stops.map((stop, stopIndex) => ({
            ...stop,
            dayId: day.id,
            dayTitle: day.title,
            sectionLabel: section.label,
            sectionTitle: section.title,
            sectionIndex,
            stopIndex,
            schedulePeriod: getSchedulePeriod(section.label, sectionIndex),
          }))
        )
      ),
    [guide]
  );

  const selectedStopItems = allStops
    .filter((stop) => selectedStops[stop.id])
    .map((stop) => {
      const assignedDayId = selectedStops[stop.id];
      const assignedDay = guide.tripDays.find((day) => day.id === assignedDayId);
      const choice = stopChoices[stop.id];
      const option = choice?.optionId ? getStopChoiceOption(stop.id, choice.optionId) : undefined;
      const displayName = choice?.customName?.trim() || option?.title || stop.name;
      const displayWhy = option?.summary || stop.why;

      return {
        ...stop,
        assignedDayId,
        assignedDayTitle: assignedDay?.title ?? stop.dayTitle,
        displayName,
        displayWhy,
        customLink: choice?.customLink?.trim() || undefined,
        choiceOption: option,
      };
    });
  const selectedCount = selectedStopItems.length;
  const notedDays = tripBlocks
    .map((block) => guide.tripDays.find((day) => day.id === block.dayId))
    .filter((day): day is NonNullable<typeof day> => Boolean(day))
    .filter((day) => (notes[day.id] ?? "").trim().length > 0);

  function persistSelected(next: SelectionState) {
    setSelectedStops(next);
    window.localStorage.setItem("trip-companion-selected", JSON.stringify(next));
  }

  function persistNotes(next: NotesState) {
    setNotes(next);
    window.localStorage.setItem("trip-companion-notes", JSON.stringify(next));
  }

  function persistStopChoices(next: StopChoiceState) {
    setStopChoices(next);
    window.localStorage.setItem("trip-companion-stop-choices", JSON.stringify(next));
  }

  function persistProfile(next: TravelerProfile) {
    const normalized = writeStoredProfile(next);
    setProfile(normalized);
  }

  function toggleSelected(stopId: string, assignedDayId: string) {
    const next = { ...selectedStops };
    if (next[stopId]) {
      delete next[stopId];
    } else {
      next[stopId] = assignedDayId;
    }
    persistSelected(next);
    triggerHaptic(next[stopId] ? [12, 22, 14] : 10);
  }

  function moveSelectedStop(stopId: string, assignedDayId: string) {
    if (!selectedStops[stopId]) return;
    const next = { ...selectedStops, [stopId]: assignedDayId };
    persistSelected(next);
    triggerHaptic([10, 18, 10]);
  }

  function updateStopChoice(
    stopId: string,
    choice: StopChoiceState[string] | null
  ) {
    const next = { ...stopChoices };
    if (!choice) {
      delete next[stopId];
    } else {
      next[stopId] = choice;
    }
    persistStopChoices(next);
    triggerHaptic(10);
  }

  function saveNote(dayId: string, noteValue: string) {
    const trimmed = noteValue.trim();
    const next = { ...notes };
    if (trimmed) next[dayId] = trimmed;
    else delete next[dayId];
    persistNotes(next);
    triggerHaptic([14, 22, 14]);
  }

  function updateProfile<K extends keyof TravelerProfile>(
    key: K,
    value: TravelerProfile[K]
  ) {
    persistProfile({ ...profile, [key]: value });
    triggerHaptic(10);
  }

  function setPremiumAccess(hasPremium: boolean) {
    persistProfile({ ...profile, hasPremium });
    triggerHaptic(hasPremium ? [14, 28, 14] : 10);
  }

  return {
    selectedStops,
    notes,
    stopChoices,
    profile,
    tripBlocks,
    allStops,
    selectedCount,
    selectedStopItems,
    recommendedStopCount,
    notedDays,
    toggleSelected,
    moveSelectedStop,
    updateStopChoice,
    saveNote,
    updateProfile,
    setPremiumAccess,
  };
}
