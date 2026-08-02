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
      className="group inline-flex items-center gap-3.5 rounded-xl py-1 transition"
    >
      <span className="inline-flex transition duration-300 group-hover:translate-x-0.5">
        <Image
          src="/brand/odin-clay-mark.svg"
          alt=""
          width={compact ? 54 : 62}
          height={compact ? 54 : 62}
          className={`${compact ? "h-11 w-11 sm:h-[52px] sm:w-[52px]" : "h-14 w-14 sm:h-[62px] sm:w-[62px]"} object-contain`}
          priority
        />
      </span>
      <span className="flex flex-col leading-none">
        <span className={`${compact ? "text-xl" : "text-2xl"} font-bold tracking-[0.2em] text-[#0A1833]`}>ODIN</span>
        <span className="mt-1 text-[7px] font-semibold uppercase tracking-[0.27em] text-muted sm:text-[8px]">Enterprise Systems</span>
      </span>
    </Link>
  );
}
