"use client";

import { CityFlag } from "@/components/city-flag";
import {
  hasAccessToDay,
  isPremiumDay,
  paceOptions,
  ProfileOption,
  travelStyleOptions,
  TravelerProfile,
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
  const pace =
    paceOptions.find((option) => option.value === profile.pace) ??
    paceOptions[1];
  const currentDay =
    guide.tripDays.find((day) => day.id === profile.currentDayId) ?? guide.tripDays[0];

  return (
    <section className="panel" id="onboarding">
      <div className="panel__header">
        <p className="eyebrow">Onboarding</p>
        <h2>Gör appen till din resa</h2>
        <p>
          Det här är en lätt viktning av upplevelsen. Du svarar inte för att
          låsa appen, utan för att få mer relevant tempo och rätt typ av stöd.
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
        <div className="profile-card profile-card--summary">
          <h3>Din resa just nu</h3>
          <p>
            Appen lutar just nu åt en resa som känns {pace.label.toLowerCase()},
            med bas i {hotelArea.label.toLowerCase()} i {guide.displayName} och fokus på{" "}
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
          </div>
          <div className="onboarding-summary">
            <strong>Idag är det {currentDay.title}.</strong>
            <span>{currentDay.theme}</span>
          </div>
          <div className="day-pill-row">
            {guide.tripDays.map((day) => (
              <button
                key={day.id}
                type="button"
                className={`day-pill ${
                  profile.currentDayId === day.id ? "is-selected" : ""
                } ${!hasAccessToDay(profile, day.id) ? "is-locked" : ""}`}
                onClick={() =>
                  hasAccessToDay(profile, day.id) ? onUpdateProfile("currentDayId", day.id) : null
                }
                disabled={!hasAccessToDay(profile, day.id)}
              >
                Dag {day.dayNumber}
                {isPremiumDay(day.id) && !profile.hasPremium ? " · Premium" : ""}
              </button>
            ))}
          </div>
          {!profile.hasPremium ? (
            <div className="premium-inline-card">
              <div>
                <strong>Lås upp dag 2-5</strong>
                <p>Premium öppnar resten av resan och gör alla dagval klickbara.</p>
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

function ProfilePicker<T extends string>({
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
