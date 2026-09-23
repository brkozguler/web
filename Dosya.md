# ARCANUS HOTELS SORGUN
## Next.js App Router — SEO, URL, Güvenlik ve Proje Mimarisi

---

# 1. PROJE HEDEFİ

Arcanus Hotels Sorgun web sitesi aşağıdaki hedeflerle yeniden geliştirilecektir:

- Next.js App Router mimarisi
- TypeScript
- Server Components öncelikli yapı
- SEO uyumlu URL mimarisi
- Türkçe / İngilizce / Almanca / Rusça
- Mobil öncelikli responsive tasarım
- Core Web Vitals optimizasyonu
- Schema.org structured data
- Dinamik sitemap
- Canonical URL yönetimi
- Hreflang yönetimi
- Open Graph / sosyal medya metadata
- Güvenli API yapısı
- Güvenlik header'ları
- Rate limiting
- Form spam koruması
- XSS / CSRF önlemleri
- Görsel optimizasyonu
- Lazy loading
- CDN uyumluluğu
- Güvenli CMS entegrasyonuna hazır mimari

---

# 2. TEKNOLOJİ STACK

```text
Framework
└── Next.js App Router

Language
└── TypeScript

Frontend
├── React
├── Server Components
└── Client Components gerektiğinde

CSS
├── Tailwind CSS
veya
└── CSS Modules

Animation
├── GSAP
├── ScrollTrigger
└── Framer Motion yalnızca gerekli alanlarda

Image
└── next/image

Font
└── next/font

SEO
├── Next.js Metadata API
├── generateMetadata()
├── sitemap.ts
├── robots.ts
└── JSON-LD

Validation
└── Zod

Forms
├── Server Actions
veya
└── Route Handlers

Security
├── CSP
├── Security Headers
├── Input Validation
├── Rate Limiting
└── Bot / Spam Protection

Deployment
└── Vercel
```

Next.js App Router, route, component ve uygulama mantığının `app` dizini altında organize edilmesini destekler. Metadata API ise statik `metadata` veya dinamik `generateMetadata()` yoluyla sayfa bazlı SEO verisi üretebilir.

---

# 3. ANA URL MİMARİSİ

Ana domain:

```text
https://www.arcanushotelssorgun.com/
```

Dil yapısı:

```text
/tr/
/en/
/de/
/ru/
```

URL'ler:

```text
/tr/odalar/
/tr/odalar/standart-oda/

/en/rooms/
/en/rooms/standard-room/

/de/zimmer/
/de/zimmer/standardzimmer/

/ru/nomera/
/ru/nomera/standartnyy-nomer/
```

---

# 4. URL KURALLARI

URL içerisinde:

```text
✓ lowercase
✓ kısa
✓ açıklayıcı
✓ tire kullanımı
✓ Türkçe karakter kullanılmaması
✓ gereksiz parametre kullanılmaması
✓ içerik hiyerarşisinin belirtilmesi
```

Örnek:

```text
DOĞRU

/tr/odalar/aile-odasi/
/tr/yeme-icme/italyan-restorani/
/tr/deneyimler/aquapark/
```

Kullanılmamalı:

```text
/tr/page?id=26

/tr/Konaklama/StandartOda

/tr/standart_oda

/tr/otel/konaklama/odalar/standart-oda-detay-sayfasi
```

---

# 5. NEXT.JS ANA KLASÖR YAPISI

```text
arcanus-hotels/
│
├── public/
│   │
│   ├── images/
│   │   ├── hotel/
│   │   ├── rooms/
│   │   ├── restaurants/
│   │   ├── experiences/
│   │   ├── spa/
│   │   ├── meetings/
│   │   ├── gallery/
│   │   └── blog/
│   │
│   ├── videos/
│   │
│   ├── icons/
│   │
│   └── fonts/
│
├── src/
│   │
│   ├── app/
│   ├── components/
│   ├── features/
│   ├── lib/
│   ├── config/
│   ├── data/
│   ├── hooks/
│   ├── types/
│   ├── styles/
│   └── utils/
│
├── .env.local
├── .env.example
├── next.config.ts
├── middleware.ts
├── eslint.config.mjs
├── tsconfig.json
├── package.json
└── README.md
```

---

# 6. APP ROUTER KLASÖR YAPISI

```text
src/
└── app/
    │
    ├── layout.tsx
    ├── not-found.tsx
    ├── error.tsx
    ├── global-error.tsx
    ├── loading.tsx
    │
    ├── sitemap.ts
    ├── robots.ts
    │
    ├── icon.png
    ├── apple-icon.png
    ├── opengraph-image.jpg
    │
    ├── api/
    │   ├── contact/
    │   │   └── route.ts
    │   │
    │   ├── newsletter/
    │   │   └── route.ts
    │   │
    │   └── booking/
    │       └── route.ts
    │
    └── [locale]/
        │
        ├── layout.tsx
        ├── page.tsx
        │
        ├── otel/
        ├── odalar/
        ├── yeme-icme/
        ├── deneyimler/
        ├── spa-wellness/
        ├── toplanti-etkinlik/
        ├── side/
        ├── galeri/
        ├── blog/
        ├── iletisim/
        └── rezervasyon/
```

---

# 7. TÜRKÇE SITE MİMARİSİ

