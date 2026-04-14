"use client";

import Link from "next/link";
import { Fragment, type CSSProperties, useMemo, useState } from "react";
import { CityFlag } from "@/components/city-flag";
import { getCityGuide } from "@/lib/guide-config";
import { SchedulePeriod } from "@/lib/trip-logic";
import { getStopInsight, getStopInsightPreview } from "@/lib/stop-insights";
import { useTripCompanionState } from "@/lib/use-trip-companion-state";

function TrashIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24">
      <path
        d="M9 4.75h6l.55 1.5H19a.75.75 0 1 1 0 1.5h-1.1l-.74 10.16a2 2 0 0 1-1.99 1.84H8.83a2 2 0 0 1-1.99-1.84L6.1 7.75H5a.75.75 0 0 1 0-1.5h3.45L9 4.75Zm-1.4 3 .73 10.05a.5.5 0 0 0 .5.45h6.34a.5.5 0 0 0 .5-.45l.73-10.05H7.6Zm2.9 2.25c.41 0 .75.34.75.75v4.5a.75.75 0 0 1-1.5 0v-4.5c0-.41.34-.75.75-.75Zm3 0c.41 0 .75.34.75.75v4.5a.75.75 0 0 1-1.5 0v-4.5c0-.41.34-.75.75-.75Z"
        fill="currentColor"
      />
    </svg>
  );
}

