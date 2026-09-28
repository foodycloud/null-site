"use client";

import { motion } from "framer-motion";
import { ShieldCheck, AlertCircle } from "lucide-react";

const auditItems = [
  {
    topic: "Token Supply",
    status: "TBA at Deploy",
    description: "Total token supply will be immutably hardcoded into the deployed smart contract with zero mint functions.",
  },
  {
    topic: "Smart Contract Code",
    status: "100% Open Source",
    description: "Contract code will be fully verified and published on block explorers for public audit.",
  },
  {
    topic: "Liquidity Commitment",
    status: "Disclosed at Launch",
    description: "Liquidity locking proofs and transaction hashes will be published openly upon liquidity creation.",
  },
  {
    topic: "Team Allocation",
    status: "Fully Disclosed",
    description: "Any allocation retained for ongoing operations will be publicly stated with identifiable wallet addresses.",
  },
  {
    topic: "Treasury Tax",
    status: "0% Hidden Fees",
    description: "No hidden sell taxes or undisclosed treasury buckets that extract capital from holders.",
  },
  {
    topic: "Ownership Privileges",
    status: "TBA Upon Deploy",
    description: "Contract ownership and renouncement details will be broadcasted with on-chain cryptographic proofs.",
  },
];

const risks = [
  "Cryptocurrency markets are volatile and speculative.",
  "NULL makes no promises of financial profit, fixed yields, or guaranteed price targets.",
  "Always confirm contract addresses directly on official NULL domains to avoid impostor scams.",
  "Transactions on decentralized blockchains are permanent and irreversible.",
];

export default function Transparency() {
  return (
    <section
      id="transparency"
      className="py-28 md:py-36 px-6 sm:px-8 border-t border-[#1C1C20] relative"
      aria-labelledby="transparency-heading"
    >
      <div className="max-w-5xl mx-auto">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-20">
          <span className="text-xs font-semibold tracking-widest text-[#D4FF00] uppercase mb-3 block">
            Accountability
          </span>
          <h2
            id="transparency-heading"
            className="text-4xl sm:text-5xl md:text-6xl font-black tracking-[-0.03em] text-[#FAFAFA] leading-tight mb-4"
          >
            Nothing Hidden.
          </h2>
          <p className="text-base sm:text-lg text-[#8F8F99]">
            Transparency is not an afterthought. It is our founding requirement.
          </p>
        </div>

        {/* Ledger Grid */}
        <div className="p-8 rounded-3xl bg-[#111114] border border-[#1F1F23] mb-12">
          <div className="divide-y divide-[#1C1C20]">
            {auditItems.map((item) => (
              <div
                key={item.topic}
                className="py-6 flex flex-col md:flex-row md:items-center justify-between gap-4"
              >
                <div className="max-w-xl">
                  <h3 className="text-base font-bold text-[#FAFAFA] mb-1">
                    {item.topic}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#8F8F99] leading-relaxed">
                    {item.description}
                  </p>
                </div>

                <div className="shrink-0">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#18181D] border border-[#27272A] text-xs font-semibold text-[#D4FF00]">
                    <ShieldCheck size={13} />
                    <span>{item.status}</span>
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Risk Assessment */}
        <div className="p-8 rounded-3xl bg-[#141418] border border-[#27272A]">
          <div className="flex items-center gap-2 text-xs font-bold text-[#D4FF00] uppercase tracking-wider mb-4">
            <AlertCircle size={15} />
            <span>Risk Disclosures & Security</span>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {risks.map((r, i) => (
              <div key={i} className="flex gap-3 text-xs text-[#8F8F99] leading-relaxed">
                <span className="text-[#52525B] font-mono">[{i + 1}]</span>
                <span>{r}</span>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