```text
/tr/

├── /otel/
│   ├── /hakkimizda/
│   ├── /konsept/
│   ├── /surdurulebilirlik/
│   ├── /galeri/
│   └── /konum/
│
├── /odalar/
│   ├── /standart-oda/
│   ├── /standart-oda-bahce-manzarali/
│   ├── /standart-oda-deniz-manzarali/
│   ├── /aile-odasi/
│   ├── /superior-oda/
│   └── /suite/
│
├── /yeme-icme/
│   ├── /ana-restoran/
│   ├── /turk-restorani/
│   ├── /italyan-restorani/
│   ├── /meksika-restorani/
│   ├── /uzakdogu-restorani/
│   ├── /balik-restorani/
│   ├── /aqua-snack/
│   └── /sahil-snack/
│
├── /deneyimler/
│   ├── /aktivite-ve-eglence/
│   ├── /havuzlar/
│   ├── /aquapark/
│   ├── /cocuk-kulubu/
│   ├── /spor/
│   ├── /gece-eglencesi/
│   ├── /plaj/
│   └── /pavilyon/
│
├── /spa-wellness/
│   ├── /spa/
│   ├── /turk-hamami/
│   ├── /masaj/
│   ├── /sauna/
│   └── /fitness/
│
├── /toplanti-etkinlik/
│   ├── /toplanti-salonlari/
│   ├── /kurumsal-etkinlikler/
│   └── /ozel-etkinlikler/
│
├── /side/
│   ├── /side-tatil-rehberi/
│   ├── /side-gezilecek-yerler/
│   ├── /manavgat-gezilecek-yerler/
│   ├── /side-aile-tatili/
│   ├── /side-her-sey-dahil-otel/
│   ├── /side-denize-sifir-otel/
│   └── /side-aquaparkli-otel/
│
├── /galeri/
│
├── /blog/
│   └── /[slug]/
│
├── /iletisim/
│
└── /rezervasyon/
```

---

# 8. NEXT.JS ROUTE YAPISI

```text
src/app/[locale]/

├── layout.tsx
├── page.tsx

├── otel/
│   ├── page.tsx
│   │
│   ├── hakkimizda/
│   │   └── page.tsx
│   │
│   ├── konsept/
│   │   └── page.tsx
│   │
│   ├── surdurulebilirlik/
│   │   └── page.tsx
│   │
│   ├── galeri/
│   │   └── page.tsx
│   │
│   └── konum/
│       └── page.tsx

├── odalar/
│   ├── page.tsx
│   └── [slug]/
│       ├── page.tsx
│       ├── loading.tsx
│       └── not-found.tsx

├── yeme-icme/
│   ├── page.tsx
│   └── [slug]/
│       └── page.tsx

├── deneyimler/
│   ├── page.tsx
│   └── [slug]/
│       └── page.tsx

├── spa-wellness/
│   ├── page.tsx
│   └── [slug]/
│       └── page.tsx

├── toplanti-etkinlik/
│   ├── page.tsx
│   └── [slug]/
│       └── page.tsx

├── side/
│   ├── page.tsx
│   └── [slug]/
│       └── page.tsx

├── galeri/
│   └── page.tsx

├── blog/
│   ├── page.tsx
│   └── [slug]/
│       └── page.tsx

├── iletisim/
│   └── page.tsx

└── rezervasyon/
    └── page.tsx
```

---

# 9. COMPONENT MİMARİSİ

```text
src/components/

├── layout/
│   ├── Header/
│   ├── Footer/
│   ├── Navigation/
│   ├── MobileMenu/
│   └── LanguageSwitcher/
│
├── ui/
│   ├── Button/
│   ├── Heading/
│   ├── Container/
│   ├── Section/
│   ├── Modal/
│   ├── Accordion/
│   ├── Tabs/
│   └── Breadcrumb/
│
├── sections/
│   ├── Hero/
│   ├── Intro/
│   ├── RoomGrid/
│   ├── RoomSlider/
│   ├── ExperienceGrid/
│   ├── RestaurantGrid/
│   ├── Gallery/
│   ├── CTA/
│   ├── Location/
│   └── BookingBar/
│
├── seo/
│   ├── JsonLd.tsx
│   ├── HotelSchema.tsx
│   ├── RoomSchema.tsx
│   ├── RestaurantSchema.tsx
│   └── BreadcrumbSchema.tsx
│
└── forms/
    ├── ContactForm/
    ├── NewsletterForm/
    └── BookingForm/
```

---

# 10. FEATURE-BASED MİMARİ

Büyük projede iş mantığının componentlerden ayrılması önerilir.

```text
src/features/

├── rooms/
│   ├── components/
│   ├── queries/
│   ├── schemas/
│   ├── services/
│   └── types/
│
├── restaurants/
│
├── experiences/
│
├── blog/
│
├── contact/
│
└── booking/
```

---

# 11. SEO CONFIG

```text
src/config/

├── site.ts
├── navigation.ts
├── seo.ts
└── locales.ts
```

Örnek:

```ts
export const siteConfig = {
  name: "Arcanus Hotels Sorgun",
  domain: "https://www.arcanushotelssorgun.com",
  defaultLocale: "tr",

  locales: [
    "tr",
    "en",
    "de",
    "ru"
  ]
}
```

---

# 12. ROOT METADATA

```tsx
import type { Metadata } from "next";

export const metadata: Metadata = {
  metadataBase: new URL(
    "https://www.arcanushotelssorgun.com"
  ),

  title: {
    default:
      "Arcanus Hotels Sorgun | Side Antalya",

    template:
      "%s | Arcanus Hotels Sorgun"
  },

  description:
    "Arcanus Hotels Sorgun ile Side'nin eşsiz doğasında denize sıfır, her şey dahil tatil deneyimini keşfedin.",

  applicationName:
    "Arcanus Hotels Sorgun",

  authors: [
    {
      name: "Arcanus Hotels"
    }
  ],

  creator:
    "Arcanus Hotels",

  publisher:
    "Arcanus Hotels",

  formatDetection: {
    email: false,
    address: false,
    telephone: false
  },

  robots: {
    index: true,
    follow: true,

    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1
    }
  }
};
```

Next.js metadata API; title, description, robots, canonical ve sosyal paylaşım verilerinin `layout.tsx` veya `page.tsx` üzerinden yönetilmesini destekler.

---

# 13. SAYFA BAZLI generateMetadata()

Dinamik sayfalarda:

