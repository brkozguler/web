"use client";

import Lenis from "lenis";
import { useEffect } from "react";

import { ScrollTrigger, gsap, prefersReducedMotion } from "@/lib/gsap";

/**
 * Referans sitedeki yumuşak scroll davranışı (html.lenis) — GSAP ScrollTrigger
 * ile senkron çalışması için Lenis'i gsap.ticker üzerinden sürüyoruz.
 */
export default function SmoothScroll() {
  useEffect(() => {
    if (prefersReducedMotion()) return;

    const lenis = new Lenis({
      duration: 1.1,
      easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
    });

    lenis.on("scroll", ScrollTrigger.update);

    const update = (time: number) => lenis.raf(time * 1000);
    gsap.ticker.add(update);
    gsap.ticker.lagSmoothing(0);

    return () => {
      gsap.ticker.remove(update);
      lenis.destroy();
    };
  }, []);

  return null;
}
