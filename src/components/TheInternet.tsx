import { siteConfig } from "@/config/siteConfig";

export default function TheInternet() {
  const { theInternet } = siteConfig;

  return (
    <section
      id="internet"
      className="py-24 sm:py-32 px-6 border-t border-[#222222] max-w-5xl mx-auto w-full"
      aria-labelledby="internet-heading"
    >
      <div className="font-mono-tech text-xs text-[#858580] uppercase tracking-wider mb-12">
        {theInternet.index} / {theInternet.label}
      </div>

      <div className="max-w-3xl space-y-10">
        <h2
          id="internet-heading"
          className="text-3xl sm:text-4xl font-extrabold tracking-tight text-[#F1F1ED]"
        >
          {theInternet.headline}
        </h2>

        <div className="space-y-4 text-lg sm:text-xl text-[#858580] leading-relaxed">
          {theInternet.lines.map((line, idx) => (
            <p key={idx} className="text-[#F1F1ED] font-medium">
              {line}
            </p>
          ))}
        </div>
      </div>
    </section>
  );
}
