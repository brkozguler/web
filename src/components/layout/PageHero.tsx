import TextReveal from "@/components/motion/TextReveal";
import Media, { type MediaTone } from "@/components/ui/Media";

type Props = {
  eyebrow: string;
  title: string;
  scrollLabel?: string;
  tone?: MediaTone;
};

/**
 * İç sayfaların hero'su. Ana sayfadakinden farklı olarak tam ekran değil,
 * referanstaki gibi sabit `55rem` yüksekliğinde.
 */
export default function PageHero({
  eyebrow,
  title,
  scrollLabel,
  tone = "dark",
}: Props) {
  return (
    <section
      data-hero
      className="bg-ink-pure relative flex h-[55rem] w-full items-center justify-center overflow-hidden"
    >
      <div className="absolute inset-0">
        <Media
          tone={tone}
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
        <p className="eyebrow mb-32 opacity-80">{eyebrow}</p>
        <TextReveal
          as="h1"
          lines={[title]}
          className="t-display block w-full max-w-[90%] s:max-w-[50rem] l:max-w-[73rem]"
          immediate
          delay={0.15}
        />
      </div>

      {scrollLabel ? (
        <div className="text-white-pure absolute bottom-40 left-1/2 z-2 flex -translate-x-1/2 flex-col items-center gap-12">
          <span className="eyebrow opacity-80">{scrollLabel}</span>
          <span aria-hidden className="bg-white-tint block h-40 w-px" />
        </div>
      ) : null}
    </section>
  );
}
