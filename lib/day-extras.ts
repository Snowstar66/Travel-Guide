export type AreaCard = {
  id: string;
  name: string;
  vibe: string;
  whyItWorks: string;
  routeNote: string;
  anchorStops: string[];
  x: number;
  y: number;
  mapQuery: string;
};

export type RainPlan = {
  title: string;
  intro: string;
  swaps: string[];
};

function mapLink(query: string) {
  return `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(query)}`;
}

export const areaCardsByDay: Record<string, AreaCard[]> = {
  "day-1": [
    {
      id: "hotel-zone",
      name: "Hotel Zone",
      vibe: "Trygg bas",
      whyItWorks: "Första dagen handlar mer om att bygga orientering än att samla sevärdheter.",
      routeNote: "Håll allt inom en enkel hemväg tills kroppen fattat tidszonen.",
      anchorStops: ["Hotell", "Apotek", "Närmaste station"],
      x: 48,
      y: 42,
      mapQuery: mapLink("Midtown Manhattan hotels New York"),
    },
    {
      id: "west-village",
      name: "West Village",
      vibe: "Mjuk filmisk start",
      whyItWorks: "Låg stress, hög New York-känsla och lätt att gå i mänskligt tempo.",
      routeNote: "Bra första kvarter om du vill känna staden utan att bli överkörd av den.",
      anchorStops: ["Washington Square Park", "Smågator", "Kafépaus"],
      x: 36,
      y: 68,
      mapQuery: mapLink("West Village New York"),
    },
  ],
  "day-2": [
    {
      id: "bryant-midtown",
      name: "Bryant Park / Midtown East",
      vibe: "Klassisk Manhattan",
      whyItWorks: "Elegant, lättorienterat och fullt av första gången-ögonblick.",
      routeNote: "Bra morgonspår innan de största köerna byggs upp längre västerut.",
      anchorStops: ["Bryant Park", "Biblioteket", "Grand Central"],
      x: 54,
      y: 38,
      mapQuery: mapLink("Bryant Park New York"),
    },
    {
      id: "rockefeller-times",
      name: "Rockefeller / Times Square",
      vibe: "Storstad i högdos",
      whyItWorks: "Perfekt när du vill känna att du är mitt i vykorts-New York.",
      routeNote: "Ta Times Square i kort dos och låt utsikten vara dagens riktiga huvudnummer.",
      anchorStops: ["Rockefeller", "Observation deck", "Kort Times Square-pass"],
      x: 60,
      y: 26,
      mapQuery: mapLink("Rockefeller Center New York"),
    },
  ],
  "day-3": [
    {
      id: "lower-manhattan",
      name: "Lower Manhattan",
      vibe: "Historia och tyngd",
      whyItWorks: "Här känns stadens berättelse fysisk: finans, minnesplatser och vattnet nära.",
      routeNote: "Starta tidigt och håll tempot lugnt på förmiddagen.",
      anchorStops: ["9/11 Memorial", "Wall Street", "Battery-området"],
      x: 30,
      y: 82,
      mapQuery: mapLink("Lower Manhattan New York"),
    },
    {
      id: "harbor-line",
      name: "Harbor Line",
      vibe: "Skyline från vatten",
      whyItWorks: "Vattnet ger proportioner. Staden blir lättare att förstå när man ser den utifrån.",
      routeNote: "Bra eftermiddag när du vill ha stor effekt utan för många beslut.",
      anchorStops: ["Färjeläge", "Skylinevy", "Frihetsgudinnan-spår"],
      x: 16,
      y: 92,
      mapQuery: mapLink("Staten Island Ferry Terminal New York"),
    },
  ],
  "day-4": [
    {
      id: "soho-village",
      name: "SoHo / Village",
      vibe: "Personlig stadskänsla",
      whyItWorks: "Arkitektur, små butiker och promenadtempo som gör att resan börjar kännas din.",
      routeNote: "Perfekt dag att gå lite långsammare och låta ett område få vara nog.",
      anchorStops: ["SoHo", "NoHo", "Village-gator"],
      x: 38,
      y: 64,
      mapQuery: mapLink("SoHo New York"),
    },
    {
      id: "brooklyn-dumbo",
      name: "Brooklyn / DUMBO",
      vibe: "Skyline med lokalare känsla",
      whyItWorks: "Stadssilhuetten känns större när du tittar tillbaka mot Manhattan.",
      routeNote: "Bra eftermiddagsval om du vill byta rytm utan att tappa New York-känslan.",
      anchorStops: ["Brofäste", "Utsiktspunkt", "Lunch med vy"],
      x: 72,
      y: 74,
      mapQuery: mapLink("DUMBO Brooklyn New York"),
    },
  ],
  "day-5": [
    {
      id: "culture-track",
      name: "Kulturspåret",
      vibe: "Snygg avslutning",
      whyItWorks: "Ett sista tydligt stopp känns bättre än splittrad slutpanik.",
      routeNote: "Välj en huvudaktivitet och låt resten vara enkelt.",
      anchorStops: ["Museum", "Parkpromenad", "Lugn lunch"],
      x: 56,
      y: 34,
      mapQuery: mapLink("Museum Mile New York"),
    },
    {
      id: "soft-exit-track",
      name: "Lugn exit",
      vibe: "Bra slut i kroppen",
      whyItWorks: "Det ger resan ett avslut i rätt ton utan att hemresan blir sitt eget problem.",
      routeNote: "Sista dagen ska kännas lätt nog att du fortfarande gillar staden på väg till flyget.",
      anchorStops: ["Kafé", "Favoritkvarter", "Tidig återgång till hotellet"],
      x: 42,
      y: 52,
      mapQuery: mapLink("Manhattan New York cafe"),
    },
  ],
};

