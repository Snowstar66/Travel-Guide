import {
  area,
  day,
  mapLink,
  rainPlan,
  section,
  stop,
  type CityGuideSeed,
} from "@/lib/guide-builders";

const parisSeed: CityGuideSeed = {
  id: "paris",
  displayName: "Paris",
  flag: "fr",
  weather: { latitude: 48.8566, longitude: 2.3522, timezone: "Europe/Paris" },
  currency: { base: "EUR", quote: "SEK" },
  maps: { cityQuery: "Paris" },
  metadata: {
    appTitle: "Trip Companion",
    title: "Trip Companion Paris",
    description: "A calm five-day Paris guide with premium day unlocks.",
  },
  transport: {
    title: "Metro, buss och gång",
    summary:
      "Paris blir lätt när metro tar de längre hoppen och promenaderna tar kvarteren däremellan.",
    bullets: [
      "Lär dig närmaste metrostation första dagen och håll koll på rätt utgång, inte bara rätt linje.",
      "Buss är ofta perfekt när du vill se staden samtidigt som du förflyttar dig lugnt.",
      "Bygg helst dagen inom närliggande arrondissement så att ni inte korsar staden i onödan.",
    ],
  },
  hotelAreas: [
    { value: "central", label: "Louvre / Opéra", hint: "Bra om du vill kunna promenera till flera klassiska första stopp." },
    { value: "historic", label: "Marais / Latinkvarteren", hint: "Perfekt om du vill bo mitt i historia, gränder och kvällsliv." },
    { value: "local", label: "Canal / Montmartre", hint: "Lite mer kvarter, lite mindre vykort direkt utanför dörren." },
    { value: "unknown", label: "Inte bestämt än", hint: "Appen fortsätter med ett lugnt standardupplägg tills du vet mer." },
  ],
  basics: [
    {
      tag: "Stadslogik",
      title: "Tänk arrondissement, inte hela Paris på en gång",
      body: "Paris blir lättare när du håller dig inom ett naturligt område per halvdagsblock i stället för att korsa staden för varje ikon.",
    },
  ],
  gallery: [
    {
      title: "Ljus, sten och långsamt tempo",
      description: "Paris känns bäst när du låter gator, broar och torg bygga upp staden i huvudet mellan de stora sevärdheterna.",
      imageUrl: "",
      sourceLabel: "",
      sourceUrl: "",
      credit: "",
    },
  ],
  tripDays: [
    day(1, "Landning och Seine-rytm", "Landa mjukt och låt Paris kännas hanterbart direkt.", "Låg till medel", "Hotellet + Seine", "Första dagen ska ge riktning, inte press. Håll dig nära hotellet, få koll på kvarteren och lägg kvällsenergin på ett vackert men enkelt första spår.", "Paris vinner på rytm. En bro, ett kafé, en promenad längs vattnet räcker långt första dagen.", [
      section("Ankomst", "Kom på plats utan att jaga måsten", "Säkra basen först och håll radien kort.", [
        stop("arrival-loop", "Checka in och gör en 15-minutersradie runt hotellet", "45-60 min", "Du får orientering, matställe och närmaste metro innan jetlag och intryck staplas.", "Markera ett bageri, en närbutik och närmaste station direkt.", "Köp vatten och något enkelt att ha på rummet."),
        stop("metro-test", "Ta en enkel testtur med metro eller buss", "20-30 min", "En provtur gör dag två mycket lugnare.", "Tänk på utgången lika mycket som på själva resan.", "Ingen mat, bara självförtroende."),
      ]),
      section("Kväll", "Första mötet med Seine", "Låt kvällen vara vacker och kort.", [
        stop("seine-walk", "Kort promenad längs Seine eller över en bro i centrum", "60 min", "Du får direkt känslan av Paris utan att bränna hela kvällen.", "Välj ett stråk som känns tryggt och enkelt att hitta hem från.", "Avsluta med ett kaféstopp eller en enkel bistromiddag."),
      ]),
    ]),
    day(2, "Klassiska Paris", "Nu får du vykorten, men i rätt ordning och dos.", "Medel", "Louvre + Tuilerierna + Champs-Élysées", "Dag två är rätt dag för de stora symbolerna. Du har landat och kan nu ta in stadens klassiker med lite lugn i kroppen.", "Gör en tydlig kärnrutt och låt pauserna vara en del av upplevelsen.", [
      section("Morgon", "Axeln genom centrum", "Bygg dagen kring en enkel visuell linje.", [
        stop("tuileries", "Tuilerierna och utsidan av Louvre", "60-90 min", "Det ger dig klassisk Paris-känsla utan att allt börjar med köer.", "Bestäm innan om Louvre ska vara utsida eller inomhusspår idag.", "Kaffe och croissant här fungerar perfekt."),
        stop("place-concorde", "Promenera mot Place de la Concorde", "30 min", "Bra övergång mellan monumental stad och mer öppen rytm.", "Titta på hur staden linjerar sig runt dig, inte bara på nästa punkt.", "Spara lunchen tills ni sitter ner ordentligt."),
      ]),
      section("Eftermiddag", "Välj ett wow-spår", "Ta ett huvudnummer i stället för tre halvbra.", [
        stop("champs-elysees", "Arc de Triomphe eller Champs-Élysées i kort dos", "60-90 min", "Du får den stora stadsbilden utan att låta hela dagen bli butiksgata.", "Se det, känn det, gå sedan vidare i tid.", "Lägg lunchen strax utanför de mest turisttäta blocken."),
        stop("eiffel-evening", "Kvällskoll på Eiffeltornet från marknivå", "45-60 min", "Stor effekt med mindre logistik än tornbesök mitt på dagen.", "Sikta på utsikt snarare än max kötid första gången.", "Ta med något enkelt eller boka middag i området efteråt."),
      ]),
    ]),
    day(3, "Historia och kvarter", "Låt Paris bli mänskligt, inte bara monumentalt.", "Medel", "Île de la Cité + Marais", "Dag tre passar för historia, mindre gator och tydligare kvarterskänsla.", "När du kombinerar kyrkor, smågator och en lång lunch känns Paris mer som en stad än en kuliss.", [
      section("Morgon", "Stadens äldsta kärna", "Börja där berättelsen är som tätast.", [
        stop("cite", "Île de la Cité och området runt Notre-Dame", "60-90 min", "Du får stadens historiska hjärta utan att behöva forcera för mycket.", "Håll tempot lugnt och titta mer runtomkring än bara på köerna.", "Ta kaffe eller sen frukost i närheten efteråt."),
        stop("latin-quarter", "Kort sväng genom Latinkvarteren", "45 min", "Bra övergång från monument till vardagligare stadsväv.", "Låt er gärna driva lite mellan boklådor och sidogator.", "Bra område för en längre lunch."),
      ]),
      section("Eftermiddag", "Marais i egen takt", "Här får kvarterskänslan ta plats.", [
        stop("marais-walk", "Promenad genom Marais", "90 min", "Det är ett av de bästa områdena för att känna att Paris blir ditt.", "Prioritera stämning framför checklistan.", "Glass, vinbar eller liten butikspaus beroende på energi."),
      ]),
    ]),
    day(4, "Konst, parker och luft", "Ge resan lite bredd och mindre turistpuls.", "Medel", "Musée d'Orsay + Saint-Germain eller Montmartre", "Dag fyra fungerar bäst när du väljer ett kulturspår och en mjuk kvartersdel.", "Det här är dagen för konst, utsikter och ett mer vuxet tempo.", [
      section("Morgon", "Kulturspår", "Välj ett museum eller ett parkerat stråk.", [
        stop("orsay", "Musée d'Orsay eller ett annat enda huvudmuseum", "2-3 h", "Ett starkt kulturval känns bättre än att stressa flera institutioner.", "Boka gärna i förväg om det är högsäsong.", "Museumskafé eller lunch efteråt."),
      ]),
      section("Eftermiddag", "Montmartre eller Saint-Germain", "Välj höjd eller vänsterbank.", [
        stop("montmartre", "Montmartre om du vill ha utsikt och filmisk känsla", "90 min", "Bra när du vill ha tydlig miljöförändring och lite dramatik.", "Håll er på sidogatorna så mycket ni kan.", "Kaffe eller aperitif med utsikt."),
        stop("saint-germain", "Saint-Germain om ni hellre vill ha bokhandel, boulevard och lugn rytm", "90 min", "Ett mer nedtonat men väldigt Paris-typiskt eftermiddagsspår.", "Välj detta om energin behöver något mjukare.", "Lång lunch eller tidig middag passar fint här."),
      ]),
    ]),
    day(5, "Egen final", "Sista dagen ska ge form åt resan, inte skapa sista-minuten-stress.", "Valfri", "Flexibel", "Nu vet du vad du gillar. Sista dagen ska kännas personlig och smart.", "Låt sista dagen spegla resan: kultur, shopping eller bara ett sista fint kvarter.", [
      section("Finalspår", "Välj ett enda bra avslut", "Håll sista dagen lätt nog för att hemresan också ska kännas rimlig.", [
        stop("favorite-return", "Återvänd till ett favoritområde", "90-120 min", "Att gå tillbaka till något bra ger ofta starkare avslut än ännu en ny ikon.", "Välj det område ni helst pratat om på kvällarna.", "Långfrukost eller tidig lunch där."),
        stop("last-shopping", "Sista inköp eller ett sista kaféstopp", "45-60 min", "Små avslut känns ofta bättre än stora sista försök.", "Lämna gott om tid till packning och transport.", "Ta något ni redan vet att ni gillar."),
      ]),
    ]),
  ],
  areaCardsByDay: {
    "day-1": [area("seine-base", "Seine / hotellets närområde", "Mjuk start", "Här får du Paris-känslan utan att behöva prestera en hel dag.", "Håll dig nära vattnet och nära hemvägen första kvällen.", ["Bro", "Kafé", "Närmaste metro"], 32, 60, mapLink("Seine central Paris")), area("first-arrondissement", "1:a arrondissementet", "Klassisk orientering", "Bra första centrumkänsla om ni landar tidigt och vill känna stenstaden direkt.", "Se detta som orientering, inte som heldagsmål.", ["Louvre", "Tuilerierna", "Rue de Rivoli"], 58, 40, mapLink("1st arrondissement Paris"))],
    "day-2": [area("louvre-axis", "Louvre / Tuilerierna", "Monumental stad", "Här får du Paris mest klassiska mittaxel i en lättläst ordning.", "Börja tidigt och håll dagen smal.", ["Louvre", "Tuilerierna", "Concorde"], 44, 36, mapLink("Louvre Paris")), area("eiffel-west", "Eiffeltornet / västra centrum", "Vykortskänsla", "Kvällsljus och stora stadsrum gör det här till ett starkt andra block.", "Gå hit för utsikt och atmosfär snarare än för att pressa in allt.", ["Eiffeltornet", "Trocadéro", "Seine"], 72, 44, mapLink("Eiffel Tower Paris"))],
    "day-3": [area("cite", "Île de la Cité", "Historia", "Perfekt för att förstå Paris äldre kärna.", "Håll tempot stilla på morgonen.", ["Notre-Dame", "Seine", "Smågator"], 48, 46, mapLink("Ile de la Cite Paris")), area("marais", "Marais", "Kvarterskänsla", "Låter staden kännas personlig och promenadvänlig.", "Bra eftermiddag för låg stress och många småval.", ["Marais", "Butiker", "Bakgator"], 58, 34, mapLink("Le Marais Paris"))],
    "day-4": [area("orsay-bank", "Orsay / vänsterbanken", "Kultur och rytm", "Bra kombination av konst och promenad.", "Låt lunch och museum styra tempot.", ["Musée d'Orsay", "Boulevard", "Kafé"], 42, 42, mapLink("Musee d'Orsay Paris")), area("montmartre-map", "Montmartre", "Filmisk höjd", "Ger annan energi än centrum utan att bli för långt bort.", "Välj detta om ni vill ha utsikt och kvällskänsla.", ["Sacre-Coeur", "Trappor", "Smågator"], 64, 18, mapLink("Montmartre Paris"))],
    "day-5": [area("favorite-track", "Favoritspåret", "Personligt avslut", "Här går ni tillbaka till det som faktiskt fungerade bäst.", "Finalen ska kännas självklar, inte pliktskyldig.", ["Favoritkvarter", "Sista lunch", "Lugnt avsked"], 54, 40, mapLink("Paris cafe neighborhood")), area("soft-exit", "Mjuk exit", "Lugn energi", "Bra när ni hellre vill lämna staden med bra humör än sista-minuten-jakt.", "Håll logistiken enkel och snygg.", ["Kafé", "Packning", "Flygtransfer"], 36, 58, mapLink("Central Paris cafe"))],
  },
  rainPlansByDay: {
    "day-1": rainPlan("Rain mode: håll första dagen nära", "Regn första dagen gör inget om ni kortar radien och fokuserar på orientering.", ["Byt lång kvällspromenad mot broutsikt + kafé.", "Lägg mer tid på att lära er närmaste metro.", "Spara energin till dag två."]),
    "day-2": rainPlan("Rain mode: låt ikonerna bli mer utifrån", "Paris tål regn om ni håller er till en rak kärnrutt.", ["Gör utsidor och stadsrum först.", "Välj max ett biljettspår.", "Lägg lunchen som tydlig mittpunkt."]),
    "day-3": rainPlan("Rain mode: gå historia, inte distans", "Regn gör smågator och korta inomhuspauser smartare än långa stråk.", ["Håll er runt Île de la Cité.", "Skala ner Marais till ett tätare kvartersspår.", "Lägg in en längre paus mitt på dagen."]),
    "day-4": rainPlan("Rain mode: gör dag fyra mer kultur", "Dag fyra är lätt att rädda med museum och ett enda kvarter efteråt.", ["Låt museet bli huvudnummer.", "Skippa höjdspår om sikten är dålig.", "Planera två varma stopp."]),
    "day-5": rainPlan("Rain mode: välj den mjuka finalen", "Sista dagen vinner på enkelhet när vädret svänger.", ["Återvänd till ett favoritområde nära hotellet.", "Låt shopping vara sekundärt.", "Skydda avresetempot."]),
  },
};

