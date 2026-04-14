"use client";

import { useEffect, useMemo, useState } from "react";
import { getCityGuideByDayId } from "@/lib/guide-config";
import type { AreaCard } from "@/lib/day-extras";

function extractMapQuery(mapQuery: string) {
  try {
    const url = new URL(mapQuery);
    return url.searchParams.get("query") ?? url.searchParams.get("q") ?? mapQuery;
  } catch {
    return mapQuery;
  }
}

function normalizeMapSearch(search: string) {
  return search
    .replace(/\bhotels?\b/gi, "")
    .replace(/\bcaf[eé]\b/gi, "")
    .replace(/\bcoffee\b/gi, "")
    .replace(/\brestaurant\b/gi, "")
    .replace(/\s{2,}/g, " ")
    .trim();
}

function getAreaPriority(area: AreaCard) {
  const haystack = `${area.name} ${extractMapQuery(area.mapQuery)}`.toLowerCase();

  if (/(hotel|exit|transfer|station cafe|cafe|soft exit|lugn exit)/.test(haystack)) {
    return 0;
  }

  if (/(museum|cathedral|katedral|park|village|rockefeller|manhattan|dumbo|ferry|bellver|portixol)/.test(haystack)) {
    return 2;
  }

  return 1;
}

function getPreferredArea(areas: AreaCard[]) {
  return [...areas].sort((left, right) => getAreaPriority(right) - getAreaPriority(left))[0] ?? areas[0];
}

function getMapEmbedUrl(area: AreaCard, cityName: string) {
  const extractedQuery = normalizeMapSearch(extractMapQuery(area.mapQuery));
  const fallbackParts = [
    area.anchorStops.find((stop) => !/(hotell|hotel|kaffe|coffee|lunch)/i.test(stop)),
    area.name,
    cityName,
  ].filter(Boolean);
  const fallbackQuery = fallbackParts.join(" ");
  const finalQuery = extractedQuery.length >= 8 ? extractedQuery : fallbackQuery;

  return `https://www.google.com/maps?q=${encodeURIComponent(finalQuery)}&z=14&output=embed`;
}

export function AreaMapPanel({ dayId }: { dayId: string }) {
  const guide = getCityGuideByDayId(dayId);
  const areas = guide?.areaCardsByDay[dayId] ?? [];
  const [activeAreaId, setActiveAreaId] = useState<string | null>(null);

  useEffect(() => {
    setActiveAreaId(getPreferredArea(areas)?.id ?? null);
  }, [dayId, areas]);

  if (areas.length === 0) {
    return null;
  }

  const activeArea = areas.find((area) => area.id === activeAreaId) ?? areas[0];
  const activeIndex = Math.max(
    0,
    areas.findIndex((area) => area.id === activeArea.id)
  );
  const activeEmbedUrl = useMemo(
    () => getMapEmbedUrl(activeArea, guide?.displayName ?? ""),
    [activeArea, guide?.displayName]
  );

  return (
    <section className="area-panel-native">
      <div className="area-map-canvas area-map-canvas--native area-map-canvas--embed">
        <div className="area-map-toolbar">
          <div className="area-map-toolbar__copy">
            <p className="area-card__vibe">Dagens karta</p>
            <h3>{activeArea.name}</h3>
            <p>{activeArea.routeNote}</p>
          </div>
          <a className="area-card__link" href={activeArea.mapQuery} target="_blank" rel="noreferrer">
            Öppna i karta
          </a>
        </div>

        <div className="area-map-switcher" role="tablist" aria-label="Välj område på kartan">
          {areas.map((area, index) => (
            <button
              key={area.id}
              type="button"
              role="tab"
              aria-selected={area.id === activeArea.id}
              className={`area-map-switcher__button ${area.id === activeArea.id ? "is-active" : ""}`}
              onClick={() => setActiveAreaId(area.id)}
            >
              <span className="area-map-switcher__index">{index + 1}</span>
              <span className="area-map-switcher__name">{area.name}</span>
            </button>
          ))}
        </div>

        <div className="area-map-frame">
          <iframe
            title={`${activeArea.name} på karta`}
            src={activeEmbedUrl}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>

        <div className="area-map-route-list" aria-label="Dagens områden i ordning">
          {areas.map((area, index) => (
            <span
              key={area.id}
              className={`area-map-route-list__item ${index === activeIndex ? "is-active" : ""}`}
            >
              {index + 1}. {area.name}
            </span>
          ))}
        </div>
      </div>

      <div className="area-map area-map--native">
        {areas.map((area, index) => (
          <article className={`area-card area-card--native area-card--${index + 1}`} key={area.id}>
            <p className="area-card__vibe">{area.vibe}</p>
            <h3>{area.name}</h3>
            <p>{area.whyItWorks}</p>
            <p className="area-card__route-note">
              <strong>Ruttanke:</strong> {area.routeNote}
            </p>
            <div className="area-chip-row">
              {area.anchorStops.map((stop) => (
                <span className="area-chip" key={stop}>
                  {stop}
                </span>
              ))}
            </div>
            <div className="area-card__actions">
              <button
                type="button"
                className={`button button--surface ${area.id === activeArea.id ? "is-active" : ""}`}
                onClick={() => setActiveAreaId(area.id)}
              >
                Visa på kartan
              </button>
              <a
                className="area-card__link"
                href={area.mapQuery}
                target="_blank"
                rel="noreferrer"
              >
                Öppna i karta
              </a>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
