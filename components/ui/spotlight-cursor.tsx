"use client";

import React, { HTMLAttributes, useEffect, useRef } from "react";

type SpotlightConfig = {
  radius?: number;
  brightness?: number;
  color?: string;
  smoothing?: number;
};

function hexToRgb(hex: string) {
  const value = Number.parseInt(hex.replace("#", ""), 16);
  return `${(value >> 16) & 255},${(value >> 8) & 255},${value & 255}`;
}

export function SpotlightCursor({
  config = {},
  className = "",
  ...rest
}: HTMLAttributes<HTMLCanvasElement> & { config?: SpotlightConfig }) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    if (window.matchMedia("(pointer: coarse)").matches) {
      return;
    }

    const canvas = canvasRef.current;
    const context = canvas?.getContext("2d");
    if (!canvas || !context) {
      return;
    }

    const radius = config.radius ?? 190;
    const brightness = config.brightness ?? 0.065;
    const smoothing = config.smoothing ?? 0.12;
    const color = hexToRgb(config.color ?? "#67e8f9");
    let frame = 0;
    let targetX = -radius;
    let targetY = -radius;
    let currentX = targetX;
    let currentY = targetY;

    const resize = () => {
      const ratio = window.devicePixelRatio || 1;
      canvas.width = window.innerWidth * ratio;
      canvas.height = window.innerHeight * ratio;
      canvas.style.width = `${window.innerWidth}px`;
      canvas.style.height = `${window.innerHeight}px`;
      context.setTransform(ratio, 0, 0, ratio, 0, 0);
    };

    const move = (event: MouseEvent) => {
      targetX = event.clientX;
      targetY = event.clientY;
    };

    const leave = () => {
      targetX = -radius;
      targetY = -radius;
    };

    const draw = () => {
      currentX += (targetX - currentX) * smoothing;
      currentY += (targetY - currentY) * smoothing;
      context.clearRect(0, 0, window.innerWidth, window.innerHeight);

      if (currentX > -radius && currentY > -radius) {
        const gradient = context.createRadialGradient(
          currentX,
          currentY,
          0,
          currentX,
          currentY,
          radius
        );
        gradient.addColorStop(0, `rgba(${color}, ${brightness})`);
        gradient.addColorStop(0.45, `rgba(${color}, ${brightness * 0.35})`);
        gradient.addColorStop(1, "rgba(0, 0, 0, 0)");
        context.fillStyle = gradient;
        context.fillRect(0, 0, window.innerWidth, window.innerHeight);
      }

      frame = requestAnimationFrame(draw);
    };

    resize();
    window.addEventListener("resize", resize);
    window.addEventListener("mousemove", move);
    window.addEventListener("mouseleave", leave);
    frame = requestAnimationFrame(draw);

    return () => {
      window.removeEventListener("resize", resize);
      window.removeEventListener("mousemove", move);
      window.removeEventListener("mouseleave", leave);
      cancelAnimationFrame(frame);
    };
  }, [config.brightness, config.color, config.radius, config.smoothing]);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      className={`pointer-events-none fixed inset-0 z-[60] h-full w-full ${className}`}
      {...rest}
    />
  );
}
