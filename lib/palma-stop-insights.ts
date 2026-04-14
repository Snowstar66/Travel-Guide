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

export const palmaStopInsights: Record<string, StopInsight> = {
  "palma-arrival-loop": {
    facts: [
      "Visit Palma lyfter promenad som ett av de bästa sätten att förstå staden, särskilt inne i gamla stan.",
      "Den officiella transportsidan beskriver EMT som stadens urbana bussnät och TIB som navet för längre ö-hopp från Plaça d'Espanya.",
    ],
    ideas: [
      "Spara hotellet, närmaste hållplats och ett kvällsstråk i mobilen direkt.",
      "Leta upp ett enkelt frukostställe redan första timmen så morgonen efter känns självklar.",
    ],
    links: [
      { label: "Hur man tar sig runt i Palma", url: "https://visitpalma.com/es/como-moverse-transporte/" },
      { label: "Visit Palma", url: "https://visitpalma.com/en/" },
    ],
  },
  "palma-old-town-first": {
    facts: [
      "Visit Palma beskriver gamla kvarteren som en stad av innergårdar, arkitektur och små gator som är värda att gå utan brådska.",
      "Palma lyftes av Visit Palma som en av Lonely Planets bästa stadsdestinationer för 2025, mycket tack vare mötet mellan kultur, gastronomi och hav.",
    ],
    ideas: [
      "Gå mer på känsla än på exakt rutt första kvällen.",
      "Ta en första kort omväg via Born eller Almudaina-gatorna om energin finns.",
    ],
    links: [
      { label: "Kultur- och stadsrutter i Palma", url: "https://www.visitpalma.com/en/discover/what-to-see-and-what-to-do/routes" },
      { label: "Visit Palma", url: "https://visitpalma.com/en/" },
    ],
  },
  "palma-parc-mar": {
    facts: [
      "Visit Palma lyfter katedralens siluett mot Parc de la Mar som en av stadens tydligaste signaturer.",
      "La Seu beskrivs som en av världens mest spektakulära gotiska katedraler och definierar Palmas skyline.",
    ],
    ideas: [
      "Stanna hellre lite längre här än att försöka pressa in ett extra stopp första kvällen.",
      "Gå fram och tillbaka några meter mellan vattnet och muren, det ändrar hela känslan av platsen.",
    ],
    links: [
      { label: "Tolv upplevelser i Palma", url: "https://www.visitpalma.com/en/discover/what-to-see-and-what-to-do/essential-experiences/pln523/doce-planes-en-palma-para-hacer-en-2022" },
      { label: "La Seu officiellt", url: "https://www.catedraldemallorca.org/en/" },
    ],
  },
  "palma-cathedral": {
    facts: [
      "Visit Palma beskriver La Seu som ett av stadens stora måste-besök och som en av de mest spektakulära gotiska katedralerna i världen.",
      "Katedralen ligger direkt vid bukten och får mycket av sin styrka just av placeringen mellan murar, vatten och stad.",
    ],
    ideas: [
      "Ta gärna utsidan och området runt Parc de la Mar även om ni också går in.",
      "Om ni vill hålla energin uppe: gör katedralen som huvudnummer och låt resten av förmiddagen vara lättare.",
    ],
    links: [
      { label: "La Seu officiellt", url: "https://www.catedraldemallorca.org/en/" },
      { label: "Visit Palma om katedralen", url: "https://www.visitpalma.com/en/discover/what-to-see-and-what-to-do/essential-experiences/pln523/doce-planes-en-palma-para-hacer-en-2022" },
    ],
  },
  "palma-almudaina": {
    facts: [
      "Visit Palma beskriver Almudaina som ett monument med romerskt ursprung, senare ombyggt av morerna och därefter anpassat som fästning.",
      "De öppna delarna inkluderar bland annat paradgården, Santa Anna-kapellet, islamiska bad och terrasser med utsikt över havet.",
    ],
    ideas: [
      "Ta palatset som ett mellanlångt stopp i stället för att försöka göra det till hela dagens centrum.",
      "Om benen är trötta räcker det långt att ta utsidorna och läget mellan palats och katedral.",
    ],
    links: [
      { label: "Almudaina via Visit Palma", url: "https://visitpalma.com/en/discover/what-to-see-and-what-to-do/palma-in-1-day/pln607/palace-of-la-almudaina-a-very-royal-palace" },
      { label: "Patrimonio Nacional", url: "https://www.patrimonionacional.es/visita/palacio-real-de-la-almudaina" },
    ],
  },
  "palma-arab-baths": {
    facts: [
      "Visit Palma kallar Arab Baths ett av de viktigaste arven från den moriska arkitekturen i hela Mallorca.",
      "Den bevarade centralsalen med kolonner gör stoppet litet till ytan men stort i atmosfär.",
    ],
    ideas: [
      "Gör det här tillsammans med grändpromenaden, inte som ett separat tungt block.",
      "Stanna gärna en stund i trädgården efteråt innan ni går vidare.",
    ],
    links: [
      { label: "Arab Baths via Visit Palma", url: "https://visitpalma.com/en/dir/arab-baths-the-moorish-footprint/" },
    ],
  },
  "palma-olivar-market": {
    facts: [
      "Mercat de l'Olivar beskrivs av Visit Palma som en rymlig och ljus marknad mitt i gamla stan.",
      "Marknaden har både tapas, smårätter att äta på plats och restauranger som kan tillaga råvaror ni köper nere i hallen.",
    ],
    ideas: [
      "Det här är ett bra stopp när lunchen ska få vara en upplevelse i sig.",
      "Gå ett varv först och välj sedan ett eller två ställen i lugn och ro.",
    ],
    links: [
      { label: "Mercat de l'Olivar", url: "https://visitpalma.com/en/food/pln690/mercat-de-l-olivar-an-experience-with-plenty-of-flavour" },
      { label: "Marknader i Palma", url: "https://visitpalma.com/en/markets/" },
    ],
  },
  "palma-bellver": {
    facts: [
      "Visit Palma beskriver Bellver som Palmas stora utsiktspunkt med unik 360-gradersvy över bukten och ön.",
      "Slottet är det enda gotiska slottet med cirkulär planlösning i Spanien och rymmer dessutom stadens historiska museum.",
    ],
    ideas: [
      "Gör Bellver tidigt på dagen innan värmen gör uppförsdelarna segare.",
      "Det här stoppet blir starkast när det får vara dagens tydliga wow-val och inte bara en snabb avstickare.",
    ],
    links: [
      { label: "Bellver Castle via Visit Palma", url: "https://visitpalma.com/en/dir/bellver-castle-the-best-views-of-palma/" },
      { label: "Bellver officiellt", url: "https://castelldebellver.palma.cat/" },
    ],
  },
  "palma-es-baluard": {
    facts: [
      "Es Baluard ligger integrerat i Sant Pere-bastionen, alltså i den renässansmur som en gång omgav Palma.",
      "Museet presenteras av Visit Palma som en av de tydliga samtidskonstinstitutionerna i Balearerna och som en plats där konst och murar möts.",
    ],
    ideas: [
      "Bra stopp när ni vill ha både utsikt och kultur utan att dagen blir museitung.",
      "Om ni inte går in kan ni fortfarande ta utsidan och murkänslan som ett starkt delstopp.",
    ],
    links: [
      { label: "Es Baluard via Visit Palma", url: "https://visitpalma.com/en/dir/es-baluard-museum-center-for-contemporary-creation/" },
      { label: "Baluard des Príncep", url: "https://www.visitpalma.com/en/discover/what-to-see-and-what-to-do/culture/pln515/baluard-des-princep" },
      { label: "Es Baluard officiellt", url: "https://esbaluard.org" },
    ],
  },
  "palma-santa-catalina": {
    facts: [
      "Visit Palma beskriver Mercat de Santa Catalina som modern och kosmopolitisk men fortfarande tydligt lokal i känslan.",
      "Marknadens närhet till La Lonja gör fisk och små kvällsstopp särskilt naturliga här, och lördagar lyfts som extra levande.",
    ],
    ideas: [
      "Perfekt kvällsstopp när ni vill låta mat, prat och tempo smälta ihop.",
      "Ta hellre ett glas och några små rätter än att försöka göra en lång restaurangrunda direkt.",
    ],
    links: [
      { label: "Mercat de Santa Catalina", url: "https://visitpalma.com/en/dir/mercat-de-santa-catalina-modernidad-y-tradicion-combinacion-perfecta/" },
      { label: "Marknader i Palma", url: "https://visitpalma.com/en/markets/" },
    ],
  },
  "palma-portixol": {
    facts: [
      "Palma Coastal Path är officiellt klassad som Sendero Azul och knyter ihop Portixol med Cala Estancia längs kusten.",
      "Visit Palma lyfter stråket som idealiskt både till fots och på cykel, med hav, natur och stadsfront i samma rörelse.",
    ],
    ideas: [
      "Det här stoppet mår bra av låg ambition och långsam fart.",
      "Gå så långt det känns härligt och vänd när känslan är som bäst, inte när kartan säger det.",
    ],
    links: [
      { label: "Palma Coastal Path", url: "https://www.visitpalma.com/en/discover/what-to-see-and-what-do/routes/pln651/palma-coastal-path-an-inspiring-stroll" },
      { label: "Palma som port till Mallorca", url: "https://visitpalma.com/en/gateway-to-mallorca/" },
    ],
  },
  "palma-sea-pause": {
    facts: [
      "Can Pere Antoni är över 700 meter lång och har ett ovanligt privilegium: utsikt mot katedralen från stranden.",
      "Stranden är lätt att nå både till fots och med cykel tack vare kustpromenaden som kopplar ihop den med längre havsstråk.",
    ],
    ideas: [
      "Du behöver inte bada för att stoppet ska vara värt det, det räcker ofta att sitta vid vattnet en stund.",
      "Bra läge för en medveten paus mitt i resan snarare än ännu en aktivitet.",
    ],
    links: [
      { label: "Can Pere Antoni", url: "https://visitpalma.com/en/dir/can-pere-antoni/" },
      { label: "Kuststråket i Palma", url: "https://www.visitpalma.com/en/discover/what-to-see-and-what-to-do/routes/pln651/palma-coastal-path-an-inspiring-stroll" },
    ],
  },
  "palma-la-lonja": {
    facts: [
      "Visit Palma beskriver La Lonja som ett andrum och ett mästerverk i civil gotik, byggt som mötesplats för köpmän.",
      "Platsen lyfts också fram som utgångspunkt för ett av stadens vackraste och mest levande kvällsområden.",
    ],
    ideas: [
      "Gå gärna in om öppettiderna passar, men även utsidan räcker långt i kvällsljus.",
      "La Lonja fungerar extra bra som lugn ingång till middag i området.",
    ],
    links: [
      { label: "La Lonja via Visit Palma", url: "https://visitpalma.com/en/discover/what-to-see-and-what-to-do/experiences/pln657/la-lonja-elegance-in-stone" },
    ],
  },
  "palma-museum-flex": {
    facts: [
      "Palmas styrka är att kulturutbudet spänner från renässansmurar och samtidskonst till Miró och små privata samlingar nära katedralen.",
      "Sista kulturdagen blir nästan alltid bättre när ni väljer ett enda tydligt ställe i stället för att börja samla för många namn.",
    ],
    ideas: [
      "Välj det museum som matchar energin: Miró om ni vill ha luft och ateljékänsla, Es Baluard för konst plus utsikt, Palau March för mindre skala och läge.",
      "Håll resten av dagen lätt runt kulturvalet så att finalen fortfarande känns som semester.",
    ],
    links: [
      { label: "Visit Palma", url: "https://visitpalma.com/en/" },
      { label: "Es Baluard", url: "https://esbaluard.org" },
      { label: "Fundació Miró Mallorca", url: "https://miromallorca.com/en/" },
    ],
  },
  "palma-favorite-return": {
    facts: [
      "Palma är en stad där återbesök ofta ger mer än ett sista nytt måste, just eftersom skala, ljus och stämning bär mycket av upplevelsen.",
      "Visit Palma beskriver staden som både urban och medelhavslugn, vilket gör favoritstråken väldigt värda att gå igen.",
    ],
    ideas: [
      "Välj det område ni spontant pratar om när ni säger att Palma kändes som bäst.",
      "Ge finalen form med en sista lunch eller glass i stället för ännu en lång lista.",
    ],
    links: [
      { label: "Visit Palma", url: "https://visitpalma.com/en/" },
    ],
  },
};

