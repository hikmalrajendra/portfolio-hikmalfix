"use client";

import { useEffect, useRef, useState } from "react";

export function CustomCursor() {
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);
  const [enabled, setEnabled] = useState(false);

  useEffect(() => {
    const isTouch = window.matchMedia("(pointer: coarse)").matches;
    const reducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    if (isTouch || reducedMotion) return;
    // eslint-disable-next-line react-hooks/set-state-in-effect -- one-time client capability check on mount, not a render loop
    setEnabled(true);

    let ringX = 0;
    let ringY = 0;
    let targetX = 0;
    let targetY = 0;
    let raf: number;

    function handleMove(e: MouseEvent) {
      targetX = e.clientX;
      targetY = e.clientY;
      if (dotRef.current) {
        dotRef.current.style.transform = `translate3d(${targetX}px, ${targetY}px, 0)`;
      }
    }

    function handleOver(e: MouseEvent) {
      const target = e.target as HTMLElement;
      const interactive = target.closest("a, button, input, textarea, [data-cursor-hover]");
      ringRef.current?.classList.toggle("scale-150", Boolean(interactive));
      ringRef.current?.classList.toggle("border-accent", Boolean(interactive));
    }

    function animate() {
      ringX += (targetX - ringX) * 0.18;
      ringY += (targetY - ringY) * 0.18;
      if (ringRef.current) {
        ringRef.current.style.transform = `translate3d(${ringX}px, ${ringY}px, 0)`;
      }
      raf = requestAnimationFrame(animate);
    }

    window.addEventListener("mousemove", handleMove);
    window.addEventListener("mouseover", handleOver);
    raf = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener("mousemove", handleMove);
      window.removeEventListener("mouseover", handleOver);
      cancelAnimationFrame(raf);
    };
  }, []);

  if (!enabled) return null;

  return (
    <div aria-hidden="true" className="pointer-events-none fixed inset-0 z-[100] hidden md:block">
      <div
        ref={dotRef}
        className="absolute top-0 left-0 h-1.5 w-1.5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-accent"
      />
      <div
        ref={ringRef}
        className="absolute top-0 left-0 h-8 w-8 -translate-x-1/2 -translate-y-1/2 rounded-full border border-silver/40 transition-transform duration-200"
      />
    </div>
  );
}
