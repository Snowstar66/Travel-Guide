import {
  palmaStopChoiceOptions,
  palmaStopInsights,
  palmaStopPreviews,
} from "@/lib/palma-stop-insights";

export type StopInsightLink = {
  label: string;
  url: string;
};

export type StopInsight = {
  facts: string[];
  ideas: string[];
  links: StopInsightLink[];
};

export type StopInsightPreview = {
  eyebrow: string;
  title: string;
  copy: string;
  imageUrl?: string;
  imageAlt?: string;
};

export type StopChoiceOption = {
  id: string;
  title: string;
  summary: string;
  url: string;
  sourceLabel: string;
  sourceUrl: string;
};

const nycStopInsights: Record<string, StopInsight> = {
  "nyc-arrival-check": {
    facts: [
      "Första radien runt hotellet sparar ofta mer stress än en extra sevärdhet första timmarna.",
      "Leta direkt efter apotek, deli och närmaste station så resten av veckan känns enklare.",
    ],
    ideas: [
      "Spara hotellet och stationen som favoriter i mobilen innan ni går längre bort.",
      "Köp vatten och något enkelt att ha på rummet redan här.",
    ],
    links: [],
  },
  "nyc-first-ride": {
    facts: [
      "MTA säger att subway och lokalbuss kostar 3 dollar per resa.",
      "Du får fri transfer inom två timmar om du använder samma kort eller enhet.",
      "Tap-and-go med samma kort, mobil eller OMNY-kort räknas mot veckotaket på 35 dollar.",
    ],
    ideas: [
      "Gör en kort provtur dag 1 så att kollektivtrafiken känns vardaglig innan ni måste lita på den.",
      "Använd samma kort eller mobil hela veckan för enklare betalflöde.",
    ],
    links: [
      { label: "MTA fares och OMNY", url: "https://www.mta.info/fares-tolls/subway-bus" },
    ],
  },
  "nyc-village-walk": {
    facts: [
      "Washington Square Park är 9,75 acres stort och har länge fungerat som både mötesplats och stadsrum.",
      "NYC Parks lyfter särskilt fram fontänen och Washington Square Arch som parkens tydliga ankare.",
    ],
    ideas: [
      "Låt promenaden passera Washington Square Park och gå vidare in på smågatorna runtom.",
      "Ta en kort paus nära fontänen i stället för att försöka täcka för många kvarter.",
    ],
    links: [
      { label: "Washington Square Park", url: "https://www2.nycgovparks.org/parks/washington-square-park" },
      { label: "Washington Square Arch", url: "https://www2.nycgovparks.org/parks/washingtonsquarepark/monuments/1657" },
    ],
  },
  "nyc-park-pause": {
    facts: [
      "Washington Square Park har officiellt listade eateries, offentliga toaletter och Wi‑Fi-hotspots.",
      "NYC Parks listar bland annat matvagn nära fontänen och NY Dosas på parkens norra sida.",
    ],
    ideas: [
      "Ta en paus här när du vill vila benen utan att lämna dagens område.",
      "Sitt hellre tio minuter i lugn än att försöka trycka in ännu ett kvarter.",
    ],
    links: [
      { label: "Parkfakta och faciliteter", url: "https://www2.nycgovparks.org/parks/washington-square-park" },
      { label: "Mat i parken", url: "https://www2.nycgovparks.org/parks/washington-square-park/facilities/restaurants" },
    ],
  },
  "nyc-bryant-park": {
    facts: [
      "Bryant Park har gratis aktiviteter som Reading Room och spelutlåning under säsong.",
      "Reading Room erbjuder fri användning av böcker, tidningar och magasin när den är öppen.",
    ],
    ideas: [
      "Börja dagen här med kaffe och en kort loop förbi biblioteket bredvid.",
      "Om tempot är lugnt: kolla om Reading Room eller spelområdet är igång just den dagen.",
    ],
    links: [
      { label: "Bryant Park aktiviteter", url: "https://bryantpark.org/activities" },
      { label: "Reading Room", url: "https://bryantpark.org/amenities/reading-room" },
      { label: "NYPL visitor guide", url: "https://www.nypl.org/about/locations/schwarzman/visitor-guide" },
    ],
  },
  "nyc-grand-central": {
    facts: [
      "Grand Central är öppet dagligen 05:15 till 02:00 enligt den officiella visitor-sidan.",
      "Terminalen trafikeras av 4, 5, 6, 7 och S-linjerna.",
      "Den officiella guidade turen lyfter bland annat Vanderbilt Hall, Whispering Gallery och den klassiska klockan.",
    ],
    ideas: [
      "Stå mitt i Main Concourse och titta upp direkt, det är halva upplevelsen.",
      "Använd Grand Central som ett snyggt förmiddagsstopp, inte som ett långt block.",
    ],
    links: [
      { label: "Besök Grand Central", url: "https://grandcentralterminal.com/visit/" },
      { label: "Om Grand Central", url: "https://grandcentralterminal.com/about/" },
    ],
  },
  "nyc-observation-deck": {
    facts: [
      "Top of the Rock säger att det inte finns någon tidsgräns när du väl är uppe på observationsdäcken.",
      "Den officiella uppskattningen är att många besök stannar ungefär 45 till 60 minuter.",
      "Vid dåligt väder kan delar stängas, men biljetter kan återutfärdas för ett annat datum eller tid.",
    ],
    ideas: [
      "Välj ett enda deck och låt det bli dagens stora wow-stopp.",
      "Top of the Rock fungerar extra bra om du vill få orientering över Manhattan tidigt i resan.",
    ],
    links: [
      { label: "Top of the Rock FAQ", url: "https://www.rockefellercenter.com/buy-tickets/refunds/" },
      { label: "Rockefeller Center", url: "https://www.rockefellercenter.com/" },
    ],
  },
  "nyc-times-square-soft": {
    facts: [
      "Times Square Alliance driver Midnight Moment, ett offentligt digitalt konstprogram över mer än 92 skärmar.",
      "Programmet synkas varje kväll 23:57 till 00:00 från 41st till 49th Street.",
    ],
    ideas: [
      "Gå igenom snabbt, ta in ljuset, och gå vidare innan det blir din kvälls huvudaktivitet.",
      "Om ni ändå passerar sent: Midnight Moment är ett bättre skäl att stanna än att bara stå still i folkmassan.",
    ],
    links: [
      { label: "Times Square Midnight Moment", url: "https://www.timessquarenyc.org/arts/midnight-moment" },
      { label: "Times Square Alliance", url: "https://www.timessquarenyc.org/" },
    ],
  },
  "nyc-wtc-memorial": {
    facts: [
      "9/11 Memorial beskriver platsen som en plats för remembrance och quiet reflection.",
      "Museet har säkerhetskontroll och begränsningar för större väskor.",
      "Survivor Tree på området är en levande symbol för resilience, survival och rebirth.",
    ],
    ideas: [
      "Lägg besöket tidigt på dagen och gå in med lugn rytm.",
      "Om du vill göra stoppet mer minnesvärt: leta upp Survivor Tree eller använd Find a Name-funktionen.",
    ],
    links: [
      { label: "Visitor guidelines", url: "https://www.911memorial.org/visit/about/visitor-guidelines" },
      { label: "Survivor Tree", url: "https://www.911memorial.org/visit/memorial/survivor-tree" },
      { label: "Find a Name", url: "https://names.911memorial.org/" },
    ],
  },
  "nyc-wall-street": {
    facts: [
      "Federal Hall på 26 Wall Street är ett av de tydligaste historiska stoppen i området.",
      "National Park Service listar flera enkla subway-ankomster hit, bland annat 4/5, J/Z, 2/3, 1, R och A/C.",
    ],
    ideas: [
      "Gör Wall Street som en kort historisk sväng, inte som ett halvdagsblock.",
      "Om du vill ge området mer innehåll: låt Federal Hall bli det tydliga ankaret.",
    ],
    links: [
      { label: "Federal Hall via NPS", url: "https://www.nps.gov/feha/planyourvisit/publictransportation.htm" },
    ],
  },
  "nyc-ferry-view": {
    facts: [
      "Staten Island Ferry är gratis och kör året runt.",
      "Själva överfarten tar ungefär 25 minuter.",
      "Under turen syns både Frihetsgudinnan och Ellis Island från däck.",
    ],
    ideas: [
      "Åk utanför rusningstid om du vill att upplevelsen ska kännas mer som utsikt än transport.",
      "Ställ dig ute när ni lämnar Manhattan för bästa känsla av skyline och vatten.",
    ],
    links: [
      { label: "Ferry information", url: "https://siferry.com/" },
      { label: "Ferry schedule", url: "https://siferry.com/schedules/" },
    ],
  },
  "nyc-liberty-choice": {
    facts: [
      "National Park Service rekommenderar att färjebiljetter köps i förväg.",
      "Statue City Cruises är den enda auktoriserade färjeoperatören till Liberty och Ellis Island.",
      "För pedestal eller crown krävs förhandsbokning och väntetiden kan bli lång under högtryck.",
    ],
    ideas: [
      "Ta detta bara om Frihetsgudinnan verkligen är ett huvudmål, annars räcker färjan ofta långt.",
      "Välj tidig avgång om ni vill hinna både Liberty och Ellis Island samma dag.",
    ],
    links: [
      { label: "Plan your visit", url: "https://www.nps.gov/stli/planyourvisit/" },
      { label: "Pedestal info", url: "https://www.nps.gov/stli/planyourvisit/visiting-the-pedestal.htm" },
    ],
  },
  "nyc-brooklyn-bridge-area": {
    facts: [
      "Brooklyn Bridge Park lyfter fram att parken är öppen året runt och att mycket av utbudet är gratis offentligt rum.",
      "Parken beskriver själv platsen som fri offentlig yta med många gratis aktiviteter och events.",
    ],
    ideas: [
      "Gå hit om du vill ha skylinefotot utan att hela eftermiddagen måste bli brovandring.",
      "Det här är ett bra stopp för sen lunch eller bara 30 minuter med utsikt.",
    ],
    links: [
      { label: "Besök Brooklyn Bridge Park", url: "https://brooklynbridgepark.org/" },
      { label: "Plan your visit", url: "https://brooklynbridgepark.org/plan-your-visit/get-a-permit/" },
    ],
  },
  "nyc-museum-flex": {
    facts: [
      "The Met har pay-what-you-wish för New York State residents och inkluderar samma dags inträde till båda Met-lokationerna.",
      "MoMA lyfter fram sin digitala visitor guide, turer, caféer och Friday Nights-program.",
      "American Museum of Natural History rekommenderar förköp för snabbare entré och har mer än 40 permanenta hallar.",
    ],
    ideas: [
      "Välj ett museum utifrån energi: The Met för hel dags känsla, MoMA för ren modern koncentration, AMNH om ni vill ha mer wow och mindre konsttrötthet.",
      "Ta bara ett museum den här dagen så att resten av rytmen håller.",
    ],
    links: [
      { label: "The Met", url: "https://www.metmuseum.org/en/plan-your-visit" },
      { label: "MoMA", url: "https://www.moma.org/" },
      { label: "AMNH", url: "https://www.amnh.org/plan-your-visit" },
    ],
  },
  "nyc-culture-finale": {
    facts: [
      "The Met, MoMA och AMNH har alla tydliga plan-your-visit-sidor som gör sista dagens logistik lättare.",
      "The Met lyfter gratis audio guide och fria turer, medan MoMA och AMNH båda bygger mycket av upplevelsen kring tydliga highlights.",
    ],
    ideas: [
      "Välj en kulturell final som känns lätt att avsluta efter, inte en som kräver två extra förflyttningar.",
      "Perfekt sista dag för ett enda museum plus lugn lunch.",
    ],
    links: [
      { label: "The Met", url: "https://www.metmuseum.org/en/plan-your-visit" },
      { label: "MoMA", url: "https://www.moma.org/" },
      { label: "AMNH", url: "https://www.amnh.org/plan-your-visit" },
    ],
  },
};

