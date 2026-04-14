import {
  area,
  day,
  mapLink,
  rainPlan,
  section,
  stop,
  type CityGuideSeed,
} from "@/lib/guide-builders";

const amsterdamSeed: CityGuideSeed = {
  id: "amsterdam",
  displayName: "Amsterdam",
  flag: "nl",
  weather: { latitude: 52.3676, longitude: 4.9041, timezone: "Europe/Amsterdam" },
  currency: { base: "EUR", quote: "SEK" },
  maps: { cityQuery: "Amsterdam" },
  metadata: {
    appTitle: "Trip Companion",
    title: "Trip Companion Amsterdam",
    description: "A calm five-day Amsterdam guide with premium day unlocks.",
  },
  transport: {
    title: "Spårvagn, gång och korta hopp",
    summary:
      "Amsterdam blir bäst när du håller dagarna kompakta och låter promenad eller spårvagn bära staden.",
    bullets: [
      "Kanaldelarna är ofta bättre till fots än via många transporter.",
      "Spårvagn är smidig när du vill flytta dig utan att tappa stadskänslan.",
      "Planera korta radier per halvdag så att ni inte bryter den lugna rytmen.",
    ],
  },
  hotelAreas: [
    { value: "central", label: "Centrum / Jordaan", hint: "Bra om du vill kunna promenera mycket direkt från hotellet." },
    { value: "historic", label: "Canal Belt / Museumplein", hint: "Bra om du vill bo mitt i de klassiska stråken." },
    { value: "local", label: "De Pijp / Oost", hint: "Lite mer lokal vardag och mindre turisttäthet utanför dörren." },
    { value: "unknown", label: "Inte bestämt än", hint: "Appen fortsätter med en lugn standard tills boendet sitter." },
  ],
  basics: [
    { tag: "Tempo", title: "Amsterdam blir bäst när du följer vattnet", body: "Kanalerna gör staden lätt att läsa. Håll dagarna kanalnära och låt gångtempot sätta rytmen i stället för tvärtom." },
  ],
  gallery: [
    { title: "Vatten, tegel och mjuk rytm", description: "Amsterdam känns som små exakta scener. Broar, kanter och kvarter gör ofta mer än en lång lista sevärdheter.", imageUrl: "", sourceLabel: "", sourceUrl: "", credit: "" },
  ],
  tripDays: [
    day(1, "Landning och kanalstart", "Låt Amsterdam börja i mänsklig skala.", "Låg till medel", "Hotellet + närmaste kanalstråk", "Första dagen ska vara lätt. Få koll på hotellet, närmaste spårvagn eller metro och en första kort kanalpromenad.", "Det räcker långt att förstå hur staden flyter första kvällen.", [
      section("Ankomst", "Bygg trygg bas", "Sänk allt brus innan ni börjar samla intryck.", [
        stop("arrival-loop", "Checka in och lär dig närmaste kanal, matställe och hållplats", "45-60 min", "Det gör resten av veckan mycket mjukare.", "Fotografera bro eller hörn som hjälper hemvägen.", "Köp vatten och ett enkelt mellanmål."),
      ]),
      section("Kväll", "Kort kanalpromenad", "En stilla start räcker första kvällen.", [
        stop("canal-walk", "Gå en kort runda längs närmaste kanal", "45-60 min", "Du får stadens grundkänsla direkt.", "Låt det vara kort och fint snarare än långt.", "Ta middag eller ost/snack i närheten efteråt."),
      ]),
    ]),
    day(2, "Klassiska Amsterdam", "Nu får du kanalerna och de stora vykorten i rätt takt.", "Medel", "Canal Belt + Jordaan", "Dag två passar perfekt för att läsa den klassiska staden genom kanaler och tydliga kvarter.", "Amsterdam behöver inte mycket tempo för att kännas rikt.", [
      section("Morgon", "Canal Belt", "Börja i stadens mest klassiska väv.", [
        stop("canal-belt", "Promenad genom Canal Belt", "60-90 min", "Här förstår du staden snabbast.", "Prioritera broar, gathörn och pauser framför fart.", "Kaffe och frukost längs vägen fungerar perfekt."),
        stop("jordaan", "Fortsätt mot Jordaan", "60 min", "Bra övergång från vykort till kvarter.", "Låt smågatorna få tid.", "Lunch i Jordaan passar mycket bra."),
      ]),
      section("Eftermiddag", "Ett lugnt extraspår", "Välj mer kanal eller ett enda museum.", [
        stop("nine-streets", "De Negen Straatjes eller ett enda mindre museum", "60-90 min", "Bra eftermiddag när ni vill hålla dagen mänsklig.", "Välj det som känns roligt, inte mest rätt.", "Fika eller tidig drink fungerar fint."),
      ]),
    ]),
    day(3, "Museum eller historia", "Ta ett starkt innehållsspår och låt resten vara lätt.", "Medel", "Museumplein eller Anne Frank/Jordaan", "Dag tre handlar om att ge resan ett tydligt kulturellt spår.", "Amsterdam belönar ett enda genomfört huvudnummer mer än flera halvstressade.", [
      section("Morgon", "Välj huvudspår", "Ta ett av stadens stora innehållsspår.", [
        stop("museumplein", "Museumplein med ett enda museum", "2-3 h", "Det ger kultur utan att ni behöver flänga.", "Välj ett museum och håll fast vid det.", "Lunch i området efteråt."),
        stop("anne-frank", "Anne Frank-huset om ni redan har biljett", "90 min", "Starkt och viktigt, men bäst när det inte trängs med för mycket annat.", "Bygg resten av dagen mjukare runt detta.", "Ta en lugn paus efteråt."),
      ]),
    ]),
    day(4, "Lokala kvarter", "Nu ska Amsterdam få bli mer vardag och mindre lista.", "Medel", "De Pijp eller Oost", "Dag fyra ska kännas som en dag ni nästan hade kunnat ha om ni bodde här.", "Ta ett område, en marknad eller ett parkspår och låt det räcka.", [
      section("Morgon", "Välj område", "Stanna i ett område tillräckligt länge.", [
        stop("de-pijp", "De Pijp och Albert Cuyp eller Oost", "90 min", "Bra om ni vill känna mer lokal rytm.", "Prioritera gator och stämning framför att täcka allt.", "Långfrukost eller marknadssnack passar här."),
      ]),
      section("Eftermiddag", "Park eller vatten", "Gör ett mjukt andra spår.", [
        stop("vondelpark", "Vondelpark eller ytterligare ett kanalspår", "60-90 min", "Bra för att ge kroppen en lätt dag utan att upplevelsen känns tunn.", "Välj park om benen behöver vila.", "Kaffe eller picknick beroende på väder."),
      ]),
    ]),
    day(5, "Mjuk final", "Sista dagen ska kännas lätt, vattennära och personlig.", "Valfri", "Favoritområde", "Nu vet ni om resan ska sluta med ett museum, en kanal eller en lugn lunch.", "Amsterdam vinner på ett avslut som känns behagligt mer än spektakulärt.", [
      section("Final", "Återvänd till det som fungerade bäst", "Gör finalen enkel och tydlig.", [
        stop("favorite-return", "Gå tillbaka till favoritkanalen eller favoritkvarteret", "90 min", "Ger resan ett mjukt och sammanhållet slut.", "Välj det som ni helst tänker på när ni pratar om staden.", "Sista brunch eller lunch där."),
        stop("departure-buffer", "Ta hemreselogistiken tidigt", "45 min", "Det håller sista timmarna lugna.", "Amsterdam är bäst i kroppen när sista dagen inte blir ett race.", "Ta något enkelt nära avfärd."),
      ]),
    ]),
  ],
  areaCardsByDay: {
    "day-1": [area("hotel-canal", "Hotellets kanalstråk", "Mjuk första bild", "Perfekt första kväll när ni bara vill förstå stadens logik.", "Gå kort, gå fint, gå hem i tid.", ["Bro", "Kanal", "Hållplats"], 38, 58, mapLink("Central Amsterdam canal")), area("centraal", "Centrum nära stationen", "Orientering", "Bra om ni vill se stadens kärna utan att göra en hel dag av det.", "Håll det kort första kvällen.", ["Centraal", "Kanal", "Torgrum"], 54, 36, mapLink("Amsterdam Centraal"))],
    "day-2": [area("canal-belt", "Canal Belt", "Klassisk Amsterdam", "Här sitter stadens identitet i varje kvarter.", "Ta detta som dagens ryggrad.", ["Kanaler", "Broar", "Smågator"], 48, 42, mapLink("Amsterdam Canal Belt")), area("jordaan-map", "Jordaan", "Kvarterskänsla", "Perfekt för att sakta ner efter huvudstråket.", "Bra lunch- och eftermiddagsområde.", ["Jordaan", "Kaféer", "Smågator"], 38, 34, mapLink("Jordaan Amsterdam"))],
    "day-3": [area("museumplein-map", "Museumplein", "Kulturspår", "Lätt och kvalitativt när ni vill ge dagen ett innehållsankare.", "Välj ett museum och håll fast vid det.", ["Museum", "Gräsytor", "Kafé"], 60, 48, mapLink("Museumplein Amsterdam")), area("anne-frank-zone", "Jordaan / Anne Frank-spår", "Historia och eftertanke", "Ett starkt och tydligt spår om ni redan har biljett.", "Skala ner resten av dagen runt detta.", ["Anne Frank", "Kanal", "Lugn paus"], 42, 36, mapLink("Anne Frank House Amsterdam"))],
    "day-4": [area("de-pijp-map", "De Pijp", "Lokal energi", "Bra område när ni vill känna mer vardag än vykort.", "Låt område och lunch bära dagen.", ["Albert Cuyp", "Kafé", "Sidogator"], 62, 62, mapLink("De Pijp Amsterdam")), area("vondelpark-map", "Vondelpark", "Luft i kroppen", "Passar när ni vill ge resan en lättare dag.", "Bra eftermiddag om tempot ska vara lugnt.", ["Park", "Gräs", "Lugn promenad"], 46, 58, mapLink("Vondelpark Amsterdam"))],
    "day-5": [area("favorite-track", "Favoritkanalen", "Personligt slut", "Återbesök gör finalen starkare i Amsterdam.", "Välj det ni själva fastnat för.", ["Favoritbro", "Lunch", "Sista runda"], 50, 44, mapLink("Amsterdam canal cafe")), area("soft-exit", "Mjuk exit", "Lugn logistik", "Bra om ni hellre går hem med bra känsla än en sista jakt.", "Sista dagen ska vara lätt.", ["Packning", "Transfer", "Kaffe"], 34, 62, mapLink("Central Amsterdam cafe"))],
  },
  rainPlansByDay: {
    "day-1": rainPlan("Rain mode: håll Amsterdam liten", "Första dagen behöver bara ge orientering.", ["Kort kanalrunda.", "Längre kafépaus.", "Tidigare kväll."]),
    "day-2": rainPlan("Rain mode: gör kanalbältet kompakt", "Amsterdam funkar i regn om rutten hålls tät.", ["Skala ner Jordaan-delen.", "Lägg mer vikt vid lunch.", "Håll er nära broar och inomhuspauser."]),
    "day-3": rainPlan("Rain mode: välj kulturspåret", "Den här dagen är lätt att rädda med ett enda tydligt huvudnummer.", ["Låt museet ta allt fokus.", "Skippa extra stråk.", "Planera en lugn eftermiddag."]),
    "day-4": rainPlan("Rain mode: kvarter och kafé", "Lokaldagen kan bli ännu bättre i mindre radie.", ["Välj ett område.", "Lägg in två varma stopp.", "Byt park mot museum om det behövs."]),
    "day-5": rainPlan("Rain mode: gör finalen ännu mjukare", "Sista dagen ska inte kämpa mot väder.", ["Återvänd nära hotellet.", "Låt transporten styra lätt.", "Ta ett enkelt farväl."]),
  },
};

