# MĀKENA GOLF & BEACH CLUB — FRONT-END / UI SYSTEM REVERSE-ENGINEERING

> Referans: https://makenagolfandbeachclub.com/  
> Amaç: Referans sitenin görsel dilini, responsive layout sistemini ve motion davranışlarını Next.js tabanlı bir projede yeniden kurmak için teknik rehber.  
> Not: Font ailesi ve bazı temel tipografi değerleri gibi doğrulanabilen bilgiler ile runtime kaynak kodunda doğrudan görülemeyen GSAP/grid değerleri ayrıştırılmıştır. GSAP başlangıç/bitiş değerleri, ScrollTrigger noktaları, parallax oranları ve bazı layout ölçüleri görsel davranıştan çıkarılmış **reverse-engineering hedef değerleridir**; orijinal kaynak kodun birebir değerleri olduğu iddia edilmez.

---

## 1. Grid Sistemi

Mākena benzeri editorial düzen için desktop'ta 12 kolonlu grid temel alınmalıdır.

| Viewport | Kolon | Gutter | Dış boşluk |
|---|---:|---:|---:|
| ≥ 1440px | 12 | 24–32px | 64–80px |
| 1024–1439px | 12 | 24px | 40–48px |
| 768–1023px | 8 | 20–24px | 32px |
| < 768px | 4 | 16px | 20–24px |

```css
.page-grid {
  display: grid;
  grid-template-columns: repeat(12, minmax(0, 1fr));
  column-gap: clamp(20px, 1.65vw, 32px);
  padding-inline: clamp(24px, 4.15vw, 80px);
}
```

Sistem her içeriği sabit container içine kilitlememelidir. Full-bleed görseller, 4–6 kolonluk metin blokları ve grid sınırlarını bilinçli kullanan editorial kompozisyonlar desteklenmelidir.

---

## 2. Container Genişlikleri

Önerilen container tokenları:

```css
:root {
  --container-wide: 1760px;
  --container-main: 1600px;
  --container-content: 1280px;
  --container-text: 720px;
  --container-narrow: 560px;
}
```

Ana container:

```css
.container {
  width: calc(100% - 160px);
  max-width: 1600px;
  margin-inline: auto;
}
```

Yaklaşık desktop dış boşlukları:

- 1440px viewport: 60–72px
- 1920px viewport: yaklaşık 80px
- Dar desktop/tablet: `clamp()` ile kademeli azaltılmalı

Klasik 1140/1200px Bootstrap container yaklaşımı kullanılmamalıdır; tasarım geniş ekranı aktif olarak kullanır.

---

## 3. Desktop / Tablet / Mobile Breakpointleri

```scss
$mobile: 480px;
$mobile-lg: 767px;

$tablet: 768px;
$tablet-lg: 1023px;

$desktop: 1024px;
$desktop-lg: 1440px;

$wide: 1680px;
$ultrawide: 1920px;
```

Temel kullanım:

```css
/* Mobile */
@media (max-width: 767px) {}

/* Tablet */
@media (min-width: 768px) and (max-width: 1023px) {}

/* Desktop */
@media (min-width: 1024px) {}

/* Large Desktop */
@media (min-width: 1440px) {}

/* Wide */
@media (min-width: 1680px) {}
```

Mobil landscape için ayrıca `rotate-device` davranışı planlanmalıdır.

---

## 4. Heading Fontları

Ana display/heading karakteri:

**Ivy Mode**

Önerilen kullanım:

```css
.heading {
  font-family: "Ivy Mode", serif;
  font-weight: 300;
}
```

Doğrulanmış tipografi örneklerinden biri:

```css
font-family: ivymode, sans-serif;
font-size: 37px;
font-weight: 300;
line-height: 53px;
color: #293A77;
```

Karakter:

- Editorial serif
- Yüksek kontrast
- İnce ağırlık
- Luxury hospitality hissi
- Büyük başlıklarda düşük line-height

---

## 5. Body Fontları

