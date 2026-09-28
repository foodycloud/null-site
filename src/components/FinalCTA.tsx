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
      className="py-24 sm:py-32 px-6 border-t border-[#282828] max-w-5xl mx-auto w-full text-center flex flex-col items-center"
      aria-label="Enter NULL"
    >
      <div className="max-w-2xl flex flex-col items-center">
        <h2 className="text-3xl sm:text-5xl md:text-6xl font-extrabold tracking-tight leading-[1.06] text-[#F1F1ED] mb-8 select-none">
          {finalCta.headlinePart1}
          <br />
          <span className="text-[#858580] font-normal">UNTIL </span>
          {finalCta.headlinePart2.replace("UNTIL ", "")}
        </h2>

        <div className="mb-10">
          <button
            onClick={() => scrollTo("#token")}
            className="btn-minimal-solid"
          >
            {finalCta.buttonText}
          </button>
        </div>

        {/* Channels Line with Unlinked Contract */}
        <div className="flex flex-wrap items-center justify-center gap-6 font-mono-tech text-xs uppercase tracking-wider text-[#858580] pt-6 border-t border-[#282828] w-full max-w-md">
          <a
            href={socials.x.url}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[#F1F1ED] transition-colors"
          >
            X
          </a>
          <span>/</span>
          <a
            href={socials.telegram.url}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[#F1F1ED] transition-colors"
          >
            TELEGRAM
          </a>
          <span>/</span>
          <span className="text-[#858580] cursor-not-allowed" title="Contract will be published at launch">
            CONTRACT: TBA
          </span>
        </div>
      </div>
    </section>
  );
}
