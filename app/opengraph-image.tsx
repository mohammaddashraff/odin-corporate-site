import { ImageResponse } from "next/og";
import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { solutions } from "@/content/solutions";

export const runtime = "nodejs";
export const alt = "OSS. - Odin Software Solutions. Software built around your business.";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function SocialImage() {
  const [mark, regular, bold] = await Promise.all([
    readFile(join(process.cwd(), "public/brand/oss-eye.png")),
    readFile(join(process.cwd(), "public/fonts/manrope-regular.ttf")),
    readFile(join(process.cwd(), "public/fonts/manrope-bold.ttf")),
  ]);
  return new ImageResponse(
    (
      <div style={{ display: "flex", flexDirection: "column", padding: "76px 86px", width: "100%", height: "100%", background: "#f7f9fd", color: "#102747", fontFamily: "Manrope" }}>
        <div style={{ display: "flex", alignItems: "center", gap: 30 }}>
          {/* ImageResponse embeds the local raster artwork directly. */}
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={`data:image/png;base64,${mark.toString("base64")}`} width={142} height={142} alt="" />
          <div style={{ display: "flex", flexDirection: "column" }}>
            <div style={{ display: "flex", fontSize: 100, fontWeight: 700, letterSpacing: -7, lineHeight: 1.1 }}>
              OSS<span style={{ color: "#245de8" }}>.</span>
            </div>
            <div style={{ display: "flex", fontSize: 24, color: "#53647b", marginTop: 12 }}>odin software solution</div>
          </div>
        </div>
        <div style={{ display: "flex", fontSize: 48, fontWeight: 700, lineHeight: 1.25, maxWidth: 820, marginTop: 52 }}>Software built around your business.</div>
        <div style={{ display: "flex", gap: 22, fontSize: 22, marginTop: 38, color: "#53647b" }}>
          {solutions.map((solution) => <span key={solution.slug}>{`/ ${solution.short}`}</span>)}
        </div>
        <div style={{ display: "flex", marginTop: "auto", fontSize: 19, color: "#245de8" }}>odin-ltd.com</div>
      </div>
    ),
    { ...size, fonts: [
      { name: "Manrope", data: regular, weight: 400, style: "normal" },
      { name: "Manrope", data: bold, weight: 700, style: "normal" },
    ] },
  );
}
