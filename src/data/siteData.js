/** Ticker */
export const STATS = [
  { v: "2.6M+", l: "views · 12d" },
  { v: "$2B+", l: "KISHU peak" },
  { v: "17.5M", l: "TikTok campaign" },
  { v: "4.25×", l: "ROAS · Minute" },
  { v: "15K+", l: "emails / mo" },
  { v: "$0.04-$0.08", l: "CPC bands" },
  { v: "140K+", l: "FB views · 2wk" },
  { v: "$1.5M+", l: "Wayfair savings" },
];

export const HERO_LIVE_METRICS = STATS;

export const PROOF_TILES = HERO_LIVE_METRICS;

export const CLIENTS = [
  { name: "Morgan & Morgan", color: "#f5f0eb" },
  { name: "Buffalo Wild Wings", color: "#E8A000" },
  { name: "Rumble", color: "#85C742" },
  { name: "Kick", color: "#53FC18" },
  { name: "Fashion Nova", color: "#ffb8d4" },
  { name: "$KISHU", color: "#ffb8d4" },
  { name: "MarketWise", color: "#ffb8d4" },
];

/** Immersive career chapters (order: school through current) */
export const CAREER_CHAPTERS = [
  {
    id: "bu",
    theme: "bu",
    org: "Boston University",
    role: "BSBA, Finance + Entrepreneurship",
    years: "2021-2024",
    cardTitle: "Boston University",
    preview: "Questrom. NxtLvl started in a dorm. Real clients before the degree mattered.",
    degree: "BSBA, Finance + Entrepreneurship",
    paragraphs: [
      "Boston University gave me the foundation. The internet gave me the real education.",
      "Started NxtLvl from a dorm room while studying finance and entrepreneurship at Questrom.",
      "First clients came from walking around Boston businesses in person.",
      "Built something real before graduation.",
    ],
    metrics: [],
    featured: false,
  },
  {
    id: "nxtlvl",
    theme: "nxtlvl",
    org: "NxtLvl Adventures",
    role: "Founder",
    years: "Dec 2023 - Jan 2025",
    cardTitle: "NxtLvl Adventures",
    preview: "Cold outreach, internet instincts, six figures fast, exit by acquisition.",
    degree: null,
    paragraphs: [
      "Started in college. Built through cold outreach, internet instincts, and figuring things out in real time.",
      "Scaled the agency past six figures in under a year.",
      "Worked across paid social, influencer campaigns, crypto launches, viral distribution, and guerrilla marketing systems.",
      "Built campaigns that reached millions organically.",
      "Eventually exited through acquisition.",
    ],
    metrics: [
      { v: "Mid 6 figs", l: "revenue" },
      { v: "17.5M", l: "TikTok views · one campaign" },
      { v: "20+", l: "client accounts" },
      { v: "Multi", l: "viral campaign wins" },
    ],
    featured: false,
  },
  {
    id: "wayfair",
    theme: "wayfair",
    org: "Wayfair",
    role: "Data Analyst",
    years: "Jun 2024 - Dec 2024",
    cardTitle: "Wayfair",
    preview: "Self-taught SQL and GBQ. Fulfillment analytics. Roughly $1.5M in savings tied to workflows.",
    degree: null,
    paragraphs: [
      "Wayfair forced me to become analytical fast.",
      "Taught myself SQL, GBQ, Looker, Power BI, and Python while working full time.",
      "Worked on fulfillment-center incident prevention systems and operational analytics.",
      "Built workflows that contributed to roughly $1.5M in operational savings.",
      "This was where I learned systems beat effort.",
    ],
    metrics: [
      { v: "~$1.5M", l: "operational savings tied to work" },
      { v: "SQL", l: "self-taught to prod" },
    ],
    featured: false,
  },
  {
    id: "minute",
    theme: "minute",
    org: "Minute Growth",
    role: "Marketing Operations Manager",
    years: "Jan 2025 - Aug 2025",
    cardTitle: "Minute Growth",
    preview: "Pure volume. Paid, creators, OOH, X trending, AI outbound at real scale.",
    degree: null,
    paragraphs: [
      "This was pure execution volume.",
      "Built outbound systems. Ran paid traffic. Managed creators. Handled scaling problems in real time.",
      "Worked with Morgan & Morgan, Buffalo Wild Wings, Rumble, Kick, Fashion Nova.",
      "Managed six-figure ad spend, creator partnerships, Times Square placements, Twitter trending campaigns, and AI outbound infrastructure.",
      "Built systems sending 15,000+ personalized emails monthly.",
    ],
    metrics: [
      { v: "4.25×", l: "ROAS" },
      { v: "Sub-$0.10", l: "CPC" },
      { v: "15K+", l: "outbound emails / month" },
    ],
    featured: false,
  },
  {
    id: "zeta",
    theme: "zeta",
    org: "Zeta Global",
    role: "Marketing Analyst",
    years: "Jun 2025 - Aug 2025",
    cardTitle: "Zeta Global",
    preview: "Enterprise marketing datasets. Segmentation, dashboards, how bigco pipes actually run.",
    degree: null,
    paragraphs: [
      "Joined Zeta to understand how enterprise marketing infrastructure actually works.",
      "Worked with SQL, segmentation, analytics, dashboards, and large-scale marketing datasets.",
      "Exposure to high-level marketing analytics inside a real AI marketing company.",
      "This sharpened the analytical side of how I think about growth.",
    ],
    metrics: [],
    featured: false,
  },
  {
    id: "marketwise",
    theme: "marketwise",
    org: "MarketWise",
    role: "Social + Digital Marketing Lead",
    years: "Sep 2025 - Present",
    cardTitle: "MarketWise",
    preview: "Public company. Creator engine. Clips, paid, AI landing pages, sub-48h ship cycles.",
    degree: null,
    paragraphs: [
      "MarketWise was the first place I could prove these systems inside a public company.",
      "Built a scalable social distribution engine designed for long-term investor acquisition.",
      "Turned creators from dead reach into millions of views in days.",
      "Built clipping systems, paid acquisition systems, AI landing-page workflows, and creator growth infrastructure.",
      "Reduced landing-page production from about 3 weeks to under 48 hours.",
      "Built plug-and-play systems capable of scaling personalities into full creator brands.",
    ],
    metrics: [
      { v: "2.6M+", l: "views in 12 days" },
      { v: "500%+", l: "IG growth" },
      { v: "1000%+", l: "X impressions lift" },
      { v: "10%", l: "CTRs on strong units" },
      { v: "$0.04-$0.08", l: "CPC bands" },
      { v: "140K+", l: "Facebook views in 2 weeks" },
    ],
    closing: "The real asset was not any single metric. It was building a repeatable machine.",
    featured: true,
  },
];

