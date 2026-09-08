import { ArrowRight, Check } from "lucide-react";
import { Link } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
import engineering from "@/assets/tevexxo-engineering.jpg.asset.json";

export type DetailPageProps = { eyebrow:string; title:string; intro:string; items:{title:string; text:string}[]; image?: { url: string; alt: string }; carousel?: boolean };

export function DetailPage({ eyebrow, title, intro, items, image, carousel = false }: DetailPageProps) {
  return <main className="pt-18">
    <section className="relative overflow-hidden border-b border-border py-24 lg:py-32"><img src={image?.url ?? engineering.url} alt={image?.alt ?? "Tevexxo engineering system"} width={1200} height={912} className="absolute inset-0 h-full w-full object-cover opacity-30"/><div className="hero-shade absolute inset-0"/><div className="relative mx-auto max-w-7xl px-5 lg:px-8"><p className="section-tag">{eyebrow}</p><h1 className="font-display mt-5 max-w-4xl text-5xl font-bold leading-tight sm:text-6xl lg:text-7xl">{title}</h1><p className="mt-6 max-w-2xl text-lg leading-8 text-muted-foreground">{intro}</p></div></section>
    <section className="mx-auto max-w-7xl px-5 py-20 lg:px-8 lg:py-28"><div className="grid gap-px overflow-hidden rounded-lg border border-border bg-border md:grid-cols-2">{items.map((item,i)=><article key={item.title} className="bg-card p-8 lg:p-10"><span className="font-mono text-xs text-accent">0{i+1}</span><h2 className="font-display mt-6 text-2xl font-semibold">{item.title}</h2><p className="mt-3 leading-7 text-muted-foreground">{item.text}</p><div className="mt-6 flex items-center gap-2 text-sm text-accent"><Check className="size-4"/> Built for measurable outcomes</div></article>)}</div></section>
    <section className="border-y border-border bg-secondary/40"><div className="mx-auto flex max-w-7xl flex-col justify-between gap-7 px-5 py-16 sm:flex-row sm:items-center lg:px-8"><div><p className="section-tag">Next step</p><h2 className="font-display mt-3 text-3xl font-bold">Ready to build what’s next?</h2></div><Button asChild size="lg"><Link to="/contact">Start a conversation <ArrowRight className="size-4"/></Link></Button></div></section>
  </main>;
}