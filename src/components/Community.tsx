import { siteConfig } from "@/config/siteConfig";

export default function Community() {
  const { community, socials } = siteConfig;

  return (
    <section
      id="community"
      className="py-20 px-6 border-t border-[#282828] max-w-5xl mx-auto w-full"
      aria-labelledby="community-heading"
    >
      {/* Index Label */}
      <div className="font-mono-tech text-[11px] text-[#858580] uppercase tracking-wider mb-8">
        {community.index} / {community.label}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 items-start mb-12">
        <div className="md:col-span-4">
          <h2
            id="community-heading"
            className="text-2xl sm:text-3xl font-extrabold tracking-tight text-[#F1F1ED]"
          >
            {community.headline}
          </h2>
        </div>

        <div className="md:col-span-8">
          <p className="text-base sm:text-lg text-[#858580] leading-relaxed">
            {community.body}
          </p>
        </div>
      </div>

      {/* Technical Channels List */}
      <div className="border-t border-[#282828] grid grid-cols-1 sm:grid-cols-2 gap-4 pt-6">
        <a
          href={socials.x.url}
          target="_blank"
          rel="noopener noreferrer"
          className="p-4 border border-[#282828] flex items-center justify-between hover:border-[#F1F1ED] transition-colors group"
        >
          <span className="font-mono-tech text-xs text-[#F1F1ED] group-hover:underline">
            X / {socials.x.handle}
          </span>
          <span className="font-mono-tech text-[11px] text-[#858580]">
            [FOLLOW]
          </span>
        </a>

        <a
          href={socials.telegram.url}
          target="_blank"
          rel="noopener noreferrer"
          className="p-4 border border-[#282828] flex items-center justify-between hover:border-[#F1F1ED] transition-colors group"
        >
          <span className="font-mono-tech text-xs text-[#F1F1ED] group-hover:underline">
            TELEGRAM / {socials.telegram.handle}
          </span>
          <span className="font-mono-tech text-[11px] text-[#858580]">
            [JOIN]
          </span>
        </a>
      </div>
    </section>
  );
}
