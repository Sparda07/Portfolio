"use client";

import React from "react";
import Image from "next/image";
import { motion } from "motion/react";
import { useMotionValueEvent, useScroll, useTransform } from "motion/react";
import { ContainerScroll } from "./ui/container-scroll-animation";

const About = () => {
  return (
    <section
      id="about"
      className="relative -mt-20 w-full overflow-hidden bg-[#050505] pt-20 text-white"
    >
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-x-0 top-0 h-48 bg-gradient-to-b from-black via-black/70 to-transparent" />
        <div className="absolute inset-0 [background-size:45px_45px] [background-image:linear-gradient(to_right,rgba(255,255,255,0.035)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.035)_1px,transparent_1px)]" />
        <div className="absolute left-1/2 top-[22%] h-[620px] w-[620px] -translate-x-1/2 rounded-full bg-cyan-400/[0.04] blur-[120px]" />
        <div className="absolute right-[-12%] top-[48%] h-[420px] w-[420px] rounded-full bg-violet-500/[0.05] blur-[110px]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(5,5,5,0.38)_55%,#050505_100%)]" />
      </div>

      <div className="relative z-10">
        <ContainerScroll
          titleComponent={
            <motion.div
              className="flex flex-col items-center"
              initial={{ opacity: 0, y: 34 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, ease: "easeOut" }}
              viewport={{ once: true, amount: 0.4 }}
            >
              <motion.div
                className="mb-7 inline-flex items-center gap-2 rounded-full border border-cyan-300/15 bg-cyan-300/[0.06] px-4 py-2 text-[10px] font-medium uppercase tracking-[0.3em] text-cyan-200/80"
                animate={{ boxShadow: ["0 0 0 rgba(103,232,249,0)", "0 0 28px rgba(103,232,249,0.16)", "0 0 0 rgba(103,232,249,0)"] }}
                transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut" }}
              >
                <span className="h-1.5 w-1.5 rounded-full bg-cyan-300 shadow-[0_0_12px_rgba(103,232,249,0.9)]" />
                A little about me
              </motion.div>

              <h2 className="text-4xl font-semibold leading-[1.05] tracking-[-0.04em] text-white sm:text-6xl md:text-7xl">
                I build the ideas
                <br />
                <span className="bg-gradient-to-r from-cyan-200 via-white to-violet-300 bg-clip-text text-5xl font-bold text-transparent sm:text-7xl md:text-[6.5rem]">
                  behind the screen.
                </span>
              </h2>

              <p className="mx-auto mt-8 max-w-2xl text-sm leading-7 text-neutral-400 sm:text-base">
                Full-stack developer focused on turning complex product ideas
                into fast, thoughtful and dependable digital experiences.
              </p>

              <div className="mt-10 flex flex-wrap items-center justify-center gap-3 text-xs text-neutral-500">
                <span className="rounded-full border border-white/10 bg-white/[0.035] px-4 py-2">
                  <strong className="mr-1 text-white">01</strong> Think
                  structurally
                </span>
                <span className="rounded-full border border-white/10 bg-white/[0.035] px-4 py-2">
                  <strong className="mr-1 text-white">02</strong> Build
                  intentionally
                </span>
                <span className="rounded-full border border-white/10 bg-white/[0.035] px-4 py-2">
                  <strong className="mr-1 text-white">03</strong> Ship
                  confidently
                </span>
              </div>
            </motion.div>
          }
        >
          <div className="relative flex min-h-[600px] w-full items-center justify-center overflow-hidden bg-[#08090b] p-5 sm:p-10 lg:p-14">
            <div className="pointer-events-none absolute inset-x-10 top-0 h-px bg-gradient-to-r from-transparent via-cyan-300/40 to-transparent" />
            <div className="grid w-full max-w-6xl gap-5 md:grid-cols-3">
              <FlipCard
                number="01"
                title="Frontend"
                subtitle="Interfaces that feel as good as they look."
                accent="cyan"
                backTitle="What I build"
                items={[
                  "Modern responsive websites",
                  "Next.js applications",
                  "React dashboards",
                  "SaaS interfaces",
                  "Interactive UI with Tailwind CSS",
                  "Reusable component systems",
                ]}
              />
              <FlipCard
                number="02"
                title="Backend"
                subtitle="Reliable systems behind every interaction."
                accent="violet"
                backTitle="What I build"
                items={[
                  "REST APIs",
                  "Authentication systems",
                  "PostgreSQL databases",
                  "CRUD applications",
                  "Server-side business logic",
                  "SaaS backend architecture",
                ]}
              />
              <FlipCard
                number="03"
                title="Problem Solving"
                subtitle="Clarity when the problem gets complicated."
                accent="amber"
                backTitle="How I work"
                items={[
                  "Debug complex issues",
                  "Break problems into smaller parts",
                  "Design maintainable solutions",
                  "Improve application performance",
                  "Think about edge cases",
                  "Build practical solutions",
                ]}
              />
            </div>
          </div>
        </ContainerScroll>

        <WorkExperience />
      </div>
    </section>
  );
};

