import Media, { type MediaTone } from "@/components/ui/Media";

type Props = {
  tone?: MediaTone;
};

/**
 * Referanstaki tam ekran sinematik bant (bölüm 7): 100vh yüksekliğinde,
 * parallax ile yavaşça kayan tek görsel. Öncesinde ve sonrasında referanstaki
 * gibi geniş nefes boşluğu bırakılıyor.
 */
export default function FullScreenMedia({ tone = "sea" }: Props) {
  return (
    <>
      <div aria-hidden className="h-80 l:h-240" />
      <div className="relative h-screen overflow-hidden">
        <Media tone={tone} className="h-full w-full" reveal={false} parallax />
      </div>
    </>
  );
}