const milanSeed: CityGuideSeed = {
  id: "milan",
  displayName: "Milano",
  flag: "it",
  weather: { latitude: 45.4642, longitude: 9.19, timezone: "Europe/Rome" },
  currency: { base: "EUR", quote: "SEK" },
  maps: { cityQuery: "Milan" },
  metadata: {
    appTitle: "Trip Companion",
    title: "Trip Companion Milano",
    description: "A five-day Milano guide with calm pacing and premium day unlocks.",
  },
  transport: {
    title: "Metro, spårvagn och gång",
    summary:
      "Milano är lätt att läsa när du kombinerar metro för längre skiften med spårvagn och promenad i centrum.",
    bullets: [
      "Centrum fungerar ofta bäst till fots när du väl är inne i rätt område.",
      "Spårvagn är bra när du vill hålla tempot mjukt och se mer av stadens yta.",
      "Bygg dagen runt en stadsdel i taget i stället för att hoppa fram och tillbaka över kartan.",
    ],
  },
  hotelAreas: [
    { value: "central", label: "Duomo / Brera", hint: "Bra om du vill kunna börja i klassiska Milano utan transportfriktion." },
    { value: "historic", label: "Navigli / Centro Storico", hint: "Lite mer kvällsliv och äldre stadsväv nära vatten och smågator." },
    { value: "local", label: "Porta Romana / Isola", hint: "Mer vardagsrytm och mindre turistäthet direkt utanför hotellet." },
    { value: "unknown", label: "Inte bestämt än", hint: "Appen fortsätter med ett neutralt upplägg tills boendet sitter." },
  ],
  basics: [
    { tag: "Rytm", title: "Milano fungerar bäst i snygga halvdagar", body: "Milano är mindre än sina myter men mer subtilt än många tror. Bygg dagen kring en tydlig stadsdel i taget." },
  ],
  gallery: [
    { title: "Stil, piazzor och långa eftermiddagar", description: "Milano belönar dig när du växlar mellan design, kyrkor, gårdar och kvarter där tempot aldrig känns desperat.", imageUrl: "", sourceLabel: "", sourceUrl: "", credit: "" },
  ],
  tripDays: [
    day(1, "Landning och Duomo-axel", "Kom in i stadens tempo utan att försöka se allt på en gång.", "Låg till medel", "Hotellet + Duomo", "Första dagen i Milano ska vara elegant och enkel: basen först, sedan ett kort klassiskt spår.", "Det viktiga är att lära sig centrumets logik och få en första kväll som känns fin, inte maxad.", [
      section("Ankomst", "Säkra basen", "Låt staden börja i liten skala.", [
        stop("arrival-loop", "Checka in och lär dig närmaste torg, café och transport", "45-60 min", "Du får en trygg rytm direkt.", "Markera ett ställe för morgonkaffe redan nu.", "Köp vatten och ett enkelt mellanmål."),
        stop("duomo-first", "Kort första sväng runt Duomo", "45 min", "Du får stadens signatur utan att det behöver bli en hel kväll.", "Håll det som orientering, inte prestation.", "Ta aperitivo eller enkel middag i närheten."),
      ]),
    ]),
    day(2, "Klassiska Milano", "Nu får katedral, galleria och stadens centrum ta plats.", "Medel", "Duomo + Galleria + Brera", "Dag två är gjord för Milanos klassiska mittpunkt och ett snyggt kvartersspår efteråt.", "Kombinera monumental arkitektur med Breras lugnare kvarterstempo.", [
      section("Morgon", "Milanos hjärta", "Börja där stadens symboler är som tydligast.", [
        stop("duomo", "Duomo och Piazza del Duomo", "60-90 min", "Det här är stadens naturliga kärna första riktiga dagen.", "Bestäm om ni vill upp på taket eller bara ta torget och kyrkan.", "Ta frukost innan de största köerna."),
        stop("galleria", "Galleria Vittorio Emanuele II", "30-45 min", "Kort men ikoniskt stopp som passar direkt efter torget.", "Se det som passage och stadsscen, inte shoppingkrav.", "Kaffe fungerar fint här om ni vill pausa."),
      ]),
      section("Eftermiddag", "Brera", "Låt dagen bli lite mjukare efter centrum.", [
        stop("brera", "Promenad i Brera", "90 min", "Perfekt kontrast till den stora monumentaliteten.", "Bra område för gallerier, smågator och lång lunch.", "Lägg lunchen här om möjligt."),
      ]),
    ]),
    day(3, "Konst och kanaler", "Ge Milano både kultur och kvällsrytm.", "Medel", "Santa Maria delle Grazie + Navigli", "Dag tre passar för ett tydligt kulturspår följt av en kväll som känns mer lokal.", "Milano blir stark när den stora kulturen får möta vardagligare kvarter.", [
      section("Morgon", "Konstspår", "Gör ett huvudnummer och håll resten luftigt.", [
        stop("last-supper", "Santa Maria delle Grazie eller bokad kulturpunkt", "90 min", "Ett tydligt kulturankare räcker långt i Milano.", "Har ni ingen biljett, välj ett annat enda museum i stället.", "Ta lunch efteråt i lugnare kvarter."),
        stop("castello", "Castello Sforzesco eller Parco Sempione", "60 min", "Bra fortsättning om ni vill röra på benen utan ny kölogik.", "Välj park om energin är låg.", "Glass eller kaffe i parkkanten fungerar fint."),
      ]),
      section("Kväll", "Navigli", "Låt kvällen bli social och enkel.", [
        stop("navigli", "Navigli för promenad och aperitivo", "90 min", "Ger en annan sida av Milano än mode och kyrkor.", "Kom hellre lite tidigare än mitt i värsta trängseln.", "Aperitivo eller enkel middag passar perfekt här."),
      ]),
    ]),
    day(4, "Design och lokala kvarter", "Nu får resan bli mer din än stadens vykort.", "Medel", "Isola eller Porta Romana", "Dag fyra ska kännas personlig. Välj ett område med egen rytm och låt resten följa därifrån.", "Milano blir bäst när du slutar jaga symboler och börjar märka energi, stil och vardag.", [
      section("Morgon", "Lokalt spår", "Välj ett område och stanna i det.", [
        stop("isola", "Isola eller Porta Romana", "90 min", "Bra kvarter när ni vill känna vardagsliv och design snarare än sevärdhetslistor.", "Välj det område som ligger bäst mot ert hotell eller humör.", "Långfrukost eller kaffe med lugn sittning."),
      ]),
      section("Eftermiddag", "Flexspår", "Fyll på med ett enda extra block.", [
        stop("shopping", "Corso Como, designbutiker eller ett enda museum", "60-120 min", "Milano tål ett val till, inte fyra.", "Gör något som känns roligt, inte korrekt.", "Sen lunch eller aperitivo beroende på tempo."),
      ]),
    ]),
    day(5, "Elegant avslutning", "Sista dagen ska kännas som ett snyggt outro.", "Valfri", "Favoritområde", "Nu vet ni om resan ska sluta i ett kvarter, på ett museum eller runt ett kafébord.", "Milano tjänar på ett rent avslut: ett område, en måltid, lite luft.", [
      section("Final", "Välj ett enda fint spår", "Sista dagen ska vara lätt att bära i kroppen.", [
        stop("favorite-return", "Återvänd till favoritområde eller favoritpiazza", "90 min", "Det förstärker känslan av att ni hittade er egen Milano-version.", "Välj det som ni pratat mest om, inte det ni missade på papper.", "Ta sista lunchen där."),
        stop("departure-buffer", "Lämna tydlig tid för packning och transfer", "45 min", "En lugn final gör ofta mer för helhetskänslan än ett sista stressstopp.", "Skydda sista timmarna.", "Ta något enkelt före avfärd."),
      ]),
    ]),
  ],
  areaCardsByDay: {
    "day-1": [area("duomo-base", "Duomo", "Klar stadskärna", "Bra första blick på Milano utan att hela kvällen måste bli en lång runda.", "Titta, orientera, gå hem i tid.", ["Duomo", "Torg", "Metro"], 54, 40, mapLink("Duomo Milan")), area("hotel-loop", "Hotellets kvarter", "Trygg bas", "Milano känns snabbare när du vet ditt eget närområde direkt.", "Bygg basen innan du bygger ambitionsnivån.", ["Kafé", "Närbutik", "Transport"], 38, 58, mapLink("Central Milan hotel"))],
    "day-2": [area("duomo-core", "Duomo / Galleria", "Klassiskt centrum", "Den tydligaste Milano-introduktionen du kan få.", "Ta kärnan först, Brera sedan.", ["Duomo", "Galleria", "Piazza"], 50, 38, mapLink("Duomo Milan")), area("brera-map", "Brera", "Mjukare elegans", "Ger andrum och mycket stadskänsla efter centrum.", "Bra plats att sakta ner.", ["Brera", "Lunch", "Smågator"], 62, 30, mapLink("Brera Milan"))],
    "day-3": [area("grazie", "Santa Maria delle Grazie", "Konstspår", "Bra kulturankare utan att fylla hela dagen.", "Boka i förväg om möjligt.", ["Kyrka", "Konst", "Lugn morgon"], 40, 42, mapLink("Santa Maria delle Grazie Milan")), area("navigli-map", "Navigli", "Kvällsrytm", "Milanos mest naturliga kvällsstråk för promenad och aperitivo.", "Låt detta vara kvällens enda stora block.", ["Kanal", "Aperitivo", "Broar"], 60, 68, mapLink("Navigli Milan"))],
    "day-4": [area("isola-map", "Isola", "Lokal energi", "Bra om du vill känna att staden blivit mer vardaglig och egen.", "Stanna i området länge nog för att tempot ska sätta sig.", ["Kafé", "Kvarter", "Design"], 70, 24, mapLink("Isola Milan")), area("porta-romana", "Porta Romana", "Mjuk stad", "Passar när ni vill ha mindre symbolik och mer liv.", "Bra val för en lång lunch och liten radie.", ["Porta Romana", "Barer", "Smågator"], 52, 62, mapLink("Porta Romana Milan"))],
    "day-5": [area("favorite-track", "Favoritspåret", "Personligt avslut", "Återbesök slår ofta sista-minuten-jakt i Milano.", "Låt finalen kännas vuxen och enkel.", ["Favoritkvarter", "Lunch", "Avslut"], 50, 44, mapLink("Milan neighborhood cafe")), area("soft-exit", "Mjuk exit", "Bra sista energi", "Skyddar både humör och logistik.", "Sista dagen vinner på tydlig marginal.", ["Packning", "Kaffe", "Transfer"], 34, 60, mapLink("Central Milan cafe"))],
  },
  rainPlansByDay: {
    "day-1": rainPlan("Rain mode: håll Milano liten första dagen", "Gör bas och Duomo-kärna kortare, inte större.", ["Håll kvällsspåret runt en enda piazza.", "Längre inomhuspaus.", "Spara kraft till dag två."]),
    "day-2": rainPlan("Rain mode: centrum först, kvarter sen", "Milanos kärna fungerar bra även i sämre väder om rutten är tydlig.", ["Gör Duomo och Galleria först.", "Låt Brera bli kortare.", "Prioritera sittande lunch."]),
    "day-3": rainPlan("Rain mode: kulturdag med bonuskväll", "Det här är den lättaste dagen att rädda i regn.", ["Låt kulturpunkten bli huvudnumret.", "Kort ned parkdelen.", "Gå till Navigli bara om kvällen känns värd det."]),
    "day-4": rainPlan("Rain mode: gå kvarter, inte distans", "Välj ett område och håll er där.", ["Byt längre stråk mot butiker och kaféer.", "Låt ett museum ta extra plats.", "Ta två varma pauser."]),
    "day-5": rainPlan("Rain mode: gör finalen ännu enklare", "Sista dagen ska vara lätt att genomföra även om vädret är trist.", ["Återvänd nära hotellet.", "Skippa nya ambitioner.", "Skydda hemresan."]),
  },
};