const periodMeta: Array<{
  key: SchedulePeriod;
  label: string;
  startMinutes: number;
  endMinutes: number;
}> = [
  { key: "morning", label: "Morgon", startMinutes: 9 * 60, endMinutes: 12 * 60 + 30 },
  { key: "midday", label: "Eftermiddag", startMinutes: 13 * 60, endMinutes: 17 * 60 },
  { key: "evening", label: "Kväll", startMinutes: 18 * 60 + 30, endMinutes: 22 * 60 },
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

function getBoardTone(item: ScheduleItem) {
  const source = `${item.sectionTitle} ${item.displayName} ${item.displayWhy ?? item.why}`.toLowerCase();

  if (
    /(museum|muse|gallery|galleri|art|konst|cathedral|katedral|history|historia)/.test(source)
  ) {
    return { key: "culture", label: "Kultur" } as const;
  }

  if (/(food|lunch|dinner|brunch|market|bagel|pizza|cafe|bar|vin|cocktail)/.test(source)) {
    return { key: "food", label: "Mat" } as const;
  }

  if (/(park|garden|beach|sea|harbor|hamn|coast|strand|water|promenade|nature)/.test(source)) {
    return { key: "outdoor", label: "Ute" } as const;
  }

  if (/(view|deck|skyline|tower|rooftop|ferry|boat|bridge|lookout|mirador)/.test(source)) {
    return { key: "view", label: "Utsikt" } as const;
  }

  return { key: "city", label: "Stad" } as const;
}

type ScheduleItem = ReturnType<typeof useTripCompanionState>["selectedStopItems"][number];

type TimedScheduleItem = ScheduleItem & {
  startTime: string;
  endTime: string;
  startMinutesValue: number;
  endMinutesValue: number;
  boardRowStart: number;
  boardRowSpan: number;
  travelBufferMinutes: number;
  overflowsPeriod: boolean;
};

function getTransitionBuffer(previous: ScheduleItem | null, current: ScheduleItem) {
  if (!previous) return 0;
  if (previous.sectionTitle === current.sectionTitle) return 12;
  if (previous.dayId === current.dayId) return 18;
  return 26;
}

function buildTimedPeriodItems(
  items: ScheduleItem[],
  period: SchedulePeriod,
  startMinutes: number,
  endMinutes: number
) {
  let cursor = startMinutes;
  let previousItem: ScheduleItem | null = null;

  return items
    .filter((item) => item.schedulePeriod === period)
    .map((item) => {
      const travelBufferMinutes = getTransitionBuffer(previousItem, item);
      const durationMinutes = parseDurationMinutes(item.duration);
      const startMinutesValue = cursor + travelBufferMinutes;
      const endMinutesValue = startMinutesValue + durationMinutes;
      const clampedEndMinutes = Math.min(endMinutesValue, endMinutes);
      const boardRowStart = Math.max(1, Math.floor((startMinutesValue - startMinutes) / 15) + 1);
      const boardRowSpan = Math.max(2, Math.ceil((clampedEndMinutes - startMinutesValue) / 15));

      cursor = endMinutesValue;
      previousItem = item;

      return {
        ...item,
        startTime: formatClock(startMinutesValue),
        endTime: formatClock(endMinutesValue),
        startMinutesValue,
        endMinutesValue,
        boardRowStart,
        boardRowSpan,
        travelBufferMinutes,
        overflowsPeriod: endMinutesValue > endMinutes,
      } satisfies TimedScheduleItem;
    });
}

export function ScheduleRoute() {
  const { profile, tripBlocks, selectedStopItems, recommendedStopCount, updateProfile, toggleSelected } =
    useTripCompanionState();
  const guide = getCityGuide(profile.cityId);
  const [expandedStopId, setExpandedStopId] = useState<string | null>(null);

  function removeStop(stopId: string, assignedDayId: string) {
    if (expandedStopId === stopId) {
      setExpandedStopId(null);
    }
    toggleSelected(stopId, assignedDayId);
  }

  const scheduleBlocks = useMemo(
    () =>
      tripBlocks.map((block) => {
        const day = guide.tripDays.find((item) => item.id === block.dayId) ?? guide.tripDays[0];
        const items = selectedStopItems
          .filter((stop) => stop.assignedDayId === block.dayId)
          .sort((left, right) => {
            if (left.sectionIndex !== right.sectionIndex) {
              return left.sectionIndex - right.sectionIndex;
            }
            return left.stopIndex - right.stopIndex;
          });

        const timedPeriods = Object.fromEntries(
          periodMeta.map((period) => [
            period.key,
            buildTimedPeriodItems(items, period.key, period.startMinutes, period.endMinutes),
          ])
        ) as Record<SchedulePeriod, TimedScheduleItem[]>;

        return {
          block,
          day,
          items,
          overloaded: items.length > recommendedStopCount,
          timedPeriods,
        };
      }),
    [guide.tripDays, recommendedStopCount, selectedStopItems, tripBlocks]
  );

  const expandedStop = useMemo(
    () =>
      scheduleBlocks
        .flatMap((block) => periodMeta.flatMap((period) => block.timedPeriods[period.key]))
        .find((item) => item.id === expandedStopId) ?? null,
    [expandedStopId, scheduleBlocks]
  );
  const expandedStopTone = expandedStop ? getBoardTone(expandedStop) : null;
  const expandedStopPeriod = expandedStop
    ? periodMeta.find((period) => period.key === expandedStop.schedulePeriod)
    : null;

  return (
    <main className="page-shell page-shell--route page-shell--schedule">
      <section className="screen-intro">
        <p className="screen-intro__kicker">Schema</p>
        <h1 className="screen-intro__title">Så här ser hela vistelsen ut</h1>
        <p className="screen-intro__subtitle">
          <span className="screen-intro__city">
            <CityFlag cityId={guide.id} className="screen-intro__flag" />
            {guide.displayName}
          </span>{" "}
          · dina val, bilder, länkar och dagspår samlade som en riktig reseplan.
        </p>
      </section>

      <section className="schedule-board-shell" aria-label="Schemasvy i landskap">
        <div
          className="schedule-board"
          style={
            {
              "--schedule-columns": String(scheduleBlocks.length),
            } as CSSProperties
          }
        >
          <div className="schedule-board__corner">
            <span>Schema</span>
            <strong>{guide.displayName}</strong>
          </div>
          {scheduleBlocks.map(({ block, day, items, overloaded }) => (
            <div className="schedule-board__day" key={`header-${block.dayId}`}>
              <span>{block.rangeLabel}</span>
              <strong>{day.title}</strong>
              <small>{items.length} stopp</small>
              {overloaded ? <em>Tätt</em> : null}
            </div>
          ))}

          {periodMeta.map((period) => (
            <Fragment key={period.key}>
              <div className="schedule-board__label">
                <span>{period.label}</span>
                <strong>{formatClock(period.startMinutes)}</strong>
                <small>
                  {formatClock(period.startMinutes)}–{formatClock(period.endMinutes)}
                </small>
              </div>
              {scheduleBlocks.map(({ block, timedPeriods }) => {
                const periodItems = timedPeriods[period.key];
                return (
                  <div className="schedule-board__cell" key={`${block.dayId}-${period.key}`}>
                    {periodItems.length === 0 ? (
                      <p className="schedule-board__empty">Plats för fler upplevelser</p>
                    ) : (
                      <div
                        className="schedule-board__stack"
                        style={
                          {
                            "--timeline-slots": String((period.endMinutes - period.startMinutes) / 15),
                          } as CSSProperties
                        }
                      >
                        {periodItems.map((item) => {
                          const preview = getStopInsightPreview(item.id);
                          const active = expandedStopId === item.id;
                          const tone = getBoardTone(item);

                          return (
                            <article
                              key={item.id}
                              className="schedule-board-item"
                              style={
                                {
                                  gridRow: `${item.boardRowStart} / span ${item.boardRowSpan}`,
                                } as CSSProperties
                              }
                            >
                              <button
                                type="button"
                                className={`schedule-board-card schedule-board-card--${tone.key} ${active ? "is-active" : ""}`}
                                onClick={() =>
                                  setExpandedStopId((current) => (current === item.id ? null : item.id))
                                }
                              >
                                <span className={`schedule-board-card__tone schedule-board-card__tone--${tone.key}`}>
                                  {tone.label}
                                </span>
                                <span className="schedule-board-card__time">
                                  {item.startTime}–{item.endTime}
                                </span>
                                <strong>{item.displayName}</strong>
                                <small>
                                  {preview?.eyebrow ?? item.sectionTitle}
                                  {item.travelBufferMinutes > 0 ? ` · +${item.travelBufferMinutes} min byte` : ""}
                                </small>
                              </button>
                              <button
                                type="button"
                                className="schedule-remove-button schedule-remove-button--board"
                                aria-label={`Ta bort ${item.displayName} från schemat`}
                                onClick={(event) => {
                                  event.stopPropagation();
                                  removeStop(item.id, item.assignedDayId);
                                }}
                              >
                                <TrashIcon />
                              </button>
                            </article>
                          );
                        })}
                      </div>
                    )}
                  </div>
                );
              })}
            </Fragment>
          ))}
        </div>

        {expandedStop ? (
          <article className="schedule-board-detail">
            {getStopInsightPreview(expandedStop.id)?.imageUrl ? (
              <img
                className="schedule-board-detail__image"
                src={getStopInsightPreview(expandedStop.id)?.imageUrl}
                alt={getStopInsightPreview(expandedStop.id)?.imageAlt ?? expandedStop.displayName}
              />
            ) : null}
            <div className="schedule-board-detail__body">
              <div className="schedule-board-detail__top">
                <div>
                  <p className="schedule-card__eyebrow">
                    {getStopInsightPreview(expandedStop.id)?.eyebrow ?? "Valt stopp"}
                  </p>
                  <h2>{expandedStop.displayName}</h2>
                </div>
                <button
                  type="button"
                  className="button button--surface"
                  onClick={() => setExpandedStopId(null)}
                >
                  Stäng
                </button>
              </div>
              <p>{expandedStop.displayWhy ?? getStopInsightPreview(expandedStop.id)?.copy ?? expandedStop.why}</p>
              <p className="schedule-board-detail__meta">
                {expandedStop.assignedDayTitle} · {expandedStop.sectionTitle} · {expandedStop.startTime}–
                {expandedStop.endTime}
              </p>
              <div className="schedule-board-detail__tags">
                {expandedStopTone ? (
                  <span
                    className={`schedule-board-card__tone schedule-board-card__tone--detail schedule-board-card__tone--${expandedStopTone.key}`}
                  >
                    {expandedStopTone.label}
                  </span>
                ) : null}
                {expandedStopPeriod ? (
                  <span className="schedule-board-detail__range">
                    {expandedStopPeriod.label} · {formatClock(expandedStopPeriod.startMinutes)}–
                    {formatClock(expandedStopPeriod.endMinutes)}
                  </span>
                ) : null}
                {expandedStop.travelBufferMinutes > 0 ? (
                  <span className="schedule-board-detail__range">
                    Byte före · {expandedStop.travelBufferMinutes} min
                  </span>
                ) : null}
              </div>
              {expandedStop.overflowsPeriod ? (
                <p className="schedule-card__meta">
                  Det här stoppet trycker ut dagspåret lite. Fundera på att flytta något om dagen känns tät.
                </p>
              ) : null}
              {expandedStop.choiceOption ? (
                <p className="schedule-card__meta">
                  Populärt val från {expandedStop.choiceOption.sourceLabel}.
                </p>
              ) : null}
              <div className="schedule-card__links">
                <button
                  type="button"
                  className="schedule-remove-button schedule-remove-button--detail"
                  aria-label={`Ta bort ${expandedStop.displayName} från schemat`}
                  onClick={() => removeStop(expandedStop.id, expandedStop.assignedDayId)}
                >
                  <TrashIcon />
                  Ta bort från schemat
                </button>
                {expandedStop.choiceOption?.url ? (
                  <a
                    className="stop-insight-panel__link"
                    href={expandedStop.choiceOption.url}
                    target="_blank"
                    rel="noreferrer"
                  >
                    Öppna {expandedStop.displayName}
                  </a>
                ) : null}
                {getStopInsight(expandedStop.id)?.links.slice(0, 3).map((link) => (
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
                {expandedStop.customLink ? (
                  <a
                    className="stop-insight-panel__link"
                    href={expandedStop.customLink}
                    target="_blank"
                    rel="noreferrer"
                  >
                    Egen länk
                  </a>
                ) : null}
              </div>
            </div>
          </article>
        ) : null}
      </section>

      <section className="schedule-stack">
        {scheduleBlocks.map(({ block, day, items, overloaded, timedPeriods }) => {
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
                  Det här dagspåret är tätare än rekommenderat. Du kan behålla det så, eller öppna plan och flytta något.
                </p>
              ) : null}
              <div className="schedule-block__actions">
                <Link
                  className="button button--surface"
                  href="/plan"
                  onClick={() => updateProfile("currentDayId", block.dayId)}
                >
                  Justera dagspår
                </Link>
              </div>

              {items.length === 0 ? (
                <p className="schedule-empty">Inget valt ännu. Lägg till stopp i planvyn för att bygga det här dagspåret.</p>
              ) : (
                <div className="schedule-day-table">
                  {periodMeta.map((period) => {
                    const periodItems = timedPeriods[period.key];

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

                              return (
                                <article className="schedule-card" key={stop.id}>
                                  <button
                                    type="button"
                                    className="schedule-remove-button schedule-remove-button--card"
                                    aria-label={`Ta bort ${stop.displayName} från schemat`}
                                    onClick={() => removeStop(stop.id, stop.assignedDayId)}
                                  >
                                    <TrashIcon />
                                  </button>
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
                                        <h3>{stop.displayName}</h3>
                                      </div>
                                      <div className="schedule-card__time">
                                        <span>
                                          {stop.startTime}–{stop.endTime}
                                        </span>
                                        <strong>{stop.duration}</strong>
                                      </div>
                                    </div>
                                    <p>{stop.displayWhy ?? preview?.copy ?? stop.why}</p>
                                    <p className="schedule-card__slot">{stop.sectionTitle}</p>
                                    {stop.dayId !== block.dayId ? (
                                      <p className="schedule-card__meta">
                                        Ursprungligen föreslaget i {stop.dayTitle}.
                                      </p>
                                    ) : null}
                                    {stop.choiceOption ? (
                                      <p className="schedule-card__meta">
                                        Populärt val från {stop.choiceOption.sourceLabel}.
                                      </p>
                                    ) : null}
                                    {stop.travelBufferMinutes > 0 ? (
                                      <p className="schedule-card__meta">
                                        Byte före stoppet: cirka {stop.travelBufferMinutes} min.
                                      </p>
                                    ) : null}
                                    {stop.overflowsPeriod ? (
                                      <p className="schedule-card__meta">
                                        Det här stoppet pressar dagspåret lite utanför sin tänkta rytm.
                                      </p>
                                    ) : null}
                                    {stop.choiceOption?.url || insight?.links.length ? (
                                      <div className="schedule-card__links">
                                        {stop.choiceOption?.url ? (
                                          <a
                                            className="stop-insight-panel__link"
                                            href={stop.choiceOption.url}
                                            target="_blank"
                                            rel="noreferrer"
                                          >
                                            Öppna {stop.displayName}
                                          </a>
                                        ) : null}
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
                                        {stop.customLink ? (
                                          <a
                                            className="stop-insight-panel__link"
                                            href={stop.customLink}
                                            target="_blank"
                                            rel="noreferrer"
                                          >
                                            Egen länk
                                          </a>
                                        ) : null}
                                      </div>
                                    ) : null}
                                    {!insight?.links.length && stop.customLink ? (
                                      <div className="schedule-card__links">
                                        <a
                                          className="stop-insight-panel__link"
                                          href={stop.customLink}
                                          target="_blank"
                                          rel="noreferrer"
                                        >
                                          Egen länk
                                        </a>
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
