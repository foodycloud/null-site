import { siteConfig } from "@/config/siteConfig";

export default function TheIdea() {
  const { premise } = siteConfig;

  return (
    <section
      id="premise"
      className="py-20 px-6 border-t border-[#282828] max-w-5xl mx-auto w-full"
      aria-labelledby="premise-heading"
    >
      {/* Index Label */}
      <div className="font-mono-tech text-[11px] text-[#858580] uppercase tracking-wider mb-8">
        {premise.index} / {premise.label}
      </div>

      {/* Main Content Layout */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 items-start">
        <div className="md:col-span-5">
          <h2
            id="premise-heading"
            className="text-2xl sm:text-3xl font-extrabold tracking-tight text-[#F1F1ED] leading-snug"
          >
            {premise.headline}
          </h2>
        </div>

        <div className="md:col-span-7">
          <p className="text-base sm:text-lg text-[#858580] leading-relaxed font-normal">
            {premise.body}
          </p>
        </div>
      </div>
    </section>
  );
}
