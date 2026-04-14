type StopInsightLink = {
  label: string;
  url: string;
};

type StopInsight = {
  facts: string[];
  ideas: string[];
  links: StopInsightLink[];
};

type StopInsightPreview = {
  eyebrow: string;
  title: string;
  copy: string;
  imageUrl?: string;
  imageAlt?: string;
};

type StopChoiceOption = {
  id: string;
  title: string;
  summary: string;
  url: string;
  sourceLabel: string;
  sourceUrl: string;
};

function commons(fileName: string) {
  return `https://commons.wikimedia.org/wiki/Special:FilePath/${encodeURIComponent(fileName)}`;
}

export const esteponaStopInsights: Record<string, StopInsight> = {
  "estepona-arrival-loop": {
    facts: [
      "Turismo Estepona beskriver casco histórico som mer än 130 förnyade gator och torg med gångvänlig rytm.",
      "Samma officiella tillgänglighetssida lyfter gamla stan och flera av stadens kulturleder som lättillgängliga för besökare.",
    ],
    ideas: [
      "Spara hotellet, Plaza de las Flores och strandlinjen direkt i mobilen.",
      "Markera ett frukostställe första timmen så att morgonerna blir enklare resten av vistelsen.",
    ],
    links: [
      { label: "Tillgänglighet och gamla stan", url: "https://turismo.estepona.es/informacion-accesibilidad/" },
    ],
  },
  "estepona-plaza-flores": {
    facts: [
      "Plaza de las Flores fungerar som en av stadens tydligaste mötespunkter mellan gamla stan och vardagslivet.",
      "Torget dyker också upp i den officiella muralrutten, vilket visar hur centralt det är i själva stadsväven.",
    ],
    ideas: [
      "Använd torget som första ankarpunkt i stället för att försöka förstå hela centrum på en gång.",
      "Bra ställe för första kaffe eller glass innan ni väljer nästa gränd.",
    ],
    links: [
      { label: "Ruta de los Murales", url: "https://turismo.estepona.es/wp-content/uploads/2025/06/2025-RUTA-MURALES.pdf" },
    ],
  },
  "estepona-old-town-walk": {
    facts: [
      "Turismo Estepona beskriver gamla stan som ett sammanhängande, förnyat promenadområde med kulturleder och charmstopp tätt inpå varandra.",
      "Det är just den gångbara helheten som gör Estepona starkare än att jaga enskilda landmärken.",
    ],
    ideas: [
      "Välj hellre några vackra kvarter ordentligt än att försöka gå överallt.",
      "Låt dörrar, blomkrukor och små passager vara själva upplevelsen.",
    ],
    links: [
      { label: "Casco histórico och tillgänglighet", url: "https://turismo.estepona.es/informacion-accesibilidad/" },
    ],
  },
  "estepona-casa-tejerinas": {
    facts: [
      "Casa de Las Tejerinas används som utställningsrum och kulturell mötesplats mitt i centrum.",
      "Läget nära Plaza de las Flores gör stoppet lätt att lägga in utan att bryta dagens rytm.",
    ],
    ideas: [
      "Perfekt när ni vill ge gamla stan ett litet inomhuslager utan att börja museumspringa.",
      "Kombinera det med torget före eller efter snarare än som eget projekt.",
    ],
    links: [
      { label: "Turismo Estepona", url: "https://turismo.estepona.es/" },
    ],
  },
  "estepona-orchidarium": {
    facts: [
      "Parque Botánico-Orquidario lyfts av Turismo Estepona som ett av stadens tydligaste besöksmål.",
      "Anläggningen kombinerar botaniskt innehåll med kupoler, vattenfall och ett mycket mer rumsligt stopp än man väntar sig i en mindre kuststad.",
    ],
    ideas: [
      "Låt det här bli ett huvudnummer i stället för bara en snabb titt.",
      "Bra stopp när ni vill växla från gränder och torg till något mer uppbyggt och wow-betonat.",
    ],
    links: [
      { label: "Orquidario via Turismo Estepona", url: "https://turismo.estepona.es/" },
    ],
  },
  "estepona-mirador-carmen": {
    facts: [
      "Turismo Estepona beskriver Mirador del Carmen som ett sociokulturellt landmärke med torn, bibliotek, auditorium och utställningssal.",
      "Den officiella sidan lyfter särskilt panoramautsikten över staden och Medelhavet som ett huvudskäl att gå upp.",
    ],
    ideas: [
      "Bra val när ni vill öppna staden mot havet igen efter gamla stan.",
      "Ta det som ett tydligt stopp, inte bara något ni passerar förbi.",
    ],
    links: [
      { label: "Mirador del Carmen", url: "https://turismo.estepona.es/lugares/mirador-del-carmen/" },
      { label: "Utställningsrummet", url: "https://turismo.estepona.es/lugares/centro-expositivo-del-mirador-del-carmen/" },
    ],
  },
  "estepona-murals-route": {
    facts: [
      "Den officiella muralguiden för 2025 listar 48 verk utspridda i stadsväven.",
      "Ruta de los Murales är ett av de tydligaste skälen att låta Estepona vara mer än strand och gamla stan.",
    ],
    ideas: [
      "Välj ett koncentrerat utsnitt av rutten i stället för att försöka hinna hela kartan.",
      "Låt muralerna styra en ny promenad genom kvarter ni annars inte hade gått igenom.",
    ],
    links: [
      { label: "Ruta de los Murales 2025", url: "https://turismo.estepona.es/wp-content/uploads/2025/06/2025-RUTA-MURALES.pdf" },
    ],
  },
  "estepona-castillo-san-luis": {
    facts: [
      "Castillo de San Luis ger centrum ett äldre försvarslager som kontrasterar fint mot muralerna och den välputsade stadskärnan.",
      "Ruinerna ligger tillräckligt nära huvudstråken för att fungera som ett kort men meningsfullt historiskt stopp.",
    ],
    ideas: [
      "Ta det här som ett koncentrerat mellanstopp snarare än en egen halvdag.",
      "Bra när ni vill ge dagen tyngd utan att tempo eller avstånd drar iväg.",
    ],
    links: [
      { label: "Turismo Estepona", url: "https://turismo.estepona.es/" },
    ],
  },
  "estepona-paseo-rada": {
    facts: [
      "La Rada och den centrala strandpromenaden är en av de enklaste platserna att låta Estepona kännas som riktig semester.",
      "Turismo Estepona lyfter tillgängliga strandfunktioner och badassistans under säsong längs den centrala havssidan.",
    ],
    ideas: [
      "Gå tills känslan är som bäst och vänd där, i stället för att göra promenaden till prestation.",
      "Lägg in sen lunch eller glass som en del av stråket, inte som paus från det.",
    ],
    links: [
      { label: "Tillgänglighet och stränder", url: "https://turismo.estepona.es/informacion-accesibilidad/" },
    ],
  },
  "estepona-port-pause": {
    facts: [
      "Hamnen ligger tillräckligt nära stadskärnan för att fungera som naturlig förlängning av havspromenaden.",
      "Läget nära Playa del Cristo gör marinan till ett smidigt nav om ni vill ge västsidan mer utrymme.",
    ],
    ideas: [
      "Bra stopp för sen lunch eller ett glas om ni vill hålla kvar havstonen.",
      "Det räcker ofta långt med 30 till 45 minuter här.",
    ],
    links: [
      { label: "Playa del Cristo", url: "https://turismo.estepona.es/lugares/playas-zona-centro/playa-del-cristo/" },
    ],
  },
  "estepona-playa-cristo": {
    facts: [
      "Turismo Estepona beskriver Playa del Cristo som en skyddad liten vik som är idealisk i olika årstider och särskilt bekväm för barnfamiljer.",
      "Den officiella sidan lyfter också skugga, tillgänglighetsstöd och att stranden ligger nära hamnområdet.",
    ],
    ideas: [
      "Bra val när ni vill ha mjukare stranddag än en lång exponerad stadsstrand.",
      "Kom hellre tidigare än att låta stranden bli eftermiddagsstress.",
    ],
    links: [
      { label: "Playa del Cristo", url: "https://turismo.estepona.es/lugares/playas-zona-centro/playa-del-cristo/" },
    ],
  },
  "estepona-favorite-return": {
    facts: [
      "Estepona tjänar på återbesök eftersom dess kvalitet sitter i stämning och detalj mer än i många separata måsten.",
      "Gamla stan, strandlinjen och torget är alla korta nog att fungera som sista kvällsspår utan tung planering.",
    ],
    ideas: [
      "Välj den plats ni redan pratat mest om, inte den ni råkade missa.",
      "Återvänd hellre till en favorit än att försöka klämma in en ny halvbra plats.",
    ],
    links: [{ label: "Turismo Estepona", url: "https://turismo.estepona.es/" }],
  },
  "estepona-culture-flex": {
    facts: [
      "Mirador del Carmen, Casa de Las Tejerinas och stadens historiska lager ger Estepona fler kulturval än man först tror.",
      "Det fungerar bäst att välja ett enda slutspår i stället för att göra finaldagen till museumsturné.",
    ],
    ideas: [
      "Ta det val som matchar er energi: utsikt, liten utställning eller kort historia.",
      "Låt lunch och avresdel få plats runt kulturvalet.",
    ],
    links: [
      { label: "Mirador del Carmen", url: "https://turismo.estepona.es/lugares/mirador-del-carmen/" },
      { label: "Museo Arqueológico", url: "https://turismo.estepona.es/download/https-turismo-estepona-es-wp-content-uploads-2023-07-23-06-20-museo-arqueologico_05-definitivo-traducido-pdfmuseo-arqueologico/" },
    ],
  },
};

