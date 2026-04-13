"use client";

import type { CityId } from "@/lib/guide-config";

export function CityFlag({
  cityId,
  className = "",
}: {
  cityId: CityId;
  className?: string;
}) {
  return <span className={`city-flag city-flag--${cityId} ${className}`.trim()} aria-hidden="true" />;
}