const berlinSeed: CityGuideSeed = {
  id: "berlin",
  displayName: "Berlin",
  flag: "de",
  weather: { latitude: 52.52, longitude: 13.405, timezone: "Europe/Berlin" },
  currency: { base: "EUR", quote: "SEK" },
  maps: { cityQuery: "Berlin" },
  metadata: {
    appTitle: "Trip Companion",
    title: "Trip Companion Berlin",
    description: "A five-day Berlin guide with calm pacing and premium day unlocks.",
  },
  transport: {
    title: "U-Bahn, S-Bahn och stora områden",
    summary:
      "Berlin fungerar bäst när du tänker i större områden och använder U-Bahn eller S-Bahn för de längre skiftena.",
    bullets: [
      "Se transporten som stadsdelshopp, inte som ett sätt att hinna överallt samma dag.",
      "Bytestid och gångsträckor är ofta längre än man först tror i Berlin.",
      "Planera gärna morgon och eftermiddag inom samma del av staden för att spara energi.",
    ],
  },
  hotelAreas: [
    { value: "central", label: "Mitte", hint: "Bra om du vill ha många klassiska första stopp nära." },
    { value: "historic", label: "Prenzlauer Berg / Kreuzberg", hint: "Bra om du vill bo i områden med tydligare kvarterskänsla." },
    { value: "local", label: "Neukölln / Schöneberg", hint: "Mer vardagsliv och mer lokal känsla utanför dörren." },
    { value: "unknown", label: "Inte bestämt än", hint: "Appen håller sig neutral tills boendet sitter." },
  ],
  basics: [
    { tag: "Skala", title: "Berlin blir lättare när du tänker stora områden", body: "Berlin känns ofta större än det är eftersom varje stadsdel har egen identitet. Håll dagen inom ett sammanhängande område per dagsspår." },
  ],
  gallery: [
    { title: "Rymd, historia och starka kvarter", description: "Berlin belönar långsamma skiften mellan tunga platser, breda stråk och vardagligare områden där staden slappnar av.", imageUrl: "", sourceLabel: "", sourceUrl: "", credit: "" },
  ],
  tripDays: [
    day(1, "Landning och Mitte-start", "Låt Berlin börja tydligt och lågmält.", "Låg till medel", "Hotellet + Mitte", "Första dagen ska ge dig stadens rytm utan att den historiska tyngden blir för massiv direkt.", "Kort radie först, sedan ett enkelt första stråk i Mitte.", [
      section("Ankomst", "Säkra basen", "Berlin blir mycket bättre när basen sitter tidigt.", [
        stop("arrival-loop", "Checka in och markera S-/U-Bahn, café och närbutik", "45-60 min", "Praktisk orientering är extra viktig i Berlin.", "Tänk bytespunkter redan första dagen.", "Köp vatten och något enkelt."),
      ]),
      section("Kväll", "Kort första promenad", "Välj ett tydligt centrumstråk.", [
        stop("mitte-walk", "Promenad i Mitte eller runt Museumsinsel", "60 min", "Ger en första känsla för stadens skala och ton.", "Håll det lätt, spara tyngre historik till dag två.", "Middag i närheten efteråt."),
      ]),
    ]),
    day(2, "Historia och institutioner", "Nu får stadens tyngd ta plats i rätt dos.", "Medel", "Mitte + Government quarter", "Dag två passar för Berlins stora historiska axel när ni redan fått ett första grepp om transporterna.", "Håll rutten tydlig så att dagen känns stark, inte tung.", [
      section("Morgon", "Historisk kärna", "Ta de stora symbolerna i en rak följd.", [
        stop("brandenburg", "Brandenburger Tor och området runtomkring", "45-60 min", "En naturlig första heldagspunkt i Berlin.", "Kom tidigt om ni vill ha lite lugnare känsla.", "Kaffe innan ni går vidare."),
        stop("reichstag", "Reichstag eller government quarter", "60 min", "Bra när ni vill förstå stadens moderna lager också.", "Låt detta vara ett sammanhängande spår.", "Lunch efteråt i lugnare takt."),
      ]),
      section("Eftermiddag", "Museumsinsel eller minnesstråk", "Välj ett innehållsspår, inte två.", [
        stop("museum-memory", "Museumsinsel eller ett enda minnes-/museispår", "90-120 min", "Berlin fungerar bäst när innehållet kurateras tydligt.", "Ta ett enda starkt val.", "Planera in en riktig sittande paus."),
      ]),
    ]),
    day(3, "Kreuzberg och tempoväxling", "Låt Berlin bli mer vardaglig och mindre monumental.", "Medel", "Kreuzberg + Landwehrkanal", "Dag tre ska ge staden ett mänskligare ansikte efter institutionsdagen.", "Berlin vinner mycket på att du lämnar symbolerna en stund.", [
      section("Morgon", "Kvartersspår", "Välj ett område med liv och långsammare fokus.", [
        stop("kreuzberg", "Kreuzberg till fots", "90 min", "Bra när ni vill känna vardag, kaféer och lite råare energi.", "Låt områdets rytm styra mer än listan.", "Lång brunch eller kaffe är helt rätt här."),
      ]),
      section("Eftermiddag", "Kanal eller marknad", "Gör ett lätt extraspår.", [
        stop("canal-market", "Landwehrkanal eller marknadsspår", "60-90 min", "Bra mjuk fortsättning på en mer lokal dag.", "Välj det som passar väder och energi bäst.", "Street food eller enkel lunch fungerar fint."),
      ]),
    ]),
    day(4, "Östspår eller parkdag", "Nu ska resan bli mer din än guidebokens.", "Medel", "Prenzlauer Berg eller Tempelhofer Feld", "Dag fyra är bra för ett tydligt kvarter eller ett ovanligare stadsrum.", "Berlin känns ofta bäst när du accepterar dess luft och mellanrum.", [
      section("Morgon", "Välj ton", "Antingen kvarter eller stor öppen yta.", [
        stop("prenzlauer", "Prenzlauer Berg för caféer, gator och lugn rytm", "90 min", "Bra val om ni vill ha vardagsvacker stad.", "Ta det långsamt.", "Frukost eller fika i området."),
        stop("tempelhof", "Tempelhofer Feld om ni vill ha ovanlig stadskänsla och luft", "90 min", "Ger en unik Berlin-känsla som inte liknar andra städer.", "Bra val om ni vill ha mindre trängsel.", "Ta med något enkelt att dricka eller äta."),
      ]),
    ]),
    day(5, "Mjuk Berlin-final", "Sista dagen ska låta staden sjunka in, inte maxas ut.", "Valfri", "Favoritområde", "Nu vet ni om Berlin ska sluta i ett kafé, ett kvarter eller ett sista historiskt stråk.", "Bra final i Berlin är ofta lågmäld men minnesvärd.", [
      section("Final", "Återvänd eller runda av", "Håll sista dagen tydlig och enkel.", [
        stop("favorite-return", "Återvänd till favoritområde eller favoritcafé", "90 min", "Det ger resan en mer personlig avslutning.", "Välj det ni helst hade velat ha en extra timme i.", "Sista lunch eller kaffe där."),
        stop("departure-buffer", "Skapa god marginal för transfer", "45 min", "Berlins skala gör att sista dagen vinner på planerad marginal.", "Låt logistiken kännas enkel.", "Håll maten enkel nära avfärd."),
      ]),
    ]),
  ],
  areaCardsByDay: {
    "day-1": [area("mitte-base", "Mitte", "Tydlig start", "Bra första spår när ni vill känna Berlin utan att gå fullt historiskt direkt.", "Kort och tydligt kvällsspår.", ["Mitte", "Kafé", "S-/U-Bahn"], 48, 40, mapLink("Mitte Berlin")), area("hotel-loop", "Hotellets kvarter", "Praktisk bas", "Väldigt värt att säkra först i Berlin.", "Bygg bas före ambition.", ["Station", "Mat", "Hemväg"], 32, 60, mapLink("Central Berlin hotel"))],
    "day-2": [area("historic-core", "Brandenburger Tor / Reichstag", "Historisk kärna", "Ger Berlins stora berättelse i tydlig form.", "Ta detta som dagens ryggrad.", ["Brandenburger Tor", "Reichstag", "Minnesstråk"], 44, 40, mapLink("Brandenburg Gate Berlin")), area("museum-island", "Museumsinsel", "Innehållsspår", "Bra om ni vill ge dagen ett enda starkt kulturspår.", "Välj ett fokus.", ["Museum", "Spree", "Promenad"], 54, 34, mapLink("Museum Island Berlin"))],
    "day-3": [area("kreuzberg-map", "Kreuzberg", "Lokal energi", "Bra kontrast till den mer monumentala gårdagen.", "Låt dagen vara lösare här.", ["Kreuzberg", "Kaféer", "Sidogator"], 48, 66, mapLink("Kreuzberg Berlin")), area("landwehrkanal", "Landwehrkanal", "Mjuk luft", "Bra andra spår när ni vill hålla tempot lugnt.", "Låt vattnet bära eftermiddagen.", ["Kanal", "Broar", "Street food"], 58, 60, mapLink("Landwehrkanal Berlin"))],
    "day-4": [area("prenzlauer-map", "Prenzlauer Berg", "Lugn kvarterskänsla", "Bra för mjukare Berlin-energi.", "Stanna länge i området.", ["Kafé", "Gator", "Lugn lunch"], 58, 22, mapLink("Prenzlauer Berg Berlin")), area("tempelhof-map", "Tempelhofer Feld", "Stor luft", "En väldigt Berlin-specifik känsla av rymd och frihet.", "Bra när ni vill ha färre beslut.", ["Tempelhof", "Öppen yta", "Paus"], 42, 78, mapLink("Tempelhofer Feld Berlin"))],
    "day-5": [area("favorite-track", "Favoritspåret", "Personlig final", "Bra sätt att låta Berlin stanna kvar som känsla, inte bara fakta.", "Återvänd till det ni fastnade för.", ["Favoritkvarter", "Kaffe", "Lunch"], 50, 44, mapLink("Berlin neighborhood cafe")), area("soft-exit", "Mjuk exit", "Lugn logistik", "Sista dagen ska vara lätt att genomföra.", "Skydda transportmarginalen.", ["Packning", "Transfer", "Sista paus"], 34, 60, mapLink("Central Berlin cafe"))],
  },
  rainPlansByDay: {
    "day-1": rainPlan("Rain mode: håll Berlin liten första kvällen", "Första dagen behöver mest orientering.", ["Kortare Mitte-runda.", "Längre sittpaus.", "Tidigare kväll."]),
    "day-2": rainPlan("Rain mode: gör historiedagen smal", "Berlins tunga dag blir bäst när den är tydlig.", ["Ta ett huvudstråk.", "Välj ett museum eller minnesspår.", "Planera ordentlig lunchpaus."]),
    "day-3": rainPlan("Rain mode: gå Kreuzberg tätare", "Lokaldagen funkar i regn om radien är mindre.", ["Fler kafépauser.", "Kortare kanalstråk.", "Låt marknad bli bonus."]),
    "day-4": rainPlan("Rain mode: välj Prenzlauer framför fält", "Dag fyra tål vädersvängningar om ni väljer kvarter framför öppen yta.", ["Håll er till ett område.", "Låt museum bli backup.", "Gör två varma stopp."]),
    "day-5": rainPlan("Rain mode: gör finalen enkel", "Sista dagen ska inte bli en kamp mot väder och transfer.", ["Återvänd nära hotellet.", "Skala bort extrasaker.", "Skydda tiden."]),
  },
};

export const europeanGuideSeedsB = [amsterdamSeed, berlinSeed] as const;
