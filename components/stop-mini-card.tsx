"use client";

import { getStopInsight, getStopInsightPreview } from "@/lib/stop-insights";

export function StopMiniCard({
  stopId,
  expanded,
  onToggle,
}: {
  stopId: string;
  expanded: boolean;
  onToggle: () => void;
}) {
  const preview = getStopInsightPreview(stopId);
  const insight = getStopInsight(stopId);

  if (!preview || !insight) {
    return null;
  }

  return (
    <button
      className={`stop-mini-card ${expanded ? "is-active" : ""}`}
      type="button"
      onClick={onToggle}
      aria-expanded={expanded}
    >
      {preview.imageUrl ? (
        <span className="stop-mini-card__media" aria-hidden="true">
          <img className="stop-mini-card__image" src={preview.imageUrl} alt={preview.imageAlt ?? ""} />
        </span>
      ) : null}
      <span className="stop-mini-card__eyebrow">{preview.eyebrow}</span>
      <strong className="stop-mini-card__title">{preview.title}</strong>
      <span className="stop-mini-card__copy">{preview.copy}</span>
      <span className="stop-mini-card__meta">
        {insight.links.length ? `${insight.links.length} länkar` : "Fakta och tips"} ·{" "}
        {expanded ? "Dölj mer" : "Visa mer"}
      </span>
    </button>
  );
}
