import { ArrowRight } from "lucide-react";
import { Link } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
import { CatalogGrid } from "@/components/catalog-grid";
import type { CatalogItem } from "@/lib/catalog";

export function CatalogPage({ eyebrow, title, intro, items }: { eyebrow: string; title: string; intro: string; items: CatalogItem[] }) {
  return (
    <main className="pt-18">
      <section className="relative overflow-hidden border-b border-border py-24 lg:py-32">
        <div className="pointer-grid absolute inset-0" aria-hidden="true" />
        <div className="relative mx-auto max-w-7xl px-5 lg:px-8">
          <p className="section-tag">{eyebrow}</p>
          <h1 className="font-display mt-5 max-w-4xl text-5xl font-bold leading-tight sm:text-6xl lg:text-7xl">{title}</h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-muted-foreground">{intro}</p>
        </div>
      </section>
      <section className="mx-auto max-w-7xl px-5 py-20 lg:px-8 lg:py-28">
        <CatalogGrid items={items} />
      </section>
      <section className="border-y border-border bg-secondary/40">
        <div className="mx-auto flex max-w-7xl flex-col justify-between gap-7 px-5 py-16 sm:flex-row sm:items-center lg:px-8">
          <div><p className="section-tag">Next step</p><h2 className="font-display mt-3 text-3xl font-bold">Ready to build what’s next?</h2></div>
          <Button asChild size="lg"><Link to="/contact">Start a conversation <ArrowRight className="size-4" /></Link></Button>
        </div>
      </section>
    </main>
  );
}