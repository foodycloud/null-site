"use client";

import { motion } from "framer-motion";
import { Send, MessageSquare, ArrowUpRight, Users } from "lucide-react";
import { siteConfig } from "@/config/siteConfig";

export default function Community() {
  const { community, socials } = siteConfig;

  const socialList = [
    {
      name: socials.x.name,
      handle: socials.x.handle,
      url: socials.x.url,
      type: "Broadcasts & Culture",
      icon: "x",
    },
    {
      name: socials.telegram.name,
      handle: socials.telegram.handle,
      url: socials.telegram.url,
      type: "Direct Assembly",
      icon: "tg",
    },
    {
      name: socials.discord.name,
      handle: socials.discord.handle,
      url: socials.discord.url,
      type: "Archive & Memes",
      icon: "dc",
    },
  ];

  return (
    <section
      id="community"
      className="py-20 md:py-28 px-6 sm:px-10 border-t border-[#22293D] max-w-5xl mx-auto w-full relative z-10"
      aria-labelledby="community-heading"
    >
      {/* Chapter Label */}
      <div className="flex items-center justify-center gap-3 mb-8 text-[11px] font-mono-tech tracking-[0.2em] text-[#98A2C2] uppercase text-center">
        <span className="text-[#D4FF00] font-bold">{community.chapter}</span>
        <span className="text-[#3A4568]">/</span>
        <span className="text-[#CBD2E6]">The Community</span>
      </div>

      {/* Main Headline */}
      <div className="text-center mb-10 max-w-2xl mx-auto">
        <h2
          id="community-heading"
          className="text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight text-[#FFFFFF] leading-snug mb-3"
        >
          {community.title}
        </h2>
        <p className="text-sm sm:text-base text-[#CBD2E6] leading-relaxed">
          {community.subtitle}
        </p>
      </div>

      {/* Identity Callout Card */}
      <div className="text-center py-8 px-6 rounded-2xl glow-card mb-10 max-w-2xl mx-auto border border-[#2B354F]">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#141A28] border border-[#2B354F] text-[11px] font-mono-tech text-[#D4FF00] mb-3 font-semibold">
          <Users size={13} />
          <span>{community.badge}</span>
        </div>
        <div className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-[#FFFFFF] mb-2">
          {community.communityName}
        </div>
        <p className="text-sm sm:text-base text-[#CBD2E6]">
          {community.communityTagline}
        </p>
      </div>

      {/* Official Directory Links */}
      <div className="max-w-4xl mx-auto">
        <span className="text-[11px] font-mono-tech uppercase tracking-widest text-[#D4FF00] block mb-4 text-center font-bold">
          Official Direct Channels
        </span>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {socialList.map((s, idx) => (
            <motion.a
              key={s.name}
              href={s.url}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: idx * 0.05 }}
              className="p-6 rounded-xl glow-card text-center group flex flex-col justify-between hover:border-[#D4FF00]/50 transition-all shadow-sm"
            >
              <div>
                <div className="w-11 h-11 rounded-lg bg-[#141A28] border border-[#2B354F] group-hover:border-[#D4FF00] flex items-center justify-center mx-auto mb-4 transition-colors">
                  {s.icon === "x" && (
                    <svg className="w-4 h-4 fill-current text-[#FFFFFF] group-hover:text-[#D4FF00] transition-colors" viewBox="0 0 24 24">
                      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                    </svg>
                  )}
                  {s.icon === "tg" && (
                    <Send size={18} className="text-[#FFFFFF] group-hover:text-[#D4FF00] transition-colors" />
                  )}
                  {s.icon === "dc" && (
                    <MessageSquare size={18} className="text-[#FFFFFF] group-hover:text-[#D4FF00] transition-colors" />
                  )}
                </div>

                <div className="text-[10px] font-mono-tech text-[#98A2C2] group-hover:text-[#D4FF00] transition-colors mb-1 uppercase tracking-wider font-semibold">
                  {s.type}
                </div>
                <div className="text-base font-bold text-[#FFFFFF] group-hover:text-white transition-colors mb-0.5">
                  {s.name}
                </div>
                <div className="text-xs sm:text-sm font-mono-tech text-[#D4FF00]">
                  {s.handle}
                </div>
              </div>

              <div className="mt-6 pt-3 border-t border-[#22293D] text-xs font-mono-tech text-[#CBD2E6] group-hover:text-[#D4FF00] transition-colors flex items-center justify-center gap-1 font-semibold">
                <span>Join Channel</span>
                <ArrowUpRight size={13} />
              </div>
            </motion.a>
          ))}
        </div>
      </div>

    </section>
  );
}
