"use client";

import Link from "next/link";
import { useState } from "react";
import { AppHeader } from "@/components/app-header";
import { CityFlag } from "@/components/city-flag";
import { TodayPanel } from "@/components/today-panel";
import { WeatherPanel } from "@/components/weather-panel";
import { getCityGuide } from "@/lib/guide-config";
import { useTripCompanionState } from "@/lib/use-trip-companion-state";

type TodayView = "focus" | "weather";

export function TodayRoute() {
  const { profile, checkedStops, toggleChecked } = useTripCompanionState();
  const [activeView, setActiveView] = useState<TodayView>("focus");
  const guide = getCityGuide(profile.cityId);
  const currentDay =
    guide.tripDays.find((day) => day.id === profile.currentDayId) ?? guide.tripDays[0];

  return (
    <main className="page-shell page-shell--route">
      <AppHeader />

      <section className="screen-intro">
        <p className="screen-intro__kicker">Idag</p>
        <h1 className="screen-intro__title">På språng</h1>
        <p className="screen-intro__subtitle">
          <span className="screen-intro__city">
            <CityFlag cityId={guide.id} className="screen-intro__flag" />
            {guide.displayName}
          </span>{" "}
          · Dag {currentDay.dayNumber}. Växla mellan fokus och väder.
        </p>
      </section>

      <section className="segmented-panel">
        <div className="segmented-control" role="tablist" aria-label="Today-vyer">
          <button
            className={`segmented-control__button ${
              activeView === "focus" ? "is-active" : ""
            }`}
            type="button"
            role="tab"
            aria-selected={activeView === "focus"}
            onClick={() => setActiveView("focus")}
          >
            Fokus
          </button>
          <button
            className={`segmented-control__button ${
              activeView === "weather" ? "is-active" : ""
            }`}
            type="button"
            role="tab"
            aria-selected={activeView === "weather"}
            onClick={() => setActiveView("weather")}
          >
            Väder
          </button>
        </div>

        <div className="quick-links">
          <Link className="quick-links__item" href="/">
            Hem
          </Link>
          <Link className="quick-links__item" href={`/day/${profile.currentDayId}`}>
            Dagplan
          </Link>
        </div>
      </section>

      {activeView === "focus" ? (
        <TodayPanel
          profile={profile}
          checkedStops={checkedStops}
          onToggleChecked={toggleChecked}
        />
      ) : (
        <WeatherPanel dayId={profile.currentDayId} />
      )}
    </main>
  );
}
