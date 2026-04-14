export type TripStop = {
  id: string;
  name: string;
  duration: string;
  why: string;
  tip: string;
  food: string;
};

export type TripSection = {
  label: string;
  title: string;
  note: string;
  stops: TripStop[];
};

export type TripOption = {
  title: string;
  copy: string;
};

export type TripDay = {
  id: string;
  dayNumber: number;
  title: string;
  theme: string;
  energy: string;
  neighborhood: string;
  intro: string;
  story: string;
  sections: TripSection[];
  options: TripOption[];
};

export type GuideCard = {
  tag: string;
  title: string;
  body: string;
};

export type GalleryItem = {
  title: string;
  description: string;
  imageUrl: string;
  sourceLabel: string;
  sourceUrl: string;
  credit: string;
};

export type CityWowFact = {
  tag: string;
  title: string;
  body: string;
  imageUrl?: string;
  sourceLabel?: string;
  sourceUrl?: string;
  credit?: string;
};

export const gallery: GalleryItem[] = [
  {
    title: "Skyline, inte bara sevärdhet",
    description:
      "New York blir mindre överväldigande när man börjar se staden som sammanhängande scener, inte bara en lista med måsten.",
    imageUrl:
      "https://commons.wikimedia.org/wiki/Special:FilePath/Brooklyn_bridge_and_the_New_York_skyline.jpg",
    sourceLabel: "Wikimedia Commons",
    sourceUrl:
      "https://commons.wikimedia.org/wiki/File:Brooklyn_bridge_and_the_New_York_skyline.jpg",
    credit: "Photo by Scarllett5, CC BY-SA 4.0",
  },
  {
    title: "Transport som självförtroende",
    description:
      "För en förstagångsbesökare är en enkel första subwaytur ofta viktigare än ännu en toppattraktion.",
    imageUrl:
      "https://commons.wikimedia.org/wiki/Special:FilePath/NYC_Subway_entrance_BW_vc.jpg",
    sourceLabel: "Wikimedia Commons",
    sourceUrl:
      "https://commons.wikimedia.org/wiki/File:NYC_Subway_entrance_BW_vc.jpg",
    credit: "Photo by Vincent Chan, CC BY-SA",
  },
  {
    title: "Det personliga New York",
    description:
      "Den verkliga wow-känslan kommer ofta i kvarteren: brownstones, hörnkaféer och gator som känns bekanta redan dag fyra.",
    imageUrl:
      "https://commons.wikimedia.org/wiki/Special:FilePath/Brownstone%20(1854)%20with%20front%20garden%20and%20iron%20gate,%20West%209th%20Street,%20Greenwich%20Village,%20New%20York%20City%20(22614777044).jpg",
    sourceLabel: "Wikimedia Commons",
    sourceUrl:
      "https://commons.wikimedia.org/wiki/File:Brownstone_(1854)_with_front_garden_and_iron_gate,_West_9th_Street,_Greenwich_Village,_New_York_City_(22614777044).jpg",
    credit: "Photo from Wikimedia Commons",
  },
  {
    title: "Grand Central och de stora rummen",
    description:
      "Vissa New York-ögonblick handlar inte om höjd utan om interiörer. Grand Central ger precis den sortens filmiska tyngd som håller över tid.",
    imageUrl:
      "https://commons.wikimedia.org/wiki/Special:FilePath/Grand_Central_Terminal_Main_Concourse_2019-10-03_20-02.jpg",
    sourceLabel: "Wikimedia Commons",
    sourceUrl:
      "https://commons.wikimedia.org/wiki/File:Grand_Central_Terminal_Main_Concourse_2019-10-03_20-02.jpg",
    credit: "Photo from Wikimedia Commons",
  },
  {
    title: "High Line och västra Manhattan",
    description:
      "När du vill att New York ska kännas samtida, luftig och lite mindre uppläst är västsidan ett perfekt motdrag.",
    imageUrl:
      "https://commons.wikimedia.org/wiki/Special:FilePath/High_Line_(2009-10-29).jpg",
    sourceLabel: "Wikimedia Commons",
    sourceUrl:
      "https://commons.wikimedia.org/wiki/File:High_Line_(2009-10-29).jpg",
    credit: "Photo from Wikimedia Commons",
  },
  {
    title: "Roosevelt Island som sidosteg",
    description:
      "Ett litet hopp ut från Manhattan kan ge exakt den nya vinkel som gör sista dagarna skarpare, särskilt om ni redan gjort de stora klassikerna.",
    imageUrl:
      "https://commons.wikimedia.org/wiki/Special:FilePath/Roosevelt_Island_Tramway_tower.jpg",
    sourceLabel: "Wikimedia Commons",
    sourceUrl:
      "https://commons.wikimedia.org/wiki/File:Roosevelt_Island_Tramway_tower.jpg",
    credit: "Photo from Wikimedia Commons",
  },
];

