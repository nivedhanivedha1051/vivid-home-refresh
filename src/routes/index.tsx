import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Facebook, Instagram, MessageCircle, Twitter } from "lucide-react";
import { useState, type CSSProperties, type PointerEvent } from "react";
import { Button } from "@/components/ui/button";
import { CatalogGrid } from "@/components/catalog-grid";
import { courses, products, services } from "@/lib/catalog";
import hero from "@/assets/tevexxo-hero-new.jpg.asset.json";

export const Route = createFileRoute("/")({
  head: () => ({ meta: [
    { title: "Tevexxo — Software, Products & Tech Training" },
    { name: "description", content: "Tevexxo builds scalable software, creates focused digital products and trains the next generation of engineers." },
    { property: "og:title", content: "Tevexxo — Build. Learn. Scale." },
    { property: "og:description", content: "Engineering, products and practical technology training under one roof." },
    { property: "og:type", content: "website" },
    { name: "twitter:card", content: "summary_large_image" },
  ]}),
  component: Home,
});

const socialLinks = [
  { label: "Instagram", icon: Instagram, href: "https://www.instagram.com/" },
  { label: "WhatsApp", icon: MessageCircle, href: "https://www.whatsapp.com/" },
  { label: "Facebook", icon: Facebook, href: "https://www.facebook.com/" },
  { label: "Twitter / X", icon: Twitter, href: "https://x.com/" },
];

function SocialSection() {
  const [position, setPosition] = useState({ x: 50, y: 50, gridX: 0, gridY: 0 });
  const style = {
    "--pointer-x": `${position.x}%`, "--pointer-y": `${position.y}%`,
    "--grid-x": `${position.gridX}px`, "--grid-y": `${position.gridY}px`,
  } as CSSProperties;

  function handlePointerMove(event: PointerEvent<HTMLElement>) {
    const bounds = event.currentTarget.getBoundingClientRect();
    const x = (event.clientX - bounds.left) / bounds.width;
    const y = (event.clientY - bounds.top) / bounds.height;
    setPosition({ x: x * 100, y: y * 100, gridX: (x - .5) * 18, gridY: (y - .5) * 18 });
  }

  return (
    <section className="social-grid relative overflow-hidden border-y border-border bg-secondary/35" style={style} onPointerMove={handlePointerMove}>
      <div className="social-shade pointer-events-none absolute inset-0" aria-hidden="true" />
      <div className="relative mx-auto max-w-7xl px-5 py-24 lg:px-8 lg:py-32">
        <div className="max-w-2xl"><p className="section-tag">Stay connected</p><h2 className="font-display mt-4 text-4xl font-bold sm:text-5xl">Follow what we’re building.</h2></div>
        <div className="mt-12 grid grid-cols-2 gap-4 lg:grid-cols-4">
          {socialLinks.map(({ label, icon: Icon, href }) => (
            <a key={label} href={href} target="_blank" rel="noreferrer" className="social-card group flex min-h-40 flex-col justify-between rounded-lg border border-border bg-card/90 p-6" aria-label={`Follow Tevexxo on ${label}`}>
              <Icon className="size-7 text-accent" aria-hidden="true" />
              <span className="flex items-center justify-between gap-3 text-sm font-semibold">{label}<ArrowRight className="size-4 shrink-0 text-muted-foreground transition-transform duration-300 group-hover:translate-x-1 group-hover:text-accent" /></span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

function CollectionPreview({ eyebrow, title, intro, items, to }: { eyebrow: string; title: string; intro: string; items: typeof services; to: "/services" | "/courses" }) {
  return (
    <section className="mx-auto max-w-7xl px-5 py-24 lg:px-8 lg:py-32">
      <div className="grid items-end gap-6 sm:grid-cols-[minmax(0,1fr)_auto]">
        <div className="min-w-0"><p className="section-tag">{eyebrow}</p><h2 className="font-display mt-4 text-4xl font-bold sm:text-5xl">{title}</h2><p className="mt-4 max-w-2xl leading-7 text-muted-foreground">{intro}</p></div>
      </div>
      <div className="mt-12"><CatalogGrid items={items.slice(0, 3)} headingLevel="h3" /></div>
      <div className="mt-10 flex justify-center"><Button asChild variant="outline" size="lg"><Link to={to}>View all <ArrowRight className="size-4" /></Link></Button></div>
    </section>
  );
}

function Home() {
  return <main className="pt-18">
    <section className="relative flex min-h-[720px] items-center overflow-hidden border-b border-border">
      <img src={hero.url} alt="Luminous digital wave representing Tevexxo technology" width={1920} height={1088} fetchPriority="high" className="absolute inset-0 h-full w-full object-cover" />
      <div className="hero-shade absolute inset-0" />
      <div className="pointer-grid absolute inset-0" aria-hidden="true" />
      <div className="relative z-10 mx-auto w-full max-w-7xl px-5 py-24 lg:px-8">
        <div className="max-w-3xl"><p className="section-tag"><span className="pulse-dot" /> Next-gen tech studio</p><h1 className="font-display mt-6 text-5xl font-bold leading-[1.05] sm:text-6xl lg:text-8xl">We build the tech <span className="text-gradient">your business runs on.</span></h1><p className="mt-7 max-w-2xl border-l-2 border-accent/40 pl-5 text-lg leading-8 text-muted-foreground">We design and ship software, train future-ready engineers, and partner with ambitious teams to turn complex ideas into working products.</p><div className="mt-9 flex flex-wrap gap-3"><Button asChild size="lg"><Link to="/contact">Start a project <ArrowRight className="size-4" /></Link></Button><Button asChild size="lg" variant="outline"><Link to="/courses">Explore courses</Link></Button></div></div>
        <div className="mt-20 grid max-w-3xl grid-cols-2 gap-8 border-t border-border pt-7 sm:grid-cols-4">{[["120+","Projects"],["40+","Clients"],["3,500+","Learners"],["6 yrs","Building"]].map(([number,label]) => <div key={label}><strong className="font-display text-2xl">{number}</strong><p className="mt-1 text-xs text-muted-foreground">{label}</p></div>)}</div>
      </div>
    </section>
    <CollectionPreview eyebrow="What we do" title="Engineering that moves business forward." intro="A focused product team for ambitious builds, complex modernization and reliable scale." items={services} to="/services" />
    <div className="border-y border-border bg-secondary/20"><CollectionPreview eyebrow="Tevexxo Academy" title="Learn the work by doing the work." intro="Live, cohort-led programs grounded in practical projects, useful feedback and production habits." items={courses} to="/courses" /></div>
    <section className="mx-auto max-w-7xl px-5 py-24 lg:px-8 lg:py-32"><div className="max-w-2xl"><p className="section-tag">Our products</p><h2 className="font-display mt-4 text-4xl font-bold sm:text-5xl">Tools shaped by real work.</h2><p className="mt-4 leading-7 text-muted-foreground">Focused software products for modern teams, each built to remove friction instead of adding it.</p></div><div className="mt-12"><CatalogGrid items={products} headingLevel="h3" /></div></section>
    <SocialSection />
  </main>;
}