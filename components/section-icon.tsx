export function SectionIcon({
  kind,
}: {
  kind: "today" | "day" | "weather" | "notes";
}) {
  if (kind === "today") {
    return (
      <svg aria-hidden="true" viewBox="0 0 24 24">
        <circle cx="12" cy="12" r="7" fill="none" stroke="currentColor" strokeWidth="1.8" />
        <path
          d="M12 7v5l3 2"
          fill="none"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.8"
        />
      </svg>
    );
  }

  if (kind === "day") {
    return (
      <svg aria-hidden="true" viewBox="0 0 24 24">
        <path
          d="M5 18.5h14M6.5 15l3.5-4 3 2 4.5-6"
          fill="none"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.8"
        />
        <circle cx="6.5" cy="15" r="1.4" fill="currentColor" />
        <circle cx="10" cy="11" r="1.4" fill="currentColor" />
        <circle cx="13" cy="13" r="1.4" fill="currentColor" />
        <circle cx="17.5" cy="7" r="1.4" fill="currentColor" />
      </svg>
    );
  }

  if (kind === "weather") {
    return (
      <svg aria-hidden="true" viewBox="0 0 24 24">
        <path
          d="M7.5 17.5h8a4 4 0 0 0 .4-8 5.5 5.5 0 0 0-10.6 1.5A3.3 3.3 0 0 0 7.5 17.5Z"
          fill="none"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.8"
        />
      </svg>
    );
  }

  return (
    <svg aria-hidden="true" viewBox="0 0 24 24">
      <path
        d="M7 5.5h10M7 10.5h10M7 15.5h6"
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth="1.8"
      />
      <path
        d="M5.5 4.5h13a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-13a1 1 0 0 1-1-1v-13a1 1 0 0 1 1-1Z"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
      />
    </svg>
  );
}
