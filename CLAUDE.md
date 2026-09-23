@AGENTS.md

# Arcanus Hotels Sorgun — proje rehberi

Side/Sorgun'daki Arcanus Hotels için çok dilli otel sitesi. Görsel referans
**https://makenagolfandbeachclub.com/** — layout, tipografi, boşluk ritmi ve motion
mümkün olduğunca **birebir** eşleştirilir; yalnızca görseller ve metinler Arcanus'a aittir.

Kaynak dokümanlar: `Dosya.md` (route mimarisi, 4 dil, SEO, güvenlik hedefleri) ve
`Front-end.md` (referansın görsel dili).

## Çalışma kuralları

1. **Her şey Türkçe**: sohbet, dokümanlar, kod yorumları, commit mesajları. Kod
   tanımlayıcıları İngilizce ve `camelCase`/`PascalCase` kalır.
2. **Kompozisyonu tahmin etme.** Bir bölümü yazmadan önce referansın canlı DOM'undan
   bölüm sırasını, utility sınıflarını ve `col-start` / `col-span` değerlerini çıkar;
   sonra kendi çıktını **aynı viewport'ta ölçüp** karşılaştır. Kullanıcı sayfayı bölüm
   bölüm, kendi eleman seçicisiyle denetliyor; "yaklaşık benzer" kabul edilmiyor.
3. **Görsel sonuç ölçüttür.** "Build geçti / tip temiz" tek başına bitmiş sayılmaz;
   tarayıcıda açıp referansla karşılaştır.
4. **Tek buton deseni**: `src/components/ui/Button.tsx` (`Button` / `ButtonLink`).
   Yeni buton stili üretilmez.

## Teknoloji

Next.js 16 (App Router, Turbopack) · React 19 · TypeScript · Tailwind v4 · GSAP +
ScrollTrigger · Lenis · Zod. Fontlar Adobe Fonts üzerinden: `ivymode` (başlık,
weight 300) ve `inter-18pt` (gövde) — kitler `src/app/[locale]/layout.tsx` içinde.
Adobe Fonts web projesine `localhost` ve `arcanushotelssorgun.com` ekli olmalı.

## Tasarım sistemi (referanstan birebir alındı)

Kök font-size viewport ile akar, **tüm ölçüler rem**, 1 Tailwind birimi `0.1rem`:

```css
html { font-size: clamp(9px, 10 * 100vw / var(--size), 10px); }
:root { --size: 390 }                  /* mobil */
@media (min-width: 650px) { :root { --size: 1500 } }
```

Yani `py-120` → `12rem` → 1440px'te 115.2px. Breakpointler: `s` = 650px, `l` = 1024px.
Grid: mobilde 6, 650px'ten itibaren 12 kolon, `column-gap: 1.7rem`, `site-max`
padding `2rem` / `5rem`.

Tipografi sınıfları `globals.css` içinde: `.t-display`, `.t-h1…h4`, `.t-title-l/m/s`,
`.t-body-l/.t-body/.t-body-s`, `.eyebrow`, `.mm-link`.

Renkler: `--color-main #203276` · `--color-cream #f8f8f3` · `--color-ink #000000b3` ·
`--color-ink-soft #2b2b2d` · `--color-white-tint` / `--color-offset-2` vb.

Easing: `--ease-out: cubic-bezier(.23,1,.32,1)` (referansta Tailwind'in `ease-out`'u
bu değere ezilmiş) ve `--ease-smooth: cubic-bezier(.19,1,.22,1)` (header ve görsel
geçişleri). **Uyarı:** `@theme` içinde `--ease-out` tanımlamak Tailwind'in `ease-out`
utility'sini de değiştirir.

## Bölümler ve URL haritası

Klasör adları İngilizce anahtarlardır; genel URL'ler `src/config/routes.ts` üzerinden
dile göre yeniden yazılır (`src/proxy.ts`).

| Anahtar | tr | en | de | ru |
|---|---|---|---|---|
| `rooms` | konaklama | accommodation | unterkunft | prozhivanie |
| `dining` | restoranlar | restaurants | restaurants | restorany |
| `bars` | barlar | bars | bars | bary |
| `experiences` | aktiviteler | activities | aktivitaeten | aktivnosti |
| `gallery` | galeri | gallery | galerie | galereya |
| `hotel` · `spa` · `meetings` · `side` · `blog` · `contact` · `booking` · `privacy` | — henüz sayfası yok | | | |