```tsx
import type { Metadata } from "next";

type Props = {
  params: Promise<{
    locale: string;
    slug: string;
  }>;
};

export async function generateMetadata(
  { params }: Props
): Promise<Metadata> {

  const {
    locale,
    slug
  } = await params;

  const room =
    await getRoom(slug, locale);

  if (!room) {
    return {
      title:
        "Sayfa Bulunamadı"
    };
  }

  const url =
    `https://www.arcanushotelssorgun.com/${locale}/odalar/${slug}/`;

  return {
    title:
      room.seoTitle,

    description:
      room.seoDescription,

    alternates: {
      canonical: url
    },

    openGraph: {
      type: "website",

      title:
        room.seoTitle,

      description:
        room.seoDescription,

      url,

      images: [
        {
          url:
            room.ogImage,

          width: 1200,
          height: 630,

          alt:
            room.name
        }
      ]
    }
  };
}
```

---

# 14. CANONICAL URL

Her indexlenebilir sayfa kendi canonical URL'sini belirtmelidir.

Örnek:

```text
https://www.arcanushotelssorgun.com/tr/odalar/standart-oda/
```

Canonical:

```html
<link
  rel="canonical"
  href="https://www.arcanushotelssorgun.com/tr/odalar/standart-oda/"
/>
```

Canonical kullanımı aynı veya çok benzer içeriklerin farklı URL'lerden erişilebilir olduğu durumlarda arama motorlarına tercih edilen URL'yi bildirmek için kullanılır.

---

# 15. HREFLANG

Dil sayfaları birbirlerini göstermelidir.

```tsx
alternates: {
  canonical:
    "https://www.arcanushotelssorgun.com/tr/odalar/standart-oda/",

  languages: {
    "tr-TR":
      "https://www.arcanushotelssorgun.com/tr/odalar/standart-oda/",

    "en-US":
      "https://www.arcanushotelssorgun.com/en/rooms/standard-room/",

    "de-DE":
      "https://www.arcanushotelssorgun.com/de/zimmer/standardzimmer/",

    "ru-RU":
      "https://www.arcanushotelssorgun.com/ru/nomera/standartnyy-nomer/",

    "x-default":
      "https://www.arcanushotelssorgun.com/en/"
  }
}
```

---

# 16. SEO TITLE STANDARDI

Ana sayfa:

```text
Arcanus Hotels Sorgun | Side Antalya Her Şey Dahil Otel
```

Odalar:

```text
Standart Oda | Arcanus Hotels Sorgun
```

Kategori:

```text
Odalar & Suitler | Arcanus Hotels Sorgun
```

Restoran:

```text
İtalyan Restoranı | Arcanus Hotels Sorgun
```

Deneyim:

```text
Aquapark | Arcanus Hotels Sorgun
```

Lokasyon:

```text
Side Otel | Arcanus Hotels Sorgun Antalya
```

---

# 17. META DESCRIPTION STANDARDI

Her sayfa benzersiz açıklamaya sahip olmalıdır.

Örnek:

```text
Arcanus Hotels Sorgun'un modern Standart Odalarını keşfedin. Side'nin eşsiz doğasında konforlu ve keyifli bir tatil deneyimi yaşayın.
```

Aynı description:

```text
50 farklı sayfada
```

kullanılmamalıdır.

---

# 18. HEADING HİYERARŞİSİ

Her sayfada normalde:

```text
1 × H1
```

kullanılır.

Örnek:

```html
<h1>Side'da Unutulmaz Bir Tatil Deneyimi</h1>

<h2>Odalarımız</h2>

<h2>Yeme & İçme</h2>

<h2>Deneyimler</h2>

<h3>Standart Oda</h3>

<h3>Aile Odası</h3>
```

Heading'ler yalnızca görsel büyüklük için kullanılmamalıdır.

---

# 19. STRUCTURED DATA

Önerilen Schema yapıları:

```text
Organization
Hotel
LodgingBusiness
HotelRoom
Restaurant
BreadcrumbList
FAQPage
WebSite
WebPage
ImageObject
VideoObject
BlogPosting
```

---

# 20. HOTEL SCHEMA

```tsx
const hotelSchema = {
  "@context":
    "https://schema.org",

  "@type":
    "Hotel",

  name:
    "Arcanus Hotels Sorgun",

  url:
    "https://www.arcanushotelssorgun.com/",

  image:
    "https://www.arcanushotelssorgun.com/images/hotel/arcanus-hotels-sorgun.jpg",

  address: {
    "@type":
      "PostalAddress",

    addressLocality:
      "Side",

    addressRegion:
      "Antalya",

    addressCountry:
      "TR"
  }
};
```

Schema içerisinde yalnızca doğrulanabilir ve sayfa içeriğiyle uyumlu bilgiler kullanılmalıdır.

---

# 21. BREADCRUMB

Örnek:

```text
Ana Sayfa
>
Odalar
>
Standart Oda
```

Schema:

```json
{
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    {
      "@type": "ListItem",
      "position": 1,
      "name": "Ana Sayfa"
    },
    {
      "@type": "ListItem",
      "position": 2,
      "name": "Odalar"
    },
    {
      "@type": "ListItem",
      "position": 3,
      "name": "Standart Oda"
    }
  ]
}
```

---

# 22. SITEMAP

Dosya:

```text
src/app/sitemap.ts
```

Örnek:

```tsx
import type {
  MetadataRoute
} from "next";