Body/UI font ailesi:

**Messina Sans**

Temel paragraf hedefi:

```css
.body {
  font-family: "Messina Sans", sans-serif;
  font-size: 16px;
  font-weight: 400;
  line-height: 30px;
  color: #213375;
}
```

Label / eyebrow:

```css
.eyebrow {
  font-family: "Messina Sans", sans-serif;
  font-size: 12px;
  font-weight: 700;
  line-height: 14px;
  letter-spacing: 0.08em;
  text-transform: uppercase;
}
```

---

## 6. Font Size / Line Height / Letter Spacing

Fluid typography kullanılmalıdır.

```css
.hero-title {
  font-family: "Ivy Mode", serif;
  font-weight: 300;
  font-size: clamp(56px, 6.2vw, 118px);
  line-height: 0.94;
  letter-spacing: -0.025em;
}

h2 {
  font-family: "Ivy Mode", serif;
  font-weight: 300;
  font-size: clamp(40px, 4vw, 76px);
  line-height: 1.03;
  letter-spacing: -0.018em;
}

h3 {
  font-family: "Ivy Mode", serif;
  font-weight: 300;
  font-size: clamp(30px, 2.5vw, 48px);
  line-height: 1.15;
}

.body-lg {
  font-family: "Messina Sans", sans-serif;
  font-size: clamp(18px, 1.25vw, 24px);
  line-height: 1.65;
}

.body {
  font-family: "Messina Sans", sans-serif;
  font-size: 16px;
  line-height: 30px;
}

.eyebrow {
  font-family: "Messina Sans", sans-serif;
  font-size: 11px;
  line-height: 14px;
  font-weight: 700;
  letter-spacing: 0.08em;
  text-transform: uppercase;
}
```

Ana renk hedefleri:

```css
:root {
  --blue: #293A77;
  --blue-text: #213375;
}
```

---

## 7. Section Spacing

Tasarımın temel karakterlerinden biri geniş dikey whitespace'tir.

```css
section {
  padding-block: clamp(120px, 11vw, 220px);
}
```

Yaklaşık desktop ritmi:

| Geçiş | Hedef boşluk |
|---|---:|
| Hero → Intro | 120–180px |
| Intro → Overview | 160–220px |
| Text → Image | 80–120px |
| Image → Next | 160–240px |
| Major Section | 180–260px |

Tablet: yaklaşık `100–160px`  
Mobile: yaklaşık `72–110px`

Global tokenlar:

```css
:root {
  --space-section-xl: clamp(144px, 12vw, 240px);
  --space-section-lg: clamp(110px, 9vw, 180px);
  --space-section-md: clamp(80px, 7vw, 140px);
}
```

---

## 8. Hero Yüksekliği

Hero viewport'u tamamen kullanmalıdır.

```css
.hero {
  min-height: 100svh;
  height: 100vh;
}
```

Mobilde browser chrome sorunlarını azaltmak için:

```css
.hero {
  min-height: 100svh;
}
```

Hero içerik hiyerarşisi:

```text
Eyebrow
↓
Large Serif H1
↓
Supporting element / Scroll down
```

Başlık ve medya aynı viewport içinde kontrollü şekilde konumlandırılmalıdır.

---

## 9. Image Aspect Ratio'ları

Tek bir ratio yerine editorial ratio sistemi kullanılmalıdır.

```css
:root {
  --ratio-wide: 16 / 9;
  --ratio-editorial: 4 / 3;
  --ratio-portrait: 3 / 4;
  --ratio-portrait-tall: 4 / 5;
  --ratio-square: 1 / 1;
}
```

Kullanım:

- Hero: viewport fill / yaklaşık 16:9
- Büyük landscape: 16:9 veya 4:3
- Editorial portrait: 3:4 / 4:5
- Square editorial asset: 1:1
- Full-width cinematic bloklar: yaklaşık 1.7–1.8:1

```css
.media {
  overflow: hidden;
}

.media img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
```

