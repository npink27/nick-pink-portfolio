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

export const INTEL_PROMPTS = [
  "Six-figure Times Square billboards?",
  "$KISHU to $2B market cap?",
  "Trend any topic on X at 100% success?",
  "81M Instagram views in one month?",
];

export const MOCK_AI_DEFAULT =
  "Ask about MarketWise, Minute Growth, OOH, KISHU, paid media, AI systems, Zeta, Wayfair, or NxtLvl. I pull from Nick's experience and numbers on this site.";

export const AI_ASSISTANT_INTRO =
  "Ask about campaigns, metrics, channels, or career moves. Answers are grounded in Nick's work. Want to collaborate? Use the Contact section when you're ready.";

export const PHONE_DISPLAY = "917-618-1834";
export const PHONE_RAW = "9176181834";
export const PHONE_HREF = "tel:+19176181834";
export const EMAIL_ADDRESS = "npink@bu.edu";
export const LINKEDIN = "https://linkedin.com/in/nicholaspink";
export const SITE_URL = "https://www.nickpink.com";
export const EMAIL = `mailto:${EMAIL_ADDRESS}`;

const TOOLS_ANSWER = `Stack highlights: AI and automation (GPT-style workflows, prompt engineering, N8N, AI outbound, AI funnel building, content generation pipelines). Growth (Meta, TikTok, Google, influencer and celebrity deals, UGC, viral content systems, CRO). Data (SQL including Hive and BigQuery, Tableau, Power BI, Excel, predictive modeling). Creative (short-form pipelines, Krea, Photoshop). Nick is based in New York and Miami and works remote.`;

const CONTACT_TAIL =
  " Want to work together? Use the Contact section on this site (LinkedIn, copy email, phone) or reach out on LinkedIn.";

function withContact(body) {
  return `${body.trim()}${CONTACT_TAIL}`;
}

