"use client";

import Link from "next/link";
import { useCallback, useEffect, useState } from "react";

import Media, { type MediaTone } from "@/components/ui/Media";

type Photo = {
  id: string;
  tone: MediaTone;
  src?: string;
  alt?: string;
};

type NavLink = {
  href: string;
  title: string;
  label: string;
};

type Props = {
  title: string;
  photos: Photo[];
  previous: NavLink;
  next: NavLink;
  closeLabel: string;
  previousPhotoLabel: string;
  nextPhotoLabel: string;
};

/**
 * Koleksiyon detay sayfası (galeri kategorisi, oda tipi vb.): referanstaki gibi
 * ortada başlık, altında önceki/sonraki bağlantıları ve 12 kolonun 2'şerlisinden
 * oluşan küçük görsel ızgarası. Bir görsele tıklandığında tam ekran
 * görüntüleyici açılıyor; ok tuşları ve Esc ile gezinilebiliyor.
 */
export default function CollectionDetail({
  title,
  photos,
  previous,
  next,
  closeLabel,
  previousPhotoLabel,
  nextPhotoLabel,
}: Props) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const isOpen = openIndex !== null;

  const close = useCallback(() => setOpenIndex(null), []);

  const step = useCallback(
    (direction: number) =>
      setOpenIndex((current) =>
        current === null
          ? current
          : (current + direction + photos.length) % photos.length,
      ),
    [photos.length],
  );

  useEffect(() => {
    if (!isOpen) return;

    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") close();
      if (event.key === "ArrowRight") step(1);
      if (event.key === "ArrowLeft") step(-1);
    };

    const previousOverflow = document.documentElement.style.overflow;
    document.documentElement.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);

    return () => {
      document.documentElement.style.overflow = previousOverflow;
      window.removeEventListener("keydown", onKey);
    };
  }, [close, isOpen, step]);

  const activePhoto = openIndex === null ? null : photos[openIndex];

  return (
    <>
      <section className="pt-160 pb-73 s:pt-220 s:pb-68">
        <div className="site-max site-grid">
          <div className="border-ink-pure/12 col-span-6 border-b pb-40 text-center s:col-span-12 s:pb-70">
            <h1 className="t-title-l text-ink-pure mx-auto w-fit">{title}</h1>
          </div>

          <div className="col-span-6 my-30 flex justify-between s:col-span-12 s:my-40">
            <CollectionNavLink link={previous} direction="previous" />
            <CollectionNavLink link={next} direction="next" />
          </div>

          {photos.map((photo, index) => (
            <button
              key={photo.id}
              type="button"
              onClick={() => setOpenIndex(index)}
              aria-label={`${title} — ${index + 1}`}
              className="focus-visible:outline-main group col-span-3 mb-7 cursor-pointer overflow-hidden s:col-span-4 s:mb-18 l:col-span-2 focus-visible:outline-2 focus-visible:outline-offset-2"
            >
              <Media
                tone={photo.tone}
                ratio="4/3"
                src={photo.src}
                alt={photo.alt ?? ""}
                sizes="(min-width: 1024px) 16vw, (min-width: 650px) 32vw, 48vw"
                className="transition-transform duration-[1100ms] ease-[cubic-bezier(.2,.7,.2,1)] group-hover:scale-[1.06]"
              />
            </button>
          ))}
        </div>
      </section>

      {/* Tam ekran görüntüleyici */}
      <div
        aria-hidden={!isOpen}
        className={`bg-ink-pure/95 fixed inset-0 z-[60] flex items-center justify-center transition-opacity duration-500 ${
          isOpen ? "pointer-events-auto opacity-100" : "pointer-events-none opacity-0"
        }`}
      >
        {activePhoto ? (
          <>
            <button
              type="button"
              onClick={close}
              aria-label={closeLabel}
              className="text-white-pure eyebrow absolute top-40 right-40 z-2 flex items-center gap-12 transition-opacity duration-500 hover:opacity-60"
            >
              {closeLabel}
              <span aria-hidden className="text-[2rem] leading-none">
                ×
              </span>
            </button>

            <button
              type="button"
              onClick={() => step(-1)}
              aria-label={previousPhotoLabel}
              className="text-white-pure absolute left-20 z-2 flex size-40 items-center justify-center rounded-[0.3rem] border border-current transition-opacity duration-500 hover:opacity-60 s:left-40"
            >
              <span aria-hidden>←</span>
            </button>

            <figure className="site-max flex max-h-[80svh] w-full items-center justify-center">
              <div className="relative w-full max-w-[110rem]">
                <Media
                  tone={activePhoto.tone}
                  ratio="16/9"
                  src={activePhoto.src}
                  alt={activePhoto.alt ?? title}
                  reveal={false}
                  sizes="100vw"
                />
              </div>
            </figure>

            <button
              type="button"
              onClick={() => step(1)}
              aria-label={nextPhotoLabel}
              className="text-white-pure absolute right-20 z-2 flex size-40 items-center justify-center rounded-[0.3rem] border border-current transition-opacity duration-500 hover:opacity-60 s:right-40"
            >
              <span aria-hidden>→</span>
            </button>

            <p className="text-white-tint eyebrow absolute bottom-40 left-1/2 -translate-x-1/2">
              {(openIndex ?? 0) + 1} / {photos.length}
            </p>
          </>
        ) : null}
      </div>
    </>
  );
}

/** Referanstaki dairesel ileri/geri bağlantısı: hover'da içi lacivert doluyor. */
function CollectionNavLink({
  link,
  direction,
}: {
  link: NavLink;
  direction: "previous" | "next";
}) {
  const arrow = direction === "previous" ? "←" : "→";

  return (
    <Link
      href={link.href}
      aria-label={`${link.label}: ${link.title}`}
      className="group flex items-center gap-x-24"
    >
      {direction === "previous" ? <Circle arrow={arrow} /> : null}
      <span className="t-body text-ink-pure uppercase transition-opacity duration-500 group-hover:opacity-60">
        {link.label}
      </span>
      {direction === "next" ? <Circle arrow={arrow} /> : null}
    </Link>
  );
}

function Circle({ arrow }: { arrow: string }) {
  return (
    <span className="border-ink-pure/20 text-ink-pure relative flex size-40 items-center justify-center overflow-hidden rounded-[0.3rem] border transition-colors duration-500 group-hover:text-white-pure">
      <span
        aria-hidden
        className="bg-main absolute inset-0 scale-0 transition-transform duration-700 ease-out group-hover:scale-100"
      />
      <span aria-hidden className="relative z-1">
        {arrow}
      </span>
    </span>
  );
}