---

## 10. GSAP Başlangıç / Bitiş Değerleri

> Bu bölümdeki değerler reverse-engineering hedefleridir.

### Text Reveal

```js
gsap.fromTo(
  element,
  {
    yPercent: 110
  },
  {
    yPercent: 0,
    duration: 1.2,
    ease: "power3.out"
  }
);
```

### Image Scale Reveal

```js
gsap.fromTo(
  image,
  {
    scale: 1.08
  },
  {
    scale: 1,
    duration: 1.5,
    ease: "power3.out"
  }
);
```

### Parallax

```js
gsap.fromTo(
  image,
  {
    yPercent: -8
  },
  {
    yPercent: 8,
    ease: "none"
  }
);
```

### Generic Fade Reveal

```js
gsap.fromTo(
  element,
  {
    opacity: 0,
    y: 40
  },
  {
    opacity: 1,
    y: 0,
    duration: 1.1,
    ease: "power3.out"
  }
);
```

---

## 11. ScrollTrigger Noktaları

### Text Reveal

```js
scrollTrigger: {
  trigger: section,
  start: "top 78%"
}
```

### Image Reveal

```js
scrollTrigger: {
  trigger: imageWrapper,
  start: "top 85%"
}
```

### Parallax

```js
scrollTrigger: {
  trigger: imageWrapper,
  start: "top bottom",
  end: "bottom top",
  scrub: true
}
```

### Büyük Section Transition

```js
scrollTrigger: {
  trigger: section,
  start: "top 70%",
  end: "bottom 30%"
}
```

### Pinned Section Gerektiğinde

```js
scrollTrigger: {
  trigger: section,
  start: "top top",
  end: "+=100%",
  pin: true,
  scrub: 1
}
```

Her section'ın pinlenmesi önerilmez. Pin yalnızca içerik hikâyesi gerçekten gerektiriyorsa kullanılmalıdır.

---

## 12. Parallax Hızları

Parallax kontrollü ve premium görünmelidir; agresif olmamalıdır.

Önerilen görsel katman oranları:

| Katman | Göreceli hareket |
|---|---:|
| Foreground | 1.00 |
| Image | 0.85 |
| Background | 0.65 |
| Decorative | 0.45 |

GSAP örneği:

```js
gsap.fromTo(
  image,
  {
    yPercent: -8
  },
  {
    yPercent: 8,
    ease: "none",
    scrollTrigger: {
      trigger: wrapper,
      start: "top bottom",
      end: "bottom top",
      scrub: 1.1
    }
  }
);
```

Önerilen aralıklar:

- Büyük görsel: ±8–12%
- Küçük editorial görsel: ±5–8%
- Mobile: ±3–5%

---

## 13. Header Davranışı

Header hero üzerinde şeffaf çalışmalıdır.

Temel mantık:

```text
Hero / dark media
→ light logo + light navigation

Light section
→ dark logo + dark navigation
```

Önerilen yapı:

```tsx
<Header theme="light" />
```

Section durumuna göre Intersection Observer veya ScrollTrigger ile theme değiştirilebilir.

Önerilen yükseklik:

- Desktop: 90–110px
- Mobile: 70–80px

```css
.header {
  position: fixed;
  inset: 0 0 auto;
  z-index: 100;
  background: transparent;
}
```

Theme geçişi:

```css
.header {
  transition:
    color 400ms ease,
    opacity 400ms ease;
}
```

---

## 14. Menu Transition

Fullscreen navigation önerilir.

Timeline:

```text
0ms     Menu background reveal
150ms   Logo
200ms   Navigation item 1
260ms   Navigation item 2
320ms   Navigation item 3
...
```

GSAP:

```js
const tl = gsap.timeline();

tl.fromTo(
  menu,
  {
    clipPath: "inset(0 0 100% 0)"
  },
  {
    clipPath: "inset(0 0 0% 0)",
    duration: 0.8,
    ease: "power3.inOut"
  }
);

tl.fromTo(
  links,
  {
    yPercent: 110
  },
  {
    yPercent: 0,
    stagger: 0.06,
    duration: 0.7,
    ease: "power3.out"
  },
  "-=0.35"
);
```

