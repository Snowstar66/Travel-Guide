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

export const marbellaStopInsights: Record<string, StopInsight> = {
  "marbella-arrival-loop": {
    facts: [
      "Marbellas centrala promenadlogik fungerar bäst när du förstår hur gamla stan, Alameda och havsstråket sitter ihop.",
      "Det är ofta den enkla riktningen mot Plaza de los Naranjos och Avenida del Mar som gör resten lätt att bära.",
    ],
    ideas: [
      "Spara gamla stan och strandlinjen som två tydliga ankare redan första timmen.",
      "Markera var ni helst tar första frukosten innan dag två börjar.",
    ],
    links: [{ label: "Turismo Marbella", url: "https://turismo.marbella.es/" }],
  },
  "marbella-old-town-first": {
    facts: [
      "Casco histórico är Marbellas tydligaste motvikt till marina-glansen längre västerut.",
      "Styrkan sitter i smågator, skuggade hörn och den andalusiska stadskänslan snarare än i stora enskilda monument.",
    ],
    ideas: [
      "Låt första promenaden vara kort och njutbar, inte systematisk.",
      "Bra område att återvända till senare om ni fastnar för stadens varma sida.",
    ],
    links: [{ label: "Turismo Marbella", url: "https://turismo.marbella.es/" }],
  },
  "marbella-castle-walls": {
    facts: [
      "Turismo Marbella beskriver Castillo de Marbella som det viktigaste bevarade muslimska arvet i stadens centrum.",
      "Murarna ligger insydda i casco historico, vilket gor stoppet ovanligt latt att lagga in i en vanlig kvallspromenad.",
    ],
    ideas: [
      "Bra forsta kvallsstopp nar ni vill ge gamla stan lite mer historisk tyngd.",
      "Ta det har som en kort forstarkning av promenaden, inte som eget tungt block.",
    ],
    links: [
      { label: "Castillo de Marbella", url: "https://turismo.marbella.es/vive/cultura/patrimonio-historico/casco-historico/castillo-de-marbella-alcazaba-y-muralla.html" },
    ],
  },
  "marbella-plaza-naranjos": {
    facts: [
      "Plaza de los Naranjos fungerar som den historiska och sociala mittpunkten i gamla Marbella.",
      "Turistinformationen ligger också här, vilket säger en del om hur central platsen är i stadens eget självporträtt.",
    ],
    ideas: [
      "Använd torget som kvällens lugna nav snarare än som fotostopp att beta av.",
      "Bra plats att börja eller avsluta gamla stans promenad.",
    ],
    links: [
      { label: "Turistinformation Plaza de los Naranjos", url: "https://turismo.marbella.es/servicios/oficinas-de-informacion-turistica/plaza-de-los-naranjos.html" },
    ],
  },
  "marbella-museum-grabado": {
    facts: [
      "Turismo Marbella beskriver Hospital Bazán som ett renässanshus med tydlig gotisk-mudéjarprägel.",
      "Museo del Grabado ligger mitt i gamla stan nära murrester och Encarnación-kyrkan, vilket gör stoppet lätt att väva in.",
    ],
    ideas: [
      "Bra val när ni vill ge gamla stan något mer än bara restaurang- och shoppingkänsla.",
      "Ta museet som ett huvudstopp i centrum, inte som extralager ovanpå för mycket annat.",
    ],
    links: [
      { label: "Hospital Bazán - Museo del Grabado", url: "https://turismo.marbella.es/vive/cultura/patrimonio-historico/casco-historico/hospital-bazan-museo-del-grabado.html" },
    ],
  },
  "marbella-encarnacion": {
    facts: [
      "Encarnacion-kyrkan ar en av de mest synliga historiska punkterna i gamla Marbella och tornar upp sig over de mindre granderna runtom.",
      "Plaza del Altamirano lyfts av Turismo Marbella just for utsikten mot kyrktornet genom stadsvaven.",
    ],
    ideas: [
      "Perfekt mellan museum och park nar ni vill halla allt inom samma historiska karna.",
      "Lat torgrummen runt kyrkan vara en del av stoppet, inte bara byggnaden i sig.",
    ],
    links: [
      { label: "Plaza del Altamirano", url: "https://turismo.marbella.es/vive/cultura/patrimonio-historico/casco-historico/plaza-del-altamirano.html" },
    ],
  },
  "marbella-alameda": {
    facts: [
      "Parque de la Alameda fungerar som den gröna övergången mellan centrum och havsaxeln.",
      "Skugga och sittplatser gör den särskilt användbar när ni vill hålla tempot mänskligt mitt på dagen.",
    ],
    ideas: [
      "Sitt en stund här i stället för att bara passera igenom.",
      "Bra plats att samla energi innan ni går vidare mot havet.",
    ],
    links: [{ label: "Turismo Marbella", url: "https://turismo.marbella.es/" }],
  },
  "marbella-avenida-del-mar": {
    facts: [
      "Turismo Marbella beskriver Avenida del Mar som länken mellan Alameda och Paseo Marítimo.",
      "Sidan lyfter också att stråket pryds av tio Salvador Dalí-skulpturer i brons.",
    ],
    ideas: [
      "Ta detta som ett riktigt stadsrum, inte bara korridor på väg till stranden.",
      "Bra plats för kvällsljus och foto utan att behöva gå långt.",
    ],
    links: [
      { label: "Avenida del Mar", url: "https://turismo.marbella.es/vive/naturaleza/parques-y-jardines/avenida-del-mar.html" },
    ],
  },
  "marbella-paseo-maritimo": {
    facts: [
      "Marbellas centrala strandpromenad ger er samma havskänsla som resortdelen men med centrum nära inpå.",
      "Det är ofta här staden landar bäst i kroppen efter gamla stan och kulturspår.",
    ],
    ideas: [
      "Låt promenaden vara målet i sig, inte bara transport till lunch.",
      "Gå tills havstonen sitter och vänd sedan tillbaka utan dåligt samvete.",
    ],
    links: [{ label: "Turismo Marbella", url: "https://turismo.marbella.es/" }],
  },
  "marbella-favorite-return": {
    facts: [
      "Marbella blir tydligare när ni låter en favoritdel få komma tillbaka i stället för att hela tiden byta ton.",
      "Gamla stan, Avenida del Mar och havssidan ger tre tydligt olika men lika rimliga finalspår.",
    ],
    ideas: [
      "Välj det som redan känns mest ni, inte det som låter mest exklusivt på papper.",
      "En lugn frukost här kan göra hela Puerto Banús-dagen bättre.",
    ],
    links: [{ label: "Turismo Marbella", url: "https://turismo.marbella.es/" }],
  },
  "marbella-ralli-museum": {
    facts: [
      "Museo Ralli Marbella ar ett etablerat konststopp om ni vill ge staden ett mer internationellt konstlager.",
      "Det fungerar sarskilt bra som motvikt till Banus eftersom dagen da far mer innehall an bara marina-glans.",
    ],
    ideas: [
      "Bra val om ni vill att Marbella ocksa ska kannas kulturellt kuraterad.",
      "Ta det har fore Puerto Banus, inte efter, om ni vill behalla dagen latt.",
    ],
    links: [
      { label: "Museo Ralli Marbella", url: "https://rallimuseums.com/marbella/" },
    ],
  },
  "marbella-puerto-banus": {
    facts: [
      "Puerto Banús är Marbellas mest polerade marinaadress och ett tydligt mål i sig.",
      "Den officiella strandinformationen lyfter tillgänglighet och blå flagg på Puerto Banús-sidan, vilket säger något om hur etablerat området är som besökszon.",
    ],
    ideas: [
      "Gå hit för atmosfär, båtar och folkspaning snarare än för att göra det till kulturdag.",
      "Det räcker långt att gå kajerna, sitta en stund och låta glansen vara hela poängen.",
    ],
    links: [
      { label: "Puerto Banús - Levante", url: "https://turismo.marbella.es/vive/mar/playas/puerto-banus.html" },
    ],
  },
  "marbella-golden-mile": {
    facts: [
      "Golden Mile-hållet fungerar bäst som förlängning av Banús eller en promenadton, inte som egen sightseeinglista.",
      "Det är rörelsen mellan resortkänsla, hav och ljus som gör stråket intressant.",
    ],
    ideas: [
      "Lägg bara till detta om ni fortfarande har energi efter Banús.",
      "Bra för en lugn hemväg eller en lätt middag snarare än fler beslut.",
    ],
    links: [{ label: "Turismo Marbella", url: "https://turismo.marbella.es/" }],
  },
  "marbella-artola-dunes": {
    facts: [
      "Det officiella stora turistplan-dokumentet för Marbella beskriver Dunas de Artola som ett skyddat naturmonument med 2,8 km träspänger som del av Senda Litoral.",
      "Samma dokument lyfter också Torre de los Ladrones som ett historiskt inslag i samma landskap.",
    ],
    ideas: [
      "Bra när ni vill ge resan ett luftigt naturspår utan att lämna kusten helt.",
      "Låt träspängerna och pauserna vara viktigare än hur långt ni går.",
    ],
    links: [
      { label: "Plan Turístico de Grandes Ciudades", url: "https://turismo.marbella.es/images/media/attachments/servicios/area-profesional/5091_plan-turistico-de-grandes-ciud/02_PTGC_Marbella.pdf" },
    ],
  },
  "marbella-cabopino-port": {
    facts: [
      "Cabopino ger en mindre, mjukare marina än Banús och fungerar därför fint efter naturspåret i Artola.",
      "Det här är ett bra område för lunch eftersom miljön redan gör halva jobbet.",
    ],
    ideas: [
      "Stanna här när ni vill landa dagen, inte för att lägga på ännu ett stort block.",
      "Perfekt för lång lunch eller bara en sen kaffe vid båtarna.",
    ],
    links: [{ label: "Turismo Marbella", url: "https://turismo.marbella.es/" }],
  },
  "marbella-torre-ladrones": {
    facts: [
      "Det officiella turistplandokumentet for Marbella lyfter Torre de los Ladrones som del av samma Artola-landskap som dynerna och traspangarna.",
      "Det gor tornet till ett bra litet historiskt ankare mitt i ett annars mycket naturbetonat spar.",
    ],
    ideas: [
      "Lagg till det har om ni vill ge Cabopino-dagen lite mer berattelse utan att forstora lugnet.",
      "Bra kort stopp, inte nagot som behover bara dagen.",
    ],
    links: [
      { label: "Plan Turistico de Grandes Ciudades", url: "https://turismo.marbella.es/images/media/attachments/servicios/area-profesional/5091_plan-turistico-de-grandes-ciud/02_PTGC_Marbella.pdf" },
    ],
  },
  "marbella-culture-flex": {
    facts: [
      "Marbellas bästa slutspår brukar vara tydligt: gamla stan, ett kulturstopp eller havsaxeln från Alameda.",
      "Museo del Grabado, Museo Ralli och centrumstråken ger fler riktiga slutspår än vad staden först signalerar.",
    ],
    ideas: [
      "Välj det spår som känns lättast att lämna efter lunch.",
      "Bygg inte sista dagen kring flera förflyttningar om ni inte måste.",
    ],
    links: [
      { label: "Hospital Bazán - Museo del Grabado", url: "https://turismo.marbella.es/vive/cultura/patrimonio-historico/casco-historico/hospital-bazan-museo-del-grabado.html" },
      { label: "Avenida del Mar", url: "https://turismo.marbella.es/vive/naturaleza/parques-y-jardines/avenida-del-mar.html" },
      { label: "Museo Ralli Marbella", url: "https://rallimuseums.com/marbella/" },
    ],
  },
};

