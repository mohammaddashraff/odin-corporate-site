import Image from "next/image";
import Link from "next/link";
import { brandConfig } from "@/lib/brand";

export function OdinMark({ className = "", priority = false }: {
  className?: string;
  priority?: boolean;
}) {
  return (
    <Image
      src={brandConfig.mark}
      alt=""
      aria-hidden="true"
      className={`odin-mark brand-artwork ${className}`}
      width={64}
      height={64}
      sizes="64px"
      priority={priority}
    />
  );
}

type BrandLockupProps = {
  product?: string;
  compact?: boolean;
  descriptor?: boolean;
  mark?: boolean;
  priority?: boolean;
  className?: string;
};

/** Product names stay live text, so all solutions share the approved mark. */
export function BrandLockup({ product, compact = false, descriptor = true,
  mark = true, priority = false, className = "" }: BrandLockupProps) {
  const productName = product?.trim();
  return (
    <span
      className={`brand-lockup ${compact ? "brand-compact" : ""} ${className}`}
      dir="ltr"
      role="img"
      aria-label={`${brandConfig.name}${productName ? ` / ${productName}` : ""}`}
    >
      {mark && <OdinMark priority={priority} />}
      <span className="brand-type" aria-hidden="true">
        <span className="brand-line">
          <strong className="brand-initials">OSS<span>.</span></strong>
          {productName && <><span className="brand-slash">/</span><span className="brand-product">{productName}</span></>}
        </span>
        {descriptor && <span className="brand-descriptor">{brandConfig.descriptor}</span>}
      </span>
    </span>
  );
}

export function Logo({ compact = false, product, priority = false }: {
  compact?: boolean; product?: string; priority?: boolean;
}) {
  return (
    <Link href="/" aria-label={`${brandConfig.name} - Home`} className="brand">
      <BrandLockup compact={compact} product={product} priority={priority} />
    </Link>
  );
}
