import { ArrowUpRight } from "lucide-react";
import type { CatalogItem } from "@/lib/catalog";

export function CatalogGrid({ items, headingLevel = "h2" }: { items: CatalogItem[]; headingLevel?: "h2" | "h3" }) {
  const Heading = headingLevel;
  return (
    <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
      {items.map((item, index) => (
        <article key={item.title} className="catalog-card group overflow-hidden rounded-lg border border-border bg-card">
          <div className="aspect-[4/3] overflow-hidden bg-secondary">
            <img src={item.image} alt={item.alt} width={480} height={512} loading="lazy" className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" />
          </div>
          <div className="p-6 lg:p-7">
            <div className="flex items-start justify-between gap-4">
              <span className="font-mono text-xs text-accent">0{index + 1}</span>
              <ArrowUpRight className="size-4 shrink-0 text-muted-foreground transition-all duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-accent" aria-hidden="true" />
            </div>
            <Heading className="font-display mt-5 text-xl font-semibold">{item.title}</Heading>
            <p className="mt-3 text-sm leading-6 text-muted-foreground">{item.text}</p>
          </div>
        </article>
      ))}
    </div>
  );
}