export const marbellaStopPreviews: Record<string, StopInsightPreview> = {
  "marbella-arrival-loop": {
    eyebrow: "Mjuk start",
    title: "Förstå riktningen först",
    copy: "När gamla stan och havsstråket sitter känns resten av Marbella mycket lättare.",
  },
  "marbella-old-town-first": {
    eyebrow: "Casco histórico",
    title: "Börja med charm före glans",
    copy: "Gamla Marbella ger staden värme direkt.",
    imageUrl: commons("Marbella - Old Town (5534613312).jpg"),
    imageAlt: "Gamla stan i Marbella.",
  },
  "marbella-castle-walls": {
    eyebrow: "Historia",
    title: "Murarna gör gamla stan rikare",
    copy: "Castillo och murarna ger kvällspromenaden mer tyngd än bara charm.",
  },
  "marbella-plaza-naranjos": {
    eyebrow: "Torgliv",
    title: "Sätt tonen på Orange Square",
    copy: "Plaza de los Naranjos är den mjuka mittpunkt som gör staden lätt att komma in i.",
    imageUrl: commons("Plaza de los Naranjos3.jpg"),
    imageAlt: "Plaza de los Naranjos i Marbella.",
  },
  "marbella-museum-grabado": {
    eyebrow: "Kulturkärna",
    title: "Gamla stan får mer djup",
    copy: "Museo del Grabado ger centrum ett riktigt kulturstopp utan att bryta rytmen.",
  },
  "marbella-encarnacion": {
    eyebrow: "Kyrkorum",
    title: "Ett torn som samlar kvarteren",
    copy: "Encarnación ger gamla stan ett tydligt historiskt nav mitt i gränderna.",
  },
  "marbella-alameda": {
    eyebrow: "Skugga",
    title: "En liten park med stor nytta",
    copy: "Alameda fungerar som perfekt andningsrum mitt i dagen.",
    imageUrl: commons("Marbella - Parque de la Alameda 10.jpg"),
    imageAlt: "Parque de la Alameda i Marbella.",
  },
  "marbella-avenida-del-mar": {
    eyebrow: "Signaturstråk",
    title: "Dalí på väg mot havet",
    copy: "Avenida del Mar är Marbellas snyggaste övergång från stad till strand.",
    imageUrl: commons("Marbella 2015 10 20 1743 (24646806321).jpg"),
    imageAlt: "Avenida del Mar i Marbella.",
  },
  "marbella-paseo-maritimo": {
    eyebrow: "Havsrytm",
    title: "Promenaden gör jobbet",
    copy: "Här landar Marbella bäst i kroppen efter gamla stan.",
  },
  "marbella-puerto-banus": {
    eyebrow: "Polerad dos",
    title: "Banús med rätt förväntan",
    copy: "Gå hit för atmosfär och marina-ljus, inte för att göra det större än det behöver vara.",
    imageUrl: commons("Marbella Puerto Banús.jpg"),
    imageAlt: "Puerto Banús i Marbella.",
  },
  "marbella-ralli-museum": {
    eyebrow: "Konstspår",
    title: "Mjuk upp Banús-dagen med konst",
    copy: "Museo Ralli ger en helt annan ton innan marinan tar över.",
  },
  "marbella-golden-mile": {
    eyebrow: "Förlängning",
    title: "Lite mer hav och resortton",
    copy: "Golden Mile fungerar bäst som mjuk extra luft efter Banús.",
  },
  "marbella-artola-dunes": {
    eyebrow: "Naturspår",
    title: "Trä, sand och öppet hav",
    copy: "Artola ger resan ett helt annat andrum än centrum och marinan.",
  },
  "marbella-cabopino-port": {
    eyebrow: "Lugn marina",
    title: "Cabopino mjukar upp allt",
    copy: "Den lilla hamnen här är precis rätt efter dyner och träspänger.",
  },
  "marbella-torre-ladrones": {
    eyebrow: "Liten bonus",
    title: "Artola får historia också",
    copy: "Tornet ger naturdagen ett kort men meningsfullt extra lager.",
  },
  "marbella-culture-flex": {
    eyebrow: "Final",
    title: "En tydlig sista riktning",
    copy: "Välj charm, kultur eller havsstråk och låt resten vara enkelt.",
  },
};