const londonSeed: CityGuideSeed = {
  id: "london",
  displayName: "London",
  flag: "gb",
  weather: { latitude: 51.5072, longitude: -0.1276, timezone: "Europe/London" },
  currency: { base: "GBP", quote: "SEK" },
  maps: { cityQuery: "London" },
  metadata: {
    appTitle: "Trip Companion",
    title: "Trip Companion London",
    description: "A calm five-day London guide with premium day unlocks.",
  },
  transport: {
    title: "Tube, buss och Oyster-känsla",
    summary:
      "London fungerar bäst när Tube är ryggraden och buss eller promenad tar de kortare sträckorna mellan kvarter.",
    bullets: [
      "Lär dig närmaste Tube-linje och utgång direkt, det sparar mycket energi senare.",
      "Buss är ofta ett bra val när du vill se staden i stället för att bara passera under den.",
      "Håll dagen inom väst eller öst per block så att tunnelbanan inte äter upp rytmen.",
    ],
  },
  hotelAreas: [
    { value: "central", label: "Covent Garden / Soho", hint: "Bra om du vill bo mitt i rörelsen och promenera till mycket." },
    { value: "historic", label: "Westminster / South Bank", hint: "Bra för klassiska första dagar med ikoniska stråk nära vattnet." },
    { value: "local", label: "Notting Hill / Shoreditch", hint: "Mer kvarterskänsla och mindre institutionskänsla runt hotellet." },
    { value: "unknown", label: "Inte bestämt än", hint: "Appen fortsätter lugnt tills boendet är spikat." },
  ],
  basics: [
    { tag: "Transport", title: "London blir lätt när du tänker linjer och zoner", body: "Börja med en tydlig del av staden per block. För många tunnelbanelinjer i huvudet samtidigt gör London större än det behöver kännas." },
  ],
  gallery: [
    { title: "Parker, tegel och stora boulevarder", description: "London känns bäst när dagen får växla mellan monument, grönt rum och kvarter där tempot sjunker naturligt.", imageUrl: "", sourceLabel: "", sourceUrl: "", credit: "" },
  ],
  tripDays: [
    day(1, "Landning och South Bank", "Låt London börja med orientering och ett enkelt flodspår.", "Låg till medel", "Hotellet + South Bank", "Första dagen i London blir bäst när den är tydlig, inte ambitiös. Håll dig nära basen och ge dig själv ett första lättläst promenadstråk.", "Floden gör London lättare att förstå direkt.", [
      section("Ankomst", "Bygg basen", "Gör bara det som minskar friktion i morgon.", [
        stop("arrival-loop", "Checka in och markera närmaste Tube, kaffe och minimarket", "45-60 min", "Basen gör hela resten av veckan bättre.", "Fotografera gärna närmaste station och utgång.", "Köp vatten och något enkelt att ha på rummet."),
      ]),
      section("Kväll", "South Bank i kort dos", "Ge London ett första kvällsminne utan att bli sen.", [
        stop("south-bank", "Kort promenad längs South Bank", "60 min", "Floden och ljuset ger direkt stadskänsla.", "Vänd hem innan benen är helt slut.", "Ta enkel middag i närheten när ni är klara."),
      ]),
    ]),
    day(2, "Westminster och klassiska London", "Nu får du de stora symbolerna i rätt följd.", "Medel", "Westminster + St James's", "Dag två passar perfekt för Londons mest ikoniska delar när ni redan förstått transporten lite.", "Håll dagen rak: parlament, parker, sedan en mjuk fortsättning.", [
      section("Morgon", "Ikonspåret", "Ta de stora symbolerna tidigt.", [
        stop("westminster", "Westminster, Big Ben och Parliament Square", "60 min", "Det här är den tydligaste London-starten för dag två.", "Gör morgonen fototung och beslutslätt.", "Ta kaffe innan ni går vidare."),
        stop("st-james", "St James's Park mot Buckingham Palace", "45-60 min", "Bra övergång mellan ikon och andrum.", "Låt parken vara en riktig paus, inte transportsträcka.", "Lunch efteråt i området eller vidare mot Soho."),
      ]),
      section("Eftermiddag", "Covent Garden eller Trafalgar", "Välj ett mänskligare kvarter efter monumenten.", [
        stop("covent-garden", "Covent Garden eller Trafalgar-spår", "90 min", "Bra mix av stad, liv och lättare kvarterskänsla.", "Ta detta som ett promenadblock, inte en shoppinglista.", "Sen lunch eller tidig middag passar här."),
      ]),
    ]),
    day(3, "Museer eller Towern", "Välj ett enda huvudspår och låt London kännas stort men begripligt.", "Medel", "South Kensington eller Tower Bridge", "Dag tre ska kännas kuraterad. London är för stort för att pressa både öst och väst samtidigt.", "Välj kunskap eller skylinekänsla och håll resten av dagen i samma rytm.", [
      section("Morgon", "Välj huvudnummer", "Ta ett starkt block, inte flera.", [
        stop("museum-track", "South Kensington med ett enda museum", "2-3 h", "Museispåret fungerar perfekt om ni vill ha låg logistik och hög kvalitet.", "Ta ett museum, inte tre.", "Museumslunch eller kafé efteråt."),
        stop("tower-track", "Tower Bridge och Towern om ni hellre vill ha östra ikonspåret", "2 h", "Bra val om ni vill ha historia och skylinekänsla i samma block.", "Låt detta vara dagens huvudnummer.", "Ta lunch efter att ni lämnat området."),
      ]),
    ]),
    day(4, "Kvarters-London", "Nu ska staden få bli lite mer din.", "Medel", "Notting Hill eller Shoreditch", "Dag fyra är dagen då London går från institution till vardaglig favorit.", "Det här är perfekt för marknader, sidogator och längre pauser.", [
      section("Morgon", "Välj kvarter", "Välj väst eller öst och stanna där.", [
        stop("notting-hill", "Notting Hill om ni vill ha färg, bostadsgator och lugnare promenad", "90 min", "Bra för ett mjukare Londonblock.", "Kom tidigt om ni vill ha lugnare gator.", "Långfrukost eller kaffe i området."),
        stop("shoreditch", "Shoreditch om ni hellre vill ha energi, butiker och lite råare citykänsla", "90 min", "Bra kontrast till Westminster och museer.", "Fokusera på ett par gator och låt resten vara bonus.", "Lunch eller fika efter humör."),
      ]),
    ]),
    day(5, "Eget London-avslut", "Sista dagen ska spegla vad just den här resan blev.", "Valfri", "Favoritområde", "Välj ett sista område och låt avslutet bli rent och lugnt.", "London känns bäst när finalen är enkel nog att fortfarande kännas elegant.", [
      section("Final", "Ett område, ett avslut", "Skydda marginalen till hemresan.", [
        stop("favorite-return", "Återvänd till favoritkvarter eller favoritpark", "90 min", "Ger resan sammanhållning i stället för att sista dagen blir lös.", "Välj det ni faktiskt vill minnas, inte det ni råkade missa.", "Sista lunch eller te där."),
        stop("departure-buffer", "Packning och transfer i god tid", "45 min", "London-logistik går bäst när du inte testar marginalerna.", "Var ute lite tidigare än du tror behövs.", "Håll maten enkel nära avfärd."),
      ]),
    ]),
  ],
  areaCardsByDay: {
    "day-1": [area("south-bank-map", "South Bank", "Första London-känslan", "Floden gör stadens skala begriplig direkt.", "Bra första kväll utan att låsa hela schemat.", ["South Bank", "Floden", "Ljus"], 54, 56, mapLink("South Bank London")), area("hotel-loop", "Hotellets kvarter", "Trygg start", "Ju snabbare du hittar din egen bas, desto mindre överväldigande blir London.", "Låt första dagen börja här.", ["Tube", "Kafé", "Närbutik"], 34, 62, mapLink("Central London hotel"))],
    "day-2": [area("westminster-map", "Westminster", "Ikonisk kärna", "Londons mest klassiska första heldagspunkt.", "Ta symbolerna tidigt.", ["Big Ben", "Parliament", "Westminster"], 44, 50, mapLink("Westminster London")), area("covent-garden-map", "Covent Garden", "Mjuk fortsättning", "Bra eftermiddag när ni vill lämna institutionskänslan lite.", "Bra block efter parkstråk.", ["Covent Garden", "Smågator", "Middag"], 56, 36, mapLink("Covent Garden London"))],
    "day-3": [area("south-kensington", "South Kensington", "Museumstempo", "Det här är ett av de enklaste kvalitetsblocken i London.", "Välj ett museum och håll dagen smal.", ["Museum", "Kafé", "Boulevard"], 26, 46, mapLink("South Kensington London")), area("tower-bridge", "Tower Bridge", "Historia och skyline", "Ger ett starkt östligt Londonminne i ett tydligt block.", "Bra om ni väljer ikonspåret.", ["Tower Bridge", "Towern", "Themsen"], 74, 54, mapLink("Tower Bridge London"))],
    "day-4": [area("notting-hill-map", "Notting Hill", "Lugn charm", "Passar när ni vill ha filmisk vardag snarare än monument.", "Stanna längre i ett område.", ["Portobello", "Bostadsgator", "Kafé"], 18, 34, mapLink("Notting Hill London")), area("shoreditch-map", "Shoreditch", "Lokal energi", "Bra om ni vill ha något råare och mer samtida.", "Välj detta om ni vill byta ton helt.", ["Shoreditch", "Butiker", "Barer"], 76, 32, mapLink("Shoreditch London"))],
    "day-5": [area("favorite-track", "Favoritspåret", "Personlig final", "Återbesök ger London mer sammanhang.", "Ta det ni vill bära med er hem.", ["Favoritkvarter", "Lunch", "Sista promenad"], 50, 42, mapLink("London cafe neighborhood")), area("soft-exit", "Mjuk exit", "Logistiksmart", "Bra när ni vill lämna London med bra energi i stället för stress.", "Sista dagen ska vara lätt.", ["Packning", "Transfer", "Kaffe"], 34, 60, mapLink("Central London cafe"))],
  },
  rainPlansByDay: {
    "day-1": rainPlan("Rain mode: håll dig nära floden och basen", "Första dagen behöver inte bära så mycket om vädret är svagt.", ["Kortare South Bank-runda.", "Längre sittpaus.", "Spara kraft till dag två."]),
    "day-2": rainPlan("Rain mode: gör Westminster rakt och tidigt", "London funkar i regn om du håller dagen tydlig.", ["Ta ikonerna först.", "Låt parken bli kortare.", "Lägg mer tid inomhus till lunch."]),
    "day-3": rainPlan("Rain mode: välj museispåret", "Den här dagen är den enklaste att optimera i dåligt väder.", ["Låt ett museum ta all fokus.", "Skippa onödiga förflyttningar.", "Håll eftermiddagen kortare."]),
    "day-4": rainPlan("Rain mode: välj ett enda kvarter", "Londons kvarter fungerar fint även i regn om radien är liten.", ["Skala ner promenaddistansen.", "Ta fler varma stopp.", "Hoppa över dubbelområde."]),
    "day-5": rainPlan("Rain mode: låt finalen vara enkel", "Sista dagen ska inte kämpa mot både väder och klocka.", ["Återvänd nära hotellet.", "Låt shopping vara bonus.", "Skydda transporttiden."]),
  },
};

export const europeanGuideSeedsA = [parisSeed, milanSeed, londonSeed] as const;