const nycStopPreviews: Record<string, StopInsightPreview> = {
  "nyc-arrival-check": {
    eyebrow: "Mjuk start",
    title: "Bygg trygghet först",
    copy: "En liten hotellradie nu gör resten av veckan mycket lättare.",
  },
  "nyc-first-ride": {
    eyebrow: "Smart drag",
    title: "Testa OMNY tidigt",
    copy: "En kort provtur gör att subway känns enkel när du verkligen behöver den.",
    imageUrl: "https://commons.wikimedia.org/wiki/Special:FilePath/NYC_Subway_entrance_BW_vc.jpg",
    imageAlt: "Entré till New Yorks tunnelbana.",
  },
  "nyc-village-walk": {
    eyebrow: "Stadskänsla",
    title: "Börja där New York andas",
    copy: "Village ger filmisk känsla utan att bli för mycket för dag ett.",
    imageUrl: "https://commons.wikimedia.org/wiki/Special:FilePath/Washington_Square_-_Triumphal_arch.jpg",
    imageAlt: "Washington Square Arch i Greenwich Village.",
  },
  "nyc-park-pause": {
    eyebrow: "Liten paus",
    title: "Fontän, bänk, omstart",
    copy: "Ett lugnt stopp här håller energin uppe mycket bättre än ett extra kvarter.",
  },
  "nyc-bryant-park": {
    eyebrow: "Gratisbonus",
    title: "Bryant Park är mer än en park",
    copy: "Reading Room och små aktiviteter gör stoppet mer levande än bara en snabb titt.",
    imageUrl: "https://commons.wikimedia.org/wiki/Special:FilePath/Bryant_Park,_New_York_City_(22462327762).jpg",
    imageAlt: "Bryant Park i Midtown Manhattan.",
  },
  "nyc-grand-central": {
    eyebrow: "Klassiker",
    title: "Titta upp direkt",
    copy: "Grand Central blir större och snyggare så fort du står mitt i hallen och ser taket.",
    imageUrl: "https://commons.wikimedia.org/wiki/Special:FilePath/Grand_Central_Terminal_Main_Concourse_2019-10-03_20-02.jpg",
    imageAlt: "Main Concourse i Grand Central Terminal.",
  },
  "nyc-observation-deck": {
    eyebrow: "Wow-stopp",
    title: "Ett deck räcker långt",
    copy: "Välj en utsikt med självförtroende i stället för att jaga flera.",
    imageUrl: "https://commons.wikimedia.org/wiki/Special:FilePath/View_from_Top_of_the_Rock.jpg",
    imageAlt: "Utsikt över Manhattan från Top of the Rock.",
  },
  "nyc-times-square-soft": {
    eyebrow: "Kort dos",
    title: "Se det, fastna inte där",
    copy: "Times Square fungerar bäst som en snabb energikick, inte som kvällens huvudnummer.",
    imageUrl: "https://commons.wikimedia.org/wiki/Special:FilePath/Time_square_at_night_(8904647094).jpg",
    imageAlt: "Times Square nattetid med starka neonskyltar.",
  },
  "nyc-wtc-memorial": {
    eyebrow: "Eftertanke",
    title: "Ge plats för tystnad",
    copy: "Det här stoppet blir starkare när det får vara lugnt och tydligt.",
    imageUrl: "https://commons.wikimedia.org/wiki/Special:FilePath/September_Eleven_Memorial.jpg",
    imageAlt: "En av minnesbassängerna vid 9/11 Memorial.",
  },
  "nyc-wall-street": {
    eyebrow: "Historia",
    title: "Mer än bara finans",
    copy: "Federal Hall gör området mer begripligt och mindre som en snabb selfiepunkt.",
  },
  "nyc-ferry-view": {
    eyebrow: "Skyline",
    title: "Stor utsikt, låg friktion",
    copy: "Färjan ger mycket New York-känsla utan att kräva en tung biljettlogistik.",
    imageUrl: "https://commons.wikimedia.org/wiki/Special:FilePath/Manhattan-Skyline-from-Staten-Island-Ferry.jpg",
    imageAlt: "Manhattans skyline sedd från Staten Island Ferry.",
  },
  "nyc-liberty-choice": {
    eyebrow: "Ikonval",
    title: "Boka bara om du menar det",
    copy: "Frihetsgudinnan är starkast när den är ett medvetet huvudmål, inte ett impulsstopp.",
  },
  "nyc-brooklyn-bridge-area": {
    eyebrow: "Fotostopp",
    title: "Skyline med lite mer luft",
    copy: "DUMBO och Brooklyn Bridge Park ger stora vyer utan Midtown-stress.",
    imageUrl: "https://commons.wikimedia.org/wiki/Special:FilePath/USA-NYC-Brooklyn_Bridge_Park.jpg",
    imageAlt: "Promenadmiljö i Brooklyn Bridge Park.",
  },
  "nyc-museum-flex": {
    eyebrow: "Populära val",
    title: "Ett museum, rätt museum",
    copy: "Välj efter energi och smak i stället för att försöka hinna allt kulturellt på en gång.",
  },
  "nyc-culture-finale": {
    eyebrow: "Avslut",
    title: "Ge sista dagen form",
    copy: "En tydlig kulturfinal känns mer premium än att jaga sista-minuten-listor.",
  },
};

