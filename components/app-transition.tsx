"use client";

import { ReactNode } from "react";
import { usePathname } from "next/navigation";

export function AppTransition({ children }: { children: ReactNode }) {
  const pathname = usePathname();

  return (
    <div key={pathname} className="app-transition-shell">
      {children}
    </div>
  );
}
