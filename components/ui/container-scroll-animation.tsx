"use client";

import React from "react";
import { motion, useScroll, useTransform } from "motion/react";

interface ContainerScrollProps {
  titleComponent: React.ReactNode;
  children: React.ReactNode;
}

export const ContainerScroll = ({
  titleComponent,
  children,
}: ContainerScrollProps) => {
  const containerRef = React.useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const rotate = useTransform(scrollYProgress, [0, 0.5], [20, 0]);

  const scale = useTransform(scrollYProgress, [0, 0.5], [0.7, 1]);

  const translate = useTransform(
    scrollYProgress,
    [0, 0.5],
    ["-100px", "0px"]
  );

  return (
    <div
      ref={containerRef}
      className="relative flex min-h-[140vh] flex-col items-center"
    >
      {/* Title */}
      <div className="relative z-10 flex min-h-screen w-full items-center justify-center px-6 pt-20 text-center">
        <div className="max-w-5xl">{titleComponent}</div>
      </div>

      {/* Animated Container */}
      <div className="relative z-10 flex w-full items-center justify-center px-4 pb-20">
        <motion.div
          style={{
            rotateX: rotate,
            scale,
            translateY: translate,
          }}
          className="relative w-full max-w-6xl origin-top [perspective:1000px]"
        >
          <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-neutral-950 shadow-2xl shadow-black/50">
            {/* Top bar */}
            <div className="flex h-10 items-center gap-2 border-b border-white/[0.08] bg-white/[0.025] px-4">
              <span className="h-3 w-3 rounded-full bg-white/10" />
              <span className="h-3 w-3 rounded-full bg-white/10" />
              <span className="h-3 w-3 rounded-full bg-white/10" />
            </div>

            {/* Content */}
            <div className="min-h-[550px]">{children}</div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};