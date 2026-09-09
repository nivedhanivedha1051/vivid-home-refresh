import { useEffect, useRef, type ReactNode } from "react";

export function ProgramsGrid({ children }: { children: ReactNode }) {
  const containerRef = useRef<HTMLDivElement>(null);
  const trailRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    const trail = trailRef.current;
    const hasFinePointer = window.matchMedia("(hover: hover) and (pointer: fine)").matches;
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (!container || !trail || !hasFinePointer || prefersReducedMotion) return;

    let frame = 0;
    let latestX = 0;
    let latestY = 0;
    let previousX = 0;
    let previousY = 0;
    let previousStamp = 0;
    let poolIndex = 0;
    const marks = Array.from({ length: 14 }, () => {
      const mark = document.createElement("div");
      mark.className = "programs-grid-trail-mark";
      trail.appendChild(mark);
      return mark;
    });

    const paintTrailMark = (x: number, y: number) => {
      const mark = marks[poolIndex];
      if (!mark) return;
      poolIndex = (poolIndex + 1) % marks.length;
      mark.getAnimations().forEach((animation) => animation.cancel());
      mark.style.setProperty("--programs-trail-x", `${x}px`);
      mark.style.setProperty("--programs-trail-y", `${y}px`);
      mark.animate([{ opacity: 0 }, { opacity: 0.62 }, { opacity: 0.34 }, { opacity: 0 }], {
        duration: 1450,
        easing: "cubic-bezier(0.16, 1, 0.3, 1)",
        fill: "forwards",
      });
    };

    const handlePointerMove = (event: PointerEvent) => {
      const bounds = container.getBoundingClientRect();
      latestX = event.clientX - bounds.left;
      latestY = event.clientY - bounds.top;
      if (frame) return;

      frame = window.requestAnimationFrame((stamp) => {
        container.style.setProperty("--programs-pointer-x", `${latestX}px`);
        container.style.setProperty("--programs-pointer-y", `${latestY}px`);
        container.classList.add("programs-grid-active");

        const distance = Math.hypot(latestX - previousX, latestY - previousY);
        if (stamp - previousStamp >= 42 || distance >= 20) {
          paintTrailMark(latestX, latestY);
          previousX = latestX;
          previousY = latestY;
          previousStamp = stamp;
        }
        frame = 0;
      });
    };

    const handlePointerLeave = () => container.classList.remove("programs-grid-active");

    container.addEventListener("pointermove", handlePointerMove, { passive: true });
    container.addEventListener("pointerleave", handlePointerLeave, { passive: true });
    return () => {
      container.removeEventListener("pointermove", handlePointerMove);
      container.removeEventListener("pointerleave", handlePointerLeave);
      if (frame) window.cancelAnimationFrame(frame);
      marks.forEach((mark) => mark.remove());
    };
  }, []);

  return (
    <div ref={containerRef} className="programs-grid-page relative">
      <div className="programs-grid-base pointer-events-none absolute inset-0" aria-hidden="true" />
      <div className="programs-grid-glow pointer-events-none absolute inset-0" aria-hidden="true" />
      <div ref={trailRef} className="programs-grid-trail pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true" />
      <div className="relative">{children}</div>
    </div>
  );
}