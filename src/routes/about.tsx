import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Compass, Cpu, Layers, Rocket, ShieldCheck, Sparkles, Target, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import { CatalogGrid } from "@/components/catalog-grid";
import { CursorGrid } from "@/components/cursor-grid";
import { Reveal } from "@/components/reveal";
import { services } from "@/lib/catalog";
import aboutHero from "@/assets/about-hero.jpg";
import aboutTeam from "@/assets/about-team.jpg";
import aboutInnovation from "@/assets/about-innovation.jpg";

export const Route = createFileRoute("/about")({
  head: () => ({ meta: [
    { title: "About Tevexxo — A Premium Technology Studio" },
    { name: "description", content: "Tevexxo unites engineering, design and practical education to build technology that businesses depend on every day." },
    { property: "og:title", content: "About Tevexxo" },
    { property: "og:description", content: "Who we are, what we do, and the standard we hold ourselves to." },
    { property: "og:type", content: "website" },
    { name: "twitter:card", content: "summary_large_image" },
  ]}),
  component: About,
});

const pillars = [
  { icon: Users, title: "Senior by default", text: "Small, experienced teams stay close to your product from first decision to long-term scale." },
  { icon: ShieldCheck, title: "Reliability first", text: "We design for the day after launch: observability, testing and maintainable foundations." },
  { icon: Layers, title: "One connected team", text: "Strategy, design and engineering work in the same room instead of handing work over walls." },
  { icon: Rocket, title: "Momentum you can see", text: "Short cycles, working demos and direct access keep progress visible every single week." },
];

const stack = [
  ["Product & UX", "Research, systems design and interface craft"],
  ["Web & Mobile", "React, TypeScript, native and cross-platform delivery"],
  ["Cloud & Data", "Scalable infrastructure, pipelines and automation"],
  ["Applied AI", "Practical intelligence built around measurable value"],
];

