"use client";

export default function Ticker() {
  const items = [
    "NOTHING. UNTIL EVERYTHING.",
    "0x0000000000000000000000000000000000000000",
    "NO MANUFACTURED PROMISES",
    "NO ARTIFICIAL UTILITY",
    "NULL / INTERNET EXPERIMENT / 2026",
    "PURE MEMETIC PHENOMENON",
    "COLLECTIVE CONSENSUS",
    "Ø",
  ];

  return (
    <div
      className="w-full overflow-hidden border-y border-[#1E1E1E] bg-[#0A0A0A] py-3 select-none"
      aria-hidden="true"
    >
      <div className="animate-marquee flex items-center gap-8">
        {[...items, ...items, ...items].map((text, index) => (
          <div key={index} className="flex items-center gap-8 shrink-0">
            <span className="text-xs font-mono tracking-[0.2em] text-[#82827C] hover:text-[#C8FF00] transition-colors">
              {text}
            </span>
            <span className="text-[#333333] font-mono text-xs">/</span>
          </div>
        ))}
      </div>
    </div>
  );
}
