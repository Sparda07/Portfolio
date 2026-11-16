"use client";

import React from "react";
import {
  motion,
} from "motion/react";

type Project = {
  title: string;
  category: string;
  description: string;
  technologies: string[];
  href: string;
  visual: "ticket" | "fruit" | "vision" | "game" | "gifly";
  accent: "cyan" | "violet" | "amber" | "emerald" | "pink";
};

const projects: Project[] = [
  {
    title: "Ticket Management",
    category: "Web application",
    description:
      "A responsive ticketing platform with structured workflows, server-side processing and an interface built for clarity.",
    technologies: ["PHP", "JavaScript", "CSS"],
    href: "https://github.com/Sparda07/Ticket-Management",
    visual: "ticket",
    accent: "cyan",
  },
  {
    title: "CNN Classification",
    category: "Computer vision",
    description:
      "A deep-learning exploration for training and evaluating image classification models with convolutional neural networks.",
    technologies: ["Python", "CNN", "Jupyter"],
    href: "https://github.com/Sparda07/CNN-Classification-",
    visual: "vision",
    accent: "violet",
  },
  {
    title: "Rotten Fruits Classification",
    category: "Machine learning",
    description:
      "An image-based quality inspection project that distinguishes fresh and rotten fruit through labeled visual data.",
    technologies: ["Python", "TensorFlow", "Image processing"],
    href: "https://github.com/Sparda07/Rotten_fruits_classification",
    visual: "fruit",
    accent: "emerald",
  },
  {
    title: "Biliary Atresia Classification from Ultrasound Images",
    category: "Deep learning",
    description:
      "A practical notebook-driven study of classification, model training and visual results from convolutional networks.",
    technologies: ["Python", "CNN", "Data analysis", "GradCam"],
    href: "https://github.com/Sparda07/Classification-Throught-CNN",
    visual: "vision",
    accent: "amber",
  },
  {
    title: "Sky Diver",
    category: "Interactive game",
    description:
      "A 2D skydiving game with movement, obstacle avoidance, collision detection and score-based gameplay.",
    technologies: ["Game development", "C++", "OPENGL"],
    href: "https://github.com/Sparda07/Sky_Diver",
    visual: "game",
    accent: "cyan",
  },
  {
    title: "GIfly",
    category: "Next.js project",
    description:
      "A modern Next.js project focused on creating a polished foundation for an engaging web experience.",
    technologies: ["Next.js", "React", "TypeScript"],
    href: "https://g-ifly.vercel.app/",
    visual: "gifly",
    accent: "pink",
  },
];

const accentClasses = {
  cyan: {
    text: "text-cyan-200",
    border: "group-hover:border-cyan-300/35",
    glow: "bg-cyan-300/20",
    line: "from-cyan-300",
  },
  violet: {
    text: "text-violet-200",
    border: "group-hover:border-violet-300/35",
    glow: "bg-violet-300/20",
    line: "from-violet-300",
  },
  amber: {
    text: "text-amber-200",
    border: "group-hover:border-amber-300/35",
    glow: "bg-amber-300/20",
    line: "from-amber-300",
  },
  emerald: {
    text: "text-emerald-200",
    border: "group-hover:border-emerald-300/35",
    glow: "bg-emerald-300/20",
    line: "from-emerald-300",
  },
  pink: {
    text: "text-pink-200",
    border: "group-hover:border-pink-300/35",
    glow: "bg-pink-300/20",
    line: "from-pink-300",
  },
};

