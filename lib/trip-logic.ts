import { defaultCityId, getCityGuide, type CityId, type HotelAreaValue } from "@/lib/guide-config";

export type TravelerProfile = {
  cityId: CityId;
  travelStyle: "first-timer" | "icon-lover" | "neighborhood-hunter";
  hotelArea: HotelAreaValue;
  pace: "calm" | "balanced" | "max";
  currentDayId: string;
  hasPremium: boolean;
};

export type ProfileOption<T extends string> = {
  value: T;
  label: string;
  hint: string;
};

function getDefaultDayId(cityId: CityId) {
  return getCityGuide(cityId).tripDays[0]?.id ?? "day-1";
}

export const defaultProfile: TravelerProfile = {
  cityId: defaultCityId,
  travelStyle: "first-timer",
  hotelArea: "unknown",
  pace: "balanced",
  currentDayId: getDefaultDayId(defaultCityId),
  hasPremium: false,
};

export function isPremiumDay(dayId: string) {
  const day = dayId.match(/day-(\d+)$/);
  return Number(day?.[1] ?? 1) > 1;
}

export function hasAccessToDay(profile: TravelerProfile, dayId: string) {
  return profile.hasPremium || !isPremiumDay(dayId);
}

export function normalizeProfile(profile: Partial<TravelerProfile> | TravelerProfile) {
  const legacyHotelArea = profile.hotelArea as string | undefined;
  const nextCityId = profile.cityId ?? defaultCityId;
  const guide = getCityGuide(nextCityId);
  const hotelArea =
    legacyHotelArea === "midtown"
      ? "central"
      : legacyHotelArea === "downtown"
        ? "historic"
        : legacyHotelArea === "brooklyn-queens"
          ? "local"
          : profile.hotelArea ?? "unknown";

  const next: TravelerProfile = {
    ...defaultProfile,
    ...profile,
    cityId: nextCityId,
    hotelArea,
    currentDayId:
      guide.tripDays.find((day) => day.id === profile.currentDayId)?.id ?? getDefaultDayId(nextCityId),
  };

  return {
    ...next,
    currentDayId: hasAccessToDay(next, next.currentDayId)
      ? next.currentDayId
      : getDefaultDayId(next.cityId),
  };
}

export const travelStyleOptions: ProfileOption<TravelerProfile["travelStyle"]>[] = [
  {
    value: "first-timer",
    label: "Trygg första gång",
    hint: "Starkaste standardflödet med lagom wow och låg friktion.",
  },
  {
    value: "icon-lover",
    label: "Jag vill ha ikonerna",
    hint: "Mer skyline, fler klassiker och högre vykortstäthet.",
  },
  {
    value: "neighborhood-hunter",
    label: "Jag vill känna staden",
    hint: "Lite mindre måsten, lite mer kvarter och rytm.",
  },
];

export const paceOptions: ProfileOption<TravelerProfile["pace"]>[] = [
  {
    value: "calm",
    label: "Lugnt",
    hint: "Mer luft mellan stoppen, färre beslut och mindre kö-stress.",
  },
  {
    value: "balanced",
    label: "Balanserat",
    hint: "Bästa första läget för en femdagarsresa.",
  },
  {
    value: "max",
    label: "Maxa",
    hint: "Tajtare dagar för dig som vet att du vill se mycket.",
  },
];

export function getTodayOptions(profile: TravelerProfile) {
  const items: string[] = [];
  const guide = getCityGuide(profile.cityId);

  if (profile.travelStyle === "icon-lover") {
    items.push("Prioritera dagens största wow-stopp tidigt, innan köerna äter energin.");
  } else if (profile.travelStyle === "neighborhood-hunter") {
    items.push("Lämna extra promenadluft efter huvudstoppet så att kvarteren får plats.");
  } else {
    items.push("Håll dig till dagens kärnspår först. Känn efter innan du lägger till extrasaker.");
  }

  if (profile.hotelArea === "central") {
    items.push("Du kan ofta avsluta smart genom att äta nära hotellet i stället för att jaga ännu ett område.");
  } else if (profile.hotelArea === "historic") {
    items.push("Du bor nära stadens berättelse. Utnyttja det för lugnare kvällsstråk och kortare sista block.");
  } else if (profile.hotelArea === "local") {
    items.push("Planera hemresan lite tidigare på kvällen så att dagens sista del fortfarande känns mjuk.");
  } else {
    items.push("Lägg två minuter på att dubbelkolla hemvägen innan kvällen börjar. Framtida du kommer tacka dig.");
  }

  if (profile.pace === "calm") {
    items.push("Skala hellre bort ett stopp än att låta hela dagen kännas pressad.");
  } else if (profile.pace === "max") {
    items.push("Du kan lägga till ett extraspår idag, men bara efter att dagens huvudplan sitter.");
  } else {
    items.push(`Balanserat tempo vinner i ${guide.displayName}: ett starkt morgonblock, en riktig paus, sedan kväll.`);
  }

  return items;
}
