import type { MediaTone } from "@/components/ui/Media";
import type { Locale } from "@/config/locales";

export type Activity = {
  key: string;
  slug: Record<Locale, string>;
  title: Record<Locale, string>;
  description: Record<Locale, string>;
  /** Aktivite türü */
  category: Record<Locale, string>;
  /** Kimler için uygun */
  audience: Record<Locale, string>;
  /** Açık olduğu saatler */
  hours: string;
  tone: MediaTone;
  /** Detay sayfasındaki fotoğraf sayısı (placeholder üretimi için) */
  count: number;
};

const tonePalette: MediaTone[] = ["sea", "light", "sand", "cream", "dark"];

const allAges: Record<Locale, string> = {
  tr: "Tüm yaşlar",
  en: "All ages",
  de: "Alle Altersgruppen",
  ru: "Для всех возрастов",
};

export const activities: Activity[] = [
  {
    key: "aquapark",
    slug: { tr: "aquapark", en: "aquapark", de: "aquapark", ru: "akvapark" },
    title: {
      tr: "Aquapark",
      en: "Aquapark",
      de: "Aquapark",
      ru: "Аквапарк",
    },
    description: {
      tr: "Her yaşa uygun kaydıraklar, kaydırak havuzları ve gün boyu süren su eğlencesi.",
      en: "Slides for every age, splash pools and water play that lasts all day.",
      de: "Rutschen für jedes Alter, Planschbecken und Wasserspaß den ganzen Tag.",
      ru: "Горки для любого возраста, детские бассейны и водные развлечения весь день.",
    },
    category: {
      tr: "Su eğlencesi",
      en: "Water fun",
      de: "Wasserspaß",
      ru: "Водные развлечения",
    },
    audience: allAges,
    hours: "10:00 – 17:00",
    tone: "sea",
    count: 12,
  },
  {
    key: "beach",
    slug: { tr: "plaj", en: "beach", de: "strand", ru: "plyazh" },
    title: { tr: "Plaj", en: "Beach", de: "Strand", ru: "Пляж" },
    description: {
      tr: "Otele ait uzun kumsal; şezlong, şemsiye ve gün boyu servis dahil.",
      en: "The hotel's own long stretch of sand, with sunbeds, parasols and all-day service.",
      de: "Der lange hoteleigene Sandstrand mit Liegen, Sonnenschirmen und Service den ganzen Tag.",
      ru: "Собственный длинный пляж отеля с шезлонгами, зонтами и обслуживанием весь день.",
    },
    category: {
      tr: "Deniz & kum",
      en: "Sea & sand",
      de: "Meer & Sand",
      ru: "Море и песок",
    },
    audience: allAges,
    hours: "08:00 – 19:00",
    tone: "sand",
    count: 12,
  },
  {
    key: "kids-club",
    slug: {
      tr: "cocuk-kulubu",
      en: "kids-club",
      de: "kinderclub",
      ru: "detskiy-klub",
    },
    title: {
      tr: "Çocuk Kulübü",
      en: "Kids' Club",
      de: "Kinderclub",
      ru: "Детский клуб",
    },
    description: {
      tr: "Yaş gruplarına ayrılmış atölyeler, oyun alanları ve akşamüstü mini disko.",
      en: "Age-grouped workshops, play areas and an early-evening mini disco.",
      de: "Workshops nach Altersgruppen, Spielbereiche und eine Mini-Disco am frühen Abend.",
      ru: "Мастер-классы по возрастам, игровые зоны и мини-диско ранним вечером.",
    },
    category: {
      tr: "Çocuk programı",
      en: "Kids programme",
      de: "Kinderprogramm",
      ru: "Детская программа",
    },
    audience: {
      tr: "4 – 12 yaş",
      en: "Ages 4 – 12",
      de: "4 – 12 Jahre",
      ru: "4 – 12 лет",
    },
    hours: "10:00 – 20:00",
    tone: "light",
    count: 10,
  },
  {
    key: "sports",
    slug: { tr: "spor", en: "sports", de: "sport", ru: "sport" },
    title: {
      tr: "Spor & Fitness",
      en: "Sports & Fitness",
      de: "Sport & Fitness",
      ru: "Спорт и фитнес",
    },
    description: {
      tr: "Tenis kortu, voleybol sahası, fitness merkezi ve eğitmen eşliğinde günlük ders programı.",
      en: "A tennis court, a volleyball pitch, a fitness centre and a daily class programme with instructors.",
      de: "Tennisplatz, Volleyballfeld, Fitnesscenter und ein tägliches Kursprogramm mit Trainern.",
      ru: "Теннисный корт, волейбольная площадка, фитнес-центр и ежедневные занятия с тренерами.",
    },
    category: {
      tr: "Spor",
      en: "Sport",
      de: "Sport",
      ru: "Спорт",
    },
    audience: {
      tr: "16 yaş ve üzeri",
      en: "Ages 16+",
      de: "Ab 16 Jahren",
      ru: "От 16 лет",
    },
    hours: "08:00 – 20:00",
    tone: "cream",
    count: 10,
  },
  {
    key: "water-sports",
    slug: {
      tr: "su-sporlari",
      en: "water-sports",
      de: "wassersport",
      ru: "vodnye-vidy-sporta",
    },
    title: {
      tr: "Su Sporları",
      en: "Water Sports",
      de: "Wassersport",
      ru: "Водные виды спорта",
    },
    description: {
      tr: "Sahilde kürek, yelken ve motorlu su sporları; deneyimsizler için kısa eğitimlerle.",
      en: "Paddling, sailing and motorised water sports on the beach, with short lessons for beginners.",
      de: "Paddeln, Segeln und motorisierter Wassersport am Strand, mit kurzen Einführungen für Anfänger.",
      ru: "Гребля, парусный спорт и моторные водные виды на пляже, с короткими уроками для новичков.",
    },
    category: {
      tr: "Deniz sporları",
      en: "Sea sports",
      de: "Wassersport",
      ru: "Морской спорт",
    },
    audience: {
      tr: "12 yaş ve üzeri",
      en: "Ages 12+",
      de: "Ab 12 Jahren",
      ru: "От 12 лет",
    },
    hours: "10:00 – 17:00",
    tone: "sea",
    count: 8,
  },
  {
    key: "night",
    slug: {
      tr: "gece-eglencesi",
      en: "night-entertainment",
      de: "abendunterhaltung",
      ru: "vechernie-razvlecheniya",
    },
    title: {
      tr: "Gece Eğlencesi",
      en: "Night Entertainment",
      de: "Abendunterhaltung",
      ru: "Вечерние развлечения",
    },
    description: {
      tr: "Amfitiyatroda canlı müzik, sahne gösterileri ve haftanın her günü değişen program.",
      en: "Live music in the amphitheatre, stage shows and a programme that changes every night.",
      de: "Live-Musik im Amphitheater, Bühnenshows und ein Programm, das jeden Abend wechselt.",
      ru: "Живая музыка в амфитеатре, шоу на сцене и программа, которая меняется каждый вечер.",
    },
    category: {
      tr: "Sahne & müzik",
      en: "Stage & music",
      de: "Bühne & Musik",
      ru: "Сцена и музыка",
    },
    audience: allAges,
    hours: "21:00 – 24:00",
    tone: "dark",
    count: 10,
  },
];

/** Placeholder fotoğraf listesi — gerçek görseller gelince `src` eklenecek. */
export function photosFor(activity: Activity) {
  return Array.from({ length: activity.count }, (_, index) => ({
    id: `${activity.key}-${index + 1}`,
    tone: tonePalette[
      (index + tonePalette.indexOf(activity.tone)) % tonePalette.length
    ],
  }));
}

export function activityBySlug(slug: string, locale: Locale) {
  return activities.find((activity) => activity.slug[locale] === slug);
}

/** Detay sayfasındaki önceki/sonraki aktivite. */
export function neighbours(activity: Activity) {
  const index = activities.indexOf(activity);
  const total = activities.length;
  return {
    previous: activities[(index - 1 + total) % total],
    next: activities[(index + 1) % total],
  };
}
