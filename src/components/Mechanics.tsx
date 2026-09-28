import { siteConfig } from "@/config/siteConfig";

export default function Mechanics() {
  const { mechanics } = siteConfig;

  return (
    <section
      id="mechanics"
      className="py-24 sm:py-32 px-6 border-t border-[#222222] max-w-5xl mx-auto w-full"
      aria-labelledby="mechanics-heading"
    >
      <div className="font-mono-tech text-xs text-[#858580] uppercase tracking-wider mb-12">
        {mechanics.index} / {mechanics.label}
      </div>

      <h2 id="mechanics-heading" className="sr-only">
        {mechanics.label}
      </h2>

      {/* 3 Numbered Statements */}
      <div className="border-t border-[#222222]">
        {mechanics.steps.map((step, idx) => (
          <div
            key={idx}
            className="py-6 border-b border-[#222222] flex items-baseline gap-6 sm:gap-12"
          >
            <span className="font-mono-tech text-xs text-[#858580]">
              0{idx + 1}
            </span>
            <span className="text-lg sm:text-2xl font-bold tracking-tight text-[#F1F1ED]">
              {step}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}
