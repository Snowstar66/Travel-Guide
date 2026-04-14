"use client";

import Link from "next/link";
import { AppHeader } from "@/components/app-header";
import { CityFlag } from "@/components/city-flag";
import { NotesActions } from "@/components/notes-actions";
import { getCityGuide } from "@/lib/guide-config";
import {
  getTripBlockByDayId,
  hasAccessToDay,
  paceOptions,
  travelStyleOptions,
} from "@/lib/trip-logic";
import { useTripCompanionState } from "@/lib/use-trip-companion-state";

export function TripCompanionApp() {
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
        Number(right.assignedDayId === currentBlock.dayId) - Number(left.assignedDayId === currentBlock.dayId)
    )
    .slice(0, 5);

  return (
    <main className="page-shell page-shell--home">
      <AppHeader />

      <section className="panel dashboard-hero dashboard-hero--clean">
        <div className="dashboard-hero__locale">
          <CityFlag cityId={guide.id} className="dashboard-hero__flag dashboard-hero__flag--lead" />
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
          {currentBlock.label} fokuserar på {currentDay.title.toLowerCase()}. Du har byggt {selectedInCurrentBlock} stopp i det här blocket.
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
            <span>Fyllda block</span>
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

      <section className="overview-block-strip" aria-label="Planeringsblock">
        {tripBlocks.map((block) => {
          const isActive = block.dayId === currentBlock.dayId;
          const unlocked = hasAccessToDay(profile, block.dayId);

          return (
            <Link
              key={block.dayId}
              href={unlocked ? "/plan" : "/settings"}
              className={`overview-block-pill ${isActive ? "is-active" : ""} ${!unlocked ? "is-locked" : ""}`}
              onClick={() => {
                if (unlocked) {
                  updateProfile("currentDayId", block.dayId);
                }
              }}
            >
              <span>{block.rangeLabel}</span>
              <strong>{block.label}</strong>
            </Link>
          );
        })}
      </section>

      <section className="app-home-stack">
        <section className="app-home-card">
          <div className="panel__header">
            <p className="eyebrow eyebrow--dark">Ditt upplägg</p>
            <h2>Mina val</h2>
          </div>
          <div className="saved-grid saved-grid--single">
            <div>
              <h3>Aktuella stopp</h3>
              <div className="saved-list">
                {selectedHighlights.length === 0 ? (
                  <p className="saved-empty">
                    Lägg till stopp i planvyn så byggs din resa upp här.
                  </p>
                ) : (
                  selectedHighlights.map((stop) => (
                    <article className="saved-item" key={stop.id}>
                      <div className="saved-item__top">
                        <h4>{stop.displayName}</h4>
                        <span className="pill pill--soft">{stop.assignedDayTitle}</span>
                      </div>
                      <p>{stop.displayWhy}</p>
                    </article>
                  ))
                )}
              </div>
            </div>
          </div>
        </section>

        <section className="app-home-card">
          <div className="panel__header">
            <p className="eyebrow eyebrow--dark">Block</p>
            <h2>Så här ser resan ut just nu</h2>
          </div>
          <div className="trip-day-grid">
            {tripBlocks.map((block) => {
              const day = guide.tripDays.find((item) => item.id === block.dayId) ?? currentDay;
              const unlocked = hasAccessToDay(profile, block.dayId);
              const blockSelections = selectedStopItems.filter((stop) => stop.assignedDayId === block.dayId).length;

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
                      Öppna block
                    </Link>
                  ) : (
                    <button
                      className="button button--solid"
                      type="button"
                      onClick={() => setPremiumAccess(true)}
                    >
                      Lås upp blocket
                    </button>
                  )}
                </article>
              );
            })}
          </div>
        </section>

        <section className="app-home-card">
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

        <section className="panel profile-summary-panel">
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
              {profile.hasPremium ? "Premium aktivt" : "Free · första blocket öppet"}
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

        <section className="app-home-card">
          <div className="panel__header">
            <p className="eyebrow eyebrow--dark">Anteckningar</p>
            <h2>Det du vill minnas</h2>
          </div>
          <div className="saved-grid saved-grid--single">
            <div>
              <h3>Block med anteckningar</h3>
              <div className="saved-list">
                {notedDays.length === 0 ? (
                  <p className="saved-empty">Inga anteckningar än.</p>
                ) : (
                  notedDays.map((day) => (
                    <article className="saved-item" key={day.id}>
                      <div className="saved-item__top">
                        <h4>{day.title}</h4>
                        <span className="pill pill--soft">
                          {getTripBlockByDayId(profile, day.id)?.rangeLabel ?? `Dag ${day.dayNumber}`}
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
