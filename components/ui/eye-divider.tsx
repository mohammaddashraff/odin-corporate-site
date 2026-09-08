import Image from "next/image";
import { brandConfig } from "@/lib/brand";

import { Container } from "@/components/ui/container";

type EyeDividerProps = {
  className?: string;
};

export function EyeDivider({ className }: EyeDividerProps) {
  return (
    <div className={`py-3 ${className ?? ""}`} aria-hidden>
      <Container>
        <div className="relative flex items-center justify-center">
          <div className="absolute left-0 right-0 h-px bg-stroke" />
          <div className="relative bg-bg px-4 opacity-55">
            <Image src={brandConfig.mark} alt="" width={38} height={38} />
          </div>
        </div>
      </Container>
    </div>
  );
}