Menu açıkken body scroll kilitlenmelidir.

---

## 15. Page Transition

Hedef akış:

```text
Route click
↓
Current page exit
↓
Transition curtain / fade
↓
Route change
↓
New hero media reveal
↓
Title reveal
```

Timing hedefi:

- Exit: 400–600ms
- Enter: 800–1200ms

Basit fade:

```js
gsap.to(page, {
  opacity: 0,
  duration: 0.5,
  ease: "power2.inOut"
});
```

Daha premium curtain:

```text
scaleY: 0 → 1
route change
scaleY: 1 → 0
```

Transition `transform-origin` giriş/çıkış yönüne göre değiştirilebilir.

---

## 16. Image Reveal

Wrapper mutlaka overflow'u gizlemelidir.

```css
.image-wrapper {
  overflow: hidden;
}
```

Image animation:

```js
gsap.fromTo(
  img,
  {
    scale: 1.12,
    yPercent: 5
  },
  {
    scale: 1,
    yPercent: 0,
    duration: 1.5,
    ease: "power3.out"
  }
);
```

Mask alternatifi:

```css
.image-mask {
  clip-path: inset(100% 0 0 0);
}
```

Final:

```css
.image-mask.is-visible {
  clip-path: inset(0 0 0 0);
}
```

Mask ile image scale aynı anda fakat farklı hızlarda ilerletilebilir.

---

## 17. Text Reveal

Ana yaklaşım: **overflow-mask line reveal**.

```html
<div class="line-mask">
  <span class="line">Connecting cultures</span>
</div>
```

```css
.line-mask {
  overflow: hidden;
}
```

```js
gsap.fromTo(
  ".line",
  {
    yPercent: 110
  },
  {
    yPercent: 0,
    duration: 1.15,
    stagger: 0.08,
    ease: "power3.out"
  }
);
```

H1:

```text
stagger: 0.08–0.12
```

Paragraph:

```js
{
  opacity: 0,
  y: 24
}
```

→

```js
{
  opacity: 1,
  y: 0
}
```

Kelime kelime aşırı animasyon yerine satır bazlı reveal tercih edilmelidir.

---

## 18. Hover Animasyonları

### Text Link Underline

```css
.link {
  position: relative;
}

.link::after {
  content: "";
  position: absolute;
  left: 0;
  right: 0;
  bottom: -3px;
  height: 1px;
  background: currentColor;

  transform: scaleX(0);
  transform-origin: right;
  transition: transform 500ms cubic-bezier(.16, 1, .3, 1);
}

.link:hover::after {
  transform: scaleX(1);
  transform-origin: left;
}
```

### Image Card

```css
.card img {
  transition: transform 1.1s cubic-bezier(.2, .7, .2, 1);
}

.card:hover img {
  transform: scale(1.035);
}
```

### Arrow

```text
translateX: 0 → 6px
```

### Navigation

```text
opacity: 0.5 → 1
```

Luxury görünüm için agresif `scale(1.1+)` ve çok hızlı hover efektlerinden kaçınılmalıdır.

---

## 19. Mobil Davranış

Desktop tasarım sadece küçültülmemeli; layout yeniden akmalıdır.

### Grid

```text
Desktop: 12 kolon
Tablet:   8 kolon
Mobile:   4 kolon
```

### Container

```css
@media (max-width: 767px) {
  .container,
  .page-grid {
    padding-inline: 20px;
  }
}
```

### Hero

```css
.hero {
  min-height: 100svh;
}
```

### Mobile H1

```css
.hero-title {
  font-size: clamp(42px, 12vw, 62px);
}
```

### Section Spacing

```text
72–110px
```

### Images

Desktop'taki yan yana editorial görseller mobile'da çoğunlukla alt alta akmalıdır.

