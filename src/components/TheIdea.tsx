import { siteConfig } from "@/config/siteConfig";

export default function TheIdea() {
  const { premise } = siteConfig;

  return (
    <section
      id="premise"
      className="py-24 sm:py-32 px-6 border-t border-[#222222] max-w-5xl mx-auto w-full"
      aria-labelledby="premise-heading"
    >
      <div className="font-mono-tech text-xs text-[#858580] uppercase tracking-wider mb-12">
        {premise.index} / {premise.label}
      </div>

      <div className="max-w-3xl space-y-10">
        <h2
          id="premise-heading"
          className="text-3xl sm:text-4xl font-extrabold tracking-tight text-[#F1F1ED]"
        >
          {premise.headline}
        </h2>

        <div className="space-y-3 text-lg sm:text-xl text-[#858580] leading-relaxed font-normal">
          {premise.lines.map((line, idx) => (
            <p key={idx} className={idx >= 3 ? "text-[#F1F1ED] font-medium" : ""}>
              {line}
            </p>
          ))}
        </div>

        <div className="pt-6 border-t border-[#222222]">
          <p className="text-base sm:text-lg text-[#858580] italic">
            &ldquo;{premise.question}&rdquo;
          </p>
        </div>
      </div>
    </section>
  );
}