const nycMuseumChoiceOptions: StopChoiceOption[] = [
  {
    id: "the-met",
    title: "The Met",
    summary: "Det stora förstavalet om du vill ha klassiker, bredd och riktig New York-tyngd.",
    url: "https://www.metmuseum.org/en/plan-your-visit",
    sourceLabel: "Time Out + Condé Nast",
    sourceUrl: "https://www.timeout.com/newyork/art/the-metropolitan-museum-of-art",
  },
  {
    id: "moma",
    title: "MoMA",
    summary: "Det säkra moderna valet om du vill ha hög kvalitet, tydliga highlights och lätt läge i Midtown.",
    url: "https://www.moma.org/",
    sourceLabel: "Time Out + Tripadvisor",
    sourceUrl: "https://www.timeout.com/newyork/museums-institutions/museum-of-modern-art-moma",
  },
  {
    id: "amnh",
    title: "American Museum of Natural History",
    summary: "Bäst när du vill ha wow, naturvetenskap och en mer lekfull halvdag.",
    url: "https://www.amnh.org/plan-your-visit",
    sourceLabel: "Time Out + Tripadvisor",
    sourceUrl: "https://www.tripadvisor.com/Attractions-g60763-Activities-c49-New_York_City_New_York.html",
  },
  {
    id: "frick",
    title: "The Frick Collection",
    summary: "Ett mindre och mer förfinat val när du vill ha lugnare tempo och känslan av ett dyrt New York.",
    url: "https://www.frick.org/visit",
    sourceLabel: "Condé Nast + NYC Tourism",
    sourceUrl: "https://www.cntraveler.com/gallery/best-museums-in-new-york-city",
  },
  {
    id: "mcny",
    title: "Museum of the City of New York",
    summary: "Starkast om du vill förstå själva staden, inte bara konstscenen.",
    url: "https://www.mcny.org/",
    sourceLabel: "Time Out Recommended",
    sourceUrl: "https://www.timeout.com/newyork/museums/museum-of-the-city-of-new-york",
  },
];

