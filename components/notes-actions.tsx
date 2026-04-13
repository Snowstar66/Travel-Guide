"use client";

import { getCityGuide } from "@/lib/guide-config";
import { NotesState } from "@/lib/use-trip-companion-state";
import { TravelerProfile } from "@/lib/trip-logic";
import { useState } from "react";

export function NotesActions({
  notes,
  profile,
}: {
  notes: NotesState;
  profile: TravelerProfile;
}) {
  const [status, setStatus] = useState("Inget exporterat än");
  const guide = getCityGuide(profile.cityId);

  const noteEntries = guide.tripDays.filter((day) => (notes[day.id] ?? "").trim().length > 0);

  function buildExportText() {
    const lines = [
      `# Trip Companion ${guide.displayName} Notes`,
      "",
      `Stad: ${guide.displayName}`,
      `Resstil: ${profile.travelStyle}`,
      `Hotellzon: ${profile.hotelArea}`,
      `Tempo: ${profile.pace}`,
      `Aktuell dag: ${profile.currentDayId}`,
      "",
    ];

    noteEntries.forEach((day) => {
      lines.push(`## Dag ${day.dayNumber}: ${day.title}`);
      lines.push(notes[day.id].trim());
      lines.push("");
    });

    return lines.join("\n");
  }

  async function shareNotes() {
    if (noteEntries.length === 0) {
      setStatus("Skriv minst en anteckning först");
      return;
    }

    const text = buildExportText();

    if (navigator.share) {
      try {
        await navigator.share({
          title: `Trip Companion ${guide.displayName} Notes`,
          text,
        });
        setStatus("Anteckningar delade");
        return;
      } catch {
        setStatus("Delning avbruten");
        return;
      }
    }

    setStatus("Din webbläsare stödjer inte delning här");
  }

  function exportNotes() {
    if (noteEntries.length === 0) {
      setStatus("Skriv minst en anteckning först");
      return;
    }

    const blob = new Blob([buildExportText()], {
      type: "text/markdown;charset=utf-8",
    });
    const url = URL.createObjectURL(blob);
    const anchor = document.createElement("a");
    anchor.href = url;
    anchor.download = `trip-companion-${guide.id}-notes.md`;
    anchor.click();
    URL.revokeObjectURL(url);
    setStatus("Anteckningar exporterade");
  }

  return (
    <div className="notes-actions">
      <div className="notes-actions__copy">
        <h3>Exportera eller dela dina anteckningar</h3>
        <p>
          Samla hela resans noteringar i en fil eller dela dem direkt från
          mobilen när webbläsaren stödjer det.
        </p>
      </div>
      <div className="notes-actions__buttons">
        <button className="button button--solid" type="button" onClick={exportNotes}>
          Exportera .md
        </button>
        <button className="button button--notes-share" type="button" onClick={shareNotes}>
          Dela anteckningar
        </button>
      </div>
      <p className="notes-actions__status">{status}</p>
    </div>
  );
}
