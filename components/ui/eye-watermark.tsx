import Image from "next/image";

type EyeWatermarkProps = {
  className?: string;
};

export function EyeWatermark({ className }: EyeWatermarkProps) {
  return (
    <div aria-hidden className={`pointer-events-none absolute inset-0 overflow-hidden ${className ?? ""}`}>
      <div className="absolute -right-24 -top-36 opacity-[0.075] sm:-right-16 sm:-top-44">
        <Image src="/brand/odin-eye.svg" alt="" width={520} height={520} priority={false} />
      </div>
    </div>
  );
}
