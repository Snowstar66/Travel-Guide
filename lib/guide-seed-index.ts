import {
  type CityGuide,
  type CityGuideSeed,
  type CityId,
  type HotelAreaOption,
  type HotelAreaValue,
} from "@/lib/guide-builders";
import { europeanGuideSeedsA } from "@/lib/guide-seeds-a";
import { europeanGuideSeedsB } from "@/lib/guide-seeds-b";
import { europeanGuideSeedsC } from "@/lib/guide-seeds-c";

export function getGuideSeeds() {
  return [...europeanGuideSeedsA, ...europeanGuideSeedsB, ...europeanGuideSeedsC];
}

export type { CityGuide, CityGuideSeed, CityId, HotelAreaOption, HotelAreaValue };
