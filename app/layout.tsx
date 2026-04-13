import { AppTransition } from "@/components/app-transition";
import type { Metadata, Viewport } from "next";
import { MobileNav } from "@/components/mobile-nav";
import { PwaShell } from "@/components/pwa-shell";
import "./globals.css";

export const metadata: Metadata = {
  title: "Trip Companion",
  description: "A calm multi-city travel guide with premium day unlocks.",
};

export const viewport: Viewport = {
  themeColor: "#122126",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="sv">
      <body className="app-body">
        <PwaShell />
        <div className="app-stage">
          <div className="app-stage__device">
            <div className="app-stage__viewport">
              <AppTransition>{children}</AppTransition>
            </div>
            <MobileNav />
          </div>
        </div>
      </body>
    </html>
  );
}
