/** Ticker: metric + short context */
export const STATS = [
  { v: "2.6M+", l: "organic views, 12 days, MarketWise" },
  { v: "$2B+", l: "peak MC, KISHU window" },
  { v: "4.25x", l: "ROAS, Minute Growth paid" },
  { v: "$100K+", l: "monthly ad spend managed" },
  { v: "15K+", l: "personalized emails/mo, outbound" },
  { v: "$0.04-$0.08", l: "CPC bands, X and Meta" },
  { v: "~$1.5M", l: "savings tied to Wayfair workflows" },
  { v: "$1.2M+", l: "OOH-attributed revenue" },
];

export const HERO_LIVE_METRICS = STATS;
export const PROOF_TILES = HERO_LIVE_METRICS;

export const CLIENTS = [
  { name: "Morgan & Morgan", color: "#f5f0eb" },
  { name: "Buffalo Wild Wings", color: "#E8A000" },
  { name: "Rumble", color: "#85C742" },
  { name: "Kick", color: "#53FC18" },
  { name: "Fashion Nova", color: "#ffb8d4" },
  { name: "MarketWise", color: "#ffb8d4" },
];

/**
 * Vertical career tree (newest first). NxtLvl folded into BU story on expand.
 */
export const CAREER_CHAPTERS = [
  {
    id: "marketwise",
    emblem: "MW",
    org: "MarketWise",
    role: "Social Media and Digital Marketing Lead",
    years: "Sep 2025 - May 2026",
    summary: "Social growth, clipping, paid acquisition, and AI-assisted landing page systems for a public financial media company.",
    details: [
      "Built scalable social and digital growth infrastructure: organic content, paid social, clipping teams, creator strategy, and AI-assisted landing page workflows.",
      "Focused on repeatable testing, faster production cycles, and cross-platform scaling tied to acquisition goals.",
    ],
    metrics: [
      { v: "2.6M+", l: "organic views in 12 days" },
      { v: "$0.04-$0.08", l: "CPC on X" },
      { v: "10%", l: "CTRs on Meta (strong units)" },
      { v: "<48h", l: "landing page builds vs ~3 weeks before" },
    ],
    featured: true,
  },
  {
    id: "zeta",
    emblem: "Z",
    org: "Zeta Global",
    role: "Marketing Analyst",
    years: "Jun 2025 - Aug 2025",
    summary: "Marketing analytics, SQL workflows, segmentation, dashboards, and campaign analysis in an enterprise marketing environment.",
    details: [
      "Worked on marketing analytics, SQL workflows, segmentation, dashboards, and large-scale campaign analysis.",
      "Exposure to how enterprise marketing data and reporting pipelines are run end to end.",
    ],
    metrics: [],
    featured: false,
  },
  {
    id: "minute",
    emblem: "MG",
    org: "Minute Growth",
    role: "Marketing Operations Manager",
    years: "Dec 2023 - Aug 2025",
    summary: "Paid media, creator campaigns, outbound, influencer partnerships, and large-scale digital campaigns.",
    details: [
      "Built and managed systems across paid media, creator partnerships, outbound, Twitter/X trending, and out-of-home placements.",
      "Clients and partners included brands in legal, food, streaming, and fashion verticals.",
    ],
    metrics: [
      { v: "$100K-$250K+", l: "monthly ad spend" },
      { v: "4.25x", l: "ROAS" },
      { v: "sub-$0.10", l: "CPC" },
      { v: "15,000+", l: "personalized emails/month" },
      { v: "240+", l: "accounts supported" },
    ],
    featured: false,
  },
  {
    id: "wayfair",
    emblem: "WF",
    org: "Wayfair",
    role: "Data Analyst",
    years: "Jun 2024 - Dec 2024",
    summary: "Operational analytics tied to roughly $1.5M in savings. SQL, GBQ, Looker, and reporting in production.",
    details: [
      "Built operational analytics and incident-prevention workflows tied to fulfillment and savings outcomes.",
      "Self-taught SQL and GBQ, used Looker, Power BI, and Python where the work needed to hold up in production.",
    ],
    metrics: [
      { v: "~$1.5M", l: "savings tied to analytics work" },
      { v: "SQL", l: "self-taught to prod" },
    ],
    featured: false,
  },
  {
    id: "bu",
    emblem: "BU",
    org: "Boston University",
    role: "Bachelor's Degree",
    years: "2021-2025",
    summary: "Finance and entrepreneurship at Questrom. Started NxtLvl AdVentures while still in school.",
    details: [
      "BSBA with focus on finance and entrepreneurship through Questrom.",
      "Launched NxtLvl AdVentures while attending: client work, paid and creator campaigns, and growth projects alongside coursework.",
    ],
    metrics: [],
    featured: false,
  },
];