const nycObservationChoiceOptions: StopChoiceOption[] = [
  {
    id: "top-of-the-rock",
    title: "Top of the Rock",
    summary: "Det mest klassiska förstavalet om du vill se både Central Park och Empire State i samma vy.",
    url: "https://www.topoftherocknyc.com/",
    sourceLabel: "Time Out Recommended",
    sourceUrl: "https://www.timeout.com/newyork/attractions/top-of-the-rock-observation-deck-at-rockefeller-center",
  },
  {
    id: "summit-one-vanderbilt",
    title: "SUMMIT One Vanderbilt",
    summary: "Mer upplevelse än bara utsikt, bäst om du vill ha wow, speglar och en tydligt modern känsla.",
    url: "https://summitov.com/",
    sourceLabel: "Time Out",
    sourceUrl: "https://www.timeout.com/newyork/attractions/summit-one-vanderbilt",
  },
  {
    id: "empire-state-building",
    title: "Empire State Building",
    summary: "Det mest ikoniska valet om du vill göra en riktig NYC-klassiker och inte bara jaga bästa foto.",
    url: "https://www.esbnyc.com/",
    sourceLabel: "Time Out + Tripadvisor",
    sourceUrl: "https://www.timeout.com/newyork/attractions/empire-state-building",
  },
  {
    id: "edge",
    title: "Edge",
    summary: "Bra när du vill ha mest adrenalinkänsla, glasgolv och en mer nutida skylineupplevelse.",
    url: "https://www.edgenyc.com/en",
    sourceLabel: "Time Out Recommended",
    sourceUrl: "https://www.timeout.com/newyork/attractions/edge-observation-deck",
  },
];