export const basics: GuideCard[] = [
  {
    tag: "Stadslogik",
    title: "Tänk i områden, inte i hela New York på en gång",
    body:
      "New York består av fem boroughs och hundratals kvarter. Förstagångsresor blir bättre när du håller ihop dagen geografiskt i stället för att hoppa fram och tillbaka bara för att allt råkar ligga i samma stad.",
  },
  {
    tag: "Transport",
    title: "Tunnelbanan är vanligtvis det snabbaste sättet att röra sig",
    body:
      "NYC Tourism beskriver staden som mycket gångvänlig och lyfter subway, bussar och taxi som huvudalternativ när du behöver täcka längre sträckor. En kort provtur dag 1 gör underverk för självförtroendet.",
  },
  {
    tag: "OMNY",
    title: "Använd samma kort eller mobil hela veckan",
    body:
      "Enligt OMNY får du weekly fare cap om du använder samma betalningssätt konsekvent. Fullprisresor med samma kort eller enhet räknas mot veckotaket på 35 USD, med 3 USD per resa.",
  },
  {
    tag: "Tempo",
    title: "För många stora attraktioner samma dag förstör ofta rytmen",
    body:
      "Den klassiska turistfällan i NYC är att varje dag blir en kamp mellan köer, bokningstider och trötta fötter. Tre till fem starka ankare räcker gott.",
  },
  {
    tag: "Västsidan",
    title: "Låt minst en dag bli mer Chelsea, Village eller Upper West",
    body:
      "Många förstaresor blir bättre när de stora klassikerna får sällskap av ett mer nutida eller kvartersnära spår som High Line, bokgator, mindre museum eller en längre lunch.",
  },
  {
    tag: "Trygghet",
    title: "Vanligaste turistproblemen är ofta små men störiga",
    body:
      "Wikivoyage pekar ut väskryckning och överprissättning i typiska turistzoner som mer sannolika problem än våldsbrott för besökare. Håll koll på väskan och låt inte trängsel få dig att släppa fokus.",
  },
  {
    tag: "Boende",
    title: "Räkna med att hotellslutpriset blir högre än listpriset",
    body:
      "Hotellskatter och avgifter kan höja slutpriset märkbart. En bra reseapp behöver hjälpa användaren att tänka i totalbudget, inte bara i listat rumspris.",
  },
];

