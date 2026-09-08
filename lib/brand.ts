import { solutions } from "@/content/solutions";

export const brandConfig = {
  name: "OSS. | Odin Software Solutions",
  descriptor: "odin software solution",
  mark: "/brand/oss-geometric-eye.png",
  socialImage: "/opengraph-image",
} as const;

export function productForPath(pathname: string): string | undefined {
  const [, section, slug] = pathname.split("/");
  if (section !== "solutions") return undefined;
  return solutions.find((solution) => solution.slug === slug)?.short;
}