const nycFoodChoiceOptions: StopChoiceOption[] = [
  {
    id: "mamas-too",
    title: "Mama's Too",
    summary: "Ett starkt pizzaval om du vill gå på Time Outs toppspår snarare än bara första bästa slice.",
    url: "https://www.mamastoo.com/",
    sourceLabel: "Time Out Pizza 2025",
    sourceUrl: "https://www.timeout.com/newyork/news/this-is-officially-the-best-pizzeria-in-new-york-in-2025-according-to-time-out-102425",
  },
  {
    id: "ess-a-bagel",
    title: "Ess-a-Bagel",
    summary: "Ett säkert bagelval om du vill ha ett av de mest omtalade klassiska namnen snarare än experimentera.",
    url: "https://www.ess-a-bagel.com/",
    sourceLabel: "Time Out Recommended",
    sourceUrl: "https://www.timeout.com/newyork/restaurants/ess-a-bagel",
  },
  {
    id: "chelsea-market",
    title: "Chelsea Market",
    summary: "Bra om ni vill kombinera sista måltid med flera alternativ och lite shopping på samma ställe.",
    url: "https://www.chelseamarket.com/",
    sourceLabel: "Time Out",
    sourceUrl: "https://www.timeout.com/newyork/shopping/chelsea-market-new-york-ny",
  },
  {
    id: "time-out-market",
    title: "Time Out Market",
    summary: "Bra när ni vill ha skyline, flera starka matval och låg friktion i DUMBO.",
    url: "https://www.timeoutmarket.com/newyork/",
    sourceLabel: "Time Out Market",
    sourceUrl: "https://www.timeout.com/newyork/time-out-market",
  },
];

