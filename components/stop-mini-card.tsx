"use client";

import { useEffect, useState } from "react";
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
  const [imageFailed, setImageFailed] = useState(false);
  const preview = getStopInsightPreview(stopId);
  const insight = getStopInsight(stopId);

  useEffect(() => {
    setImageFailed(false);
  }, [stopId]);

  if (!preview || !insight) {
    return null;
  }

  return (
    <button
      className={`stop-mini-card ${expanded ? "is-active" : ""}`}
      type="button"
      onClick={onToggle}
      aria-expanded={expanded}
      aria-label={`${expanded ? "Dölj" : "Visa"} mer om ${preview.title}`}
    >
      {preview.imageUrl && !imageFailed ? (
        <span className="stop-mini-card__media">
          <img
            className="stop-mini-card__image"
            src={preview.imageUrl}
            alt={preview.imageAlt ?? ""}
            onError={() => setImageFailed(true)}
          />
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
