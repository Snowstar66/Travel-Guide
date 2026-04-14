import type { AreaCard, RainPlan } from "@/lib/day-extras";
import type { GuideCard, GalleryItem, TripDay, TripSection, TripStop } from "@/lib/trip-data";

export type CityId =
  | "nyc"
  | "paris"
  | "milan"
  | "london"
  | "amsterdam"
  | "berlin"
  | "palma"
  | "malaga"
  | "estepona"
  | "marbella";
export type HotelAreaValue = "central" | "historic" | "local" | "unknown";

export type HotelAreaOption = {
  value: HotelAreaValue;
  label: string;
  hint: string;
};

export type CityTransportInfo = {
  title: string;
  summary: string;
  bullets: string[];
};

export type CityGuide = {
  id: CityId;
  displayName: string;
  flag: string;
  weather: {
    latitude: number;
    longitude: number;
    timezone: string;
  };
  currency: {
    base: string;
    quote: string;
  };
  maps: {
    cityQuery: string;
  };
  metadata: {
    appTitle: string;
    title: string;
    description: string;
  };
  transport: CityTransportInfo;
  hotelAreas: HotelAreaOption[];
  basics: GuideCard[];
  gallery: GalleryItem[];
  tripDays: TripDay[];
  areaCardsByDay: Record<string, AreaCard[]>;
  rainPlansByDay: Record<string, RainPlan>;
};

export type CityGuideSeed = Omit<CityGuide, "tripDays" | "areaCardsByDay" | "rainPlansByDay"> & {
  tripDays: TripDay[];
  areaCardsByDay: Record<string, AreaCard[]>;
  rainPlansByDay: Record<string, RainPlan>;
};

export function stop(
  id: string,
  name: string,
  duration: string,
  why: string,
  tip: string,
  food: string
): TripStop {
  return { id, name, duration, why, tip, food };
}

export function section(
  label: string,
  title: string,
  note: string,
  stops: TripStop[]
): TripSection {
  return { label, title, note, stops };
}

export function day(
  dayNumber: number,
  title: string,
  theme: string,
  energy: string,
  neighborhood: string,
  intro: string,
  story: string,
  sections: TripSection[]
): TripDay {
  return {
    id: `day-${dayNumber}`,
    dayNumber,
    title,
    theme,
    energy,
    neighborhood,
    intro,
    story,
    sections,
    options: [],
  };
}

export function area(
  id: string,
  name: string,
  vibe: string,
  whyItWorks: string,
  routeNote: string,
  anchorStops: string[],
  x: number,
  y: number,
  mapQuery: string
): AreaCard {
  return { id, name, vibe, whyItWorks, routeNote, anchorStops, x, y, mapQuery };
}

export function rainPlan(title: string, intro: string, swaps: string[]): RainPlan {
  return { title, intro, swaps };
}

export function mapLink(query: string) {
  return `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(query)}`;
}
