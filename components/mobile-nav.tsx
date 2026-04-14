"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import {
  patchStoredProfile,
  profileUpdatedEvent,
  readStoredProfile,
} from "@/lib/profile-storage";
import {
  defaultProfile,
  getTripBlockByDayId,
  getTripBlocks,
  hasAccessToDay,
  TravelerProfile,
} from "@/lib/trip-logic";

function NavIcon({ type }: { type: "overview" | "plan" | "schedule" | "city" | "settings" }) {
  if (type === "overview") {
    return (
      <svg aria-hidden="true" viewBox="0 0 24 24">
        <path
          d="M5.5 10.5 12 5l6.5 5.5V19a1 1 0 0 1-1 1h-4v-5h-3v5h-4a1 1 0 0 1-1-1z"
          fill="none"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.9"
        />
      </svg>
    );
  }

  if (type === "plan") {
    return (
      <svg aria-hidden="true" viewBox="0 0 24 24">
        <path
          d="M4.5 7.5h15M4.5 12h10.5M4.5 16.5h7.5M17.5 11.25 19.5 13l-2 1.75"
          fill="none"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.9"
        />
      </svg>
    );
  }

  if (type === "schedule") {
    return (
      <svg aria-hidden="true" viewBox="0 0 24 24">
        <path
          d="M7 4.75v2.5M17 4.75v2.5M5.75 8.5h12.5M6.5 6.5h11a1 1 0 0 1 1 1v10a1 1 0 0 1-1 1h-11a1 1 0 0 1-1-1v-10a1 1 0 0 1 1-1Zm2.25 5h2.5m2 0h2.5m-6.5 3h2.5"
          fill="none"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.7"
        />
      </svg>
    );
  }

  if (type === "city") {
    return (
      <svg aria-hidden="true" viewBox="0 0 24 24">
        <path
          d="M6 18.5h12M7.5 18.5v-9l4.5-2.5 4.5 2.5v9M10 12.5h4"
          fill="none"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.9"
        />
      </svg>
    );
  }

  return (
    <svg aria-hidden="true" viewBox="0 0 24 24">
      <path
        d="M7.5 8.5h9M7.5 12h9M7.5 15.5h6M5.5 5h13a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1h-13a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1Z"
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.8"
      />
    </svg>
  );
}

function LockIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24">
      <path
        d="M8 10V8.75a4 4 0 0 1 8 0V10m-7 0h6a1 1 0 0 1 1 1v5.5a1 1 0 0 1-1 1H9a1 1 0 0 1-1-1V11a1 1 0 0 1 1-1Z"
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.8"
      />
    </svg>
  );
}

export function MobileNav() {
  const pathname = usePathname();
  const [profile, setProfile] = useState<TravelerProfile>(defaultProfile);

  useEffect(() => {
    setProfile(readStoredProfile());
  }, []);

  useEffect(() => {
    function handleProfileUpdated(event: Event) {
      setProfile((event as CustomEvent<TravelerProfile>).detail);
    }

    window.addEventListener(profileUpdatedEvent, handleProfileUpdated as EventListener);
    return () => {
      window.removeEventListener(profileUpdatedEvent, handleProfileUpdated as EventListener);
    };
  }, []);

  const tripBlocks = getTripBlocks(profile);
  const routeDayId = pathname.startsWith("/day/") ? decodeURIComponent(pathname.slice(5)) : null;
  const activeBlock =
    (routeDayId ? getTripBlockByDayId(profile, routeDayId) : null) ??
    tripBlocks.find((block) => block.dayId === profile.currentDayId) ??
    tripBlocks[0];
  const showBlockRail =
    pathname === "/" ||
    pathname === "/plan" ||
    pathname.startsWith("/day/");

  const items = [
    { href: "/", label: "Översikt", icon: "overview" as const },
    { href: "/plan", label: "Plan", icon: "plan" as const },
    { href: "/schedule", label: "Schema", icon: "schedule" as const },
    { href: "/city", label: "Stad", icon: "city" as const },
    { href: "/settings", label: "Inst.", icon: "settings" as const },
  ];

  return (
    <nav className="mobile-nav" aria-label="Primary">
      {showBlockRail ? (
        <div className="mobile-day-nav" aria-label="Dagspår">
          {tripBlocks.map((block) => {
            const locked = !hasAccessToDay(profile, block.dayId);
            const active = block.dayId === activeBlock?.dayId;
            const href = pathname === "/" || pathname === "/schedule" ? pathname : pathname.startsWith("/day/") ? `/day/${block.dayId}` : "/plan";

            return (
              <Link
                key={block.dayId}
                href={href}
                className={`mobile-day-nav__link ${active ? "is-active" : ""}`}
                aria-current={active ? "page" : undefined}
                aria-label={block.merged ? `Dagspår ${block.blockNumber}, ${block.rangeLabel}` : `${block.label}, ${block.rangeLabel}`}
                title={block.merged ? `${block.label} · ${block.rangeLabel}` : block.rangeLabel}
                onClick={() => {
                  const next = patchStoredProfile({ currentDayId: block.dayId });
                  setProfile(next);
                }}
              >
                <span className="mobile-day-nav__day">{block.shortLabel}</span>
                {locked ? (
                  <span className="mobile-day-nav__lock" aria-hidden="true">
                    <LockIcon />
                  </span>
                ) : null}
              </Link>
            );
          })}
        </div>
      ) : null}

      <div className="mobile-nav__items">
        {items.map((item) => {
          const active =
            item.href === "/"
              ? pathname === "/"
              : item.href === "/plan"
                ? pathname === "/plan" || pathname.startsWith("/day/")
                : pathname === item.href || pathname.startsWith(item.href + "/");

          return (
            <Link
              key={item.href}
              href={item.href}
              className={`mobile-nav__link ${active ? "is-active" : ""}`}
              aria-current={active ? "page" : undefined}
            >
              <span className="mobile-nav__icon">
                <NavIcon type={item.icon} />
              </span>
              <span className="mobile-nav__label">{item.label}</span>
            </Link>
          );
        })}
      </div>
    </nav>
  );
}
