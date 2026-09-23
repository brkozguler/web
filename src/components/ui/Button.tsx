import Link from "next/link";
import type { ComponentProps, ReactNode } from "react";

type Variant = "outline" | "filled";

type BaseProps = {
  label: string;
  variant?: Variant;
  className?: string;
  /** Metnin sağında duracak ikon vb. */
  adornment?: ReactNode;
};

type LinkProps = BaseProps & {
  href: string;
  external?: boolean;
} & Omit<ComponentProps<typeof Link>, "href" | "className" | "children">;

type ButtonProps = BaseProps &
  Omit<ComponentProps<"button">, "className" | "children">;

const base =
  "group relative inline-flex min-w-[14rem] cursor-pointer overflow-hidden rounded-[0.3rem] border border-solid border-current outline-none focus-visible:outline-2 focus-visible:outline-offset-[1px] focus-visible:outline-main";

const variants: Record<Variant, string> = {
  outline: "",
  filled: "bg-ink-pure text-white-pure",
};

/**
 * Projedeki tek buton deseni — referanstaki `.btn` yapısının birebir
 * karşılığı: kenarlık rengi bulunduğu bağlamın rengini (currentColor) alır,
 * metin iki kopya halinde durur ve hover'da üstteki yukarı kayarken alttaki
 * yerine gelir (500ms, ease-out).
 */
function Content({ label, adornment }: Pick<BaseProps, "label" | "adornment">) {
  return (
    <span className="eyebrow relative flex h-42 w-full items-center justify-center gap-x-12">
      <span className="relative flex items-center justify-center overflow-hidden">
        <span className="mx-30 block py-5 transition-transform duration-500 ease-out will-change-transform group-hover:-translate-y-full">
          {label}
        </span>
        <span
          aria-hidden
          className="absolute inset-0 flex translate-y-full items-center justify-center transition-transform duration-500 ease-out will-change-transform group-hover:translate-y-0"
        >
          {label}
        </span>
      </span>
      {adornment}
    </span>
  );
}

export function ButtonLink({
  href,
  label,
  variant = "outline",
  className = "",
  adornment,
  external = false,
  ...rest
}: LinkProps) {
  const classes = `${base} ${variants[variant]} ${className}`;

  if (external) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={classes}
      >
        <Content label={label} adornment={adornment} />
      </a>
    );
  }

  return (
    <Link href={href} className={classes} {...rest}>
      <Content label={label} adornment={adornment} />
    </Link>
  );
}

export default function Button({
  label,
  variant = "outline",
  className = "",
  adornment,
  type = "button",
  ...rest
}: ButtonProps) {
  return (
    <button
      type={type}
      className={`${base} ${variants[variant]} ${className}`}
      {...rest}
    >
      <Content label={label} adornment={adornment} />
    </button>
  );
}
