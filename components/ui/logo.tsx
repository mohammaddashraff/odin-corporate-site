import Link from "next/link";
export function OdinMark({ className = "" }: { className?: string }) {
  return (
    <svg
      className={className}
      width="44"
      height="44"
      viewBox="0 0 48 48"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M3 24 14 11h20l11 13-11 13H14L3 24Z"
        stroke="currentColor"
        strokeWidth="3"
      />
      <path
        d="m3 24 12-7m30 7-12-7M3 24l12 7m30-7-12 7"
        stroke="currentColor"
        strokeWidth="2"
      />
      <circle cx="24" cy="24" r="8" stroke="currentColor" strokeWidth="3" />
      <circle cx="24" cy="24" r="3" fill="currentColor" />
    </svg>
  );
}
export function Logo({ compact = false }: { compact?: boolean }) {
  return (
    <Link
      href="/"
      aria-label="ODIN Software Solutions — Home"
      className={`brand ${compact ? "brand-compact" : ""}`}
    >
      <OdinMark />
      <span className="brand-type" dir="ltr">
        <strong>
          ODIN<span>.</span>
        </strong>
        <span>Software Solutions</span>
      </span>
    </Link>
  );
}