export default async function sitemap():
Promise<MetadataRoute.Sitemap> {

  const baseUrl =
    "https://www.arcanushotelssorgun.com";

  return [
    {
      url:
        `${baseUrl}/tr/`,

      lastModified:
        new Date(),

      changeFrequency:
        "weekly",

      priority:
        1
    },

    {
      url:
        `${baseUrl}/tr/odalar/`,

      lastModified:
        new Date(),

      changeFrequency:
        "weekly",

      priority:
        0.9
    },

    {
      url:
        `${baseUrl}/tr/yeme-icme/`,

      lastModified:
        new Date(),

      changeFrequency:
        "monthly",

      priority:
        0.8
    }
  ];
}
```

Sitemap, arama motorlarının URL'leri ve güncellemeleri keşfetmesini kolaylaştırır ve dinamik içerikli sitelerde programatik oluşturulması özellikle kullanışlıdır.

---

# 23. SITEMAP BÖLÜMLENDİRMESİ

Site büyüdüğünde:

```text
/sitemap.xml

/sitemap-pages.xml
/sitemap-rooms.xml
/sitemap-restaurants.xml
/sitemap-blog.xml
/sitemap-images.xml
```

şeklinde ayrılabilir.

---

# 24. ROBOTS.TXT

Dosya:

```text
src/app/robots.ts
```

Örnek:

```tsx
import type {
  MetadataRoute
} from "next";

export default function robots():
MetadataRoute.Robots {

  return {
    rules: {
      userAgent:
        "*",

      allow:
        "/",

      disallow: [
        "/api/",
        "/admin/",
        "/panel/",
        "/preview/",
        "/private/"
      ]
    },

    sitemap:
      "https://www.arcanushotelssorgun.com/sitemap.xml",

    host:
      "https://www.arcanushotelssorgun.com"
  };
}
```

Robots dosyası crawler erişimini kontrol etmek için kullanılabilir; ancak indekslenmesini kesin olarak istemediğiniz erişilebilir sayfalar için ayrıca `noindex` kullanılması önemlidir.

---

# 25. INDEXLENMEMESİ GEREKEN SAYFALAR

Örneğin:

```text
/admin/
/panel/
/preview/
/api/
/arama/
/rezervasyon-sonuc/
/rezervasyon-basarisiz/
/rezervasyon-basarili/
```

Gerektiğinde:

```tsx
export const metadata = {
  robots: {
    index: false,
    follow: false
  }
};
```

---

# 26. IMAGE SEO

Tüm görseller:

```tsx
import Image from "next/image";

<Image
  src="/images/rooms/standard-room.webp"
  alt="Arcanus Hotels Sorgun Standart Oda"
  width={1600}
  height={1000}
  quality={85}
/>
```

Kullanılmamalı:

```text
image1.jpg
IMG_8373.jpg
DSC000123.jpg
```

Önerilen:

```text
arcanus-sorgun-standard-room.webp
arcanus-sorgun-family-room.webp
arcanus-sorgun-pool.webp
arcanus-sorgun-beach.webp
```

---

# 27. ALT TEXT

Kötü:

```text
otel
resim
oda
foto
```

Doğru:

```text
Arcanus Hotels Sorgun deniz manzaralı standart oda
```

Ancak anahtar kelime doldurma yapılmamalıdır.

---

# 28. IMAGE FORMAT

Öncelik:

```text
AVIF
↓
WebP
↓
JPEG
```

Dekoratif:

```text
SVG
```

---

# 29. HERO IMAGE

Hero görseli LCP elementiyse:

```tsx
<Image
  priority
  fetchPriority="high"
  ...
/>
```

kullanılabilir.

Her görsele `priority` verilmemelidir.

---

# 30. FONT OPTİMİZASYONU

```tsx
import {
  Inter
} from "next/font/google";

const inter = Inter({
  subsets: [
    "latin"
  ],

  display:
    "swap"
});
```

Harici font yükleme mümkün olduğunca azaltılmalıdır.

---

# 31. INTERNAL LINKING

Ana sayfa:

```text
Ana Sayfa
↓
Odalar
↓
Standart Oda
```

Blog:

```text
Side'da Çocuklu Aileler İçin Tatil

→ Çocuk Kulübü
→ Aquapark
→ Aile Odası
→ Rezervasyon
```

Bu yapı:

```text
Blog
→ Landing Page
→ Ticari Sayfa
```

ilişkisini güçlendirir.

---

# 32. SEO LANDING PAGE YAPISI

Organik arama için:

```text
/tr/side/side-her-sey-dahil-otel/

/tr/side/side-denize-sifir-otel/

/tr/side/side-aile-oteli/

/tr/side/side-aquaparkli-otel/

/tr/side/cocuklu-aile-oteli/
```

oluşturulabilir.

Ancak sayfaların içerikleri gerçekten birbirinden farklı olmalıdır.

Sadece:

```text
Side Her Şey Dahil Otel
```

ifadesini değiştirerek onlarca aynı sayfa oluşturulmamalıdır.

---

# 33. BLOG SEO MİMARİSİ

```text
/blog/

/blog/side-tatil-rehberi/

/blog/side-gezilecek-yerler/

/blog/manavgat-gezilecek-yerler/

/blog/side-cocuklu-aile-tatili/

/blog/side-tatil-ne-zaman-yapilir/
```

Blog içerikleri doğrudan ticari sayfalara link vermelidir.

---

# 34. CMS MODELİ

```text
Room
Restaurant
Experience
Spa
Meeting
Blog
Gallery
SEO
Navigation
Settings
```

Örnek Room:

```ts
interface Room {
  id: string;

  slug: string;

  locale: string;

  title: string;

  shortDescription: string;

  description: string;

  size?: string;

  capacity?: number;

  features: string[];

  heroImage: string;

  gallery: string[];

  seoTitle: string;

  seoDescription: string;

  canonical?: string;

  ogImage?: string;

  index: boolean;
}
```

---

# 35. API MİMARİSİ

```text
src/app/api/

├── contact/
│   └── route.ts
│
├── newsletter/
│   └── route.ts
│
└── booking/
    └── route.ts
```

---

# 36. API INPUT VALIDATION

Her kullanıcı girdisi doğrulanmalıdır.

```ts
import {
  z
} from "zod";

