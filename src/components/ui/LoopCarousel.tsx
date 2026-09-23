"use client";

import { useCallback, useRef, useState, type ReactNode } from "react";

type RenderArgs = {
  index: number;
  isActive: boolean;
  go: (step: number) => void;
};

type Props = {
  count: number;
  keyFor: (index: number) => string;
  renderSlide: (args: RenderArgs) => ReactNode;
  ariaLabel?: string;
  /** Altında ince ilerleme çubuğu gösterir */
  progressBar?: boolean;
  progressClassName?: string;
  className?: string;
};

/**
 * Referanstaki tam genişlikli carousel davranışı: pist tek parça kaydırılmaz,
 * her slaytın kendi transform'u vardır ve sıra modüler hesaplanır — böylece
 * dizinin sonundaki slayt soldaki boşluğu doldurur, döngü sonsuz görünür ve
 * komşu slaytlar kapsayıcının iki kenarından da taşar. Kırpma bu bileşende
 * değil, onu saran bölümdedir.
 */
export default function LoopCarousel({
  count,
  keyFor,
  renderSlide,
  ariaLabel,
  progressBar = false,
  progressClassName = "",
  className = "",
}: Props) {
  const maxOffset = Math.floor(count / 2);
  const minOffset = maxOffset - count + 1;
  const viewportRef = useRef<HTMLDivElement>(null);
  const drag = useRef({ active: false, startX: 0 });
  const [{ index, direction }, setState] = useState({ index: 0, direction: 0 });
  const [dragX, setDragX] = useState(0);

  /** Slaytın aktif olana göre sırası: -1 solda, 0 aktif, 1+ sağda */
  const offsetFor = useCallback(
    (position: number) => {
      const relative = (((position - index) % count) + count) % count;
      return relative > maxOffset ? relative - count : relative;
    },
    [count, index, maxOffset],
  );

  const go = useCallback(
    (step: number) =>
      setState((current) => ({
        index: (current.index + step + count) % count,
        direction: step,
      })),
    [count],
  );

  const onPointerDown = (event: React.PointerEvent) => {
    if (event.pointerType === "mouse" && event.button !== 0) return;
    drag.current = { active: true, startX: event.clientX };
    viewportRef.current?.setPointerCapture(event.pointerId);
  };

  const onPointerMove = (event: React.PointerEvent) => {
    if (!drag.current.active) return;
    setDragX((event.clientX - drag.current.startX) * 0.9);
  };

  const onPointerUp = (event: React.PointerEvent) => {
    if (!drag.current.active) return;
    const viewport = viewportRef.current;
    if (viewport?.hasPointerCapture(event.pointerId)) {
      viewport.releasePointerCapture(event.pointerId);
    }
    drag.current.active = false;

    const delta = event.clientX - drag.current.startX;
    const threshold = (viewport?.clientWidth ?? 0) * 0.15;
    setDragX(0);

    if (delta < -threshold) go(1);
    else if (delta > threshold) go(-1);
  };

  return (
    <div
      ref={viewportRef}
      role="group"
      aria-label={ariaLabel}
      onPointerDown={onPointerDown}
      onPointerMove={onPointerMove}
      onPointerUp={onPointerUp}
      onPointerCancel={onPointerUp}
      className={`relative cursor-grab select-none active:cursor-grabbing ${className}`}
    >
      <div className="relative z-1 flex w-full">
        {Array.from({ length: count }, (_, position) => {
          const offset = offsetFor(position);
          const isActive = offset === 0;

          // Döngü başa sararken bir slayt ekranın bir ucundan diğerine geçer;
          // o slaytın geçişi kapatılır ki yolu görünmesin.
          const jumped =
            (direction === 1 && offset === maxOffset) ||
            (direction === -1 && offset === minOffset);

          return (
            <article
              key={keyFor(position)}
              aria-hidden={!isActive}
              className="max-w-full min-w-full"
              style={{
                transform: `translateX(${(offset - position) * 100}%) translateX(${dragX}px)`,
                transition:
                  drag.current.active || jumped
                    ? "none"
                    : "transform .9s cubic-bezier(.19,1,.22,1)",
              }}
            >
              {renderSlide({ index: position, isActive, go })}
            </article>
          );
        })}
      </div>

      {progressBar ? (
        <div
          className={`bg-offset-2 relative h-[1px] ${progressClassName}`}
        >
          <div
            className="bg-ink-pure absolute inset-0 origin-left transition-transform duration-700 ease-[cubic-bezier(.19,1,.22,1)]"
            style={{ transform: `scaleX(${(index + 1) / count})` }}
          />
        </div>
      ) : null}
    </div>
  );
}
