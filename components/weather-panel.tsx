"use client";

import { getCityGuideByDayId } from "@/lib/guide-config";
import { useCityWeather } from "@/lib/use-nyc-weather";

export function WeatherPanel({ dayId }: { dayId: string }) {
  const guide = getCityGuideByDayId(dayId);
  const { snapshot, loading, error } = useCityWeather(guide?.id ?? "nyc");
  const rainPlan = guide?.rainPlansByDay[dayId];

  if (!guide || !rainPlan) {
    return null;
  }

  return (
    <section className="weather-panel">
      <article className="weather-card weather-card--summary">
        <div className="weather-card__top">
          <div>
            <p className="today-card__eyebrow">Väder</p>
            <h3>{`Dagens väder i ${guide.displayName}`}</h3>
          </div>
          <span className="weather-card__chip">
            {loading ? "Live" : snapshot.currentLabel}
          </span>
        </div>

        {loading ? (
          <p>Hämtar väderprognos...</p>
        ) : error ? (
          <p>{error}</p>
        ) : (
          <>
            <div className="weather-metrics">
              <div>
                <span className="weather-metric__label">Nu</span>
                <strong>
                  {snapshot.currentTemp !== null
                    ? `${Math.round(snapshot.currentTemp)}°C`
                    : "—"}
                </strong>
              </div>
              <div>
                <span className="weather-metric__label">Max / Min</span>
                <strong>
                  {snapshot.maxTemp !== null ? `${Math.round(snapshot.maxTemp)}°` : "—"} /{" "}
                  {snapshot.minTemp !== null ? `${Math.round(snapshot.minTemp)}°` : "—"}
                </strong>
              </div>
              <div>
                <span className="weather-metric__label">Regnrisk</span>
                <strong>
                  {snapshot.precipitationChance !== null
                    ? `${Math.round(snapshot.precipitationChance)}%`
                    : "—"}
                </strong>
              </div>
            </div>
            <p>
              <strong>Läge:</strong> {snapshot.currentLabel}
              {snapshot.windSpeed !== null ? ` • vind ${Math.round(snapshot.windSpeed)} km/h` : ""}
            </p>
          </>
        )}
      </article>

      <article className={`weather-card ${snapshot.isRainyDay ? "is-rainy" : ""}`}>
        <div className="weather-card__top">
          <div>
            <p className="today-card__eyebrow">Rain Plan</p>
            <h3>{rainPlan.title}</h3>
          </div>
          <span className="weather-card__chip weather-card__chip--muted">
            {snapshot.isRainyDay ? "Aktiverad" : "Standby"}
          </span>
        </div>
        <p>{rainPlan.intro}</p>
        <ul className="today-list">
          {rainPlan.swaps.map((swap) => (
            <li key={swap}>{swap}</li>
          ))}
        </ul>
        {!loading && !error ? (
          <p className="weather-status">
            {snapshot.isRainyDay
              ? "Det här ser ut som en dag där regnplanen faktiskt är värd att använda."
              : "Vädret ser användbart ut, men regnplanen finns här om prognosen svänger."}
          </p>
        ) : null}
      </article>
    </section>
  );
}
