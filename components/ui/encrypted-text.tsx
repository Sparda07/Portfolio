"use client";

import React, { useEffect, useRef, useState } from "react";
import { motion, useInView } from "motion/react";

const CHARSET =
  "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+-={}[];:,.<>/?";

function randomCharacter() {
  return CHARSET[Math.floor(Math.random() * CHARSET.length)];
}

export function EncryptedText({
  text,
  className = "",
  encryptedClassName = "text-neutral-500",
  revealDelayMs = 42,
}: {
  text: string;
  className?: string;
  encryptedClassName?: string;
  revealDelayMs?: number;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true });
  const frameRef = useRef<number | null>(null);
  const startRef = useRef(0);
  const lastFlipRef = useRef(0);
  const [revealCount, setRevealCount] = useState(0);
  const [scrambled, setScrambled] = useState<string[]>(() =>
    text.split("").map((character) => (character === " " ? " " : "•"))
  );

  useEffect(() => {
    if (!isInView) {
      return;
    }

    startRef.current = performance.now();
    lastFlipRef.current = startRef.current;

    const update = (now: number) => {
      const count = Math.min(
        text.length,
        Math.floor((now - startRef.current) / revealDelayMs)
      );
      setRevealCount(count);

      if (now - lastFlipRef.current > 55 && count < text.length) {
        setScrambled((current) =>
          current.map((character, index) =>
            index < count || text[index] === " " ? text[index] : randomCharacter()
          )
        );
        lastFlipRef.current = now;
      }

      if (count < text.length) {
        frameRef.current = requestAnimationFrame(update);
      }
    };

    frameRef.current = requestAnimationFrame(update);
    return () => {
      if (frameRef.current !== null) {
        cancelAnimationFrame(frameRef.current);
      }
    };
  }, [isInView, text, revealDelayMs]);

  return (
    <motion.span ref={ref} aria-label={text} role="text" className={className}>
      {text.split("").map((character, index) => (
        <span
          key={`${character}-${index}`}
          className={index < revealCount ? "" : encryptedClassName}
        >
          {index < revealCount ? character : scrambled[index] ?? character}
        </span>
      ))}
    </motion.span>
  );
}
