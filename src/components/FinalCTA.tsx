"use client";

import { siteConfig } from "@/config/siteConfig";

export default function FinalCTA() {
  const { finalCta, socials } = siteConfig;

  const scrollTo = (id: string) => {
    const el = document.querySelector(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="enter"
      className="py-28 sm:py-36 px-6 border-t border-[#222222] max-w-5xl mx-auto w-full text-center flex flex-col items-center"
      aria-label="Enter NULL"
    >
      <div className="max-w-2xl flex flex-col items-center">
        <h2 className="text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight leading-[1.04] text-[#F1F1ED] mb-10 select-none">
          {finalCta.headlinePart1}
          <br />
          <span className="text-[#858580] font-normal">UNTIL </span>
          {finalCta.headlinePart2.replace("UNTIL ", "")}
        </h2>

        <div className="mb-12">
          <button
            onClick={() => scrollTo("#token")}
            className="btn-minimal-solid"
          >
            {finalCta.buttonText}
          </button>
        </div>

        {/* Channels */}
        <div className="flex flex-wrap items-center justify-center gap-6 font-mono-tech text-xs uppercase tracking-wider text-[#858580] pt-6 border-t border-[#222222] w-full max-w-md">
          <a
            href={socials.x.url}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[#F1F1ED] transition-colors"
          >
            {socials.x.name} ↗
          </a>
          <span className="text-[#222222]">/</span>
          <a
            href={socials.telegram.url}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[#F1F1ED] transition-colors"
          >
            {socials.telegram.name} ↗
          </a>
          <span className="text-[#222222]">/</span>
          <a
            href={socials.discord.url}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[#F1F1ED] transition-colors"
          >
            {socials.discord.name} ↗
          </a>
        </div>
      </div>
    </section>
  );
}
