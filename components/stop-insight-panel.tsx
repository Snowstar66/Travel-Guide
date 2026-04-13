"use client";

import { getStopInsight } from "@/lib/stop-insights";

export function StopInsightPanel({ stopId }: { stopId: string }) {
  const insight = getStopInsight(stopId);

  if (!insight) {
    return null;
  }

  return (
    <section className="stop-insight-panel">
      <div className="stop-insight-panel__block">
        <p className="stop-insight-panel__label">Fakta</p>
        <ul className="stop-insight-panel__list">
          {insight.facts.map((fact) => (
            <li key={fact}>{fact}</li>
          ))}
        </ul>
      </div>

      <div className="stop-insight-panel__block">
        <p className="stop-insight-panel__label">Bra att gora</p>
        <ul className="stop-insight-panel__list">
          {insight.ideas.map((idea) => (
            <li key={idea}>{idea}</li>
          ))}
        </ul>
      </div>

      {insight.links.length ? (
        <div className="stop-insight-panel__links">
          {insight.links.map((link) => (
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
    </section>
  );
}
