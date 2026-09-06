import { notFound } from "next/navigation";
import { solutions } from "@/content/solutions";
import { SolutionPageContent } from "@/components/sections/company-pages";
import { pageMetadata } from "@/lib/site";
export const dynamicParams = false;
export function generateStaticParams() {
  return solutions.map((solution) => ({ slug: solution.slug }));
}
export function generateMetadata({ params }: { params: { slug: string } }) {
  const solution = solutions.find((item) => item.slug === params.slug);
  return solution
    ? pageMetadata(
        solution.name.en,
        solution.description.en,
        `/solutions/${solution.slug}`,
      )
    : { title: "Solution not found" };
}
export default function SolutionPage({ params }: { params: { slug: string } }) {
  const solution = solutions.find((item) => item.slug === params.slug);
  if (!solution) notFound();
  return <SolutionPageContent solution={solution} />;
}
