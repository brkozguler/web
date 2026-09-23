"use client";

import { useEffect, useRef, type ElementType } from "react";

import { ScrollTrigger, gsap, prefersReducedMotion } from "@/lib/gsap";

type Props = {
  text: string;
  as?: ElementType;
  className?: string;
  delay?: number;
  stagger?: number;
  immediate?: boolean;
};

/**
 * Metni tarayıcıda gerçekten oluşan satırlara göre böler, her satırı
 * overflow:hidden bir maskeye alır ve aşağıdan yukarı getirir. Sabit karakter
 * sayısıyla bölmek yerine ölçüm yaptığı için her dilde ve her ekran
 * genişliğinde doğru kırılıyor — referanstaki başlık davranışının aynısı.
 */
export default function SplitTextReveal({
  text,
  as: Tag = "span",
  className = "",
  delay = 0,
  stagger = 0.09,
  immediate = false,
}: Props) {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const source = text;
    let frame = 0;
    let ctx: gsap.Context | null = null;
    let observer: ResizeObserver | null = null;

    const build = () => {
      // Ölçüm için metni kelime kelime aç.
      el.textContent = "";
      const words = source.split(/\s+/).filter(Boolean);
      const wordSpans = words.map((word, index) => {
        const span = document.createElement("span");
        span.textContent = index === words.length - 1 ? word : `${word} `;
        span.style.display = "inline-block";
        span.style.whiteSpace = "pre";
        el.appendChild(span);
        return span;
      });

      // Aynı satırda olan kelimeleri grupla.
      const lines: string[][] = [];
      let currentTop: number | null = null;
      wordSpans.forEach((span, index) => {
        const top = Math.round(span.offsetTop);
        if (currentTop === null || Math.abs(top - currentTop) > 2) {
          lines.push([]);
          currentTop = top;
        }
        lines[lines.length - 1].push(words[index]);
      });

      // Satırları maskeli yapıya çevir.
      el.textContent = "";
      const targets: HTMLElement[] = [];
      lines.forEach((line) => {
        const mask = document.createElement("span");
        mask.className = "line-mask";
        const inner = document.createElement("span");
        inner.className = "block";
        inner.textContent = line.join(" ");
        mask.appendChild(inner);
        el.appendChild(mask);
        targets.push(inner);
      });

      if (prefersReducedMotion()) {
        gsap.set(targets, { yPercent: 0 });
        return;
      }

      ctx?.revert();
      ctx = gsap.context(() => {
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
    };

    frame = requestAnimationFrame(build);

    // Genişlik değişince satırlar yeniden hesaplanır.
    let width = el.clientWidth;
    observer = new ResizeObserver(() => {
      if (Math.abs(el.clientWidth - width) < 2) return;
      width = el.clientWidth;
      build();
      ScrollTrigger.refresh();
    });
    observer.observe(el);

    return () => {
      cancelAnimationFrame(frame);
      observer?.disconnect();
      ctx?.revert();
    };
  }, [delay, immediate, stagger, text]);

  return (
    <Tag ref={ref} className={className}>
      {text}
    </Tag>
  );
}