export const contactSchema =
  z.object({

    name:
      z.string()
       .min(2)
       .max(100),

    email:
      z.string()
       .email()
       .max(255),

    phone:
      z.string()
       .max(30)
       .optional(),

    message:
      z.string()
       .min(10)
       .max(2000)

  });
```

Client-side validation tek başına güvenlik değildir.

Validation mutlaka server tarafında yapılmalıdır.

---

# 37. ENVIRONMENT VARIABLES

Kullanılmalı:

```text
.env.local
```

Örnek:

```env
DATABASE_URL=

CMS_API_URL=

CMS_API_TOKEN=

RESEND_API_KEY=

RECAPTCHA_SECRET=

NEXT_PUBLIC_SITE_URL=
```

Secret değerler:

```text
NEXT_PUBLIC_
```

ile başlamamalıdır.

---

# 38. ENV KULLANIMI

Server:

```ts
const secret =
  process.env.CMS_API_TOKEN;
```

Client tarafına:

```text
CMS_API_TOKEN
DATABASE_PASSWORD
SMTP_PASSWORD
PRIVATE_API_KEY
```

asla gönderilmemelidir.

---

# 39. GÜVENLİK HEADER'LARI

Önerilen header'lar:

```text
Content-Security-Policy
X-Content-Type-Options
Referrer-Policy
Permissions-Policy
Strict-Transport-Security
X-Frame-Options
```

---

# 40. NEXT.CONFIG.TS

```ts
import type {
  NextConfig
} from "next";

const securityHeaders = [

  {
    key:
      "X-Content-Type-Options",

    value:
      "nosniff"
  },

  {
    key:
      "X-Frame-Options",

    value:
      "SAMEORIGIN"
  },

  {
    key:
      "Referrer-Policy",

    value:
      "strict-origin-when-cross-origin"
  },

  {
    key:
      "Permissions-Policy",

    value:
      "camera=(), microphone=(), geolocation=()"
  },

  {
    key:
      "Strict-Transport-Security",

    value:
      "max-age=63072000; includeSubDomains; preload"
  }
];

const nextConfig:
NextConfig = {

  poweredByHeader:
    false,

  compress:
    true,

  images: {

    formats: [
      "image/avif",
      "image/webp"
    ],

    remotePatterns: [
      {
        protocol:
          "https",

        hostname:
          "cdn.example.com"
      }
    ]
  },

  async headers() {

    return [
      {
        source:
          "/(.*)",

        headers:
          securityHeaders
      }
    ];
  }
};

export default nextConfig;
```

---

# 41. CONTENT SECURITY POLICY

Üretim ortamında CSP uygulanmalıdır.

Örnek başlangıç politikası:

```text
default-src 'self';

script-src
'self';

style-src
'self'
'unsafe-inline';

img-src
'self'
data:
blob:
https:;

font-src
'self'
data:;

connect-src
'self'
https:;

frame-ancestors
'self';

base-uri
'self';

form-action
'self';
```

Google Analytics, GTM, YouTube veya rezervasyon sağlayıcısı kullanılıyorsa ilgili domainler ayrıca izin listesine eklenmelidir.

CSP kör şekilde kopyalanmamalı, kullanılan servislerle birlikte test edilmelidir.

---

# 42. XSS GÜVENLİĞİ

Kaçınılmalı:

```tsx
dangerouslySetInnerHTML
```

CMS HTML göstermek zorundaysa sanitize edilmelidir.

Örnek:

```text
DOMPurify
```

veya server-side güvenli sanitizer kullanılabilir.

---

# 43. FORM GÜVENLİĞİ

Contact form:

```text
Server validation
+
Rate limiting
+
Honeypot
+
Bot detection
+
CAPTCHA gerektiğinde
```

uygulanmalıdır.

---

# 44. RATE LIMITING

Örneğin:

```text
POST /api/contact
```

için:

```text
5 istek / dakika / IP
```

gibi sınır uygulanabilir.

Servis seçenekleri:

```text
Upstash Redis
Cloudflare
Vercel Firewall
```

---

# 45. CSRF

Cookie tabanlı authentication veya hassas mutation varsa:

```text
SameSite cookie
Origin kontrolü
CSRF token
```

uygulanmalıdır.

---

# 46. COOKIE GÜVENLİĞİ

Authentication cookie:

```text
HttpOnly
Secure
SameSite=Lax
Path=/
```

tercih edilmelidir.

---

# 47. ADMIN PANEL

Admin panel:

```text
/admin
```

public site mimarisinden ayrılmalıdır.

Minimum:

```text
Authentication
Role Based Access Control
Rate Limiting
Audit Logging
2FA
Session Expiry
Secure Cookies
```

kullanılmalıdır.

---

# 48. CMS PREVIEW

Preview URL:

```text
/preview/
```

Google tarafından indekslenmemelidir.

```text
noindex
nofollow
```

---

# 49. OPEN REDIRECT KORUMASI

Şu tarz kullanım yapılmamalıdır:

```text
?redirect=https://evil.com
```

Redirect hedefleri whitelist edilmelidir.

---

# 50. FILE UPLOAD GÜVENLİĞİ

CMS dosya yükleme varsa:

Kontrol:

```text
MIME Type
File Extension
File Size
Filename
Image Dimensions
Virus/Malware Scan
```

Dosyalar executable olmamalıdır.

---

# 51. ERROR HANDLING

```text
src/app/error.tsx

src/app/global-error.tsx

src/app/not-found.tsx
```

Kullanıcıya:

```text
Database error
API key
Stack trace
Server path
```

gösterilmemelidir.

---

# 52. 404 SAYFASI

404:

```text
HTTP 404
```

dönmelidir.

Sayfa:

```text
Aradığınız sayfa bulunamadı.

