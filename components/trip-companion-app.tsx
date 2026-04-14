"use client";

import { useState } from "react";
import Link from "next/link";
import { AppHeader } from "@/components/app-header";
import { CityFlag } from "@/components/city-flag";
import { NotesActions } from "@/components/notes-actions";
import { getCityGuide } from "@/lib/guide-config";
import { getStopInsight, getStopInsightPreview } from "@/lib/stop-insights";
import {
  getTripBlockByDayId,
  hasAccessToDay,
  paceOptions,
  travelStyleOptions,
} from "@/lib/trip-logic";
import { useTripCompanionState } from "@/lib/use-trip-companion-state";

export function TripCompanionApp() {
  const [expandedSavedStopId, setExpandedSavedStopId] = useState<string | null>(null);
  const {
    notes,
    profile,
    tripBlocks,
    selectedStopItems,
    notedDays,
    setPremiumAccess,
    updateProfile,
  } = useTripCompanionState();

  const guide = getCityGuide(profile.cityId);
  const basics = guide.basics;
  const currentDay =
    guide.tripDays.find((day) => day.id === profile.currentDayId) ?? guide.tripDays[0];
  const currentBlock = getTripBlockByDayId(profile, currentDay.id) ?? tripBlocks[0];
  const currentDayStops = currentDay.sections.flatMap((section) => section.stops);
  const selectedInCurrentBlock = selectedStopItems.filter(
    (stop) => stop.assignedDayId === currentBlock.dayId
  ).length;
  const nextSuggested =
    currentDayStops.find((stop) => !selectedStopItems.some((item) => item.id === stop.id)) ??
    currentDayStops[0];
  const travelStyle =
    travelStyleOptions.find((option) => option.value === profile.travelStyle) ??
    travelStyleOptions[0];
  const hotelArea =
    guide.hotelAreas.find((option) => option.value === profile.hotelArea) ??
    guide.hotelAreas[guide.hotelAreas.length - 1];
  const pace = paceOptions.find((option) => option.value === profile.pace) ?? paceOptions[1];
  const filledBlockCount = tripBlocks.filter((block) =>
    selectedStopItems.some((stop) => stop.assignedDayId === block.dayId)
  ).length;
  const selectedHighlights = selectedStopItems
    .slice()
    .sort(
      (left, right) =>
        Number(right.assignedDayId === currentBlock.dayId) -
        Number(left.assignedDayId === currentBlock.dayId)
    )
    .slice(0, 6);

  function getSavedStopSource(stop: (typeof selectedStopItems)[number]) {
    if (stop.customLink) {
      return { label: "Ditt tips", url: stop.customLink };
    }

    if (stop.choiceOption) {
      return {
        label: stop.choiceOption.sourceLabel,
        url: stop.choiceOption.sourceUrl,
      };
    }

    const insight = getStopInsight(stop.id);
    return insight?.links[0];
  }

  return (
    <main className="page-shell page-shell--home">
      <AppHeader />

      <section className="panel dashboard-hero dashboard-hero--clean">
        <div className="dashboard-hero__locale">
          <CityFlag
            cityId={guide.id}
            className="dashboard-hero__flag dashboard-hero__flag--lead"
          />
          <span>{guide.displayName}</span>
        </div>
        <div className="dashboard-hero__topline">
          <span className="dashboard-hero__eyebrow">Översikt</span>
          <div className="dashboard-hero__meta">
            <span className="dashboard-hero__badge">{currentBlock.rangeLabel}</span>
          </div>
        </div>
        <h1>{guide.displayName} just nu</h1>
        <p className="dashboard-hero__lead">
          {currentBlock.label} fokuserar på {currentDay.title.toLowerCase()}. Du har byggt{" "}
          {selectedInCurrentBlock} stopp i det här dagspåret.
        </p>

        <article className="dashboard-stat dashboard-stat--primary">
          <span>Nästa rekommenderade val</span>
          <strong>{nextSuggested.name}</strong>
          <small>
            {nextSuggested.duration} · {currentDay.theme}
          </small>
        </article>

        <div className="overview-hero-metrics">
          <div className="overview-hero-metric">
            <span>Totalt valt</span>
            <strong>{selectedStopItems.length} stopp</strong>
          </div>
          <div className="overview-hero-metric">
            <span>Fyllda dagspår</span>
            <strong>
              {filledBlockCount}/{tripBlocks.length}
            </strong>
          </div>
          <div className="overview-hero-metric">
            <span>Tempo</span>
            <strong>{pace.label}</strong>
          </div>
        </div>
      </section>

      <section className="app-home-stack">
        <section className="app-home-card app-home-card--selected">
          <div className="panel__header">
            <p className="eyebrow eyebrow--dark">Ditt upplägg</p>
            <h2>Mina val</h2>
          </div>
          <div className="saved-grid saved-grid--single">
            <div>
              <h3>Aktuella stopp</h3>
              <div className="saved-list saved-list--highlights saved-list--wide">
                {selectedHighlights.length === 0 ? (
                  <p className="saved-empty">
                    Lägg till stopp i planvyn så byggs din resa upp här.
                  </p>
                ) : (
                  selectedHighlights.map((stop) => {
                    const preview = getStopInsightPreview(stop.id);
                    const insight = getStopInsight(stop.id);
                    const assignedBlock = getTripBlockByDayId(profile, stop.assignedDayId);
                    const source = getSavedStopSource(stop);
                    const isExpanded = expandedSavedStopId === stop.id;

                    return (
                      <article
                        className={`saved-item saved-item--interactive saved-item--horizontal ${
                          preview?.imageUrl ? "saved-item--with-image" : ""
                        } ${isExpanded ? "is-expanded" : ""}`}
                        key={stop.id}
                        role="button"
                        tabIndex={0}
                        aria-expanded={isExpanded}
                        onClick={() => setExpandedSavedStopId(isExpanded ? null : stop.id)}
                        onKeyDown={(event) => {
                          if (event.key === "Enter" || event.key === " ") {
                            event.preventDefault();
                            setExpandedSavedStopId(isExpanded ? null : stop.id);
                          }
                        }}
                      >
                        <div className="saved-item__inner">
                          <div className="saved-item__face saved-item__face--front">
                            {preview?.imageUrl ? (
                              <img
                                className="saved-item__image"
                                src={preview.imageUrl}
                                alt={preview.imageAlt ?? stop.displayName}
                              />
                            ) : null}
                            <div className="saved-item__top">
                              <div>
                                {preview?.eyebrow ? (
                                  <span className="saved-item__eyebrow">{preview.eyebrow}</span>
                                ) : null}
                                <h4>{stop.displayName}</h4>
                              </div>
                              <span className="pill pill--soft">{stop.sectionTitle}</span>
                            </div>
                            <div className="saved-item__meta">
                              <span className="saved-item__track">
                                {`Dag ${stop.assignedDayNumber}`}
                              </span>
                              <span className="pill pill--soft">{stop.assignedDayTitle}</span>
                            </div>
                            <p>{preview?.copy ?? stop.displayWhy}</p>
                          </div>

                          <div className="saved-item__face saved-item__face--back">
                            <div className="saved-item__top saved-item__top--stacked">
                              <div>
                                <span className="saved-item__eyebrow">Mer om stoppet</span>
                                <h4>{stop.displayName}</h4>
                              </div>
                              <span className="pill pill--soft">{`Dag ${stop.assignedDayNumber}`}</span>
                            </div>
                            <div className="saved-item__meta saved-item__meta--back">
                              <span className="saved-item__track">{stop.assignedDayTitle}</span>
                              <span className="pill pill--soft">{stop.sectionTitle}</span>
                            </div>
                            <p>{insight?.facts[0] ?? stop.displayWhy}</p>
                            {insight?.ideas[0] ? (
                              <p className="saved-item__hint">{insight.ideas[0]}</p>
                            ) : null}
                            {source ? (
                              <Link
                                className="saved-item__source"
                                href={source.url}
                                target="_blank"
                                rel="noreferrer"
                                onClick={(event) => event.stopPropagation()}
                              >
                                Källa: {source.label}
                              </Link>
                            ) : null}
                          </div>
                        </div>
                      </article>
                    );
                  })
                )}
              </div>
            </div>
          </div>
        </section>

        <section className="app-home-card app-home-card--tracks">
          <div className="panel__header">
            <p className="eyebrow eyebrow--dark">Dagspår</p>
            <h2>Så här ser resan ut just nu</h2>
          </div>
          <div className="trip-day-grid">
            {tripBlocks.map((block) => {
              const day = guide.tripDays.find((item) => item.id === block.dayId) ?? currentDay;
              const unlocked = hasAccessToDay(profile, block.dayId);
              const blockSelections = selectedStopItems.filter(
                (stop) => stop.assignedDayId === block.dayId
              ).length;

              return (
                <article
                  key={block.dayId}
                  className={`trip-day-card ${unlocked ? "is-unlocked" : "is-locked"}`}
                >
                  <div className="trip-day-card__top">
                    <span className="trip-day-card__badge">{block.rangeLabel}</span>
                    {!unlocked ? (
                      <span className="trip-day-card__badge trip-day-card__badge--lock">
                        Premium
                      </span>
                    ) : null}
                  </div>
                  <h3>{day.title}</h3>
                  <p>{day.theme}</p>
                  <p className="trip-day-card__meta">{blockSelections} valda stopp</p>
                  {unlocked ? (
                    <Link
                      className="button button--surface"
                      href="/plan"
                      onClick={() => updateProfile("currentDayId", block.dayId)}
                    >
                      Öppna dagspår
                    </Link>
                  ) : (
                    <button
                      className="button button--solid"
                      type="button"
                      onClick={() => setPremiumAccess(true)}
                    >
                      Lås upp dagspåret
                    </button>
                  )}
                </article>
              );
            })}
          </div>
        </section>

        <section className="app-home-card app-home-card--insight">
          <div className="panel__header">
            <p className="eyebrow eyebrow--dark">En sak att bära med dig</p>
            <h2>{basics[0].title}</h2>
          </div>
          <article className="basic-card">
            <span className="basic-card__tag">{basics[0].tag}</span>
            <p>{basics[0].body}</p>
            <div className="overview-inline-links">
              <Link className="utility-link" href="/city">
                Mer stadskunskap
              </Link>
              <Link className="utility-link" href="/schedule">
                Se hela schemat
              </Link>
            </div>
          </article>
        </section>

        <section className="panel profile-summary-panel app-home-card app-home-card--settings">
          <div className="panel__header">
            <p className="eyebrow eyebrow--dark">Inställningar i korthet</p>
            <h2>Resan är viktad efter dina val</h2>
          </div>
          <div className="focus-card__meta">
            <span className="focus-card__meta-item">{travelStyle.label}</span>
            <span className="focus-card__meta-item">{hotelArea.label}</span>
            <span className="focus-card__meta-item">{pace.label}</span>
            <span className="focus-card__meta-item">{profile.tripLength} dagar</span>
            <span className="focus-card__meta-item">
              {profile.hasPremium ? "Premium aktivt" : "Free · första dagspåret öppet"}
            </span>
          </div>
          <div className="dashboard-hero__actions">
            <Link className="button button--surface" href="/settings">
              Öppna inställningar
            </Link>
            <Link className="button button--surface" href="/city">
              Öppna stadsguiden
            </Link>
          </div>
        </section>

        <section className="app-home-card app-home-card--notes">
          <div className="panel__header">
            <p className="eyebrow eyebrow--dark">Anteckningar</p>
            <h2>Det du vill minnas</h2>
          </div>
          <div className="saved-grid saved-grid--single">
            <div>
              <h3>Dagspår med anteckningar</h3>
              <div className="saved-list">
                {notedDays.length === 0 ? (
                  <p className="saved-empty">Inga anteckningar än.</p>
                ) : (
                  notedDays.map((day) => (
                    <article className="saved-item" key={day.id}>
                      <div className="saved-item__top">
                        <h4>{day.title}</h4>
                        <span className="pill pill--soft">
                          {getTripBlockByDayId(profile, day.id)?.rangeLabel ??
                            `Dag ${day.dayNumber}`}
                        </span>
                      </div>
                      <p>{notes[day.id]}</p>
                    </article>
                  ))
                )}
              </div>
              <NotesActions notes={notes} profile={profile} />
            </div>
          </div>
        </section>
      </section>
    </main>
  );
}
