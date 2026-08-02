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
    "inline-flex items-center justify-center rounded-2xl border px-5 py-3 text-sm font-semibold transition duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue/60";

  const styles =
    variant === "primary"
      ? "border-blue/70 bg-blue text-white shadow-[8px_8px_18px_rgba(54,114,255,.24),-5px_-5px_14px_rgba(255,255,255,.85),inset_1px_1px_0_rgba(255,255,255,.28)] hover:-translate-y-1 hover:bg-blue/90 hover:shadow-[10px_12px_22px_rgba(54,114,255,.3),-6px_-6px_16px_rgba(255,255,255,.95)]"
      : "border-white/90 bg-panel/75 text-text shadow-[8px_8px_18px_rgba(105,126,170,.16),-6px_-6px_16px_rgba(255,255,255,.9),inset_1px_1px_0_white] hover:-translate-y-1 hover:border-blue/25 hover:text-blue";

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
