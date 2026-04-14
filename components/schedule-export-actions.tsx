"use client";

import { useState } from "react";
import { getCityGuide } from "@/lib/guide-config";
import { TripBlock, TravelerProfile } from "@/lib/trip-logic";

type SelectedStopItem = {
  id: string;
  duration: string;
  assignedDayId: string;
  assignedDayNumber: number;
  assignedDayTitle: string;
  displayName: string;
  displayWhy: string;
  sectionTitle: string;
  sectionLabel: string;
  sectionIndex: number;
  stopIndex: number;
  schedulePeriod: "morning" | "midday" | "evening";
  choiceOption?: {
    sourceLabel: string;
  };
};

const periodLabels: Record<SelectedStopItem["schedulePeriod"], string> = {
  morning: "Morgon",
  midday: "Eftermiddag",
  evening: "Kväll",
};

function escapeHtml(value: string) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;");
}

export function ScheduleExportActions({
  profile,
  tripBlocks,
  selectedStopItems,
}: {
  profile: TravelerProfile;
  tripBlocks: TripBlock[];
  selectedStopItems: SelectedStopItem[];
}) {
  const [status, setStatus] = useState("Inget exporterat än");
  const guide = getCityGuide(profile.cityId);

  function buildScheduleDocument() {
    const sortedStops = selectedStopItems
      .slice()
      .sort((left, right) => {
        if (left.assignedDayNumber !== right.assignedDayNumber) {
          return left.assignedDayNumber - right.assignedDayNumber;
        }
        if (left.sectionIndex !== right.sectionIndex) {
          return left.sectionIndex - right.sectionIndex;
        }
        return left.stopIndex - right.stopIndex;
      });

    const daySections = tripBlocks
      .map((block) => {
        const day = guide.tripDays.find((item) => item.id === block.dayId);
        if (!day) return "";

        const dayStops = sortedStops.filter((stop) => stop.assignedDayId === block.dayId);
        const periods = (["morning", "midday", "evening"] as const)
          .map((period) => {
            const periodStops = dayStops.filter((stop) => stop.schedulePeriod === period);
            const itemsMarkup =
              periodStops.length === 0
                ? `<p class="empty">Inga valda stopp i den här delen av dagen.</p>`
                : periodStops
                    .map(
                      (stop) => `
                        <article class="stop-card">
                          <div class="stop-card__top">
                            <h4>${escapeHtml(stop.displayName)}</h4>
                            <span>${escapeHtml(stop.duration)}</span>
                          </div>
                          <p class="stop-card__meta">${escapeHtml(stop.sectionTitle)}</p>
                          <p>${escapeHtml(stop.displayWhy)}</p>
                        </article>
                      `
                    )
                    .join("");

            return `
              <section class="period">
                <div class="period__header">
                  <h3>${periodLabels[period]}</h3>
                  <span>${periodStops.length} stopp</span>
                </div>
                ${itemsMarkup}
              </section>
            `;
          })
          .join("");

        return `
          <section class="day-block">
            <div class="day-block__header">
              <div>
                <p class="eyebrow">${escapeHtml(block.rangeLabel)}</p>
                <h2>${escapeHtml(day.title)}</h2>
              </div>
              <span>${dayStops.length} stopp</span>
            </div>
            <p class="theme">${escapeHtml(day.theme)}</p>
            ${periods}
          </section>
        `;
      })
      .join("");

    return `<!doctype html>
<html lang="sv">
  <head>
    <meta charset="utf-8" />
    <title>Trip Companion ${escapeHtml(guide.displayName)} schema</title>
    <style>
      :root {
        color-scheme: light;
        --ink: #11212f;
        --muted: #64748b;
        --line: rgba(17, 33, 47, 0.12);
        --surface: #ffffff;
        --soft: #f6f8fc;
        --accent: #1d6ee8;
      }
      * { box-sizing: border-box; }
      body {
        margin: 0;
        padding: 32px;
        font-family: "Segoe UI", "Helvetica Neue", Arial, sans-serif;
        color: var(--ink);
        background: #eef2f8;
      }
      main {
        max-width: 960px;
        margin: 0 auto;
        display: grid;
        gap: 20px;
      }
      .hero,
      .day-block {
        background: var(--surface);
        border: 1px solid var(--line);
        border-radius: 18px;
        padding: 20px;
      }
      .hero h1,
      .day-block h2,
      .period h3,
      .stop-card h4 {
        margin: 0;
      }
      .hero p,
      .theme,
      .stop-card p,
      .empty {
        margin: 0;
        color: var(--muted);
        line-height: 1.55;
      }
      .hero-meta,
      .day-block__header,
      .period__header,
      .stop-card__top {
        display: flex;
        justify-content: space-between;
        gap: 12px;
        align-items: baseline;
      }
      .hero-meta {
        flex-wrap: wrap;
        margin-top: 14px;
      }
      .hero-meta span,
      .day-block__header span,
      .period__header span {
        display: inline-flex;
        align-items: center;
        min-height: 24px;
        padding: 0 10px;
        border-radius: 999px;
        background: var(--soft);
        color: var(--muted);
        font-size: 12px;
        font-weight: 600;
      }
      .eyebrow {
        margin: 0 0 4px;
        color: var(--muted);
        text-transform: uppercase;
        letter-spacing: 0.08em;
        font-size: 11px;
        font-weight: 700;
      }
      .theme {
        margin-top: 8px;
      }
      .period {
        display: grid;
        gap: 10px;
        margin-top: 18px;
      }
      .stop-card {
        display: grid;
        gap: 6px;
        padding: 14px;
        border: 1px solid var(--line);
        border-radius: 14px;
        background: var(--soft);
      }
      .stop-card__meta {
        font-size: 12px;
        font-weight: 700;
        color: var(--accent);
      }
      .empty {
        padding: 14px;
        border: 1px dashed var(--line);
        border-radius: 14px;
        background: rgba(255,255,255,0.6);
      }
      @media print {
        body {
          background: white;
          padding: 0;
        }
        main {
          max-width: none;
        }
        .hero,
        .day-block {
          break-inside: avoid;
          box-shadow: none;
        }
      }
    </style>
  </head>
  <body>
    <main>
      <section class="hero">
        <p class="eyebrow">Trip Companion</p>
        <h1>${escapeHtml(guide.displayName)} · hela schemat</h1>
        <p>En läsbar överblick över alla valda stopp, uppdelade per dagspår och del av dagen.</p>
        <div class="hero-meta">
          <span>${tripBlocks.length} dagspår</span>
          <span>${selectedStopItems.length} valda stopp</span>
          <span>Tempo: ${escapeHtml(profile.pace)}</span>
          <span>Resstil: ${escapeHtml(profile.travelStyle)}</span>
        </div>
      </section>
      ${daySections}
    </main>
  </body>
</html>`;
  }

  function openPrintPreview() {
    const popup = window.open("", "_blank", "noopener,noreferrer");
    if (!popup) {
      setStatus("Kunde inte öppna utskriftsvy");
      return;
    }

    const documentMarkup = buildScheduleDocument();
    popup.document.open();
    popup.document.write(documentMarkup);
    popup.document.close();
    popup.focus();
    popup.onload = () => {
      popup.print();
    };
    setStatus("Utskriftsvy öppnad");
  }

  function exportHtml() {
    const blob = new Blob([buildScheduleDocument()], {
      type: "text/html;charset=utf-8",
    });
    const url = URL.createObjectURL(blob);
    const anchor = document.createElement("a");
    anchor.href = url;
    anchor.download = `trip-companion-${guide.id}-schedule.html`;
    anchor.click();
    URL.revokeObjectURL(url);
    setStatus("Schema exporterat som HTML");
  }

  return (
    <div className="export-actions">
      <div className="export-actions__copy">
        <h3>Exportera hela schemat</h3>
        <p>
          Öppna en läsbar version av hela resan och spara den som PDF via
          webbläsarens utskriftsdialog, eller ladda ner den som HTML.
        </p>
      </div>
      <div className="export-actions__buttons">
        <button className="button button--solid" type="button" onClick={openPrintPreview}>
          Skriv ut / spara PDF
        </button>
        <button className="button button--surface" type="button" onClick={exportHtml}>
          Exportera HTML
        </button>
      </div>
      <p className="export-actions__status">{status}</p>
    </div>
  );
}
