"use client";

import Link from "next/link";
import { useEffect, useRef } from "react";

import LanguageSwitcher from "@/components/layout/LanguageSwitcher";
import {
  FacebookIcon,
  InstagramIcon,
  LinkedinIcon,
  MailIcon,
  PhoneIcon,
  TiktokIcon,
  YoutubeIcon,
} from "@/components/ui/icons";
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

const socialLinks = [
  { label: "Facebook", href: siteConfig.social.facebook, Icon: FacebookIcon },
  { label: "Instagram", href: siteConfig.social.instagram, Icon: InstagramIcon },
  { label: "YouTube", href: siteConfig.social.youtube, Icon: YoutubeIcon },
  { label: "TikTok", href: siteConfig.social.tiktok, Icon: TiktokIcon },
  { label: "LinkedIn", href: siteConfig.social.linkedin, Icon: LinkedinIcon },
];

/** Panelde tek liste hâlinde, ayraçlarla ayrılmış menü */
const menuKeys: NavKey[] = [
  "rooms",
  "dining",
  "bars",
  "experiences",
  "gallery",
  "contact",
];

/**
 * Soldan açılan yan menü paneli. Panel `translateX(-100%)` konumundan kayarak
 * gelir, arkadaki sayfa koyu bir perdeyle kapanır ve bağlantılar sırayla
 * belirir. Kapatma: header'daki düğme, perdeye tıklama veya Esc.
 */
export default function MenuOverlay({ open, onClose, locale, dict }: Props) {
  const rootRef = useRef<HTMLDivElement>(null);
  const backdropRef = useRef<HTMLDivElement>(null);
  const panelRef = useRef<HTMLElement>(null);
  const timeline = useRef<gsap.core.Timeline | null>(null);

  useEffect(() => {
    const backdrop = backdropRef.current;
    const panel = panelRef.current;
    if (!backdrop || !panel) return;

    const links = panel.querySelectorAll<HTMLElement>("[data-menu-line]");
    const meta = panel.querySelectorAll<HTMLElement>("[data-menu-meta]");

    if (prefersReducedMotion()) {
      gsap.set(panel, { xPercent: open ? 0 : -100, x: 0 });
      gsap.set(backdrop, { opacity: open ? 1 : 0 });
      gsap.set([links, meta], { x: 0, opacity: 1 });
      return;
    }

    timeline.current?.kill();

    if (open) {
      const tl = gsap.timeline();
      tl.to(backdrop, { opacity: 1, duration: 0.5, ease: "power2.out" }, 0)
        .fromTo(
          panel,
          // `x` de sıfırlanıyor: SSR'daki translateX(-100%) GSAP tarafından
          // piksel cinsinden okunuyor, yalnızca xPercent'i sıfırlamak yetmiyor.
          { xPercent: -100, x: 0 },
          { xPercent: 0, x: 0, duration: 0.7, ease: "power3.inOut" },
          0,
        )
        .fromTo(
          links,
          { x: -24, opacity: 0 },
          {
            x: 0,
            opacity: 1,
            duration: 0.5,
            stagger: 0.04,
            ease: "power3.out",
          },
          0.28,
        )
        .fromTo(
          meta,
          { opacity: 0 },
          { opacity: 1, duration: 0.4, stagger: 0.05, ease: "power2.out" },
          0.5,
        );
      timeline.current = tl;
    } else {
      const tl = gsap.timeline();
      tl.to(
        panel,
        { xPercent: -100, x: 0, duration: 0.55, ease: "power3.inOut" },
        0,
      )
        .to(backdrop, { opacity: 0, duration: 0.45, ease: "power2.inOut" }, 0)
        .set([links, meta], { clearProps: "opacity,transform" });
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
      className={`fixed inset-0 z-40 ${
        open ? "pointer-events-auto" : "pointer-events-none"
      }`}
    >
      {/* Arka perde */}
      <div
        ref={backdropRef}
        onClick={onClose}
        className="bg-ink-pure/55 absolute inset-0 opacity-0"
        aria-hidden
      />

      <aside
        ref={panelRef}
        // Kaydırma çubuğu gizli; içerik ekrana sığmadığında yine de kaydırılabilir.
        className="bg-main text-white-pure absolute top-0 left-0 flex h-full w-full flex-col overflow-y-auto [scrollbar-width:none] s:w-[52rem] [&::-webkit-scrollbar]:hidden"
        style={{ transform: "translateX(-100%)" }}
      >
        <nav
          className="flex-1 px-20 pt-120 s:px-40"
          aria-label={dict.nav.menu}
        >
          <ul className="flex flex-col">
            {menuKeys.map((key) => (
              <li key={key} className="border-white-subtle border-b">
                <Link
                  data-menu-line
                  href={pathFor(key, locale)}
                  onClick={onClose}
                  className="font-display block py-18 text-[2.4rem] leading-[1.3] font-light transition-opacity duration-500 hover:opacity-60"
                >
                  {dict.nav[key]}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="mt-40 px-20 pb-40 s:px-40">
          {/* Sosyal medya — yuvarlak, ince kenarlıklı düğmeler */}
          <ul data-menu-meta className="flex items-center gap-12">
            {socialLinks.map((social) => (
              <li key={social.label}>
                <a
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="border-white-tint/40 hover:border-white-pure flex size-40 items-center justify-center rounded-full border transition-colors duration-500"
                >
                  <social.Icon className="size-16" />
                </a>
              </li>
            ))}
          </ul>

          <ul data-menu-meta className="mt-28 flex flex-col gap-14">
            <li>
              <a
                href={`mailto:${siteConfig.email}`}
                className="t-body group flex items-center gap-12 transition-opacity duration-500 hover:opacity-100"
              >
                <MailIcon className="text-white-tint size-18 shrink-0" />
                {siteConfig.email}
              </a>
            </li>
            <li>
              <a
                href={`tel:${siteConfig.phoneHref}`}
                className="t-body group flex items-center gap-12 transition-opacity duration-500 hover:opacity-100"
              >
                <PhoneIcon className="text-white-tint size-18 shrink-0" />
                {siteConfig.phone}
              </a>
            </li>
          </ul>

          <div data-menu-meta className="mt-28">
            <LanguageSwitcher />
          </div>
        </div>
      </aside>
    </div>
  );
}
