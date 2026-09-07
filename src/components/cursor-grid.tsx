import { useEffect, useRef } from "react";

export function CursorGrid({ className = "" }: { className?: string }) {
  const gridRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const grid = gridRef.current;
    if (!grid || !window.matchMedia("(hover: hover) and (pointer: fine)").matches) return;

    let frame = 0;
    const handlePointerMove = (event: PointerEvent) => {
      if (frame) return;

      frame = window.requestAnimationFrame(() => {
        const bounds = grid.getBoundingClientRect();
        const x = Math.max(0, Math.min(1, (event.clientX - bounds.left) / bounds.width));
        const y = Math.max(0, Math.min(1, (event.clientY - bounds.top) / bounds.height));
        grid.style.setProperty("--cursor-grid-x", `${(x - 0.5) * 16}px`);
        grid.style.setProperty("--cursor-grid-y", `${(y - 0.5) * 16}px`);
        frame = 0;
      });
    };

    window.addEventListener("pointermove", handlePointerMove, { passive: true });
    return () => {
      window.removeEventListener("pointermove", handlePointerMove);
      if (frame) window.cancelAnimationFrame(frame);
    };
  }, []);

  return <div ref={gridRef} className={`cursor-grid pointer-events-none absolute inset-0 ${className}`} aria-hidden="true" />;
}