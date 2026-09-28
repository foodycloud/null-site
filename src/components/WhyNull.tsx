import { siteConfig } from "@/config/siteConfig";

export default function WhyNull() {
  const { thesis } = siteConfig;

  return (
    <section
      id="thesis"
      className="py-20 px-6 border-t border-[#282828] max-w-5xl mx-auto w-full"
      aria-labelledby="thesis-heading"
    >
      {/* Index Label */}
      <div className="font-mono-tech text-[11px] text-[#858580] uppercase tracking-wider mb-8">
        {thesis.index} / {thesis.label}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 items-start">
        <div className="md:col-span-4">
          <h2
            id="thesis-heading"
            className="text-2xl sm:text-3xl font-extrabold tracking-tight text-[#F1F1ED]"
          >
            {thesis.headline}
          </h2>
        </div>

        <div className="md:col-span-8">
          <p className="text-lg sm:text-xl text-[#F1F1ED] font-medium leading-relaxed mb-6">
            {thesis.body}
          </p>
        </div>
      </div>
    </section>
  );
}