const nycQuickDinnerChoiceOptions: StopChoiceOption[] = [
  {
    id: "joes-pizza",
    title: "Joe's Pizza",
    summary: "Det mest klassiska slice-valet om du vill ha ett säkert New York-original utan att överplanera kvällen.",
    url: "https://www.joespizzanyc.com/",
    sourceLabel: "Time Out Recommended",
    sourceUrl: "https://www.timeout.com/newyork/restaurants/joes-pizza-1",
  },
  {
    id: "scarrs-pizza",
    title: "Scarr's Pizza",
    summary: "Bra om du vill ha en mer samtida downtown-favorit som ändå känns väldigt New York.",
    url: "https://www.scarrspizza.com/",
    sourceLabel: "Time Out Recommended",
    sourceUrl: "https://www.timeout.com/newyork/restaurants/scarrs-pizza",
  },
  {
    id: "lindustrie",
    title: "L'Industrie Pizzeria",
    summary: "Perfekt om du vill låta pizzastoppet kännas mer destination än bara nödmat.",
    url: "https://www.lindustriebk.com/",
    sourceLabel: "Time Out Recommended",
    sourceUrl: "https://www.timeout.com/newyork/restaurants/lindustrie-pizzeria",
  },
  {
    id: "russ-daughters-cafe",
    title: "Russ & Daughters Cafe",
    summary: "Starkast om du hellre vill göra klassisk deli-/bagelmiddag än ännu en pizzaslice.",
    url: "https://www.russanddaughterscafe.com/",
    sourceLabel: "Time Out Recommended",
    sourceUrl: "https://www.timeout.com/newyork/restaurants/russ-daughters-cafe",
  },
];

