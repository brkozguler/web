import type { MediaTone } from "@/components/ui/Media";
import type { Locale } from "@/config/locales";

export type RoomType = {
  key: string;
  slug: Record<Locale, string>;
  title: Record<Locale, string>;
  description: Record<Locale, string>;
  /** Detay sayfasındaki gövde paragrafları */
  body: Record<Locale, string[]>;
  /** Oda büyüklüğü (m²) */
  size: number;
  /** "2 Yetişkin + 1 Çocuk" gibi, dile göre hazır metin */
  capacity: Record<Locale, string>;
  /** Manzara tipi */
  view: Record<Locale, string>;
  tone: MediaTone;
  /** Detay sayfasındaki fotoğraf sayısı (placeholder üretimi için) */
  count: number;
};

const tonePalette: MediaTone[] = ["cream", "sand", "light", "sea", "dark"];

export const roomTypes: RoomType[] = [
  {
    key: "standard",
    slug: {
      tr: "standart-oda",
      en: "standard-room",
      de: "standardzimmer",
      ru: "standartnyy-nomer",
    },
    title: {
      tr: "Standart Oda",
      en: "Standard Room",
      de: "Standardzimmer",
      ru: "Стандартный номер",
    },
    description: {
      tr: "Çam ağaçlarının gölgesine bakan, sade ve ferah odalarımız; kısa molalardan uzun tatillere kadar her ritme uyum sağlıyor.",
      en: "Calm, uncluttered rooms overlooking the shade of the pines — suited to short escapes and long holidays alike.",
      de: "Ruhige, klar gestaltete Zimmer mit Blick in den Schatten der Pinien — passend für kurze Auszeiten wie für lange Ferien.",
      ru: "Спокойные и просторные номера с видом на сосны — одинаково удобны и для короткого отдыха, и для длительного отпуска.",
    },
    body: {
      tr: [
        "Yerden tavana pencereleri, ahşap detayları ve sakin renk paletiyle standart odalarımız gürültüden uzak bir dinlenme alanı sunar. Balkon, çam ormanının gölgesine ve bahçe yollarına bakar.",
        "Yatak takımları doğal pamuktan seçilmiştir; banyoda yağmur duşu, saç kurutma makinesi ve yerel üretim bakım ürünleri bulunur. Klima, mini bar, kasa ve uydu yayınlı televizyon standart donanımdır.",
      ],
      en: [
        "Floor-to-ceiling windows, timber detailing and a calm palette make the standard rooms a quiet place to rest. The balcony looks onto the shade of the pines and the garden paths.",
        "Beds are dressed in natural cotton; the bathroom has a rain shower, a hairdryer and locally produced care products. Air conditioning, minibar, safe and satellite television come as standard.",
      ],
      de: [
        "Bodentiefe Fenster, Holzdetails und eine ruhige Farbpalette machen die Standardzimmer zu einem stillen Rückzugsort. Der Balkon blickt in den Schatten der Pinien und auf die Gartenwege.",
        "Die Betten sind mit Naturbaumwolle bezogen; im Bad gibt es eine Regendusche, einen Föhn und regional hergestellte Pflegeprodukte. Klimaanlage, Minibar, Safe und Satellitenfernsehen gehören zur Standardausstattung.",
      ],
      ru: [
        "Панорамные окна, деревянные детали и спокойная палитра делают стандартные номера тихим местом для отдыха. Балкон выходит в тень сосен и на садовые дорожки.",
        "Постельное бельё — из натурального хлопка; в ванной тропический душ, фен и средства ухода местного производства. Кондиционер, мини-бар, сейф и спутниковое телевидение входят в стандартную комплектацию.",
      ],
    },
    size: 26,
    capacity: {
      tr: "2 Yetişkin + 1 Çocuk",
      en: "2 Adults + 1 Child",
      de: "2 Erwachsene + 1 Kind",
      ru: "2 взрослых + 1 ребёнок",
    },
    view: {
      tr: "Bahçe manzara",
      en: "Garden view",
      de: "Gartenblick",
      ru: "Вид на сад",
    },
    tone: "cream",
    count: 10,
  },
  {
    key: "standard-garden",
    slug: {
      tr: "standart-oda-bahce-manzarali",
      en: "garden-view-standard-room",
      de: "standardzimmer-gartenblick",
      ru: "nomer-s-vidom-na-sad",
    },
    title: {
      tr: "Bahçe Manzaralı Standart Oda",
      en: "Garden View Standard Room",
      de: "Standardzimmer mit Gartenblick",
      ru: "Стандартный номер с видом на сад",
    },
    description: {
      tr: "Balkonu doğrudan bahçeye açılan odalar; sabah kahvenizi kuş sesleri ve çam kokusuyla içmek isteyenler için.",
      en: "Rooms whose balconies open straight onto the gardens — for mornings that start with birdsong and pine air.",
      de: "Zimmer, deren Balkone direkt in den Garten führen — für Morgen, die mit Vogelgesang und Pinienduft beginnen.",
      ru: "Номера с балконом, выходящим прямо в сад — для утра под пение птиц и запах сосен.",
    },
    body: {
      tr: [
        "Bahçe manzaralı odalar, resortun yeşil omurgasına açılan balkonlarıyla sabahları kuş sesleriyle başlatır. Alt katlara yakın konumları sayesinde havuza ve bahçe yollarına birkaç adımda ulaşılır.",
        "İç düzen standart odalarla aynıdır; fark, balkonun doğrudan bahçeye bakması ve daha geniş bir oturma köşesi sunmasıdır. Aileler için ilave yatak talebi karşılanabilir.",
      ],
      en: [
        "Rooms with a garden view open onto the resort's green spine, so mornings begin with birdsong. Their position near the lower floors puts the pool and the garden paths a few steps away.",
        "The interior layout matches the standard rooms; the difference is a balcony that faces the gardens directly and a slightly larger seating corner. An extra bed can be arranged for families.",
      ],
      de: [
        "Zimmer mit Gartenblick öffnen sich zum grünen Rückgrat des Resorts, sodass der Morgen mit Vogelgesang beginnt. Durch die Lage in den unteren Etagen sind Pool und Gartenwege nur wenige Schritte entfernt.",
        "Die Raumaufteilung entspricht den Standardzimmern; der Unterschied liegt im Balkon direkt zum Garten und in der etwas größeren Sitzecke. Für Familien kann ein Zustellbett eingerichtet werden.",
      ],
      ru: [
        "Номера с видом на сад выходят на зелёную ось курорта, поэтому утро начинается с пения птиц. Благодаря расположению на нижних этажах бассейн и садовые дорожки — в нескольких шагах.",
        "Планировка совпадает со стандартными номерами; отличие — балкон, выходящий прямо в сад, и чуть более просторная зона отдыха. Для семей возможна дополнительная кровать.",
      ],
    },
    size: 26,
    capacity: {
      tr: "2 Yetişkin + 1 Çocuk",
      en: "2 Adults + 1 Child",
      de: "2 Erwachsene + 1 Kind",
      ru: "2 взрослых + 1 ребёнок",
    },
    view: {
      tr: "Bahçe manzara",
      en: "Garden view",
      de: "Gartenblick",
      ru: "Вид на сад",
    },
    tone: "sand",
    count: 8,
  },
  {
    key: "standard-sea",
    slug: {
      tr: "standart-oda-deniz-manzarali",
      en: "sea-view-standard-room",
      de: "standardzimmer-meerblick",
      ru: "nomer-s-vidom-na-more",
    },
    title: {
      tr: "Deniz Manzaralı Standart Oda",
      en: "Sea View Standard Room",
      de: "Standardzimmer mit Meerblick",
      ru: "Стандартный номер с видом на море",
    },
    description: {
      tr: "Akdeniz'in ufuk çizgisine bakan balkonuyla, günün her saatinde değişen bir manzarayı odanıza taşıyor.",
      en: "A balcony facing the Mediterranean horizon brings a view that changes with every hour of the day.",
      de: "Der Balkon zum Horizont des Mittelmeers holt eine Aussicht ins Zimmer, die sich mit jeder Stunde verändert.",
      ru: "Балкон с видом на горизонт Средиземного моря приносит в номер пейзаж, который меняется каждый час.",
    },
    body: {
      tr: [
        "Deniz manzaralı odalar üst katlarda konumlanır; balkondan Akdeniz'in ufuk çizgisi ve otelin kendi kumsalı görülür. Gün boyunca değişen ışık, odanın açık renk paletinde yankılanır.",
        "Yatak alanı denize dönük yerleştirilmiştir. Banyoda yağmur duşu, odada çalışma masası, mini bar ve kasa bulunur; balkonda iki kişilik oturma takımı yer alır.",
      ],
      en: [
        "Sea view rooms sit on the upper floors; the balcony takes in the Mediterranean horizon and the hotel's own beach. The light that shifts through the day is echoed in the room's pale palette.",
        "The bed faces the sea. The bathroom has a rain shower, while the room offers a desk, minibar and safe; the balcony is set with seating for two.",
      ],
      de: [
        "Zimmer mit Meerblick liegen in den oberen Etagen; vom Balkon aus sieht man den Horizont des Mittelmeers und den hoteleigenen Strand. Das wechselnde Tageslicht spiegelt sich in der hellen Farbpalette.",
        "Das Bett ist zum Meer ausgerichtet. Im Bad gibt es eine Regendusche, im Zimmer Schreibtisch, Minibar und Safe; auf dem Balkon steht eine Sitzgruppe für zwei.",
      ],
      ru: [
        "Номера с видом на море расположены на верхних этажах; с балкона видны горизонт Средиземного моря и собственный пляж отеля. Меняющийся в течение дня свет отражается в светлой палитре номера.",
        "Кровать обращена к морю. В ванной тропический душ, в номере — рабочий стол, мини-бар и сейф; на балконе — место для двоих.",
      ],
    },
    size: 28,
    capacity: {
      tr: "2 Yetişkin + 1 Çocuk",
      en: "2 Adults + 1 Child",
      de: "2 Erwachsene + 1 Kind",
      ru: "2 взрослых + 1 ребёнок",
    },
    view: {
      tr: "Deniz manzara",
      en: "Sea view",
      de: "Meerblick",
      ru: "Вид на море",
    },
    tone: "sea",
    count: 10,
  },
  {
    key: "family",
    slug: {
      tr: "aile-odasi",
      en: "family-room",
      de: "familienzimmer",
      ru: "semeynyy-nomer",
    },
    title: {
      tr: "Aile Odası",
      en: "Family Room",
      de: "Familienzimmer",
      ru: "Семейный номер",
    },
    description: {
      tr: "Ara kapıyla birbirine bağlanan iki yaşam alanı; çocuklara kendi köşesini, ebeveynlere sessizliğini bırakıyor.",
      en: "Two connected living spaces: the children get a corner of their own, the parents keep their quiet.",
      de: "Zwei durch eine Verbindungstür getrennte Bereiche: Die Kinder bekommen ihre Ecke, die Eltern ihre Ruhe.",
      ru: "Два пространства, соединённые дверью: у детей свой уголок, у родителей — тишина.",
    },
    body: {
      tr: [
        "Aile odaları, ara kapıyla bağlanan iki ayrı yaşam alanından oluşur. Ebeveyn bölümünde çift kişilik yatak, çocuk bölümünde iki tek kişilik yatak ve kendi televizyonu bulunur.",
        "Geniş balkon her iki odaya da açılır. Banyoda küvet seçeneği; odada çocuk güvenlik kilidi, bebek karyolası ve mama sandalyesi talebe göre sağlanır.",
      ],
      en: [
        "Family rooms are made of two living spaces joined by a connecting door. The parents' side has a double bed; the children's side has two singles and its own television.",
        "A wide balcony opens onto both rooms. A bathtub option in the bathroom, child safety locks, a cot and a high chair are available on request.",
      ],
      de: [
        "Familienzimmer bestehen aus zwei Bereichen, die durch eine Verbindungstür getrennt sind. Auf der Elternseite steht ein Doppelbett, auf der Kinderseite zwei Einzelbetten und ein eigener Fernseher.",
        "Ein breiter Balkon öffnet sich zu beiden Räumen. Badewanne, Kindersicherung, Babybett und Hochstuhl sind auf Anfrage möglich.",
      ],
      ru: [
        "Семейные номера состоят из двух пространств, соединённых дверью. В родительской части — двуспальная кровать, в детской — две односпальные и собственный телевизор.",
        "Широкий балкон выходит в обе комнаты. По запросу доступны ванна, детские замки безопасности, детская кроватка и стульчик для кормления.",
      ],
    },
    size: 42,
    capacity: {
      tr: "2 Yetişkin + 2 Çocuk",
      en: "2 Adults + 2 Children",
      de: "2 Erwachsene + 2 Kinder",
      ru: "2 взрослых + 2 ребёнка",
    },
    view: {
      tr: "Bahçe / deniz manzara",
      en: "Garden / sea view",
      de: "Garten- / Meerblick",
      ru: "Вид на сад / море",
    },
    tone: "light",
    count: 12,
  },
  {
    key: "superior",
    slug: {
      tr: "superior-oda",
      en: "superior-room",
      de: "superior-zimmer",
      ru: "superior-nomer",
    },
    title: {
      tr: "Superior Oda",
      en: "Superior Room",
      de: "Superior Zimmer",
      ru: "Номер Superior",
    },
    description: {
      tr: "Daha geniş bir oturma alanı, büyük balkon ve denize dönük konumuyla konforu bir adım öteye taşıyor.",
      en: "A larger sitting area, a generous balcony and a position facing the sea take the comfort one step further.",
      de: "Ein größerer Wohnbereich, ein weiter Balkon und die Lage zum Meer heben den Komfort eine Stufe an.",
      ru: "Просторная гостиная зона, большой балкон и расположение к морю поднимают комфорт на ступень выше.",
    },
    body: {
      tr: [
        "Superior odalar, daha geniş bir oturma alanı ve denize dönük büyük balkonlarıyla öne çıkar. Yatak bölümü oturma alanından ince bir bölmeyle ayrılır.",
        "Odada espresso makinesi, kişiye özel karşılama ikramı ve genişletilmiş mini bar bulunur. Banyoda yağmur duşunun yanında ayrı bir makyaj aynası yer alır.",
      ],
      en: [
        "Superior rooms stand out with a larger sitting area and a generous balcony facing the sea. A slim partition separates the sleeping area from the lounge.",
        "The room includes an espresso machine, a personal welcome treat and an extended minibar. Beside the rain shower, the bathroom has a separate vanity mirror.",
      ],
      de: [
        "Superior Zimmer überzeugen mit einem größeren Wohnbereich und einem weiten Balkon zum Meer. Eine schmale Trennwand scheidet den Schlaf- vom Wohnbereich.",
        "Im Zimmer finden sich eine Espressomaschine, ein persönlicher Willkommensgruß und eine erweiterte Minibar. Neben der Regendusche verfügt das Bad über einen separaten Schminkspiegel.",
      ],
      ru: [
        "Номера Superior выделяются просторной гостиной зоной и большим балконом с видом на море. Тонкая перегородка отделяет спальную зону от гостиной.",
        "В номере — кофемашина, персональный приветственный комплимент и расширенный мини-бар. Рядом с тропическим душем в ванной установлено отдельное зеркало для макияжа.",
      ],
    },
    size: 34,
    capacity: {
      tr: "3 Yetişkin",
      en: "3 Adults",
      de: "3 Erwachsene",
      ru: "3 взрослых",
    },
    view: {
      tr: "Deniz manzara",
      en: "Sea view",
      de: "Meerblick",
      ru: "Вид на море",
    },
    tone: "cream",
    count: 10,
  },
  {
    key: "suite",
    slug: { tr: "suite", en: "suite", de: "suite", ru: "syuit" },
    title: { tr: "Suite", en: "Suite", de: "Suite", ru: "Сьют" },
    description: {
      tr: "Ayrı yatak odası, geniş salon ve denize bakan terasıyla otelin en özel konaklama seçeneği.",
      en: "A separate bedroom, a wide living room and a sea-facing terrace — the most private stay at the resort.",
      de: "Separates Schlafzimmer, großzügiger Wohnraum und Terrasse zum Meer — die privateste Unterkunft des Hauses.",
      ru: "Отдельная спальня, просторная гостиная и терраса с видом на море — самый уединённый вариант в отеле.",
    },
    body: {
      tr: [
        "Suite, ayrı bir yatak odası, geniş salon ve denize bakan terasıyla otelin en özel konaklama seçeneğidir. Salonda misafir ağırlamaya uygun oturma grubu ve yemek masası bulunur.",
        "Terasta güneşlenme alanı ve gölgelikli oturma köşesi yer alır. Suite misafirleri à la carte restoranlarda öncelikli rezervasyon ve odaya özel karşılama servisinden yararlanır.",
      ],
      en: [
        "The suite is the resort's most private stay: a separate bedroom, a wide living room and a sea-facing terrace. The living room holds a seating group and a dining table for hosting.",
        "The terrace offers a sun deck and a shaded corner. Suite guests enjoy priority reservations at the à la carte restaurants and an in-room welcome service.",
      ],
      de: [
        "Die Suite ist die privateste Unterkunft des Hauses: separates Schlafzimmer, großzügiger Wohnraum und Terrasse zum Meer. Der Wohnraum bietet eine Sitzgruppe und einen Esstisch für Gäste.",
        "Auf der Terrasse gibt es eine Sonnenfläche und eine beschattete Ecke. Suite-Gäste genießen bevorzugte Reservierungen in den À-la-carte-Restaurants und einen Willkommensservice im Zimmer.",
      ],
      ru: [
        "Сьют — самый уединённый вариант проживания: отдельная спальня, просторная гостиная и терраса с видом на море. В гостиной — зона отдыха и обеденный стол для приёма гостей.",
        "На террасе есть солнечная зона и затенённый уголок. Гостям сьютов доступны приоритетное бронирование в ресторанах à la carte и приветственный сервис в номере.",
      ],
    },
    size: 55,
    capacity: {
      tr: "4 Yetişkin + 1 Çocuk",
      en: "4 Adults + 1 Child",
      de: "4 Erwachsene + 1 Kind",
      ru: "4 взрослых + 1 ребёнок",
    },
    view: {
      tr: "Deniz manzara",
      en: "Sea view",
      de: "Meerblick",
      ru: "Вид на море",
    },
    tone: "dark",
    count: 12,
  },
];

/** Placeholder fotoğraf listesi — gerçek görseller gelince `src` eklenecek. */
export function photosFor(room: RoomType) {
  return Array.from({ length: room.count }, (_, index) => ({
    id: `${room.key}-${index + 1}`,
    tone: tonePalette[
      (index + tonePalette.indexOf(room.tone)) % tonePalette.length
    ],
  }));
}

export function roomBySlug(slug: string, locale: Locale) {
  return roomTypes.find((room) => room.slug[locale] === slug);
}

/** Detay sayfasındaki önceki/sonraki oda tipi. */
export function neighbours(room: RoomType) {
  const index = roomTypes.indexOf(room);
  const total = roomTypes.length;
  return {
    previous: roomTypes[(index - 1 + total) % total],
    next: roomTypes[(index + 1) % total],
  };
}
