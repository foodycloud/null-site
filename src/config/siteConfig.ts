/**
 * =========================================================================
 * NULL SITE CONFIGURATION — EDITORIAL & RESTRAINED
 * =========================================================================
 * 
 * Strict honesty: items not yet deployed are marked as "TBA" and rendered
 * as plain text without dead links.
 */

export const siteConfig = {
  brand: {
    name: "NULL",
    symbol: "NULL / Ø",
    tagline: "NOTHING. UNTIL EVERYTHING.",
    meta: "MEMECOIN / INTERNET CULTURE / 2026",
    status: "STATUS / PRE-GENESIS",
    year: "2026",
    domain: "https://null.wtf",
  },

  // Official Channels (Replace placeholders with verified handles before launch)
  socials: {
    x: {
      name: "X",
      handle: "@nullcoin",
      url: "https://x.com/nullcoin",
      isLive: true,
    },
    telegram: {
      name: "Telegram",
      handle: "t.me/nullcoin",
      url: "https://t.me/nullcoin",
      isLive: true,
    },
    contract: {
      name: "Contract",
      spec: "TBA",
      isLive: false,
    },
  },

  // 1. Hero
  hero: {
    meta: "MEMECOIN / INTERNET CULTURE / 2026",
    status: "STATUS / PRE-GENESIS",
    headlinePart1: "NOTHING.",
    headlinePart2: "UNTIL EVERYTHING.",
    support: "A memecoin built around a simple idea: nothing becomes something when enough people participate.",
    primaryCta: "ENTER NULL",
    secondaryCta: "MANIFESTO",
  },

  // 2. The Idea
  premise: {
    index: "01",
    label: "THE PREMISE",
    headline: "THERE IS NOTHING HERE.",
    body: "No artificial utility. No manufactured promises. No complicated narrative. NULL is a memecoin. That's the point.",
  },

  // 3. The Manifesto
  manifesto: {
    index: "02",
    label: "THE MANIFESTO",
    axioms: [
      "Nothing is guaranteed.",
      "Nothing is hidden.",
      "Nothing is complicated.",
      "Nothing belongs to one person.",
      "Nothing becomes something alone.",
    ],
    conclusion: "NULL IS NOTHING.",
  },

  // 4. Why NULL
  thesis: {
    index: "03",
    label: "THE THESIS",
    headline: "WHY NULL?",
    body: "Crypto keeps searching for utility. Memes never needed permission. NULL exists somewhere in between. A symbol first. A community second. A market third.",
  },

  // 5. Nullers (Community)
  community: {
    index: "04",
    label: "THE COMMUNITY",
    headline: "NULLERS",
    body: "A symbol means nothing by itself. A community gives it meaning. If you're here, you're already a NULLER.",
  },

  // 6. The Token
  token: {
    index: "05",
    label: "THE TOKEN",
    headline: "SPECIFICATIONS",
    specs: [
      { key: "TOKEN", value: "NULL", isTBA: false },
      { key: "CHAIN", value: "TBA", isTBA: true },
      { key: "CONTRACT", value: "TBA", isTBA: true },
      { key: "SUPPLY", value: "TBA", isTBA: true },
      { key: "LIQUIDITY", value: "TBA", isTBA: true },
      { key: "TAX", value: "TBA", isTBA: true },
    ],
    riskNote: "NULL is a speculative memecoin with no intrinsic value. Participate at your own risk.",
  },

  // 7. Nothing Hidden (Ledger)
  transparency: {
    index: "06",
    label: "NOTHING HIDDEN",
    headline: "TRANSPARENCY LEDGER",
    items: [
      { name: "Contract", status: "TBA" },
      { name: "Liquidity", status: "TBA" },
      { name: "Supply", status: "TBA" },
      { name: "Team Allocation", status: "TBA" },
      { name: "Treasury", status: "TBA" },
      { name: "Ownership", status: "TBA" },
      { name: "Vesting", status: "TBA" },
    ],
  },

  // 8. The Internet
  theInternet: {
    index: "07",
    label: "THE INTERNET",
    headline: "NULL BELONGS TO THE INTERNET.",
    axioms: [
      "Memes travel faster than narratives.",
      "Ideas don't need permission.",
      "Communities don't need instructions.",
      "NULL exists wherever people decide it exists.",
    ],
  },

  // 9. FAQ
  faq: {
    index: "08",
    label: "FAQ",
    headline: "FREQUENTLY ANSWERED",
    questions: [
      {
        q: "What is NULL?",
        a: "An internet-native memecoin built around the premise that collective participation creates cultural meaning from nothing.",
      },
      {
        q: "Does NULL have utility?",
        a: "No artificial utility. NULL does not pretend to be a technology platform or payment system. It is a memecoin.",
      },
      {
        q: "Who created NULL?",
        a: "TBA.",
      },
      {
        q: "Where can I buy NULL?",
        a: "Not yet. Official contract and liquidity parameters will be published directly on this domain at launch.",
      },
      {
        q: "What are the risks?",
        a: "NULL is a speculative cultural memecoin. Its value is entirely subjective and market-driven. Never put in capital you cannot afford to lose.",
      },
    ],
  },

  // 10. Final Call & Footer
  finalCta: {
    headlinePart1: "NOTHING.",
    headlinePart2: "UNTIL EVERYTHING.",
    buttonText: "ENTER NULL →",
  },

  footer: {
    disclaimer: "NULL is a memecoin. Nothing on this website constitutes financial advice or a promise of future value.",
    copyright: "© 2026 NULL.",
  },
};
