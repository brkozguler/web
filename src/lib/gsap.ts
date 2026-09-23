"use client";

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);

  // Geliştirme sırasında tarayıcı konsolundan animasyonları incelemek için.
  if (process.env.NODE_ENV === "development") {
    (window as unknown as Record<string, unknown>).gsap = gsap;
    (window as unknown as Record<string, unknown>).ScrollTrigger = ScrollTrigger;
  }
}

/** Kullanıcı hareket azaltma tercihini açtıysa animasyonlar kurulmaz. */
export function prefersReducedMotion(): boolean {
  if (typeof window === "undefined") return false;
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

export { gsap, ScrollTrigger };
