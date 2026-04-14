"use client";

import { CityFlag } from "@/components/city-flag";
import {
  getTripBlocks,
  hasAccessToDay,
  paceOptions,
  ProfileOption,
  travelStyleOptions,
  TravelerProfile,
  tripLengthOptions,
} from "@/lib/trip-logic";
import { cityOptions, getCityGuide, getHotelAreaOptions, type CityId } from "@/lib/guide-config";

export function OnboardingPanel({
  profile,
  onUpdateProfile,
  onSetPremiumAccess,
}: {
  profile: TravelerProfile;
  onUpdateProfile: <K extends keyof TravelerProfile>(
    key: K,
    value: TravelerProfile[K]
  ) => void;
  onSetPremiumAccess: (hasPremium: boolean) => void;
}) {
  const travelStyle =
    travelStyleOptions.find((option) => option.value === profile.travelStyle) ??
    travelStyleOptions[0];
  const guide = getCityGuide(profile.cityId);
  const hotelAreaOptions = getHotelAreaOptions(profile.cityId);
  const hotelArea =
    hotelAreaOptions.find((option) => option.value === profile.hotelArea) ??
    hotelAreaOptions[hotelAreaOptions.length - 1];
  const pace = paceOptions.find((option) => option.value === profile.pace) ?? paceOptions[1];
  const tripLength =
    tripLengthOptions.find((option) => option.value === profile.tripLength) ?? tripLengthOptions[4];
  const tripBlocks = getTripBlocks(profile);

  return (
    <section className="panel" id="onboarding">
      <div className="panel__header">
        <p className="eyebrow">Inställningar</p>
        <h2>Forma resan efter dig</h2>
        <p>
          Här väljer du stad, tempo och reslängd. Planen anpassar sig direkt och håller sig inom
          fem tydliga planeringsblock.
        </p>
      </div>

      <div className="onboarding-grid">
        <div className="profile-card">
          <h3>Vilken stad reser du till?</h3>
          <div className="city-option-grid">
            {cityOptions.map((city) => (
              <button
                key={city.id}
                type="button"
                className={`city-option ${profile.cityId === city.id ? "is-selected" : ""}`}
                onClick={() => onUpdateProfile("cityId", city.id as CityId)}
              >
                <CityFlag cityId={city.id} className="city-option__flag" />
                <strong>{city.displayName}</strong>
              </button>
            ))}
          </div>
        </div>

        <ProfilePicker
          title="Vilken typ av resa vill du ha?"
          options={travelStyleOptions}
          selected={profile.travelStyle}
          onSelect={(value) => onUpdateProfile("travelStyle", value)}
        />
        <ProfilePicker
          title="Var tror du att du bor?"
          options={hotelAreaOptions}
          selected={profile.hotelArea}
          onSelect={(value) => onUpdateProfile("hotelArea", value)}
        />
        <ProfilePicker
          title="Vilket tempo vill du hålla?"
          options={paceOptions}
          selected={profile.pace}
          onSelect={(value) => onUpdateProfile("pace", value)}
        />
        <ProfilePicker
          title="Hur lång är resan?"
          options={tripLengthOptions}
          selected={profile.tripLength}
          onSelect={(value) => onUpdateProfile("tripLength", value)}
        />

        <div className="profile-card profile-card--summary">
          <h3>Din resa just nu</h3>
          <p>
            Appen lutar just nu åt en resa som känns {pace.label.toLowerCase()}, med bas i{" "}
            {hotelArea.label.toLowerCase()} i {guide.displayName} och fokus på{" "}
            {travelStyle.label.toLowerCase()}.
          </p>
          <div className="pill-row">
            <span className="pill pill--soft pill--city">
              <CityFlag cityId={guide.id} className="pill__flag" />
              {guide.displayName}
            </span>
            <span className="pill pill--soft">{travelStyle.label}</span>
            <span className="pill pill--soft">{hotelArea.label}</span>
            <span className="pill pill--soft">{pace.label}</span>
            <span className="pill pill--soft">{tripLength.label}</span>
          </div>
          <div className="onboarding-summary">
            <strong>Planen använder {tripBlocks.length} block.</strong>
            <span>
              {profile.tripLength <= 5
                ? "Varje block motsvarar en dag i resan."
                : "Flera dagar slås ihop så att appen håller sig inom fem tydliga block."}
            </span>
          </div>
          <div className="day-pill-row">
            {tripBlocks.map((block) => (
              <button
                key={block.dayId}
                type="button"
                className={`day-pill ${
                  profile.currentDayId === block.dayId ? "is-selected" : ""
                } ${!hasAccessToDay(profile, block.dayId) ? "is-locked" : ""}`}
                onClick={() =>
                  hasAccessToDay(profile, block.dayId) ? onUpdateProfile("currentDayId", block.dayId) : null
                }
                disabled={!hasAccessToDay(profile, block.dayId)}
              >
                {block.rangeLabel}
                {!hasAccessToDay(profile, block.dayId) ? " · Premium" : ""}
              </button>
            ))}
          </div>
          {!profile.hasPremium && tripBlocks.length > 1 ? (
            <div className="premium-inline-card">
              <div>
                <strong>Lås upp resten av blocken</strong>
                <p>Premium öppnar block 2-5 och gör alla planval klickbara.</p>
              </div>
              <button
                type="button"
                className="button button--solid"
                onClick={() => onSetPremiumAccess(true)}
              >
                Lås upp Premium
              </button>
            </div>
          ) : null}
        </div>
      </div>
    </section>
  );
}

function ProfilePicker<T extends string | number>({
  title,
  options,
  selected,
  onSelect,
}: {
  title: string;
  options: ProfileOption<T>[];
  selected: T;
  onSelect: (value: T) => void;
}) {
  return (
    <div className="profile-card">
      <h3>{title}</h3>
      <div className="profile-option-list">
        {options.map((option) => (
          <button
            key={option.value}
            type="button"
            className={`profile-option ${
              selected === option.value ? "is-selected" : ""
            }`}
            onClick={() => onSelect(option.value)}
          >
            <strong>{option.label}</strong>
            <span>{option.hint}</span>
          </button>
        ))}
      </div>
    </div>
  );
}
