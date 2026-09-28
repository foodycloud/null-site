import { siteConfig } from "@/config/siteConfig";

export default function Transparency() {
  const { transparency } = siteConfig;

  return (
    <section
      id="ledger"
      className="py-20 px-6 border-t border-[#282828] max-w-5xl mx-auto w-full"
      aria-labelledby="ledger-heading"
    >
      {/* Index Label */}
      <div className="font-mono-tech text-[11px] text-[#858580] uppercase tracking-wider mb-8">
        {transparency.index} / {transparency.label}
      </div>

      <div className="mb-8">
        <h2
          id="ledger-heading"
          className="text-2xl sm:text-3xl font-extrabold tracking-tight text-[#F1F1ED] mb-2"
        >
          {transparency.headline}
        </h2>
      </div>

      {/* Verification List */}
      <div className="border-t border-[#282828] font-mono-tech">
        {transparency.items.map((item) => (
          <div
            key={item.name}
            className="py-3.5 border-b border-[#282828] flex items-center justify-between text-xs sm:text-sm"
          >
            <span className="text-[#F1F1ED]">{item.name}</span>
            <span className="text-[#858580]">{item.status}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
