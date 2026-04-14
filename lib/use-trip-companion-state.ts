"use client";

import { useEffect, useMemo, useState } from "react";
import { triggerHaptic } from "@/lib/haptics";
import { getCityGuide } from "@/lib/guide-config";
import {
  profileUpdatedEvent,
  readStoredProfile,
  writeStoredProfile,
} from "@/lib/profile-storage";
import {
  defaultProfile,
  getTripBlocks,
  normalizeProfile,
  TravelerProfile,
} from "@/lib/trip-logic";

export type RecordState = Record<string, boolean>;
export type NotesState = Record<string, string>;

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
  const next = loadLocalJson<RecordState>("trip-companion-selected", {});
  const legacyChecked = loadLocalJson<RecordState>("trip-companion-checked", {});
  const legacyFavorites = loadLocalJson<RecordState>("trip-companion-favorites", {});
  return {
    ...legacyChecked,
    ...legacyFavorites,
    ...next,
  };
}

export function useTripCompanionState() {
  const [selectedStops, setSelectedStops] = useState<RecordState>({});
  const [notes, setNotes] = useState<NotesState>({});
  const [profile, setProfile] = useState<TravelerProfile>(defaultProfile);

  useEffect(() => {
    setSelectedStops(loadSelectedStops());
    setNotes(loadLocalJson<NotesState>("trip-companion-notes", {}));
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

  const allStops = useMemo(
    () =>
      guide.tripDays.flatMap((day) =>
        day.sections.flatMap((section) =>
          section.stops.map((stop) => ({
            ...stop,
            dayId: day.id,
            dayTitle: day.title,
          }))
        )
      ),
    [guide]
  );

  const selectedStopItems = allStops.filter((stop) => selectedStops[stop.id]);
  const selectedCount = selectedStopItems.length;
  const notedDays = tripBlocks
    .map((block) => guide.tripDays.find((day) => day.id === block.dayId))
    .filter((day): day is NonNullable<typeof day> => Boolean(day))
    .filter((day) => (notes[day.id] ?? "").trim().length > 0);

  function persistSelected(next: RecordState) {
    setSelectedStops(next);
    window.localStorage.setItem("trip-companion-selected", JSON.stringify(next));
  }

  function persistNotes(next: NotesState) {
    setNotes(next);
    window.localStorage.setItem("trip-companion-notes", JSON.stringify(next));
  }

  function persistProfile(next: TravelerProfile) {
    const normalized = writeStoredProfile(next);
    setProfile(normalized);
  }

  function toggleSelected(stopId: string) {
    const next = { ...selectedStops, [stopId]: !selectedStops[stopId] };
    if (!next[stopId]) delete next[stopId];
    persistSelected(next);
    triggerHaptic(next[stopId] ? [12, 22, 14] : 10);
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
    profile,
    tripBlocks,
    allStops,
    selectedCount,
    selectedStopItems,
    notedDays,
    toggleSelected,
    saveNote,
    updateProfile,
    setPremiumAccess,
  };
}
