"use client";

import { CityFlag } from "@/components/city-flag";
import { TravelUtilityCards } from "@/components/travel-utility-cards";
import { getCityGuide } from "@/lib/guide-config";
import { getTripBlockByDayId } from "@/lib/trip-logic";
import { useTripCompanionState } from "@/lib/use-trip-companion-state";

export function CityGuideRoute() {
  const { profile } = useTripCompanionState();
  const guide = getCityGuide(profile.cityId);
  const activeDayId = getTripBlockByDayId(profile, profile.currentDayId)?.dayId ?? guide.tripDays[0].id;

  return (
    <main className="page-shell page-shell--route">
      <section className="screen-intro">
        <p className="screen-intro__kicker">Stad</p>
        <h1 className="screen-intro__title">Lär känna {guide.displayName}</h1>
        <p className="screen-intro__subtitle">
          <span className="screen-intro__city">
            <CityFlag cityId={guide.id} className="screen-intro__flag" />
            {guide.displayName}
          </span>{" "}
          · praktiska fakta, stadskänsla och källor på ett ställe.
        </p>
      </section>

      <section className="panel city-guide-panel">
        <div className="panel__header">
          <p className="eyebrow eyebrow--dark">Stadens logik</p>
          <h2>Allmän fakta som hjälper dig på marken</h2>
        </div>
        <div className="city-facts-grid">
          {guide.basics.map((item) => (
            <article className="basic-card" key={item.title}>
              <span className="basic-card__tag">{item.tag}</span>
              <h3>{item.title}</h3>
              <p>{item.body}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="panel city-guide-panel">
        <div className="panel__header">
          <p className="eyebrow eyebrow--dark">Fotospår</p>
          <h2>Små scener från staden</h2>
        </div>
        <div className="hero__gallery city-gallery-grid">
          {guide.gallery.map((item) => (
            <article className="hero-card" key={item.title}>
              {item.imageUrl ? <img src={item.imageUrl} alt={item.title} /> : null}
              <div className="hero-card__content">
                <h3>{item.title}</h3>
                <p>{item.description}</p>
                {item.sourceUrl ? (
                  <div className="source-line">
                    <a href={item.sourceUrl} target="_blank" rel="noreferrer">
                      {item.sourceLabel || "Källa"}
                    </a>
                    {item.credit ? <span>{item.credit}</span> : null}
                  </div>
                ) : null}
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="city-guide-panel">
        <div className="panel__header city-guide-panel__header">
          <p className="eyebrow eyebrow--dark">Praktiskt</p>
          <h2>Karta, transport, väder och valuta</h2>
        </div>
        <TravelUtilityCards cityId={profile.cityId} dayId={activeDayId} />
      </section>
    </main>
  );
}
