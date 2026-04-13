import {
  type CityGuide,
  type CityGuideSeed,
  type CityId,
  type HotelAreaOption,
  type HotelAreaValue,
} from "@/lib/guide-builders";
import { europeanGuideSeedsA } from "@/lib/guide-seeds-a";
import { europeanGuideSeedsB } from "@/lib/guide-seeds-b";

export function getGuideSeeds() {
  return [...europeanGuideSeedsA, ...europeanGuideSeedsB];
}

export type { CityGuide, CityGuideSeed, CityId, HotelAreaOption, HotelAreaValue };
