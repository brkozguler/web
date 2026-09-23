"use client";

import Image from "next/image";
import { useLayoutEffect, useRef } from "react";

import { gsap, prefersReducedMotion } from "@/lib/gsap";

export type MediaTone = "dark" | "sea" | "cream" | "sand" | "light";

type Props = {
  /** CSS aspect-ratio değeri, örn. "16/9". Boş bırakılırsa kap doldurulur. */
  ratio?: string;
  tone?: MediaTone;
  src?: string;
  alt?: string;
  priority?: boolean;
  sizes?: string;
  className?: string;
  /** Scroll ile hafif dikey kayma (referanstaki ±%8 parallax) */
  parallax?: boolean;
  /** Görünür olduğunda scale 1.12 → 1 reveal */
  reveal?: boolean;
  /**
   * Referanstaki `bscale` davranışı: görsel, kadrajına scroll ilerledikçe
   * 0.85'ten 1'e büyüyor. Yalnızca desktop'ta (≥1024px) çalışır.
   */
  scrollScale?: boolean;
  children?: React.ReactNode;
};

const toneStyles: Record<MediaTone, string> = {
  dark: "linear-gradient(165deg, #16264f 0%, #203276 40%, #2f5a86 75%, #6f93a8 100%)",
  sea: "linear-gradient(150deg, #203276 0%, #4a6ba8 55%, #d6eaf0 100%)",
  cream: "linear-gradient(150deg, #f8f8f3 0%, #efeae6 60%, #d9d5cb 100%)",
  sand: "linear-gradient(150deg, #efeae6 0%, #d3d2bd 55%, #a8a98f 100%)",
  light: "linear-gradient(150deg, #faf8f7 0%, #e4edf2 55%, #d6eaf0 100%)",
};

/**
 * Sitedeki tüm görsellerin tek geçiş noktası. Gerçek fotoğraflar gelene kadar
 * referansın ton dağılımını taklit eden degrade placeholder çiziyor; `src`
 * verildiği anda aynı oran ve hareketle next/image devreye giriyor.
 *
 * Hareketler ayrı katmanlara bölündü: dıştaki katman ölçek (reveal / scroll
 * scale), içteki katman parallax kaydırması yapıyor. Aynı elemana iki ayrı
 * transform tween'i yazıldığında biri diğerini eziyordu.
 */
export default function Media({
  ratio,
  tone = "sea",
  src,
  alt = "",
  priority = false,
  sizes = "100vw",
  className = "",
  parallax = false,
  reveal = true,
  scrollScale = false,
  children,
}: Props) {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const scaleRef = useRef<HTMLDivElement>(null);
  const parallaxRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const wrapper = wrapperRef.current;
    const scaleEl = scaleRef.current;
    const parallaxEl = parallaxRef.current;
    if (!wrapper || !scaleEl || !parallaxEl) return;

    if (prefersReducedMotion()) {
      gsap.set([scaleEl, parallaxEl], { scale: 1, yPercent: 0 });
      return;
    }

    const mm = gsap.matchMedia();

    if (scrollScale) {
      mm.add("(min-width: 1024px)", () => {
        gsap.fromTo(
          scaleEl,
          { scale: 0.85 },
          {
            scale: 1,
            ease: "none",
            scrollTrigger: {
              trigger: wrapper,
              start: "top bottom",
              end: "center center",
              scrub: 0.6,
            },
          },
        );
      });

      mm.add("(max-width: 1023px)", () => {
        gsap.set(scaleEl, { scale: 1 });
      });
    } else if (reveal) {
      mm.add("(min-width: 0px)", () => {
        gsap.fromTo(
          scaleEl,
          { scale: 1.12 },
          {
            scale: 1,
            duration: 1.6,
            ease: "power3.out",
            scrollTrigger: { trigger: wrapper, start: "top 90%", once: true },
          },
        );
      });
    }

    if (parallax) {
      mm.add("(min-width: 650px)", () => {
        gsap.set(parallaxEl, { scale: 1.16 });
        gsap.fromTo(
          parallaxEl,
          { yPercent: -8 },
          {
            yPercent: 8,
            ease: "none",
            scrollTrigger: {
              trigger: wrapper,
              start: "top bottom",
              end: "bottom top",
              scrub: 1.1,
            },
          },
        );
      });

      mm.add("(max-width: 649px)", () => {
        gsap.set(parallaxEl, { scale: 1.08 });
        gsap.fromTo(
          parallaxEl,
          { yPercent: -4 },
          {
            yPercent: 4,
            ease: "none",
            scrollTrigger: {
              trigger: wrapper,
              start: "top bottom",
              end: "bottom top",
              scrub: 1.1,
            },
          },
        );
      });
    }

    return () => mm.revert();
  }, [parallax, reveal, scrollScale]);

  return (
    <div
      ref={wrapperRef}
      className={`media-fill relative overflow-hidden ${className}`}
      style={ratio ? { aspectRatio: ratio } : undefined}
    >
      <div
        ref={scaleRef}
        className="absolute inset-0 will-change-transform"
      >
        <div
          ref={parallaxRef}
          className="absolute inset-0 will-change-transform"
          style={{ background: toneStyles[tone] }}
        >
          {src ? (
            <Image
              src={src}
              alt={alt}
              fill
              priority={priority}
              sizes={sizes}
              className="object-cover"
            />
          ) : null}
        </div>
      </div>
      {children}
    </div>
  );
}