export default function Projects() {
  return (
    <section
      id="projects"
      className="relative overflow-hidden bg-[#050505] px-6 pb-32 pt-24 text-white sm:px-10 lg:px-14"
    >
      <div className="pointer-events-none absolute inset-0 [background-size:45px_45px] [background-image:linear-gradient(to_right,rgba(255,255,255,0.025)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.025)_1px,transparent_1px)]" />
      <div className="pointer-events-none absolute left-1/2 top-20 h-96 w-96 -translate-x-1/2 rounded-full bg-violet-400/[0.05] blur-[120px]" />

      <div className="relative z-10 mx-auto max-w-6xl">
        <motion.div
          className="mb-14 flex flex-col justify-between gap-8 md:flex-row md:items-end"
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true, amount: 0.35 }}
        >
          <div>
            <p className="mb-5 text-[10px] uppercase tracking-[0.3em] text-cyan-200/70">
              Selected work
            </p>
            <h2 className="text-4xl font-semibold tracking-[-0.04em] sm:text-6xl">
              Ideas turned into
              <span className="block bg-gradient-to-r from-cyan-200 via-white to-violet-300 bg-clip-text text-transparent">
                working projects.
              </span>
            </h2>
          </div>
          <p className="max-w-sm text-sm leading-7 text-neutral-500">
            A collection of experiments, products and technical explorations.
            Open any project to see the source on GitHub.
          </p>
        </motion.div>

        <div className="grid gap-5 md:grid-cols-2">
          {projects.map((project, index) => (
            <ProjectCard key={project.title} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ProjectCard({ project, index }: { project: Project; index: number }) {
  const accent = accentClasses[project.accent];

  return (
    <motion.a
      href={project.href}
      target="_blank"
      rel="noreferrer"
      className={`group relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.035] p-3 shadow-2xl shadow-black/20 transition-colors duration-500 ${accent.border}`}
      whileHover={{ y: -8 }}
    >
      <div className="relative h-64 overflow-hidden rounded-2xl border border-white/10 bg-[#0a0b0e]">
        <ProjectVisual type={project.visual} accent={project.accent} />
        <div className="absolute inset-0 bg-gradient-to-t from-[#08090b] via-transparent to-transparent opacity-80" />
        <div className="absolute left-5 top-5 flex items-center gap-2 rounded-full border border-white/10 bg-black/30 px-3 py-1.5 text-[10px] uppercase tracking-[0.18em] text-neutral-300 backdrop-blur-md">
          <span className={`h-1.5 w-1.5 rounded-full ${accent.glow.replace("/20", "")}`} />
          {project.category}
        </div>
        <span className={`absolute bottom-5 right-5 flex h-10 w-10 items-center justify-center rounded-full border border-white/15 bg-black/30 text-lg text-white backdrop-blur-md transition-all duration-500 group-hover:-translate-y-1 group-hover:translate-x-1 ${accent.text}`}>
          ↗
        </span>
      </div>

      <div className="p-4 sm:p-5">
        <div className="flex items-start justify-between gap-4">
          <h3 className="text-2xl font-semibold tracking-tight text-white">{project.title}</h3>
          <span className="font-mono text-xs text-neutral-600">0{index + 1}</span>
        </div>
        <p className="mt-3 text-sm leading-6 text-neutral-400">{project.description}</p>
        <div className="mt-5 flex flex-wrap gap-2">
          {project.technologies.map((technology) => (
            <span key={technology} className="rounded-full border border-white/10 bg-white/[0.035] px-3 py-1.5 text-[10px] uppercase tracking-[0.1em] text-neutral-500">
              {technology}
            </span>
          ))}
        </div>
        <div className={`mt-5 h-px w-0 bg-gradient-to-r ${accent.line} to-transparent transition-all duration-700 group-hover:w-full`} />
      </div>
    </motion.a>
  );
}

function ProjectVisual({
  type,
  accent,
}: {
  type: Project["visual"];
  accent: Project["accent"];
}) {
  const accentColor = {
    cyan: "#67e8f9",
    violet: "#c4b5fd",
    amber: "#fcd34d",
    emerald: "#6ee7b7",
    pink: "#f9a8d4",
  }[accent];

  if (type === "ticket") {
    return (
      <div className="absolute inset-0 p-8">
        <div className="mx-auto max-w-sm rounded-xl border border-white/10 bg-white/[0.06] p-4 shadow-2xl transition-transform duration-700 group-hover:rotate-1 group-hover:scale-105">
          <div className="mb-4 flex items-center justify-between">
            <span className="h-2 w-20 rounded-full bg-white/20" />
            <span className="h-6 w-6 rounded-full" style={{ backgroundColor: `${accentColor}55` }} />
          </div>
          <div className="space-y-3">
            {[0, 1, 2].map((row) => (
              <div key={row} className="flex items-center gap-3 rounded-lg border border-white/10 bg-black/20 p-3">
                <span className="h-8 w-8 rounded-md" style={{ backgroundColor: `${accentColor}${row === 0 ? "44" : "22"}` }} />
                <span className="flex-1 space-y-2"><i className="block h-1.5 w-3/4 rounded-full bg-white/20" /><i className="block h-1 w-1/2 rounded-full bg-white/10" /></span>
                <span className="h-2 w-2 rounded-full bg-emerald-300" />
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }

  if (type === "fruit") {
    return (
      <div className="absolute inset-0 overflow-hidden">
        <motion.div className="absolute left-[22%] top-[25%] h-24 w-24 rounded-full bg-gradient-to-br from-emerald-200 to-emerald-700 shadow-[0_0_45px_rgba(110,231,183,0.3)]" animate={{ y: [0, -10, 0], rotate: [0, 5, 0] }} transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }} />
        <motion.div className="absolute right-[20%] top-[38%] h-20 w-20 rounded-full bg-gradient-to-br from-red-200 to-red-700 shadow-[0_0_45px_rgba(248,113,113,0.25)]" animate={{ y: [0, 10, 0], rotate: [0, -6, 0] }} transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut" }} />
        <div className="absolute bottom-8 left-1/2 h-16 w-44 -translate-x-1/2 rounded-[50%] border border-emerald-200/30 bg-emerald-300/10 blur-sm" />
        <div className="absolute left-1/2 top-1/2 h-52 w-52 -translate-x-1/2 -translate-y-1/2 rounded-full border border-dashed border-emerald-200/25 animate-[spin_18s_linear_infinite]" />
      </div>
    );
  }

  if (type === "game") {
    return (
      <div className="absolute inset-0 overflow-hidden bg-gradient-to-b from-sky-400/20 to-indigo-950/30">
        <div className="absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-indigo-950/80 to-transparent" />
        <motion.div className="absolute left-[45%] top-[27%] text-5xl" animate={{ y: [0, 90, 0], rotate: [-8, 8, -8] }} transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}>🪂</motion.div>
        <motion.div className="absolute right-[18%] top-[18%] h-3 w-3 rounded-full bg-amber-200" animate={{ y: [0, 150], opacity: [1, 0] }} transition={{ duration: 2.5, repeat: Infinity, ease: "linear" }} />
        <div className="absolute bottom-7 left-8 font-mono text-xs tracking-[0.2em] text-cyan-100/70">SCORE // 02480</div>
      </div>
    );
  }

  if (type === "gifly") {
    return (
      <div className="absolute inset-0 overflow-hidden">
        <motion.div className="absolute left-1/2 top-1/2 h-40 w-40 -translate-x-1/2 -translate-y-1/2 rounded-[2rem] border border-pink-200/40 bg-gradient-to-br from-pink-300/30 to-violet-400/10 shadow-[0_0_60px_rgba(249,168,212,0.2)]" animate={{ rotate: [0, 8, -8, 0], scale: [1, 1.06, 1] }} transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}>
          <div className="absolute inset-5 rounded-xl border border-white/20 bg-white/[0.06]" />
          <div className="absolute left-1/2 top-1/2 h-3 w-3 -translate-x-1/2 -translate-y-1/2 rounded-full bg-white shadow-[0_0_20px_white]" />
        </motion.div>
        <div className="absolute left-8 top-8 h-2 w-2 rounded-full bg-pink-200 animate-ping" />
        <div className="absolute bottom-8 right-10 h-12 w-12 rounded-full border border-pink-200/20" />
      </div>
    );
  }

  return (
    <div className="absolute inset-0 overflow-hidden">
      <div className="absolute inset-8 rounded-2xl border border-violet-200/20 bg-violet-300/[0.04]" />
      <div className="absolute left-1/2 top-1/2 h-36 w-36 -translate-x-1/2 -translate-y-1/2 rounded-full border border-violet-200/40" />
      <motion.div className="absolute left-1/2 top-1/2 h-3 w-3 -translate-x-1/2 -translate-y-1/2 rounded-full bg-violet-200 shadow-[0_0_24px_rgba(196,181,253,0.9)]" animate={{ scale: [1, 2.5, 1], opacity: [1, 0.25, 1] }} transition={{ duration: 2.5, repeat: Infinity }} />
      <div className="absolute left-1/2 top-1/2 h-56 w-56 -translate-x-1/2 -translate-y-1/2 rounded-full border border-dashed border-violet-200/25 animate-[spin_14s_linear_infinite]" />
    </div>
  );
}