/** Work: grounded case cards (accordion on page) */
export const CASE_STUDIES = [
  {
    id: "marketwise",
    title: "MarketWise",
    label: "Social Media and Digital Marketing Lead",
    dateRange: "Sep 2025 - May 2026",
    tag: "Public company, financial media",
    copy: "Built social and digital growth systems for a public financial media company. Worked across organic content, paid social, clipping teams, creator strategy, and AI-assisted landing page workflows.",
    metrics: [
      { v: "2.6M+", l: "organic views in 12 days" },
      { v: "$0.04-$0.08", l: "CPC on X" },
      { v: "10%", l: "CTRs on Meta" },
      { v: "<48h", l: "LP builds vs ~3 weeks" },
    ],
    tone: "dark",
    detail: {
      paragraphs: [
        "Ran growth work where the output had to show up in dashboards and in-market performance, not in slide decks.",
        "Reduced landing page production time from about three weeks to under 48 hours by tightening workflow, templates, and handoffs between creative and paid.",
      ],
      expandedBullets: [
        "Clipping team infrastructure and posting cadence",
        "Creator distribution and scaling",
        "AI-assisted landing page workflows",
        "Paid social testing and iteration",
        "Cross-platform scaling with clear measurement",
      ],
    },
  },
  {
    id: "kishu",
    title: "KISHU",
    label: "Crypto launch support",
    dateRange: "",
    tag: "Community and paid social",
    copy: "Supported marketing behind one of the fastest meme coin runs of the cycle: community growth, Twitter/X trending support, and Times Square placement.",
    metrics: [
      { v: "$2B+", l: "peak market cap" },
      { v: "Times Square", l: "placement" },
      { v: "Global", l: "Twitter/X attention" },
    ],
    tone: "pink",
    detail: {
      paragraphs: [
        "Work centered on coordinating community-facing growth with high-visibility placements and social momentum during a compressed launch window.",
      ],
      expandedBullets: ["Community growth programs", "X trending coordination", "OOH placement in NYC", "Paid and organic social support"],
    },
  },
  {
    id: "minute",
    title: "Minute Growth",
    label: "Marketing Operations Manager",
    dateRange: "Dec 2023 - Aug 2025",
    tag: "Paid, creators, outbound, OOH",
    copy: "Built and managed campaign systems across paid media, creator partnerships, outbound systems, Twitter/X trending, and out-of-home placements.",
    metrics: [
      { v: "$100K-$250K+", l: "monthly ad spend" },
      { v: "4.25x", l: "ROAS" },
      { v: "sub-$0.10", l: "CPC" },
      { v: "15,000+", l: "personalized emails/month" },
      { v: "240+", l: "accounts supported" },
    ],
    tone: "dark",
    detail: {
      paragraphs: [
        "Day to day was volume: budgets, creative testing, creator contracts, outbound infrastructure, and making sure reporting matched what finance needed to see.",
      ],
      expandedBullets: ["Paid social at scale", "Creator and influencer partnerships", "Outbound automation", "X trending campaigns", "OOH coordination with digital funnels"],
    },
  },
  {
    id: "paid",
    title: "Paid acquisition",
    label: "Paid acquisition",
    dateRange: "",
    tag: "Meta, TikTok, Google, X",
    copy: "Built paid campaigns across Meta, TikTok, Google, and X with a focus on efficient testing, strong hooks, and clear conversion paths.",
    metrics: [
      { v: "4.25x", l: "ROAS" },
      { v: "$0.04-$0.08", l: "CPC" },
      { v: "4-10%", l: "CTR" },
      { v: "sub-$10", l: "CPL" },
    ],
    tone: "charcoal",
    detail: {
      paragraphs: [
        "Structured tests around creative variants, audience splits, and downstream conversion so spend could be defended with numbers, not narratives.",
      ],
      expandedBullets: ["Creative iteration and hook testing", "Budget pacing and channel mix", "Attribution and downstream tracking", "Reporting for finance and clients"],
    },
  },
  {
    id: "ooh",
    title: "Out-of-home",
    label: "Out-of-home campaigns",
    dateRange: "",
    tag: "Physical media + digital funnels",
    copy: "Worked on Times Square billboards, NYC taxi ads, LED trucks, and large-scale physical media placements tied to digital funnels.",
    metrics: [
      { v: "$1.2M+", l: "high-ticket revenue attributed" },
      { v: "Times Square", l: "placements" },
      { v: "NYC taxi", l: "network campaigns" },
    ],
    tone: "dark",
    detail: {
      paragraphs: [
        "OOH was treated as part of the same acquisition story as digital: URLs, creative, and follow-up flows had to match the placement.",
      ],
      expandedBullets: ["Times Square and high-visibility boards", "Taxi and transit networks", "LED trucks and route-based buys", "Handoff to landing pages and CRM"],
    },
  },
];

