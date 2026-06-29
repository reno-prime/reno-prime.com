"use client";

import Image from "next/image";
import { ArrowLeftRight } from "lucide-react";
import { useState } from "react";

type BeforeAfterSliderProps = {
  beforeSrc: string;
  afterSrc: string;
  beforeAlt: string;
  afterAlt: string;
  label?: string;
  imageClassName?: string;
  beforeText?: string;
  afterText?: string;
  compareText?: string;
};

export function BeforeAfterSlider({
  beforeSrc,
  afterSrc,
  beforeAlt,
  afterAlt,
  label = "renovation",
  imageClassName = "object-cover",
  beforeText = "Before",
  afterText = "After",
  compareText = "Slide to compare before and after",
}: BeforeAfterSliderProps) {
  const [position, setPosition] = useState(52);

  return (
    <div className="group relative min-h-[460px] overflow-hidden bg-[#171717] sm:min-h-[560px] lg:min-h-[620px]">
      <Image
        src={afterSrc}
        alt={afterAlt}
        fill
        sizes="(min-width: 1024px) 960px, 100vw"
        className={imageClassName}
      />
      <div
        className="absolute inset-0 overflow-hidden"
        style={{ clipPath: `inset(0 ${100 - position}% 0 0)` }}
      >
        <Image
          src={beforeSrc}
          alt={beforeAlt}
          fill
          sizes="(min-width: 1024px) 960px, 100vw"
          className={imageClassName}
        />
      </div>

      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/76 via-black/8 to-transparent" />
      <div
        className="pointer-events-none absolute inset-y-0 w-px bg-white shadow-[0_0_0_1px_rgba(0,0,0,0.25)]"
        style={{ left: `${position}%` }}
      />
      <div
        className="pointer-events-none absolute top-1/2 flex h-12 w-12 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-white/50 bg-black/65 text-[#f4c430] shadow-2xl backdrop-blur"
        style={{ left: `${position}%` }}
      >
        <ArrowLeftRight size={20} aria-hidden="true" />
      </div>

      <div className="absolute left-5 top-5 flex gap-2">
        <span className="bg-black/72 px-3 py-2 text-xs font-black uppercase tracking-[0.18em] text-white backdrop-blur">
          {beforeText}
        </span>
        <span className="bg-[#f4c430] px-3 py-2 text-xs font-black uppercase tracking-[0.18em] text-black">
          {afterText}
        </span>
      </div>

      <label className="absolute inset-0 z-10 cursor-ew-resize">
        <span className="sr-only">{compareText} {label}</span>
        <input
          type="range"
          min="5"
          max="95"
          value={position}
          onChange={(event) => setPosition(Number(event.target.value))}
          className="before-after-range h-full w-full"
          aria-label={`${compareText} ${label}`}
        />
      </label>
    </div>
  );
}
