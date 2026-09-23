"use client";

import Link from "next/link";

import LoopCarousel from "@/components/ui/LoopCarousel";
import Media, { type MediaTone } from "@/components/ui/Media";
import {
  CapacityIcon,
  ConceptIcon,
  CuisineIcon,
  DrinksIcon,
  HoursIcon,
  LocationIcon,
  SizeIcon,
  ViewIcon,
} from "@/components/ui/icons";
import type { CardProperty } from "@/components/collection/CollectionCards";

type Photo = {
  id: string;
  tone: MediaTone;
  src?: string;
  alt?: string;
};

type RelatedItem = {
  key: string;
  title: string;
  href: string;
  tone: MediaTone;
  src?: string;
};

type Props = {
  /** Ortalanmış giriş cümlesi */
  intro: string;
  /** Gövde paragrafları */
  body: string[];
  properties?: CardProperty[];
  photos: Photo[];
  relatedTitle: string;
  related: RelatedItem[];
  previousLabel: string;
  nextLabel: string;
  galleryLabel: string;
};

const icons = {
  capacity: CapacityIcon,
  size: SizeIcon,
  view: ViewIcon,
  cuisine: CuisineIcon,
  concept: ConceptIcon,
  hours: HoursIcon,
  drinks: DrinksIcon,
  location: LocationIcon,
};

/**
 * Detay sayfasının hero altındaki gövdesi — referanstaki konut detay
 * sayfasının yapısı: ortalanmış giriş cümlesi, 8 kolonluk gövde metni ve
 * künye, ince ayraç, 16:9 sonsuz döngülü görsel carousel'i ve en altta
 * ilgili başlıkların sürüklenebilir kart sırası.
 */
export default function CollectionArticle({
  intro,
  body,
  properties,
  photos,
  relatedTitle,
  related,
  previousLabel,
  nextLabel,
  galleryLabel,
}: Props) {
  return (
    <>
      {/* Giriş cümlesi */}
      <section className="pt-55 pb-40 s:pt-90 s:pb-100 l:pt-120 l:pb-90 text-center">
        <div className="site-max site-grid">
          <p className="t-title-m text-ink-pure col-span-6 col-start-1 s:col-span-10 s:col-start-2 l:col-span-8 l:col-start-3">
            {intro}
          </p>
        </div>
      </section>

      {/* Gövde metni, künye ve ayraç */}
      <section className="pt-80">
        <div className="site-max site-grid">
          <div className="col-span-6 s:col-span-10 s:col-start-2 l:col-span-8 l:col-start-3">
            {body.map((paragraph) => (
              <p key={paragraph.slice(0, 24)} className="t-body mb-24 last:mb-0">
                {paragraph}
              </p>
            ))}

            {properties?.length ? (
              <ul className="mt-40 flex flex-wrap items-center gap-x-40 gap-y-14">
                {properties.map((property) => {
                  const Icon = icons[property.icon];
                  return (
                    <li
                      key={`${property.icon}-${property.label}`}
                      className="text-ink-soft flex items-center gap-x-10"
                    >
                      <Icon className="text-main size-20 shrink-0" />
                      <span className="t-body">{property.label}</span>
                    </li>
                  );
                })}
              </ul>
            ) : null}
          </div>

          <div
            aria-hidden
            className="bg-ink-soft col-span-6 mt-80 h-[1px] w-full opacity-20 s:col-span-10 s:col-start-2 l:col-span-8 l:col-start-3"
          />
        </div>
      </section>

      {/* Görsel carousel'i — komşu slaytlar kenarlardan taşar */}
      <div className="overflow-hidden pt-80 pb-100">
        <div className="site-max">
          <LoopCarousel
            count={photos.length}
            keyFor={(index) => photos[index].id}
            ariaLabel={galleryLabel}
            renderSlide={({ index, isActive, go }) => {
              const photo = photos[index];
              return (
                <div className="relative">
                  <div
                    className="origin-center"
                    style={{
                      transform: isActive ? "scale(1)" : "scale(0.92)",
                      transition: "transform 1s cubic-bezier(.19,1,.22,1)",
                    }}
                  >
                    <Media
                      tone={photo.tone}
                      ratio="16/9"
                      src={photo.src}
                      alt={photo.alt ?? ""}
                      reveal={false}
                      className="max-s:aspect-[1/1.03]"
                    />
                  </div>

                  {isActive ? (
                    <div className="pointer-events-none absolute inset-0 flex items-center justify-between px-40">
                      <button
                        type="button"
                        aria-label={previousLabel}
                        onClick={() => go(-1)}
                        className="bg-white-pure text-ink-pure pointer-events-auto flex size-40 items-center justify-center rounded-[0.3rem] transition-opacity duration-500 hover:opacity-80"
                      >
                        <span aria-hidden>←</span>
                      </button>
                      <button
                        type="button"
                        aria-label={nextLabel}
                        onClick={() => go(1)}
                        className="bg-white-pure text-ink-pure pointer-events-auto flex size-40 items-center justify-center rounded-[0.3rem] transition-opacity duration-500 hover:opacity-80"
                      >
                        <span aria-hidden>→</span>
                      </button>
                    </div>
                  ) : null}
                </div>
              );
            }}
          />
        </div>
      </div>

      {/* İlgili başlıklar */}
      <section className="bg-white-pure relative overflow-hidden pt-56 pb-70 s:pt-88 s:pb-80">
        <div className="site-max site-grid">
          <h2 className="t-title-m text-ink-pure col-span-6 mb-40 text-center s:col-span-10 s:col-start-2 l:mb-52">
            {relatedTitle}
          </h2>

          <div className="col-span-6 s:col-span-12 s:col-start-1">
            <div className="flex gap-20 overflow-x-auto pb-10 s:gap-18 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
              {related.map((item) => (
                <Link
                  key={item.key}
                  href={item.href}
                  className="group max-w-full min-w-[26rem] shrink-0 s:min-w-[calc((100%-3.6rem)/3)]"
                >
                  <div className="overflow-hidden">
                    <Media
                      tone={item.tone}
                      ratio="1/1"
                      src={item.src}
                      alt={item.title}
                      sizes="(min-width: 650px) 30vw, 80vw"
                      className="transition-transform duration-[1100ms] ease-[cubic-bezier(.2,.7,.2,1)] group-hover:scale-[1.035]"
                    />
                  </div>
                  <span className="eyebrow text-ink-pure mt-16 block transition-opacity duration-500 group-hover:opacity-60">
                    {item.title}
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
