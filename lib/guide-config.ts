import { areaCardsByDay as nycAreaCardsByDay, rainPlansByDay as nycRainPlansByDay } from "@/lib/day-extras";
import {
  basics as nycBasics,
  gallery as nycGallery,
  tripDays as nycTripDays,
  wowFacts as nycWowFacts,
} from "@/lib/trip-data";
import {
  type CityGuide,
  type CityGuideSeed,
  type CityId,
  getGuideSeeds,
} from "@/lib/guide-seed-index";

function prefixGuide(seed: CityGuideSeed): CityGuide {
  const tripDays = seed.tripDays.map((dayItem) => ({
    ...dayItem,
    id: `${seed.id}-${dayItem.id}`,
    sections: dayItem.sections.map((sectionItem) => ({
      ...sectionItem,
      stops: sectionItem.stops.map((stopItem) => ({
        ...stopItem,
        id: `${seed.id}-${stopItem.id}`,
      })),
    })),
  }));

  const dayIdMap = new Map(seed.tripDays.map((dayItem) => [dayItem.id, `${seed.id}-${dayItem.id}`]));

  const areaCardsByDay = Object.fromEntries(
    Object.entries(seed.areaCardsByDay).map(([dayId, cards]) => [
      dayIdMap.get(dayId) ?? `${seed.id}-${dayId}`,
      cards.map((card) => ({
        ...card,
        id: `${seed.id}-${card.id}`,
      })),
    ])
  );

  const rainPlansByDay = Object.fromEntries(
    Object.entries(seed.rainPlansByDay).map(([dayId, plan]) => [
      dayIdMap.get(dayId) ?? `${seed.id}-${dayId}`,
      plan,
    ])
  );

  return {
    ...seed,
    wowFacts: seed.wowFacts ?? [],
    tripDays,
    areaCardsByDay,
    rainPlansByDay,
  };
}

const nycGuide = prefixGuide({
  id: "nyc",
  displayName: "New York",
  flag: "us",
  weather: {
    latitude: 40.7128,
    longitude: -74.006,
    timezone: "America/New_York",
  },
  currency: {
    base: "USD",
    quote: "SEK",
  },
  maps: {
    cityQuery: "New York City",
  },
  metadata: {
    appTitle: "Trip Companion",
    title: "Trip Companion New York",
    description:
      "A calm five-day New York City guide for first-time visitors, built to be enjoyable on the plane and useful on the ground.",
  },
  transport: {
    title: "Tunnelbana och OMNY",
    summary:
      "New York fungerar bäst när du använder subway som ryggrad och låter buss eller promenad fylla sista biten.",
    bullets: [
      "Ta en kort testtur dag 1 så att systemet känns vardagligt innan du behöver det på riktigt.",
      "Använd samma kort eller mobil under veckan om du vill hålla betalflödet enkelt.",
      "Lägg alltid extra fokus på rätt riktning downtown/uptown innan du går ner på plattformen.",
    ],
  },
  hotelAreas: [
    {
      value: "central",
      label: "Midtown",
      hint: "Bra om du vill ha snabb access till flera klassiska stopp.",
    },
    {
      value: "historic",
      label: "Downtown",
      hint: "Bra om du vill ha närhet till vatten, Lower Manhattan och lugnare kvällsstart.",
    },
    {
      value: "local",
      label: "Brooklyn / Queens",
      hint: "Bra för dig som gärna låter resan bli lite mer lokal.",
    },
    {
      value: "unknown",
      label: "Inte bestämt än",
      hint: "Helt okej. Appen fortsätter med ett neutralt upplägg.",
    },
  ],
  basics: nycBasics,
  wowFacts: nycWowFacts,
  gallery: nycGallery,
  tripDays: nycTripDays,
  areaCardsByDay: nycAreaCardsByDay,
  rainPlansByDay: nycRainPlansByDay,
});

export const cityGuides = {
  nyc: nycGuide,
  ...Object.fromEntries(getGuideSeeds().map((seed) => [seed.id, prefixGuide(seed)])),
} as Record<CityId, CityGuide>;

export const cityOptions = [
  cityGuides.nyc,
  cityGuides.paris,
  cityGuides.milan,
  cityGuides.london,
  cityGuides.amsterdam,
  cityGuides.berlin,
  cityGuides.palma,
  cityGuides.malaga,
  cityGuides.estepona,
  cityGuides.marbella,
] as const;

const premiumCityIds = new Set<CityId>(["paris", "milan", "london", "amsterdam", "berlin", "malaga"]);
export const premiumCityPriceSek = 99;

export const defaultCityId: CityId = "nyc";

export function getCityGuide(cityId: CityId) {
  return cityGuides[cityId] ?? cityGuides[defaultCityId];
}

export function cityRequiresPremium(cityId: CityId) {
  return premiumCityIds.has(cityId);
}

export function getHotelAreaOptions(cityId: CityId) {
  return getCityGuide(cityId).hotelAreas;
}

export function getAllTripDays() {
  return cityOptions.flatMap((city) => city.tripDays);
}

export function findTripDayById(dayId: string) {
  return getAllTripDays().find((dayItem) => dayItem.id === dayId);
}

export function getCityGuideByDayId(dayId: string) {
  return cityOptions.find((city) => city.tripDays.some((dayItem) => dayItem.id === dayId));
}

export function getAllDayIds() {
  return getAllTripDays().map((dayItem) => dayItem.id);
}

export type { CityGuide, CityGuideSeed, CityId, HotelAreaValue } from "@/lib/guide-seed-index";
