"use client";

import Link from "next/link";
import { CityFlag } from "@/components/city-flag";
import { getCityGuide, type CityId } from "@/lib/guide-config";
import { useCityWeather } from "@/lib/use-nyc-weather";
import { useCurrencyExchange } from "@/lib/use-usd-exchange";

function formatRate(value: number) {
  return new Intl.NumberFormat("sv-SE", {
    maximumFractionDigits: 2,
    minimumFractionDigits: 2,
  }).format(value);
}

export function TravelUtilityCards({
  cityId,
  dayId,
}: {
  cityId: CityId;
  dayId: string;
}) {
  const guide = getCityGuide(cityId);
  const { snapshot, status } = useCurrencyExchange(guide.currency.base, guide.currency.quote);
  const {
    snapshot: weather,
    loading: weatherLoading,
    error: weatherError,
  } = useCityWeather(cityId);
  const image = guide.gallery[0];
  const areas = guide.areaCardsByDay[dayId] ?? [];
  const primaryArea = areas[0];
  const secondaryArea = areas[1];

  return (
    <section className="utility-grid">
      <article className="panel utility-card utility-card--image">
        <div className="utility-card__header">
          <p className="utility-card__eyebrow">Stadskänsla</p>
          <h2>{image.title}</h2>
        </div>
        {image.imageUrl ? (
          <img className="utility-card__image" src={image.imageUrl} alt={image.title} />
        ) : (
          <div className="utility-card__visual" aria-hidden="true">
            <CityFlag cityId={guide.id} className="utility-card__flag" />
            <strong>{guide.displayName}</strong>
            <span>{guide.maps.cityQuery}</span>
          </div>
        )}
        <p>{image.description}</p>
      </article>

      <article className="panel utility-card">
        <div className="utility-card__header">
          <p className="utility-card__eyebrow">Karta</p>
          <h2>Aktivt block</h2>
        </div>
        <p>
          {primaryArea
            ? `${primaryArea.name} är huvudspåret i det aktiva blocket. ${
                secondaryArea
                  ? `${secondaryArea.name} är ett bra andra stopp om energin finns.`
                  : primaryArea.routeNote
              }`
            : "Öppna blockets område direkt i karta när du vill orientera dig snabbt."}
        </p>
        <div className="utility-links">
          {primaryArea ? (
            <a className="utility-link" href={primaryArea.mapQuery} target="_blank" rel="noreferrer">
              Öppna {primaryArea.name}
            </a>
          ) : null}
          {secondaryArea ? (
            <a className="utility-link" href={secondaryArea.mapQuery} target="_blank" rel="noreferrer">
              Öppna {secondaryArea.name}
            </a>
          ) : null}
          <a
            className="utility-link"
            href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
              guide.maps.cityQuery
            )}`}
            target="_blank"
            rel="noreferrer"
          >
            Öppna stadskarta
          </a>
        </div>
      </article>

      <article className="panel utility-card">
        <div className="utility-card__header">
          <p className="utility-card__eyebrow">Transport</p>
          <h2>{guide.transport.title}</h2>
        </div>
        <p>{guide.transport.summary}</p>
        <ul className="utility-list">
          {guide.transport.bullets.map((bullet) => (
            <li key={bullet}>{bullet}</li>
          ))}
        </ul>
      </article>

      <article className="panel utility-card">
        <div className="utility-card__header">
          <p className="utility-card__eyebrow">Väder</p>
          <h2>Snabb koll</h2>
        </div>
        {weatherLoading ? (
          <p>Hämtar aktuell prognos...</p>
        ) : weatherError ? (
          <p>{weatherError}</p>
        ) : (
          <>
            <p>
              {weather.currentTemp !== null ? `${Math.round(weather.currentTemp)}°C` : "—"} och{" "}
              {weather.currentLabel.toLowerCase()} just nu.
            </p>
            <p>
              Max {weather.maxTemp !== null ? `${Math.round(weather.maxTemp)}°` : "—"} · Min{" "}
              {weather.minTemp !== null ? `${Math.round(weather.minTemp)}°` : "—"} · Regnrisk{" "}
              {weather.precipitationChance !== null
                ? `${Math.round(weather.precipitationChance)}%`
                : "—"}
            </p>
            <Link className="utility-link" href="/plan">
              Öppna plan
            </Link>
          </>
        )}
      </article>

      <article className="panel utility-card">
        <div className="utility-card__header">
          <p className="utility-card__eyebrow">Valuta</p>
          <h2>
            {guide.currency.base} och {guide.currency.quote}
          </h2>
        </div>
        {status === "ready" && snapshot ? (
          <>
            <div className="utility-rates">
              <div>
                <span>1 {guide.currency.base}</span>
                <strong>
                  {formatRate(snapshot.baseToQuote)} {guide.currency.quote}
                </strong>
              </div>
              <div>
                <span>100 {guide.currency.quote}</span>
                <strong>
                  {formatRate(snapshot.quoteToBase * 100)} {guide.currency.base}
                </strong>
              </div>
            </div>
            <p>Senaste kursdatum: {snapshot.date}</p>
          </>
        ) : status === "error" ? (
          <p>Kunde inte hämta kurs just nu. Försök igen när du har nät.</p>
        ) : (
          <p>
            Hämtar aktuell kurs för {guide.currency.base}/{guide.currency.quote}...
          </p>
        )}
      </article>
    </section>
  );
}