`src/proxy.ts`'teki `matcher` regex'inde nokta kaçışı **çift ters bölü** olmalı
(`\\.`); tek olursa desen "her yol"a dönüşür ve proxy kök dışında hiç çalışmaz.

## Klasör yapısı

```
src/
├── app/[locale]/           layout, page, gallery, rooms, dining, bars, experiences
├── components/
│   ├── layout/             Header, MenuOverlay, Footer, PageHero, SmoothScroll, Logo
│   ├── motion/             TextReveal, SplitTextReveal, SectionReveal
│   ├── sections/           ana sayfa blokları (Hero, Intro, Overview, About, …)
│   ├── collection/         CollectionCards, CollectionDetail (tüm liste/detay sayfaları)
│   └── ui/                 Media, Button, DragSlider, Eyebrow, icons
├── config/                 locales, routes, site
├── data/                   rooms, restaurants, bars, activities, gallery
├── i18n/                   types + dictionaries/{tr,en,de,ru}
├── lib/                    gsap, seo
└── proxy.ts                dil yönlendirme + slug rewrite
```

## Ortak bileşenler

- **`Media`** — tüm görsellerin tek geçiş noktası. Gerçek fotoğraf yokken referansın
  ton dağılımını taklit eden degrade çizer; `src` verilince `next/image` devreye girer.
  Hareketler ayrı katmanlarda: dış katman ölçek (`reveal` veya `scrollScale`), iç katman
  parallax. **Aynı elemana iki transform tween'i yazma** — biri diğerini siler.
- **`CollectionCards` / `CollectionDetail`** — konaklama, restoranlar, barlar,
  aktiviteler ve galeri sayfalarının tamamı bunları kullanır. Kartta `description` ve
  `properties` verilirse künyeli varyant, verilmezse galeri tarzı sade varyant çıkar.
- **`DragSlider`** — transform ile sürüklenen slider (native scroll değil; referansta
  kartlar kapsayıcının iki kenarından taşıyor).
- **`Button` / `ButtonLink`** — çift kopyalı metin, hover'da yukarı kayar.

## Yeni bölüm ekleme reçetesi

1. `src/config/routes.ts` içine anahtar + 4 dil slug'ı.
2. `src/i18n/types.ts` içine sayfa metinleri bloğu, ardından dört sözlüğe aynı blok.
   **Dikkat:** sözlüklerde `rooms` gibi anahtarlar hem üst seviyede hem `home` içinde
   var; string değiştirirken girintiyi de kapsayan benzersiz çapa kullan.
3. `src/data/<bölüm>.ts` — `slug`/`title`/`description` dile göre, künye alanları,
   `tone`, `count` ve `photosFor` / `bySlug` / `neighbours` yardımcıları.
4. `src/app/[locale]/<anahtar>/page.tsx` (PageHero + CollectionCards) ve
   `[slug]/page.tsx` (CollectionDetail), `generateStaticParams` + `buildAlternates`.
5. Gerekiyorsa `MenuOverlay` içindeki `primaryKeys` listesine ekle.

## Bekleyen işler

- **Gerçek fotoğraflar** — `public/images/…` altına; her veri dosyasındaki fotoğraflara
  `src` eklenince düzen değişmeden devreye girer. Şu an hepsi degrade placeholder.
- Oda/restoran/bar **detay sayfalarına künye bloğu** (başlık altında m², kapasite, saat).
- `sitemap.ts`, `robots.ts`, JSON-LD şemaları, CSP ve form route'ları (`Dosya.md` §22–§45).
- Kalan bölümler: Spa & Wellness, Toplantı & Etkinlik, Side, Blog, İletişim, Rezervasyon.
- Ana sayfada bölüm yükseklikleri referanstan biraz kısa (metin uzunluğu farkı).

## Doğrulama

```bash
npm run dev          # http://localhost:3000/tr/
npx tsc --noEmit
npm run build
```

Görsel denetim: referans siteyi ve yerel siteyi **aynı viewport'ta** (1440×900) açıp
bölümlerin `getBoundingClientRect()` değerlerini karşılaştır; kolon x/genişlik,
section padding ve tipografi px değerleri birebir örtüşmeli.
