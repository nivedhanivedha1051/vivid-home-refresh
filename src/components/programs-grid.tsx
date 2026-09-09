import { useEffect, useRef, type ReactNode } from "react";

export function ProgramsGrid({ children }: { children: ReactNode }) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container || !window.matchMedia("(hover: hover) and (pointer: fine)").matches) return;

    let frame = 0;
    const handlePointerMove = (event: PointerEvent) => {
      if (frame) return;

      frame = window.requestAnimationFrame(() => {
        const bounds = container.getBoundingClientRect();
        container.style.setProperty("--programs-pointer-x", `${event.clientX - bounds.left}px`);
        container.style.setProperty("--programs-pointer-y", `${event.clientY - bounds.top}px`);
        frame = 0;
      });
    };

    container.addEventListener("pointermove", handlePointerMove, { passive: true });
    return () => {
      container.removeEventListener("pointermove", handlePointerMove);
      if (frame) window.cancelAnimationFrame(frame);
    };
  }, []);

  return (
    <div ref={containerRef} className="programs-grid-page relative">
      <div className="programs-grid-base pointer-events-none absolute inset-0" aria-hidden="true" />
      <div className="programs-grid-glow pointer-events-none absolute inset-0" aria-hidden="true" />
      <div className="relative">{children}</div>
    </div>
  );
}