Ana Sayfa
Odalar
Deneyimler
İletişim
```

gibi yardımcı linkler içermelidir.

---

# 53. REDIRECT STRATEJİSİ

Eski site URL'leri yeni sisteme taşınırken 301 kullanılmalıdır.

Örnek:

```text
ESKİ

/konaklama/standart-oda

↓

YENİ

/tr/odalar/standart-oda/
```

301:

```ts
{
  source:
    "/konaklama/standart-oda",

  destination:
    "/tr/odalar/standart-oda/",

  permanent:
    true
}
```

---

# 54. REDIRECT MAP

Taşınmadan önce:

```text
redirect-map.csv
```

oluşturulmalıdır.

Örnek:

```text
old_url,new_url,status

/konaklama/standart-oda,
/tr/odalar/standart-oda/,
301
```

Mevcut SEO değerinin korunması açısından migration sürecinin en kritik parçalarından biridir.

---

# 55. TRAILING SLASH KARARI

Site genelinde tek standart kullanılmalıdır.

Önerilen:

```text
/tr/odalar/
```

ve:

```text
/tr/odalar/standart-oda/
```

Biri slash'li biri slash'siz çalışıp iki farklı indexlenebilir URL üretmemelidir.

---

# 56. WWW STANDARDI

Tek versiyon seçilmeli:

```text
https://www.arcanushotelssorgun.com
```

veya:

```text
https://arcanushotelssorgun.com
```

Diğeri:

```text
301
```

ile ana domaine yönlendirilmelidir.

---

# 57. HTTP → HTTPS

```text
http://
```

isteklerinin tamamı:

```text
https://
```

adresine 301 yönlendirilmelidir.

---

# 58. PERFORMANCE STRATEJİSİ

Öncelik:

```text
Server Components
```

Client Component sadece:

```text
Slider
Menu
Modal
Tabs
Interactive Gallery
Booking Widget
Animation
```

gibi gerçekten interaktif alanlarda kullanılmalıdır.

---

# 59. "USE CLIENT"

Şu yapılmamalıdır:

```tsx
"use client";
```

her componentin başına eklemek.

Bu:

```text
JS bundle
hydration
client processing
```

maliyetini artırabilir.

---

# 60. DYNAMIC IMPORT

Ağır componentler:

```tsx
const Gallery =
  dynamic(
    () =>
      import(
        "@/components/Gallery"
      )
  );
```

ile gerektiğinde yüklenebilir.

---

# 61. VIDEO OPTİMİZASYONU

Hero video:

```text
MP4 / WebM
```

kullanılabilir.

Ancak:

```text
poster image
muted
playsInline
preload="metadata"
```

düşünülmelidir.

Mobil cihazlarda büyük video yerine optimize görsel gösterilebilir.

---

# 62. CORE WEB VITALS HEDEFİ

Hedef:

```text
LCP
< 2.5s

INP
< 200ms

CLS
< 0.1
```

---

# 63. CLS ÖNLEMLERİ

Görseller:

```text
width
height
```

oranları belli olmalıdır.

Slider ve booking widget için önceden alan ayrılmalıdır.

---

# 64. THIRD PARTY SCRIPT

GTM, Analytics ve benzeri scriptler:

```tsx
import Script
from "next/script";
```

üzerinden kontrollü yüklenmelidir.

Her üçüncü parti script:

```text
Performance
Privacy
Security
```

açısından değerlendirilmelidir.

---

# 65. GOOGLE TAG MANAGER

Önerilen event yapısı:

```text
booking_click

room_view

restaurant_view

contact_submit

phone_click

whatsapp_click

email_click

gallery_open

language_change
```

---

# 66. BOOKING FUNNEL

Analytics:

```text
Homepage
↓
Room
↓
Booking CTA
↓
Booking Engine
↓
Reservation
```

takip edilmelidir.

---

# 67. SEO COMPONENT

```text
src/components/seo/

├── JsonLd.tsx
├── BreadcrumbJsonLd.tsx
├── HotelJsonLd.tsx
├── RoomJsonLd.tsx
├── RestaurantJsonLd.tsx
└── BlogJsonLd.tsx
```

---

# 68. DATA LAYER

```text
src/data/

├── navigation/
├── locales/
├── seo/
└── fallback/
```

Static fallback verileri burada tutulabilir.

CMS verileri doğrudan component içerisinde çekilmemelidir.

---

# 69. LIB KLASÖRÜ

```text
src/lib/

├── api/
├── cms/
├── seo/
├── security/
├── validation/
├── analytics/
└── i18n/
```

---

# 70. SEO UTILITIES

```text
src/lib/seo/

├── metadata.ts
├── canonical.ts
├── hreflang.ts
├── schema.ts
└── sitemap.ts
```

---

# 71. SECURITY UTILITIES

```text
src/lib/security/

├── rate-limit.ts
├── sanitize.ts
├── csrf.ts
├── origin.ts
└── headers.ts
```

---

# 72. TYPES

```text
src/types/

├── room.ts
├── restaurant.ts
├── experience.ts
├── seo.ts
├── blog.ts
└── cms.ts
```

---

# 73. MIDDLEWARE

Middleware:

```text
Dil yönlendirme
Auth kontrolü
Admin kontrolü
Bazı güvenlik kontrolleri
```

için kullanılabilir.

Örnek mantık:

```text
/

→ browser/user preference

→ /tr/
```

Ancak Googlebot veya kullanıcıları sürekli ve hatalı dil yönlendirmelerine sokacak agresif Geo/IP redirect uygulanmamalıdır.

---

# 74. CACHE STRATEJİSİ

Otel içerikleri:

```text
Room
Restaurant
Spa
Experiences
```

çok sık değişmediği için cache edilebilir.

Blog:

```text
ISR
```

yaklaşımı kullanılabilir.

Rezervasyon:

```text
dynamic
```

olmalıdır.

---

# 75. ÖNERİLEN REVALIDATE

Örnek:

```ts
export const revalidate =
  3600;