const marbellaCityChoiceOptions: StopChoiceOption[] = [
  {
    id: "old-town-again",
    title: "Gamla stan igen",
    summary: "Bäst om ni vill ha den varma, mänskliga sidan av Marbella en gång till.",
    url: "https://www.google.com/maps/search/?api=1&query=Plaza+de+los+Naranjos+Marbella",
    sourceLabel: "Trip Companion-spår",
    sourceUrl: "https://www.google.com/maps/search/?api=1&query=Plaza+de+los+Naranjos+Marbella",
  },
  {
    id: "avenida-del-mar",
    title: "Avenida del Mar",
    summary: "Bra om ni vill ha elegant havsaxel, konst och enkel promenadlogik.",
    url: "https://turismo.marbella.es/vive/naturaleza/parques-y-jardines/avenida-del-mar.html",
    sourceLabel: "Turismo Marbella",
    sourceUrl: "https://turismo.marbella.es/vive/naturaleza/parques-y-jardines/avenida-del-mar.html",
  },
  {
    id: "puerto-banus",
    title: "Puerto Banús",
    summary: "Rätt om ni vill ge resan ett glansigare sista kapitel.",
    url: "https://turismo.marbella.es/vive/mar/playas/puerto-banus.html",
    sourceLabel: "Turismo Marbella",
    sourceUrl: "https://turismo.marbella.es/vive/mar/playas/puerto-banus.html",
  },
  {
    id: "cabopino",
    title: "Cabopino / Artola",
    summary: "Starkast när ni vill avsluta mjukare och mer luftigt.",
    url: "https://turismo.marbella.es/images/media/attachments/servicios/area-profesional/5091_plan-turistico-de-grandes-ciud/02_PTGC_Marbella.pdf",
    sourceLabel: "Turismo Marbella",
    sourceUrl: "https://turismo.marbella.es/images/media/attachments/servicios/area-profesional/5091_plan-turistico-de-grandes-ciud/02_PTGC_Marbella.pdf",
  },
];

