"use client";

import Link from "next/link";
import { useState } from "react";
import { AppHeader } from "@/components/app-header";
import { AreaMapPanel } from "@/components/area-map-panel";
import { CityFlag } from "@/components/city-flag";
import { DayDetailPanel } from "@/components/day-detail-panel";
import { WeatherPanel } from "@/components/weather-panel";
import { findTripDayById, getCityGuideByDayId } from "@/lib/guide-config";
import { hasAccessToDay } from "@/lib/trip-logic";
import { useTripCompanionState } from "@/lib/use-trip-companion-state";

type DayView = "plan" | "weather" | "map";

export function DayRoute({ dayId }: { dayId: string }) {
  const {
    checkedStops,
    favorites,
    notes,
    profile,
    toggleChecked,
    toggleFavorite,
    saveNote,
    setPremiumAccess,
  } = useTripCompanionState();
  const [activeView, setActiveView] = useState<DayView>("plan");

  const guide = getCityGuideByDayId(dayId);
  const day = findTripDayById(dayId) ?? guide?.tripDays[0];
  if (!guide || !day) return null;
  const hasAccess = hasAccessToDay(profile, day.id);

  return (
    <main className="page-shell page-shell--route">
      <AppHeader />

      <section className="screen-intro">
        <p className="screen-intro__kicker">Dagplan</p>
        <h1 className="screen-intro__title">{day.title}</h1>
        <p className="screen-intro__subtitle">
          <span className="screen-intro__city">
            <CityFlag cityId={guide.id} className="screen-intro__flag" />
            {guide.displayName}
          </span>{" "}
          · Dag {day.dayNumber}. Växla mellan plan, väder och karta.
        </p>
      </section>

      <section className="segmented-panel">
        <div className="segmented-control segmented-control--3" role="tablist" aria-label="Dagvyer">
          <button
            className={`segmented-control__button ${activeView === "plan" ? "is-active" : ""}`}
            type="button"
            role="tab"
            aria-selected={activeView === "plan"}
            onClick={() => setActiveView("plan")}
          >
            Plan
          </button>
          <button
            className={`segmented-control__button ${activeView === "weather" ? "is-active" : ""}`}
            type="button"
            role="tab"
            aria-selected={activeView === "weather"}
            onClick={() => setActiveView("weather")}
          >
            Väder
          </button>
          <button
            className={`segmented-control__button ${activeView === "map" ? "is-active" : ""}`}
            type="button"
            role="tab"
            aria-selected={activeView === "map"}
            onClick={() => setActiveView("map")}
          >
            Karta
          </button>
        </div>

        <div className="quick-links">
          <Link className="quick-links__item" href="/today">
            Idag
          </Link>
          <Link className="quick-links__item" href="/">
            Hem
          </Link>
        </div>
      </section>

      {!hasAccess ? (
        <section className="ios-group premium-lock-card">
          <div className="ios-group__header">
            <div>
              <p className="ios-group__eyebrow">Premiumdag</p>
              <h2>Dag {day.dayNumber} väntar bakom Premium</h2>
            </div>
            <span className="ios-group__badge">Låst</span>
          </div>
          <p className="ios-group__copy">
            {day.title} finns redan förberedd i appen med plan, väder, karta och stopp, men den
            öppnas först när Premium är aktivt.
          </p>
          <p className="ios-group__hint">{day.theme}</p>
          <div className="ios-group__actions">
            <button
              className="button button--solid"
              type="button"
              onClick={() => setPremiumAccess(true)}
            >
              Lås upp Premium
            </button>
            <Link className="button button--surface" href="/">
              Tillbaka till Hem
            </Link>
          </div>
        </section>
      ) : null}

      {hasAccess && activeView === "plan" ? (
        <DayDetailPanel
          dayId={day.id}
          checkedStops={checkedStops}
          favorites={favorites}
          notes={notes}
          onToggleChecked={toggleChecked}
          onToggleFavorite={toggleFavorite}
          onSaveNote={saveNote}
        />
      ) : null}

      {hasAccess && activeView === "weather" ? <WeatherPanel dayId={day.id} /> : null}
      {hasAccess && activeView === "map" ? <AreaMapPanel dayId={day.id} /> : null}
    </main>
  );
}