export const wowFacts: CityWowFact[] = [
  {
    tag: "Biblioteket",
    title: "Lejonen fick sina namn mitt under depressionen",
    body:
      "Patience och Fortitude blev deras namn nar Mayor La Guardia tyckte att New York behovde just de egenskaperna for att ta sig igenom 1930-talet. Det gor trappan framfor NYPL till mer an ett foto.",
    sourceLabel: "NYPL om lejonen",
    sourceUrl: "https://www.nypl.org/125/lions",
  },
  {
    tag: "Terminalen",
    title: "Grand Centrals zodiakhimmel ar medvetet baklanges",
    body:
      "Terminalens egen guide lyfter att den beromda himlen i Main Concourse ar malen baklanges, som ett slags gudomligt perspektiv. Nar du vet det tittar du upp pa ett helt annat satt.",
    imageUrl:
      "https://commons.wikimedia.org/wiki/Special:FilePath/Grand_Central_Terminal_Main_Concourse_2019-10-03_20-02.jpg",
    sourceLabel: "Grand Central Terminal",
    sourceUrl: "https://grandcentralterminal.com/what-to-see/",
    credit: "Foto via Wikimedia Commons",
  },
  {
    tag: "Parken",
    title: "High Line var ett upphojt godsspar innan den blev park",
    body:
      "Enligt High Lines faktablad byggdes sparstrukturen pa 1930-talet for att lyfta farliga godstag bort fran gatorna pa Manhattans vastsida. Den sista lasten 1980 var tre vagnar med frysta kalkoner.",
    imageUrl:
      "https://commons.wikimedia.org/wiki/Special:FilePath/High_Line_(2009-10-29).jpg",
    sourceLabel: "High Line fact sheet",
    sourceUrl: "https://files.thehighline.org/pdf/high_line_fact_sheet.pdf",
    credit: "Foto via Wikimedia Commons",
  },
  {
    tag: "Hamnstaden",
    title: "Downtowns gamla hamn forklarar varfor New York blev New York",
    body:
      "South Street Seaport Museum beskriver kvarteren som platsen dar stadens historia som varldsport fortfarande gar att lasa i byggnader, bryggor och historiska fartyg. Det ar ett lager manga missar helt.",
    sourceLabel: "South Street Seaport Museum",
    sourceUrl: "https://southstreetseaportmuseum.org/about/",
  },
  {
    tag: "Republiken",
    title: "Pa Wall Street svors USA:s forsta president in",
    body:
      "Federal Hall ar inte bara ett snyggt stopp i finansdistriktet. National Park Service beskriver platsen som starten for den amerikanska republiken, dar George Washington tog eden den 30 april 1789.",
    sourceLabel: "National Park Service",
    sourceUrl: "https://www.nps.gov/feha/index.htm",
  },
];

