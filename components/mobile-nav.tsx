"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { getCityGuide } from "@/lib/guide-config";
import {
  patchStoredProfile,
  profileUpdatedEvent,
  readStoredProfile,
} from "@/lib/profile-storage";
import { defaultProfile, hasAccessToDay, TravelerProfile } from "@/lib/trip-logic";

function NavIcon({ type }: { type: "home" | "today" | "plan" }) {
  if (type === "home") {
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

  if (type === "today") {
    return (
      <svg aria-hidden="true" viewBox="0 0 24 24">
        <circle
          cx="12"
          cy="12"
          r="7.5"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.9"
        />
        <path
          d="M12 7.5v4.8l3.2 1.8"
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
        d="M5.5 18.5h13M7 15l3-3.5 2.5 1.8 4-5.3"
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.9"
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

  const guide = getCityGuide(profile.cityId);
  const routeDayId = pathname.startsWith("/day/") ? decodeURIComponent(pathname.slice(5)) : null;
  const activeDayId =
    guide.tripDays.find((day) => day.id === routeDayId)?.id ?? profile.currentDayId;
  const currentDay = guide.tripDays.find((day) => day.id === activeDayId) ?? guide.tripDays[0];
  const isTodayRoute = pathname === "/today";

  const items = [
    { href: "/", label: "Hem", icon: "home" as const },
    { href: "/today", label: "Idag", icon: "today" as const },
    { href: `/day/${currentDay.id}`, label: "Plan", icon: "plan" as const },
  ];

  return (
    <nav className="mobile-nav" aria-label="Primary">
      <div className="mobile-day-nav" aria-label="Resdagar">
        {guide.tripDays.map((day) => {
          const locked = !hasAccessToDay(profile, day.id);
          const active = day.id === currentDay.id;
          const href = isTodayRoute ? "/today" : `/day/${day.id}`;

          return (
            <Link
              key={day.id}
              href={href}
              className={`mobile-day-nav__link ${active ? "is-active" : ""}`}
              aria-current={active ? "page" : undefined}
              onClick={() => {
                const next = patchStoredProfile({ currentDayId: day.id });
                setProfile(next);
              }}
            >
              <span className="mobile-day-nav__day">Dag {day.dayNumber}</span>
              {locked ? (
                <span className="mobile-day-nav__lock" aria-hidden="true">
                  <LockIcon />
                </span>
              ) : null}
            </Link>
          );
        })}
      </div>

      <div className="mobile-nav__items">
        {items.map((item) => {
          const active =
            item.href === "/"
              ? pathname === "/"
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
