"use client";

import Link from "next/link";
import { useEffect, useRef } from "react";

import LanguageSwitcher from "@/components/layout/LanguageSwitcher";
import type { Locale } from "@/config/locales";
import { pathFor, type RouteKey } from "@/config/routes";
import { siteConfig } from "@/config/site";
import type { Dictionary } from "@/i18n/types";
import { gsap, prefersReducedMotion } from "@/lib/gsap";

type Props = {
  open: boolean;
  onClose: () => void;
  locale: Locale;
  dict: Dictionary;
};

type NavKey = keyof Dictionary["nav"] & RouteKey;

const primaryKeys: NavKey[] = [
  "hotel",
  "rooms",
  "dining",
  "bars",
  "experiences",
  "spa",
  "meetings",
];

const secondaryKeys: NavKey[] = ["gallery", "side", "blog", "contact"];

export default function MenuOverlay({ open, onClose, locale, dict }: Props) {
  const rootRef = useRef<HTMLDivElement>(null);
  const timeline = useRef<gsap.core.Timeline | null>(null);

  useEffect(() => {
    const root = rootRef.current;
    if (!root) return;

    const links = root.querySelectorAll<HTMLElement>("[data-menu-line]");
    const meta = root.querySelectorAll<HTMLElement>("[data-menu-meta]");

    if (prefersReducedMotion()) {
      gsap.set(root, { clipPath: open ? "inset(0% 0 0% 0)" : "inset(0 0 100% 0)" });
      gsap.set([links, meta], { yPercent: 0, opacity: 1 });
      return;
    }

    timeline.current?.kill();

    if (open) {
      const tl = gsap.timeline();
      tl.fromTo(
        root,
        { clipPath: "inset(0 0 100% 0)" },
        {
          clipPath: "inset(0 0 0% 0)",
          duration: 0.8,
          ease: "power3.inOut",
        },
      )
        .fromTo(
          links,
          { yPercent: 110 },
          { yPercent: 0, duration: 0.75, stagger: 0.06, ease: "power3.out" },
          "-=0.35",
        )
        .fromTo(
          meta,
          { opacity: 0, y: 16 },
          { opacity: 1, y: 0, duration: 0.6, stagger: 0.05, ease: "power2.out" },
          "-=0.4",
        );
      timeline.current = tl;
    } else {
      const tl = gsap.timeline();
      tl.to(root, {
        clipPath: "inset(0 0 100% 0)",
        duration: 0.6,
        ease: "power3.inOut",
      }).set(links, { yPercent: 110 });
      timeline.current = tl;
    }
  }, [open]);

  // Menü açıkken sayfa kaydırması kilitlenir.
  useEffect(() => {
    if (!open) return;
    const previous = document.documentElement.style.overflow;
    document.documentElement.style.overflow = "hidden";
    return () => {
      document.documentElement.style.overflow = previous;
    };
  }, [open]);

  useEffect(() => {
    if (!open) return;
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [onClose, open]);

  return (
    <div
      ref={rootRef}
      id="site-menu"
      aria-hidden={!open}
      className={`bg-main text-white-pure fixed inset-0 z-40 flex flex-col justify-between overflow-y-auto pt-120 pb-40 s:pb-60 ${
        open ? "pointer-events-auto" : "pointer-events-none"
      }`}
      style={{ clipPath: "inset(0 0 100% 0)" }}
    >
      <nav className="site-max" aria-label={dict.nav.menu}>
        <ul className="site-grid gap-y-8">
          <li className="col-span-4 s:col-span-8 l:col-span-7">
            <ul>
              {primaryKeys.map((key) => (
                <li key={key} className="line-mask">
                  <Link
                    data-menu-line
                    href={pathFor(key, locale)}
                    onClick={onClose}
                    className="mm-link block py-4 transition-opacity duration-500 hover:opacity-60"
                  >
                    {dict.nav[key]}
                  </Link>
                </li>
              ))}
            </ul>
          </li>

          <li className="col-span-4 s:col-span-8 l:col-span-4 l:col-start-9 mt-40 l:mt-12">
            <ul className="flex flex-col gap-y-12">
              {secondaryKeys.map((key) => (
                <li key={key} className="line-mask">
                  <Link
                    data-menu-line
                    href={pathFor(key, locale)}
                    onClick={onClose}
                    className="t-body-l block transition-opacity duration-500 hover:opacity-60"
                  >
                    {dict.nav[key]}
                  </Link>
                </li>
              ))}
            </ul>
          </li>
        </ul>
      </nav>

      <div className="site-max mt-60 flex flex-col gap-24 s:flex-row s:items-end s:justify-between">
        <div data-menu-meta className="flex flex-col gap-8">
          <a
            href={`tel:${siteConfig.phoneHref}`}
            className="t-body opacity-80 transition-opacity hover:opacity-100"
          >
            {dict.footer.phoneLabel} {siteConfig.phone}
          </a>
          <a
            href={`mailto:${siteConfig.email}`}
            className="t-body opacity-80 transition-opacity hover:opacity-100"
          >
            {dict.footer.emailLabel} {siteConfig.email}
          </a>
        </div>
        <div data-menu-meta>
          <LanguageSwitcher />
        </div>
      </div>
    </div>
  );
}
