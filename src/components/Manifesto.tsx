import { siteConfig } from "@/config/siteConfig";

export default function Manifesto() {
  const { manifesto } = siteConfig;

  return (
    <section
      id="manifesto"
      className="py-20 px-6 border-t border-[#282828] max-w-5xl mx-auto w-full"
      aria-labelledby="manifesto-heading"
    >
      {/* Index Label */}
      <div className="font-mono-tech text-[11px] text-[#858580] uppercase tracking-wider mb-8">
        {manifesto.index} / {manifesto.label}
      </div>

      <h2 id="manifesto-heading" className="sr-only">
        {manifesto.label}
      </h2>

      {/* Axioms List with Thin Dividing Rules */}
      <div className="border-t border-[#282828] mb-12">
        {manifesto.axioms.map((axiom, idx) => (
          <div
            key={idx}
            className="py-5 border-b border-[#282828] flex items-baseline justify-between gap-6"
          >
            <div className="flex items-baseline gap-6 sm:gap-10">
              <span className="font-mono-tech text-xs text-[#858580]">
                0{idx + 1}
              </span>
              <span className="text-base sm:text-xl font-medium tracking-tight text-[#F1F1ED]">
                {axiom}
              </span>
            </div>
            <span className="font-mono-tech text-[10px] text-[#858580] uppercase tracking-widest hidden sm:inline">
              AXIOM
            </span>
          </div>
        ))}
      </div>

      {/* Conclusion */}
      <div className="pt-4">
        <span className="font-mono-tech text-[10px] text-[#858580] uppercase tracking-widest block mb-2">
          CONCLUSION
        </span>
        <div className="text-2xl sm:text-4xl font-extrabold tracking-tight text-[#F1F1ED]">
          {manifesto.conclusion}
        </div>
      </div>
    </section>
  );
}
