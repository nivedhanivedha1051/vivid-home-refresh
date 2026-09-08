import { useCallback, useEffect, useRef, useState } from "react";
import { ArrowRight, Check } from "lucide-react";
import { Link } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";

export type CarouselItem = { title: string; text: string };

const AUTOPLAY_MS = 5000;

export function ProjectCarousel({ items }: { items: CarouselItem[] }) {
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);
  const touchStart = useRef<number | null>(null);

  const go = useCallback((i: number) => setActive(((i % items.length) + items.length) % items.length), [items.length]);

  useEffect(() => {
    if (paused || items.length < 2) return;
    const id = window.setInterval(() => setActive((p) => (p + 1) % items.length), AUTOPLAY_MS);
    return () => window.clearInterval(id);
  }, [paused, items.length]);

  return (
    <div
      className="relative mx-auto w-full max-w-3xl"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onTouchStart={(e) => { touchStart.current = e.touches[0]?.clientX ?? null; setPaused(true); }}
      onTouchEnd={(e) => {
        const start = touchStart.current;
        touchStart.current = null;
        setPaused(false);
        if (start === null) return;
        const dx = (e.changedTouches[0]?.clientX ?? start) - start;
        if (Math.abs(dx) > 45) go(active + (dx < 0 ? 1 : -1));
      }}
      role="region"
      aria-roledescription="carousel"
      aria-label="Selected projects"
    >
      <div className="overflow-hidden rounded-lg border border-border">
        <div
          className="flex will-change-transform"
          style={{ transform: `translate3d(-${active * 100}%,0,0)`, transition: "transform 800ms cubic-bezier(0.4,0,0.2,1)" }}
        >
          {items.map((item, i) => (
            <article key={item.title} className="w-full shrink-0 bg-card p-8 lg:p-12" aria-hidden={i !== active}>
              <span className="font-mono text-xs text-accent">0{i + 1}</span>
              <h2 className="font-display mt-6 text-2xl font-semibold lg:text-3xl">{item.title}</h2>
              <p className="mt-3 leading-7 text-muted-foreground">{item.text}</p>
              <div className="mt-6 flex items-center gap-2 text-sm text-accent"><Check className="size-4" /> Built for measurable outcomes</div>
              <Button asChild className="mt-8" tabIndex={i === active ? 0 : -1}>
                <Link to="/contact">View Project <ArrowRight className="size-4" /></Link>
              </Button>
            </article>
          ))}
        </div>
      </div>

      <div className="mt-7 flex items-center justify-center gap-2">
        {items.map((item, i) => (
          <button
            key={item.title}
            type="button"
            onClick={() => go(i)}
            aria-label={`Go to project ${i + 1}: ${item.title}`}
            aria-current={i === active}
            className={`h-1.5 rounded-full transition-all duration-300 ${i === active ? "w-8 bg-accent" : "w-2.5 bg-border hover:bg-muted-foreground"}`}
          />
        ))}
      </div>
    </div>
  );
}