### Parallax

```text
Desktop: ±8–12%
Mobile:  ±3–5%
```

Performans için ağır scrub animasyonlarının bir kısmı mobile'da azaltılabilir veya kapatılabilir.

### Landscape Rotate State

```css
@media (orientation: landscape) and (max-height: 600px) {
  .rotate-device {
    display: flex;
  }

  main {
    display: none;
  }
}
```

---

## 20. Gallery Masonry / Grid Sistemi

Galeri klasik eşit 3 kolon kart grid'i gibi tasarlanmamalıdır.

Kategori mantığı:

- Landscapes
- Outdoor Pursuits
- Golf
- Lifestyle
- Wellness
- Farm-to-fork

Desktop'ta 12 kolonlu editorial composition:

```text
┌────────────────┐ ┌──────────┐
│                │ │          │
│     7 col      │ │  5 col   │
│                │ │          │
└────────────────┘ └──────────┘

        ┌──────────────────┐
        │      8 col       │
        │                  │
        └──────────────────┘

┌────────┐          ┌──────────────┐
│ 4 col  │          │    6 col     │
└────────┘          └──────────────┘
```

Component yaklaşımı:

```tsx
<GalleryGrid>
  <GalleryItem
    columns={7}
    ratio="4/5"
  />

  <GalleryItem
    columns={4}
    offset={1}
    ratio="3/4"
  />

  <GalleryItem
    columns={8}
    offset={2}
    ratio="16/10"
  />
</GalleryGrid>
```

Tablet:

```text
8-column editorial grid
```

Mobile:

```text
Single-column editorial flow
```

Mobile'da her görselin aynı genişlikte olması gerekmez:

```text
100%
82%
100%
90%
76%
100%
```

Bu farklılık editorial ritmi korur.

---

# Global Design Tokens

```css
:root {
  /* COLORS */
  --color-blue: #293a77;
  --color-blue-text: #213375;
  --color-red: #a72c2a;
  --color-white: #ffffff;

  /* CONTAINERS */
  --container-wide: 1760px;
  --container-main: 1600px;
  --container-content: 1280px;
  --container-text: 720px;
  --container-narrow: 560px;

  /* GRID */
  --gutter: clamp(20px, 1.6vw, 32px);
  --page-padding: clamp(20px, 4.2vw, 80px);

  /* TYPOGRAPHY */
  --font-display: "Ivy Mode", serif;
  --font-body: "Messina Sans", sans-serif;

  /* SPACING */
  --section-xl: clamp(144px, 12vw, 240px);
  --section-lg: clamp(110px, 9vw, 180px);
  --section-md: clamp(80px, 7vw, 140px);

  /* MOTION */
  --ease-out: cubic-bezier(.16, 1, .3, 1);
  --ease-in-out: cubic-bezier(.65, 0, .35, 1);
}
```

---

# Önerilen Motion Mimarisi

```text
Next.js App Router
        ↓
      Lenis
        ↓
       GSAP
        ↓
  ScrollTrigger
        ↓
     useGSAP()
        ↓
────────────────────
TextReveal
ImageReveal
ParallaxImage
MaskReveal
SectionReveal
MenuTransition
PageTransition
```

---

# Önerilen Component Yapısı

```text
components/
├── layout/
│   ├── Header.tsx
│   ├── Navigation.tsx
│   ├── Footer.tsx
│   ├── PageGrid.tsx
│   └── Container.tsx
│
├── motion/
│   ├── TextReveal.tsx
│   ├── ImageReveal.tsx
│   ├── ParallaxImage.tsx
│   ├── MaskReveal.tsx
│   ├── SectionReveal.tsx
│   ├── MenuTransition.tsx
│   └── PageTransition.tsx
│
├── gallery/
│   ├── GalleryGrid.tsx
│   └── GalleryItem.tsx
│
└── sections/
    ├── Hero.tsx
    ├── Intro.tsx
    ├── EditorialMedia.tsx
    └── ExploreMore.tsx
```

