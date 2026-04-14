import {
  area,
  day,
  mapLink,
  rainPlan,
  section,
  stop,
  type CityGuideSeed,
} from "@/lib/guide-builders";

function commons(fileName: string) {
  return `https://commons.wikimedia.org/wiki/Special:FilePath/${encodeURIComponent(fileName)}`;
}

const palmaSeed: CityGuideSeed = {
  id: "palma",
  displayName: "Palma de Mallorca",
  flag: "es",
  weather: { latitude: 39.5696, longitude: 2.6502, timezone: "Europe/Madrid" },
  currency: { base: "EUR", quote: "SEK" },
  maps: { cityQuery: "Palma de Mallorca" },
  metadata: {
    appTitle: "Trip Companion",
    title: "Trip Companion Palma de Mallorca",
    description:
      "A warm five-day Palma de Mallorca guide filled with sea air, old-town detail, markets and soft evening plans.",
  },
  transport: {
    title: "Till fots, EMT och kuststråk",
    summary:
      "Palma blir bäst när du går gamla stan långsamt och använder EMT-buss eller cykel när du vill nå Bellver, Portixol eller andra längre stråk.",
    bullets: [
      "Gamla stan och området runt katedralen förstås bäst till fots, inte genom att hoppa för snabbt mellan punkter.",
      "EMT är stadens urbana bussnät medan TIB från Plaça d'Espanya är bäst när du vill vidare ut på ön.",
      "Palmas cykelbanor och kuststråk gör Portixol och havssidan extra enkla om ni vill hålla dagen lätt.",
    ],
  },
  hotelAreas: [
    {
      value: "central",
      label: "Jaume III / Passeig del Born",
      hint: "Bra om du vill kunna gå till gamla stan, shopping och kvällsstråk direkt.",
    },
    {
      value: "historic",
      label: "La Seu / La Lonja",
      hint: "Perfekt om du vill bo mitt i stenstaden, nära havet och kvällspromenaderna.",
    },
    {
      value: "local",
      label: "Santa Catalina / Portixol",
      hint: "Lite mer vardag, fler restauranger och ett mjukare stadsflöde utanför dörren.",
    },
    {
      value: "unknown",
      label: "Inte bestämt än",
      hint: "Appen håller Palma lugn och central tills du vet mer om boendet.",
    },
  ],
  basics: [
    {
      tag: "Stadslogik",
      title: "Palma blir starkast när du tänker gamla stan plus havet",
      body: "Katedralen, murarna och gränderna ger riktning, men det är mötet med havet som gör Palma lätt att bära i kroppen. Växla mellan sten och vatten i samma dag.",
    },
    {
      tag: "Tempo",
      title: "Marknader och sena pauser är en del av upplevelsen",
      body: "Palma vinner på att du låter marknad, kaffe eller ett glas vin bli riktiga stopp. För mycket framdrift gör staden mindre vacker än den behöver vara.",
    },
    {
      tag: "Transport",
      title: "Spara buss och cykel till de längre skiftena",
      body: "Gamla stan, katedralen, La Lonja och Born är gjorda för promenad. Lägg EMT eller cykel på Bellver, Portixol och andra stråk där havssidan öppnar sig.",
    },
  ],
  gallery: [
    {
      title: "La Seu och Parc de la Mar",
      description:
        "Palmas skyline sitter här. Katedralens sten, vattenspegeln och havsluften gör första intrycket både stort och mjukt.",
      imageUrl: commons("Seu de Mallorca (Palma) - 1.jpg"),
      sourceLabel: "Wikimedia Commons",
      sourceUrl: "https://commons.wikimedia.org/wiki/File:Seu_de_Mallorca_(Palma)_-_1.jpg",
      credit: "Foto via Wikimedia Commons",
    },
    {
      title: "Bellver och bukten",
      description:
        "Bellver ger Palma uppifrån: tallar, stad, hamn och hav i samma blick. Perfekt när du vill förstå staden som form, inte bara som gator.",
      imageUrl: commons("Bellver Castle 2008 Palma Mallorca 176.JPG"),
      sourceLabel: "Wikimedia Commons",
      sourceUrl: "https://commons.wikimedia.org/wiki/File:Bellver_Castle_2008_Palma_Mallorca_176.JPG",
      credit: "Foto via Wikimedia Commons",
    },
    {
      title: "Es Baluard och murarna",
      description:
        "Här möts konst, utsikt och gammal försvarsstad. Ett bra Palma-stopp när du vill ha både kultur och luft i samma block.",
      imageUrl: commons("Es Baluard Palma de Mallorca 03.jpg"),
      sourceLabel: "Wikimedia Commons",
      sourceUrl: "https://commons.wikimedia.org/wiki/File:Es_Baluard_Palma_de_Mallorca_03.jpg",
      credit: "Foto via Wikimedia Commons",
    },
    {
      title: "Portixol och strandpromenaden",
      description:
        "Palma blir lättare när du går ut mot havssidan. Portixol ger den där semesterlugna rytmen utan att du lämnar stadskänslan helt.",
      imageUrl: commons("PortixolPalma.jpg"),
      sourceLabel: "Wikimedia Commons",
      sourceUrl: "https://commons.wikimedia.org/wiki/File:PortixolPalma.jpg",
      credit: "Foto via Wikimedia Commons",
    },
  ],
  tripDays: [
    day(
      1,
      "Landning och mjuk Palma-start",
      "Landa i stenstaden och låt havet sätta tonen direkt.",
      "Låg till medel",
      "Hotellet + gamla stan",
      "Första dagen i Palma ska ge orientering, havsluft och en första trygg känsla för gamla stan.",
      "Palma tjänar på en mjuk start: basen först, sedan ett kvällsstråk som känns vackert men inte krävande.",
      [
        section("Ankomst", "Säkra basen nära gamla stan", "Gör det som minskar friktion redan första timmarna.", [
          stop(
            "arrival-loop",
            "Checka in och lär dig närmaste torg, EMT-hållplats och kvällsstråk",
            "45-60 min",
            "En liten radie runt hotellet gör resten av vistelsen mycket lättare.",
            "Markera ett bra frukostställe och ett enkelt kvällsstopp redan nu.",
            "Köp vatten, frukt eller något litet till rummet."
          ),
          stop(
            "old-town-first",
            "Ta en första lugn runda i gamla stan mot Born eller katedralen",
            "45-60 min",
            "Du får direkt Palmas stenstad i kroppen utan att göra dagen för stor.",
            "Följ gränderna mer än kartan och låt tempot vara långsamt.",
            "Stanna för kaffe eller en första ensaimada om energin finns."
          ),
        ]),
        section("Kväll", "Möt havet första kvällen", "Palma blir genast lättare att förstå från vattnet.", [
          stop(
            "parc-mar",
            "Gå mot Parc de la Mar och se La Seu i kvällsljus",
            "45 min",
            "Det ger ett stort men lugnt första minne av staden.",
            "Perfekt när du vill känna att resan har börjat på riktigt utan att bli sen.",
            "Ta en enkel middag runt La Lonja eller tillbaka nära hotellet."
          ),
        ]),
      ]
    ),
    day(
      2,
      "La Seu, palats och gamla kvarter",
      "Nu får Palmas historiska kärna bära en hel dag i rätt rytm.",
      "Medel",
      "Katedralen + gamla stan",
      "Dag två passar för Palmas stora historiska berättelse: katedralen, palatset och de smala kvarteren däremellan.",
      "Det bästa är att hålla sig i samma del av staden och låta gränder, skuggor och små pauser bygga dagen.",
      [
        section("Morgon", "Stadens stora symboler", "Börja där Palma känns som mest monumental.", [
          stop(
            "cathedral",
            "Besök La Seu och området runt Parc de la Mar",
            "90 min",
            "Katedralen är stadens stora signatur och gör resten av Palma lättare att läsa.",
            "Kom gärna relativt tidigt om du vill ha mjukare rytm runt entrén.",
            "Kaffe eller juice innan ni går vidare upp i gamla stan."
          ),
          stop(
            "almudaina",
            "Palacio Real de la Almudaina eller utsidan runt palatsområdet",
            "60-75 min",
            "Bra fortsättning när du vill förstå Palmas lager av makt, hav och historia.",
            "Det här stoppet behöver inte bli jättelångt för att kännas rikt.",
            "Ta lunch först när ni lämnat den mest monumentala delen."
          ),
        ]),
        section("Eftermiddag", "Detaljrik gamla stan", "Nu ska Palma bli mer mänsklig än monumental.", [
          stop(
            "arab-baths",
            "Arab Baths och ett lugnt grändspår genom gamla stan",
            "60 min",
            "Bra när du vill ge dagen historisk tyngd utan att gå in i museitempo.",
            "Låt innergårdar, dörrar och skuggiga gator få tid.",
            "En kall dryck eller glasspaus passar perfekt efteråt."
          ),
          stop(
            "olivar-market",
            "Mercat de l'Olivar för sen lunch, tapas eller småköp",
            "60-90 min",
            "Marknaden ger energi, vardag och mycket Palma på liten yta.",
            "Bra stopp när du vill låta lunchen bli en del av upplevelsen.",
            "Ät på plats eller köp med något enkelt och bra."
          ),
        ]),
      ]
    ),
    day(
      3,
      "Bellver, murar och Santa Catalina",
      "Ge Palma höjd, utsikt och ett mer samtida kvällsblock.",
      "Medel",
      "Bellver + västra stadssidan",
      "Dag tre passar för en tydlig förflyttning ut från kärnan: upp till Bellver och sedan tillbaka mot murar, konst och mat.",
      "Palma blir rikare när du växlar från utsikt till kvällskvarter i stället för att hålla samma ton hela dagen.",
      [
        section("Morgon", "Se staden uppifrån", "Börja med en vy som gör resten av resan tydligare.", [
          stop(
            "bellver",
            "Bellver Castle och utsikten över Palma och bukten",
            "90 min",
            "Det här är ett av de bästa stoppen för att förstå stad, hamn och hav som helhet.",
            "Bra att ta i lugnt tempo, gärna med buss eller taxi upp och promenad delvis tillbaka om det känns rätt.",
            "Ta vatten med dig om dagen är varm."
          ),
        ]),
        section("Eftermiddag", "Murar, konst och kvällspuls", "Låt återkomsten till centrum kännas lätt och snygg.", [
          stop(
            "es-baluard",
            "Es Baluard eller Baluard des Príncep för konst och stadsmurar",
            "75-90 min",
            "Bra block när du vill ha både kultur och utsikt utan att göra dagen tung.",
            "Välj ett av murspåren eller museet som huvudfokus, inte allt på en gång.",
            "Kaffe eller lätt lunch förstärker eftermiddagen bättre än att skynda."
          ),
          stop(
            "santa-catalina",
            "Santa Catalina och marknaden mot kvällstid",
            "90 min",
            "Ger Palma en mer vardaglig och social sida efter all historia.",
            "Perfekt för att låta kvällen kännas levande men fortfarande lätt.",
            "Vin, tapas eller enkel fiskmiddag passar mycket bra här."
          ),
        ]),
      ]
    ),
    day(
      4,
      "Havsluft, Portixol och lång eftermiddag",
      "Nu ska Palma få vara mer semester än sevärdhet.",
      "Medel",
      "Portixol + kuststråk",
      "Dag fyra är perfekt för att låta havssidan bära hela rytmen: promenad, lunch och kanske bad om vädret är med.",
      "Det här är dagen när Palma får kännas mest lätt och minst pliktskyldig.",
      [
        section("Morgon", "Kuststråk", "Välj vatten, ljus och en långsam början.", [
          stop(
            "portixol",
            "Gå eller cykla mot Portixol längs havet",
            "90 min",
            "Ett av Palmas mest tilltalande stråk om du vill känna semesterlugnet utan att lämna staden.",
            "Det här stoppet blir bäst när det får vara långsamt och öppet.",
            "Frukost eller kaffe vid vattnet om ni startar tidigt."
          ),
          stop(
            "sea-pause",
            "Stanna för bad, strandpaus eller bara havstid vid Can Pere Antoni",
            "45-60 min",
            "Bra sätt att ge resan luft och inte bara innehåll.",
            "Om ni inte vill bada räcker det långt att bara stanna, sitta och titta ut över bukten.",
            "Ta något kallt och enkelt i närheten."
          ),
        ]),
        section("Eftermiddag", "Vacker avslutning tillbaka in", "Kom tillbaka till stenstaden utan att förlora havskänslan.", [
          stop(
            "la-lonja",
            "Kvällssväng vid La Lonja och de närmaste gränderna",
            "60 min",
            "Ger dagen ett elegant slut med sten, skugga och bra restaurangläge.",
            "La Lonja fungerar bäst som ett långsamt kvällsstråk, inte som ett snabbt kryss.",
            "Boka gärna middag i området om ni vill göra kvällen enkel."
          ),
        ]),
      ]
    ),
    day(
      5,
      "Konst eller favoritfinal",
      "Sista dagen ska ge Palma en personlig avslutning.",
      "Valfri",
      "Flexibel",
      "Nu vet ni om Palma ska sluta i konst, i havsljus eller i ett favoritkvarter där ni helst vill vara en gång till.",
      "Den bästa finalen här är oftast personlig: ett valt spår, en bra lunch och god marginal inför hemresan.",
      [
        section("Morgon", "Välj dagens ton", "Låt sista dagen spegla vad ni gillat mest.", [
          stop(
            "museum-flex",
            "Välj ett sista kulturspår: Miró, Es Baluard eller Palau March",
            "90-120 min",
            "Bra när ni vill ge finalen innehåll utan att börja jaga fler stora måsten.",
            "Välj ett enda ställe och låt det räcka.",
            "Lunch efteråt i området ni helst vill avsluta i."
          ),
        ]),
        section("Final", "Avsluta snyggt", "Gör finalen lätt nog att fortfarande kännas som semester.", [
          stop(
            "favorite-return",
            "Återvänd till favoritstråket i gamla stan, Born eller havssidan",
            "60-90 min",
            "Att återvända till något ni redan tycker om ger ofta starkare avslut än ännu ett nytt namn.",
            "Välj det område ni pratat mest om under veckan.",
            "Ta sista lunchen eller ett sista glas just där."
          ),
          stop(
            "departure-buffer",
            "Skydda tid för packning och transfer",
            "45 min",
            "Palma känns bäst i kroppen när sista timmarna inte blir en jakt.",
            "Ta hemresan lite för lugnt hellre än lite för sent.",
            "Håll maten enkel nära avfärden."
          ),
        ]),
      ]
    ),
  ],
  areaCardsByDay: {
    "day-1": [
      area(
        "old-town-base",
        "Gamla stan nära Born",
        "Mjuk första bild",
        "Perfekt första kväll när du vill känna Palma utan att dagen blir för stor.",
        "Gå långsamt och låt torg och gränder bära kvällen.",
        ["Born", "Gränder", "Kafé"],
        46,
        46,
        mapLink("Passeig del Born Palma")
      ),
      area(
        "parc-mar-zone",
        "Parc de la Mar",
        "Hav och katedral",
        "Ger ett direkt och vackert första möte med Palma.",
        "Bra kvällsstråk med låg friktion.",
        ["La Seu", "Vattenspegel", "Havsutsikt"],
        58,
        68,
        mapLink("Parc de la Mar Palma")
      ),
    ],
    "day-2": [
      area(
        "seu-core",
        "La Seu och Almudaina",
        "Monumental kärna",
        "Här får Palma sin tydligaste historiska form.",
        "Ta morgonen här och skynda inte vidare.",
        ["Katedral", "Palats", "Mur"],
        56,
        62,
        mapLink("Cathedral of Mallorca")
      ),
      area(
        "old-town-layers",
        "Arab Baths och gränderna",
        "Tät historia",
        "Bra eftermiddag när du vill gå från ikon till detalj.",
        "Låt gränderna vara en del av stoppet.",
        ["Arab Baths", "Patios", "Smågator"],
        48,
        40,
        mapLink("Banys Arabs Palma")
      ),
    ],
    "day-3": [
      area(
        "bellver-view",
        "Bellver",
        "Utsikt och tallar",
        "En av de bästa punkterna för att förstå hela Palmas geografi.",
        "Bra att ta som dagens tydliga höjdpunkt.",
        ["Bellver", "Utsikt", "Bukt"],
        22,
        18,
        mapLink("Bellver Castle")
      ),
      area(
        "baluard-catalina",
        "Es Baluard till Santa Catalina",
        "Konst + mat",
        "Ger en väldigt bra Palma-kombination av kultur, murar och kvällsliv.",
        "Passar som lång eftermiddag med middag på slutet.",
        ["Es Baluard", "Santa Catalina", "Vinbar"],
        34,
        42,
        mapLink("Es Baluard Museu d'Art Contemporani de Palma")
      ),
    ],
    "day-4": [
      area(
        "portixol-track",
        "Portixol",
        "Lätt semesterkänsla",
        "Perfekt när du vill låta havet bära nästan hela dagen.",
        "Bra stråk för promenad eller cykel.",
        ["Hav", "Portixol", "Långlunch"],
        78,
        74,
        mapLink("Portixol Palma")
      ),
      area(
        "lonja-evening",
        "La Lonja",
        "Elegant kväll",
        "Ett fint avslut tillbaka i stenstaden.",
        "Bra område för middag utan att kvällen blir tung.",
        ["La Lonja", "Gränder", "Middag"],
        46,
        58,
        mapLink("La Lonja Palma")
      ),
    ],
    "day-5": [
      area(
        "culture-finale",
        "Miró eller Es Baluard",
        "Personlig kulturfinal",
        "Bra när du vill avsluta med ett lugnt men tydligt innehållsspår.",
        "Välj ett enda stopp och låt resten vara lätt.",
        ["Miró", "Es Baluard", "Palau March"],
        30,
        34,
        mapLink("Fundacio Miro Mallorca")
      ),
      area(
        "favorite-farewell",
        "Favoritstråket",
        "Mjuk final",
        "Återbesök gör ofta Palma starkare i minnet än ett sista nytt måstenamn.",
        "Välj det som redan känns ert.",
        ["Born", "Havsstråk", "Sista lunch"],
        54,
        48,
        mapLink("Passeig del Born Palma")
      ),
    ],
  },
  rainPlansByDay: {
    "day-1": rainPlan("Rain mode: håll Palma liten första dagen", "Första kvällen behöver mest orientering och ett vackert kort spår.", [
      "Kortare runda i gamla stan.",
      "Lägg mer tid på ett kaféstopp nära hotellet.",
      "Ta Parc de la Mar snabbt och gå hem i tid.",
    ]),
    "day-2": rainPlan("Rain mode: ge katedraldagen mer tyngd", "Palmas monumentala kärna fungerar fint även i sämre väder om du håller rutten smal.", [
      "Låt La Seu bli huvudnumret.",
      "Gör gamla stan tätare och kortare.",
      "Flytta lunchen tidigare och sitt längre.",
    ]),
    "day-3": rainPlan("Rain mode: välj konst före utsikt", "Bellver tappar lite i dålig sikt, så låt kultur och marknad ta mer plats.", [
      "Kortare Bellver eller skippa det helt.",
      "Ge Es Baluard mer tid.",
      "Låt Santa Catalina bli dagens tydliga avslut.",
    ]),
    "day-4": rainPlan("Rain mode: gör havsdagen kompakt", "Portixol fungerar även i blåst eller skurar om ni håller den kort och kombinerar med långa pauser.", [
      "Ta bara ett kort kuststråk.",
      "Lägg mer tid på lunch eller kaffe.",
      "Gå tillbaka till La Lonja tidigare.",
    ]),
    "day-5": rainPlan("Rain mode: välj kultur eller favoritkafé", "Finaldagen ska kännas mjuk, inte kämpig.", [
      "Ta ett av kulturvalen och skala bort extraspår.",
      "Återvänd till ett favoritställe nära hotellet.",
      "Skydda tiden före transfer.",
    ]),
  },
};

