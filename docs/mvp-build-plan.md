# MVP Build Plan: Trip Companion NYC

## Recommended Starting Point

Build a mobile-first web app before considering native apps.

Why:

- faster to design and ship
- easy to test on phone during development
- enough for reading, check-offs, and notes
- can later become a PWA with install support

## Recommended Tech Direction

- Frontend: Next.js
- Styling: Tailwind CSS or simple design tokens plus CSS modules
- State: local component state plus local storage
- Content: JSON or Markdown files for itinerary content
- Persistence in V1: browser local storage

This gives us a low-risk path to a polished prototype without backend complexity.

## Build Order

### Phase 1: Content-First Prototype

Goal:
Prove that the reading experience and day-by-day structure are compelling.

Build:

- landing screen
- onboarding with 3 to 5 questions
- five day overview
- day detail page
- stop cards
- check-off state
- notes field

No backend yet.

### Phase 2: Confidence Layer

Goal:
Make the app useful on the ground, not just pretty in advance.

Build:

- know-before-you-go section
- transport basics
- neighborhood basics
- rain and low-energy alternatives
- “what to book ahead” prompts

### Phase 3: Polish Layer

Goal:
Make it feel like a real companion.

Build:

- favorites
- progress summary
- better typography and pacing
- subtle offline support
- richer daily narrative copy

## First Real Deliverables

1. Define app name and tone
2. Write onboarding questions
3. Write full Day 1 content
4. Design the screen map
5. Scaffold the frontend app

## Suggested Screen Map

1. `/`
   Intro and value proposition

2. `/onboarding`
   Trip style and travel basics

3. `/trip`
   Five-day overview

4. `/trip/day-1` to `/trip/day-5`
   Daily itinerary pages

5. `/know-before-you-go`
   Transit, safety, neighborhoods, booking

6. `/saved`
   Favorites and notes

## First Slice To Implement

If we want momentum fast, we should build only this first:

- onboarding
- trip overview
- Day 1 page
- check-off support
- notes support

If Day 1 feels strong, the rest of the app will be much easier to scale.

## Content Model for V1

Each day can be represented with:

- title
- mood
- intro paragraph
- morning items
- afternoon items
- evening items
- optional swaps
- food tips
- warnings

Each stop can include:

- id
- name
- short description
- why it matters
- duration
- nearby food tip
- practical tip

## Decisions We Can Delay

- authentication
- cloud sync
- maps integration
- AI personalization
- booking integrations
- multi-city architecture

## Best Immediate Next Step

Create the Day 1 content and the first screen wireframe at the same time.

That will answer the most important product question:

Does this feel like a travel companion people actually want to read?
