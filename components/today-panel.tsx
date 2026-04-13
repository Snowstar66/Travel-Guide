"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { StopMiniCard } from "@/components/stop-mini-card";
import { StopInsightPanel } from "@/components/stop-insight-panel";
import { getCityGuide } from "@/lib/guide-config";
import { getStopInsight } from "@/lib/stop-insights";
import { getTodayOptions, TravelerProfile } from "@/lib/trip-logic";
import { RecordState } from "@/lib/use-trip-companion-state";

export function TodayPanel({
  profile,
  checkedStops,
  onToggleChecked,
}: {
  profile: TravelerProfile;
  checkedStops: RecordState;
  onToggleChecked: (stopId: string) => void;
}) {
  const [showInsight, setShowInsight] = useState(false);
  const guide = getCityGuide(profile.cityId);
  const currentDay =
    guide.tripDays.find((day) => day.id === profile.currentDayId) ?? guide.tripDays[0];
  const currentDayStops = currentDay.sections.flatMap((section) => section.stops);
  const currentDayCompleted = currentDayStops.filter((stop) => checkedStops[stop.id]).length;
  const currentDayFocus =
    currentDayStops.find((stop) => !checkedStops[stop.id]) ?? currentDayStops[0];
  const currentDayOptions = getTodayOptions(profile);
  const dayProgress = Math.round((currentDayCompleted / currentDayStops.length) * 100);
  const focusInsight = getStopInsight(currentDayFocus.id);

  useEffect(() => {
    setShowInsight(false);
  }, [currentDayFocus.id]);

  return (
    <section className="today-native-stack" id="today">
      <section className="ios-group">
        <div className="ios-group__header">
          <div>
            <p className="ios-group__eyebrow">Nu</p>
            <h2>{currentDay.title}</h2>
          </div>
          <span className="ios-group__badge">{dayProgress}%</span>
        </div>
        <p className="ios-group__copy">{currentDay.theme}</p>
        <div className="ios-stat-grid">
          <article className="ios-stat">
            <span>Klara</span>
            <strong>
              {currentDayCompleted}/{currentDayStops.length}
            </strong>
          </article>
          <article className="ios-stat">
            <span>Nästa</span>
            <strong>{currentDayFocus.duration}</strong>
          </article>
        </div>
      </section>

      <section className="ios-group">
        <div className="ios-group__header">
          <div>
            <p className="ios-group__eyebrow">Nästa stopp</p>
            <h2>{currentDayFocus.name}</h2>
          </div>
          {focusInsight ? (
            <button
              className={`ios-info-button ${showInsight ? "is-active" : ""}`}
              type="button"
              aria-expanded={showInsight}
              aria-label={`Visa mer info om ${currentDayFocus.name}`}
              onClick={() => setShowInsight((open) => !open)}
            >
              i
            </button>
          ) : null}
        </div>
        <p className="ios-group__copy">{currentDayFocus.why}</p>
        <p className="ios-group__hint">{currentDayFocus.tip}</p>
        {focusInsight ? (
          <StopMiniCard
            stopId={currentDayFocus.id}
            expanded={showInsight}
            onToggle={() => setShowInsight((open) => !open)}
          />
        ) : null}
        {showInsight ? <StopInsightPanel stopId={currentDayFocus.id} /> : null}
        <div className="ios-group__actions">
          <button
            className={`button button--solid ${checkedStops[currentDayFocus.id] ? "is-dimmed" : ""}`}
            type="button"
            onClick={() => onToggleChecked(currentDayFocus.id)}
          >
            {checkedStops[currentDayFocus.id] ? "Ångra" : "Checka av"}
          </button>
          <Link className="button button--surface" href={`/day/${currentDay.id}`}>
            Öppna dagplan
          </Link>
        </div>
      </section>

      <section className="ios-group ios-group--list">
        <div className="ios-group__header">
          <div>
            <p className="ios-group__eyebrow">För dig</p>
            <h2>Kom ihåg</h2>
          </div>
        </div>
        <div className="ios-list">
          {currentDayOptions.slice(0, 3).map((item) => (
            <div className="ios-list__row" key={item}>
              <span>{item}</span>
            </div>
          ))}
        </div>
      </section>
    </section>
  );
}
