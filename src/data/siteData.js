/** Ticker: metric + short context */
export const STATS = [
  { v: "2.6M+", l: "organic views, 12 days, MarketWise" },
  { v: "$2B+", l: "peak MC, KISHU window" },
  { v: "113x", l: "peak ROAS, Minute Growth" },
  { v: "4.25x", l: "average ROAS, paid acquisition" },
  { v: "$100K+", l: "monthly ad spend managed" },
  { v: "15K+", l: "personalized emails/mo, outbound" },
  { v: "$0.04-$0.08", l: "CPC bands, X and Meta" },
  { v: "~$1.5M", l: "savings tied to Wayfair workflows" },
  { v: "$1.2M+", l: "OOH high-ticket revenue" },
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
      { v: "113x", l: "peak ROAS" },
      { v: "$100K-$250K+", l: "monthly ad spend" },
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

/** Work: case study cards (grid + expandable detail) */
export const CASE_STUDIES = [
  {
    id: "marketwise",
    emblem: "MW",
    title: "MarketWise",
    label: "Social Media & Digital Marketing Lead",
    dateRange: "Sep 2025 - May 2026",
    tag: "",
    copy: "Built social and digital growth systems for a public financial media company. Worked across organic content, paid social, clipping teams, creator strategy, and AI-assisted landing page workflows.",
    metrics: [
      { v: "2.6M+", l: "organic views in 12 days" },
      { v: "$0.04-$0.08", l: "CPC on X" },
      { v: "10%", l: "CTRs on Meta" },
      { v: "<48h", l: "landing pages vs ~3 weeks before" },
    ],
    tone: "dark",
    detail: {
      paragraphs: [
        "Ran growth where results had to show up in dashboards and live performance, not only in decks.",
        "Cut landing page production from about three weeks to under 48 hours by tightening templates, handoffs, and AI-assisted build steps between creative and paid.",
      ],
      expandedBullets: [
        "Clipping team infrastructure and cadence",
        "Creator distribution systems",
        "AI-assisted landing page workflows",
        "Paid social testing and scaling",
        "Cross-platform measurement",
      ],
      tools: ["Meta Ads", "X Ads", "Looker", "SQL", "GBQ", "AI landing page systems", "Clip pipelines"],
      proven: "Public-company pace with creator and paid systems that moved both reach and speed-to-ship.",
    },
  },
  {
    id: "kishu",
    emblem: "K",
    title: "KISHU",
    label: "Crypto Launch Support",
    dateRange: "",
    tag: "",
    copy: "Supported marketing efforts behind one of the fastest meme coin runs of the cycle through community growth, Twitter/X trending support, and Times Square placement.",
    metrics: [
      { v: "$2B+", l: "peak market cap" },
      { v: "Times Square", l: "placement" },
      { v: "Global", l: "Twitter/X attention" },
    ],
    tone: "pink",
    detail: {
      paragraphs: [
        "Coordinated community-facing growth with high-visibility placements and social momentum in a compressed launch window.",
      ],
      expandedBullets: ["Community programs", "X trending coordination", "Times Square OOH", "Paid and organic social support"],
      tools: ["X Ads", "Meta Ads", "Community tooling", "OOH coordination"],
      proven: "Launch-scale attention without losing thread to measurable social and placement outcomes.",
    },
  },
  {
    id: "minute",
    emblem: "MG",
    title: "Minute Growth",
    label: "Marketing Operations Manager",
    dateRange: "Dec 2023 - Aug 2025",
    tag: "",
    copy: "Built and managed campaign systems across paid media, creator partnerships, outbound, Twitter/X trending, and out-of-home placements.",
    metrics: [
      { v: "113x", l: "peak ROAS" },
      { v: "$100K-$250K+", l: "monthly ad spend" },
      { v: "sub-$0.10", l: "CPC" },
      { v: "15,000+", l: "personalized emails/month" },
      { v: "240+", l: "accounts supported" },
    ],
    tone: "dark",
    detail: {
      paragraphs: [
        "High volume: budgets, creative testing, creator contracts, outbound infrastructure, and reporting that matched what finance needed.",
      ],
      expandedBullets: ["Paid social at scale", "Creator and influencer partnerships", "Outbound automation", "X trending", "OOH tied to digital funnels"],
      tools: ["Meta Ads", "TikTok Ads", "Google Ads", "X Ads", "Outbound automation", "Looker", "Power BI"],
      proven: "Agency-style throughput with documented ROAS peaks and repeatable campaign systems.",
    },
  },
  {
    id: "paid",
    emblem: "PA",
    title: "Paid Acquisition",
    label: "Paid Acquisition",
    dateRange: "",
    tag: "",
    copy: "Built paid campaigns across Meta, TikTok, Google, and X with a focus on efficient testing, strong hooks, and clear conversion paths.",
    metrics: [
      { v: "4.25x", l: "average ROAS" },
      { v: "$0.04-$0.08", l: "CPC" },
      { v: "4-10%", l: "CTR" },
      { v: "sub-$10", l: "CPL" },
    ],
    tone: "charcoal",
    detail: {
      paragraphs: [
        "Tests were structured around creative variants, audience splits, and downstream conversion so spend could be defended with numbers.",
      ],
      expandedBullets: ["Hook and creative iteration", "Budget pacing and channel mix", "Attribution and downstream tracking", "Client and finance reporting"],
      tools: ["Meta Ads", "TikTok Ads", "Google Ads", "X Ads", "GBQ", "Looker"],
      proven: "Consistent average ROAS with efficient CPC and CPL bands across platforms.",
    },
  },
  {
    id: "ooh",
    emblem: "OOH",
    title: "Out-of-Home Campaigns",
    label: "Out-of-Home Campaigns",
    dateRange: "",
    tag: "",
    copy: "Worked on Times Square billboards, NYC taxi ads, LED trucks, and large-scale physical media placements tied to digital funnels.",
    metrics: [
      { v: "$1.2M+", l: "high-ticket revenue" },
      { v: "Times Square", l: "placements" },
      { v: "NYC taxi", l: "campaigns" },
    ],
    tone: "dark",
    detail: {
      paragraphs: [
        "OOH sat in the same acquisition story as digital: URLs, creative, and follow-up flows matched the placement.",
      ],
      expandedBullets: ["Times Square boards", "Taxi and transit", "LED trucks and routes", "Landing pages and CRM handoff"],
      tools: ["OOH vendors", "Meta Ads", "X Ads", "Landing page systems"],
      proven: "Physical media tied to digital funnels with seven-figure high-ticket revenue in relevant reporting windows.",
    },
  },
];

export const WORK_LEGACY = [];

/** Tools page: grouped stack */
export const TOOLS_BY_CATEGORY = [
  {
    id: "analytics",
    title: "Analytics",
    glyph: "◎",
    items: ["SQL", "GBQ", "Looker", "Power BI", "Python"],
  },
  {
    id: "paid",
    title: "Paid Acquisition",
    glyph: "◇",
    items: ["Meta Ads", "TikTok Ads", "Google Ads", "X Ads"],
  },
  {
    id: "ai",
    title: "AI Workflows",
    glyph: "✦",
    items: ["AI landing page systems", "Outbound automation", "Prompt workflows", "Creative testing workflows"],
  },
  {
    id: "creator",
    title: "Creator Systems",
    glyph: "▶",
    items: ["Clip pipelines", "Creator distribution systems", "Hook frameworks", "Content cadence systems"],
  },
];

/** Flat list for legacy / AI context */
export const TOOLS_AND_SYSTEMS = TOOLS_BY_CATEGORY.flatMap((c) => c.items);

/** Legacy: capabilities grid can still import */
export const CAPABILITIES = TOOLS_AND_SYSTEMS.map((name, i) => ({
  id: `t-${i}`,
  name,
  blurb: "Used across analytics, paid acquisition, and growth projects.",
}));

export const INTEL_PROMPTS = ["MarketWise metrics?", "How to contact?", "Minute Growth scope?"];

export const MOCK_AI_DEFAULT =
  "Ask about roles, metrics, tools, or contact. Answers use Nick's resume and project data only.";

export const AI_ASSISTANT_INTRO =
  "Career, campaigns, tools, metrics, and contact only. Short factual answers from Nick's data.";

export const PHONE_DISPLAY = "917-618-1834";
export const PHONE_RAW = "9176181834";
export const PHONE_HREF = "tel:+19176181834";
export const EMAIL_ADDRESS = "npink@bu.edu";
export const LINKEDIN = "https://linkedin.com/in/nicholaspink";
export const EMAIL = `mailto:${EMAIL_ADDRESS}`;

const TOOLS_ANSWER = `Analytics: SQL, GBQ, Looker, Power BI, Python. Paid: Meta, TikTok, Google, and X Ads. AI workflows: landing page systems, outbound automation, prompt and creative testing workflows. Creator side: clip pipelines, distribution, hook frameworks, and cadence systems.`;

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
    return "At Minute Growth (Dec 2023 - Aug 2025) Nick ran marketing operations: peak 113x ROAS, roughly $100K-$250K+ monthly ad spend, sub-$0.10 CPC, 15,000+ personalized emails per month, 240+ accounts supported, plus creator partnerships, X trending, and OOH tied to digital funnels.";
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
    return "Nick has built paid campaigns across Meta, TikTok, Google, and X. Benchmarks include average 4.25x ROAS, $0.04-$0.08 CPC, 4-10% CTR, and sub-$10 CPL on strong units, with tests built around hooks and conversion paths.";
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
