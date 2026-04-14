"use client";

import { useEffect, useMemo, useState } from "react";
import { getCityGuideByDayId } from "@/lib/guide-config";

function getMapEmbedUrl(mapQuery: string) {
  try {
    const url = new URL(mapQuery);
    const query = url.searchParams.get("query") ?? url.searchParams.get("q");
    if (query) {
      return `https://www.google.com/maps?q=${encodeURIComponent(query)}&z=14&output=embed`;
    }
  } catch {
    return mapQuery;
  }

  return mapQuery;
}

export function AreaMapPanel({ dayId }: { dayId: string }) {
  const guide = getCityGuideByDayId(dayId);
  const areas = guide?.areaCardsByDay[dayId] ?? [];
  const [activeAreaId, setActiveAreaId] = useState<string | null>(areas[0]?.id ?? null);

  useEffect(() => {
    setActiveAreaId(areas[0]?.id ?? null);
  }, [dayId, areas]);

  if (areas.length === 0) {
    return null;
  }

  const activeArea = areas.find((area) => area.id === activeAreaId) ?? areas[0];
  const activeIndex = Math.max(
    0,
    areas.findIndex((area) => area.id === activeArea.id)
  );
  const activeEmbedUrl = useMemo(() => getMapEmbedUrl(activeArea.mapQuery), [activeArea.mapQuery]);

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
