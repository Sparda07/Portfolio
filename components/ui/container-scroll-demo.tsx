"use client";

import React from "react";
import { ContainerScroll } from "./container-scroll-animation";

export function HeroScrollDemo() {
  return (
    <div className="flex flex-col overflow-hidden">
      <ContainerScroll
        titleComponent={
          <>
            <h1 className="text-4xl font-semibold text-white">
              Unleash the power of
              <br />

              <span className="mt-1 text-4xl font-bold leading-none sm:text-5xl md:text-[6rem]">
                Scroll Animations
              </span>
            </h1>
          </>
        }
      >
        <div className="flex h-full min-h-[550px] items-center justify-center bg-neutral-950">
          <div className="text-center">
            <p className="text-sm uppercase tracking-[0.3em] text-neutral-600">
              Scroll Experience
            </p>

            <h2 className="mt-4 text-4xl font-bold text-white sm:text-6xl">
              Ismail Hossain
            </h2>

            <p className="mt-4 text-neutral-500">
              Full-Stack Developer
            </p>
          </div>
        </div>
      </ContainerScroll>
    </div>
  );
}