/** Work case studies + immersive detail */
export const CASE_STUDIES = [
  {
    id: "marketwise",
    title: "MarketWise",
    tag: "NASDAQ · MKTW · clipping + paid + AI LPs",
    copy: "Public-market media. Creator clips, paid acquisition, and landing pages shipped in under 48 hours when the window mattered.",
    metrics: [
      { v: "2.6M+", l: "organic views · 12d" },
      { v: "500%+", l: "IG growth" },
      { v: "<48h", l: "LP turnaround vs weeks" },
    ],
    tone: "dark",
    detail: {
      hooks: ["Clipping ops at cadence", "Paid to amplify winners", "AI-assisted LP factory"],
      paragraphs: [
        "Built distribution so creators could go from dead reach to millions of views in days.",
        "Stack included clipping discipline, paid acquisition, and repeatable AI landing-page workflows tied to acquisition goals.",
      ],
    },
  },
  {
    id: "kishu",
    title: "KISHU",
    tag: "Crypto launch",
    copy: "One of the fastest meme coin runs of the cycle. Feed pressure plus venues plus community in parallel.",
    metrics: [
      { v: "$2B+", l: "peak market cap" },
      { v: "Global", l: "trending velocity" },
      { v: "Times Square", l: "OOH placement" },
    ],
    tone: "pink",
    detail: {
      hooks: ["Launch-night coordination", "OOH + feed alignment", "Liquidity follows attention if you engineer both"],
      paragraphs: [
        "Helped scale a violent window where the timeline and the street had to read the same story the same night.",
      ],
    },
  },
  {
    id: "x-trending",
    title: "X trending",
    tag: "$SAMO · $LINEO · multi-region",
    copy: "Rank as a surface. Same-night trending stacks across countries when the clock started.",
    metrics: [
      { v: "#1-#6", l: "multi-country placements" },
      { v: "Same night", l: "DE UK BR US TR IN" },
    ],
    tone: "charcoal",
    detail: {
      hooks: ["Volume + timing", "Geo windows", "Accounts and cadence under pressure"],
      paragraphs: [
        "Trending is logistics. Built runs that could hold rank against stadium-tier noise when it had to ship in hours.",
      ],
    },
  },
  {
    id: "minute",
    title: "Minute Growth",
    tag: "OOH · creators · paid",
    copy: "Six-figure spend, taxi networks, creators under contract, trending campaigns, outbound that reconciled to pipeline.",
    metrics: [
      { v: "240+", l: "accounts" },
      { v: "15K+", l: "monthly content assets" },
      { v: "6-fig", l: "OOH placements" },
    ],
    tone: "dark",
    detail: {
      hooks: ["OOH as inventory", "Creators at contract scale", "Paid + organic feedback loop"],
      paragraphs: [
        "Ran paid, clipping, OOH, and outbound where the scoreboard was spend, reach, and revenue, not slides.",
      ],
    },
  },
  {
    id: "paid",
    title: "Paid acquisition",
    tag: "Meta · TikTok · Google · X",
    copy: "Bought reach like inventory. Optimized on CPC, CTR, CPL, ROAS, and what happened after the click.",
    metrics: [
      { v: "113×", l: "ROAS · historical peak" },
      { v: "$0.04-$0.08", l: "CPC bands" },
      { v: "4-10%", l: "CTR on strong units" },
    ],
    tone: "charcoal",
    detail: {
      hooks: ["Hooks tested fast", "Creative volume", "Measurement that survives finance"],
      paragraphs: [
        "Built paid systems around speed and distribution math. If the metric did not move in the ad account, it did not count as strategy.",
      ],
    },
  },
  {
    id: "ai-outbound",
    title: "AI + outbound",
    tag: "Throughput systems",
    copy: "Personalized outbound at volume, QA gates, and automations that deleted calendar time instead of adding theater.",
    metrics: [
      { v: "15K+", l: "personalized emails / mo" },
      { v: "<48h", l: "funnel builds when stacked" },
    ],
    tone: "dark",
    detail: {
      hooks: ["Mail at scale with guardrails", "Funnel factory", "Clip pipelines"],
      paragraphs: [
        "If it did not increase output per head or cut ship time, it did not get wired into prod.",
      ],
    },
  },
];

