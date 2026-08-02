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
      className="group inline-flex items-center gap-3 rounded-2xl px-1 py-1 transition"
    >
      <span className="inline-flex rounded-2xl border border-white/90 bg-panel/70 p-1 shadow-[6px_6px_14px_rgba(105,126,170,.15),-5px_-5px_12px_rgba(255,255,255,.92),inset_1px_1px_0_white] transition duration-300 group-hover:-translate-y-0.5">
        <Image
          src="/brand/odin-clay-mark.svg"
          alt=""
          width={compact ? 46 : 56}
          height={compact ? 46 : 56}
          className="h-auto w-auto object-contain"
          priority
        />
      </span>
      <span className="flex items-center gap-2 leading-none">
        <span className={`${compact ? "text-lg" : "text-xl"} font-bold tracking-[0.16em] text-text`}>ODIN</span>
        <span className="rounded-full bg-blue/10 px-2 py-1 text-[9px] font-bold uppercase tracking-[0.2em] text-blue">ERP</span>
      </span>
    </Link>
  );
}
