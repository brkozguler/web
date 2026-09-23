type Props = {
  children: React.ReactNode;
  className?: string;
};

/** Küçük, harf aralığı geniş, büyük harf etiket — referanstaki `.eyebrow`. */
export default function Eyebrow({ children, className = "" }: Props) {
  return <p className={`eyebrow text-main-tint ${className}`}>{children}</p>;
}
