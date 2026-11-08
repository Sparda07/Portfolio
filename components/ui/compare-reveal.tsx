"use client";

import React from "react";

export function CompareReveal({
  before,
  after,
  labels,
}: {
  before: React.ReactNode;
  after: React.ReactNode;
  labels: [string, string];
}) {
  const [position, setPosition] = React.useState(50);
  const ref = React.useRef<HTMLDivElement>(null);

  const updatePosition = (clientX: number) => {
    if (!ref.current) return;
    const bounds = ref.current.getBoundingClientRect();
    setPosition(Math.max(5, Math.min(95, ((clientX - bounds.left) / bounds.width) * 100)));
  };

  return (
    <div
      ref={ref}
      className="group relative h-full w-full cursor-col-resize touch-none select-none overflow-hidden"
      onPointerMove={(event) => updatePosition(event.clientX)}
      onPointerDown={(event) => {
        event.currentTarget.setPointerCapture(event.pointerId);
        updatePosition(event.clientX);
      }}
      aria-label="Interactive before and after comparison"
    >
      <div className="absolute inset-0">{after}</div>
      <div className="absolute inset-0 overflow-hidden" style={{ clipPath: `inset(0 ${100 - position}% 0 0)` }}>
        {before}
      </div>
      <div className="pointer-events-none absolute inset-y-0 z-20 w-px bg-gradient-to-b from-transparent via-cyan-100 to-transparent shadow-[0_0_18px_rgba(103,232,249,0.9)]" style={{ left: `${position}%` }}>
        <div className="absolute left-1/2 top-1/2 flex h-10 w-10 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-xl border border-white/30 bg-white text-black shadow-[0_0_25px_rgba(165,243,252,0.65)]">
          ↔
        </div>
      </div>
      <span className="absolute left-5 top-5 z-30 rounded-full border border-white/10 bg-black/30 px-3 py-1.5 text-[10px] uppercase tracking-[0.18em] text-cyan-100/80 backdrop-blur-md">
        {labels[0]}
      </span>
      <span className="absolute right-5 top-5 z-30 rounded-full border border-white/10 bg-black/30 px-3 py-1.5 text-[10px] uppercase tracking-[0.18em] text-violet-100/80 backdrop-blur-md">
        {labels[1]}
      </span>
      <span className="pointer-events-none absolute bottom-5 left-1/2 z-30 -translate-x-1/2 rounded-full border border-white/10 bg-black/30 px-3 py-1.5 text-[10px] uppercase tracking-[0.18em] text-neutral-300 backdrop-blur-md transition-opacity group-hover:opacity-0">
        Drag to compare
      </span>
    </div>
  );
}
