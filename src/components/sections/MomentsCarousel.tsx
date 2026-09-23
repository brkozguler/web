"use client";

import Link from "next/link";
import { useCallback, useRef, useState } from "react";

import { ButtonLink } from "@/components/ui/Button";
import Media, { type MediaTone } from "@/components/ui/Media";

type Slide = {
  key: string;
  title: string;
  href: string;
  tone: MediaTone;
};

type Props = {
  slides: Slide[];
  ctaLabel: string;
  previousLabel: string;
  nextLabel: string;
  ariaLabel: string;
};

/**
 * Referanstaki "Moments" carousel'i. Pist tek parça kaydırılmıyor; referansta
 * olduğu gibi her slaytın kendi transform'u var ve sıra modüler olarak
 * hesaplanıyor — böylece dizinin sonundaki slayt soldaki boşluğu doldurur ve
 * döngü sonsuz görünür. Aktif olmayan slaytlar hafifçe küçülür, aradaki
 * boşluk buradan doğar. Kırpma bu bileşende değil, bölümün kendisindedir.
 */
export default function MomentsCarousel({
  slides,
  ctaLabel,
  previousLabel,
  nextLabel,
  ariaLabel,
}: Props) {
  const total = slides.length;
  const maxOffset = Math.floor(total / 2);
  const minOffset = maxOffset - total + 1;
  const viewportRef = useRef<HTMLDivElement>(null);
  const drag = useRef({ active: false, startX: 0 });
  const [{ index, direction }, setState] = useState({ index: 0, direction: 0 });
  const [dragX, setDragX] = useState(0);

  /** Slaytın aktif olana göre kaçıncı sırada durduğu: -1 solda, 0 aktif, 1+ sağda */
  const offsetFor = useCallback(
    (position: number) => {
      const relative = ((position - index) % total + total) % total;
      return relative > Math.floor(total / 2) ? relative - total : relative;
    },
    [index, total],
  );

  const go = useCallback(
    (step: number) =>
      setState((current) => ({
        index: (current.index + step + total) % total,
        direction: step,
      })),
    [total],
  );

  const onPointerDown = (event: React.PointerEvent) => {
    if (event.pointerType === "mouse" && event.button !== 0) return;
    drag.current = { active: true, startX: event.clientX };
    viewportRef.current?.setPointerCapture(event.pointerId);
  };

  const onPointerMove = (event: React.PointerEvent) => {
    if (!drag.current.active) return;
    setDragX((event.clientX - drag.current.startX) * 0.9);
  };

  const onPointerUp = (event: React.PointerEvent) => {
    if (!drag.current.active) return;
    const viewport = viewportRef.current;
    if (viewport?.hasPointerCapture(event.pointerId)) {
      viewport.releasePointerCapture(event.pointerId);
    }
    drag.current.active = false;

    const delta = event.clientX - drag.current.startX;
    const threshold = (viewport?.clientWidth ?? 0) * 0.15;
    setDragX(0);

    if (delta < -threshold) go(1);
    else if (delta > threshold) go(-1);
  };

  return (
    <div
      ref={viewportRef}
      role="group"
      aria-label={ariaLabel}
      onPointerDown={onPointerDown}
      onPointerMove={onPointerMove}
      onPointerUp={onPointerUp}
      onPointerCancel={onPointerUp}
      className="relative cursor-grab select-none active:cursor-grabbing"
    >
      <div className="relative z-1 flex w-full">
        {slides.map((slide, position) => {
          const offset = offsetFor(position);
          const isActive = offset === 0;

          // Döngü başa sararken bir slayt ekranın bir ucundan diğerine
          // geçer; o slaytın geçişi kapatılır ki yolu görünmesin.
          const jumped =
            (direction === 1 && offset === maxOffset) ||
            (direction === -1 && offset === minOffset);

          return (
            <article
              key={slide.key}
              aria-hidden={!isActive}
              className="max-w-full min-w-full"
              style={{
                transform: `translateX(${(offset - position) * 100}%) translateX(${dragX}px)`,
                transition:
                  drag.current.active || jumped
                    ? "none"
                    : "transform .9s cubic-bezier(.19,1,.22,1)",
              }}
            >
              <div className="relative">
                <div
                  className="origin-center"
                  style={{
                    transform: isActive ? "scale(1)" : "scale(0.92)",
                    transition: "transform 1s cubic-bezier(.19,1,.22,1)",
                  }}
                >
                  <Link
                    href={slide.href}
                    draggable={false}
                    tabIndex={isActive ? 0 : -1}
                  >
                    <Media
                      tone={slide.tone}
                      ratio="16/9"
                      reveal={false}
                      className="max-s:aspect-[1/1.03]"
                      alt={slide.title}
                    />
                  </Link>
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

              <div className="mt-32 flex flex-col items-center l:mt-40">
                <h3 className="t-title-s text-ink-pure text-center">
                  {slide.title}
                </h3>
                <ButtonLink
                  href={slide.href}
                  label={ctaLabel}
                  className="mt-24"
                />
              </div>
            </article>
          );
        })}
      </div>

      <div className="bg-offset-2 relative mx-auto mt-60 h-[1px] w-full s:w-[60%] l:mt-70">
        <div
          className="bg-ink-pure absolute inset-0 origin-left transition-transform duration-700 ease-[cubic-bezier(.19,1,.22,1)]"
          style={{ transform: `scaleX(${(index + 1) / total})` }}
        />
      </div>
    </div>
  );
}
