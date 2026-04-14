"use client";

import Link from "next/link";
import { CityFlag } from "@/components/city-flag";
import { getCityGuide } from "@/lib/guide-config";
import { SchedulePeriod } from "@/lib/trip-logic";
import { getStopInsight, getStopInsightPreview } from "@/lib/stop-insights";
import { useTripCompanionState } from "@/lib/use-trip-companion-state";

const periodMeta: Array<{ key: SchedulePeriod; label: string; startMinutes: number }> = [
  { key: "morning", label: "Morgon", startMinutes: 9 * 60 },
  { key: "midday", label: "Eftermiddag", startMinutes: 13 * 60 },
  { key: "evening", label: "Kväll", startMinutes: 18 * 60 + 30 },
];

function parseDurationMinutes(duration: string) {
  const matches = duration.match(/\d+/g)?.map(Number) ?? [];
  if (matches.length === 0) return 60;
  if (matches.length === 1) return matches[0];
  return Math.round((matches[0] + matches[1]) / 2);
}

function formatClock(totalMinutes: number) {
  const hours = Math.floor(totalMinutes / 60)
    .toString()
    .padStart(2, "0");
  const minutes = (totalMinutes % 60).toString().padStart(2, "0");
  return `${hours}.${minutes}`;
}

export function ScheduleRoute() {
  const { profile, tripBlocks, selectedStopItems, recommendedStopCount, updateProfile } =
    useTripCompanionState();
  const guide = getCityGuide(profile.cityId);

  return (
    <main className="page-shell page-shell--route">
      <section className="screen-intro">
        <p className="screen-intro__kicker">Schema</p>
        <h1 className="screen-intro__title">Så här ser hela vistelsen ut</h1>
        <p className="screen-intro__subtitle">
          <span className="screen-intro__city">
            <CityFlag cityId={guide.id} className="screen-intro__flag" />
            {guide.displayName}
          </span>{" "}
          · dina val, bilder, länkar och block samlade som en riktig reseplan.
        </p>
      </section>

      <section className="schedule-stack">
        {tripBlocks.map((block) => {
          const day = guide.tripDays.find((item) => item.id === block.dayId) ?? guide.tripDays[0];
          const items = selectedStopItems
            .filter((stop) => stop.assignedDayId === block.dayId)
            .sort((left, right) => {
              if (left.sectionIndex !== right.sectionIndex) {
                return left.sectionIndex - right.sectionIndex;
              }
              return left.stopIndex - right.stopIndex;
            });
          const overloaded = items.length > recommendedStopCount;

          return (
            <section className="ios-group schedule-block" key={block.dayId}>
              <div className="ios-group__header">
                <div>
                  <p className="ios-group__eyebrow">{block.rangeLabel}</p>
                  <h2>{day.title}</h2>
                </div>
                <span className="ios-group__badge">{items.length} stopp</span>
              </div>
              <p className="ios-group__copy">{day.theme}</p>
              {overloaded ? (
                <p className="ios-group__hint ios-group__hint--warning">
                  Det här blocket är tätare än rekommenderat. Du kan behålla det så, eller öppna plan och flytta något.
                </p>
              ) : null}
              <div className="schedule-block__actions">
                <Link
                  className="button button--surface"
                  href="/plan"
                  onClick={() => updateProfile("currentDayId", block.dayId)}
                >
                  Justera block
                </Link>
              </div>

              {items.length === 0 ? (
                <p className="schedule-empty">Inget valt ännu. Lägg till stopp i planvyn för att bygga det här blocket.</p>
              ) : (
                <div className="schedule-day-table">
                  {periodMeta.map((period) => {
                    const periodItems = items.filter((item) => item.schedulePeriod === period.key);
                    let cursor = period.startMinutes;

                    return (
                      <section className="schedule-period" key={period.key}>
                        <div className="schedule-period__header">
                          <p className="schedule-period__label">{period.label}</p>
                          <span className="schedule-period__count">{periodItems.length} stopp</span>
                        </div>

                        {periodItems.length === 0 ? (
                          <p className="schedule-period__empty">Inget planerat här ännu.</p>
                        ) : (
                          <div className="schedule-card-list">
                            {periodItems.map((stop) => {
                              const preview = getStopInsightPreview(stop.id);
                              const insight = getStopInsight(stop.id);
                              const startTime = formatClock(cursor);
                              cursor += parseDurationMinutes(stop.duration) + 20;

                              return (
                                <article className="schedule-card" key={stop.id}>
                                  {preview?.imageUrl ? (
                                    <img
                                      className="schedule-card__image"
                                      src={preview.imageUrl}
                                      alt={preview.imageAlt ?? stop.name}
                                    />
                                  ) : null}
                                  <div className="schedule-card__body">
                                    <div className="schedule-card__top">
                                      <div>
                                        <p className="schedule-card__eyebrow">
                                          {preview?.eyebrow ?? "Valt stopp"}
                                        </p>
                                        <h3>{stop.name}</h3>
                                      </div>
                                      <div className="schedule-card__time">
                                        <span>{startTime}</span>
                                        <strong>{stop.duration}</strong>
                                      </div>
                                    </div>
                                    <p>{preview?.copy ?? stop.why}</p>
                                    <p className="schedule-card__slot">{stop.sectionTitle}</p>
                                    {stop.dayId !== block.dayId ? (
                                      <p className="schedule-card__meta">
                                        Ursprungligen föreslaget i {stop.dayTitle}.
                                      </p>
                                    ) : null}
                                    {insight?.links.length ? (
                                      <div className="schedule-card__links">
                                        {insight.links.slice(0, 2).map((link) => (
                                          <a
                                            key={link.url}
                                            className="stop-insight-panel__link"
                                            href={link.url}
                                            target="_blank"
                                            rel="noreferrer"
                                          >
                                            {link.label}
                                          </a>
                                        ))}
                                      </div>
                                    ) : null}
                                  </div>
                                </article>
                              );
                            })}
                          </div>
                        )}
                      </section>
                    );
                  })}
                </div>
              )}
            </section>
          );
        })}
      </section>
    </main>
  );
}
