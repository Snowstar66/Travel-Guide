import { defaultProfile, normalizeProfile, TravelerProfile } from "@/lib/trip-logic";

export const profileStorageKey = "trip-companion-profile";
export const profileUpdatedEvent = "trip-companion-profile-updated";

export function readStoredProfile() {
  if (typeof window === "undefined") return defaultProfile;

  try {
    const raw = window.localStorage.getItem(profileStorageKey);
    return raw ? normalizeProfile(JSON.parse(raw) as TravelerProfile) : defaultProfile;
  } catch {
    return defaultProfile;
  }
}

export function writeStoredProfile(profile: TravelerProfile) {
  const normalized = normalizeProfile(profile);
  if (typeof window === "undefined") return normalized;

  window.localStorage.setItem(profileStorageKey, JSON.stringify(normalized));
  window.dispatchEvent(
    new CustomEvent<TravelerProfile>(profileUpdatedEvent, {
      detail: normalized,
    })
  );

  return normalized;
}

export function patchStoredProfile(patch: Partial<TravelerProfile>) {
  const current = readStoredProfile();
  return writeStoredProfile({
    ...current,
    ...patch,
  });
}