export const esteponaStopPreviews: Record<string, StopInsightPreview> = {
  "estepona-arrival-loop": {
    eyebrow: "Mjuk start",
    title: "Lär känna radien först",
    copy: "Det lilla kring hotellet gör resten av Estepona mycket lättare.",
  },
  "estepona-plaza-flores": {
    eyebrow: "Torgkänsla",
    title: "Börja där staden andas",
    copy: "Plaza de las Flores ger rätt ton direkt: grön, social och långsam.",
    imageUrl: commons("Plaza de las Flores, Estepona 03.JPG"),
    imageAlt: "Plaza de las Flores i Estepona.",
  },
  "estepona-old-town-walk": {
    eyebrow: "Casco antiguo",
    title: "Blommor före måsten",
    copy: "Estepona blir starkare när du går på känsla genom gatorna.",
    imageUrl: commons("Estepona-old-town.jpg"),
    imageAlt: "Gamla stan i Estepona med vitkalkade fasader.",
  },
  "estepona-casa-tejerinas": {
    eyebrow: "Litet kulturstopp",
    title: "Patio och utställning",
    copy: "Bra när gamla stan ska få ett inomhuslager utan att bli tung.",
  },
  "estepona-orchidarium": {
    eyebrow: "Wow-stopp",
    title: "Esteponas oväntade volym",
    copy: "Kupoler, växter och vattenfall gör det här mycket större än man tror.",
    imageUrl: commons("Orchidarium de Estepona (33712218586).jpg"),
    imageAlt: "Orkidéhuset i Estepona.",
  },
  "estepona-mirador-carmen": {
    eyebrow: "Ny ton",
    title: "Öppna staden mot havet",
    copy: "Mirador del Carmen ger Estepona både utsikt och modern kulturkänsla.",
  },
  "estepona-murals-route": {
    eyebrow: "Stadsgalleri",
    title: "Murales ger ny energi",
    copy: "Låt några starka verk styra en ny promenad genom staden.",
  },
  "estepona-paseo-rada": {
    eyebrow: "Havsrytm",
    title: "Promenaden är själva poängen",
    copy: "La Rada gör Estepona lätt i kroppen på precis rätt sätt.",
    imageUrl: commons("Paseo marítimo de Estepona (33623136121).jpg"),
    imageAlt: "Strandpromenaden i Estepona.",
  },
  "estepona-port-pause": {
    eyebrow: "Liten förlängning",
    title: "Marina utan stress",
    copy: "Hamnen fungerar bäst som ett kort mjukt tillägg till havsdagen.",
  },
  "estepona-playa-cristo": {
    eyebrow: "Skyddad vik",
    title: "Lugnare strandval",
    copy: "Playa del Cristo är perfekt när ni vill hålla havsdagen enkel.",
    imageUrl: commons("Playa del cristo winter - Estepona beach.jpg"),
    imageAlt: "Playa del Cristo i Estepona.",
  },
  "estepona-favorite-return": {
    eyebrow: "Final",
    title: "Återvänd dit det redan känns rätt",
    copy: "Estepona blir ofta bättre av ett återbesök än av ett sista nytt namn.",
  },
  "estepona-culture-flex": {
    eyebrow: "Valbar final",
    title: "Ett enda kulturspår räcker",
    copy: "Välj utsikt, utställning eller historia och låt resten vara lätt.",
  },
};

