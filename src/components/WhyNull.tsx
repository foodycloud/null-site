import { siteConfig } from "@/config/siteConfig";

export default function WhyNull() {
  const { thesis } = siteConfig;

  return (
    <section
      id="thesis"
      className="py-24 sm:py-32 px-6 border-t border-[#222222] max-w-5xl mx-auto w-full"
      aria-labelledby="thesis-heading"
    >
      <div className="font-mono-tech text-xs text-[#858580] uppercase tracking-wider mb-12">
        {thesis.index} / {thesis.label}
      </div>

      <div className="max-w-3xl space-y-8">
        <h2
          id="thesis-heading"
          className="text-3xl sm:text-4xl font-extrabold tracking-tight text-[#F1F1ED]"
        >
          {thesis.headline}
        </h2>

        <div className="space-y-4 text-xl sm:text-2xl text-[#858580] font-normal leading-relaxed">
          {thesis.lines.map((line, idx) => (
            <p
              key={idx}
              className={
                idx >= 3 && idx <= 5
                  ? "text-[#F1F1ED] font-semibold"
                  : idx === 6
                  ? "text-[#858580] text-lg sm:text-xl pt-2 italic"
                  : ""
              }
            >
              {line}
            </p>
          ))}
        </div>
      </div>
    </section>
  );
}