```

veya CMS webhook üzerinden:

```text
On-demand revalidation
```

kullanılabilir.

---

# 76. SEO İÇİN SERVER RENDER

SEO kritik içerikler ilk HTML içerisinde bulunmalıdır:

```text
H1
Title
Description
Room description
Restaurant description
Breadcrumb
Internal links
```

JS çalışmadan önce HTML çıktısında bulunmaları tercih edilir.

---

# 77. GALERİ SEO

Galeri URL:

```text
/tr/galeri/
```

Kategori:

```text
Otel
Odalar
Restoranlar
Havuz
Plaj
Spa
Etkinlik
```

Her görsel:

```text
alt
width
height
```

değerlerine sahip olmalıdır.

---

# 78. RESERVATION URL

Önerilen:

```text
/tr/rezervasyon/
```

Ancak rezervasyon motoru dış sistemdeyse:

```text
booking.arcanus...
```

veya harici sağlayıcı kullanılabilir.

Dış booking URL'leri:

```text
noopener
noreferrer
```

ve güvenlik açısından doğru şekilde açılmalıdır.

---

# 79. CONTACT PAGE

URL:

```text
/tr/iletisim/
```

İçerik:

```text
Hotel name
Address
Phone
Email
Map
Directions
Transfer information
Contact form
```

Local/Hotel Schema ile ilişkilendirilmelidir.

---

# 80. SIDE SEO CONTENT HUB

SEO açısından güçlü konu kümelerinden biri:

```text
/tr/side/
```

olacaktır.

Alt sayfalar:

```text
Side Tatil Rehberi

Side Gezilecek Yerler

Manavgat Gezilecek Yerler

Side Plajları

Side Aile Tatili

Side Her Şey Dahil Oteller

Side Denize Sıfır Otel

Side Aquaparklı Otel
```

---

# 81. CONTENT SILO

```text
SIDE

├── Gezilecek Yerler
├── Tatil Rehberi
├── Aile Tatili
└── Otel Deneyimi

            ↓

ARCANUS

├── Odalar
├── Restoran
├── Aquapark
├── Kids Club
└── Rezervasyon
```

Amaç yalnızca trafik değil:

```text
Arama
→ Bilgilendirme
→ Otel
→ Oda
→ Rezervasyon
```

akışıdır.

---

# 82. INTERNAL SEARCH

Site içi arama varsa:

```text
/tr/arama?q=oda
```

gibi sonuç sayfaları varsayılan olarak:

```text
noindex
```

yapılabilir.

---

# 83. FILTER URL'LARI

Örneğin:

```text
/odalar/?capacity=4

/odalar/?view=sea
```

ayrı SEO sayfası olarak kullanılmayacaksa canonical:

```text
/tr/odalar/
```

olmalıdır.

---

# 84. PAGINATION

Blog:

```text
/blog/
/blog/page/2/
/blog/page/3/
```

Sayfalar crawl edilebilir olmalı ve internal linking korunmalıdır.

---

# 85. OPEN GRAPH

Her önemli sayfada:

```text
1200 × 630
```

OG görseli hazırlanmalıdır.

Örnek:

```text
/og/home.jpg
/og/rooms.jpg
/og/standard-room.jpg
/og/aquapark.jpg
```

---

# 86. TWITTER / X CARD

```tsx
twitter: {
  card:
    "summary_large_image",

  title:
    "...",

  description:
    "...",

  images: [
    "..."
  ]
}
```

---

# 87. FAVICON

```text
favicon.ico
icon.png
apple-icon.png
```

App Router metadata dosyaları arasında tutulabilir.

---

# 88. MANIFEST

PWA düşünülüyorsa:

```text
manifest.webmanifest
```

hazırlanabilir.

---

# 89. SEO MIGRATION CHECKLIST

Yeni site yayınlanmadan:

```text
[ ] Eski URL listesi çıkarıldı

[ ] Yeni URL eşleştirmesi oluşturuldu

[ ] 301 redirect hazır

[ ] Canonical test edildi

[ ] Hreflang test edildi

[ ] Sitemap hazır

[ ] Robots hazır

[ ] Schema test edildi

[ ] 404 kontrol edildi

[ ] Internal links kontrol edildi

[ ] Broken link kontrol edildi

[ ] Metadata kontrol edildi

[ ] OG görseller kontrol edildi

[ ] Image alt kontrol edildi

[ ] Search Console hazır
```

---

# 90. SECURITY CHECKLIST

```text
[ ] HTTPS zorunlu

[ ] HSTS aktif

[ ] CSP aktif

[ ] X-Content-Type-Options

[ ] Referrer Policy

[ ] Permissions Policy

[ ] Server-side validation

[ ] Zod validation

[ ] Rate limit

[ ] Secure cookies

[ ] HttpOnly cookies

[ ] SameSite

[ ] CSRF koruması

[ ] XSS sanitization

[ ] Secret ENV kontrolü

[ ] API authentication

[ ] Admin RBAC

[ ] Admin 2FA

[ ] Upload validation

[ ] Error masking

[ ] Dependency audit
```

---

# 91. SEO CHECKLIST

```text
[ ] Unique title

[ ] Unique description

[ ] H1

[ ] Heading hierarchy

[ ] Canonical

[ ] Hreflang

[ ] Open Graph

[ ] Schema

[ ] Breadcrumb

[ ] Internal links

[ ] Image alt

[ ] Semantic HTML

[ ] sitemap.xml

[ ] robots.txt

[ ] 301 redirects

[ ] 404 page

[ ] HTTPS

[ ] Mobile responsive

[ ] Core Web Vitals
```

---

# 92. PERFORMANCE CHECKLIST

```text
[ ] Server Components

[ ] Client JS minimum

[ ] next/image

[ ] next/font

[ ] AVIF / WebP

[ ] Lazy loading

[ ] Hero image priority