export const WORK_LEGACY = [];

/** Tools page: flat list */
export const TOOLS_AND_SYSTEMS = [
  "SQL",
  "GBQ",
  "Looker",
  "Power BI",
  "Python",
  "Meta Ads",
  "TikTok Ads",
  "Google Ads",
  "X Ads",
  "AI landing page systems",
  "Outbound automation",
  "Clip pipelines",
  "Creator distribution systems",
];

/** Legacy: capabilities grid can still import */
export const CAPABILITIES = TOOLS_AND_SYSTEMS.map((name, i) => ({
  id: `t-${i}`,
  name,
  blurb: "Used across analytics, paid acquisition, and growth projects.",
}));

export const INTEL_PROMPTS = [
  "What did Nick do at MarketWise?",
  "What tools does Nick use for analytics and paid media?",
  "Summarize Nick's experience at Minute Growth.",
  "How do I contact Nick?",
];

export const MOCK_AI_DEFAULT =
  "Ask a specific question about Nick's career, work history, tools, or projects. I only answer from that information.";

export const AI_ASSISTANT_INTRO =
  "I answer from Nick's resume and project data only: roles, metrics, tools, paid media, and how to contact him. Ask something specific.";

export const PHONE_DISPLAY = "917-618-1834";
export const PHONE_RAW = "9176181834";
export const PHONE_HREF = "tel:+19176181834";
export const EMAIL_ADDRESS = "npink@bu.edu";
export const LINKEDIN = "https://linkedin.com/in/nicholaspink";
export const EMAIL = `mailto:${EMAIL_ADDRESS}`;

const TOOLS_ANSWER = `Nick has used SQL, GBQ, Looker, Power BI, and Python on analytics work. On acquisition he has run Meta Ads, TikTok Ads, Google Ads, and X Ads, plus AI-assisted landing page workflows, outbound automation, clip pipelines, and creator distribution systems across campaigns.`;

