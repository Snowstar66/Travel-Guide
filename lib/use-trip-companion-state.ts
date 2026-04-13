"use client";

import { useEffect, useMemo, useState } from "react";
import { triggerHaptic } from "@/lib/haptics";
import { getCityGuide } from "@/lib/guide-config";
import {
  profileUpdatedEvent,
  readStoredProfile,
  writeStoredProfile,
} from "@/lib/profile-storage";
import { defaultProfile, normalizeProfile, TravelerProfile } from "@/lib/trip-logic";

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

export function useTripCompanionState() {
  const [checkedStops, setCheckedStops] = useState<RecordState>({});
  const [favorites, setFavorites] = useState<RecordState>({});
  const [notes, setNotes] = useState<NotesState>({});
  const [profile, setProfile] = useState<TravelerProfile>(defaultProfile);

  useEffect(() => {
    setCheckedStops(loadLocalJson<RecordState>("trip-companion-checked", {}));
    setFavorites(loadLocalJson<RecordState>("trip-companion-favorites", {}));
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

  const completedStops = Object.values(checkedStops).filter(Boolean).length;
  const favoriteStops = allStops.filter((stop) => favorites[stop.id]);
  const notedDays = guide.tripDays.filter((day) => (notes[day.id] ?? "").trim().length > 0);

  function persistChecked(next: RecordState) {
    setCheckedStops(next);
    window.localStorage.setItem("trip-companion-checked", JSON.stringify(next));
  }

  function persistFavorites(next: RecordState) {
    setFavorites(next);
    window.localStorage.setItem("trip-companion-favorites", JSON.stringify(next));
  }

  function persistNotes(next: NotesState) {
    setNotes(next);
    window.localStorage.setItem("trip-companion-notes", JSON.stringify(next));
  }

  function persistProfile(next: TravelerProfile) {
    const normalized = writeStoredProfile(next);
    setProfile(normalized);
  }

  function toggleChecked(stopId: string) {
    const next = { ...checkedStops, [stopId]: !checkedStops[stopId] };
    if (!next[stopId]) delete next[stopId];
    persistChecked(next);
    triggerHaptic(next[stopId] ? [10, 20, 10] : 12);
  }

  function toggleFavorite(stopId: string) {
    const next = { ...favorites, [stopId]: !favorites[stopId] };
    if (!next[stopId]) delete next[stopId];
    persistFavorites(next);
    triggerHaptic(next[stopId] ? [12, 24, 18] : 10);
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
    checkedStops,
    favorites,
    notes,
    profile,
    allStops,
    completedStops,
    favoriteStops,
    notedDays,
    toggleChecked,
    toggleFavorite,
    saveNote,
    updateProfile,
    setPremiumAccess,
  };
}