const nycNeighborhoodChoiceOptions: StopChoiceOption[] = [
  {
    id: "west-village",
    title: "West Village igen",
    summary: "Det bästa valet om ni vill avsluta med låg puls, smågator och ett New York som känns personligt.",
    url: "https://www.google.com/maps/search/?api=1&query=West+Village+New+York",
    sourceLabel: "Trip Companion-spår",
    sourceUrl: "https://www.google.com/maps/search/?api=1&query=West+Village+New+York",
  },
  {
    id: "dumbo-return",
    title: "DUMBO / Brooklyn Bridge Park",
    summary: "Starkast om ni vill ha utsikt, foto och vattenkänsla utan att dagen blir för tung.",
    url: "https://www.google.com/maps/search/?api=1&query=Brooklyn+Bridge+Park",
    sourceLabel: "Trip Companion-spår",
    sourceUrl: "https://www.google.com/maps/search/?api=1&query=Brooklyn+Bridge+Park",
  },
  {
    id: "bryant-midtown",
    title: "Bryant Park / Midtown",
    summary: "Bra om ni vill hålla er centralt och göra något enkelt men snyggt sista kvällen.",
    url: "https://www.google.com/maps/search/?api=1&query=Bryant+Park+New+York",
    sourceLabel: "Trip Companion-spår",
    sourceUrl: "https://www.google.com/maps/search/?api=1&query=Bryant+Park+New+York",
  },
];

const nycStopChoiceOptions: Record<string, StopChoiceOption[]> = {
  "nyc-observation-deck": nycObservationChoiceOptions,
  "nyc-slice-night": nycQuickDinnerChoiceOptions,
  "nyc-midtown-dinner": nycQuickDinnerChoiceOptions,
  "nyc-museum-flex": nycMuseumChoiceOptions,
  "nyc-culture-finale": nycMuseumChoiceOptions,
  "nyc-food-shopping": nycFoodChoiceOptions,
  "nyc-favorite-return": nycNeighborhoodChoiceOptions,
};

const stopInsights: Record<string, StopInsight> = {
  ...nycStopInsights,
  ...palmaStopInsights,
};

const stopPreviews: Record<string, StopInsightPreview> = {
  ...nycStopPreviews,
  ...palmaStopPreviews,
};

const stopChoiceOptions: Record<string, StopChoiceOption[]> = {
  ...nycStopChoiceOptions,
  ...palmaStopChoiceOptions,
};

export function getStopInsight(stopId: string) {
  return stopInsights[stopId];
}

export function getStopInsightPreview(stopId: string) {
  return stopPreviews[stopId];
}

export function getStopChoiceOptions(stopId: string) {
  return stopChoiceOptions[stopId] ?? [];
}

export function getStopChoiceOption(stopId: string, optionId: string) {
  return getStopChoiceOptions(stopId).find((option) => option.id === optionId);
}