export function getMockAiReply(text) {
  const q = text.trim().toLowerCase();
  if (!q) return MOCK_AI_DEFAULT;

  if (
    /\b(sex|porn|nsfw|nude|naked)\b/i.test(q) ||
    /\b(roleplay|rp\b|pretend you are|pretend to be|write a poem|tell me a joke)\b/i.test(q) ||
    /\b(trump|biden|election 20|republican|democrat|politic)\b/i.test(q) ||
    /\b(religion|pray for me|is god)\b/i.test(q)
  ) {
    return "That is outside what this assistant covers. Ask about Nick's marketing work, campaigns, metrics, or how to reach him through the Contact section.";
  }

  if (/^(hi|hey|hello|yo|sup)\b[!.\s]*$/i.test(q.trim())) {
    return withContact(
      "Hi. You can ask about six-figure Times Square and taxi OOH, the $KISHU run, X trending tooling, 81M+ organic IG views in a month, seven-figure paid spend at strong CPC/CTR, MarketWise corporate social growth, Minute Growth operations, Zeta analytics, Wayfair savings work, or NxtLvl from the dorm room.",
    );
  }

  if (/\b(contact|email|phone|linkedin|reach (him|nick)|dm|hire|work together|collab)\b/i.test(q)) {
    return `Nick: New York, Miami, remote. Phone ${PHONE_DISPLAY}. Email ${EMAIL_ADDRESS}. LinkedIn: linkedin.com/in/nicholaspink. Site: ${SITE_URL.replace("https://", "")}. Easiest next step: open the Contact section on this site.`;
  }

  if (/\b(what tools|your stack|technical skills|n8n|automation stack|gpt workflow|prompt engineer|tableau|hive|bigquery|power\s*bi|krea|photoshop)\b/i.test(q)) {
    return withContact(TOOLS_ANSWER);
  }

  /* OOH / billboards — before KISHU so "Times Square" is not swallowed by crypto matcher */
  if (
    /\b(six[\s-]*figure|6[\s-]*figure|billboards?|times square|taxi ads?|ooh|out[\s-]of[\s-]home|led truck|high[\s-]ticket|1\.2\s*m|1200000|seven[\s-]*figure|seven figure)\b/i.test(
      q,
    ) ||
    (/\b(million|revenue)\b/i.test(q) && /\b(billboard|taxi|square|ooh)\b/i.test(q))
  ) {
    return withContact(
      "Nick has run six-figure Times Square billboard placements and NYC taxi (and related) OOH tied to digital funnels. At Minute Growth that OOH plus integrated funnels helped drive $1,200,000+ in high-ticket revenue in the reporting window he cites. Creative, routing, and measurement were treated as one system, not a stunt separate from conversion.",
    );
  }

  if (/\b(kishu|\$kishu|meme coin|shiba|2\s*billion|2b\+|\$2b|under 60 days|60 days|crypto launch|market cap)\b/i.test(q)) {
    return withContact(
      "Nick pushed marketing for $KISHU while at Minute Growth. The project passed about $2B in market cap within roughly two months off coordinated community, social momentum, placements, and paid support. It is the kind of compressed launch window where every channel has to line up.",
    );
  }

  if (
    /\b(trend(ing)?|twitter|x\.com|\bx\b).*\b(global|globally|worldwide|world|100%|any subject|any topic)\b/i.test(q) ||
    /\b100%\s*success\b/i.test(q) ||
    /\btrend any\b/i.test(q) ||
    /\bx trending\b/i.test(q)
  ) {
    return withContact(
      "Nick built internal tooling at Minute Growth to trend subjects globally on Twitter/X. In his materials he reports a 100% success rate across multiple clients and years when that system was used as designed. It pairs creative and ops discipline with how X surfaces topics.",
    );
  }

  if (/\b81\s*m|81000000|81 million|eighty[\s-]one million|instagram views|organic views.*month|single month|30 day|30-day\b/i.test(q)) {
    return withContact(
      "At Minute Growth Nick led content strategy that produced 81,000,000+ organic Instagram views for a client in a single 30-day period, alongside 30,000+ short-form videos per month across 240+ accounts and other growth programs.",
    );
  }

  if (/\b(marketwise|mktw|nasdaq:\s*mktw|corporate instagram|instagram impressions|net followers|1028%|855%|163%|guru)\b/i.test(q)) {
    return withContact(
      "At MarketWise (NASDAQ: MKTW), Nick scaled corporate Instagram in one quarter with about +163% impressions, +855% engagements, and +1,028% net followers. He also engineered AI-powered clipping that drove 2.6M+ organic views in 12 days, ran paid frameworks around $0.04–$0.08 CPC and 4–10% CTR with sub-$10 CPL while managing $1M+ monthly ad spend, cut funnel build time from three weeks to under 48 hours, and scaled Guru accounts around 200% follower growth per month with hook frameworks and SOPs.",
    );
  }

  if (
    /\b(minute growth|minute\b|miami|hybrid|243%|15[\s,]?000|15k emails|250k|100k.*spend|celebrit|25m|500k|25k|influencer|30[\s,]?000.*video|short[\s-]form)\b/i.test(
      q,
    )
  ) {
    return withContact(
      "At Minute Growth (Miami, hybrid, Jan–Aug 2025) Nick ran marketing operations: $KISHU push tied to a multi-billion-dollar market cap window, an AI-driven outbound system doing 15,000+ personalized emails per month with about 243% lift in client acquisition he cites, $100K–$250K+ monthly ad spend on Meta/TikTok/Google at about 4.25x ROAS with sub-$0.10 CPC and 8%+ CTRs on strong units, $1.2M+ high-ticket revenue from OOH plus digital funnels, 30,000+ short-form videos per month across 240+ accounts, creator growth from roughly 25K to 500K+ followers in under four months plus celebrities with 25M+ IG followers, the 81M+ views month, and the global X trending tool at 100% success in production use.",
    );
  }

  if (/\b(zeta|nyse:\s*zeta|hive|tableau|sftp|qbr|predictive|10k|150k|media portfolio)\b/i.test(q)) {
    return withContact(
      "At Zeta Global (NYSE: ZETA, NYC contract, Jun–Aug 2025) Nick analyzed roughly $10K–$150K+ monthly media portfolios with SQL on Hive plus Tableau and BI tools, led segmentation across millions of records, built predictive views on underperforming segments that fed QBR-level decisions, and shipped SQL SOPs plus large SFTP pipelines for cross-team analytics access.",
    );
  }

  if (/\b(wayfair|returns|incidents?|sla|1\.5\s*m|cost savings|resolution rate)\b/i.test(q)) {
    return withContact(
      "At Wayfair (Jun–Dec 2024, Boston) Nick worked Global Returns and Incidents: workflow redesigns tied to $1.5M+ annual cost savings, about 100% resolution rate across incident pipelines and better SLA performance, and policy frameworks that cut operational errors globally. He self-taught SQL and BigQuery to expand into analytics systems.",
    );
  }

  if (/\b(boston|bu\b|questrom|college|degree)\b/i.test(q)) {
    return withContact(
      "Nick graduated Boston University Questrom (2021–2025) with a BSBA focused on finance and entrepreneurship. He built NxtLvl AdVentures (Dec 2021–Jan 2025) while in school and stacked client growth work with coursework.",
    );
  }

  if (/\b(nxtlvl|nxt lvl|dorm|agency founder|100k\+ revenue|exited)\b/i.test(q)) {
    return withContact(
      "NxtLvl AdVentures (Boston, Dec 2021–Jan 2025): Nick founded a social and brand scaling agency from his dorm, passed $100K+ revenue in a year, delivered about 4.25x average ROAS campaigns, grew client audiences 600%+ in under 90 days, and lifted funnel conversion 22%+ with landing page and CRO work.",
    );
  }

  if (/\b(paid|cpc|ctr|cpl|meta ads|tiktok ads|google ads|seven[\s-]*figure.*(ad|spend|campaign)|under \$?0\.10|0\.10.*cpc|5%|five percent.*ctr)\b/i.test(q)) {
    return withContact(
      "Nick has run seven-figure-class paid programs with disciplined testing. MarketWise work sits around $0.04–$0.08 CPC, 4–10% CTR, and sub-$10 CPL with $1M+ monthly spend. Minute Growth cited roughly $100K–$250K+ monthly spend at about 4.25x ROAS, sub-$0.10 CPC, and 8%+ CTRs on strong units. Hooks, landing paths, and reporting stay tied together so finance can trust the numbers.",
    );
  }

  if (/\b(resume|cv|job|hire|experience|career timeline|who is nick|background)\b/i.test(q)) {
    return withContact(
      "Reverse-chronological: MarketWise social and digital lead (Sep 2025–Present, remote). Zeta marketing analyst contract (Jun–Aug 2025, NYC). Minute Growth marketing operations (Jan–Aug 2025, Miami hybrid). Wayfair data analyst (2024, Boston). NxtLvl founder (2021–2025 window, Boston). BU Questrom (2021–2025). Ask about any chapter for tactics and metrics.",
    );
  }

  if (/\b(this site|your site|nickpink|ai agent|built a website|deep dive)\b/i.test(q)) {
    return withContact(
      "You are on Nick's portfolio site. This assistant is a lightweight layer on top of the same career story: campaigns, metrics, and how to reach him. For the full picture, read Work and Career and use Contact when you want to move to a conversation.",
    );
  }

  if (/\b(tell me about|what about|explain|describe|how did|why did)\b/i.test(q)) {
    return withContact(
      "Pick a lane and I will go deeper: MarketWise corporate IG and paid scaling, Minute Growth ($KISHU, OOH revenue, outbound, short-form volume, 81M view month, X trending tool), Zeta analytics, Wayfair savings and incidents, NxtLvl dorm-room agency, or OOH and billboards. The Contact section is there when you want to talk business.",
    );
  }

  return withContact(
    "I can go deep on MarketWise (IG growth, clipping, $1M+ spend, CPL/CPC/CTR, Guru, sub-48h funnels), Minute Growth ($KISHU, OOH and seven-figure high-ticket, outbound and 243% acquisition lift, 30K+ videos/mo, 81M IG month, X trending at 100%), Zeta (Hive SQL, Tableau, segmentation, predictive, SFTP), Wayfair ($1.5M+ savings, 100% incident resolution), NxtLvl ($100K+ year-one revenue, ROAS and CRO), tools (N8N, GPT workflows, Krea, paid stack), or billboards and Times Square. Ask using plain language.",
  );
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