export const WORK_LEGACY = [];

export const CAPABILITIES = [
  { id: "ai", name: "AI workflows", blurb: "Agents, QA, outbound, clip ops. Fewer handoffs. Same bar for sharp." },
  { id: "lp", name: "Landing-page systems", blurb: "Ship fast. Test fast. Wire tracking so finance can read it." },
  { id: "paid", name: "Paid acquisition", blurb: "Meta, TikTok, Google, X. CPC, CTR, CPL, ROAS. Post-click reality." },
  { id: "content", name: "Content pipelines", blurb: "Volume that compounds. Editors, hooks, cadence, posting discipline." },
  { id: "x", name: "X infrastructure", blurb: "Trending as logistics. Accounts, timing, geo, languages." },
  { id: "creators", name: "Creator distribution", blurb: "Scale personalities into brands when the feed is the channel." },
  { id: "sql", name: "SQL + analytics", blurb: "GBQ, Looker, Python when the answer has to hit money or minutes." },
  { id: "auto", name: "Automation systems", blurb: "Orchestration that removes calendar, not adds dashboards." },
  { id: "outreach", name: "Outreach engines", blurb: "Cold and warm at volume with deliverability and creative discipline." },
  { id: "crypto", name: "Crypto marketing", blurb: "Launches where attention and liquidity share one clock." },
];

