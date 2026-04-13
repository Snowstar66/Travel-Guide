"use client";

import { getCityGuideByDayId } from "@/lib/guide-config";

export function AreaMapPanel({ dayId }: { dayId: string }) {
  const guide = getCityGuideByDayId(dayId);
  const areas = guide?.areaCardsByDay[dayId] ?? [];

  if (areas.length === 0) {
    return null;
  }

  return (
    <section className="area-panel-native">
      <div className="area-map-canvas area-map-canvas--native" aria-label="Day area map">
        <svg viewBox="0 0 100 100" className="area-map-svg" role="img">
          <title>Dagens områdeskarta</title>
          <path
            d="M42 6 C52 16, 56 34, 54 52 C52 70, 48 86, 44 96"
            className="area-map-river"
          />
          <path
            d={`M${areas[0].x} ${areas[0].y} ${areas
              .slice(1)
              .map((area) => `L${area.x} ${area.y}`)
              .join(" ")}`}
            className="area-map-route"
          />
          {areas.map((area, index) => (
            <g key={area.id}>
              <circle
                cx={area.x}
                cy={area.y}
                r="5.5"
                className={`area-map-marker area-map-marker--${index + 1}`}
              />
              <circle cx={area.x} cy={area.y} r="2.2" className="area-map-marker-core" />
              <text x={area.x + 4} y={area.y - 4} className="area-map-label">
                {area.name}
              </text>
            </g>
          ))}
        </svg>
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
            <a
              className="area-card__link"
              href={area.mapQuery}
              target="_blank"
              rel="noreferrer"
            >
              Öppna i karta
            </a>
          </article>
        ))}
      </div>
    </section>
  );
}
