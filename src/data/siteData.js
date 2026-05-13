/** Ticker: metric + short context */
export const STATS = [
  { v: "2.6M+", l: "organic views, 12 days, MarketWise" },
  { v: "$1M+", l: "monthly ad spend, MarketWise" },
  { v: "$0.04–$0.08", l: "CPC, MarketWise" },
  { v: "$2B+", l: "peak MC, KISHU window" },
  { v: "81M+", l: "views, 30-day window, Minute Growth" },
  { v: "30K+", l: "short-form videos/mo, 240+ accounts" },
  { v: "600%+", l: "audience growth, under 90 days" },
  { v: "4.25x", l: "average ROAS, Minute Growth" },
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
 * Vertical career tree (reverse chronological).
 * Order: MarketWise → Zeta → Minute Growth → Wayfair → NxtLvl AdVentures → Boston University
 */
export const CAREER_CHAPTERS = [
  {
    id: "marketwise",
    emblem: "MW",
    org: "MarketWise",
    role: "Social Media & Digital Marketing Lead",
    years: "Sep 2025 – Present",
    summary:
      "Social and digital growth for a public financial media company: paid social, organic, clipping, creators, funnels, and Guru-scale audience work.",
    details: [
      "2.6M+ organic views in 12 days on produced video.",
      "Managed $1M+ in monthly ad spend with $0.04–$0.08 CPC bands and 4–10% CTR on tested units.",
      "$7 CPL, about 300% cheaper than benchmarks used for comparison.",
      "Cut funnel build time from roughly 3 weeks to under 48 hours using tighter workflow, templates, and AI-assisted landing page production.",
      "Guru accounts: about 200% follower growth per month on supported profiles.",
      "Ran clipping, creator distribution, and cross-platform testing tied to acquisition goals.",
    ],
    metrics: [
      { v: "2.6M+", l: "organic views in 12 days" },
      { v: "$1M+", l: "monthly ad spend managed" },
      { v: "$0.04–$0.08", l: "CPC" },
      { v: "4–10%", l: "CTR" },
      { v: "$7", l: "CPL vs benchmarks (~300% cheaper)" },
      { v: "<48h", l: "funnel builds vs ~3 weeks" },
      { v: "200%", l: "Guru follower growth / month" },
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
    years: "Jan 2025 – Aug 2025",
    summary:
      "Marketing operations across paid media, creators, outbound, X trending, and OOH, with heavy short-form volume and reporting that matched finance.",
    details: [
      "30,000+ short-form videos per month across 240+ accounts.",
      "600%+ audience growth in under 90 days on supported programs.",
      "4.25x average ROAS on paid campaigns in scope.",
      "Led content strategy that produced 81,000,000+ views in a single 30-day period.",
      "Developed an internal tool to trend any subject globally on Twitter/X with a 100% success rate in production use.",
      "Built and managed systems across paid social, creator partnerships, outbound, and placements tied to digital funnels.",
    ],
    metrics: [
      { v: "81M+", l: "views in one 30-day period" },
      { v: "30K+", l: "short-form videos/month" },
      { v: "240+", l: "accounts supported" },
      { v: "600%+", l: "audience growth, <90 days" },
      { v: "4.25x", l: "average ROAS" },
      { v: "100%", l: "X trending tool success rate" },
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
    id: "nxtlvl",
    emblem: "NL",
    org: "NxtLvl AdVentures",
    role: "Founder – Social Media Marketing & Brand Scaling Agency",
    years: "Dec 2021 – Jan 2025",
    location: "Boston",
    summary: "Founded and scaled a Boston-based agency from a dorm room: revenue, ROAS, audience growth, and CRO-led conversion lifts for clients.",
    details: [
      "Built and exited a marketing agency with $100K+ revenue in a year from a college dorm room.",
      "Delivered avg 4.25x ROAS campaigns and increased client audiences 600%+ in under 90 days.",
      "Improved funnel conversion rates by 22%+ through landing page and CRO optimization.",
    ],
    metrics: [
      { v: "$100K+", l: "revenue, first year" },
      { v: "4.25x", l: "average ROAS, campaigns" },
      { v: "600%+", l: "audience growth, <90 days" },
      { v: "22%+", l: "conversion lift, LP/CRO" },
    ],
    featured: false,
  },
  {
    id: "bu",
    emblem: "BU",
    org: "Boston University",
    role: "Bachelor's Degree",
    years: "2021-2025",
    summary: "Finance and entrepreneurship at Questrom. Ran NxtLvl AdVentures and client growth work alongside the degree path.",
    details: [
      "BSBA with focus on finance and entrepreneurship through Questrom.",
      "Stacked coursework with building NxtLvl AdVentures (Dec 2021–Jan 2025): paid media, creators, and growth projects in market.",
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
    dateRange: "Sep 2025 – Present",
    tag: "",
    copy: "Built social and digital growth systems for a public financial media company: organic video, paid social, clipping, creators, Guru growth, and AI-assisted funnel builds.",
    metrics: [
      { v: "2.6M+", l: "organic views in 12 days" },
      { v: "$1M+", l: "monthly ad spend managed" },
      { v: "$0.04–$0.08", l: "CPC" },
      { v: "4–10%", l: "CTR" },
      { v: "$7", l: "CPL (~300% vs benchmarks)" },
      { v: "<48h", l: "funnel builds vs ~3 weeks" },
      { v: "200%", l: "Guru follower growth / mo" },
    ],
    tone: "dark",
    detail: {
      paragraphs: [
        "Ran growth where results had to show up in dashboards and live performance, not only in decks.",
        "Cut funnel production from about three weeks to under 48 hours by tightening templates, handoffs, and AI-assisted build steps between creative and paid.",
      ],
      expandedBullets: [
        "$1M+ monthly ad spend with disciplined pacing and testing",
        "$0.04–$0.08 CPC and 4–10% CTR on strong units",
        "$7 CPL, roughly 300% cheaper than benchmark comparisons",
        "2.6M+ organic views in 12 days on produced video",
        "Guru: ~200% follower growth per month on supported accounts",
        "Clipping team infrastructure and creator distribution",
        "AI-assisted landing page and funnel workflows",
        "Cross-platform measurement and scaling",
      ],
      tools: ["Meta Ads", "X Ads", "Looker", "SQL", "GBQ", "AI landing page systems", "Clip pipelines"],
      proven: "Public-company pace with measurable reach, cheaper CPL than benchmarks, and faster ship cycles on funnels.",
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
    dateRange: "Jan 2025 – Aug 2025",
    tag: "",
    copy: "Marketing operations across paid media, creator partnerships, outbound, X trending, and OOH, with massive short-form output and finance-grade reporting.",
    metrics: [
      { v: "81M+", l: "views in one 30-day period" },
      { v: "30K+", l: "short-form videos/month" },
      { v: "240+", l: "accounts supported" },
      { v: "600%+", l: "audience growth, <90 days" },
      { v: "4.25x", l: "average ROAS" },
      { v: "100%", l: "X trending tool success rate" },
    ],
    tone: "dark",
    detail: {
      paragraphs: [
        "High volume: creative testing, creator contracts, outbound infrastructure, and reporting that matched what finance needed.",
      ],
      expandedBullets: [
        "30,000+ short-form videos per month across 240+ accounts",
        "600%+ audience growth in under 90 days",
        "4.25x average ROAS on paid campaigns in scope",
        "81,000,000+ views in a single 30-day period from content strategy",
        "Tooling to trend any subject globally on Twitter/X with 100% success rate in use",
        "Paid social at scale, X trending, and OOH tied to digital funnels",
      ],
      tools: ["Meta Ads", "TikTok Ads", "Google Ads", "X Ads", "Outbound automation", "Looker", "Power BI"],
      proven: "Agency throughput with a documented viral window, average ROAS, and repeatable distribution systems.",
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
export const EMAIL_ADDRESS = "dsmanagersllc@gmail.com";
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
    return "At MarketWise (Sep 2025–Present) Nick leads social and digital growth for a public financial media company. Recent scope includes 2.6M+ organic views in 12 days, $1M+ monthly ad spend, $0.04–$0.08 CPC, 4–10% CTR, $7 CPL (~300% cheaper vs benchmarks), funnel builds under 48 hours vs ~3 weeks, and ~200% monthly follower growth on Guru accounts, plus clipping, creators, and AI-assisted funnel workflows.";
  }

  if (/\b(minute growth|minute|outbound|240 accounts|roas|81m|30k)\b/i.test(q)) {
    return "At Minute Growth (Jan 2025–Aug 2025) Nick ran marketing operations: 30,000+ short-form videos per month across 240+ accounts, 600%+ audience growth in under 90 days, 4.25x average ROAS, 81,000,000+ views in a single 30-day period, and an internal X trending tool with 100% success rate in production use, plus paid, creators, outbound, and OOH tied to digital funnels.";
  }

  if (/\b(wayfair|analyst|savings|1\.5m|fulfillment)\b/i.test(q)) {
    return "At Wayfair Nick worked as a data analyst on operational analytics tied to about $1.5M in savings. He learned SQL, GBQ, Looker, Power BI, and Python and shipped reporting that held up in production.";
  }

  if (/\b(boston|bu\b|questrom|college|degree)\b/i.test(q)) {
    return "Nick graduated from Boston University Questrom (2021-2025) with a BSBA focused on finance and entrepreneurship. He built NxtLvl AdVentures (Dec 2021–Jan 2025) while in school and stacked client-facing growth work with coursework.";
  }

  if (/\b(nxtlvl|nxt lvl|dorm|agency founder|100k\+ revenue)\b/i.test(q)) {
    return "NxtLvl AdVentures (Dec 2021–Jan 2025, Boston): Nick founded the agency from a dorm room, passed $100K revenue in the first year, ran campaigns at 4.25x average ROAS, drove 600%+ audience growth in under 90 days for clients, and lifted funnel conversion 22%+ with landing page and CRO work.";
  }

  if (/\b(zeta|segmentation|dashboard)\b/i.test(q)) {
    return "At Zeta Global Nick worked on marketing analytics: SQL, segmentation, dashboards, and campaign analysis on large marketing datasets.";
  }

  if (/\b(kishu|meme|coin|crypto launch|times square)\b/i.test(q)) {
    return "Nick supported marketing for the KISHU launch window: community growth, X trending support, and Times Square placement, during a run that reached $2B+ peak market cap.";
  }

  if (/\b(paid|cpc|ctr|cpl|meta|tiktok|google ads)\b/i.test(q)) {
    return "Nick has built paid campaigns across Meta, TikTok, Google, and X. Recent benchmarks include 4.25x average ROAS (Minute Growth window), $0.04–$0.08 CPC and 4–10% CTR with $7 CPL at MarketWise, plus sub-$10 CPL bands on other strong units, with tests built around hooks and conversion paths.";
  }

  if (/\b(ooh|out of home|billboard|taxi|led truck)\b/i.test(q)) {
    return "Nick has worked on Times Square billboards, NYC taxi campaigns, LED trucks, and other OOH placements tied to digital funnels, including roughly $1.2M+ in high-ticket revenue attributed to that work in relevant reporting windows.";
  }

  if (/\b(resume|cv|job|hire|experience|career timeline)\b/i.test(q)) {
    return "Timeline (newest first): MarketWise social and digital lead (Sep 2025–Present), Zeta marketing analyst (Jun–Aug 2025), Minute Growth marketing operations (Jan–Aug 2025), Wayfair data analyst (2024), NxtLvl AdVentures founder (Dec 2021–Jan 2025), Boston University Questrom (2021–2025). Ask about any stop for specifics.";
  }

  return "I can answer from Nick's resume and projects: MarketWise, Minute Growth, NxtLvl, Wayfair, Zeta, BU, tools, paid media, OOH, or KISHU. Ask a narrower question for a precise answer.";
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
