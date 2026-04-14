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

const esteponaSeed: CityGuideSeed = {
  id: "estepona",
  displayName: "Estepona",
  flag: "es",
  weather: { latitude: 36.4276, longitude: -5.1459, timezone: "Europe/Madrid" },
  currency: { base: "EUR", quote: "SEK" },
  maps: { cityQuery: "Estepona" },
  metadata: {
    appTitle: "Trip Companion",
    title: "Trip Companion Estepona",
    description:
      "A relaxed five-day Estepona guide built around flowered streets, sea air, murals, soft culture and easy Andalusian rhythm.",
  },
  transport: {
    title: "Till fots, strandpromenad och korta taxi/buss-hopp",
    summary:
      "Estepona blir bäst när du tänker i två tydliga lager: den lilla vitkalkade stadskärnan och den öppna havssidan. Håll båda i promenadtempo och använd taxi eller lokalbuss först när ni vill göra ett längre sidosteg.",
    bullets: [
      "Casco antiguo, Plaza de las Flores och de små tvärgatorna ska kännas som ett sammanhängande vardagsrum, inte som separata målpunkter.",
      "Paseo Marítimo, La Rada och vägen mot Cristo-hållet fungerar bäst när ni accepterar att promenaden i sig är en huvudaktivitet.",
      "Taxi är ofta smidigare än att optimera varje liten förflyttning när värmen, strandväskor eller kvällstempot tar plats.",
    ],
  },
  hotelAreas: [
    {
      value: "historic",
      label: "Casco Antiguo",
      hint: "Bäst om du vill vakna mitt i blomstergränderna och kunna gå till det mesta.",
    },
    {
      value: "central",
      label: "Av. España / strandlinjen",
      hint: "Bra om du vill ha havet nära och ändå kunna promenera in i stadskärnan.",
    },
    {
      value: "local",
      label: "Hamnen / västsidan",
      hint: "Lugnare kvällsrytm, marina-känsla och nära till Cristo-hållet.",
    },
    {
      value: "unknown",
      label: "Inte bestämt än",
      hint: "Appen håller sig i en mjuk central rytm tills du vet var du ska bo.",
    },
  ],
  basics: [
    {
      tag: "Stadskänsla",
      title: "Estepona vinner på detaljer, inte på checklista",
      body: "Det här är en stad där blomkrukor, passager, små torg och havsljus gör mer för minnet än att samla många stora namn på rad.",
    },
    {
      tag: "Havssida",
      title: "Promenaden är ett riktigt dagsspår, inte bara transport",
      body: "Paseo Marítimo, La Rada och vägen mot Playa del Cristo bär lätt en halv dag om du låter pauser, kaffe och utsikter få plats.",
    },
    {
      tag: "Kultur",
      title: "Murales, orkidéhuset och små utställningar gör staden rik",
      body: "Estepona blir mer intressant när du blandar gamla stan med dess nyare kulturlager: muralrutter, botaniska rum och moderna utsiktspunkter.",
    },
    {
      tag: "Identitet",
      title: "Det speciella är mötet mellan söt småstad och mycket medveten stadsförnyelse",
      body: "Estepona känns först som en enkel blomsterstad, men får mer karaktär när du ser hur muralerna, orkidéhuset, tillgängliga stråk och nya kulturpunkter faktiskt förändrat hela stadens ton.",
    },
    {
      tag: "Rytm",
      title: "Bäst när du växlar mellan gränder och hav samma dag",
      body: "Om du stannar för länge bara i gamla stan blir Estepona nästan för söt, och om du bara gör strand försvinner dess personlighet. Växlingen är själva poängen.",
    },
    {
      tag: "Kväll",
      title: "Kvällarna ska vara lätta, inte uppklädda",
      body: "Estepona tjänar sällan på hård kvällsplanering. Ett torg, en promenad, något kallt och god marginal gör ofta mer än att jaga rätt bord.",
    },
  ],
  wowFacts: [
    {
      tag: "Gamla stan",
      title: "Esteponas gamla stad är över 130 förnyade gator och torg",
      body: "Turismkontoret beskriver casco historico som ett tillgängligt nät av mer än 130 förnyade gator och platser med gångfart eller starkt begränsad trafik. Det är mer stadsprojekt än bara gullig kuliss.",
      imageUrl: commons("Estepona-old-town.jpg"),
      sourceLabel: "Turismo Estepona",
      sourceUrl: "https://turismo.estepona.es/informacion-accesibilidad/",
      credit: "Foto via Wikimedia Commons",
    },
    {
      tag: "Orquidiario",
      title: "Orquidiario har tre glaskupoler, 15 meters vattenfall och tusentals orkidéer",
      body: "Turismo Estepona beskriver orkidéhuset som ett subtropiskt rum med tre glaskupoler, 15 meters vattenfall och över 4 000 orkidéer från mer än 1 500 arter. Det är ett oväntat wow-rum mitt i stadsväven.",
      imageUrl: commons("Orchidarium de Estepona (33712234246).jpg"),
      sourceLabel: "Turismo Estepona om Orquidiario",
      sourceUrl: "https://turismo.estepona.es/lugares/parque-botanico-orquidario/",
      credit: "Foto via Wikimedia Commons",
    },
    {
      tag: "Murales",
      title: "Staden har gjort hela kvarter till ett öppet galleri",
      body: "Den officiella muralguiden visar hur verk är spridda över olika delar av Estepona i stället för att samlas i ett enda museum. Resultatet är att konst blir något du går igenom, inte bara besöker.",
      sourceLabel: "Ruta de los Murales",
      sourceUrl: "https://turismo.estepona.es/wp-content/uploads/2025/06/2025-RUTA-MURALES.pdf",
    },
    {
      tag: "Mirador",
      title: "Mirador del Carmen är utsiktstorn, vertikalbibliotek och kulturhus i ett",
      body: "Det officiella materialet beskriver byggnaden som ett nytt kulturcentrum med bibliotek över flera plan, auditorium, utställningssal och ett torn som öppnar staden mot havet. Det är Estepona som medveten stadsförnyelse i ett enda hus.",
      sourceLabel: "Turismo Estepona om Mirador",
      sourceUrl: "https://turismo.estepona.es/lugares/mirador-del-carmen/",
    },
    {
      tag: "Tillgänglighet",
      title: "Tillgänglighet är en del av stadens identitet, inte ett sidospår",
      body: "På den officiella tillgänglighetssidan lyfts både gamla stan, muralrutterna och assisterat bad på La Rada och El Cristo. Det gör Estepona ovanligt genomtänkt för en semesterort i den här storleken.",
      sourceLabel: "Turismo Estepona accessibility",
      sourceUrl: "https://turismo.estepona.es/informacion-accesibilidad/",
    },
  ],
  gallery: [
    {
      title: "Gamla stan i Estepona",
      description:
        "Vitkalkade hus, blomsterkrukor och lugna gator är själva hjärtat här. Det är den sortens stad som blir större ju långsammare du går.",
      imageUrl: commons("Estepona-old-town.jpg"),
      sourceLabel: "Wikimedia Commons",
      sourceUrl: "https://commons.wikimedia.org/wiki/File:Estepona-old-town.jpg",
      credit: "Foto via Wikimedia Commons",
    },
    {
      title: "Plaza de las Flores",
      description:
        "Torget visar Esteponas styrka i miniatyr: lokalt vardagsliv, blomsterkänsla och en stad som är mjuk utan att vara sömnig.",
      imageUrl: commons("Plaza de las Flores, Estepona 02.JPG"),
      sourceLabel: "Wikimedia Commons",
      sourceUrl: "https://commons.wikimedia.org/wiki/File:Plaza_de_las_Flores,_Estepona_02.JPG",
      credit: "Foto via Wikimedia Commons",
    },
    {
      title: "Parque BotÃ¡nico-Orquidario",
      description:
        "Orkidéhuset ger Estepona en oväntat stark kultur- och naturton mitt i stan, med kupoler, vattenfall och tropisk volym.",
      imageUrl: commons("Orchidarium de Estepona (33712234246).jpg"),
      sourceLabel: "Wikimedia Commons",
      sourceUrl: "https://commons.wikimedia.org/wiki/File:Orchidarium_de_Estepona_(33712234246).jpg",
      credit: "Foto via Wikimedia Commons",
    },
    {
      title: "Paseo Marítimo",
      description:
        "Här får du Estepona som semesterkropp: ljus, hav, rörelse och pauser utan att du lämnar själva staden eller tappar kontakten med centrum.",
      imageUrl: commons("Paseo marítimo de Estepona (33623136121).jpg"),
      sourceLabel: "Wikimedia Commons",
      sourceUrl: "https://commons.wikimedia.org/wiki/File:Paseo_mar%C3%ADtimo_de_Estepona_(33623136121).jpg",
      credit: "Foto via Wikimedia Commons",
    },
    {
      title: "Playa del Cristo",
      description:
        "Den skyddade lilla bukten ger mjukare havsdag än många större stränder och fungerar fint även när energin ska hållas låg.",
      imageUrl: commons("Playa del cristo winter - Estepona beach.jpg"),
      sourceLabel: "Wikimedia Commons",
      sourceUrl: "https://commons.wikimedia.org/wiki/File:Playa_del_cristo_winter_-_Estepona_beach.jpg",
      credit: "Foto via Wikimedia Commons",
    },
  ],
  tripDays: [
    day(
      1,
      "Landning och blomstergränder",
      "Landa mjukt och låt Estepona kännas liten, vacker och lätt direkt.",
      "Låg",
      "Hotellet + casco antiguo",
      "Första dagen i Estepona ska ge orientering, blommor och ett första havsljus utan att kännas som ett program.",
      "Börja med basen och gå sedan rakt in i den del av staden som gör Estepona speciell: lugna gator, torget och en enkel kväll vid havet.",
      [
        section("Ankomst", "Säkra basen i rätt rytm", "Första timmen ska minska friktion, inte öka ambitionsnivån.", [
          stop(
            "arrival-loop",
            "Checka in och markera närmaste frukostställe, apotek och väg mot gamla stan",
            "45-60 min",
            "Den lilla radien runt hotellet gör resten av dagarna mycket enklare.",
            "Lägg gärna in hotellet och Plaza de las Flores som favoriter direkt.",
            "Köp vatten och något enkelt till rummet."
          ),
          stop(
            "plaza-flores",
            "Gå till Plaza de las Flores och låt Estepona öppna sig därifrån",
            "45 min",
            "Torget ger direkt rätt tempo: centralt, grönt och levande utan att vara intensivt.",
            "Sitt hellre en stund här än att trycka in fler namn första kvällen.",
            "Kaffe, glass eller en tidig tapa passar perfekt."
          ),
        ]),
        section("Kväll", "Möt staden i låg ton", "Här ska Estepona få kännas mer som semester än som sightseeing.", [
          stop(
            "old-town-walk",
            "Ta en första långsam runda genom de blomsterfyllda gatorna i gamla stan",
            "60 min",
            "Det här är stadens mest egna kvalitet och den känns bäst innan ni börjar optimera något annat.",
            "Gå på känsla och välj de gator som ser vackrast ut, inte de mest effektiva.",
            "Avsluta gärna med något enkelt runt torget eller nära havet."
          ),
        ]),
      ]
    ),
    day(
      2,
      "Orkidéer, patio och kulturhus",
      "Nu får Estepona visa att den är mer än bara söt kuststad.",
      "Låg till medel",
      "Casco antiguo + kulturspår",
      "Dag två passar bäst för Esteponas kulturlager: gamla rum, nyare utställningar och den oväntat starka botaniska mittpunkten.",
      "Håll allt nära varandra så att dagen känns tät men fortfarande avspänd.",
      [
        section("Morgon", "Torg och kultur nära varandra", "Bygg dagen kring stadens mest lättburna kulturstopp.", [
          stop(
            "casa-tejerinas",
            "Casa de Las Tejerinas för patio, tillfällig konst och gammal Estepona-arkitektur",
            "45-60 min",
            "Bra när du vill att gamla stan ska få ett inomhuslager utan att tempot dör.",
            "Kika gärna in även om ni inte bygger hela dagen kring utställningarna.",
            "Ta kaffe före eller efter på torget."
          ),
          stop(
            "orchidarium",
            "Parque BotÃ¡nico-Orquidario och trädgårdsrummet runt omkring",
            "75-90 min",
            "Det är ett av stadens mest minnesvärda stopp och ger Estepona en tydlig wow-nivå.",
            "Ta det här som dagens stora huvudnummer i stället för att jaga tre mindre.",
            "En lätt lunch efteråt fungerar bäst."
          ),
        ]),
        section("Eftermiddag", "Kultur som fortfarande känns lätt", "Välj en mjuk andra halva, inte ett nytt tungt block.", [
          stop(
            "mirador-carmen",
            "Mirador del Carmen om ni vill ha utsikt, bibliotekskänsla och en modern kulturton",
            "60-75 min",
            "Det här ger fin kontrast till den äldre stadskärnan och öppnar Estepona mot havet igen.",
            "Bra stopp när ni vill byta från charm till rymd utan att lämna centrum.",
            "Ta något kallt eller en sen kaffe efter utsikten."
          ),
        ]),
      ]
    ),
    day(
      3,
      "Murales och strandlinje",
      "Nu ska staden kännas större utan att bli stressigare.",
      "Medel",
      "Murales + La Rada",
      "Dag tre fungerar fint när Estepona får vara både stad och kustpromenad: konst på fasaderna först, sedan havsrum och längre pauser.",
      "Det viktiga här är att inte se muralerna som checkpunkter utan som anledning att gå genom fler kvarter.",
      [
        section("Morgon", "Gå stadens öppna galleri", "Murales ger Estepona en egen identitet om ni håller tempot nyfiket.", [
          stop(
            "murals-route",
            "Välj en koncentrerad del av Ruta de los Murales och se några riktigt starka verk",
            "75-90 min",
            "Det här gör staden mer levande än ännu ett allmänt centrumvarv.",
            "Välj hellre ett kortare utsnitt av rutten än att försöka täcka för mycket.",
            "Ta en drickpaus mellan verken, inte först när ni är helt klara."
          ),
          stop(
            "castillo-san-luis",
            "Restos del Castillo de San Luis för ett historiskt lager mellan muralerna och havet",
            "30-45 min",
            "Ger centrum mer tyngd och hjälper er förstå stadens äldre försvars- och kusthistoria.",
            "Bra kortstopp snarare än eget halvdagsspår.",
            "Passar fint före en sen lunch."
          ),
        ]),
        section("Eftermiddag", "Låt havet ta över", "Efter konsten ska kroppen få jobba mindre och blicken mer.", [
          stop(
            "paseo-rada",
            "Gå strandpromenaden längs La Rada i lugn takt",
            "60-90 min",
            "Här får ni Estepona som semesterstad på riktigt, med ljus, rörelse och plats för långa pauser.",
            "Gå så långt det känns fint och vänd innan det blir ett projekt.",
            "Glass, sen lunch eller något kallt vid havet fungerar utmärkt."
          ),
          stop(
            "port-pause",
            "Ta en mjuk marina-paus vid hamnen om ni vill förlänga eftermiddagen",
            "45 min",
            "Bra när ni vill ha lite mer båt- och kvällskänsla utan att byta stadston helt.",
            "Det här stoppet behöver inte bli långt för att göra dagen rikare.",
            "En enkel fiskmiddag eller tapas i närheten passar bra."
          ),
        ]),
      ]
    ),
    day(
      4,
      "Playa del Cristo och mjuk västsida",
      "Nu får Estepona bli ren återhämtning utan att tappa karaktär.",
      "Låg till medel",
      "Västsidan + strand",
      "Dag fyra tjänar på låg ambition: en skyddad strand, ett långsamt havsstråk och kanske bara ett riktigt stopp till.",
      "Låt kroppen styra mer än listan här.",
      [
        section("Morgon", "Skyddad stranddag", "Välj lugn buktkänsla framför att maximera avstånd.", [
          stop(
            "playa-cristo",
            "Playa del Cristo för bad, läsning eller bara en riktigt mjuk havspaus",
            "90 min",
            "Den skyddade bukten fungerar extra bra när ni vill ha lättare stranddag än en stor exponerad strandlinje.",
            "Kom hellre ganska tidigt än att slåss om rytmen senare.",
            "Frukost nära vägen hit eller något enkelt på plats."
          ),
        ]),
        section("Eftermiddag", "Behåll dagen lätt", "Fortsätt bara om det känns roligt, inte för att ni borde.", [
          stop(
            "favorite-return",
            "Återvänd till favoritdel av gamla stan eller havssidan för en sen lunch och kvällspromenad",
            "60-90 min",
            "Det gör resan mer sammanhållen än att försöka pressa in ännu ett helt nytt kvarter.",
            "Välj det ni redan pratat mest om under resan.",
            "Lägg kvällsmaten där ni redan vet att tempot känns rätt."
          ),
        ]),
      ]
    ),
    day(
      5,
      "Sista utsikten och lugn final",
      "Avsluta Estepona med något ni faktiskt vill bära med er hem.",
      "Valfri",
      "Flexibel",
      "Sista dagen i Estepona ska vara liten nog att kännas semesterlätt men tydlig nog att ge resan ett riktigt slut.",
      "Ett sista valt stopp, en bra lunch och gott om marginal räcker långt här.",
      [
        section("Morgon", "Välj ett sista tonläge", "Antingen kulturutsikt eller ett säkert återbesök.", [
          stop(
            "culture-flex",
            "Välj sista kulturspår: Mirador, Casa de Las Tejerinas eller Castillo de San Luis",
            "60-90 min",
            "Bra när ni vill ge finalen form utan att öppna för för många nya projekt.",
            "Välj ett enda spår och låt det räcka.",
            "Ta sedan lunch i området ni helst vill avsluta i."
          ),
        ]),
        section("Final", "Skydda hemresan", "Den sista timmen ska inte förta hela Estepona-känslan.", [
          stop(
            "departure-buffer",
            "Packning, sista kaffe och transfer med marginal",
            "45 min",
            "Estepona känns bäst i kroppen när ni inte jagar sista minuten på slutet.",
            "Sikta på lugn snarare än ett extra stopp till.",
            "Håll maten enkel och trygg nära avfärden."
          ),
        ]),
      ]
    ),
  ],
  areaCardsByDay: {
    "day-1": [
      area(
        "casco-intro",
        "Casco Antiguo",
        "Blomsterlugn",
        "Perfekt första kväll när du vill känna Estepona direkt men fortfarande hålla dagen mjuk.",
        "Gå hellre ett mindre kvarter ordentligt än att täcka hela centrum.",
        ["Plaza", "Blomkrukor", "Kvarterskänsla"],
        46,
        42,
        mapLink("Plaza de las Flores Estepona")
      ),
      area(
        "seafront-soft",
        "Av. España",
        "Havsljus",
        "Ger första dagen ett öppet slut mot vattnet.",
        "Bra kvällsstråk utan tung logistik.",
        ["Promenad", "Bänk", "Enkel middag"],
        58,
        68,
        mapLink("Avenida Espana Estepona")
      ),
    ],
    "day-2": [
      area(
        "culture-core",
        "Plaza de las Flores + orkidéhuset",
        "Liten kulturkärna",
        "Här får Estepona både patio, utställning och wow-stopp inom kort gångavstånd.",
        "Låt dagen vara tät och bekväm.",
        ["Casa de Las Tejerinas", "Orchidarium", "Torg"],
        48,
        40,
        mapLink("Parque Botanico-Orquidario Estepona")
      ),
      area(
        "mirador-line",
        "Mirador del Carmen",
        "Modern utsikt",
        "Bra när ni vill ge dagen havsrum och nyare kultur på samma gång.",
        "Passar fint som andra halva.",
        ["Utsikt", "Bibliotek", "Exposition"],
        66,
        56,
        mapLink("Mirador del Carmen Estepona")
      ),
    ],
    "day-3": [
      area(
        "murals-zone",
        "Murales i stadsväven",
        "Öppet galleri",
        "Ger Estepona en stark identitet bortom strandstaden.",
        "Välj ett utsnitt och gå nyfiket.",
        ["Murales", "Smågator", "Foto"],
        38,
        34,
        mapLink("Ruta de los Murales Estepona")
      ),
      area(
        "rada-line",
        "La Rada till hamnen",
        "Havsrytm",
        "Perfekt eftermiddag när kroppen vill ha ljus och luft.",
        "Låt pauserna göra jobbet.",
        ["Paseo", "Port", "Sen lunch"],
        68,
        64,
        mapLink("Paseo Maritimo Estepona")
      ),
    ],
    "day-4": [
      area(
        "cristo-bay",
        "Playa del Cristo",
        "Skyddad buktkänsla",
        "Ett av de bästa valen när ni vill ge Estepona en riktigt mjuk havsdag.",
        "Bra strand för låg ambition och långsam rytm.",
        ["Bad", "Skugga", "Lång paus"],
        24,
        66,
        mapLink("Playa del Cristo Estepona")
      ),
      area(
        "return-soft",
        "Favoritstråket",
        "Personlig rytm",
        "Återbesök gör staden mer egen.",
        "Välj den del som redan känns er.",
        ["Torget", "Havsida", "Kvällsmat"],
        54,
        46,
        mapLink("Casco Antiguo Estepona")
      ),
    ],
    "day-5": [
      area(
        "last-look",
        "Mirador eller gamla stan",
        "Sista tonen",
        "Bra final när ni vill att Estepona ska sluta tydligt men lätt.",
        "En sak räcker här.",
        ["Utsikt", "Kultur", "Lunch"],
        46,
        40,
        mapLink("Mirador del Carmen Estepona")
      ),
      area(
        "soft-exit",
        "Lugn avfärd",
        "Bra slut i kroppen",
        "Skyddar hela resan från sista-minuten-stress.",
        "Lägg logistiken tidigt.",
        ["Packning", "Kaffe", "Transfer"],
        40,
        60,
        mapLink("Estepona taxi")
      ),
    ],
  },
  rainPlansByDay: {
    "day-1": rainPlan("Rain mode: håll Estepona liten första dagen", "Gamla stan fungerar fortfarande fint om du gör den kortare och varmare.", [
      "Prioritera Plaza de las Flores och några få gator.",
      "Lägg mer tid på kaffe eller tapas inomhus.",
      "Skippa längre havspromenad om vinden gör kvällen hård.",
    ]),
    "day-2": rainPlan("Rain mode: låt kulturdagen bära mer", "Estepona är lätt att rädda i sämre väder när du ger inomhusstoppen större vikt.", [
      "Ge Orchidarium mer tid.",
      "Ta Casa de Las Tejerinas och Mirador del Carmen som huvudspår.",
      "Skala bort extra grändjakt mellan stoppen.",
    ]),
    "day-3": rainPlan("Rain mode: gör muraldagen kompakt", "Murales är roliga även i skurar om ni väljer ett mindre utsnitt och går med tydligt fokus.", [
      "Ta bara några starka muraler.",
      "Låt Castillo de San Luis och lunchpaus ge stadga.",
      "Ta en kortare promenad vid havet senare om vädret lättar.",
    ]),
    "day-4": rainPlan("Rain mode: bygg dag fyra kring havsutsikt i stället för strandtid", "Ni kan fortfarande få havskänslan utan att göra stranden till huvudnumret.", [
      "Skala ner Playa del Cristo kraftigt eller hoppa över den.",
      "Återvänd tidigare till centrum.",
      "Gör dagen till lång lunch plus favoritstråk.",
    ]),
    "day-5": rainPlan("Rain mode: gör finalen enkel", "Sista dagen ska vara lätt att genomföra även om vädret vill något annat.", [
      "Välj ett inomhusspår av kulturvalen.",
      "Ät nära där ni ändå befinner er.",
      "Skydda transfermarginalen extra tydligt.",
    ]),
  },
};