export function getMockAiReply(text) {
  const q = text.trim().toLowerCase();
  if (!q) return MOCK_AI_DEFAULT;

  if (
    /\b(sex|porn|nsfw|nude|naked)\b/i.test(q) ||
    /\b(roleplay|rp\b|pretend you|write a poem|joke|funny story)\b/i.test(q) ||
    /\b(trump|biden|election|republican|democrat|politic)\b/i.test(q) ||
    /\b(religion|god|prayer)\b/i.test(q)
  ) {
    return "I only answer questions about Nick's career, marketing work, tools, and how to contact him. Please rephrase.";
  }

  if (/^(hi|hey|hello|yo)\b[!.\s]*$/i.test(q.trim())) {
    return "Ask about MarketWise, Minute Growth, paid media, tools, or how to reach Nick on LinkedIn.";
  }

  if (/\b(motivat|inspir|life advice|what is meaning)\b/i.test(q)) {
    return "I stick to resume and work topics. Ask about a role, a metric, or a channel.";
  }

  if (/\b(contact|email|phone|linkedin|reach you|dm)\b/i.test(q)) {
    return `Best first touch is LinkedIn: ${LINKEDIN.replace("https://", "")}. Phone ${PHONE_DISPLAY}. Email ${EMAIL_ADDRESS}.`;
  }

  if (/\b(what tools|stack|sql|gbq|looker|power bi|python|meta ads|tiktok ads|google ads|x ads|analytics stack)\b/i.test(q)) {
    return TOOLS_ANSWER;
  }

  if (/\b(marketwise|mktw|public company|financial media|clipping|landing page)\b/i.test(q)) {
    return "At MarketWise Nick led social and digital growth for a public financial media company: organic content, paid social, clipping teams, creator strategy, and AI-assisted landing page workflows. Outcomes included 2.6M+ organic views in 12 days, $0.04-$0.08 CPC on X, about 10% CTR on strong Meta units, and landing page builds under 48 hours versus roughly three weeks before.";
  }

  if (/\b(minute growth|minute|outbound|15k|240 accounts|roas)\b/i.test(q)) {
    return "At Minute Growth (Dec 2023 - Aug 2025) Nick ran marketing operations: roughly $100K-$250K+ monthly ad spend, 4.25x ROAS, sub-$0.10 CPC, 15,000+ personalized emails per month, and 240+ accounts supported, plus creator partnerships, X trending, and OOH tied to digital funnels.";
  }

  if (/\b(wayfair|analyst|savings|1\.5m|fulfillment)\b/i.test(q)) {
    return "At Wayfair Nick worked as a data analyst on operational analytics tied to about $1.5M in savings. He learned SQL, GBQ, Looker, Power BI, and Python and shipped reporting that held up in production.";
  }

  if (/\b(boston|bu\b|questrom|nxtlvl|college|degree)\b/i.test(q)) {
    return "Nick graduated from Boston University Questrom (2021-2025) with a BSBA focused on finance and entrepreneurship. He started NxtLvl AdVentures while still in school and ran client-facing growth work alongside classes.";
  }

  if (/\b(zeta|segmentation|dashboard)\b/i.test(q)) {
    return "At Zeta Global Nick worked on marketing analytics: SQL, segmentation, dashboards, and campaign analysis on large marketing datasets.";
  }

  if (/\b(kishu|meme|coin|crypto launch|times square)\b/i.test(q)) {
    return "Nick supported marketing for the KISHU launch window: community growth, X trending support, and Times Square placement, during a run that reached $2B+ peak market cap.";
  }

  if (/\b(paid|cpc|ctr|cpl|meta|tiktok|google ads)\b/i.test(q)) {
    return "Nick has built paid campaigns across Meta, TikTok, Google, and X. Representative benchmarks from his work include 4.25x ROAS, $0.04-$0.08 CPC, 4-10% CTR, and sub-$10 CPL on strong units, with testing structured around hooks and conversion paths.";
  }

  if (/\b(ooh|out of home|billboard|taxi|led truck)\b/i.test(q)) {
    return "Nick has worked on Times Square billboards, NYC taxi campaigns, LED trucks, and other OOH placements tied to digital funnels, including roughly $1.2M+ in high-ticket revenue attributed to that work in relevant reporting windows.";
  }

  if (/\b(resume|cv|job|hire|experience|career timeline)\b/i.test(q)) {
    return "Timeline: Boston University (2021-2025, NxtLvl started while in school), Wayfair data analyst (2024), Minute Growth marketing operations (Dec 2023 - Aug 2025), Zeta marketing analyst (2025), MarketWise social and digital lead (Sep 2025 - May 2026). Ask about any stop for specifics.";
  }

  return "I can answer from Nick's resume and projects: roles at MarketWise, Minute Growth, Wayfair, Zeta, BU, tools, paid media, OOH, or KISHU. Ask a narrower question for a precise answer.";
}

export const WORK_CATEGORIES = [];
export const CAREER_RAIL = [];
export const TIMELINE = [];
export const SERVICES_PILLARS = CAPABILITIES.map((c) => ({ id: c.id, n: c.name, outcome: c.blurb, hot: false }));

export const OOH = [
  { label: "Times Square", sub: "OOH", bg: "linear-gradient(145deg,#1a0a12,#0a0a0a)" },
  { label: "NYC taxi", sub: "Network", bg: "linear-gradient(145deg,#0a1210,#050505)" },
];

export const TRENDING_DATA = [
  {
    project: "$SAMO",
    desc: "Multi-region same window",
    countries: [{ flag: "🇺🇸", name: "US", pos: "#4", next: "noise" }],
  },
];

export const PAID_CAMPAIGNS = [
  { label: "A", period: "AT", clicks: "1,615", cpc: "$0.09", reach: "34K", impressions: "49K", spend: "$146" },
];
