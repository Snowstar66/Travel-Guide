"use client";

import { useEffect, useMemo, useState } from "react";
import { StopMiniCard } from "@/components/stop-mini-card";
import { StopInsightPanel } from "@/components/stop-insight-panel";
import { findTripDayById } from "@/lib/guide-config";
import { getStopInsight } from "@/lib/stop-insights";
import { NotesState, RecordState } from "@/lib/use-trip-companion-state";

export function DayDetailPanel({
  dayId,
  checkedStops,
  favorites,
  notes,
  onToggleChecked,
  onToggleFavorite,
  onSaveNote,
}: {
  dayId: string;
  checkedStops: RecordState;
  favorites: RecordState;
  notes: NotesState;
  onToggleChecked: (stopId: string) => void;
  onToggleFavorite: (stopId: string) => void;
  onSaveNote: (dayId: string, noteValue: string) => void;
}) {
  const day = useMemo(() => findTripDayById(dayId), [dayId]);
  const [noteDraft, setNoteDraft] = useState("");
  const [saveMessage, setSaveMessage] = useState("Inte sparat än");
  const [expandedInsightId, setExpandedInsightId] = useState<string | null>(null);

  useEffect(() => {
    if (!day) return;
    setNoteDraft(notes[day.id] ?? "");
    setSaveMessage("Inte sparat än");
    setExpandedInsightId(null);
  }, [day, notes]);

  if (!day) {
    return null;
  }

  const dayStops = day.sections.flatMap((section) => section.stops);
  const completedStops = dayStops.filter((stop) => checkedStops[stop.id]).length;
  const favoriteCount = dayStops.filter((stop) => favorites[stop.id]).length;

  return (
    <section className="today-native-stack day-native-stack">
      <section className="ios-group">
        <div className="ios-group__header">
          <div>
            <p className="ios-group__eyebrow">Överblick</p>
            <h2>{day.title}</h2>
          </div>
          <span className="ios-group__badge">
            {completedStops}/{dayStops.length}
          </span>
        </div>
        <p className="ios-group__copy">{day.intro}</p>
        <div className="ios-stat-grid ios-stat-grid--3">
          <article className="ios-stat">
            <span>Klara</span>
            <strong>{completedStops}</strong>
          </article>
          <article className="ios-stat">
            <span>Favoriter</span>
            <strong>{favoriteCount}</strong>
          </article>
          <article className="ios-stat">
            <span>Energi</span>
            <strong>{day.energy}</strong>
          </article>
        </div>
      </section>

      {day.sections.map((section) => (
        <section className="ios-group ios-group--list" key={section.title}>
          <div className="ios-group__header">
            <div>
              <p className="ios-group__eyebrow">{section.label}</p>
              <h2>{section.title}</h2>
            </div>
          </div>
          <p className="ios-group__copy">{section.note}</p>
          <div className="ios-stop-list">
            {section.stops.map((stop) => {
              const checked = Boolean(checkedStops[stop.id]);
              const favorite = Boolean(favorites[stop.id]);
              const insight = getStopInsight(stop.id);
              const insightOpen = expandedInsightId === stop.id;

              return (
                <div className="ios-stop-block" key={stop.id}>
                  <article className="ios-stop-row">
                    <div className="ios-stop-row__copy">
                      <div className="ios-stop-row__headline">
                        <strong>{stop.name}</strong>
                        {insight ? (
                          <button
                            className={`ios-info-button ios-info-button--inline ${
                              insightOpen ? "is-active" : ""
                            }`}
                            type="button"
                            aria-expanded={insightOpen}
                            aria-label={`Visa mer info om ${stop.name}`}
                            onClick={() =>
                              setExpandedInsightId((current) =>
                                current === stop.id ? null : stop.id
                              )
                            }
                          >
                            i
                          </button>
                        ) : null}
                      </div>
                      <span>{stop.duration}</span>
                      <p>{stop.tip}</p>
                    </div>
                    <div className="ios-stop-row__actions">
                      <button
                        className={`ios-mini-button ${checked ? "is-active" : ""}`}
                        type="button"
                        onClick={() => onToggleChecked(stop.id)}
                      >
                        {checked ? "Klar" : "Checka"}
                      </button>
                      <button
                        className={`ios-mini-button ios-mini-button--ghost ${
                          favorite ? "is-active" : ""
                        }`}
                        type="button"
                        onClick={() => onToggleFavorite(stop.id)}
                      >
                        {favorite ? "Sparad" : "Spara"}
                      </button>
                    </div>
                  </article>

                  {insight ? (
                    <StopMiniCard
                      stopId={stop.id}
                      expanded={insightOpen}
                      onToggle={() =>
                        setExpandedInsightId((current) => (current === stop.id ? null : stop.id))
                      }
                    />
                  ) : null}

                  {insightOpen ? <StopInsightPanel stopId={stop.id} /> : null}
                </div>
              );
            })}
          </div>
        </section>
      ))}

      <section className="ios-group">
        <div className="ios-group__header">
          <div>
            <p className="ios-group__eyebrow">Anteckningar</p>
            <h2>För senare</h2>
          </div>
        </div>
        <textarea
          id="day-notes"
          value={noteDraft}
          onChange={(event) => setNoteDraft(event.target.value)}
          placeholder="Skriv det du vill minnas från dagen."
          rows={5}
        />
        <div className="ios-group__actions">
          <button
            className="button button--solid"
            type="button"
            onClick={() => {
              onSaveNote(day.id, noteDraft);
              setSaveMessage("Anteckning sparad");
            }}
          >
            Spara
          </button>
          <span className="ios-inline-status">{saveMessage}</span>
        </div>
      </section>
    </section>
  );
}
