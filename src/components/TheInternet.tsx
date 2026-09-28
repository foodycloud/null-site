import { siteConfig } from "@/config/siteConfig";

export default function TheInternet() {
  const { theInternet } = siteConfig;

  return (
    <section
      id="internet"
      className="py-20 px-6 border-t border-[#282828] max-w-5xl mx-auto w-full"
      aria-labelledby="internet-heading"
    >
      {/* Index Label */}
      <div className="font-mono-tech text-[11px] text-[#858580] uppercase tracking-wider mb-8">
        {theInternet.index} / {theInternet.label}
      </div>

      <div className="mb-10">
        <h2
          id="internet-heading"
          className="text-2xl sm:text-3xl font-extrabold tracking-tight text-[#F1F1ED]"
        >
          {theInternet.headline}
        </h2>
      </div>

      {/* Axioms List */}
      <div className="border-t border-[#282828]">
        {theInternet.axioms.map((axiom, idx) => (
          <div
            key={idx}
            className="py-4 border-b border-[#282828] flex items-baseline gap-6"
          >
            <span className="font-mono-tech text-xs text-[#858580]">
              0{idx + 1}
            </span>
            <p className="text-base sm:text-lg text-[#F1F1ED] font-medium leading-snug">
              &ldquo;{axiom}&rdquo;
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
