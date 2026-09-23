"use client";

import Link from "next/link";
import { useCallback, useEffect, useRef, useState, type ReactNode } from "react";

import Media, { type MediaTone } from "@/components/ui/Media";
import { gsap, prefersReducedMotion } from "@/lib/gsap";

type Item = {
  slug: string;
  title: string;
  href: string;
};

type Props = {
  items: Item[];
  /** Sol kolonda listenin üstünde duran başlık bloğu */
  children: ReactNode;
  /** Listenin altındaki buton */
  cta?: ReactNode;
  /** Bir satırın kendi kendine ilerleme süresi (saniye) */
  duration?: number;
};

const tones: MediaTone[] = ["cream", "sand", "light", "sea", "dark"];

/**
 * Referanstaki "Real Estate" bloğu: aktif satırın altındaki 2px'lik çizgi
 * soldan sağa lineer olarak doluyor, dolduğunda sıradaki satıra geçiyor ve
 * sağdaki görsel `scale(1.1) → 1` + opacity ile çapraz geçiş yapıyor. Fareyle
 * bir satırın üzerine gelince o satır aktif oluyor; bölüm ekranda değilken
 * sayaç duruyor.
 */
export default function RoomShowcase({
  items,
  children,
  cta,
  duration = 5,
}: Props) {
  const [active, setActive] = useState(0);
  const [inView, setInView] = useState(false);
  const rootRef = useRef<HTMLDivElement>(null);
  const underlineRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const root = rootRef.current;
    if (!root) return;

    const observer = new IntersectionObserver(
      ([entry]) => setInView(entry.isIntersecting),
      { threshold: 0.25 },
    );
    observer.observe(root);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const underlines = underlineRefs.current.filter(Boolean);
    gsap.set(underlines, { scaleX: 0 });

    const current = underlineRefs.current[active];
    if (!current || !inView) return;

    if (prefersReducedMotion()) {
      gsap.set(current, { scaleX: 1 });
      return;
    }

    const tween = gsap.fromTo(
      current,
      { scaleX: 0 },
      {
        scaleX: 1,
        duration,
        ease: "none",
        onComplete: () => setActive((index) => (index + 1) % items.length),
      },
    );

    return () => {
      tween.kill();
    };
  }, [active, duration, inView, items.length]);

  const activate = useCallback((index: number) => setActive(index), []);

  return (
    <div ref={rootRef} className="site-max site-grid">
      <div className="col-span-6 s:col-span-5 s:col-start-1 l:col-span-4 l:col-start-2">
        {children}

        <ul className="mt-40 w-full">
          {items.map((item, index) => (
            <li
              key={item.slug}
              className="before:border-ink-soft relative block cursor-pointer before:absolute before:bottom-0 before:left-0 before:w-full before:border-b before:opacity-20"
              onMouseEnter={() => activate(index)}
            >
              <Link
                href={item.href}
                onFocus={() => activate(index)}
                className="text-ink-soft block py-20 text-[1.8rem] leading-[1.4] tracking-[-.03em] transition-opacity duration-500 hover:opacity-70"
              >
                {item.title}
              </Link>
              <div
                aria-hidden
                ref={(element) => {
                  underlineRefs.current[index] = element;
                }}
                className="bg-main absolute bottom-0 left-0 h-[2px] w-full origin-left"
                style={{ transform: "scaleX(0)" }}
              />
            </li>
          ))}
        </ul>

        {cta ? <div className="mt-40">{cta}</div> : null}
      </div>

      <div className="relative col-span-6 aspect-[2/3] max-s:mt-60 s:col-span-5 s:col-start-7 l:col-span-5 l:col-start-7">
        {items.map((item, index) => (
          <div
            key={item.slug}
            className="absolute inset-0 overflow-hidden"
            style={{
              opacity: index === active ? 1 : 0,
              transform: index === active ? "scale(1)" : "scale(1.1)",
              transition:
                "transform 1s cubic-bezier(.19,1,.22,1), opacity .5s ease-out",
            }}
          >
            <Media
              tone={tones[index % tones.length]}
              className="h-full w-full"
              reveal={false}
              alt={item.title}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