const esteponaCultureChoiceOptions: StopChoiceOption[] = [
  {
    id: "mirador-del-carmen",
    title: "Mirador del Carmen",
    summary: "Bäst om ni vill ha utsikt, modern kulturton och havsöppning i samma stopp.",
    url: "https://turismo.estepona.es/lugares/mirador-del-carmen/",
    sourceLabel: "Turismo Estepona",
    sourceUrl: "https://turismo.estepona.es/lugares/mirador-del-carmen/",
  },
  {
    id: "casa-tejerinas",
    title: "Casa de Las Tejerinas",
    summary: "Bra om ni vill hålla er mitt i gamla stan och göra kulturen lätt och nära.",
    url: "https://turismo.estepona.es/",
    sourceLabel: "Turismo Estepona",
    sourceUrl: "https://turismo.estepona.es/",
  },
  {
    id: "museo-arqueologico",
    title: "Museo Arqueológico",
    summary: "Starkast när ni vill ge finalen mer historiskt djup än utsikt.",
    url: "https://turismo.estepona.es/download/https-turismo-estepona-es-wp-content-uploads-2023-07-23-06-20-museo-arqueologico_05-definitivo-traducido-pdfmuseo-arqueologico/",
    sourceLabel: "Turismo Estepona",
    sourceUrl: "https://turismo.estepona.es/download/https-turismo-estepona-es-wp-content-uploads-2023-07-23-06-20-museo-arqueologico_05-definitivo-traducido-pdfmuseo-arqueologico/",
  },
];