const marbellaSeed: CityGuideSeed = {
  id: "marbella",
  displayName: "Marbella",
  flag: "es",
  weather: { latitude: 36.5101, longitude: -4.8824, timezone: "Europe/Madrid" },
  currency: { base: "EUR", quote: "SEK" },
  maps: { cityQuery: "Marbella" },
  metadata: {
    appTitle: "Trip Companion",
    title: "Trip Companion Marbella",
    description:
      "A polished five-day Marbella guide with old-town charm, promenades, art, sea views, Puerto Banús and Cabopino balance.",
  },
  transport: {
    title: "Till fots, strandpromenad och korta taxihopp",
    summary:
      "Marbella fungerar bäst när du tänker i tydliga zoner med olika ton: gamla stan, centrala havsaxeln, Puerto Banús och Cabopino. Håll centrum till fots och använd taxi när ni medvetet byter register.",
    bullets: [
      "Casco histórico, Alameda, Avenida del Mar och centrala Paseo Marítimo ska kännas som ett enda stadsspår med olika tempo, inte som separata attraktioner.",
      "Puerto Banús blir bäst när ni går dit för marina, folkspaning och kvällsljus, inte för att försöka hitta stadens själ där.",
      "Cabopino och Artola är värda ett eget halvdagsblock eftersom de visar den mjukare, luftigare sidan av Marbella.",
      "När värmen stiger sparar taxi ofta mer energi än vad den kostar i planering.",
    ],
  },
  hotelAreas: [
    {
      value: "historic",
      label: "Casco Antiguo",
      hint: "Bäst om du vill bo mitt i den andalusiska stadskänslan.",
    },
    {
      value: "central",
      label: "Alameda / Paseo Marítimo",
      hint: "Bra om du vill kombinera strandlinje, restauranger och gångavstånd in i gamla stan.",
    },
    {
      value: "local",
      label: "Puerto Banús / Nueva Andalucía",
      hint: "Mer resort- och marinarytm, mindre småstad direkt utanför dörren.",
    },
    {
      value: "unknown",
      label: "Inte bestämt än",
      hint: "Appen håller Marbella central och promenadvänlig tills du vet mer.",
    },
  ],
  basics: [
    {
      tag: "Ton",
      title: "Marbella är bäst när du blandar charm och polish",
      body: "Gamla stans gränder ger värme, men stadens signatur sitter lika mycket i promenaderna, den öppna havssidan och de mer polerade marina-miljöerna.",
    },
    {
      tag: "Rytm",
      title: "Bygg dagen i hela stråk, inte i lösa punkter",
      body: "Alameda till Avenida del Mar, gamla stan till strandlinjen eller Puerto Banús till Golden Mile-hållet fungerar mycket bättre som hela rörelser än som enskilda nålstick på kartan.",
    },
    {
      tag: "Final",
      title: "Cabopino och Artola ger välbehövlig kontrast",
      body: "När du redan gjort centrum och Banús blir Marbella starkare om sista stora utflykten får vara trä, sand, småbåtshamn och mer luft.",
    },
    {
      tag: "Identitet",
      title: "Marbella är inte en enda stadston utan flera versioner bredvid varandra",
      body: "Det gör staden intressant. Casco histórico är varm och nästan intim, Avenida del Mar och strandlinjen känns mer polerade, Banús är ren marina-glans och Cabopino är den mjuka andningspausen.",
    },
    {
      tag: "Prioritering",
      title: "Det är bättre att välja rätt Marbella än att försöka göra all Marbella",
      body: "Om ni försöker få in gamla stan, Banús, Golden Mile, Cabopino och stranddag i samma tempo blir staden lätt platt. Ett tydligt register per dag ger mer känsla.",
    },
    {
      tag: "Kväll",
      title: "Kvällarna kan vara allt från andalusiskt småskaliga till marina-glansiga",
      body: "Det fina med Marbella är att ni kan styra detta aktivt. Gamla stan ger värme och lugn, medan Banús och havsstråken ger mer scenkänsla och kvällsljus.",
    },
  ],
  wowFacts: [
    {
      tag: "Casco",
      title: "Gamla Marbella lagrar romerska, arabiska och kristna spår i samma stadskärna",
      body: "Marbellas egen turismsida beskriver casco historico som en plats där romerska, arabiska och kristna vestigier möter restauranger, torg och andalusisk vardagskänsla i samma korta promenad.",
      imageUrl: commons("Marbella Old Town.jpg"),
      sourceLabel: "Turismo Marbella om Casco Historico",
      sourceUrl: "https://turismo.marbella.es/vive/cultura/patrimonio-historico/casco-historico.html",
      credit: "Foto via Wikimedia Commons",
    },
    {
      tag: "Murarna",
      title: "Borgen i gamla stan har 1000-talsspår och romerska fragment inmurade",
      body: "Turismo Marbella beskriver slottet som det viktigaste muslimska arvet i centrum. I murverket syns blandade byggnadssätt och infogade romerska delar, medan murarna från 1000- och 1100-talen en gång bar upp omkring tio torn.",
      sourceLabel: "Turismo Marbella om Castillo",
      sourceUrl: "https://turismo.marbella.es/vive/cultura/patrimonio-historico/casco-historico/castillo-de-marbella-alcazaba-y-muralla.html",
    },
    {
      tag: "Dali",
      title: "Avenida del Mar är ett offentligt Dalí-rum mellan park och strand",
      body: "Marbellas officiella parksida beskriver stråket som en länk mellan Alameda och Paseo Marítimo med en samling på tio Dalí-skulpturer i brons. Det är mycket mer stadsgest än vanlig strandpassage.",
      imageUrl: commons("Marbella 2015 10 20 1743 (24646806321).jpg"),
      sourceLabel: "Turismo Marbella om Avenida del Mar",
      sourceUrl: "https://turismo.marbella.es/vive/naturaleza/parques-y-jardines/avenida-del-mar.html",
      credit: "Foto via Wikimedia Commons",
    },
    {
      tag: "Hospitalet",
      title: "Hospital Bazán blev grafikmuseum utan att tappa sin mudéjar-karaktär",
      body: "Det som i dag är Museo del Grabado började som Hospital de la Encarnación. Turismsidan lyfter renässansplanen, de mudéjarinspirerade taken och hur byggnaden efter restaureringen 1989 fick nytt liv som museum.",
      sourceLabel: "Turismo Marbella om Hospital Bazan",
      sourceUrl: "https://turismo.marbella.es/vive/cultura/patrimonio-historico/casco-historico/hospital-bazan-museo-del-grabado.html",
    },
    {
      tag: "Kusten",
      title: "Torre Ladrones var del av ett kustlarm med eld och röksignaler",
      body: "Vid Artola beskriver Turismo Marbella tornet som en del av det historiska kustförsvaret. Dagstid användes rök och nattetid ljussignaler för att varna för fientliga fartyg längs kusten.",
      imageUrl: commons("Cabopino 02.jpg"),
      sourceLabel: "Turismo Marbella om Cabopino",
      sourceUrl: "https://turismo.marbella.es/vive/mar/puertos/puerto-de-cabopino.html",
      credit: "Foto via Wikimedia Commons",
    },
    {
      tag: "Torget",
      title: "Plaza de los Naranjos skapades för att bli stadens sociala mittpunkt",
      body: "Efter erövringen gjordes platsen om till stadens urbana axel, enligt den officiella historiken. Namnet kom långt senare, när dagens apelsinträd planterades 1941.",
      sourceLabel: "Turismo Marbella om Plaza de los Naranjos",
      sourceUrl: "https://turismo.marbella.es/vive/cultura/patrimonio-historico/casco-historico/plaza-de-los-naranjos.html",
    },
  ],
  gallery: [
    {
      title: "Marbellas gamla stad",
      description:
        "Det här är den andalusiska kärnan som gör Marbella mer än bara en kustadress: vita fasader, skuggiga gator och lugn prestige.",
      imageUrl: commons("Marbella Old Town.jpg"),
      sourceLabel: "Wikimedia Commons",
      sourceUrl: "https://commons.wikimedia.org/wiki/File:Marbella_Old_Town.jpg",
      credit: "Foto via Wikimedia Commons",
    },
    {
      title: "Plaza de los Naranjos",
      description:
        "Orange Square visar varför Marbella inte bara är kustglans. Här sitter stadens vardagsvärme, historiska centrumkänsla och den mjukare kvällstonen.",
      imageUrl: commons("Plaza de los Naranjos3.jpg"),
      sourceLabel: "Wikimedia Commons",
      sourceUrl: "https://commons.wikimedia.org/wiki/File:Plaza_de_los_Naranjos3.jpg",
      credit: "Foto via Wikimedia Commons",
    },
    {
      title: "Avenida del Mar",
      description:
        "Dalí-skulpturerna, havsaxeln och övergången från stad till strand gör det här till ett av Marbellas tydligaste signaturstråk.",
      imageUrl: commons("Marbella 2015 10 20 1743 (24646806321).jpg"),
      sourceLabel: "Wikimedia Commons",
      sourceUrl: "https://commons.wikimedia.org/wiki/File:Marbella_2015_10_20_1743_(24646806321).jpg",
      credit: "Foto via Wikimedia Commons",
    },
    {
      title: "Parque de la Alameda",
      description:
        "Alameda ger centrum skugga, grönska och en lugn start innan havet eller gamla stan tar vid.",
      imageUrl: commons("Marbella - Parque de la Alameda 02.jpg"),
      sourceLabel: "Wikimedia Commons",
      sourceUrl: "https://commons.wikimedia.org/wiki/File:Marbella_-_Parque_de_la_Alameda_02.jpg",
      credit: "Foto via Wikimedia Commons",
    },
    {
      title: "Puerto Banús",
      description:
        "Banús är glansigare än resten av Marbella men fungerar bäst när du går dit med rätt förväntan: marinamiljö, folkspaning, kvällsljus och ren scenkänsla snarare än stadsdjup.",
      imageUrl: commons("Puerto Banús Marbella.jpg"),
      sourceLabel: "Wikimedia Commons",
      sourceUrl: "https://commons.wikimedia.org/wiki/File:Puerto_Ban%C3%BAs_Marbella.jpg",
      credit: "Foto via Wikimedia Commons",
    },
    {
      title: "Cabopino",
      description:
        "Cabopino och Artola-dynerna visar den sida av Marbella som många missar: träspänger, skyddad natur, mindre marina och mycket mer luft än i centrum.",
      imageUrl: commons("Cabopino 02.jpg"),
      sourceLabel: "Wikimedia Commons",
      sourceUrl: "https://commons.wikimedia.org/wiki/File:Cabopino_02.jpg",
      credit: "Foto via Wikimedia Commons",
    },
  ],
  tripDays: [
    day(
      1,
      "Landning och gamla Marbella",
      "Landa i rätt ton: vit stad, skugga och ett första glas ljus från havet.",
      "Låg",
      "Hotellet + casco antiguo",
      "Första dagen i Marbella ska ge trygghet och charm, inte lyxpress eller långa förflyttningar.",
      "Börja med basen och låt sedan gamla stan bära kvällen med små torg och lätt orientering.",
      [
        section("Ankomst", "Säkra basen nära centrum", "Första timmen ska göra resten av vistelsen enkel.", [
          stop(
            "arrival-loop",
            "Checka in och markera vägen till gamla stan och strandpromenaden",
            "45-60 min",
            "Det är viktigare att förstå stadens riktning än att göra första bästa sevärdhet.",
            "Spara Plaza de los Naranjos och Alameda som enkla ankare i mobilen.",
            "Köp vatten och något litet till rummet."
          ),
        ]),
        section("Kväll", "Mjuk introduktion till staden", "Gamla stan räcker långt första kvällen.", [
          stop(
            "old-town-first",
            "Ta en första lugn runda genom Marbellas gamla stad",
            "60 min",
            "Det här ger stadens finaste mjuka start och skiljer Marbella från de mer blanka kustbilderna.",
            "Gå mer på känsla än efter exakt rutt.",
            "Tapas eller enkel middag i gamla stan passar bäst."
          ),
          stop(
            "castle-walls",
            "Låt murarna och de äldsta delarna av casco histórico ge promenaden mer historia",
            "30-45 min",
            "Det här gör första kvällen rikare än bara vackra gator och restauranger.",
            "Bra kort stopp när ni vill känna att gamla stan också har tyngd, inte bara charm.",
            "Ta sedan torget eller middag i lugn takt."
          ),
          stop(
            "plaza-naranjos",
            "Sitt en stund på Plaza de los Naranjos och låt kvällen sakta in",
            "30-45 min",
            "Torget ger direkt stadens sociala mittpunkt och rätt kvällstempo.",
            "Perfekt när du vill känna att resan börjat utan att göra dagen sen.",
            "Ett glas vin, kaffe eller dessert räcker fint här."
          ),
        ]),
      ]
    ),
    day(
      2,
      "Patio, konst och havsaxel",
      "Nu får Marbella visa sitt mest balanserade dagsspår.",
      "Låg till medel",
      "Casco histórico + havet",
      "Dag två passar för den mest klassiska centrumdagen: gamla stadens kärna, lite kultur och sedan det öppna stråket mot havet.",
      "Här finns ingen anledning att stressa mellan delarna eftersom de ligger så fint på rad.",
      [
        section("Morgon", "Marbellas historiska kärna", "Låt centrum vara vackert i stället för effektivt.", [
          stop(
            "museum-grabado",
            "Museo del Grabado och kvarteren runt Hospital BazÃ¡n",
            "60-75 min",
            "Det här ger gamla stan ett riktigt kulturstopp och gör den mer än bara restaurangkuliss.",
            "Bra när ni vill ha inomhuslager utan att ge upp kvarterskänslan.",
            "Ta kaffe före eller efter bland gränderna."
          ),
          stop(
            "encarnacion",
            "Iglesia de la Encarnación och de närmaste gränderna runt Plaza de la Iglesia",
            "30-45 min",
            "Kyrkan ger gamla stan en tydlig historisk tyngd och passar fint mellan museum och park.",
            "Ta utsidan även om ni inte går in länge, tornet och torgrummet gör mycket av jobbet.",
            "Kaffe eller kall dryck efteråt i närheten."
          ),
          stop(
            "alameda",
            "Parque de la Alameda för skugga, grönska och lugn övergång mot havet",
            "30-45 min",
            "Perfekt som mellanrum mellan historiska centrum och strandlinjen.",
            "Sitt ner en stund i stället för att rusa igenom.",
            "Kall dryck eller glass passar bra här."
          ),
        ]),
        section("Eftermiddag", "Stad till hav på snyggaste sättet", "Nu får Marbella öppna sig visuellt.", [
          stop(
            "avenida-del-mar",
            "Gå Avenida del Mar med Dalí-skulpturerna ner mot vattnet",
            "45 min",
            "Det här är ett av stadens tydligaste signaturstråk och känns väldigt Marbella utan att bli tungt.",
            "Bra foto- och kvällsljusspår även om ni återvänder hit senare.",
            "Ta lunch eller sen fika nära promenaden."
          ),
          stop(
            "paseo-maritimo",
            "Fortsätt ut på Paseo Marítimo för en långsam strandpromenad",
            "60-90 min",
            "Efter centrum ger havssidan exakt den luft dagen behöver.",
            "Gå så långt det känns härligt och vänd sedan tillbaka i er egen rytm.",
            "Chiringuito-lunch eller en enkel drink med havsutsikt passar utmärkt."
          ),
        ]),
      ]
    ),
    day(
      3,
      "Marinaton eller mjuk citydag",
      "Nu får resan lite mer glans, men utan att tappa mänsklig rytm.",
      "Medel",
      "Puerto Banús eller central havssida",
      "Dag tre är rätt dag för Puerto Banús eftersom ni redan hunnit landa i stadens lugnare sida först.",
      "Ta Banús som ett tydligt block, inte som ett snabbt stickspår mellan annat.",
      [
        section("Morgon", "Låt dagen samla sig eller välj konstspår", "Håll starten enkel så Banús inte känns som en chock.", [
          stop(
            "favorite-return",
            "Återvänd kort till er favoritdel av centrum för frukost eller en mjuk start",
            "45 min",
            "Det ger dagen en lugnare förankring innan ni byter tonläge.",
            "Välj något ni redan vet fungerar snarare än att experimentera här.",
            "Frukost eller kaffe i favoritkvarteret."
          ),
          stop(
            "ralli-museum",
            "Museo Ralli om ni vill ge dagen ett extra konstlager före marinan",
            "60-75 min",
            "Det här är ett starkt val om ni vill att Marbella också ska få vara konst och inte bara strandlinje och båtar.",
            "Särskilt bra om ni vill mjuka upp övergången mellan centrum och Puerto Banús.",
            "Ta lunch när ni kommer vidare mot marinan."
          ),
        ]),
        section("Eftermiddag", "Marbellas polerade marina-sida", "Nu kan Puerto Banús få vara precis så glansigt som det är.", [
          stop(
            "puerto-banus",
            "Puerto Banús för marina, folkspaning och kvällsljus över båtarna",
            "90 min",
            "Det här stoppet blir bäst när du tar det som atmosfär och rörelse, inte som kulturmåste.",
            "Gå längs kajerna, titta, och låt det räcka där.",
            "Ta något enkelt eller ett glas med utsikt över hamnen."
          ),
          stop(
            "golden-mile",
            "En lätt touch av Golden Mile-hållet eller stranden tillbaka om energin finns",
            "45-60 min",
            "Bra sätt att göra dagen mer än bara en marinarunda utan att öppna för tung logistik.",
            "Hoppa över det om kroppen redan är nöjd med Banús.",
            "Sen lunch eller middag där ni avslutar fungerar bäst."
          ),
        ]),
      ]
    ),
    day(
      4,
      "Cabopino och Artolas luft",
      "Nu ska Marbella bli sand, trä och mjukare natur.",
      "Låg till medel",
      "Cabopino + Artola",
      "Dag fyra ger den bästa kontrasten till stadskärna och Banús: dyner, träspänger och en liten hamn som känns mycket mer andad.",
      "Låt det här vara dagens huvudspår och håll resten av planeringen tunn.",
      [
        section("Morgon", "Naturspår", "Bygg dagen kring det som känns mest öppet och lätt.", [
          stop(
            "artola-dunes",
            "Dunas de Artola och strandpromenaden på trä genom reservatet",
            "75-90 min",
            "Det här är en av Marbellas starkaste naturupplevelser och fungerar som en verklig omstart i kroppen.",
            "Gå långsamt och låt utsiktspunkterna få små pauser.",
            "Ta vatten och något litet om ni startar tidigt."
          ),
          stop(
            "cabopino-port",
            "Cabopinos lilla marina för lunch eller bara ett lugnare havsstopp",
            "60 min",
            "Hamnmiljön här känns mindre uppvisning och mer behagligt kustliv.",
            "Perfekt efter dynerna när ni vill sitta ner med utsikt.",
            "Fisklunch eller enkel strandmat passar bra."
          ),
          stop(
            "torre-ladrones",
            "Torre de los Ladrones om ni vill ge naturspåret en liten historisk höjdpunkt",
            "20-30 min",
            "Bra kort tillägg som gör Artola mer än bara strand och träspänger.",
            "Ta det som ett bonusstopp om energin finns, inte som ett krav.",
            "Fortsätt sedan mot lunch eller tillbaka till stranden."
          ),
        ]),
      ]
    ),
    day(
      5,
      "Välj ert Marbella-slut",
      "Sista dagen ska kännas som en genomtänkt final, inte som restpost.",
      "Valfri",
      "Flexibel",
      "När ni nu har både charm, hav och marina i kroppen vet ni bättre vilken sida av Marbella som ska få sista ordet.",
      "Avsluta med ett återbesök eller ett kort kulturspår och lämna gott om plats för avfärden.",
      [
        section("Morgon", "Välj den bästa tonen", "Låt sista dagen spegla den sida av Marbella ni faktiskt gillade mest.", [
          stop(
            "culture-flex",
            "Välj sista spår: gamla stan igen, Museo del Grabado, Ralli eller havsstråket från Alameda",
            "60-90 min",
            "En tydlig sista riktning ger bättre slut än att försöka täcka mer.",
            "Ta bara en sak här och gör den ordentligt.",
            "Låt lunchen bli en del av finalen."
          ),
        ]),
        section("Final", "Skydda rytmen hela vägen ut", "Sista timmarna ska vara enkla att tycka om.", [
          stop(
            "departure-buffer",
            "Packning, sista kaffe och transfer med god marginal",
            "45 min",
            "Bra avreselogistik skyddar hela resans efterkänsla.",
            "Låt hellre ett sista stopp falla bort än att slutet blir stressigt.",
            "Ät något ni vet fungerar nära avfärden."
          ),
        ]),
      ]
    ),
  ],
  areaCardsByDay: {
    "day-1": [
      area(
        "historic-intro",
        "Casco Antiguo",
        "Andalusisk charm",
        "Bästa första kvällsbilden av Marbella om du vill ha karaktär före glans.",
        "Håll radien liten och vacker.",
        ["Plaza", "Smågator", "Tapas"],
        46,
        40,
        mapLink("Plaza de los Naranjos Marbella")
      ),
      area(
        "naranjos-core",
        "Plaza de los Naranjos",
        "Social mittpunkt",
        "Ett perfekt kvällsnav som sätter rätt ton direkt.",
        "Bra för första sittpausen.",
        ["Torget", "Rådhuset", "Kvällsljus"],
        52,
        48,
        mapLink("Plaza de los Naranjos Marbella")
      ),
    ],
    "day-2": [
      area(
        "bazan-core",
        "Hospital BazÃ¡n och gamla stan",
        "Kultur i småskala",
        "Ger centrum både tyngd och charm utan att dagen blir museitung.",
        "Låt gränderna binda ihop stoppen.",
        ["Museo del Grabado", "Mur", "Gränder"],
        42,
        34,
        mapLink("Museo del Grabado Espanol Contemporaneo Marbella")
      ),
      area(
        "sea-axis",
        "Alameda till Avenida del Mar",
        "Skugga till hav",
        "Marbellas snyggaste stadsrörelse från grönska till öppen strandlinje.",
        "Bra lång eftermiddag utan stress.",
        ["Alameda", "Dalí", "Promenad"],
        60,
        54,
        mapLink("Avenida del Mar Marbella")
      ),
    ],
    "day-3": [
      area(
        "banus-track",
        "Puerto Banús",
        "Marina-glans",
        "Rätt dag när ni vill låta Marbella vara polerad och social.",
        "Ta det som ett helt block, inte ett snabbt kryss.",
        ["Yachter", "Kaj", "Kvällsdrink"],
        74,
        58,
        mapLink("Puerto Banus Marbella")
      ),
      area(
        "golden-mile-line",
        "Golden Mile-hållet",
        "Ljus resortrytm",
        "Bra för en mjuk förlängning om ni vill ge Banús mer luft.",
        "Skala bort det om dagen redan känns full.",
        ["Strand", "Promenad", "Lätt middag"],
        64,
        62,
        mapLink("Golden Mile Marbella")
      ),
    ],
    "day-4": [
      area(
        "artola-nature",
        "Dunas de Artola",
        "Sand och träspänger",
        "Ger resan ett mer naturligt och luftigt lager.",
        "Bra som dagens huvudspår.",
        ["Dyner", "Boardwalk", "Skylinefri paus"],
        26,
        44,
        mapLink("Dunas de Artola Marbella")
      ),
      area(
        "cabopino-marina",
        "Cabopino",
        "Liten hamn, stor vila",
        "Perfekt när ni vill avsluta naturspåret med lunch och hav.",
        "Låt hamnen få vara lågmäld.",
        ["Marina", "Lunch", "Bad"],
        34,
        60,
        mapLink("Puerto de Cabopino")
      ),
    ],
    "day-5": [
      area(
        "final-choice",
        "Er favoritton",
        "Personlig final",
        "Återbesök gör ofta Marbella starkare i minnet än ännu ett nytt stopp.",
        "Välj mellan charm, hav eller Banús-känsla.",
        ["Gamla stan", "Promenad", "Lunch"],
        48,
        44,
        mapLink("Marbella Old Town")
      ),
      area(
        "departure-soft",
        "Mjuk avfärd",
        "Lugn logistik",
        "Hjälper slutet att kännas lika polerat som resten av resan.",
        "Lägg transporten tidigt.",
        ["Packning", "Taxi", "Sista kaffe"],
        40,
        62,
        mapLink("Marbella taxi")
      ),
    ],
  },
  rainPlansByDay: {
    "day-1": rainPlan("Rain mode: håll första Marbella-dagen nära", "Gamla stan fungerar fint även i sämre väder om ni gör den tät och kort.", [
      "Prioritera Plaza de los Naranjos.",
      "Lägg mer tid på kaffe eller tapas under tak.",
      "Skippa längre kvällspromenad mot havet om vinden är hård.",
    ]),
    "day-2": rainPlan("Rain mode: låt kultur och park bära mer", "Dag två klarar väderomslag bra om ni håller er i centrum.", [
      "Ge Museo del Grabado mer tid.",
      "Ta Alameda som kort paus snarare än lång parkstund.",
      "Gå Avenida del Mar bara om regnet lättar.",
    ]),
    "day-3": rainPlan("Rain mode: gör Banús mer kompakt", "Marinan kan kännas rå i dåligt väder om ni stannar för länge.", [
      "Kortare pass i Banús.",
      "Ta lunch inomhus och skippa extra Golden Mile-stråk.",
      "Återvänd tidigare till centrum om det känns bättre.",
    ]),
    "day-4": rainPlan("Rain mode: byt natur mot favoritkvarter", "Cabopino blir mindre värt i hård vind eller regn.", [
      "Skippa Artola om vädret är stökigt.",
      "Bygg dagen kring gamla stan eller museum i stället.",
      "Låt lunch och kaffe bli dagens tydliga mittpunkt.",
    ]),
    "day-5": rainPlan("Rain mode: gör finalen så enkel som möjligt", "Sista dagen ska vara lätt även om vädret är grått.", [
      "Välj ett inomhusspår nära centrum.",
      "Lägg hemreselogistiken tidigt.",
      "Nöj er med ett bra sista minne.",
    ]),
  },
};

export const europeanGuideSeedsD = [esteponaSeed, marbellaSeed] as const;
