"use client";

import { DayRoute } from "@/components/day-route";
import { useTripCompanionState } from "@/lib/use-trip-companion-state";

export function PlanRoute() {
  const { profile } = useTripCompanionState();
  return <DayRoute dayId={profile.currentDayId} />;
}
