"use client";

import React from "react";
import { AnimatePresence, motion } from "motion/react";

const words = ["products", "experiences", "interfaces", "ideas"];

export default function Footer() {
  const [index, setIndex] = React.useState(0);

  React.useEffect(() => {
    const interval = window.setInterval(() => {
      setIndex((current) => (current + 1) % words.length);
    }, 2800);

    return () => window.clearInterval(interval);
  }, []);

  return (
    <footer className="relative overflow-hidden border-t border-white/[0.08] bg-[#040507] px-6 py-24 text-white sm:px-10 lg:px-14">
      <motion.div
        className="pointer-events-none absolute left-1/2 top-1/2 h-96 w-96 -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-400/[0.08] blur-[120px]"
        animate={{ scale: [0.85, 1.15, 0.85], opacity: [0.35, 0.7, 0.35] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      />
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-cyan-200/70 to-transparent" />
      <WorldMap />
      <div className="relative z-10 mx-auto flex max-w-6xl flex-col items-center justify-between gap-10 md:flex-row">
        <div className="text-center md:text-left">
          <p className="mb-4 text-[10px] uppercase tracking-[0.3em] text-cyan-200/70">
            Keep building
          </p>
          <div className="flex flex-wrap items-center justify-center gap-3 text-2xl font-bold tracking-tight sm:text-4xl md:justify-start">
            <span>Build thoughtful</span>
            <span className="relative inline-flex min-w-[170px] justify-center overflow-hidden rounded-xl border border-white/30 bg-gradient-to-br from-cyan-100 via-white to-violet-200 px-4 py-2 text-black shadow-[0_0_30px_rgba(103,232,249,0.2)]">
              <AnimatePresence mode="popLayout">
                <motion.span
                  key={words[index]}
                  initial={{ y: -35, opacity: 0, filter: "blur(8px)" }}
                  animate={{ y: 0, opacity: 1, filter: "blur(0px)" }}
                  exit={{ y: 35, opacity: 0, filter: "blur(8px)" }}
                  transition={{ duration: 0.45 }}
                  className="whitespace-nowrap"
                >
                  {words[index]}
                </motion.span>
              </AnimatePresence>
            </span>
          </div>
        </div>

        <div className="text-center text-xs leading-6 text-neutral-500 md:text-right">
          <p>Designed and built by Ismail Hossain</p>
          <a className="inline-flex items-center gap-2 transition-colors hover:text-cyan-200" href="mailto:ismailhossain.creates@gmail.com">
            <svg aria-hidden="true" className="h-3.5 w-3.5 text-cyan-200" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
              <rect x="3" y="5" width="18" height="14" rx="2" />
              <path d="m4 7 8 6 8-6" />
            </svg>
            ismailhossain.creates@gmail.com
          </a>
          <p className="mt-2 text-neutral-700">© All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

function WorldMap() {
  return (
    <div className="pointer-events-none absolute inset-x-0 bottom-0 h-[280px] overflow-hidden opacity-35">
      <svg
        aria-hidden="true"
        viewBox="0 0 1200 420"
        preserveAspectRatio="xMidYMid slice"
        className="absolute bottom-0 h-full w-full text-cyan-200/[0.045]"
      >
        <defs>
          <pattern id="footer-map-grid" width="36" height="36" patternUnits="userSpaceOnUse">
            <path d="M36 0H0v36" fill="none" stroke="currentColor" strokeOpacity="0.07" strokeWidth="1" />
          </pattern>
          <linearGradient id="footer-map-fill" x1="0" x2="0" y1="0" y2="1">
            <stop offset="0" stopColor="#164e63" stopOpacity="0.14" />
            <stop offset="1" stopColor="#020617" stopOpacity="0.02" />
          </linearGradient>
        </defs>
        <rect width="1200" height="420" fill="url(#footer-map-grid)" />
        <g fill="url(#footer-map-fill)" stroke="currentColor" strokeOpacity="0.18" strokeWidth="1.2">
          <path d="M85 105 145 70 210 78 250 112 238 150 198 158 178 198 142 184 128 148 92 141Z" />
          <path d="m248 198 38 14 24 54-18 83-28 43-25-67 10-57-21-38Z" />
          <path d="m390 102 46-29 92 4 42 25 61-8 39 30-22 28-68-5-42 28-68-12-52 15-35-32Z" />
          <path d="m551 167 43 15 24 55-17 57-31 50-28-39 9-45-21-47Z" />
          <path d="m696 116 38-42 76 8 30 30 56 1 36 31-23 42-65 6-29 45-51-26-29-48-38-16Z" />
          <path d="m835 236 45-25 46 21-4 42-37 16-32-18Z" />
          <path d="m932 131 31-16 36 18-11 25-42 3Z" />
          <path d="m1000 185 50-16 59 34-18 35-49-2-26 24-37-22Z" />
        </g>
        <g fill="none" stroke="#67e8f9" strokeOpacity="0.12" strokeDasharray="4 8">
          <path d="M190 125 Q445 10 725 150 T1015 205" />
          <path d="M300 270 Q560 120 910 245" />
        </g>
        {[
          [190, 125],
          [440, 105],
          [725, 150],
          [910, 245],
          [1015, 205],
        ].map(([cx, cy], index) => (
          <g key={`${cx}-${cy}`}>
            <circle cx={cx} cy={cy} r="3" fill="#67e8f9" fillOpacity="0.55" />
            <circle cx={cx} cy={cy} r="12" fill="none" stroke="#67e8f9" strokeOpacity="0.18">
              <animate attributeName="r" values="6;18;6" dur={`${2.5 + index * 0.3}s`} repeatCount="indefinite" />
              <animate attributeName="opacity" values="0.7;0;0.7" dur={`${2.5 + index * 0.3}s`} repeatCount="indefinite" />
            </circle>
          </g>
        ))}
      </svg>
      <div className="absolute inset-x-0 bottom-0 h-52 bg-gradient-to-t from-[#040507] via-[#040507]/85 to-transparent" />
      <div className="absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-[#040507]/80 to-transparent" />
    </div>
  );
}
