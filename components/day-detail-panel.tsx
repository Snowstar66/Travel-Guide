"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { StopMiniCard } from "@/components/stop-mini-card";
import { StopInsightPanel } from "@/components/stop-insight-panel";
import { findTripDayById } from "@/lib/guide-config";
import { TripBlock } from "@/lib/trip-logic";
import { getStopInsight } from "@/lib/stop-insights";
import { NotesState, SelectionState } from "@/lib/use-trip-companion-state";

export function DayDetailPanel({
  dayId,
  selectedStops,
  tripBlocks,
  recommendedStopCount,
  notes,
  onToggleSelected,
  onMoveSelected,
  onSaveNote,
}: {
  dayId: string;
  selectedStops: SelectionState;
  tripBlocks: TripBlock[];
  recommendedStopCount: number;
  notes: NotesState;
  onToggleSelected: (stopId: string, assignedDayId: string) => void;
  onMoveSelected: (stopId: string, assignedDayId: string) => void;
  onSaveNote: (dayId: string, noteValue: string) => void;
}) {
  const day = useMemo(() => findTripDayById(dayId), [dayId]);
  const [noteDraft, setNoteDraft] = useState("");
  const [saveMessage, setSaveMessage] = useState("Inte sparat än");
  const [expandedInsightId, setExpandedInsightId] = useState<string | null>(null);
  const insightRefs = useRef<Record<string, HTMLDivElement | null>>({});

  useEffect(() => {
    if (!day) return;
    setNoteDraft(notes[day.id] ?? "");
    setSaveMessage("Inte sparat än");
    setExpandedInsightId(null);
  }, [day, notes]);

  useEffect(() => {
    if (!expandedInsightId) return;
    insightRefs.current[expandedInsightId]?.scrollIntoView({
      behavior: "smooth",
      block: "nearest",
    });
  }, [expandedInsightId]);

  if (!day) {
    return null;
  }

  const dayStops = day.sections.flatMap((section) => section.stops);
  const selectedDayStops = dayStops.filter((stop) => selectedStops[stop.id] === day.id);
  const blockLoadMessage =
    selectedDayStops.length > recommendedStopCount
      ? `Det här blocket börjar bli tätt. ${selectedDayStops.length} stopp är mer än den rekommenderade nivån på ${recommendedStopCount}, men du kan fortfarande behålla dem eller flytta något.`
      : null;

  return (
    <section className="today-native-stack day-native-stack">
      <section className="ios-group">
        <div className="ios-group__header">
          <div>
            <p className="ios-group__eyebrow">Överblick</p>
            <h2>{day.title}</h2>
          </div>
          <span className="ios-group__badge">
            {selectedDayStops.length}/{dayStops.length}
          </span>
        </div>
        <p className="ios-group__copy">{day.intro}</p>
        <div className="ios-stat-grid ios-stat-grid--3">
          <article className="ios-stat">
            <span>I blocket</span>
            <strong>{selectedDayStops.length}</strong>
          </article>
          <article className="ios-stat">
            <span>Lagom nivå</span>
            <strong>{recommendedStopCount}</strong>
          </article>
          <article className="ios-stat">
            <span>Energi</span>
            <strong>{day.energy}</strong>
          </article>
        </div>
        {blockLoadMessage ? <p className="ios-group__hint ios-group__hint--warning">{blockLoadMessage}</p> : null}
      </section>

      <section className="ios-group ios-group--list">
        <div className="ios-group__header">
          <div>
            <p className="ios-group__eyebrow">Ditt upplägg just nu</p>
            <h2>Valda stopp i blocket</h2>
          </div>
        </div>
        {selectedDayStops.length === 0 ? (
          <p className="ios-group__copy">
            Inga stopp valda än. Börja trycka på det som passar er, så byggs blocket upp här.
          </p>
        ) : (
          <div className="ios-list">
            {selectedDayStops.map((stop) => (
              <div className="ios-list__row" key={stop.id}>
                <span>{stop.name}</span>
                <strong>{stop.duration}</strong>
              </div>
            ))}
          </div>
        )}
        {blockLoadMessage ? (
          <div className="ios-inline-callout">
            <strong>Tät dag</strong>
            <span>Du kan fortfarande ha kvar allt, men det kan bli stressigt. Flytta gärna något till ett annat block.</span>
          </div>
        ) : null}
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
              const assignedDayId = selectedStops[stop.id];
              const selected = Boolean(assignedDayId);
              const selectedHere = assignedDayId === day.id;
              const assignedBlock = tripBlocks.find((block) => block.dayId === assignedDayId);
              const insight = getStopInsight(stop.id);
              const insightOpen = expandedInsightId === stop.id;

              return (
                <div className="ios-stop-block" key={stop.id}>
                  <article className="ios-stop-row">
                    <div className="ios-stop-row__copy">
                      <div className="ios-stop-row__headline">
                        <strong>{stop.name}</strong>
                      </div>
                      <span>{stop.duration}</span>
                      <p>{stop.tip}</p>
                    </div>
                    <div className="ios-stop-row__actions">
                      <button
                        className={`ios-mini-button ${selected ? "is-active" : ""}`}
                        type="button"
                        onClick={() => onToggleSelected(stop.id, day.id)}
                      >
                        {selectedHere ? "Tillagd" : selected ? `I ${assignedBlock?.shortLabel ?? "plan"}` : "Lägg till"}
                      </button>
                      {selected ? (
                        <>
                          <label className="ios-stop-row__move">
                            <span>Flytta till</span>
                            <select
                              value={assignedDayId}
                              onChange={(event) => onMoveSelected(stop.id, event.target.value)}
                            >
                              {tripBlocks.map((block) => (
                                <option key={block.dayId} value={block.dayId}>
                                  {block.rangeLabel}
                                </option>
                              ))}
                            </select>
                          </label>
                          <button
                            className="ios-mini-button ios-mini-button--ghost"
                            type="button"
                            onClick={() => onToggleSelected(stop.id, day.id)}
                          >
                            Ta bort
                          </button>
                        </>
                      ) : null}
                    </div>
                  </article>

                  {selected && !selectedHere ? (
                    <p className="ios-stop-row__status">
                      Det här stoppet ligger just nu i {assignedBlock?.rangeLabel ?? "ett annat block"}.
                    </p>
                  ) : null}

                  {insight ? (
                    <div
                      ref={(node) => {
                        insightRefs.current[stop.id] = node;
                      }}
                    >
                      <StopMiniCard
                        stopId={stop.id}
                        expanded={insightOpen}
                        onToggle={() =>
                          setExpandedInsightId((current) => (current === stop.id ? null : stop.id))
                        }
                      />
                    </div>
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
          placeholder="Skriv det du vill minnas från blocket."
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