function About() {
  return (
    <main className="pt-18">
      <section className="relative flex min-h-[560px] items-center overflow-hidden border-b border-border lg:min-h-[640px]">
        <img src={aboutHero} alt="Tevexxo studio with glowing technology network visuals" width={1920} height={1080} fetchPriority="high" className="absolute inset-0 h-full w-full object-cover" />
        <div className="hero-shade absolute inset-0" />
        <CursorGrid />
        <div className="relative z-10 mx-auto w-full max-w-7xl px-5 py-24 lg:px-8 lg:py-28">
          <Reveal>
            <p className="section-tag"><span className="pulse-dot" /> About us</p>
            <h1 className="font-display mt-6 max-w-4xl text-5xl font-bold leading-[1.05] sm:text-6xl lg:text-7xl">About <span className="text-gradient">TEVEXXO</span></h1>
            <p className="mt-7 max-w-2xl border-l-2 border-accent/40 pl-5 text-lg leading-8 text-muted-foreground">
              We are a technology studio building software, products and engineering talent. Ambitious teams partner with us to turn complex ideas into dependable systems that keep working long after launch.
            </p>
            <div className="mt-9 flex flex-wrap gap-3">
              <Button asChild size="lg"><Link to="/contact">Work with us <ArrowRight className="size-4" /></Link></Button>
              <Button asChild size="lg" variant="outline"><Link to="/">Back to home</Link></Button>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-24 lg:px-8 lg:py-32">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <Reveal>
            <p className="section-tag">Who we are</p>
            <h2 className="font-display mt-4 text-4xl font-bold sm:text-5xl">Builders who stay for the hard part.</h2>
            <p className="mt-5 leading-8 text-muted-foreground">Tevexxo started as a small group of engineers and designers who wanted to work differently: fewer handovers, more ownership, and honest conversations about trade-offs.</p>
            <p className="mt-4 leading-8 text-muted-foreground">Today the studio, the academy and the product lab share one team and one standard — clear thinking, tight feedback loops and software that earns its place in daily work.</p>
            <div className="mt-9 grid grid-cols-2 gap-8 border-t border-border pt-7 sm:grid-cols-4">
              {[["120+","Projects"],["40+","Clients"],["3,500+","Learners"],["6 yrs","Building"]].map(([number, label]) => (
                <div key={label}><strong className="font-display text-2xl">{number}</strong><p className="mt-1 text-xs text-muted-foreground">{label}</p></div>
              ))}
            </div>
          </Reveal>
          <Reveal delay={120}>
            <div className="depth-card overflow-hidden rounded-lg border border-border bg-card">
              <img src={aboutTeam} alt="Tevexxo engineers reviewing a product plan together" width={1280} height={960} loading="lazy" className="h-full w-full object-cover" />
            </div>
          </Reveal>
        </div>
      </section>

      <section className="border-y border-border bg-secondary/20">
        <div className="mx-auto max-w-7xl px-5 py-24 lg:px-8 lg:py-32">
          <Reveal>
            <p className="section-tag">What we do</p>
            <h2 className="font-display mt-4 max-w-3xl text-4xl font-bold sm:text-5xl">Engineering, design and delivery under one roof.</h2>
            <p className="mt-4 max-w-2xl leading-7 text-muted-foreground">From first prototype to production scale, we cover the full path with one accountable team.</p>
          </Reveal>
          <Reveal delay={100} className="mt-12"><CatalogGrid items={services.slice(0, 3)} headingLevel="h3" /></Reveal>
          <div className="mt-10 flex justify-center"><Button asChild variant="outline" size="lg"><Link to="/services">View all services <ArrowRight className="size-4" /></Link></Button></div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-24 lg:px-8 lg:py-32">
        <div className="grid gap-6 md:grid-cols-2">
          {[
            { icon: Target, tag: "Our mission", title: "Make good technology ordinary.", text: "We build systems that remove friction for the people using them every day, and we measure success by the work they make easier — not by the size of the stack." },
            { icon: Compass, tag: "Our vision", title: "A generation that builds better.", text: "A future where teams anywhere can ship reliable, thoughtful software, supported by engineers we help train and tools we design in the open." },
          ].map(({ icon: Icon, tag, title, text }) => (
            <Reveal key={tag}>
              <article className="depth-card glass-panel h-full rounded-lg border border-border p-8 lg:p-10">
                <Icon className="size-7 text-accent" aria-hidden="true" />
                <p className="section-tag mt-6">{tag}</p>
                <h2 className="font-display mt-3 text-3xl font-semibold">{title}</h2>
                <p className="mt-4 leading-7 text-muted-foreground">{text}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="relative overflow-hidden border-y border-border bg-secondary/20">
        <CursorGrid />
        <div className="relative z-10 mx-auto max-w-7xl px-5 py-24 lg:px-8 lg:py-32">
          <Reveal>
            <p className="section-tag">Why choose Tevexxo</p>
            <h2 className="font-display mt-4 max-w-3xl text-4xl font-bold sm:text-5xl">A product team mindset, not an agency queue.</h2>
          </Reveal>
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {pillars.map(({ icon: Icon, title, text }, index) => (
              <Reveal key={title} delay={index * 90}>
                <article className="service-tile h-full rounded-lg border border-border bg-card p-7">
                  <Icon className="size-6 text-accent" aria-hidden="true" />
                  <h3 className="font-display mt-5 text-lg font-semibold">{title}</h3>
                  <p className="mt-3 text-sm leading-6 text-muted-foreground">{text}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-24 lg:px-8 lg:py-32">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <Reveal>
            <div className="depth-card overflow-hidden rounded-lg border border-border bg-card">
              <img src={aboutInnovation} alt="Glowing network sphere representing Tevexxo's technology platform" width={1280} height={960} loading="lazy" className="h-full w-full object-cover" />
            </div>
          </Reveal>
          <Reveal delay={120}>
            <p className="section-tag"><Sparkles className="size-4" /> Technology & innovation</p>
            <h2 className="font-display mt-4 text-4xl font-bold sm:text-5xl">Modern foundations, chosen on purpose.</h2>
            <p className="mt-5 leading-8 text-muted-foreground">We keep a deliberately focused toolkit so every project benefits from deep expertise rather than novelty, and we invest continuously in the practices that make delivery predictable.</p>
            <ul className="mt-8 grid gap-px overflow-hidden rounded-lg border border-border bg-border">
              {stack.map(([title, text]) => (
                <li key={title} className="service-tile bg-card p-5">
                  <div className="flex items-start gap-4">
                    <Cpu className="mt-1 size-5 shrink-0 text-accent" aria-hidden="true" />
                    <div><p className="font-semibold">{title}</p><p className="mt-1 text-sm text-muted-foreground">{text}</p></div>
                  </div>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </section>

      <section className="border-y border-border bg-secondary/40">
        <div className="mx-auto flex max-w-7xl flex-col justify-between gap-7 px-5 py-16 sm:flex-row sm:items-center lg:px-8">
          <div><p className="section-tag">Next step</p><h2 className="font-display mt-3 text-3xl font-bold">Ready to build what’s next?</h2></div>
          <div className="flex flex-wrap gap-3">
            <Button asChild size="lg"><Link to="/contact">Start a conversation <ArrowRight className="size-4" /></Link></Button>
            <Button asChild size="lg" variant="outline"><Link to="/">Back to home</Link></Button>
          </div>
        </div>
      </section>
    </main>
  );
}
