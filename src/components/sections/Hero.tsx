import TextReveal from "@/components/motion/TextReveal";
import Media from "@/components/ui/Media";
import type { Dictionary } from "@/i18n/types";

type Props = {
  dict: Dictionary;
};

export default function Hero({ dict }: Props) {
  const { hero } = dict.home;

  return (
    <section
      data-hero
      className="bg-ink-pure relative flex h-screen min-h-[100svh] items-center justify-center overflow-hidden"
    >
      <div className="absolute inset-0">
        <Media
          tone="dark"
          className="h-full w-full"
          reveal={false}
          parallax
          priority
        />
      </div>
      <div
        aria-hidden
        className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/10 to-black/40"
      />

      <div className="site-max text-white-pure relative z-2 flex flex-col items-center text-center">
        <p className="eyebrow mb-32 opacity-90">{hero.eyebrow}</p>
        <TextReveal
          as="h1"
          lines={hero.titleLines}
          className="t-h1 flex flex-col"
          immediate
          delay={0.15}
        />
      </div>

      <div className="text-white-pure absolute bottom-40 left-1/2 z-2 flex -translate-x-1/2 flex-col items-center gap-12">
        <span className="eyebrow opacity-80">{dict.common.scrollDown}</span>
        <span aria-hidden className="bg-white-tint block h-40 w-px" />
      </div>
    </section>
  );
}
