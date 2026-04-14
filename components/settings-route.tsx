"use client";

import { NotesActions } from "@/components/notes-actions";
import { OnboardingPanel } from "@/components/onboarding-panel";
import { useTripCompanionState } from "@/lib/use-trip-companion-state";

export function SettingsRoute() {
  const { profile, notes, updateProfile, setPremiumAccess } = useTripCompanionState();

  return (
    <main className="page-shell page-shell--route">
      <section className="screen-intro">
        <p className="screen-intro__kicker">Inställningar</p>
        <h1 className="screen-intro__title">Gör appen till din resa</h1>
        <p className="screen-intro__subtitle">
          Välj stad, tempo, reslängd och premiumläge. Alla ändringar slår igenom direkt i planen.
        </p>
      </section>

      <OnboardingPanel
        profile={profile}
        onUpdateProfile={updateProfile}
        onSetPremiumAccess={setPremiumAccess}
      />

      <section className="panel settings-notes-panel">
        <NotesActions notes={notes} profile={profile} />
      </section>
    </main>
  );
}
