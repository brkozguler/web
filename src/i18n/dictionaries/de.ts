import type { Dictionary } from "@/i18n/types";

const de: Dictionary = {
  meta: {
    homeTitle: "Arcanus Hotels Sorgun | All-Inclusive Hotel in Side, Antalya",
    homeDescription:
      "Direkt am Strand von Sorgun in Side, umgeben vom Pinienwald: All-Inclusive-Urlaub im Arcanus Hotels Sorgun. Zimmer, Restaurants und Erlebnisse entdecken.",
  },

  nav: {
    menu: "MENÜ",
    close: "SCHLIESSEN",
    hotel: "Hotel",
    rooms: "Unterkunft",
    dining: "Restaurants",
    bars: "Bars",
    experiences: "Aktivitäten",
    spa: "Spa & Wellness",
    meetings: "Tagungen & Events",
    gallery: "Galerie",
    side: "Side",
    blog: "Journal",
    contact: "Kontakt",
    booking: "Buchen",
  },

  common: {
    learnMore: "MEHR ERFAHREN",
    discover: "ENTDECKEN",
    bookNow: "JETZT BUCHEN",
    scrollDown: "Nach unten scrollen",
    backHome: "Zur Startseite",
    previous: "Zurück",
    next: "Weiter",
    close: "Schließen",
    photos: "Fotos",
    allRights: "Alle Rechte vorbehalten.",
    privacy: "Datenschutz",
    language: "Sprache",
  },

  home: {
    hero: {
      eyebrow: "WILLKOMMEN",
      titleLines: ["An der ruhigen", "Mittelmeerküste"],
    },
    intro:
      "Zwischen dem Pinienwald von Sorgun und dem türkisfarbenen Mittelmeer gelegen, verbindet das Arcanus Hotels Sorgun den antiken Charakter von Side mit einem modernen Urlaubsverständnis — direkt am Strand, All-Inclusive.",
    overview: {
      eyebrow: "ÜBERBLICK",
      title: "Direkt am Meer,\nmitten in\nder Natur.",
      body: "Ein Resort mit eigenem Sandstrand, gebaut im Schatten jahrhundertealter Pinien. Mit einer Poollandschaft für Familien, Restaurants aus sechs verschiedenen Küchen, einem Spa- und Wellnessbereich und einem Programm von morgens bis abends überlässt Arcanus jede Stunde Ihrem eigenen Rhythmus.",
    },
    about: {
      eyebrow: "ÜBER ARCANUS",
      title: "Mediterraner Rhythmus",
      body: "Wie der Tag verläuft, entscheiden Sie: morgens ein langer Spaziergang am Strand, nachmittags Lachen im Aquapark, am Abend Ruhe im Hamam. Das Arcanus Hotels Sorgun arbeitet mit einem Serviceverständnis, das seine Gäste nie hetzt; jedes Detail ist darauf ausgelegt, dass Ihre Familie ihr eigenes Tempo findet.",
    },
    experiences: {
      eyebrow: "AKTIVITÄTEN",
      title: "Alles zum Entdecken",
      body: "Von der Küste bis zum Pinienwald, vom Aquapark bis zum Kinderclub — ein weites Feld, in dem jeder seinen eigenen Urlaub gestaltet.",
      items: [
        {
          slug: "aquapark",
          title: "Aquapark",
          text: "Rutschen für jedes Alter, Planschbecken und Wasserspaß den ganzen Tag.",
        },
        {
          slug: "strand",
          title: "Strand",
          text: "Ein langer hoteleigener Sandstrand mit Liegen und vollem Service.",
        },
        {
          slug: "kinderclub",
          title: "Kinderclub",
          text: "Workshops nach Altersgruppen, Spielbereiche und Mini-Disco.",
        },
        {
          slug: "sport",
          title: "Sport & Aktivitäten",
          text: "Tennis, Volleyball, Wassersport und ein tägliches Programm mit Trainern.",
        },
        {
          slug: "abendunterhaltung",
          title: "Abendunterhaltung",
          text: "Live-Musik, Bühnenshows und Abendprogramm im Amphitheater.",
        },
      ],
    },

    rooms: {
      eyebrow: "UNTERKUNFT",
      title: "Ein Aufenthalt\nohnegleichen",
      body: "Vom Standardzimmer mit Gartenblick über großzügige Familienzimmer bis zu Suiten mit Meerblick — jedes gestaltet nach dem Licht des Mittelmeers.",
      items: [
        { slug: "standardzimmer", title: "Standardzimmer" },
        {
          slug: "standardzimmer-meerblick",
          title: "Standardzimmer mit Meerblick",
        },
        { slug: "familienzimmer", title: "Familienzimmer" },
        { slug: "superior-zimmer", title: "Superior Zimmer" },
        { slug: "suite", title: "Suite" },
      ],
    },

    moments: {
      title: "Momente, die bleiben",
      body: "Was vom Urlaub bleibt, ist selten der Plan — es sind die Momente dazwischen.",
      items: [
        {
          key: "dining",
          title: "Restaurants",
          text: "Sechs À-la-carte-Restaurants, ein Hauptrestaurant und ganztägige Snackpunkte.",
        },
        {
          key: "spa",
          title: "Spa & Wellness",
          text: "Türkisches Bad, Sauna, Behandlungsräume und Fitnesscenter.",
        },
        {
          key: "meetings",
          title: "Tagungen & Events",
          text: "Säle in verschiedenen Größen, Firmenevents und private Feiern.",
        },
        {
          key: "side",
          title: "Side",
          text: "Entdecken Sie das antike Theater, den Apollon-Tempel und die Region Manavgat.",
        },
      ],
    },
    explore: {
      title: "Mehr entdecken",
      links: [
        { key: "hotel", label: "HOTEL" },
        { key: "experiences", label: "AKTIVITÄTEN" },
        { key: "rooms", label: "ZIMMER" },
        { key: "contact", label: "KONTAKT" },
      ],
    },
  },

  footer: {
    groups: [
      {
        title: "ALLGEMEIN",
        links: [
          { key: "hotel", label: "Hotel" },
          { key: "experiences", label: "Aktivitäten" },
          { key: "gallery", label: "Galerie" },
          { key: "blog", label: "Journal" },
          { key: "contact", label: "Kontakt" },
        ],
      },
      {
        title: "UNTERKUNFT",
        links: [
          { key: "rooms", label: "Alle Zimmer" },
          { key: "rooms", label: "Standardzimmer", slug: "standardzimmer" },
          { key: "rooms", label: "Familienzimmer", slug: "familienzimmer" },
          { key: "rooms", label: "Superior Zimmer", slug: "superior-zimmer" },
          { key: "rooms", label: "Suite", slug: "suite" },
        ],
      },
      {
        title: "AKTIVITÄTEN",
        links: [
          { key: "experiences", label: "Alle Aktivitäten" },
          { key: "experiences", label: "Aquapark", slug: "aquapark" },
          { key: "experiences", label: "Strand", slug: "strand" },
          { key: "experiences", label: "Kinderclub", slug: "kinderclub" },
          { key: "spa", label: "Spa & Wellness" },
        ],
      },
    ],
    contactTitle: "KONTAKT",
    phoneLabel: "T:",
    emailLabel: "E:",
  },

  restaurants: {
    eyebrow: "GASTRONOMIE",
    title: "Restaurants",
    description:
    "Vom Hauptrestaurant über die À-la-carte-Küchen bis zu den ganztägigen Snackpunkten und Strandbars — alle kulinarischen Orte des Hauses.",
    metaTitle: "Restaurants",
    metaDescription:
    "Restaurants im Arcanus Hotels Sorgun: Hauptrestaurant, türkisches, italienisches, mexikanisches, fernöstliches und Fischrestaurant sowie Snackpunkte.",
  },
  rooms: {
    eyebrow: "UNTERKUNFT",
    title: "Unterkunft",
    description:
      "Vom Standardzimmer mit Gartenblick über großzügige Familienzimmer bis zu Suiten mit Meerblick — alle Zimmertypen.",
    metaTitle: "Unterkunft",
    metaDescription:
      "Zimmertypen im Arcanus Hotels Sorgun: Standardzimmer, Zimmer mit Meerblick, Familienzimmer, Superior Zimmer und Suiten.",
  },

  activities: {
    eyebrow: "AKTIVITÄTEN",
    title: "Aktivitäten",
    description:
      "Vom Aquapark bis zum Kinderclub, vom Wassersport bis zum Abendprogramm — gestalten Sie den Tag in Ihrem eigenen Tempo.",
    metaTitle: "Aktivitäten",
    metaDescription:
      "Aktivitäten im Arcanus Hotels Sorgun: Aquapark, Strand, Kinderclub, Sport und Fitness, Wassersport und Abendunterhaltung.",
  },

  bars: {
    eyebrow: "BARS",
    title: "Bars",
    description:
      "In der Lobby, am Pool, am Strand und im Amphitheater — für jede Stunde eine eigene Bar und eine eigene Auswahl.",
    metaTitle: "Bars",
    metaDescription:
      "Bars im Arcanus Hotels Sorgun: Lobbybar, Poolbar, Strandbar, Amphitheater-Bar, Disco und Vitaminbar.",
  },

  gallery: {
    eyebrow: "MEDIEN",
    title: "Galerie",
    description:
      "Von den Zimmern bis zum Strand, von den Pools bis zu den Restaurants — entdecken Sie das Arcanus Hotels Sorgun in Bildern.",
    metaTitle: "Galerie",
    metaDescription:
      "Die Galerie des Arcanus Hotels Sorgun: Hotel und Gärten, Zimmer, Pools und Aquapark, Strand, Restaurants und Spa.",
    previousGallery: "Vorherige Galerie",
    nextGallery: "Nächste Galerie",
  },

  notFound: {
    title: "Diese Seite wurde nicht gefunden",
    body: "Die Seite wurde möglicherweise verschoben oder die Adresse ist falsch geschrieben. Über die folgenden Links geht es weiter.",
  },
};

export default de;
