"use client";

import { useEffect, useState } from "react";

type NavItem = {
  href: string;
  label: string;
};

export function SectionNav({ items }: { items: NavItem[] }) {
  const [hidden, setHidden] = useState(false);
  const [compact, setCompact] = useState(false);

  useEffect(() => {
    let lastScrollY = window.scrollY;

    const onScroll = () => {
      const current = window.scrollY;
      setCompact(current > 120);

      if (current > lastScrollY && current > 220) {
        setHidden(true);
      } else {
        setHidden(false);
      }

      lastScrollY = current;
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      aria-label="Section shortcuts"
      className={`top-nav ${compact ? "is-compact" : ""} ${
        hidden ? "is-hidden" : ""
      }`}
    >
      {items.map((item) => (
        <a key={item.href} href={item.href}>
          {item.label}
        </a>
      ))}
    </nav>
  );
}
