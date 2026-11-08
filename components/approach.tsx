"use client";

import React from "react";
import { motion } from "motion/react";
import { CompareReveal } from "./ui/compare-reveal";

const approachItems = [
  {
    step: "01",
    title: "Listen first",
    text: "I take time to understand the goal, the audience and the real problem before jumping into implementation.",
  },
  {
    step: "02",
    title: "Make a clear plan",
    text: "I turn a broad idea into practical milestones, technical decisions and a path that keeps the work focused.",
  },
  {
    step: "03",
    title: "Build with care",
    text: "I care about the details users feel: responsive layouts, accessible interactions and maintainable code.",
  },
  {
    step: "04",
    title: "Communicate openly",
    text: "You stay informed through clear progress updates, honest trade-offs and questions at the right moment.",
  },
  {
    step: "05",
    title: "Refine the details",
    text: "I test edge cases, review the experience and polish the small moments that make a product feel complete.",
  },
  {
    step: "06",
    title: "Ship responsibly",
    text: "I deliver work that is ready to use, explain how it works and leave the project in a better state.",
  },
];

export default function Approach() {
  return (
    <section
      id="approach"
      className="relative overflow-hidden border-t border-white/[0.06] bg-[#050505] px-6 py-24 text-white sm:px-10 lg:px-14"
    >
      <div className="pointer-events-none absolute inset-0 [background-size:45px_45px] [background-image:linear-gradient(to_right,rgba(255,255,255,0.025)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.025)_1px,transparent_1px)]" />
      <div className="pointer-events-none absolute left-1/2 top-20 h-96 w-96 -translate-x-1/2 rounded-full bg-cyan-300/[0.04] blur-[120px]" />

      <div className="relative z-10 mx-auto max-w-6xl">
        <motion.div
          className="mb-14 flex flex-col justify-between gap-8 md:flex-row md:items-end"
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true, amount: 0.3 }}
        >
          <div>
            <p className="mb-5 text-[10px] uppercase tracking-[0.3em] text-cyan-200/70">
              What I bring
            </p>
            <h2 className="text-4xl font-semibold tracking-[-0.04em] sm:text-6xl">
              How I work with
              <span className="block bg-gradient-to-r from-cyan-200 via-white to-violet-300 bg-clip-text text-transparent">
                care and intent.
              </span>
            </h2>
          </div>
          <p className="max-w-sm text-sm leading-7 text-neutral-500">
            A thoughtful process keeps the project clear, collaborative and
            useful from the first conversation to the final detail.
          </p>
        </motion.div>

        <CareComparison />

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {approachItems.map((item, index) => (
            <motion.article
              key={item.step}
              className="group relative min-h-[250px] overflow-hidden rounded-3xl border border-white/10 bg-white/[0.035] p-7 shadow-2xl shadow-black/20"
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ y: -8 }}
              transition={{
                duration: 0.55,
                delay: (index % 3) * 0.08,
                ease: "easeOut",
              }}
              viewport={{ once: true, amount: 0.2 }}
            >
              <div className="absolute -right-20 -top-20 h-48 w-48 rounded-full bg-cyan-300/[0.08] blur-3xl transition-all duration-700 group-hover:bg-violet-300/[0.14]" />
              <div className="relative z-10 flex items-center justify-between">
                <span className="font-mono text-xs tracking-[0.25em] text-cyan-200/70">
                  {item.step}
                </span>
                <span className="text-xl text-neutral-600 transition-colors group-hover:text-cyan-200">
                  ↗
                </span>
              </div>
              <h3 className="relative z-10 mt-12 text-2xl font-semibold text-white">
                {item.title}
              </h3>
              <p className="relative z-10 mt-3 text-sm leading-6 text-neutral-400">
                {item.text}
              </p>
              <div className="absolute bottom-0 left-7 right-7 h-px bg-gradient-to-r from-cyan-300/60 via-violet-300/30 to-transparent" />
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}

function CareComparison() {
  return (
    <motion.div
      className="group relative mb-16 h-[360px] overflow-hidden rounded-[2rem] border border-white/10 bg-[#0b0c10] shadow-2xl shadow-black/30 sm:h-[430px]"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      viewport={{ once: true, amount: 0.3 }}
    >
      <CompareReveal
        labels={["Rough code", "Clean code"]}
        before={<CodeScene clean={false} />}
        after={<CodeScene clean />}
      />
    </motion.div>
  );
}

function CodeScene({ clean }: { clean: boolean }) {
  return (
    <div className={`relative h-full w-full ${clean ? "bg-[#11152a]" : "bg-[#08131a]"}`}>
      <div className="absolute inset-0 opacity-50 [background-size:28px_28px] [background-image:linear-gradient(to_right,rgba(103,232,249,0.08)_1px,transparent_1px),linear-gradient(to_bottom,rgba(103,232,249,0.08)_1px,transparent_1px)]" />
      <div className="relative mx-auto mt-16 max-w-xl rounded-2xl border border-white/10 bg-black/30 p-5 font-mono text-xs leading-7 text-neutral-300 shadow-2xl sm:mt-20 sm:p-7 sm:text-sm">
        <div className="mb-5 flex gap-2">
          <span className="h-2.5 w-2.5 rounded-full bg-red-300/70" />
          <span className="h-2.5 w-2.5 rounded-full bg-amber-300/70" />
          <span className="h-2.5 w-2.5 rounded-full bg-emerald-300/70" />
        </div>
        {clean ? (
          <pre className="text-cyan-100/90">{`const project = await build({
  goal: "clear user value",
  quality: "carefully tested",
  delivery: "ready to grow",
});`}</pre>
        ) : (
          <pre className="text-rose-100/75">{`const project={goal:"???",quality:"later"
delivery:"maybe", bugs:true
}; // fix this soon???`}</pre>
        )}
        <div className={`absolute bottom-5 right-6 h-2 w-2 animate-pulse rounded-full ${clean ? "bg-emerald-300" : "bg-rose-300"}`} />
      </div>
    </div>
  );
}
