import { siteConfig } from "@/config/siteConfig";

export default function Token() {
  const { token } = siteConfig;

  return (
    <section
      id="token"
      className="py-20 px-6 border-t border-[#282828] max-w-5xl mx-auto w-full"
      aria-labelledby="token-heading"
    >
      {/* Index Label */}
      <div className="font-mono-tech text-[11px] text-[#858580] uppercase tracking-wider mb-8">
        {token.index} / {token.label}
      </div>

      <div className="mb-8">
        <h2
          id="token-heading"
          className="text-2xl sm:text-3xl font-extrabold tracking-tight text-[#F1F1ED] mb-2"
        >
          {token.headline}
        </h2>
      </div>

      {/* Simple Mono Grid with Thin Dividers */}
      <div className="border-t border-[#282828] mb-8 font-mono-tech">
        {token.specs.map((item) => (
          <div
            key={item.key}
            className="py-3.5 border-b border-[#282828] flex items-center justify-between text-xs sm:text-sm"
          >
            <span className="text-[#858580] tracking-wider">{item.key}</span>
            <span className={`font-semibold ${item.isTBA ? "text-[#858580]" : "text-[#F1F1ED]"}`}>
              {item.value}
            </span>
          </div>
        ))}
      </div>

      {/* One-line Risk Note */}
      <p className="font-mono-tech text-xs text-[#858580] leading-relaxed">
        * {token.riskNote}
      </p>
    </section>
  );
}
