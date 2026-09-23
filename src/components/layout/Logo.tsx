type Props = {
  className?: string;
};

/**
 * Arcanus kelime markası. Gerçek logo dosyası gelene kadar display fontla
 * kurulmuş bir lockup kullanıyoruz; referanstaki gibi ortada, iki satırlı.
 */
export default function Logo({ className = "" }: Props) {
  return (
    <span
      className={`flex flex-col items-center leading-none text-current ${className}`}
    >
      <span
        className="font-display text-24 s:text-28 font-light tracking-[0.18em] uppercase"
        style={{ fontSize: "2.4rem", lineHeight: 1 }}
      >
        Arcanus
      </span>
      <span
        className="eyebrow mt-6 opacity-80"
        style={{ fontSize: "0.9rem", letterSpacing: "0.3em" }}
      >
        Hotels Sorgun
      </span>
    </span>
  );
}