---

# Önerilen Next.js Proje Yapısı

```text
src/
├── app/
│   ├── layout.tsx
│   ├── page.tsx
│   ├── gallery/
│   │   ├── page.tsx
│   │   └── [slug]/
│   │       └── page.tsx
│   └── globals.scss
│
├── components/
│   ├── layout/
│   ├── motion/
│   ├── gallery/
│   └── sections/
│
├── hooks/
│   ├── useLenis.ts
│   ├── useMediaQuery.ts
│   └── useHeaderTheme.ts
│
├── lib/
│   ├── gsap.ts
│   └── lenis.ts
│
└── styles/
    ├── _tokens.scss
    ├── _grid.scss
    ├── _typography.scss
    ├── _motion.scss
    └── _responsive.scss
```

---

# Performans Kuralları

1. Görseller `next/image` ile optimize edilmelidir.
2. Hero LCP görseli `priority` / uygun preload stratejisi ile yüklenmelidir.
3. Aşağıdaki medya lazy-load edilmelidir.
4. GSAP yalnızca client tarafında initialize edilmelidir.
5. ScrollTrigger instance'ları component unmount sırasında temizlenmelidir.
6. `prefers-reduced-motion` desteklenmelidir.
7. Mobilde ağır parallax miktarı azaltılmalıdır.
8. Layout shift önlemek için tüm görsellere ratio/size ayrılmalıdır.
9. Fontlar mümkünse self-host veya güvenilir font loader üzerinden preload edilmelidir.
10. Smooth scroll erişilebilirliği ve native navigation davranışını bozmamalıdır.

Örnek:

```css
@media (prefers-reduced-motion: reduce) {
  *,
  *::before,
  *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    scroll-behavior: auto !important;
    transition-duration: 0.01ms !important;
  }
}
```

---

# Uygulama Önceliği

Birebir görsel hissi yakalamak için öncelik sırası:

1. Ivy Mode + Messina Sans tipografi sistemi
2. Geniş section whitespace
3. 12 kolonlu editorial grid
4. Doğru image ratio ve crop sistemi
5. Overflow-mask text reveal
6. Yavaş image reveal
7. Hafif GSAP parallax
8. Header light/dark state
9. Fullscreen menu transition
10. Editorial gallery composition
11. Responsive yeniden akış
12. Page transition ve mikro hover animasyonları

---

# Kaynak / Doğrulama Notları

- Referans site: https://makenagolfandbeachclub.com/
- Gallery: https://makenagolfandbeachclub.com/gallery
- Tipografi tespiti için kullanılan kayıt: https://typ.io/s/vx3a
- Heading tarafında Ivy Mode, body/UI tarafında Messina Sans kullanımı gözlemlenmiştir.
- Sitede light/dark logo varyantları ve mobil landscape rotate-device davranışı bulunmaktadır.
- GSAP `start/end`, `yPercent`, parallax yüzdeleri, grid kolon dağılımları ve bazı spacing/container değerleri doğrudan orijinal source tokenları olarak doğrulanmamıştır; yeniden üretim için davranışsal hedeflerdir.

---

## Sonuç

Mākena tasarım dilinin temel formülü:

```text
EDITORIAL TYPOGRAPHY
        +
LARGE WHITESPACE
        +
12-COLUMN ASYMMETRIC GRID
        +
LARGE PHOTOGRAPHY
        +
MASKED TEXT REVEALS
        +
SUBTLE IMAGE PARALLAX
        +
SLOW PREMIUM MOTION
        +
RESPONSIVE EDITORIAL FLOW
```

Bu sistem Next.js + TypeScript + SCSS + GSAP + ScrollTrigger + Lenis kombinasyonuyla yeniden kurulabilir. Uygulamada amaç animasyon miktarını artırmak değil; tipografi, boşluk, görsel oran ve hareket hızlarını tutarlı hale getirerek referans sitenin premium ritmini yakalamaktır.
