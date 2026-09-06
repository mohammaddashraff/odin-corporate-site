import type { Route } from "next";
import Link from "next/link";
import type { ReactNode } from "react";
export function Arrow({ diagonal = false }: { diagonal?: boolean }) {
  return (
    <svg
      className="arrow-icon"
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
    >
      <path
        d={diagonal ? "M6 18 18 6M6 6h12v12" : "M4 12h15m-6-6 6 6-6 6"}
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
export function ButtonLink({
  href,
  children,
  variant = "primary",
  className = "",
}: {
  href: string;
  children: ReactNode;
  variant?: "primary" | "secondary";
  className?: string;
}) {
  const classes = `button button-${variant} ${className}`;
  return href.startsWith("http") ? (
    <a
      href={href}
      className={classes}
      target="_blank"
      rel="noopener noreferrer"
    >
      {children}
      <Arrow diagonal />
    </a>
  ) : (
    <Link href={href as Route} className={classes}>
      {children}
      <Arrow />
    </Link>
  );
}
