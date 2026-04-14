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
    selectedStops,
    notes,
    profile,
    tripBlocks,
    selectedCount,
    selectedStopItems,
    notedDays,
    setPremiumAccess,
    updateProfile,
  } = useTripCompanionState();

  const guide = getCityGuide(profile.cityId);
  const basics = guide.basics;
  const currentDay =
    guide.tripDays.find((day) => day.id === profile.currentDayId) ?? guide.tripDays[0];
  const currentBlock =
    getTripBlockByDayId(profile, currentDay.id) ?? tripBlocks[0];
  const currentDayStops = currentDay.sections.flatMap((section) => section.stops);
  const selectedInCurrentBlock = currentDayStops.filter((stop) => selectedStops[stop.id]).length;
  const nextSuggested =
    currentDayStops.find((stop) => !selectedStops[stop.id]) ?? currentDayStops[0];
  const travelStyle =
    travelStyleOptions.find((option) => option.value === profile.travelStyle) ??
    travelStyleOptions[0];
  const hotelArea =
    guide.hotelAreas.find((option) => option.value === profile.hotelArea) ??
    guide.hotelAreas[guide.hotelAreas.length - 1];
  const pace = paceOptions.find((option) => option.value === profile.pace) ?? paceOptions[1];
  const selectedHighlights = selectedStopItems
    .slice()
    .sort((left, right) => Number(right.dayId === currentDay.id) - Number(left.dayId === currentDay.id))
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
          {currentBlock.label} fokuserar på {currentDay.title.toLowerCase()}. Du har valt{" "}
          {selectedInCurrentBlock} av {currentDayStops.length} stopp i det här blocket.
        </p>

        <article className="dashboard-stat dashboard-stat--primary">
          <span>Nästa rekommenderade val</span>
          <strong>{nextSuggested.name}</strong>
          <small>
            {nextSuggested.duration} · {currentDay.theme}
          </small>
        </article>

        <div className="dashboard-hero__actions">
          <Link className="button button--solid" href="/plan">
            Öppna plan
          </Link>
          <Link className="button button--surface" href="/city">
            Läs om staden
          </Link>
        </div>
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
                    Välj stopp i planvyn så byggs din resa upp här.
                  </p>
                ) : (
                  selectedHighlights.map((stop) => (
                    <article className="saved-item" key={stop.id}>
                      <div className="saved-item__top">
                        <h4>{stop.name}</h4>
                        <span className="pill pill--soft">{stop.dayTitle}</span>
                      </div>
                      <p>{stop.why}</p>
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