const marbellaCultureChoiceOptions: StopChoiceOption[] = [
  {
    id: "museo-grabado",
    title: "Museo del Grabado",
    summary: "Bäst om ni vill hålla er i gamla stan och ge Marbella ett riktigt centrumkulturspår.",
    url: "https://turismo.marbella.es/vive/cultura/patrimonio-historico/casco-historico/hospital-bazan-museo-del-grabado.html",
    sourceLabel: "Turismo Marbella",
    sourceUrl: "https://turismo.marbella.es/vive/cultura/patrimonio-historico/casco-historico/hospital-bazan-museo-del-grabado.html",
  },
  {
    id: "museo-ralli",
    title: "Museo Ralli",
    summary: "Bra om ni vill ge dagen mer internationell konstton före eller i stället för Banús.",
    url: "https://rallimuseums.com/marbella/",
    sourceLabel: "Museo Ralli",
    sourceUrl: "https://rallimuseums.com/marbella/",
  },
  {
    id: "castillo-muralla",
    title: "Murarna och alcazaban",
    summary: "Starkast om ni vill ge gamla stan mer historisk ryggrad utan att dagen blir tung.",
    url: "https://turismo.marbella.es/vive/cultura/patrimonio-historico/casco-historico/castillo-de-marbella-alcazaba-y-muralla.html",
    sourceLabel: "Turismo Marbella",
    sourceUrl: "https://turismo.marbella.es/vive/cultura/patrimonio-historico/casco-historico/castillo-de-marbella-alcazaba-y-muralla.html",
  },
  {
    id: "encarnacion",
    title: "Encarnación-kyrkan",
    summary: "Bra när ni vill hålla kulturen kort, central och tydligt historisk.",
    url: "https://turismo.marbella.es/vive/cultura/patrimonio-historico/casco-historico/plaza-del-altamirano.html",
    sourceLabel: "Turismo Marbella",
    sourceUrl: "https://turismo.marbella.es/vive/cultura/patrimonio-historico/casco-historico/plaza-del-altamirano.html",
  },
];

export const marbellaStopChoiceOptions: Record<string, StopChoiceOption[]> = {
  "marbella-museum-grabado": marbellaCultureChoiceOptions,
  "marbella-castle-walls": marbellaCultureChoiceOptions,
  "marbella-encarnacion": marbellaCultureChoiceOptions,
  "marbella-ralli-museum": marbellaCultureChoiceOptions,
  "marbella-favorite-return": marbellaCityChoiceOptions,
  "marbella-culture-flex": marbellaCityChoiceOptions,
  "marbella-puerto-banus": marbellaCityChoiceOptions,
  "marbella-artola-dunes": marbellaCityChoiceOptions,
};
