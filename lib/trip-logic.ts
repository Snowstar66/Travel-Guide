import { defaultCityId, getCityGuide, type CityId, type HotelAreaValue } from "@/lib/guide-config";

export type TravelerProfile = {
  cityId: CityId;
  travelStyle: "first-timer" | "icon-lover" | "neighborhood-hunter";
  hotelArea: HotelAreaValue;
  pace: "calm" | "balanced" | "max";
  currentDayId: string;
  tripLength: number;
  hasPremium: boolean;
};

export type ProfileOption<T extends string | number> = {
  value: T;
  label: string;
  hint: string;
};

export type TripBlock = {
  blockNumber: number;
  dayId: string;
  templateDayNumber: number;
  startDay: number;
  endDay: number;
  label: string;
  rangeLabel: string;
  shortLabel: string;
  merged: boolean;
};

export type SchedulePeriod = "morning" | "midday" | "evening";

export const minTripLength = 1;
export const maxTripLength = 10;

function clampTripLength(value: number | undefined) {
  if (!value || Number.isNaN(value)) return 5;
  return Math.min(maxTripLength, Math.max(minTripLength, Math.round(value)));
}

function getDefaultDayId(cityId: CityId) {
  return getCityGuide(cityId).tripDays[0]?.id ?? "day-1";
}

function buildRanges(totalDays: number, blockCount: number) {
  const ranges: Array<{ startDay: number; endDay: number }> = [];
  let cursor = 1;

  for (let index = 0; index < blockCount; index += 1) {
    const remainingDays = totalDays - cursor + 1;
    const remainingBlocks = blockCount - index;
    const span = Math.ceil(remainingDays / remainingBlocks);
    const endDay = cursor + span - 1;

    ranges.push({
      startDay: cursor,
      endDay,
    });

    cursor = endDay + 1;
  }

  return ranges;
}

export function getTripBlocks(profile: Pick<TravelerProfile, "cityId" | "tripLength">) {
  const guide = getCityGuide(profile.cityId);
  const tripLength = clampTripLength(profile.tripLength);
  const blockCount = Math.min(guide.tripDays.length, tripLength);
  const ranges = buildRanges(tripLength, blockCount);

  return guide.tripDays.slice(0, blockCount).map((day, index) => {
    const range = ranges[index];
    const merged = range.startDay !== range.endDay;
    const rangeLabel = merged ? `Dag ${range.startDay}-${range.endDay}` : `Dag ${range.startDay}`;

    return {
      blockNumber: index + 1,
      dayId: day.id,
      templateDayNumber: day.dayNumber,
      startDay: range.startDay,
      endDay: range.endDay,
      label: merged ? `Block ${index + 1}` : `Dag ${range.startDay}`,
      rangeLabel,
      shortLabel: merged ? `${range.startDay}-${range.endDay}` : `${range.startDay}`,
      merged,
    } satisfies TripBlock;
  });
}

export function getTripBlockByDayId(
  profile: Pick<TravelerProfile, "cityId" | "tripLength">,
  dayId: string
) {
  return getTripBlocks(profile).find((block) => block.dayId === dayId);
}

export const defaultProfile: TravelerProfile = {
  cityId: defaultCityId,
  travelStyle: "first-timer",
  hotelArea: "unknown",
  pace: "balanced",
  currentDayId: getDefaultDayId(defaultCityId),
  tripLength: 5,
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
  const tripLength = clampTripLength(profile.tripLength);
  const hotelArea =
    legacyHotelArea === "midtown"
      ? "central"
      : legacyHotelArea === "downtown"
        ? "historic"
        : legacyHotelArea === "brooklyn-queens"
          ? "local"
          : profile.hotelArea ?? "unknown";

  const base: TravelerProfile = {
    ...defaultProfile,
    ...profile,
    cityId: nextCityId,
    hotelArea,
    tripLength,
    currentDayId: profile.currentDayId ?? getDefaultDayId(nextCityId),
  };

  const visibleDayIds = new Set(getTripBlocks(base).map((block) => block.dayId));
  const currentDayId = visibleDayIds.has(base.currentDayId)
    ? base.currentDayId
    : getDefaultDayId(nextCityId);

  const next = {
    ...base,
    currentDayId,
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
    hint: "Bästa första läget för en flerdagarsresa.",
  },
  {
    value: "max",
    label: "Maxa",
    hint: "Tajtare block för dig som vet att du vill se mycket.",
  },
];

export const tripLengthOptions: ProfileOption<number>[] = Array.from(
  { length: maxTripLength - minTripLength + 1 },
  (_, index) => {
    const days = index + minTripLength;
    return {
      value: days,
      label: `${days} dagar`,
      hint:
        days <= 5
          ? `Appen visar ${days} aktiva planeringsblock.`
          : `Appen komprimerar ${days} dagar till fem planeringsblock.`,
    };
  }
);

export function getRecommendedStopCount(
  pace: TravelerProfile["pace"]
) {
  if (pace === "calm") return 3;
  if (pace === "max") return 5;
  return 4;
}

export function getSchedulePeriod(label: string, sectionIndex = 0): SchedulePeriod {
  const normalized = label.toLowerCase();

  if (
    normalized.includes("morgon") ||
    normalized.includes("förmiddag") ||
    normalized.includes("formiddag") ||
    normalized.includes("ankomst") ||
    normalized.includes("morning")
  ) {
    return "morning";
  }

  if (
    normalized.includes("kväll") ||
    normalized.includes("middag") ||
    normalized.includes("sen") ||
    normalized.includes("evening") ||
    normalized.includes("night")
  ) {
    return "evening";
  }

  if (
    normalized.includes("eftermiddag") ||
    normalized.includes("lunch") ||
    normalized.includes("afternoon")
  ) {
    return "midday";
  }

  if (sectionIndex <= 0) return "morning";
  if (sectionIndex >= 2) return "evening";
  return "midday";
}

export function getTodayOptions(profile: TravelerProfile) {
  const items: string[] = [];
  const guide = getCityGuide(profile.cityId);

  if (profile.travelStyle === "icon-lover") {
    items.push("Prioritera dagens största wow-stopp tidigt, innan köerna äter energin.");
  } else if (profile.travelStyle === "neighborhood-hunter") {
    items.push("Lämna extra promenadluft efter huvudstoppet så att kvarteren får plats.");
  } else {
    items.push("Håll dig till blockets kärnspår först. Känn efter innan du lägger till extrasaker.");
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
    items.push("Skala hellre bort ett stopp än att låta hela blocket kännas pressat.");
  } else if (profile.pace === "max") {
    items.push("Du kan lägga till ett extraspår idag, men bara efter att blockets huvudplan sitter.");
  } else {
    items.push(`Balanserat tempo vinner i ${guide.displayName}: ett starkt huvudblock, en riktig paus, sedan kväll.`);
  }

  return items;
}