const experiences = [
  {
    period: "July 2026 — August 2026",
    role: "ML Engineering Intern",
    company: "FlyRank AI",
    description:
      "FlyRank is building the autopilot for organic growth, automating how brands show up in classic search and next-generation AI search engines. I joined the FlyRank AI Internship Program to learn and contribute in this fast-moving space.",
    skills: ["AI search", "Machine learning", "Organic growth"],
  },
  {
    period: "October 07, 2026 — Present",
    role: "Junior Software Engineer Intern",
    company: "Databrandix",
    description:
      "Building modern web experiences with a product-focused stack, working across the frontend, database and deployment layers.",
    skills: ["Next.js + TypeScript", "Drizzle + PostgreSQL", "React + Docker"],
  },
];

function WorkExperience() {
  const timelineRef = React.useRef<HTMLDivElement>(null);
  const contentRef = React.useRef<HTMLDivElement>(null);
  const [timelineHeight, setTimelineHeight] = React.useState(0);
  const { scrollYProgress } = useScroll({
    target: timelineRef,
    offset: ["start 15%", "end 55%"],
  });
  const progressHeight = useTransform(
    scrollYProgress,
    [0, 1],
    [0, timelineHeight]
  );
  const progressOpacity = useTransform(scrollYProgress, [0, 0.08], [0, 1]);

  React.useEffect(() => {
    const element = contentRef.current;
    if (!element) {
      return;
    }

    const updateHeight = () => setTimelineHeight(element.getBoundingClientRect().height);
    updateHeight();

    const observer = new ResizeObserver(updateHeight);
    observer.observe(element);

    return () => observer.disconnect();
  }, []);

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    if (latest > 0 && timelineHeight === 0 && contentRef.current) {
      setTimelineHeight(contentRef.current.getBoundingClientRect().height);
    }
  });

  return (
    <section
      id="experience"
      className="relative mx-auto w-full max-w-6xl px-6 pb-32 pt-16 sm:px-10 lg:px-14"
    >
      <div className="mb-16 max-w-2xl">
        <p className="mb-5 text-[10px] font-medium uppercase tracking-[0.3em] text-cyan-200/70">
          The path so far
        </p>
        <h2 className="text-4xl font-semibold tracking-[-0.04em] text-white sm:text-6xl">
          Work that shaped
          <span className="block bg-gradient-to-r from-white to-neutral-500 bg-clip-text text-transparent">
            how I build.
          </span>
        </h2>
        <p className="mt-6 max-w-xl text-sm leading-7 text-neutral-400 sm:text-base">
          Every role has added a new perspective, a sharper instinct and
          another reason to care about the details.
        </p>
      </div>

      <div className="grid gap-12 lg:grid-cols-[1fr_0.72fr] lg:items-start">
        <div ref={timelineRef} className="relative pl-8 sm:pl-12">
          <div
            aria-hidden="true"
            className="absolute bottom-0 left-[7px] top-0 w-px bg-gradient-to-b from-white/20 via-white/10 to-transparent sm:left-[11px]"
            style={{ height: timelineHeight || undefined }}
          >
            <motion.div
              style={{ height: progressHeight, opacity: progressOpacity }}
              className="absolute inset-x-0 top-0 w-px bg-gradient-to-b from-cyan-200 via-violet-300 to-cyan-300 shadow-[0_0_14px_rgba(103,232,249,0.8)]"
            />
            <motion.div
              style={{ top: progressHeight, opacity: progressOpacity }}
              className="absolute -left-[3px] h-2 w-2 rounded-full bg-cyan-100 shadow-[0_0_18px_rgba(165,243,252,1)]"
            />
          </div>

          <div ref={contentRef} className="space-y-12">
            {experiences.map((experience, index) => (
              <motion.article
                key={experience.period}
                className="relative"
                initial={{ opacity: 0, x: -24 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.7, delay: index * 0.2, ease: "easeOut" }}
                viewport={{ once: true, amount: 0.25 }}
              >
                <motion.span
                  className="absolute -left-[31px] top-1 flex h-4 w-4 items-center justify-center rounded-full border border-white/20 bg-[#08090b] shadow-[0_0_22px_rgba(103,232,249,0.25)] transition-colors duration-500 sm:-left-[39px]"
                  initial={{ scale: 0.5, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.2 + 0.2 }}
                  viewport={{ once: true }}
                >
                  <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-cyan-200 shadow-[0_0_14px_rgba(165,243,252,0.9)]" />
                </motion.span>

                <div className="rounded-2xl border border-white/10 bg-white/[0.035] p-6 transition-colors duration-300 hover:border-white/20 sm:p-8">
                  <div className="flex flex-wrap items-center justify-between gap-3">
                    <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-cyan-200/70">
                      {experience.period}
                    </p>
                    <span className="text-xs text-neutral-600">0{index + 1}</span>
                  </div>
                  <h3 className="mt-5 text-2xl font-semibold text-white">
                    {experience.role}
                  </h3>
                  <p className="mt-1 text-sm text-neutral-500">
                    {experience.company}
                  </p>
                  <p className="mt-5 max-w-xl text-sm leading-7 text-neutral-400">
                    {experience.description}
                  </p>
                  <div className="mt-6 flex flex-wrap gap-2">
                    {experience.skills.map((skill) => (
                      <span
                        key={skill}
                        className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-1.5 text-[10px] uppercase tracking-[0.12em] text-neutral-400"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </div>

        <div className="relative lg:sticky lg:top-10">
          <div className="relative aspect-[4/5] overflow-hidden rounded-[2rem] border border-white/10 bg-gradient-to-br from-cyan-300/[0.12] via-white/[0.03] to-violet-400/[0.12] p-3 shadow-2xl shadow-black/30">
            <div className="relative flex h-full flex-col items-center justify-center overflow-hidden rounded-[1.4rem] border border-white/10 bg-[#0b0c0f]">
              <div className="absolute left-1/2 top-1/2 h-56 w-56 -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-300/[0.08] blur-3xl" />
              <div className="absolute inset-0">
                <Image
                  src="/profile.jpg"
                  alt="Ismail Hossain"
                  fill
                  sizes="(max-width: 1024px) 100vw, 35vw"
                  className="object-cover opacity-90"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-[#08090b] via-transparent to-transparent" />
              <div className="relative mt-auto self-start p-6">
                <p className="text-[10px] uppercase tracking-[0.25em] text-cyan-100/70">
                  Building with intent
                </p>
                <p className="mt-2 text-lg font-medium text-white">
                  Ismail Hossain
                </p>
              </div>
            </div>
            <span className="absolute -right-2 top-12 h-16 w-16 rounded-full border border-cyan-200/20 bg-cyan-200/[0.06] blur-[1px]" />
            <span className="absolute -bottom-3 left-10 h-12 w-12 rounded-full border border-violet-200/20 bg-violet-200/[0.06]" />
          </div>
        </div>
      </div>
    </section>
  );
}

type FlipCardProps = {
  number: string;
  title: string;
  subtitle: string;
  accent: "cyan" | "violet" | "amber";
  backTitle: string;
  items: string[];
};

const accentStyles = {
  cyan: {
    glow: "bg-cyan-400/10 group-hover:bg-cyan-400/20",
    dot: "bg-cyan-300",
    line: "from-cyan-300/60",
    border: "group-hover:border-cyan-300/30",
  },
  violet: {
    glow: "bg-violet-400/10 group-hover:bg-violet-400/20",
    dot: "bg-violet-300",
    line: "from-violet-300/60",
    border: "group-hover:border-violet-300/30",
  },
  amber: {
    glow: "bg-amber-300/10 group-hover:bg-amber-300/20",
    dot: "bg-amber-200",
    line: "from-amber-200/60",
    border: "group-hover:border-amber-200/30",
  },
};

function FlipCard({
  number,
  title,
  subtitle,
  accent,
  backTitle,
  items,
}: FlipCardProps) {
  const styles = accentStyles[accent];

  return (
    <div className="group h-[430px] w-full [perspective:1200px]">
      <div
        tabIndex={0}
        aria-label={`${title} capabilities`}
        className={`relative h-full w-full rounded-2xl transition-transform duration-700 ease-[cubic-bezier(0.23,1,0.32,1)] [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)] focus:[transform:rotateY(180deg)] ${styles.border}`}
      >
        <div className="absolute inset-0 flex h-full w-full flex-col justify-between overflow-hidden rounded-2xl border border-white/10 bg-white/[0.035] p-7 shadow-2xl shadow-black/30 [backface-visibility:hidden]">
          <div className={`pointer-events-none absolute -right-24 -top-24 h-64 w-64 rounded-full blur-3xl transition-all duration-700 ${styles.glow}`} />
          <div className="relative z-10 flex items-center justify-between">
            <span className="font-mono text-xs tracking-[0.25em] text-neutral-500">{number}</span>
            <span className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/[0.04] text-neutral-400 transition-all duration-500 group-hover:border-white/25 group-hover:text-white">
              ↗
            </span>
          </div>

          <div className="relative z-10">
            <span className={`mb-5 block h-1 w-10 rounded-full ${styles.dot}`} />
            <h3 className="text-3xl font-semibold tracking-tight text-white">{title}</h3>
            <p className="mt-3 max-w-[245px] text-sm leading-6 text-neutral-400">{subtitle}</p>
          </div>

          <div className="relative z-10">
            <div className={`mb-4 h-px w-full bg-gradient-to-r ${styles.line} to-transparent`} />
            <div className="flex items-center justify-between">
              <span className="text-[10px] uppercase tracking-[0.22em] text-neutral-500">Hover to explore</span>
              <span className="text-neutral-500 transition-transform duration-500 group-hover:translate-x-1">→</span>
            </div>
          </div>
        </div>

        <div className="absolute inset-0 flex h-full w-full flex-col overflow-hidden rounded-2xl border border-white/15 bg-[#0c0d10] p-7 shadow-2xl shadow-black/50 [backface-visibility:hidden] [transform:rotateY(180deg)]">
          <div className={`pointer-events-none absolute -left-24 -top-24 h-72 w-72 rounded-full blur-3xl ${styles.glow}`} />
          <div className="relative z-10 flex items-center justify-between">
            <span className="font-mono text-xs tracking-[0.25em] text-neutral-500">{number}</span>
            <span className="rounded-full border border-white/10 px-3 py-1 text-[10px] uppercase tracking-[0.2em] text-neutral-400">{title}</span>
          </div>

          <h3 className="relative z-10 mt-8 text-2xl font-semibold text-white">{backTitle}</h3>
          <div className="relative z-10 mt-7 flex-1 space-y-3">
            {items.map((item, index) => (
              <div key={item} className="flex items-center gap-3 text-sm text-neutral-400">
                <span className={`flex h-5 w-5 shrink-0 items-center justify-center rounded-full border border-white/10 text-[9px] ${styles.dot} bg-opacity-10`}>
                  {String(index + 1).padStart(2, "0")}
                </span>
                <span>{item}</span>
              </div>
            ))}
          </div>

          <div className="relative z-10 border-t border-white/10 pt-4">
            <span className="text-[10px] uppercase tracking-[0.22em] text-neutral-500">What I can do</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