[ ] Dynamic imports

[ ] Video optimization

[ ] Cache strategy

[ ] ISR

[ ] CDN

[ ] Third-party scripts minimum

[ ] CLS prevention

[ ] Bundle analysis
```

---

# 93. ÖNERİLEN TAM PROJE AĞACI

```text
arcanus-hotels/
│
├── public/
│   ├── images/
│   │   ├── hotel/
│   │   ├── rooms/
│   │   ├── restaurants/
│   │   ├── experiences/
│   │   ├── spa/
│   │   ├── meetings/
│   │   ├── gallery/
│   │   ├── blog/
│   │   └── og/
│   │
│   ├── videos/
│   └── icons/
│
├── src/
│   │
│   ├── app/
│   │   │
│   │   ├── layout.tsx
│   │   ├── not-found.tsx
│   │   ├── error.tsx
│   │   ├── sitemap.ts
│   │   ├── robots.ts
│   │   │
│   │   ├── api/
│   │   │   ├── contact/
│   │   │   ├── newsletter/
│   │   │   └── booking/
│   │   │
│   │   └── [locale]/
│   │       │
│   │       ├── layout.tsx
│   │       ├── page.tsx
│   │       │
│   │       ├── otel/
│   │       │
│   │       ├── odalar/
│   │       │
│   │       ├── yeme-icme/
│   │       │
│   │       ├── deneyimler/
│   │       │
│   │       ├── spa-wellness/
│   │       │
│   │       ├── toplanti-etkinlik/
│   │       │
│   │       ├── side/
│   │       │
│   │       ├── galeri/
│   │       │
│   │       ├── blog/
│   │       │
│   │       ├── iletisim/
│   │       │
│   │       └── rezervasyon/
│   │
│   ├── components/
│   │   ├── layout/
│   │   ├── sections/
│   │   ├── ui/
│   │   ├── seo/
│   │   └── forms/
│   │
│   ├── features/
│   │   ├── rooms/
│   │   ├── restaurants/
│   │   ├── experiences/
│   │   ├── blog/
│   │   ├── contact/
│   │   └── booking/
│   │
│   ├── lib/
│   │   ├── api/
│   │   ├── cms/
│   │   ├── seo/
│   │   ├── security/
│   │   ├── validation/
│   │   ├── analytics/
│   │   └── i18n/
│   │
│   ├── config/
│   │   ├── site.ts
│   │   ├── navigation.ts
│   │   ├── seo.ts
│   │   └── locales.ts
│   │
│   ├── hooks/
│   ├── data/
│   ├── types/
│   ├── utils/
│   └── styles/
│
├── middleware.ts
├── next.config.ts
├── tsconfig.json
├── eslint.config.mjs
├── .env.local
├── .env.example
├── package.json
└── README.md
```

---

# 94. ÖNERİLEN ANA NAVIGATION

```text
OTEL

ODALAR

YEME & İÇME

DENEYİMLER

SPA & WELLNESS

TOPLANTI & ETKİNLİK

GALERİ

SIDE

İLETİŞİM

REZERVASYON
```

---

# 95. SEO URL SONUÇ MİMARİSİ

En önemli ticari URL'ler:

```text
https://www.arcanushotelssorgun.com/tr/

https://www.arcanushotelssorgun.com/tr/odalar/

https://www.arcanushotelssorgun.com/tr/odalar/standart-oda/

https://www.arcanushotelssorgun.com/tr/odalar/aile-odasi/

https://www.arcanushotelssorgun.com/tr/yeme-icme/

https://www.arcanushotelssorgun.com/tr/deneyimler/

https://www.arcanushotelssorgun.com/tr/deneyimler/aquapark/

https://www.arcanushotelssorgun.com/tr/deneyimler/cocuk-kulubu/

https://www.arcanushotelssorgun.com/tr/spa-wellness/

https://www.arcanushotelssorgun.com/tr/toplanti-etkinlik/

https://www.arcanushotelssorgun.com/tr/side/

https://www.arcanushotelssorgun.com/tr/galeri/

https://www.arcanushotelssorgun.com/tr/iletisim/

https://www.arcanushotelssorgun.com/tr/rezervasyon/
```

---

# 96. MİMARİ ÖZET

Projede temel prensip:

```text
URL
↓
Route
↓
Page
↓
Server Component
↓
CMS / Data
↓
SEO Metadata
↓
Schema
↓
HTML
```

olmalıdır.

SEO tarafında:

```text
URL
+
Title
+
Description
+
H1
+
Content
+
Internal Link
+
Canonical
+
Hreflang
+
Schema
+
Sitemap
```

birlikte çalışmalıdır.

Güvenlik tarafında:

```text
HTTPS
+
Security Headers
+
CSP
+
Server Validation
+
Rate Limiting
+
Secret Management
+
Secure Cookies
+
Admin Security
```

temel standart olmalıdır.

Performans tarafında:

```text
Server Components
+
Minimum JavaScript
+
Optimized Images
+
Optimized Fonts
+
Caching
+
ISR
+
CDN
```

yaklaşımı kullanılmalıdır.

---

# 97. SONUÇ

Arcanus Hotels Sorgun için önerilen yapı:

```text
Next.js App Router
+
TypeScript
+
Server Components
+
SEO Friendly URL
+
4 Dil
+
Dynamic Metadata
+
Canonical
+
Hreflang
+
Schema.org
+
Dynamic Sitemap
+
Robots
+
Security Headers
+
CSP
+
Rate Limiting
+
Secure Forms
+
Optimized Images
+
Core Web Vitals
```

temelinde kurulmalıdır.

Bu mimari hem:

```text
Google SEO
```

hem:

```text
mobil performans
```

hem:

```text
güvenlik
```

hem de:

```text
uzun vadeli yönetilebilirlik
```

açısından ölçeklenebilir bir yapı oluşturacaktır.