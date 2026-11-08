"use client";

import React from "react";
import {
  motion,
  useAnimationFrame,
  useMotionTemplate,
  useMotionValue,
  useSpring,
  useTransform,
} from "motion/react";

export default function Contact() {
  const [sent, setSent] = React.useState(false);

  const submit = () => {
    setSent(true);
  };

  return (
    <section id="contact" className="relative overflow-hidden border-t border-white/[0.06] bg-[#050505] px-6 py-24 text-white sm:px-10 lg:px-14">
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-96 w-96 -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-300/[0.05] blur-[120px]" />
      <div className="relative z-10 mx-auto grid max-w-6xl gap-12 lg:grid-cols-[0.8fr_1fr] lg:items-center">
        <div>
          <p className="mb-5 text-[10px] uppercase tracking-[0.3em] text-cyan-200/70">Let&apos;s connect</p>
          <h2 className="text-4xl font-semibold tracking-[-0.04em] sm:text-6xl">
            Have an idea?
            <span className="block bg-gradient-to-r from-cyan-200 via-white to-violet-300 bg-clip-text text-transparent">Let&apos;s make it real.</span>
          </h2>
          <p className="mt-6 max-w-md text-sm leading-7 text-neutral-400">
            Tell me what you are building, what is getting in the way, or where you want to go next.
          </p>
          <a className="mt-8 inline-flex items-center gap-2 text-sm text-cyan-200 transition-colors hover:text-white" href="mailto:ismailhossain.creates@gmail.com">
            <EmailIcon />
            ismailhossain.creates@gmail.com
          </a>
        </div>

        <form action="https://formspree.io/f/xdeevbdp" method="POST" onSubmit={submit} className="rounded-3xl border border-white/10 bg-white/[0.035] p-6 shadow-2xl shadow-black/20 sm:p-8">
          <input type="hidden" name="_subject" value="New portfolio enquiry" />
          <div className="grid gap-5 sm:grid-cols-2">
            <label className="text-xs uppercase tracking-[0.15em] text-neutral-500">
              Name
              <input required name="name" className="mt-2 w-full rounded-xl border border-white/10 bg-black/20 px-4 py-3 text-sm normal-case tracking-normal text-white outline-none transition focus:border-cyan-200/50" />
            </label>
            <label className="text-xs uppercase tracking-[0.15em] text-neutral-500">
              Email
              <input required type="email" name="email" className="mt-2 w-full rounded-xl border border-white/10 bg-black/20 px-4 py-3 text-sm normal-case tracking-normal text-white outline-none transition focus:border-cyan-200/50" />
            </label>
          </div>
          <label className="mt-5 block text-xs uppercase tracking-[0.15em] text-neutral-500">
            Message
            <textarea required name="message" rows={5} className="mt-2 w-full resize-none rounded-xl border border-white/10 bg-black/20 px-4 py-3 text-sm normal-case tracking-normal text-white outline-none transition focus:border-cyan-200/50" />
          </label>
          <AnimatedSendButton sent={sent} />
          {sent && <p className="mt-4 text-center text-xs text-emerald-300">Thanks — I&apos;ll get back to you soon.</p>}
        </form>
      </div>
    </section>
  );
}

function AnimatedSendButton({ sent }: { sent: boolean }) {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const springX = useSpring(x, { stiffness: 100, damping: 30 });
  const springY = useSpring(y, { stiffness: 100, damping: 30 });
  const firstGradientX = useTransform(springX, (value) => value * 0.9 + 50);
  const firstGradientY = useTransform(springY, (value) => value * 0.9 + 50);
  const secondGradientX = useTransform(springX, (value) => value * -0.65 + 50);
  const secondGradientY = useTransform(springY, (value) => value * -0.65 + 50);
  const background = useMotionTemplate`radial-gradient(circle at ${firstGradientX}% ${firstGradientY}%, rgba(34,211,238,0.48), transparent 42%), radial-gradient(circle at ${secondGradientX}% ${secondGradientY}%, rgba(139,92,246,0.42), transparent 48%), linear-gradient(120deg, #111827, #0f172a 45%, #1e1b4b)`;

  useAnimationFrame((time) => {
    x.set(Math.sin(time * 0.0011) * 55);
    y.set(Math.cos(time * 0.0008) * 40);
  });

  return (
    <motion.button
      disabled={sent}
      type="submit"
      style={{ background }}
      className="group relative mt-6 inline-flex w-full items-center justify-center gap-3 overflow-hidden rounded-xl border border-cyan-200/20 px-5 py-3.5 text-sm font-semibold text-cyan-50 shadow-[0_0_30px_rgba(34,211,238,0.1)] transition-shadow hover:shadow-[0_0_34px_rgba(139,92,246,0.28)] disabled:cursor-default"
    >
      <span className="pointer-events-none absolute inset-0 opacity-25 [background-image:radial-gradient(rgba(165,243,252,0.55)_0.7px,transparent_0.7px)] [background-size:5px_5px] mix-blend-screen" />
      <span className="pointer-events-none absolute inset-x-0 top-0 h-px bg-cyan-100/70" />
      <motion.span
        className="relative z-10"
        animate={sent ? { x: [0, 7, 180], y: [0, -4, -80], rotate: [0, -8, 24] } : {}}
        transition={{ duration: 0.9, ease: "easeInOut" }}
      >
        {sent ? "Message sent successfully" : "Send message"}
      </motion.span>
      {!sent && (
        <motion.span
          className="relative z-10 text-lg"
          animate={{ x: [0, 3, 0] }}
          transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
        >
          ↗
        </motion.span>
      )}
    </motion.button>
  );
}

function EmailIcon() {
  return (
    <svg aria-hidden="true" className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="m4 7 8 6 8-6" />
    </svg>
  );
}