export const palmaStopPreviews: Record<string, StopInsightPreview> = {
  "palma-arrival-loop": {
    eyebrow: "Mjuk start",
    title: "Lär känna din egen radie",
    copy: "Ett tryggt närområde gör resten av Palma mycket lättare att njuta av.",
  },
  "palma-old-town-first": {
    eyebrow: "Första intryck",
    title: "Börja i gränderna",
    copy: "Palma känns bäst när gamla stan får komma långsamt, inte som en checklista.",
    imageUrl: commons("Lonja, Palma de Mallorca, España, 2022-10-06, DD 25-27 HDR.jpg"),
    imageAlt: "La Lonja och den gotiska stadsmiljön i Palma.",
  },
  "palma-parc-mar": {
    eyebrow: "Kvällsljus",
    title: "La Seu från vattnet",
    copy: "Parc de la Mar ger dig Palmas skyline på ett lugnt och väldigt minnesvärt sätt.",
    imageUrl: commons("Seu de Mallorca (Palma) - 1.jpg"),
    imageAlt: "Katedralen La Seu sedd från Parc de la Mar.",
  },
  "palma-cathedral": {
    eyebrow: "Stor ikon",
    title: "La Seu bär hela staden",
    copy: "Det här är stoppet som gör Palmas blandning av sten, hav och ljus helt tydlig.",
    imageUrl: commons("Seu de Mallorca (Palma) - 1.jpg"),
    imageAlt: "Katedralen La Seu i Palma de Mallorca.",
  },
  "palma-almudaina": {
    eyebrow: "Kungligt lager",
    title: "Palats med hav i ryggen",
    copy: "Almudaina ger både makthistoria och utsikt utan att kräva ett halvdagsblock.",
  },
  "palma-arab-baths": {
    eyebrow: "Tyst historia",
    title: "Litet stopp, stor atmosfär",
    copy: "Arab Baths är små till formatet men ger en tät känsla av det äldre Palma.",
  },
  "palma-olivar-market": {
    eyebrow: "Matlust",
    title: "Låt lunchen bli ett stopp",
    copy: "Mercat de l'Olivar är perfekt när ni vill äta gott utan att lämna stadens puls.",
  },
  "palma-bellver": {
    eyebrow: "Utsikt",
    title: "Se hela bukten på en gång",
    copy: "Bellver gör Palma större och mer begripligt på samma gång.",
    imageUrl: commons("Bellver Castle 2008 Palma Mallorca 176.JPG"),
    imageAlt: "Bellver Castle i Palma.",
  },
  "palma-es-baluard": {
    eyebrow: "Konst + murar",
    title: "Samtidskonst med stadsluft",
    copy: "Es Baluard fungerar extra bra när ni vill ha kultur utan att tappa utsikten.",
    imageUrl: commons("Es Baluard Palma de Mallorca 03.jpg"),
    imageAlt: "Es Baluard i Palma.",
  },
  "palma-santa-catalina": {
    eyebrow: "Kvällspuls",
    title: "Marknad, glas och långsam rytm",
    copy: "Santa Catalina gör Palma mer social och mindre monumental.",
  },
  "palma-portixol": {
    eyebrow: "Havsdag",
    title: "Portixol säljer in lugnet",
    copy: "Det här stråket är Palma när staden slappnar av och semestern tar över.",
    imageUrl: commons("PortixolPalma.jpg"),
    imageAlt: "Portixol och havsstråket i Palma.",
  },
  "palma-sea-pause": {
    eyebrow: "Luft",
    title: "Havspaus med katedralvy",
    copy: "Can Pere Antoni är perfekt när ni vill låta kroppen hinna ikapp allt fint.",
  },
  "palma-la-lonja": {
    eyebrow: "Kvällssten",
    title: "La Lonja gör kvällen snygg",
    copy: "Några lugna varv här räcker långt innan middag eller ett sista glas.",
    imageUrl: commons("Lonja, Palma de Mallorca, España, 2022-10-06, DD 25-27 HDR.jpg"),
    imageAlt: "La Lonja i Palma.",
  },
  "palma-museum-flex": {
    eyebrow: "Populära val",
    title: "Välj ett kulturspår med känsla",
    copy: "Palma blir bättre av ett valt museum än tre halvhjärtade kulturförsök.",
  },
  "palma-favorite-return": {
    eyebrow: "Final",
    title: "Gå tillbaka till det bästa",
    copy: "Det som redan känts rätt är ofta den bästa sista bilden av Palma.",
  },
};

