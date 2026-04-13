"use client";

import Link from "next/link";
import { AppHeader } from "@/components/app-header";
import { CityFlag } from "@/components/city-flag";
import { NotesActions } from "@/components/notes-actions";
import { OnboardingPanel } from "@/components/onboarding-panel";
import { TravelUtilityCards } from "@/components/travel-utility-cards";
import { getCityGuide } from "@/lib/guide-config";
import {
  hasAccessToDay,
  isPremiumDay,
  paceOptions,
  travelStyleOptions,
} from "@/lib/trip-logic";
import { useTripCompanionState } from "@/lib/use-trip-companion-state";

export function TripCompanionApp() {
  const {
    checkedStops,
    notes,
    profile,
    favoriteStops,
    notedDays,
    setPremiumAccess,
    updateProfile,
  } = useTripCompanionState();

  const guide = getCityGuide(profile.cityId);
  const tripDays = guide.tripDays;
  const basics = guide.basics;

  const currentDay =
    tripDays.find((day) => day.id === profile.currentDayId) ?? tripDays[0];
  const currentDayStops = currentDay.sections.flatMap((section) => section.stops);
  const currentDayCompleted = currentDayStops.filter((stop) => checkedStops[stop.id]).length;
  const nextFocus =
    currentDayStops.find((stop) => !checkedStops[stop.id]) ?? currentDayStops[0];
  const dayProgress = Math.round((currentDayCompleted / currentDayStops.length) * 100);
  const remainingStops = currentDayStops.length - currentDayCompleted;
  const travelStyle =
    travelStyleOptions.find((option) => option.value === profile.travelStyle) ??
    travelStyleOptions[0];
  const hotelArea =
    guide.hotelAreas.find((option) => option.value === profile.hotelArea) ??
    guide.hotelAreas[guide.hotelAreas.length - 1];
  const pace = paceOptions.find((option) => option.value === profile.pace) ?? paceOptions[1];

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
            <span className="dashboard-hero__badge">Dag {currentDay.dayNumber}/5</span>
          </div>
        </div>
        <h1>{currentDay.title}</h1>
        <p className="dashboard-hero__lead">
          {currentDay.theme}. {remainingStops} stopp återstår idag.
        </p>

        <article className="dashboard-stat dashboard-stat--primary">
          <span>Nästa steg</span>
          <strong>{nextFocus.name}</strong>
          <small>
            {nextFocus.duration} · {dayProgress}% klart idag
          </small>
        </article>

        <div className="dashboard-hero__actions">
          <Link className="button button--solid" href="/today">
            Öppna idag
          </Link>
          <Link className="button button--surface" href={`/day/${currentDay.id}`}>
            Öppna dagplan
          </Link>
        </div>
      </section>

      <section className="app-home-stack">
        <section className="app-home-card">
          <div className="panel__header">
            <p className="eyebrow eyebrow--dark">Minne</p>
            <h2>En sak att bära med dig idag</h2>
          </div>
          <article className="basic-card">
            <span className="basic-card__tag">{basics[0].tag}</span>
            <h3>{basics[0].title}</h3>
            <p>{basics[0].body}</p>
          </article>
        </section>

        <section className="app-home-card">
          <div className="panel__header">
            <p className="eyebrow eyebrow--dark">Praktiskt</p>
            <h2>Bild, karta, väder och valuta</h2>
          </div>
          <TravelUtilityCards cityId={profile.cityId} dayId={currentDay.id} />
        </section>

        <section className="app-home-card">
          <div className="panel__header">
            <p className="eyebrow eyebrow--dark">Resdagar</p>
            <h2>Dag 2-5 ligger redo bakom Premium</h2>
          </div>
          <div className="trip-day-grid">
            {tripDays.map((day) => {
              const unlocked = hasAccessToDay(profile, day.id);

              return (
                <article
                  key={day.id}
                  className={`trip-day-card ${unlocked ? "is-unlocked" : "is-locked"}`}
                >
                  <div className="trip-day-card__top">
                    <span className="trip-day-card__badge">Dag {day.dayNumber}</span>
                    {isPremiumDay(day.id) && !profile.hasPremium ? (
                      <span className="trip-day-card__badge trip-day-card__badge--lock">
                        Premium
                      </span>
                    ) : null}
                  </div>
                  <h3>{day.title}</h3>
                  <p>{day.theme}</p>
                  {unlocked ? (
                    <Link className="button button--surface" href={`/day/${day.id}`}>
                      Öppna dag
                    </Link>
                  ) : (
                    <button
                      className="button button--solid"
                      type="button"
                      onClick={() => setPremiumAccess(true)}
                    >
                      Lås upp dag 2-5
                    </button>
                  )}
                </article>
              );
            })}
          </div>
        </section>

        <section className="app-home-card">
          <div className="panel__header">
            <p className="eyebrow eyebrow--dark">Sparat</p>
            <h2>Favoriter och anteckningar</h2>
          </div>
          <div className="saved-grid">
            <div>
              <h3>Favoriter</h3>
              <div className="saved-list">
                {favoriteStops.length === 0 ? (
                  <p className="saved-empty">Inga favoriter än.</p>
                ) : (
                  favoriteStops.slice(0, 4).map((stop) => (
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

            <div>
              <h3>Anteckningar</h3>
              <div className="saved-list">
                {notedDays.length === 0 ? (
                  <p className="saved-empty">Inga anteckningar än.</p>
                ) : (
                  notedDays.slice(0, 3).map((day) => (
                    <article className="saved-item" key={day.id}>
                      <div className="saved-item__top">
                        <h4>{day.title}</h4>
                        <span className="pill pill--soft">Dag {day.dayNumber}</span>
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

        <section className="panel profile-summary-panel">
          <div className="panel__header">
            <p className="eyebrow eyebrow--dark">Nuvarande resa</p>
            <h2>Din profil just nu</h2>
          </div>
          <div className="focus-card__meta">
            <span className="focus-card__meta-item">{travelStyle.label}</span>
            <span className="focus-card__meta-item">{hotelArea.label}</span>
            <span className="focus-card__meta-item">{pace.label}</span>
            <span className="focus-card__meta-item">
              <CityFlag cityId={guide.id} className="focus-card__flag" /> {guide.displayName}
            </span>
            <span className="focus-card__meta-item">
              {profile.hasPremium ? "Premium aktivt" : "Free · Dag 1"}
            </span>
          </div>
        </section>

        <OnboardingPanel
          profile={profile}
          onUpdateProfile={updateProfile}
          onSetPremiumAccess={setPremiumAccess}
        />
      </section>
    </main>
  );
}
