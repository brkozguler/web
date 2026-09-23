"use client";

import { useEffect, useRef, type ElementType, type ReactNode } from "react";

import { ScrollTrigger, gsap, prefersReducedMotion } from "@/lib/gsap";

type Props = {
  lines: string[];
  as?: ElementType;
  className?: string;
  lineClassName?: string;
  delay?: number;
  stagger?: number;
  /** Sayfa açılışında hemen oynasın (hero için) */
  immediate?: boolean;
  children?: ReactNode;
};

/**
 * Satır bazlı maskeli reveal: her satır overflow:hidden bir kutunun içinde
 * yPercent 110'dan 0'a geliyor. Referanstaki başlık davranışının aynısı.
 */
export default function TextReveal({
  lines,
  as: Tag = "span",
  className = "",
  lineClassName = "",
  delay = 0,
  stagger = 0.09,
  immediate = false,
}: Props) {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const targets = el.querySelectorAll<HTMLElement>("[data-line]");
    if (!targets.length) return;

    if (prefersReducedMotion()) {
      gsap.set(targets, { yPercent: 0, opacity: 1 });
      return;
    }

    const ctx = gsap.context(() => {
      gsap.fromTo(
        targets,
        { yPercent: 110 },
        {
          yPercent: 0,
          duration: 1.2,
          delay,
          stagger,
          ease: "power3.out",
          scrollTrigger: immediate
            ? undefined
            : { trigger: el, start: "top 85%", once: true },
        },
      );
    }, el);

    return () => {
      ctx.revert();
      ScrollTrigger.refresh();
    };
  }, [delay, immediate, stagger]);

  return (
    <Tag ref={ref} className={className}>
      {lines.map((line, index) => (
        <span key={`${line}-${index}`} className="line-mask">
          <span data-line className={`block ${lineClassName}`}>
            {line}
          </span>
        </span>
      ))}
    </Tag>
  );
}