export const INTEL_PROMPTS = [
  "What did Nick build at MarketWise?",
  "How did Nick scale clipping teams?",
  "What tools does Nick use?",
  "How can I contact Nick?",
];

export const MOCK_AI_DEFAULT = "Ask a direct question. This is a demo layer with short answers.";

export const PHONE_DISPLAY = "917-618-1834";
export const PHONE_HREF = "tel:+19176181834";
export const EMAIL_ADDRESS = "npink@bu.edu";
export const LINKEDIN = "https://linkedin.com/in/nicholaspink";
export const EMAIL = `mailto:${EMAIL_ADDRESS}`;

export function getMockAiReply(text) {
  const q = text.trim().toLowerCase();
  if (!q) return MOCK_AI_DEFAULT;
  if (/contact|phone|email|reach|call|dm|linkedin/i.test(q)) {
    return `Phone ${PHONE_DISPLAY}. Email ${EMAIL_ADDRESS}. LinkedIn: ${LINKEDIN.replace("https://", "")}`;
  }
  if (/tool|stack|sql|looker|gbq|python|meta|tiktok/i.test(q)) {
    return "SQL, GBQ, Looker, Power BI, Python when analytics has to land in savings or revenue. Paid stack is whatever clears CPX for the account. Creative ops: editors, hooks, cadence, clip pipelines.";
  }
  if (/marketwise|clip|mktw|scale|views/i.test(q)) {
    return "At MarketWise: clipping systems, paid acquisition, AI landing-page workflows, creator growth. Cut LP production from about three weeks to under 48 hours. 2.6M+ organic views in twelve days on strong runs.";
  }
  if (/clip|team|editor|cadence/i.test(q)) {
    return "Scaling clips is throughput: hook testing, editor bench, posting cadence, paid to push what already wins. Rank follows ops, not vibes.";
  }
  if (/kishu|meme|mc|2b|coin/i.test(q)) {
    return "Parallel lanes: community, venues, feed pressure. Same-night coherence between OOH and the timeline.";
  }
  if (/paid|organic|together/i.test(q)) {
    return "Organic exposes hooks. Paid buys the window before the moment goes cold.";
  }
  if (/trend|twitter|x\b|hashtag/i.test(q)) {
    return "Accounts, cadence, geo windows, languages, and knowing what the timeline is already chewing on.";
  }
  if (/ooh|times|square|taxi/i.test(q)) {
    return "OOH is inventory: routes, screens, dates. Brief with geography and dates if you want a real quote.";
  }
  return MOCK_AI_DEFAULT;
}

/** Legacy exports for older imports */
export const WORK_CATEGORIES = [];
export const CAREER_RAIL = [];
export const TIMELINE = [];
export const SERVICES_PILLARS = CAPABILITIES.map((c) => ({ id: c.id, n: c.name, outcome: c.blurb, hot: false }));

export const OOH = [
  { label: "$KISHU", sub: "Times Square, NYC", bg: "linear-gradient(145deg,#1a0a12,#0a0a0a)" },
  { label: "Minute Growth", sub: "NYC taxi network", bg: "linear-gradient(145deg,#0a1210,#050505)" },
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
