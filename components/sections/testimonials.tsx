import { testimonials } from "@/content/site-content";
import { Container } from "@/components/ui/container";
import { Reveal } from "@/components/ui/reveal";
import { SectionHeading } from "@/components/ui/section-heading";

export function Testimonials() {
  return (
    <section className="section-spacing border-y border-stroke bg-panel/35">
      <Container>
        <SectionHeading
          eyebrow="Testimonials"
          title="Trusted by operations, finance, and transformation leaders"
          description="Client feedback placeholders that can be replaced with approved quotes after launch."
        />

        <div className="mt-10 grid gap-5 md:grid-cols-3">
          {testimonials.map((item, index) => (
            <Reveal key={item.company} delay={index * 0.08}>
              <article className="surface h-full p-6">
                <p className="text-sm leading-relaxed text-muted">&ldquo;{item.quote}&rdquo;</p>
                <p className="mt-6 text-sm font-semibold text-text">{item.name}</p>
                <p className="mt-1 text-xs uppercase tracking-[0.18em] text-silver">{item.company}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
