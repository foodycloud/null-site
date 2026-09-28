import { siteConfig } from "@/config/siteConfig";

export default function Community() {
  const { community, socials } = siteConfig;

  return (
    <section
      id="community"
      className="py-24 sm:py-32 px-6 border-t border-[#222222] max-w-5xl mx-auto w-full"
      aria-labelledby="community-heading"
    >
      <div className="font-mono-tech text-xs text-[#858580] uppercase tracking-wider mb-12">
        {community.index} / {community.label}
      </div>

      <div className="max-w-3xl space-y-8 mb-16">
        <h2
          id="community-heading"
          className="text-3xl sm:text-4xl font-extrabold tracking-tight text-[#F1F1ED]"
        >
          {community.headline}
        </h2>

        <div className="space-y-3 text-lg sm:text-xl text-[#858580] leading-relaxed">
          {community.lines.map((line, idx) => (
            <p key={idx} className={idx === 2 ? "text-[#F1F1ED] font-medium" : ""}>
              {line}
            </p>
          ))}
        </div>
      </div>

      {/* Clean Socials Row */}
      <div className="border-t border-[#222222] pt-8 flex flex-wrap items-center gap-6 font-mono-tech text-xs uppercase tracking-wider">
        <a
          href={socials.x.url}
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-[#858580] transition-colors"
        >
          {socials.x.name} ↗
        </a>
        <span className="text-[#222222]">/</span>
        <a
          href={socials.telegram.url}
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-[#858580] transition-colors"
        >
          {socials.telegram.name} ↗
        </a>
        <span className="text-[#222222]">/</span>
        <a
          href={socials.discord.url}
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-[#858580] transition-colors"
        >
          {socials.discord.name} ↗
        </a>
      </div>
    </section>
  );
}
