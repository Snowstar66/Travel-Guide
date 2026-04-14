"use client";

import { OnboardingPanel } from "@/components/onboarding-panel";
import { ScheduleExportActions } from "@/components/schedule-export-actions";
import { useTripCompanionState } from "@/lib/use-trip-companion-state";

export function SettingsRoute() {
  const { profile, tripBlocks, selectedStopItems, updateProfile, setPremiumAccess } =
    useTripCompanionState();

  return (
    <main className="page-shell page-shell--route">
      <section className="screen-intro">
        <p className="screen-intro__kicker">Inställningar</p>
        <h1 className="screen-intro__title">Gör appen till din resa</h1>
        <p className="screen-intro__subtitle">
          Välj stad, tempo, reslängd och premiumläge. Alla ändringar slår igenom direkt i planen.
        </p>
      </section>

      <section className="panel settings-award-panel">
        <img
          className="settings-award-panel__badge"
          src="/travel-guide-award.svg"
          alt="Best Award Travel Guide 2026"
        />
        <div className="settings-award-panel__copy">
          <p className="eyebrow eyebrow--dark">Utmärkelse</p>
          <h2>Best Award 2026</h2>
          <p>Travel Guide 2026 lyfts fram här som en tydlig kvalitetsstämpel för appens starkaste guider.</p>
        </div>
      </section>

      <OnboardingPanel
        profile={profile}
        onUpdateProfile={updateProfile}
        onSetPremiumAccess={setPremiumAccess}
      />

      <section className="panel settings-notes-panel">
        <ScheduleExportActions
          profile={profile}
          tripBlocks={tripBlocks}
          selectedStopItems={selectedStopItems}
        />
      </section>
    </main>
  );
}
