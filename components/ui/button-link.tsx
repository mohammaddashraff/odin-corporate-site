import type { Route } from "next";
import Link from "next/link";
import { ReactNode } from "react";

type ButtonLinkProps = {
  href: string;
  children: ReactNode;
  variant?: "primary" | "secondary";
  className?: string;
};

export function ButtonLink({ href, children, variant = "primary", className }: ButtonLinkProps) {
  const base =
    "inline-flex items-center justify-center rounded-2xl border px-5 py-3 text-sm font-medium transition duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue/60";

  const styles =
    variant === "primary"
      ? "border-blue bg-blue text-white hover:-translate-y-0.5 hover:bg-blue/90"
      : "border-stroke bg-white/[0.02] text-text hover:-translate-y-0.5 hover:border-silver/50 hover:bg-white/[0.04]";

  const external = href.startsWith("http");

  if (external) {
    return (
      <a href={href} className={`${base} ${styles} ${className ?? ""}`} target="_blank" rel="noopener noreferrer">
        {children}
      </a>
    );
  }

  return (
    <Link href={href as Route} className={`${base} ${styles} ${className ?? ""}`}>
      {children}
    </Link>
  );
}