export const rainPlansByDay: Record<string, RainPlan> = {
  "day-1": {
    title: "Rain mode: håll första dagen kort och varm",
    intro: "Bygg fortfarande orientering, men lägg ännu mindre press på upplevelsen.",
    swaps: [
      "Byt lång promenad mot ett kvartersvarv + längre kaféstopp.",
      "Fokusera på att lära dig närmaste station och enklaste hemväg.",
      "Ta en tidig middag och spara mer av energin till dag två.",
    ],
  },
  "day-2": {
    title: "Rain mode: låt Midtown bli mer inomhusvänligt",
    intro: "Dag två tål regn ganska bra om du håller dig runt klassiska inomhusmiljöer.",
    swaps: [
      "Prioritera Grand Central, biblioteket och ett observation deck om sikten tillåter.",
      "Skala ner långa gatuetapper runt Times Square.",
      "Planera längre lunch istället för extra utomhuspromenad.",
    ],
  },
  "day-3": {
    title: "Rain mode: välj ett vattenspår eller ett inomhusspår, inte båda",
    intro: "Downtown i regn kan bli tungt om du försöker pressa in för mycket logistik.",
    swaps: [
      "Om färja känns rått, ge mer tid till memorialområdet och inomhuspauser.",
      "Skippa långa väntetider utomhus om vinden är stark.",
      "Satsa på en varm sen lunch som tydlig mittpunkt.",
    ],
  },
  "day-4": {
    title: "Rain mode: gör dag fyra mer bokhandel, kaffe och museum",
    intro: "Det personliga New York fungerar fortfarande i regn, bara med kortare promenadsjok.",
    swaps: [
      "Byt Brooklyn-spåret mot ett museum eller ett område med täta stopp.",
      "Låt SoHo bli mer butiker och mindre långstråk.",
      "Planera för två varma pauser istället för en lång brunch.",
    ],
  },
  "day-5": {
    title: "Rain mode: välj den mjuka avslutningen",
    intro: "Sista dagen vinner på enkelhet när vädret är sämre.",
    swaps: [
      "Välj kulturspår eller kaféspår, inte shopping i flera områden.",
      "Packa in återreselogistiken tidigt och tydligt.",
      "Sikta på ett sista bra minne, inte tre halvbra.",
    ],
  },
};
