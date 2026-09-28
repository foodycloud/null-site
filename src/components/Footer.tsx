import { siteConfig } from "@/config/siteConfig";

export default function Footer() {
  const { brand, footer, socials } = siteConfig;

  return (
    <footer className="border-t border-[#222222] bg-[#0A0A0A] py-16 px-6">
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-start md:items-center justify-between gap-8 font-mono-tech text-xs text-[#858580]">
        {/* Brand & Tagline */}
        <div className="space-y-1">
          <div className="text-sm font-bold text-[#F1F1ED] tracking-wider">
            {brand.symbol}
          </div>
          <div>{brand.tagline}</div>
        </div>

        {/* Links & Copyright */}
        <div className="flex flex-wrap items-center gap-6 text-xs uppercase tracking-wider">
          <a
            href={socials.x.url}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[#F1F1ED] transition-colors"
          >
            {socials.x.name}
          </a>
          <a
            href={socials.telegram.url}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[#F1F1ED] transition-colors"
          >
            {socials.telegram.name}
          </a>
          <a
            href={socials.discord.url}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[#F1F1ED] transition-colors"
          >
            {socials.discord.name}
          </a>
          <span className="text-[#F1F1ED]">
            {footer.copyright}
          </span>
        </div>
      </div>

      {/* Mandatory Disclaimer */}
      <div className="max-w-5xl mx-auto pt-8 mt-8 border-t border-[#222222] text-xs text-[#858580] leading-relaxed">
        {footer.disclaimer}
      </div>
    </footer>
  );
}
