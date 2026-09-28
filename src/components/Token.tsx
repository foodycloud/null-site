"use client";

import { useState } from "react";
import { Copy, Check, ShieldCheck } from "lucide-react";
import { siteConfig } from "@/config/siteConfig";

export default function Token() {
  const [copied, setCopied] = useState(false);
  const { token, transparency, brand } = siteConfig;

  const tokenParameters = [
    { item: "TOKEN NAME", spec: token.name, highlight: false },
    { item: "SYMBOL", spec: token.symbol, highlight: false },
    { item: "BLOCKCHAIN NETWORK", spec: token.chain, highlight: true },
    { item: "CONTRACT ADDRESS", spec: token.contractAddress, highlight: true },
    { item: "TOTAL SUPPLY", spec: token.totalSupply, highlight: true },
    { item: "LIQUIDITY STATUS", spec: token.liquidity, highlight: true },
    { item: "TEAM ALLOCATION", spec: token.teamAllocation, highlight: false },
    { item: "BUY / SELL TAX", spec: token.tax, highlight: false },
    { item: "LAUNCH TARGET", spec: token.launchTarget, highlight: true },
  ];

  const copyAddress = () => {
    const textToCopy = token.contractAddress.includes("0x") || token.contractAddress.length > 20
      ? token.contractAddress
      : `TBA — Verify official contract at launch on ${brand.domain}`;
    
    if (navigator?.clipboard?.writeText) {
      navigator.clipboard.writeText(textToCopy);
    }
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <section
      id="ledger"
      className="py-20 md:py-28 px-6 sm:px-10 border-t border-[#22293D] max-w-5xl mx-auto w-full relative z-10"
      aria-labelledby="ledger-heading"
    >
      {/* Chapter Label */}
      <div className="flex items-center justify-center gap-3 mb-8 text-[11px] font-mono-tech tracking-[0.2em] text-[#98A2C2] uppercase text-center">
        <span className="text-[#D4FF00] font-bold">{transparency.chapter}</span>
        <span className="text-[#3A4568]">/</span>
        <span className="text-[#CBD2E6]">The Ledger & Transparency</span>
      </div>

      {/* Main Headline */}
      <div className="text-center mb-12 max-w-2xl mx-auto">
        <h2
          id="ledger-heading"
          className="text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight text-[#FFFFFF] mb-2"
        >
          {transparency.title}
        </h2>
        <p className="text-sm sm:text-base text-[#CBD2E6]">
          {transparency.subtitle}
        </p>
      </div>

      {/* Section 1: Token Parameters Table */}
      <div className="mb-12 p-6 sm:p-8 rounded-2xl glow-card">
        <div className="flex items-baseline justify-between border-b border-[#22293D] pb-3 mb-4">
          <span className="text-xs sm:text-sm font-mono-tech uppercase tracking-widest text-[#FFFFFF] font-bold">
            01 / Token Specifications
          </span>
          <span className="text-[10px] sm:text-xs font-mono-tech text-[#D4FF00] font-semibold">
            [ VERIFIED ON-CHAIN ]
          </span>
        </div>

        <div className="divide-y divide-[#22293D]">
          {tokenParameters.map((p) => (
            <div
              key={p.item}
              className="py-3 sm:py-3.5 flex flex-col sm:flex-row sm:items-center justify-between gap-1 text-xs sm:text-sm font-mono-tech"
            >
              <span className="text-[#CBD2E6] tracking-wider text-xs">{p.item}</span>
              <span className={`font-semibold ${p.highlight ? "text-[#D4FF00]" : "text-[#FFFFFF]"}`}>
                {p.spec}
              </span>
            </div>
          ))}
        </div>

        {/* Centered Copy Button */}
        <div className="mt-6 pt-4 border-t border-[#22293D] flex justify-center">
          <button
            onClick={copyAddress}
            className="px-6 py-2.5 rounded-full bg-[#141A28] hover:bg-[#1E263B] border border-[#2B354F] hover:border-[#D4FF00] text-[#FFFFFF] text-xs font-mono-tech uppercase tracking-wider transition-all cursor-pointer flex items-center gap-2 shadow-sm font-semibold"
          >
            {copied ? (
              <>
                <Check size={14} className="text-[#D4FF00]" />
                <span className="text-[#D4FF00]">Copied Verification Link!</span>
              </>
            ) : (
              <>
                <Copy size={14} className="text-[#CBD2E6]" />
                <span>Copy Contract Details</span>
              </>
            )}
          </button>
        </div>
      </div>

      {/* Section 2: Transparency & Security Ledger */}
      <div className="mb-12 p-6 sm:p-8 rounded-2xl glow-card">
        <div className="flex items-baseline justify-between border-b border-[#22293D] pb-3 mb-4">
          <span className="text-xs sm:text-sm font-mono-tech uppercase tracking-widest text-[#FFFFFF] font-bold">
            02 / Transparency Ledger
          </span>
          <span className="text-[10px] sm:text-xs font-mono-tech text-[#D4FF00] font-semibold">
            [ AUDIT STATUS ]
          </span>
        </div>

        <div className="divide-y divide-[#22293D]">
          {transparency.ledgerItems.map((item) => (
            <div
              key={item.category}
              className="py-4 sm:py-5 flex flex-col md:flex-row md:items-baseline justify-between gap-2"
            >
              <div className="md:w-1/3">
                <span className="text-sm sm:text-base font-bold text-[#FFFFFF] block mb-0.5">
                  {item.category}
                </span>
                <span className="text-xs font-mono-tech text-[#D4FF00] flex items-center gap-1 font-semibold">
                  <ShieldCheck size={13} />
                  {item.status}
                </span>
              </div>

              <div className="md:w-2/3">
                <p className="text-xs sm:text-sm text-[#CBD2E6] leading-relaxed">
                  {item.notes}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Section 3: Risk Disclosures */}
      <div className="p-6 sm:p-7 rounded-2xl bg-[#101420] border border-[#22293D] text-center max-w-2xl mx-auto shadow-md">
        <span className="text-xs sm:text-sm font-mono-tech uppercase tracking-widest text-[#D4FF00] block mb-2.5 font-bold">
          Risk Disclosure & Financial Honesty
        </span>
        <div className="space-y-2.5 text-xs sm:text-sm text-[#CBD2E6] leading-relaxed">
          {transparency.riskDisclosures.map((risk, idx) => (
            <p key={idx}>{risk}</p>
          ))}
        </div>
      </div>

    </section>
  );
}
