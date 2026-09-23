"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useCallback, useEffect, useState } from "react";

import Logo from "@/components/layout/Logo";
import { ButtonLink } from "@/components/ui/Button";
import MenuOverlay from "@/components/layout/MenuOverlay";
import type { Locale } from "@/config/locales";
import { homePath, pathFor } from "@/config/routes";
import type { Dictionary } from "@/i18n/types";

type Props = {
  locale: Locale;
  dict: Dictionary;
};

export default function Header({ locale, dict }: Props) {
  const [scrolled, setScrolled] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    let lastY = window.scrollY;

    const onScroll = () => {
      const y = window.scrollY;
      setScrolled(y > 80);
      setHidden(y > 240 && y > lastY);
      lastY = y;
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Route değişince menü kapanır.
  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  const close = useCallback(() => setOpen(false), []);

  const dark = scrolled && !open;

  return (
    <>
      <header
        className="pointer-events-none fixed inset-x-0 top-0 z-50"
        data-scrolled={scrolled}
      >
        {/* Scroll ile aşağı inen beyaz zemin */}
        <div
          aria-hidden
          className="bg-white-pure absolute inset-x-0 top-0 h-95 transition-transform duration-500 ease-[cubic-bezier(.19,1,.22,1)]"
          style={{
            transform: dark && !hidden ? "translateY(0%)" : "translateY(-101%)",
          }}
        />

        <div
          className="relative transition-transform duration-500 ease-[cubic-bezier(.19,1,.22,1)]"
          style={{ transform: hidden && !open ? "translateY(-100%)" : "none" }}
        >
          <div
            className={`site-max relative flex h-95 items-center justify-between transition-colors duration-500 ${
              dark ? "text-ink-pure" : "text-white-pure"
            }`}
          >
            <button
              type="button"
              onClick={() => setOpen((value) => !value)}
              aria-expanded={open}
              aria-controls="site-menu"
              className="pointer-events-auto flex items-center gap-16"
            >
              <span className="relative grid size-40 place-items-center rounded-[0.3rem] border border-current">
                <span className="relative block h-20 w-16">
                  <span
                    aria-hidden
                    className="absolute top-1/2 left-0 h-px w-full bg-current transition-transform duration-300"
                    style={{
                      transform: open
                        ? "translateY(-50%) rotate(45deg)"
                        : "translateY(calc(-50% - 3px))",
                    }}
                  />
                  <span
                    aria-hidden
                    className="absolute top-1/2 left-0 h-px w-full bg-current transition-transform duration-300"
                    style={{
                      transform: open
                        ? "translateY(-50%) rotate(-45deg)"
                        : "translateY(calc(-50% + 3px))",
                    }}
                  />
                </span>
              </span>
              <span className="eyebrow max-s:hidden">
                {open ? dict.nav.close : dict.nav.menu}
              </span>
            </button>

            {/* Menü açıkken panel tam ekran olduğu için mobilde logo ve
                CTA gizlenir; masaüstünde panel dar olduğundan görünür kalır. */}
            <Link
              href={homePath(locale)}
              className={`pointer-events-auto absolute left-1/2 -translate-x-1/2 transition-opacity duration-500 ${
                open ? "max-s:pointer-events-none max-s:opacity-0" : ""
              }`}
              aria-label={dict.nav.hotel}
            >
              <Logo />
            </Link>

            <ButtonLink
              href={pathFor("contact", locale)}
              label={dict.nav.contact}
              className="pointer-events-auto max-s:hidden"
            />
          </div>
        </div>
      </header>

      <MenuOverlay open={open} onClose={close} locale={locale} dict={dict} />
    </>
  );
}
