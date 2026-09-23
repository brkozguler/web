"use client";

import {
  useCallback,
  useEffect,
  useRef,
  useState,
  type ReactNode,
} from "react";

import { gsap } from "@/lib/gsap";

type Props = {
  children: ReactNode;
  className?: string;
  trackClassName?: string;
  /** Bırakıldığında en yakın slayta hizalanır (tam genişlikli carousel için) */
  snap?: boolean;
  /** Altında ince ilerleme çubuğu gösterir */
  progressBar?: boolean;
  progressClassName?: string;
  ariaLabel?: string;
  /** false ise kartlar kapsayıcının dışına taşar (kırpma üst bölüme bırakılır) */
  clip?: boolean;
};

/**
 * Referanstaki `cursor-grab` slider'ların davranışı: pist transform ile
 * sürükleniyor, bırakınca yumuşak şekilde duruyor ve sınırlarda kilitleniyor.
 * Native scroll yerine transform kullanılıyor çünkü referansta kartlar
 * kapsayıcının iki kenarından da taşıyor.
 */
export default function DragSlider({
  children,
  className = "",
  trackClassName = "",
  snap = false,
  progressBar = false,
  progressClassName = "",
  ariaLabel,
  clip = true,
}: Props) {
  const viewportRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const quickToRef = useRef<((value: number) => void) | null>(null);
  const position = useRef(0);
  const dragStart = useRef({ pointer: 0, position: 0 });
  const [dragging, setDragging] = useState(false);
  const [progress, setProgress] = useState(0);

  const bounds = useCallback(() => {
    const viewport = viewportRef.current;
    const track = trackRef.current;
    if (!viewport || !track) return 0;
    return Math.min(0, viewport.clientWidth - track.scrollWidth);
  }, []);

  const apply = useCallback(
    (value: number, immediate = false) => {
      const min = bounds();
      const clamped = Math.max(min, Math.min(0, value));
      position.current = clamped;
      setProgress(min === 0 ? 0 : clamped / min);

      if (immediate || !quickToRef.current) {
        gsap.set(trackRef.current, { x: clamped });
      } else {
        quickToRef.current(clamped);
      }
    },
    [bounds],
  );

  useEffect(() => {
    quickToRef.current = gsap.quickTo(trackRef.current, "x", {
      duration: 0.5,
      ease: "power3.out",
    });

    const onResize = () => apply(position.current, true);
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, [apply]);

  const onPointerDown = (event: React.PointerEvent) => {
    if (event.pointerType === "mouse" && event.button !== 0) return;
    setDragging(true);
    dragStart.current = { pointer: event.clientX, position: position.current };
    viewportRef.current?.setPointerCapture(event.pointerId);
  };

  const onPointerMove = (event: React.PointerEvent) => {
    if (!dragging) return;
    const delta = event.clientX - dragStart.current.pointer;
    apply(dragStart.current.position + delta);
  };

  const onPointerUp = (event: React.PointerEvent) => {
    if (!dragging) return;
    const viewport = viewportRef.current;
    if (viewport?.hasPointerCapture(event.pointerId)) {
      viewport.releasePointerCapture(event.pointerId);
    }
    setDragging(false);

    if (snap) {
      const slide = trackRef.current?.firstElementChild as HTMLElement | null;
      const width = slide?.getBoundingClientRect().width ?? 0;
      if (width > 0) {
        const index = Math.round(-position.current / width);
        apply(-index * width);
      }
    }
  };

  return (
    <div className={className}>
      <div
        ref={viewportRef}
        role={ariaLabel ? "group" : undefined}
        aria-label={ariaLabel}
        onPointerDown={onPointerDown}
        onPointerMove={onPointerMove}
        onPointerUp={onPointerUp}
        onPointerCancel={onPointerUp}
        className={`${clip ? "overflow-hidden" : "overflow-visible"} ${
          dragging ? "cursor-grabbing select-none" : "cursor-grab"
        }`}
      >
        <div ref={trackRef} className={`flex ${trackClassName}`}>
          {children}
        </div>
      </div>

      {progressBar ? (
        <div
          className={`bg-offset-2 relative h-[1px] overflow-hidden ${progressClassName}`}
        >
          <div
            className="bg-ink-pure absolute inset-0 origin-left"
            style={{ transform: `scaleX(${Math.max(0.08, progress)})` }}
          />
        </div>
      ) : null}
    </div>
  );
}
