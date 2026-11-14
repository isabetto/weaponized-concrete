export const projects = [
  {
    slug: 'langspeelplaat',
    type: 'Website',
    tone: 'butter',
    summary: 'Herontwerp van de website om nieuwe klanten te trekken.',
    skills: ['UI-ontwerp', 'Website-ontwerp', 'Prototyping', 'Visuele communicatie'],
    title: 'Stichting de Langspeelplaat',
    image: '/langspeelplaat-screenshot.png',
    screens: ['/langspeelplaat-screenshot.png'],
    before: {
      src: '/langspeelplaat/oude-site.jpg',
      alt: 'De oude website van Stichting de Langspeelplaat: een witte pagina met een rode titel, vier albumhoezen en een grijs blok met tekst over de vinylzaak.',
    },
    steps: [
      {
        title: 'Gesprek met de eigenaar',
        text: [
          'Ik begon met een **gesprek met Jos**, de eigenaar van de platenzaak, over wat hij van de nieuwe website verwachtte. De site moest **nieuwe klanten naar de winkel trekken** en vooral werken als **visitekaartje**.',
          'Dat betekende dat de **openingstijden, de locatie en de sfeer** van de winkel meteen te vinden moesten zijn.',
        ],
      },
      {
        title: 'Brandbook',
        text: [
          'Op basis van het gesprek maakte ik een **brandbook**: een vast **kleurenpalet** met oranje en donker-, middel- en lichtgrijs, de lettertypes **Anton en Antonio**, de **halftone-draaitafel** als beeldstijl en foto’s van Jos en de winkel.',
          'Zo kunnen de website en alles wat daarna komt **dezelfde herkenbare stijl** houden.',
        ],
        image: {
          src: '/langspeelplaat/brandbook.jpg',
          narrow: true,
          alt: 'Brandbook van de Langspeelplaat: de titel in oranje, een halftone draaitafel, een foto van Jos in de winkel, een voorbeeld van een vinylwebsite, het kleurenpalet (#ec6144, #1d1c1c, #4d4d4d, #888888, #e2e2e2), de lettertypes Anton en Antonio en een zwart-witportret van Jos.',
        },
      },
      {
        title: 'Wireframe',
        text: [
          'Daarna zette ik de opbouw van de pagina in een **wireframe in Figma**: de bezoeker leert van boven naar beneden de winkel kennen, ziet de reviews en vindt tot slot de openingstijden, de kaart en de contactgegevens.',
          'Zo legde ik de **volgorde en indeling** vast voordat er kleur en beeld bij kwamen.',
        ],
        image: {
          src: '/langspeelplaat/wireframe.png',
          alt: 'Wireframe van de homepage met alleen vlakken en lijnen in grijstinten: header, hero met knop en afbeelding, een blok met afbeelding en tekst, een foto over de volle breedte, een reviewblok, openingstijden naast een kaart, een contactblok en een footer.',
        },
      },
    ],
    result: {
      text: [
        'Het resultaat is een **nieuw websiteontwerp** dat de winkel laat zien zoals die is: **gezellig, persoonlijk** en gerund door Jos. Bezoekers zien meteen waar de winkel voor staat, lezen het verhaal van Jos, vinden de reviews en weten **direct wanneer de winkel open is en hoe ze er komen**.',
        'Het brandbook zorgt ervoor dat de stichting ook buiten de website met **dezelfde kleuren, lettertypes en beeldstijl** kan blijven werken.',
      ],
      image: {
        src: '/langspeelplaat/resultaat.jpg',
        alt: 'Het nieuwe ontwerp van de website: een donkere hero met oranje titel en halftone-draaitafel, gevolgd door het stuk over Jos met een foto van hem met kleurrijke platen.',
      },
    },
    preview: {
      kind: 'site',
      alt: 'De website van Stichting de Langspeelplaat: een donkere startpagina met een draaitafel, een stukje over eigenaar Jos, reviews, openingstijden met kaart en contactgegevens.',
    },
    video: '/langspeelplaat-demo.mp4',
    details: [
      'Voor een lokale platenzaak heb ik een **nieuwe website** ontworpen.',
      'De website dient vooral als **visitekaartje**, met **openingstijden, locatie en de sfeer van de winkel**.',
    ],
  },
  {
    slug: 'base-app',
    type: 'Mobiele app',
    tone: 'olive',
    summary: 'Een app die jongeren op een laagdrempelige manier leert over toeslagen.',
    skills: ['UX/UI-ontwerp', 'Prototyping: high-fidelity', 'Usability- en UX-testen', 'Interactieontwerp'],
    title: 'BASE',
    image: '/base-wide.png',
    screens: ['/base-app-screens.png'],
    aside: {
      label: 'Onderzoeksvraag',
      text: 'Hoe kunnen we jongvolwassenen op een leuke en speelse manier leren over de verschillende toeslagen?',
    },
    steps: [
      {
        title: 'Onderzoek',
        text: [
          'We **interviewden vijf groepen mensen** over toeslagen: waar ze hun kennis vandaan halen, hoe expats ze ervaren, hoe bekend ze zijn bij mensen in verschillende leefsituaties, hoe begrijpelijk de informatie is en wat het leren leuk maakt.',
          'Wat we vonden: de informatie van de overheid werd **te uitgebreid, ingewikkeld en overweldigend** gevonden, de meeste mensen leren over toeslagen **via vrienden en familie**, en **humor** wordt bij dit onderwerp juist als **ongepast** gezien.',
        ],
      },
      {
        title: 'Concept en eisen',
        text: [
          'Uit die inzichten ontstond het concept: een app waarin je je **informeert** over toeslagen, je kennis **test met een quiz**, je recht en bedrag **berekent**, een toeslag **aanvraagt** en **meldingen** instelt. Via een **buddy en workshops** kom je bovendien in contact met experts en anderen.',
          'We maakten een empathy map en twee persona’s, een internationale en een Nederlandse student, en legden de eisen vast volgens **MoSCoW**. **Duidelijke informatie** en **informatie per leefsituatie** waren daarbij must-haves.',
        ],
      },
      {
        title: 'Prototype',
        text: [
          'Eerst bouwden we een interactieve **low-fidelity wireframe** op basis van onze schetsen, om de bruikbaarheid te kunnen testen. Daarna werkten we die uit tot een **high-fidelity prototype in Figma**.',
          'Het prototype heeft een intro, een wiki, een quiz, een calculator, een aanvraagroute, workshops en een buddy.',
        ],
        image: {
          src: '/base/overzicht.jpg',
          alt: 'Zes schermen van de BASE-app: het startscherm met een spaarvarken, de keuze van je situatie, het hoofdmenu, de wiki, een quizvraag en de calculator.',
        },
      },
      {
        title: 'Testen',
        text: [
          'We testten het prototype op twee manieren: **taakgerichte gebruikerstests**, waarbij deelnemers uit de doelgroep **hardop dachten**, en een **enjoyability-survey** over hoe prettig de app is. De deelnemers hadden verschillende achtergronden en leeftijden.',
          'De taken waren onder meer een buddy zoeken, informatie over de zorgtoeslag opzoeken, je toeslag berekenen en de workshop- en quizpagina vinden.',
          '**Iedereen kon de taken afronden.** Wat opviel: er was **geen goede terugknop** naar het menu, sommige **menutitels waren onduidelijk** en een deelnemer **wist niet hoe te beginnen**. De **grafiek** bij het recht op toeslag vond men juist **duidelijk**.',
        ],
      },
    ],
    result: {
      text: [
        'Over het algemeen vonden gebruikers de app **makkelijk te gebruiken en prettig**. Er bleef ruimte voor verbetering: de **tekst op de wikipagina was te dicht**, sommige gebruikers vonden de **kleuren kinderlijk** en het **hoofdmenu verwarrend**.',
        'Onze aanbevelingen: de uitleg **opdelen in korte, visuele stukjes**, zoals Instagram- of TikTok-verhalen, onderzoeken welke **menutitels en volgorde** voor de doelgroep werken, en een **onboarding** en een **terugknop** toevoegen.',
      ],
      image: {
        src: '/base/resultaat.jpg',
        alt: 'Drie schermen van BASE: de quiz afgerond met een groen vinkje, de calculator en de uitkomst met het bedrag per maand.',
      },
    },
    preview: {
      kind: 'app',
      screens: [
        { src: '/base/splash.jpg', alt: 'Startscherm van BASE met een spaarvarken en de tekst Your tax benefit Companion' },
        { src: '/base/intro1.jpg', alt: 'Taalkeuze met de vlaggen van Nederland, het Verenigd Koninkrijk, Griekenland en Frankrijk' },
        { src: '/base/intro2.jpg', alt: 'Keuze van situaties: werk, huur, kinderen en zorg' },
        { src: '/base/home.jpg', alt: 'Startscherm met Wiki, Quiz, Calculator, Apply, Workshop en Buddy' },
        { src: '/base/wiki.jpg', alt: 'Wiki met de toeslagen die bij jouw situatie passen' },
        { src: '/base/quiz.jpg', alt: 'Quizvraag over welke factoren de zorgtoeslag beïnvloeden' },
        { src: '/base/welldone.jpg', alt: 'Quiz afgerond met een groen vinkje' },
        { src: '/base/calc.jpg', alt: 'Calculator waarin je je geschatte inkomen invult' },
        { src: '/base/eligible.jpg', alt: 'Uitkomst: je komt in aanmerking, met het bedrag per maand' },
      ],
    },
    video: '/base-app-demo.mp4',
    details: [
      'Voor het vak Human Centered Design ontwierp ik BASE: een app die het **leren over toeslagen leuker en toegankelijker** maakt voor jongeren, via een **quizvorm met directe feedback**.',
      'Het probleem: **meer dan 27% van de Nederlanders** weet niet of ze recht hebben op toeslagen of welke factoren daarvoor meetellen, en **jongvolwassenen van 21 tot 29 jaar** hebben vaker financiële problemen dan gemiddeld.',
      'De app is opgebouwd rond een korte **intake** (taal, situatie: werk, huur, kinderen, zorg) waarna gebruikers gepersonaliseerde quizvragen krijgen over hun eigen situatie.',
      'De app is getest met **usability- en user experience-tests** onder de daadwerkelijke doelgroep, en op basis daarvan verder verfijnd.',
      'Dit was een groepsproject met een team van vijf studenten aan Tilburg University. Mijn rol was **Dev Lead**.',
    ],
  },
  {
    slug: 'lapswans',
    type: 'Webshop en social content',
    tone: 'pink',
    summary: 'Herontwerp van de webshop om de conversieratio te verbeteren.',
    skills: ['UI-ontwerp', 'Gebruikersonderzoek en iteraties', 'Contentcreatie en tone-of-voice', 'Visuele communicatie'],
    title: 'Lapswans',
    image: '/lapswans-screenshot.png',
    screens: ['/lapswans-screenshot.png'],
    aside: {
      label: 'Uitgangspunt',
      text: 'Bezoekers moeten meer over het merk leren en sneller vertrouwen krijgen om een duurzaam product te kopen.',
    },
    steps: [
      {
        title: 'Ontwerp van de webshop',
        text: [
          'Ik ontwierp de **landingspagina in Figma** met **het merk centraal**. Bovenaan staat het team, daarna volgen meteen de **bestsellers**, het verhaal over **duurzaam en eerlijk**, de collectie De Originals en **reviews van klanten**.',
          'Zo leert een bezoeker het **merk kennen** op weg naar een aankoop.',
        ],
        image: {
          src: '/lapswans/ontwerp.jpg',
          alt: 'Het ontwerp van de Lapswans-webshop: een gele header met logo en menu, een foto van drie mensen met de knop Bekijk de collectie, onze bestsellers met drie t-shirts en het begin van het verhaal over duurzame kleding.',
        },
      },
      {
        title: 'Testen en verbeteren',
        text: [
          'De ontwerpen testte ik met **meerdere gebruikersonderzoeken**. Wat daaruit kwam, verwerkte ik in **nieuwe versies** van het ontwerp.',
        ],
      },
      {
        title: 'Merkuitingen',
        text: [
          'Naast de webshop ontwierp ik **visitekaartjes, flyers en social media stories en posts**, in dezelfde **speelse stijl** en met de **tone-of-voice** van het merk.',
          'De flyer verwijst met een **QR-code** naar de webshop.',
        ],
        image: {
          src: '/lapswans-flyer.png',
          narrow: true,
          alt: 'Flyer van Lapswans op een lichtblauwe achtergrond met het logo, de tekst Maak kennis met Lapswans, een QR-code met Scan en explore, keurmerken voor biologisch katoen en lokaal bezorgd per fiets, en de getekende Lapswans-figuurtjes.',
        },
      },
    ],
    result: {
      text: [
        'Het resultaat is een **herontworpen webshop** met een **speelse, herkenbare uitstraling** waarin het **merkverhaal en de duurzame keuzes** meteen zichtbaar zijn.',
        'Daarbij hoort een **set merkuitingen**, van flyer tot social posts, die dezelfde stijl volgt.',
      ],
    },
    preview: {
      kind: 'site',
      image: '/lapswans/site.jpg',
      alt: 'De webshop van Lapswans: een gele header met logo en menu, een foto van drie mensen met de knop Bekijk de collectie, onze bestsellers, een stukje over duurzame kleding, de collectie De Originals en reviews van klanten.',
    },
    video: '/lapswans-demo.mp4',
    flyer: '/lapswans-flyer.png',
    social: [
      { label: 'Instagram', handle: '@lapswans_', href: 'https://www.instagram.com/lapswans_/' },
      { label: 'TikTok', handle: '@lapswans_', href: 'https://www.tiktok.com/@lapswans_' },
    ],
    details: [
      'Lapswans verkocht **duurzame, kleurrijke kleding**. Als social media- en communicatie-expert bij het bedrijf werkte ik mee aan het **herontwerp van hun website**, met als doel **bezoekers sneller te overtuigen tot een aankoop**. Daarnaast ontwierp ik **visitekaartjes, flyers, social media stories en posts**.',
      'De ontwerpen zijn getest met **meerdere gebruikersonderzoeken**, waarna **iteraties** zijn doorgevoerd op basis van de bevindingen.',
    ],
  },
]

/* Accessible name for the project image, which opens the website or app preview. */
export const previewLabel = (p) =>
  p.preview.kind === 'app' ? `Bekijk de app van ${p.title}` : `Bekijk de website van ${p.title}`
