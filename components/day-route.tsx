"use client";

import { useState } from "react";
import { AreaMapPanel } from "@/components/area-map-panel";
import { CityFlag } from "@/components/city-flag";
import { DayDetailPanel } from "@/components/day-detail-panel";
import { WeatherPanel } from "@/components/weather-panel";
import { findTripDayById, getCityGuideByDayId } from "@/lib/guide-config";
import { getTripBlockByDayId, hasAccessToDay } from "@/lib/trip-logic";
import { useTripCompanionState } from "@/lib/use-trip-companion-state";

type DayView = "plan" | "weather" | "map";

export function DayRoute({ dayId }: { dayId: string }) {
  const {
    selectedStops,
    stopChoices,
    notes,
    profile,
    tripBlocks,
    recommendedStopCount,
    toggleSelected,
    moveSelectedStop,
    updateStopChoice,
    saveNote,
    setPremiumAccess,
  } = useTripCompanionState();
  const [activeView, setActiveView] = useState<DayView>("plan");

  const guide = getCityGuideByDayId(dayId);
  const day = findTripDayById(dayId) ?? guide?.tripDays[0];
  if (!guide || !day) return null;

  const block = getTripBlockByDayId(profile, day.id);
  const hasAccess = hasAccessToDay(profile, day.id);
  const isVisibleInTrip = Boolean(block);

  return (
    <main className="page-shell page-shell--route">
      <section className="screen-intro">
        <p className="screen-intro__kicker">Plan</p>
        <h1 className="screen-intro__title">{day.title}</h1>
        <p className="screen-intro__subtitle">
          <span className="screen-intro__city">
            <CityFlag cityId={guide.id} className="screen-intro__flag" />
            {guide.displayName}
          </span>{" "}
          · {block ? `${block.label} · ${block.rangeLabel}` : "Inte aktivt i den här reslängden"}.
        </p>
      </section>

      <section className="segmented-panel">
        <div className="segmented-control segmented-control--3" role="tablist" aria-label="Dagspårsvyer">
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
      </section>

      {!isVisibleInTrip ? (
        <section className="ios-group premium-lock-card">
          <div className="ios-group__header">
            <div>
              <p className="ios-group__eyebrow">Inte aktivt</p>
              <h2>Det här dagspåret ingår inte i nuvarande reslängd</h2>
            </div>
          </div>
          <p className="ios-group__copy">
            Öka antalet dagar i Inställningar om du vill att det här dagspåret ska bli en aktiv del av resan.
          </p>
        </section>
      ) : null}

      {isVisibleInTrip && !hasAccess ? (
        <section className="ios-group premium-lock-card">
          <div className="ios-group__header">
            <div>
              <p className="ios-group__eyebrow">Premiumspår</p>
              <h2>{block?.label ?? "Det här dagspåret"} väntar bakom Premium</h2>
            </div>
            <span className="ios-group__badge">Låst</span>
          </div>
          <p className="ios-group__copy">
            {day.title} finns redan förberedd i appen med plan, väder, karta och stopp, men öppnas först när Premium är aktivt.
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
          </div>
        </section>
      ) : null}

      {isVisibleInTrip && hasAccess && activeView === "plan" ? (
        <DayDetailPanel
          dayId={day.id}
          selectedStops={selectedStops}
          stopChoices={stopChoices}
          tripBlocks={tripBlocks}
          recommendedStopCount={recommendedStopCount}
          notes={notes}
          onToggleSelected={toggleSelected}
          onMoveSelected={moveSelectedStop}
          onUpdateStopChoice={updateStopChoice}
          onSaveNote={saveNote}
        />
      ) : null}

      {isVisibleInTrip && hasAccess && activeView === "weather" ? <WeatherPanel dayId={day.id} /> : null}
      {isVisibleInTrip && hasAccess && activeView === "map" ? <AreaMapPanel dayId={day.id} /> : null}
    </main>
  );
}