const palmaMuseumChoiceOptions: StopChoiceOption[] = [
  {
    id: "fundacio-miro-mallorca",
    title: "Fundació Miró Mallorca",
    summary: "Bäst om du vill ha Mirós ateljékänsla, havsnära läge och en lugnare kulturfinal.",
    url: "https://miromallorca.com/en/",
    sourceLabel: "Officiell sida",
    sourceUrl: "https://miromallorca.com/en/",
  },
  {
    id: "es-baluard",
    title: "Es Baluard",
    summary: "Starkast när du vill ha samtidskonst, murar och utsikt i samma upplevelse.",
    url: "https://esbaluard.org",
    sourceLabel: "Visit Palma",
    sourceUrl: "https://visitpalma.com/en/dir/es-baluard-museum-center-for-contemporary-creation/",
  },
  {
    id: "palau-march",
    title: "Palau March",
    summary: "Ett mindre och elegantare val nära katedralen, perfekt om du vill avsluta kulturellt utan att göra dagen tung.",
    url: "http://www.fundacionbmarch.es/",
    sourceLabel: "Visit Palma",
    sourceUrl: "https://www.visitpalma.com/es/descubrir/que-ver-y-que-hacer/palma-en-2-dias/pln601/palau-march",
  },
];

export const palmaStopChoiceOptions: Record<string, StopChoiceOption[]> = {
  "palma-museum-flex": palmaMuseumChoiceOptions,
};
