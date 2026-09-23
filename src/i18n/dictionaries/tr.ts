import type { Dictionary } from "@/i18n/types";

const tr: Dictionary = {
  meta: {
    homeTitle: "Arcanus Hotels Sorgun | Side Antalya Her Şey Dahil Otel",
    homeDescription:
      "Side Sorgun'da denize sıfır, çam ormanıyla çevrili her şey dahil tatil. Arcanus Hotels Sorgun'un odalarını, restoranlarını ve deneyimlerini keşfedin.",
  },

  nav: {
    menu: "MENÜ",
    close: "KAPAT",
    hotel: "Otel",
    rooms: "Konaklama",
    dining: "Restoranlar",
    bars: "Barlar",
    experiences: "Aktiviteler",
    spa: "Spa & Wellness",
    meetings: "Toplantı & Etkinlik",
    gallery: "Galeri",
    side: "Side",
    blog: "Blog",
    contact: "İletişim",
    booking: "Rezervasyon",
  },

  common: {
    learnMore: "DAHA FAZLASI",
    discover: "KEŞFEDİN",
    bookNow: "REZERVASYON",
    scrollDown: "Aşağı kaydırın",
    backHome: "Ana sayfaya dön",
    previous: "Önceki",
    next: "Sonraki",
    close: "Kapat",
    photos: "fotoğraf",
    allRights: "Tüm hakları saklıdır.",
    privacy: "Gizlilik Politikası",
    language: "Dil",
  },

  home: {
    hero: {
      eyebrow: "HOŞ GELDİNİZ",
      titleLines: ["Akdeniz'in", "sakin kıyısında"],
    },
    intro:
      "Sorgun çam ormanı ile Akdeniz'in turkuaz suları arasında uzanan Arcanus Hotels Sorgun, Side'nin antik dokusunu modern bir tatil anlayışıyla buluşturan, denize sıfır bir her şey dahil resort.",
    overview: {
      eyebrow: "GENEL BAKIŞ",
      title: "Denize sıfır,\ndoğayla iç içe\nbir tatil.",
      body: "Kendi kumsalına açılan, yüzyıllık çam ağaçlarının gölgesinde kurulmuş bir resort. Aileler için tasarlanmış geniş havuz dünyası, altı farklı mutfağı ağırlayan restoranları, spa ve wellness merkezi ve gün boyu süren aktivite programıyla Arcanus, tatilin her saatini kendi ritminize bırakıyor.",
    },
    about: {
      eyebrow: "ARCANUS HAKKINDA",
      title: "Akdeniz ritmi",
      body: "Günün nasıl geçeceğine siz karar verirsiniz: sabah sahilde uzun bir yürüyüş, öğleden sonra aquaparkta kahkaha, akşamüstü hamamda dinginlik. Arcanus Hotels Sorgun, misafirlerini acele ettirmeyen bir servis anlayışıyla çalışır; her detay, ailenizin kendi temposunu bulması için düşünülmüştür.",
    },
    experiences: {
      eyebrow: "AKTİVİTELER",
      title: "Keşfedilecek her şey",
      body: "Sahilden çam ormanına, aquaparktan çocuk kulübüne — herkesin kendi tatilini kurabileceği geniş bir deneyim alanı.",
      items: [
        {
          slug: "aquapark",
          title: "Aquapark",
          text: "Her yaşa uygun kaydıraklar, kaydırak havuzları ve gün boyu süren su eğlencesi.",
        },
        {
          slug: "plaj",
          title: "Plaj",
          text: "Otele ait, şezlong ve servisiyle düzenlenmiş uzun kumsal.",
        },
        {
          slug: "cocuk-kulubu",
          title: "Çocuk Kulübü",
          text: "Yaş gruplarına ayrılmış atölyeler, oyun alanları ve mini disko.",
        },
        {
          slug: "spor",
          title: "Spor & Aktivite",
          text: "Tenis, voleybol, su sporları ve eğitmen eşliğinde günlük program.",
        },
        {
          slug: "gece-eglencesi",
          title: "Gece Eğlencesi",
          text: "Canlı müzik, sahne gösterileri ve amfitiyatroda akşam programı.",
        },
      ],
    },

    rooms: {
      eyebrow: "KONAKLAMA",
      title: "Eşsiz bir\nkonaklama",
      body: "Bahçe manzaralı standart odalardan geniş aile odalarına ve denize bakan suitlere kadar, her biri Akdeniz'in ışığına göre tasarlanmış konaklama seçenekleri.",
      items: [
        { slug: "standart-oda", title: "Standart Oda" },
        {
          slug: "standart-oda-deniz-manzarali",
          title: "Deniz Manzaralı Standart Oda",
        },
        { slug: "aile-odasi", title: "Aile Odası" },
        { slug: "superior-oda", title: "Superior Oda" },
        { slug: "suite", title: "Suite" },
      ],
    },

    moments: {
      title: "Unutulmayacak anlar",
      body: "Tatilin hatırlanan kısmı çoğu zaman plandan değil, aradaki anlardan oluşur.",
      items: [
        {
          key: "dining",
          title: "Restoranlar",
          text: "Altı à la carte restoran, ana restoran ve gün boyu açık snack noktaları.",
        },
        {
          key: "spa",
          title: "Spa & Wellness",
          text: "Türk hamamı, sauna, masaj odaları ve fitness merkezi.",
        },
        {
          key: "meetings",
          title: "Toplantı & Etkinlik",
          text: "Farklı ölçeklerde salonlar, kurumsal etkinlik ve özel davet organizasyonu.",
        },
        {
          key: "side",
          title: "Side",
          text: "Antik tiyatro, Apollon Tapınağı ve Manavgat çevresini keşfedin.",
        },
      ],
    },
    explore: {
      title: "Daha fazlasını keşfedin",
      links: [
        { key: "hotel", label: "OTEL" },
        { key: "experiences", label: "AKTİVİTELER" },
        { key: "rooms", label: "ODALAR" },
        { key: "contact", label: "İLETİŞİM" },
      ],
    },
  },

  footer: {
    groups: [
      {
        title: "GENEL",
        links: [
          { key: "hotel", label: "Otel" },
          { key: "experiences", label: "Aktiviteler" },
          { key: "gallery", label: "Galeri" },
          { key: "blog", label: "Blog" },
          { key: "contact", label: "İletişim" },
        ],
      },
      {
        title: "KONAKLAMA",
        links: [
          { key: "rooms", label: "Tüm Odalar" },
          { key: "rooms", label: "Standart Oda", slug: "standart-oda" },
          { key: "rooms", label: "Aile Odası", slug: "aile-odasi" },
          { key: "rooms", label: "Superior Oda", slug: "superior-oda" },
          { key: "rooms", label: "Suite", slug: "suite" },
        ],
      },
      {
        title: "AKTİVİTELER",
        links: [
          { key: "experiences", label: "Tüm Aktiviteler" },
          { key: "experiences", label: "Aquapark", slug: "aquapark" },
          { key: "experiences", label: "Plaj", slug: "plaj" },
          { key: "experiences", label: "Çocuk Kulübü", slug: "cocuk-kulubu" },
          { key: "spa", label: "Spa & Wellness" },
        ],
      },
    ],
    contactTitle: "İLETİŞİM",
    phoneLabel: "T:",
    emailLabel: "E:",
  },

  restaurants: {
    eyebrow: "GASTRONOMİ",
    title: "Restoranlar",
    description:
    "Ana restorandan à la carte mutfaklara, gün boyu açık snack noktalarından sahildeki barlara kadar tüm lezzet duraklarımız.",
    metaTitle: "Restoranlar",
    metaDescription:
    "Arcanus Hotels Sorgun restoranları: ana restoran, Türk, İtalyan, Meksika, Uzakdoğu ve balık à la carte restoranları ile snack noktaları.",
  },
  rooms: {
    eyebrow: "KONAKLAMA",
    title: "Konaklama",
    description:
      "Bahçe manzaralı standart odalardan geniş aile odalarına ve denize bakan suitlere kadar tüm oda tiplerimiz.",
    metaTitle: "Konaklama",
    metaDescription:
      "Arcanus Hotels Sorgun oda tipleri: standart oda, deniz manzaralı oda, aile odası, superior oda ve suite seçenekleri.",
  },

  activities: {
    eyebrow: "AKTİVİTELER",
    title: "Aktiviteler",
    description:
      "Aquaparktan çocuk kulübüne, su sporlarından gece programına — gününüzü kendi temponuzda kurmanız için.",
    metaTitle: "Aktiviteler",
    metaDescription:
      "Arcanus Hotels Sorgun aktiviteleri: aquapark, plaj, çocuk kulübü, spor ve fitness, su sporları ve gece eğlencesi.",
  },

  bars: {
    eyebrow: "BARLAR",
    title: "Barlar",
    description:
      "Lobide, havuz başında, sahilde ve amfide — günün her saatine ayrı bir bar, ayrı bir içecek seçkisi.",
    metaTitle: "Barlar",
    metaDescription:
      "Arcanus Hotels Sorgun barları: lobi barı, havuz barı, sahil barı, amfi barı, disco ve vitamin barı.",
  },

  gallery: {
    eyebrow: "MEDYA",
    title: "Galeri",
    description:
      "Odalardan plaja, havuzlardan restoranlara — Arcanus Hotels Sorgun'u kareler üzerinden gezin.",
    metaTitle: "Galeri",
    metaDescription:
      "Arcanus Hotels Sorgun galerisi: otel ve bahçeler, odalar, havuzlar ve aquapark, plaj, restoranlar ve spa fotoğrafları.",
    previousGallery: "Önceki galeri",
    nextGallery: "Sonraki galeri",
  },

  notFound: {
    title: "Aradığınız sayfa bulunamadı",
    body: "Sayfa taşınmış veya adres yanlış yazılmış olabilir. Aşağıdaki bağlantılardan devam edebilirsiniz.",
  },
};

export default tr;
