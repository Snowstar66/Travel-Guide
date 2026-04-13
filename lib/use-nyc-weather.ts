"use client";

import { useEffect, useMemo, useState } from "react";
import { getCityGuide, type CityId } from "@/lib/guide-config";

type OpenMeteoResponse = {
  current?: {
    temperature_2m: number;
    weather_code: number;
    wind_speed_10m: number;
    is_day: number;
    time: string;
  };
  daily?: {
    time: string[];
    temperature_2m_max: number[];
    temperature_2m_min: number[];
    precipitation_probability_max: number[];
    weather_code: number[];
  };
};

export type WeatherSnapshot = {
  currentTemp: number | null;
  currentLabel: string;
  maxTemp: number | null;
  minTemp: number | null;
  precipitationChance: number | null;
  isRainyDay: boolean;
  windSpeed: number | null;
};

export function useCityWeather(cityId: CityId) {
  const [data, setData] = useState<OpenMeteoResponse | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const city = getCityGuide(cityId);

  useEffect(() => {
    let cancelled = false;

    async function loadWeather() {
      try {
        setLoading(true);
        setError(null);

        const params = new URLSearchParams({
          latitude: String(city.weather.latitude),
          longitude: String(city.weather.longitude),
          timezone: city.weather.timezone,
          current: "temperature_2m,weather_code,wind_speed_10m,is_day",
          daily:
            "weather_code,temperature_2m_max,temperature_2m_min,precipitation_probability_max",
          forecast_days: "1",
        });

        const response = await fetch(
          `https://api.open-meteo.com/v1/forecast?${params.toString()}`,
          { cache: "no-store" }
        );

        if (!response.ok) {
          throw new Error("Weather request failed");
        }

        const json = (await response.json()) as OpenMeteoResponse;
        if (!cancelled) {
          setData(json);
        }
      } catch {
        if (!cancelled) {
          setError("Kunde inte hämta vädret just nu.");
        }
      } finally {
        if (!cancelled) {
          setLoading(false);
        }
      }
    }

    loadWeather();
    return () => {
      cancelled = true;
    };
  }, [city]);

  const snapshot = useMemo<WeatherSnapshot>(() => {
    const current = data?.current;
    const daily = data?.daily;
    const weatherCode = daily?.weather_code?.[0] ?? current?.weather_code ?? 0;
    const precipitationChance = daily?.precipitation_probability_max?.[0] ?? null;
    const currentLabel = weatherCodeToLabel(weatherCode);
    const rainyByCode = [51, 53, 55, 61, 63, 65, 80, 81, 82].includes(weatherCode);
    const rainyByChance = precipitationChance !== null && precipitationChance >= 45;

    return {
      currentTemp: current?.temperature_2m ?? null,
      currentLabel,
      maxTemp: daily?.temperature_2m_max?.[0] ?? null,
      minTemp: daily?.temperature_2m_min?.[0] ?? null,
      precipitationChance,
      isRainyDay: rainyByCode || rainyByChance,
      windSpeed: current?.wind_speed_10m ?? null,
    };
  }, [data]);

  return { snapshot, loading, error };
}

export const useNycWeather = useCityWeather;

function weatherCodeToLabel(code: number) {
  if ([0].includes(code)) return "Klart";
  if ([1, 2, 3].includes(code)) return "Molnigt till halvklart";
  if ([45, 48].includes(code)) return "Dimma";
  if ([51, 53, 55].includes(code)) return "Duggregn";
  if ([61, 63, 65, 80, 81, 82].includes(code)) return "Regn";
  if ([71, 73, 75, 85, 86].includes(code)) return "Snö";
  if ([95, 96, 99].includes(code)) return "Åska";
  return "Blandat väder";
}
