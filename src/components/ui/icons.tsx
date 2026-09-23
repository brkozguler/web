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

/* ---------------------------------------------------------------------------
   İletişim ve sosyal medya ikonları
--------------------------------------------------------------------------- */

/** E-posta */
export function MailIcon({ className = "" }: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.3"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
      className={className}
    >
      <rect x="2.5" y="5" width="19" height="14" rx="1.5" />
      <path d="m3.5 6.5 8.5 6 8.5-6" />
    </svg>
  );
}

/** Telefon */
export function PhoneIcon({ className = "" }: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.3"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
      className={className}
    >
      <path d="M6.2 3.5h3l1.4 3.6-2 1.3a12 12 0 0 0 5 5l1.3-2 3.6 1.4v3a2 2 0 0 1-2.2 2A16.5 16.5 0 0 1 4.2 5.7a2 2 0 0 1 2-2.2Z" />
    </svg>
  );
}

export function FacebookIcon({ className = "" }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden className={className}>
      <path d="M13.5 21v-8h2.7l.4-3.1h-3.1V7.9c0-.9.25-1.5 1.55-1.5h1.65V3.6A22 22 0 0 0 14.3 3.5c-2.4 0-4 1.45-4 4.1v2.3H7.6V13h2.7v8z" />
    </svg>
  );
}

export function InstagramIcon({ className = "" }: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      aria-hidden
      className={className}
    >
      <rect x="3.5" y="3.5" width="17" height="17" rx="5" />
      <circle cx="12" cy="12" r="3.9" />
      <circle cx="17.1" cy="6.9" r="1.1" fill="currentColor" stroke="none" />
    </svg>
  );
}

export function YoutubeIcon({ className = "" }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden className={className}>
      <path d="M21.6 7.2a2.5 2.5 0 0 0-1.8-1.8C18.2 5 12 5 12 5s-6.2 0-7.8.4A2.5 2.5 0 0 0 2.4 7.2 26 26 0 0 0 2 12a26 26 0 0 0 .4 4.8 2.5 2.5 0 0 0 1.8 1.8C5.8 19 12 19 12 19s6.2 0 7.8-.4a2.5 2.5 0 0 0 1.8-1.8A26 26 0 0 0 22 12a26 26 0 0 0-.4-4.8ZM10.2 15V9l5.2 3z" />
    </svg>
  );
}

export function TiktokIcon({ className = "" }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden className={className}>
      <path d="M16.1 3h-2.7v11.6a2.4 2.4 0 1 1-1.9-2.35V9.5a5.2 5.2 0 1 0 4.6 5.15V9.1a6.3 6.3 0 0 0 3.6 1.15V7.5a3.6 3.6 0 0 1-3.6-3.6z" />
    </svg>
  );
}

export function LinkedinIcon({ className = "" }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden className={className}>
      <path d="M6.9 8.9H4V20h2.9zM5.45 4a1.7 1.7 0 1 0 0 3.4 1.7 1.7 0 0 0 0-3.4M20 13.6c0-3-1.6-4.9-4.1-4.9a3.6 3.6 0 0 0-3.2 1.7V8.9H9.9V20h2.9v-5.9c0-1.5.7-2.5 2-2.5s2.3.9 2.3 2.5V20H20z" />
    </svg>
  );
}