const malagaSeed: CityGuideSeed = {
  id: "malaga",
  displayName: "Málaga",
  flag: "es",
  weather: { latitude: 36.7213, longitude: -4.4214, timezone: "Europe/Madrid" },
  currency: { base: "EUR", quote: "SEK" },
  maps: { cityQuery: "Malaga" },
  metadata: {
    appTitle: "Trip Companion",
    title: "Trip Companion Málaga",
    description:
      "A calm five-day Málaga guide built around the historic centre, sea air and easy museum culture.",
  },
  transport: {
    title: "Till fots, buss och kort metro",
    summary:
      "Málaga blir lätt när du håller dig i historiska centrum till fots och använder buss eller metro bara för de längre hoppen.",
    bullets: [
      "Gamla centrum, katedralen och Atarazanas hänger bäst ihop i promenadtempo.",
      "Buss och metro är smidiga när du vill växla mot strand, station eller andra stadsdelar.",
      "Låt hamnen och Muelle Uno bli ett havsnära kvällsstråk i stället för en separat utflykt.",
    ],
  },
  hotelAreas: [
    { value: "central", label: "Centro Histórico", hint: "Bra om du vill kunna gå till det mesta direkt." },
    { value: "historic", label: "Soho / Hamnen", hint: "Bra om du vill kombinera stad och hav i samma dag." },
    { value: "local", label: "La Malagueta / El Perchel", hint: "Lite mer vardag och lättare strandkänsla." },
    { value: "unknown", label: "Inte bestämt än", hint: "Appen håller sig centralt och enkelt tills du vet mer." },
  ],
  basics: [
    {
      tag: "Stadskänsla",
      title: "Málaga fungerar bäst som centrum plus hav",
      body: "Ta den historiska kärnan på riktigt och låt sedan strand, hamn och utsiktslägen ge luften i resan.",
    },
  ],
  gallery: [
    {
      title: "Alcazaba och höjdlinjerna",
      description:
        "Málaga har ett ovanligt fint möte mellan morisk historia, kustljus och lättillgänglig stadskärna.",
      imageUrl: commons("Malaga alcazaba 10.jpg"),
      sourceLabel: "Wikimedia Commons",
      sourceUrl: "https://commons.wikimedia.org/wiki/File:Malaga_alcazaba_10.jpg",
      credit: "Foto via Wikimedia Commons",
    },
    {
      title: "Gibralfaro ovanför staden",
      description:
        "Utsikten från höjden hjälper dig att förstå Málagas form direkt: centrum, hamn, hav och berg i samma svep.",
      imageUrl: commons("Castillo de Gibralfaro, Malaga.jpg"),
      sourceLabel: "Wikimedia Commons",
      sourceUrl: "https://commons.wikimedia.org/wiki/File:Castillo_de_Gibralfaro,_Malaga.jpg",
      credit: "Foto via Wikimedia Commons",
    },
  ],
  tripDays: [
    day(1, "Landning och centro-start", "Landa lugnt i den historiska kärnan.", "Låg till medel", "Hotellet + centrum", "Första dagen i Málaga ska kännas lätt och solsäker.", "Börja med basen och en kort runda i centrum innan havet tar över mer senare i resan.", [
      section("Ankomst", "Säkra basen", "Gör det enkelt först.", [
        stop("arrival-loop", "Checka in och lär dig närmaste torg, kaffe och väg mot centrum", "45-60 min", "Bra början för resten av veckan.", "Markera ett lätt kvällsstråk redan nu.", "Ta något enkelt nära hotellet."),
      ]),
      section("Kväll", "Kort första promenad", "Centro räcker långt första kvällen.", [
        stop("historic-walk", "Kort promenad genom historiska centrum", "60 min", "Du får stadens ton direkt utan att behöva maxa dagen.", "Håll det vackert och kort.", "En första tapasrunda passar bra här."),
      ]),
    ]),
    day(2, "Alcazaba och stadens kärna", "Nu får Málaga visa sin historiska ryggrad.", "Medel", "Alcazaba + centrum", "Dag två passar bäst för de stora symbolerna i centrum.", "Håll er nära varandra geografiskt så att dagen känns tät men aldrig splittrad.", [
      section("Morgon", "Historisk kärna", "Börja med stadens mest tydliga ikonspår.", [
        stop("alcazaba", "Alcazaba och den historiska höjden", "90 min", "Ett naturligt huvudnummer i Málaga.", "Ta det i lugn takt, särskilt om det är varmt.", "Kaffe före eller efter, inte mitt i solen."),
        stop("cathedral", "Katedralen och de närmaste gatorna", "60 min", "Bra fortsättning när du vill hålla dig i centrum.", "Låt kvarteren runtom få lite tid också.", "Lunch i centrum efteråt."),
      ]),
    ]),
    day(3, "Picasso eller marknad, sedan hav", "Ge Málaga både kultur och hamnluft.", "Medel", "Picasso + Muelle Uno", "Dag tre kan vara mer kuraterad och mindre monumental.", "Välj ett tydligt kulturstopp och låt sedan hamnen bära resten.", [
      section("Morgon", "Välj kulturspår", "Ta ett museum eller marknaden, inte allt samtidigt.", [
        stop("museum-flex", "Picasso, Pompidou eller Atarazanas", "90 min", "Bra när ni vill ge dagen ett tydligt fokus utan att jaga för mycket.", "Välj ett enda huvudspår.", "Ta lunch efter valet."),
      ]),
      section("Eftermiddag", "Hamnen", "Låt havssidan ge andrum.", [
        stop("muelle-uno", "Muelle Uno och strandpromenaden", "60-90 min", "Bra eftermiddag när ni vill ha luft, sol och enkel energi.", "Håll tempot lågt.", "Glass eller enkel middag vid vattnet fungerar bra."),
      ]),
    ]),
    day(4, "Utsikt eller stranddag", "Nu ska resan bli mer personlig.", "Medel", "Gibralfaro eller La Malagueta", "Dag fyra får gärna vara lättare och öppnare.", "Ta antingen höjd, hav eller ett kvarter och låt det räcka.", [
      section("Morgon", "Välj ton", "Utsikt eller badrytm.", [
        stop("gibralfaro", "Gibralfaro eller en lugn morgon vid La Malagueta", "90 min", "Bra när ni vill styra mer efter energi än lista.", "Välj det som kroppen vill ha just då.", "Ta med vatten eller börja med frukost nära stranden."),
      ]),
    ]),
    day(5, "Mjuk final", "Avsluta Málaga med ett spår ni faktiskt vill minnas.", "Valfri", "Favoritområde", "Sista dagen ska kännas lätt och solsäker.", "Málaga tjänar på ett avslut som inte är för ambitiöst.", [
      section("Final", "Återvänd eller runda av", "Gör en sista enkel runda.", [
        stop("favorite-return", "Återvänd till favoritdelen av centrum eller hamnen", "60-90 min", "Ger resan sammanhang i stället för sista-minuten-jakt.", "Välj det ni helst vill ha igen.", "Sista kaffe eller lunch där."),
        stop("departure-buffer", "Skydda transfer och packning", "45 min", "Sista timmarna blir bättre med god marginal.", "Håll det enkelt.", "Ät något ni redan vet fungerar."),
      ]),
    ]),
  ],
  areaCardsByDay: {
    "day-1": [
      area("centro-base", "Centro Histórico", "Lätt första bild", "Bra första kväll när du bara vill förstå stadens kärna.", "Håll radien kort.", ["Torg", "Gränder", "Tapas"], 48, 42, mapLink("Centro Historico Malaga")),
      area("hotel-loop", "Hotellets kvarter", "Praktisk bas", "Säkrar resten av resan.", "Lär dig hemvägen direkt.", ["Kaffe", "Minimarket", "Transport"], 36, 58, mapLink("Central Malaga hotel")),
    ],
    "day-2": [
      area("alcazaba-core", "Alcazaba", "Historisk höjd", "Ger stadens tydligaste historiska ryggrad.", "Ta det som dagens huvudspår.", ["Alcazaba", "Mur", "Utsikt"], 54, 34, mapLink("Alcazaba Malaga")),
      area("cathedral-core", "Katedralen", "Centrumrytm", "Bra fortsättning när ni vill hålla allt nära.", "Låt lunch bära eftermiddagen.", ["Katedral", "Centro", "Lunch"], 50, 48, mapLink("Malaga Cathedral")),
    ],
    "day-3": [
      area("museum-core", "Museum eller marknad", "Kuraterat innehåll", "Bra när ni vill ge dagen en tydlig identitet.", "Välj ett spår, inte flera.", ["Picasso", "Pompidou", "Atarazanas"], 42, 42, mapLink("Museo Picasso Malaga")),
      area("harbour-air", "Muelle Uno", "Havsluft", "Perfekt när ni vill att eftermiddagen ska kännas lätt.", "Låt vattnet bära andra halvan.", ["Hamn", "Glass", "Promenad"], 70, 58, mapLink("Muelle Uno Malaga")),
    ],
    "day-4": [
      area("gibralfaro-view", "Gibralfaro", "Utsikt", "Bra för ett tydligt wow-spår utan att hela dagen blir tung.", "Ta vatten och gå lugnt.", ["Utsikt", "Höjd", "Historia"], 44, 22, mapLink("Castillo de Gibralfaro")),
      area("malagueta", "La Malagueta", "Strandrytm", "Bra om ni vill låta Málaga bli mer semester än sevärdhet.", "Låt stranden vara tillräckligt långsam.", ["Strand", "Promenad", "Lunch"], 74, 64, mapLink("La Malagueta Malaga")),
    ],
    "day-5": [
      area("favorite-finale", "Favoritspåret", "Personlig final", "Återbesök gör ofta resan mer sammanhängande.", "Välj det ni redan vet att ni gillar.", ["Favoritkvarter", "Kaffe", "Lunch"], 54, 46, mapLink("Centro Historico Malaga cafe")),
      area("soft-exit", "Mjuk exit", "Lugn logistik", "Skyddar sista dagens rytm.", "Låt transporten vara enkel.", ["Packning", "Transfer", "Sista paus"], 36, 62, mapLink("Malaga Maria Zambrano station cafe")),
    ],
  },
  rainPlansByDay: {
    "day-1": rainPlan("Rain mode: håll Málaga liten", "Första dagen behöver mest orientering.", ["Kortare centrumrunda.", "Lägg mer tid på kaffe eller tapas inomhus.", "Gå hem tidigt och mjukt."]),
    "day-2": rainPlan("Rain mode: låt Alcazaba bli huvudnumret", "Historiedagen fungerar bäst om du håller den tät.", ["Skippa längre omvägar.", "Låt katedralen bli kortare vid behov.", "Ta en längre lunchpaus."]),
    "day-3": rainPlan("Rain mode: välj museum framför hamnluft", "Den här dagen är lätt att rädda med ett tydligt kulturval.", ["Gör bara ett museum.", "Kortare sväng vid Muelle Uno.", "Låt middagen bli tidigare och enklare."]),
    "day-4": rainPlan("Rain mode: välj centrum eller ett kaféspår", "Dag fyra ska kännas lätt även om vädret vänder.", ["Skippa höjd och strand om det blåser för mycket.", "Ta ett lugnt centrumspår i stället.", "Bygg dagen kring mat och pauser."]),
    "day-5": rainPlan("Rain mode: gör finalen enkel", "Sista dagen ska vara lätt att genomföra.", ["Återvänd nära hotellet.", "Skydda transfermarginalen.", "Låt sista stoppet vara kort."]),
  },
};

export const europeanGuideSeedsC = [palmaSeed, malagaSeed] as const;
