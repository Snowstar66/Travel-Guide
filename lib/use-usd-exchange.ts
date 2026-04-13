"use client";

import { useEffect, useState } from "react";

type ExchangeSnapshot = {
  baseToQuote: number;
  quoteToBase: number;
  date: string;
};

export function useCurrencyExchange(baseCurrency: string, quoteCurrency: string) {
  const [snapshot, setSnapshot] = useState<ExchangeSnapshot | null>(null);
  const [status, setStatus] = useState<"loading" | "ready" | "error">("loading");

  useEffect(() => {
    let isActive = true;

    async function loadRates() {
      try {
        const response = await fetch(
          `https://api.frankfurter.dev/v2/rates?base=${baseCurrency}&quotes=${quoteCurrency}`,
          { cache: "no-store" }
        );

        if (!response.ok) {
          throw new Error("Failed to load rates");
        }

        const data = (await response.json()) as
          | Array<{ date: string; base: string; quote: string; rate: number }>
          | { data?: Array<{ date: string; base: string; quote: string; rate: number }> };

        const items = Array.isArray(data) ? data : data.data ?? [];
        const first = items[0];

        if (!first?.rate) {
          throw new Error("Missing rate");
        }

        if (!isActive) return;

        setSnapshot({
          baseToQuote: first.rate,
          quoteToBase: 1 / first.rate,
          date: first.date,
        });
        setStatus("ready");
      } catch {
        if (!isActive) return;
        setStatus("error");
      }
    }

    loadRates();

    return () => {
      isActive = false;
    };
  }, [baseCurrency, quoteCurrency]);

  return { snapshot, status };
}

export function useUsdExchange() {
  return useCurrencyExchange("USD", "SEK");
}
