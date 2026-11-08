"use client";

import React from "react";
import { AnimatePresence, motion } from "motion/react";
import { useState } from "react";
import Link from "next/link";
import { cn } from "../lib/utils";
import { Spotlight } from "./ui/spotlight-new";
import { EncryptedText } from "./ui/encrypted-text";

const Hero = () => {
  return (
    <section className="relative flex min-h-screen w-full items-center justify-center overflow-hidden bg-black text-white">
      {/* Background Grid */}
      <GridBackground />

      {/* Animated Spotlight */}
      <Spotlight />

      {/* Navbar */}
      <Navbar />

      {/* Hero Content */}
      <div className="relative z-20 flex min-h-screen w-full items-center justify-center px-6 pt-20 sm:px-10">
        <div className="flex w-full max-w-6xl flex-col items-center text-center">
          {/* Availability */}
          <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-sm text-neutral-300 backdrop-blur-md">
            <span className="h-2 w-2 animate-pulse rounded-full bg-emerald-400" />
            Available for opportunities
          </div>

          {/* Heading */}
          <h1 className="text-5xl font-bold leading-[1.05] tracking-tight sm:text-6xl md:text-7xl lg:text-8xl">
            <span className="text-white">Hi, I&apos;m </span>

            <EncryptedText
              text="Ismail Hossain"
              encryptedClassName="text-neutral-500"
              className="bg-gradient-to-r from-white via-neutral-200 to-neutral-500 bg-clip-text text-transparent"
            />

            <br />

            <EncryptedText
              text="Full-Stack Developer"
              encryptedClassName="text-neutral-500"
              className="bg-gradient-to-r from-neutral-400 via-white to-neutral-500 bg-clip-text text-transparent"
              revealDelayMs={34}
            />
          </h1>

          {/* Description */}
          <p className="mt-8 max-w-2xl text-base leading-7 text-neutral-400 sm:text-lg">
          I turn ideas into production-ready SaaS applications — building fast, scalable, and user-centric products with modern web technologies.
          </p>

          {/* Button */}
          <div className="mt-10">
            <a
              href="#projects"
              className="group relative inline-flex items-center gap-2 overflow-hidden rounded-full bg-white px-8 py-4 text-sm font-semibold text-black transition-all duration-300 hover:scale-105 hover:bg-neutral-200"
            >
              <span className="relative z-10">View My Work</span>

              <span className="relative z-10 text-lg transition-transform duration-300 group-hover:translate-x-1">
                →
              </span>

              <span className="absolute inset-0 -translate-x-full bg-neutral-300 transition-transform duration-500 group-hover:translate-x-0" />
            </a>
          </div>

          {/* Technologies */}
          <div className="mt-16 flex flex-wrap items-center justify-center gap-x-5 gap-y-3 text-xs uppercase tracking-[0.2em] text-neutral-600 sm:text-sm">
            <span>Next.js</span>
            <span className="text-neutral-800">•</span>

            <span>React</span>
            <span className="text-neutral-800">•</span>

            <span>TypeScript</span>
            <span className="text-neutral-800">•</span>

            <span>PHP</span>
            <span className="text-neutral-800">•</span>

            <span>PostgreSQL</span>
          </div>
        </div>
      </div>

      {/* Section handoff */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 z-20 h-56 overflow-hidden">
        <motion.div
          className="absolute left-1/2 top-10 h-48 w-[min(90vw,720px)] -translate-x-1/2 rounded-full bg-cyan-300/[0.05] blur-3xl"
          animate={{ scale: [0.85, 1.08, 0.85], opacity: [0.3, 0.75, 0.3] }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
        />
        <div className="absolute inset-x-0 bottom-0 h-56 bg-gradient-to-t from-[#050505] via-black/80 to-transparent" />
        <motion.div
          className="absolute bottom-16 left-1/2 h-px w-[min(72vw,520px)] -translate-x-1/2 bg-gradient-to-r from-transparent via-cyan-200/70 to-transparent"
          animate={{ opacity: [0.25, 1, 0.25], scaleX: [0.8, 1, 0.8] }}
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-7 left-1/2 z-30 flex -translate-x-1/2 flex-col items-center gap-2">
        <span className="text-[10px] uppercase tracking-[0.3em] text-neutral-500">
          Explore
        </span>

        <motion.div
          className="h-9 w-px bg-gradient-to-b from-cyan-200/80 to-transparent"
          animate={{ scaleY: [0.55, 1, 0.55], opacity: [0.45, 1, 0.45] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>
    </section>
  );
};

/* -------------------------------------------------------------------------- */
/* Navbar                                                                     */
/* -------------------------------------------------------------------------- */

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const links = [
    {
      name: "About",
      href: "#about",
    },
    {
      name: "Projects",
      href: "#projects",
    },
    {
      name: "My Approach",
      href: "#approach",
    },
    {
      name: "Contact",
      href: "#contact",
    },
  ];

  return (
    <header className="absolute left-0 right-0 top-0 z-50 w-full px-4 pt-5 sm:px-6 lg:px-8">
      <nav className="mx-auto flex h-16 w-full max-w-6xl items-center justify-between rounded-2xl border border-white/[0.08] bg-black/50 px-5 shadow-2xl shadow-black/20 backdrop-blur-xl sm:px-6">
        {/* Logo */}
        <Link
          href="/"
          className="group flex items-center gap-2 text-sm font-semibold tracking-wide text-white"
        >
          <span className="flex h-8 w-8 items-center justify-center rounded-lg border border-white/10 bg-white/[0.06] text-xs font-bold transition-all duration-300 group-hover:bg-white/[0.12]">
            IH
          </span>

          <span className="hidden sm:block">Ismail Hossain</span>
        </Link>

        {/* Animated dock navigation */}
        <div className="hidden items-center gap-1 rounded-2xl border border-white/10 bg-white/[0.03] p-1 md:flex">
          {links.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="group relative rounded-xl px-3 py-2 text-neutral-400 transition-all duration-300 hover:-translate-y-1 hover:bg-white/[0.1] hover:text-white"
            >
              <span className="flex flex-col items-center gap-1">
                <NavIcon name={link.name} />
                <span className="absolute -bottom-8 whitespace-nowrap rounded-md border border-white/10 bg-black/80 px-2 py-1 text-[10px] opacity-0 transition-opacity group-hover:opacity-100">
                  {link.name}
                </span>
              </span>
            </a>
          ))}
        </div>

        {/* Let's Talk */}
        <a
          href="#contact"
          className="hidden rounded-lg border border-white/10 bg-white/[0.05] px-4 py-2 text-sm font-medium text-white transition-all duration-300 hover:bg-white/[0.1] sm:block"
        >
          Let&apos;s Talk
        </a>

        {/* Mobile Button */}
        <motion.button
          type="button"
          aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((open) => !open)}
          whileTap={{ scale: 0.9 }}
          className="relative z-[110] flex h-9 w-9 items-center justify-center rounded-lg border border-white/10 bg-white/[0.04] text-neutral-300 transition-all duration-300 hover:bg-white/[0.08] md:hidden"
        >
          <motion.span
            animate={menuOpen ? { rotate: 45, y: 0 } : { rotate: 0, y: -4 }}
            className="absolute h-px w-4 bg-current"
          />
          <motion.span
            animate={menuOpen ? { opacity: 0, x: 8 } : { opacity: 1, x: 0 }}
            className="absolute h-px w-4 bg-current"
          />
          <motion.span
            animate={menuOpen ? { rotate: -45, y: 0 } : { rotate: 0, y: 4 }}
            className="absolute h-px w-4 bg-current"
          />
        </motion.button>
      </nav>

      <AnimatePresence>
        {menuOpen && (
          <>
            <motion.button
              type="button"
              aria-label="Close navigation menu"
              className="fixed inset-0 z-[90] bg-black/70 backdrop-blur-sm md:hidden"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setMenuOpen(false)}
            />
            <motion.div
              className="fixed inset-x-4 top-24 z-[100] overflow-hidden rounded-3xl border border-white/10 bg-[#0a0b0f]/95 p-4 shadow-2xl shadow-black/50 backdrop-blur-2xl md:hidden"
              initial={{ opacity: 0, y: -18, scale: 0.96 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -18, scale: 0.96 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
            >
              <div className="pointer-events-none absolute -right-20 -top-20 h-48 w-48 rounded-full bg-cyan-300/10 blur-3xl" />
              <div className="relative space-y-2">
                {links.map((link, index) => (
                  <motion.a
                    key={link.name}
                    href={link.href}
                    onClick={() => setMenuOpen(false)}
                    initial={{ opacity: 0, x: -18 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.06, duration: 0.3 }}
                    className="flex items-center justify-between rounded-2xl border border-transparent px-4 py-4 text-base text-neutral-300 transition-colors hover:border-white/10 hover:bg-white/[0.06] hover:text-white"
                  >
                    <span>{link.name}</span>
                    <span className="text-cyan-200/70">↗</span>
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </header>
  );
}

function NavIcon({ name }: { name: string }) {
  const paths = {
    About: "M5 5h14v14H5z M8 9h8 M8 12h6",
    Projects: "M4 7h16v12H4z M8 7l2-3h4l2 3",
    "My Approach": "M12 3l2.2 5.2L20 10l-5.8 1.8L12 17l-2.2-5.2L4 10l5.8-1.8z",
    Contact: "M4 6h16v12H4z M4 7l8 6 8-6",
  }[name as "About" | "Projects" | "My Approach" | "Contact"];

  return (
    <svg aria-hidden="true" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d={paths} />
    </svg>
  );
}

/* -------------------------------------------------------------------------- */
/* Grid Background                                                            */
/* -------------------------------------------------------------------------- */

function GridBackground() {
  return (
    <div className="pointer-events-none absolute inset-0 z-0 h-full w-full">
      {/* Grid */}
      <div
        className={cn(
          "absolute inset-0 h-full w-full",
          "[background-size:45px_45px]",
          "[background-image:linear-gradient(to_right,rgba(255,255,255,0.055)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.055)_1px,transparent_1px)]"
        )}
      />

      {/* Radial fade */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(0,0,0,0.15)_40%,rgba(0,0,0,0.85)_100%)]" />

      {/* Center glow */}
      <div className="absolute left-1/2 top-1/2 h-[650px] w-[650px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-white/[0.018] blur-3xl" />

      {/* Top fade */}
      <div className="absolute inset-x-0 top-0 h-64 bg-gradient-to-b from-black/90 via-black/40 to-transparent" />

      {/* Bottom fade */}
      <div className="absolute inset-x-0 bottom-0 h-64 bg-gradient-to-t from-black via-black/70 to-transparent" />
    </div>
  );
}

export default Hero;