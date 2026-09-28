import { siteConfig } from "@/config/siteConfig";

export default function Token() {
  const { token } = siteConfig;

  return (
    <section
      id="token"
      className="py-24 sm:py-32 px-6 border-t border-[#222222] max-w-5xl mx-auto w-full"
      aria-labelledby="token-heading"
    >
      <div className="font-mono-tech text-xs text-[#858580] uppercase tracking-wider mb-12">
        {token.index} / {token.label}
      </div>

      <div className="mb-10">
        <h2
          id="token-heading"
          className="text-3xl sm:text-4xl font-extrabold tracking-tight text-[#F1F1ED]"
        >
          {token.headline}
        </h2>
      </div>

      {/* Technical Documentation Table */}
      <div className="border-t border-[#222222] mb-8 font-mono-tech">
        {token.specs.map((item) => (
          <div
            key={item.key}
            className="py-4 border-b border-[#222222] flex items-center justify-between text-xs sm:text-sm"
          >
            <span className="text-[#858580] uppercase tracking-wider">{item.key}</span>
            <span className="text-[#F1F1ED] font-medium">{item.value}</span>
          </div>
        ))}
      </div>

      {/* Risk Note */}
      <p className="font-mono-tech text-xs text-[#858580] leading-relaxed">
        * {token.riskNote}
      </p>
    </section>
  );
}
