import { siteConfig } from "@/config/siteConfig";

export default function Transparency() {
  const { transparency } = siteConfig;

  return (
    <section
      id="transparency"
      className="py-24 sm:py-32 px-6 border-t border-[#222222] max-w-5xl mx-auto w-full"
      aria-labelledby="transparency-heading"
    >
      <div className="font-mono-tech text-xs text-[#858580] uppercase tracking-wider mb-12">
        {transparency.index} / {transparency.label}
      </div>

      <div className="mb-10">
        <h2
          id="transparency-heading"
          className="text-3xl sm:text-4xl font-extrabold tracking-tight text-[#F1F1ED]"
        >
          {transparency.headline}
        </h2>
      </div>

      {/* Verification List */}
      <div className="border-t border-[#222222] mb-8 font-mono-tech">
        {transparency.items.map((item) => (
          <div
            key={item.name}
            className="py-4 border-b border-[#222222] flex items-center justify-between text-xs sm:text-sm"
          >
            <span className="text-[#F1F1ED]">{item.name}</span>
            <span className="text-[#858580]">{item.status}</span>
          </div>
        ))}
      </div>

      <p className="font-mono-tech text-xs text-[#858580] leading-relaxed">
        {transparency.statement}
      </p>
    </section>
  );
}