const esteponaSeasideChoiceOptions: StopChoiceOption[] = [
  {
    id: "la-rada",
    title: "La Rada",
    summary: "Det säkra valet om ni vill ha central promenad, strand och enkel lunchlogik.",
    url: "https://turismo.estepona.es/informacion-accesibilidad/",
    sourceLabel: "Turismo Estepona",
    sourceUrl: "https://turismo.estepona.es/informacion-accesibilidad/",
  },
  {
    id: "playa-del-cristo",
    title: "Playa del Cristo",
    summary: "Bäst när ni vill ha en skyddad vik och en lugnare stranddag.",
    url: "https://turismo.estepona.es/lugares/playas-zona-centro/playa-del-cristo/",
    sourceLabel: "Turismo Estepona",
    sourceUrl: "https://turismo.estepona.es/lugares/playas-zona-centro/playa-del-cristo/",
  },
  {
    id: "murales-y-paseo",
    title: "Murales + havet",
    summary: "Bra om ni vill hålla dagen mer stadig och kulturell innan ni går ut mot vattnet.",
    url: "https://turismo.estepona.es/wp-content/uploads/2025/06/2025-RUTA-MURALES.pdf",
    sourceLabel: "Turismo Estepona",
    sourceUrl: "https://turismo.estepona.es/wp-content/uploads/2025/06/2025-RUTA-MURALES.pdf",
  },
];

export const esteponaStopChoiceOptions: Record<string, StopChoiceOption[]> = {
  "estepona-mirador-carmen": esteponaCultureChoiceOptions,
  "estepona-culture-flex": esteponaCultureChoiceOptions,
  "estepona-paseo-rada": esteponaSeasideChoiceOptions,
  "estepona-playa-cristo": esteponaSeasideChoiceOptions,
  "estepona-favorite-return": esteponaSeasideChoiceOptions,
};
