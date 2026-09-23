type IconProps = {
  className?: string;
};

/** Kapasite — kişi sayısı */
export function CapacityIcon({ className = "" }: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
      className={className}
    >
      <circle cx="9" cy="8" r="3.2" />
      <path d="M3.5 19.5c0-3 2.5-5 5.5-5s5.5 2 5.5 5" />
      <path d="M16 5.6a3.2 3.2 0 0 1 0 6.1" />
      <path d="M17.5 14.9c1.9.6 3 2.4 3 4.6" />
    </svg>
  );
}

/** Oda büyüklüğü — yatay ölçü oku */
export function SizeIcon({ className = "" }: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
      className={className}
    >
      <path d="M2.5 12h19" />
      <path d="M6 8.5 2.5 12 6 15.5" />
      <path d="M18 8.5 21.5 12 18 15.5" />
    </svg>
  );
}

/** Manzara tipi */
export function ViewIcon({ className = "" }: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
      className={className}
    >
      <path d="M2.5 17.5h19" />
      <path d="M2.5 13.5c2.2-3.6 4-5.4 5.4-5.4 1.5 0 2.7 1.6 4.2 3.6" />
      <path d="M9.5 15.2c2.4-3.6 4.2-5.4 5.5-5.4 1.4 0 3.2 1.9 6.5 5.7" />
      <circle cx="17" cy="6.2" r="2" />
    </svg>
  );
}

/** Mutfak / tema */
export function CuisineIcon({ className = "" }: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
      className={className}
    >
      <path d="M7 3v8.5a2 2 0 0 0 2 2h0V21" />
      <path d="M5 3v4.5a2 2 0 0 0 2 2" />
      <path d="M9 3v4.5a2 2 0 0 1-2 2" />
      <path d="M17 3c-1.4 1.6-2 3.4-2 5.4 0 1.8.7 2.9 2 3.4V21" />
    </svg>
  );
}

/** Servis konsepti */
export function ConceptIcon({ className = "" }: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
      className={className}
    >
      <path d="M3 17h18" />
      <path d="M5 17a7 7 0 0 1 14 0" />
      <path d="M12 6.5V5" />
      <circle cx="12" cy="4" r="0.8" />
    </svg>
  );
}

/** Servis saatleri */
export function HoursIcon({ className = "" }: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
      className={className}
    >
      <circle cx="12" cy="12" r="8.5" />
      <path d="M12 7.5V12l3 2" />
    </svg>
  );
}

/** İçecek seçkisi */
export function DrinksIcon({ className = "" }: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
      className={className}
    >
      <path d="M4.5 4.5h15l-7.5 8z" />
      <path d="M12 12.5V20" />
      <path d="M8.5 20h7" />
    </svg>
  );
}

/** Otel içindeki konum */
export function LocationIcon({ className = "" }: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
      className={className}
    >
      <path d="M12 21c4-4.4 6-7.6 6-10a6 6 0 1 0-12 0c0 2.4 2 5.6 6 10Z" />
      <circle cx="12" cy="10.6" r="2.2" />
    </svg>
  );
}
