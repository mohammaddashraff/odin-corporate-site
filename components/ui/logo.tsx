import Image from "next/image";
import Link from "next/link";

type LogoProps = {
  compact?: boolean;
};

export function Logo({ compact = false }: LogoProps) {
  return (
    <Link
      href="/"
      aria-label="ODIN homepage"
      className="group inline-flex items-center gap-3 rounded-2xl py-1 transition"
    >
      <span className="inline-flex transition duration-300 group-hover:-translate-y-0.5 group-hover:scale-[1.03]">
        <Image
          src="/brand/odin-clay-mark.svg"
          alt=""
          width={compact ? 60 : 72}
          height={compact ? 60 : 72}
          className={`${compact ? "h-12 w-12 sm:h-[58px] sm:w-[58px]" : "h-16 w-16 sm:h-[72px] sm:w-[72px]"} object-contain drop-shadow-[0_8px_12px_rgba(36,108,255,0.18)]`}
          priority
        />
      </span>
      <span className="flex items-center gap-2 leading-none">
        <span className={`${compact ? "text-xl" : "text-2xl"} font-bold tracking-[0.18em] text-text`}>ODIN</span>
        <span className="rounded-full border border-blue/10 bg-blue/10 px-2 py-1 text-[9px] font-bold uppercase tracking-[0.2em] text-blue">ERP</span>
      </span>
    </Link>
  );
}