export const tripDays: TripDay[] = [
  {
    id: "day-1",
    dayNumber: 1,
    title: "Landning och mjukstart",
    theme: "Bli vän med staden innan du försöker bemästra den",
    energy: "Låg till medel",
    neighborhood: "Hotellet + Village-spår",
    intro:
      "Första dagen ska inte vara heroisk. Den ska vara klok. Du landar, får koll på kvarteret runt hotellet, testar en enkel subwaytur och tar en promenad som gör att New York känns stor men inte hotfull.",
    story:
      "Det här är dagen då appen ska minska brus. Välj en trygg första promenad, ät något enkelt men ikoniskt och avsluta medan du fortfarande har energi kvar. Du ska vakna dag två med känslan att du redan fattar något om staden.",
    sections: [
      {
        label: "Morgon / ankomst",
        title: "Landa utan att rusa in i sightseeing-läget",
        note:
          "Fokusera på incheckning, väska, vatten och att hitta närmaste tunnelbanestation eller busslinje.",
        stops: [
          {
            id: "arrival-check",
            name: "Checka in och gör en 15-minuters radie runt hotellet",
            duration: "45-60 min",
            why: "Den lilla orienteringen minskar stress mer än en tidig toppattraktion.",
            tip: "Markera ett apotek, en deli och närmaste station redan första dagen.",
            food: "Köp snacks, vatten och något enkelt till rummet.",
          },
          {
            id: "first-ride",
            name: "Ta en enkel testtur med subway eller buss",
            duration: "20-30 min",
            why: "En kort provtur gör att kollektivtrafiken känns bekant innan den måste fungera på riktigt.",
            tip: "Använd samma kort eller mobil för OMNY varje gång om du vill få fare cap under veckan.",
            food: "Ingen mat här, bara självförtroende.",
          },
        ],
      },
      {
        label: "Eftermiddag",
        title: "Första riktiga New York-promenaden",
        note:
          "Välj ett område som känns filmiskt men inte kaotiskt. West Village, Greenwich Village eller närliggande delar av Midtown fungerar bra.",
        stops: [
          {
            id: "village-walk",
            name: "Promenad i Village-kvarteren",
            duration: "90 min",
            why: "Det här ger dig stadskänslan utan Times Squares överdos.",
            tip: "Gå långsamt. Lägg märke till kvarteren, ljudet, små parker och hörnrestauranger.",
            food: "Stanna för kaffe eller tidig bagel om energin dippar.",
          },
          {
            id: "park-pause",
            name: "Ta en kort paus i en liten park eller på ett café",
            duration: "30 min",
            why: "Pauser är det som gör att dag två fortfarande känns kul.",
            tip: "Markera vilken del av staden som först känns mest er.",
            food: "Lätt fika eller lemonade räcker.",
          },
        ],
      },
      {
        label: "Kväll",
        title: "Din första New York-middag ska vara enkel och minnesvärd",
        note:
          "Undvik att boka något avancerat första kvällen. Håll beslutströttheten låg.",
        stops: [
          {
            id: "slice-night",
            name: "Ät en klassisk slice eller en bagelmiddag",
            duration: "45 min",
            why: "Det känns rätt, kostar lite mindre och sätter tonen för resan.",
            tip: "Pizza, bagels och andra NYC-klassiker dyker upp gång på gång i guiderna av en anledning.",
            food: "Pizza, bagel eller pastramismörgås.",
          },
        ],
      },
    ],
    options: [
      {
        title: "Plan B om du är helt slut",
        copy:
          "Skippa testturen och gör bara hotellradie plus middag. Dag 1 får vara kort.",
      },
      {
        title: "Om du landar tidigt",
        copy:
          "Lägg till en kvällspromenad till Washington Square Park eller ett lugnt observation deck om du redan har biljett.",
      },
    ],
  },
  {
    id: "day-2",
    dayNumber: 2,
    title: "Klassiska Manhattan",
    theme: "Nu får du vykorts-New York, men i rätt dos",
    energy: "Medel",
    neighborhood: "Midtown + Bryant Park + biblioteket + Grand Central",
    intro:
      "Dag två är rätt tillfälle för skyline-känslan. Du har redan landat i staden lite grann och kan nu ta in de stora symbolerna utan att de känns som ett överfall.",
    story:
      "Det här är dagen då Manhattan får vara exakt så storfilmig som du hoppades. Men vi håller tempot mänskligt: en tydlig kärnrutt, en rejäl paus och bara ett stort höjdpunktsspår i taget.",
    sections: [
      {
        label: "Morgon",
        title: "Bryant Park till Grand Central",
        note:
          "Det här ger ett klassiskt första Midtown-flöde utan att fastna i turisttrafik hela tiden.",
        stops: [
          {
            id: "bryant-park",
            name: "Bryant Park och biblioteksspåret",
            duration: "45 min",
            why: "Du får omedelbart den eleganta, urbana New York-känslan.",
            tip: "Bra första stopp om du vill börja snyggt och lugnt.",
            food: "Kaffe och frukost här fungerar fint.",
          },
          {
            id: "library-lions",
            name: "New York Public Library och lejonen vid Fifth Avenue",
            duration: "30-45 min",
            why: "Ger dagen en klassisk New York-interiör till utan att spräcka tempot.",
            tip: "Titta både på trappan, hallen och hur Midtown öppnar sig runt byggnaden.",
            food: "Bra läge för kaffe före eller efter.",
          },
          {
            id: "grand-central",
            name: "Grand Central Terminal",
            duration: "40 min",
            why: "En av stadens mest ikoniska interiörer, lätt att förstå och lätt att älska.",
            tip: "Titta upp. Det är halva upplevelsen.",
            food: "Bra snabb lunch finns om ni vill stanna.",
          },
        ],
      },
      {
        label: "Eftermiddag",
        title: "Välj ett enda wow-spår",
        note:
          "Bara en stor huvudattraktion här. Annars blir resten av dagen bara köer och beslut.",
        stops: [
          {
            id: "observation-deck",
            name: "Observation deck eller Rockefeller-området",
            duration: "90-120 min",
            why: "En utsikt räcker ofta bättre än flera. Det ger orientering och wow på samma gång.",
            tip: "Boka i förväg om du vet vilket deck ni vill upp på.",
            food: "Sen lunch efteråt är smartare än före.",
          },
          {
            id: "times-square-soft",
            name: "Times Square i kort dos",
            duration: "20-30 min",
            why: "Du har sett det. Du behöver inte bo där emotionellt.",
            tip: "Bra att besöka, sämre att överinvestera tid i.",
            food: "Ät helst inte just här om ni vill ha bättre upplevelse per krona.",
          },
        ],
      },
      {
        label: "Kväll",
        title: "Landa snyggt",
        note:
          "Kvällen ska kännas som belöning, inte maraton.",
        stops: [
          {
            id: "midtown-dinner",
            name: "Middag i Midtown eller tillbaka i hotellets område",
            duration: "60-90 min",
            why: "Att äta nära där ni avslutar sparar mer energi än man tror.",
            tip: "Många ställen är mer avslappnade än man tror, men håll ändå koll på stilnivån om du väljer finare restaurang.",
            food: "Välj något typiskt eller helt enkelt något som känns lätt.",
          },
        ],
      },
    ],
    options: [
      {
        title: "Om ni älskar filmisk stadskänsla",
        copy:
          "Lägg in en kvällspromenad när lamporna tänts men lämna innan det blir för trångt.",
      },
      {
        title: "Om ni hatar köer",
        copy:
          "Skippa observation deck och byt till mer promenad, park och ett museum senare i resan.",
      },
    ],
  },
  {
    id: "day-3",
    dayNumber: 3,
    title: "Downtown och stadens berättelse",
    theme: "Ikoner, historia och skyline",
    energy: "Medel till hög",
    neighborhood: "Lower Manhattan + Ferry",
    intro:
      "Nu är det dags för den del av staden där New York känns både historisk och dramatisk. Här finns symbolerna, vattnet, finansdistriktet och de stora berättelserna om immigration och skyline.",
    story:
      "Den här dagen fungerar bäst när den får börja tidigt. Ju tidigare ni kommer ner hit, desto mindre blir köerna och desto större känns stillheten vid minnesplatserna och vattnet.",
    sections: [
      {
        label: "Morgon",
        title: "Lower Manhattan innan staden blir för högljudd",
        note:
          "Starta tidigt för att få lugnare rytm runt World Trade Center-området och vattnet.",
        stops: [
          {
            id: "wtc-memorial",
            name: "9/11 Memorial-området",
            duration: "45-60 min",
            why: "En central del av stadens moderna berättelse, och bäst upplevd utan stress.",
            tip: "Här passar tyst tempo bättre än aggressiv sightseeing.",
            food: "Spara matstoppet till efteråt.",
          },
          {
            id: "wall-street",
            name: "Kort sväng förbi Wall Street och finansdistriktet",
            duration: "30 min",
            why: "Det ger den klassiska downtown-kontrasten mellan historia och makt.",
            tip: "Det räcker oftast med en snabb runda här.",
            food: "Kaffe eller snack på väg vidare.",
          },
          {
            id: "seaport-walk",
            name: "South Street Seaport eller vattnet runt Pier 17",
            duration: "45 min",
            why: "Ger downtown ett öppnare, mer maritimt lager än bara minnesplatser och finans.",
            tip: "Bra när ni vill låta vattnet och de gamla hamnspåren förlänga berättelsen.",
            food: "Sen frukost eller tidig lunch fungerar bra här.",
          },
        ],
      },
      {
        label: "Eftermiddag",
        title: "Vatten, frihetskänsla och skyline",
        note:
          "Du behöver inte göra allt. Välj det som passar energi, budget och kövilja.",
        stops: [
          {
            id: "ferry-view",
            name: "Staten Island Ferry eller annan skylinefärd",
            duration: "60-90 min",
            why: "Vattnet ger dig stadens silhuett på riktigt.",
            tip: "Perfekt om ni vill ha stor effekt utan att hela dagen fastnar i biljettlogistik.",
            food: "Snabb sen lunch efter färjan.",
          },
          {
            id: "liberty-choice",
            name: "Frihetsgudinnan om ni bokat i förväg",
            duration: "2-4 h",
            why: "Stort, klassiskt och värt det om ni verkligen vill ha själva ikonen.",
            tip: "Boka långt i förväg om ni vill ha en smidig upplevelse.",
            food: "Ta med tålamod mer än snacks.",
          },
        ],
      },
      {
        label: "Kväll",
        title: "Gå hem med skyline i kroppen",
        note:
          "Kvällen får gärna vara enkel efter en mer logistikintensiv dag.",
        stops: [
          {
            id: "slow-dinner",
            name: "Middag i ett lugnare område efter downtown",
            duration: "60 min",
            why: "Hjälper er att stänga dagen utan sensory overload.",
            tip: "Det här är en bra kväll för att skriva ned vad ni gillat mest hittills.",
            food: "Välj något varmt och enkelt.",
          },
        ],
      },
    ],
    options: [
      {
        title: "Om ni vill minimera köer",
        copy:
          "Gör färjan, hoppa över stora biljettattraktioner och ge mer tid till promenad längs vattnet.",
      },
      {
        title: "Om ni älskar historia",
        copy:
          "Låt downtown få ta större plats och skala bort kvällsplanerna.",
      },
    ],
  },
  {
    id: "day-4",
    dayNumber: 4,
    title: "Kvarters-New York",
    theme: "Nu börjar staden kännas personlig",
    energy: "Medel",
    neighborhood: "Chelsea, SoHo, Village, Brooklyn-val",
    intro:
      "Det här är dagen då du lämnar ren ikonjakt och börjar förstå varför människor återvänder till New York. Mindre måste, mer stadskänsla.",
    story:
      "Om de första dagarna gav dig riktning, ger dag fyra smak. Här får staden bli mer mänsklig: bokhandlar, smågator, brofästen, långa luncher och känslan av att snubbla på något som blir ditt.",
    sections: [
      {
        label: "Morgon",
        title: "SoHo eller Village i lugn rytm",
        note:
          "Bra morgon för långsam promenad, små butiker och vardagsvacker stad.",
        stops: [
          {
            id: "soho-walk",
            name: "Promenad i SoHo / NoHo",
            duration: "60-90 min",
            why: "Arkitektur, butiker och ett mer luftigt tempo än Midtown.",
            tip: "Titta mer upp än in i skyltfönstren.",
            food: "Brunch eller långfrukost passar perfekt här.",
          },
          {
            id: "high-line",
            name: "High Line eller ett västsidestopp med lite mer luft",
            duration: "45-60 min",
            why: "Det här ger New York en samtida sida och bryter fint mot de mer klassiska dagarna.",
            tip: "Bra att göra i lugn fart och utan att försöka täcka hela västsidan.",
            food: "Kaffe, marknad eller lätt lunch nära Chelsea fungerar fint.",
          },
          {
            id: "village-streets",
            name: "Villagestopp nummer två, nu när du är mer hemma",
            duration: "45 min",
            why: "Samma kvarter känns annorlunda när du inte längre orienterar dig i panik.",
            tip: "Markera en favoritgata eller ett kvarter ni gärna återvänder till.",
            food: "Kaffe eller dessertstopp.",
          },
        ],
      },
      {
        label: "Eftermiddag",
        title: "Välj ditt Brooklyn-spår eller stanna på Manhattan",
        note:
          "Det här är en perfekt eftermiddag för att känna att resan blir din och inte bara appens.",
        stops: [
          {
            id: "brooklyn-bridge-area",
            name: "Brooklyn Bridge-området eller DUMBO",
            duration: "90 min",
            why: "Skylinevy och Brooklynkänsla i ett.",
            tip: "Bra val om ni vill ha fotoögonblick utan att börja om från noll.",
            food: "Sen lunch med utsikt om det går.",
          },
          {
            id: "museum-flex",
            name: "Museum eller park istället",
            duration: "90-120 min",
            why: "Alla resor behöver inte ha samma tempo. Kulturspåret kan vara er bästa dag fyra.",
            tip: "Välj ett museum, inte tre.",
            food: "Kaféstopp i anslutning.",
          },
        ],
      },
      {
        label: "Kväll",
        title: "Din mest personliga kväll hittills",
        note:
          "Nu vet ni bättre vad ni gillar. Låt kvällen spegla det.",
        stops: [
          {
            id: "favorite-return",
            name: "Återvänd till ett område ni fastnat för",
            duration: "Flex",
            why: "Att gå tillbaka till något bra är ofta bättre än att jaga ännu en topp tio-lista.",
            tip: "Det här är en bra kväll för en liten shoppingrunda eller drink om energin finns.",
            food: "Boka trevligt om ni vill, men bara om det känns kul.",
          },
        ],
      },
    ],
    options: [
      {
        title: "Om ni vill ha lugn dag fyra",
        copy:
          "Skippa Brooklyn och bygg dagen runt ett område, en lång lunch och ett museum.",
      },
      {
        title: "Om ni vill ha max New York-känsla",
        copy:
          "Kombinera Village, brofäste och en kväll med utsikt eller livekänsla.",
      },
    ],
  },
  {
    id: "day-5",
    dayNumber: 5,
    title: "Välj din avslutning",
    theme: "Sista dagen ska kännas som ett bra slut, inte som ett stressat appendix",
    energy: "Valfri",
    neighborhood: "Flexibel",
    intro:
      "Sista dagen ska inte vara restlistans soptunna. Den ska ge resan form. Därför avslutar vi med tre spår i stället för ett enda facit.",
    story:
      "Du har nu tillräckligt med känsla för staden för att välja rätt. Appens jobb är inte längre att styra dig hårt, utan att hjälpa dig välja en final som passar just den här resan.",
    sections: [
      {
        label: "Spår 1",
        title: "Kulturfinal",
        note:
          "För er som vill avsluta med museum, arkitektur eller en sista lugn promenad i park eller längs en aveny.",
        stops: [
          {
            id: "culture-finale",
            name: "Välj ett museum eller en kulturell favorit",
            duration: "2-3 h",
            why: "En tydlig sista huvudpunkt känns bättre än splittrad stress.",
            tip: "Lämna tid för lunch och packning.",
            food: "Museumslunch eller tidig lunch i närheten.",
          },
        ],
      },
      {
        label: "Spår 2",
        title: "Mat och shopping",
        note:
          "För er som vill köpa med något hem och äta en sista riktigt New York-typisk måltid.",
        stops: [
          {
            id: "food-shopping",
            name: "En favoritklassiker till plus sista inköp",
            duration: "2-3 h",
            why: "Det känns ofta mer meningsfullt än en sista stor attraktion.",
            tip: "Spara lite luft i väskan första dagen så den här planen fungerar.",
            food: "Bagels, pizza, dessert eller delikatessklassiker.",
          },
        ],
      },
      {
        label: "Spår 3",
        title: "Lugn sista dag",
        note:
          "För er som vill lämna staden utan att behöva återhämta er från själva avresedagen.",
        stops: [
          {
            id: "soft-exit",
            name: "Kafé, favoritpromenad, sedan tillbaka och hämta väskor i god tid",
            duration: "Flex",
            why: "Den smartaste sista dagen är ofta den som känns lättast i kroppen.",
            tip: "Lämna budgetluft även sista dagen. Trötthet gör små fel dyrare.",
            food: "Något ni redan vet att ni tycker om.",
          },
        ],
      },
    ],
    options: [
      {
        title: "Min regel för dag fem",
        copy:
          "Högst en stor sak. Resten ska vara mjukt.",
      },
      {
        title: "Om ni redan längtar tillbaka",
        copy:
          "Skriv tre saker ni vill göra nästa gång. Det hjälper appen att kännas som början på nästa resa, inte bara slutet på den här.",
      },
    ],
  },
];
