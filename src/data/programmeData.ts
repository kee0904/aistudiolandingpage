export type NicheId = 'creators' | 'coaches' | 'business' | 'marketers';
export type FormatId = 'myth-buster' | 'numbers-breakdown' | 'visual-tutorial';
export type PlanId = 'one-time' | 'payment-plan';

export interface AudienceProfile {
  id: NicheId;
  label: string;
  headlineNote: string;
  primaryGoal: string;
  weeklyFocus: string;
}

export interface ProcessStep {
  number: string;
  title: string;
  shortDesc: string;
  detail: string;
  accent: 'mint' | 'lavender' | 'butter' | 'blush';
}

export interface FormatTemplate {
  id: FormatId;
  code: string;
  name: string;
  retentionStructure: {
    phase: string;
    window: string;
    direction: string;
  }[];
  medianViews: string;
  avgWatchThrough: string;
}

export interface DeliverableItem {
  id: string;
  index: string;
  title: string;
  subtitle: string;
  description: string;
  highlights: string[];
  tone: 'mint' | 'lavender' | 'butter' | 'blush' | 'surface' | 'obsidian';
  span: 'wide' | 'standard';
}

export interface CaseStudy {
  id: string;
  name: string;
  role: string;
  organization: string;
  avatar: string;
  beforeMetric: string;
  formatApplied: string;
  outcomeMetric: string;
  timeframe: string;
  quote: string;
  tone: 'mint' | 'lavender' | 'butter';
}

export interface MomentumMonth {
  month: string;
  shortLabel: string;
  viewsLabel: string;
  viewsCount: number;
  barHeightPct: number;
  highlight?: boolean;
}

export interface FaqItem {
  id: string;
  question: string;
  answer: string;
}

export const AUDIENCE_PROFILES: AudienceProfile[] = [
  {
    id: 'creators',
    label: 'Creators & Influencers',
    headlineNote: 'Turn inconsistent spikes into repeatable 100K–1M+ view formats.',
    primaryGoal: 'Scale reach, build loyal audience retention, and unlock brand sponsorships.',
    weeklyFocus: '2 proven format adaptations + Friday coach retention teardown',
  },
  {
    id: 'coaches',
    label: 'Coaches & Consultants',
    headlineNote: 'Attract high-intent coaching clients without daily dancing or trend-chasing.',
    primaryGoal: 'Establish category authority and convert viewers into booked strategy calls.',
    weeklyFocus: 'Authority myth-buster scripts + offer-bridge callouts',
  },
  {
    id: 'business',
    label: 'Business Owners',
    headlineNote: 'Build an organic acquisition engine that lowers paid customer acquisition cost.',
    primaryGoal: 'Turn founder insights and behind-the-scenes proof into inbound leads.',
    weeklyFocus: 'Founder-led format templates + rapid smartphone filming workflows',
  },
  {
    id: 'marketers',
    label: 'Social Media Marketers',
    headlineNote: 'Deliver reliable view growth across client accounts using a documented system.',
    primaryGoal: 'Replace guesswork brainstorming with a repeatable format testing pipeline.',
    weeklyFocus: 'Client-ready AI prompt packs + repeatable format libraries',
  },
];

export const HERO_MOMENTUM_MONTHS: MomentumMonth[] = [
  { month: 'April', shortLabel: 'Ap', viewsLabel: '+210K', viewsCount: 210000, barHeightPct: 42 },
  { month: 'May', shortLabel: 'My', viewsLabel: '+485K', viewsCount: 485000, barHeightPct: 58 },
  { month: 'June', shortLabel: 'Ju', viewsLabel: '+890K', viewsCount: 890000, barHeightPct: 74 },
  { month: 'July', shortLabel: 'Jl', viewsLabel: '+1.42M', viewsCount: 1424000, barHeightPct: 92, highlight: true },
  { month: 'August', shortLabel: 'Au', viewsLabel: '+1.18M', viewsCount: 1180000, barHeightPct: 81 },
  { month: 'September', shortLabel: 'Se', viewsLabel: '+1.64M', viewsCount: 1640000, barHeightPct: 96 },
];

export const SIX_STEP_LOOP: ProcessStep[] = [
  {
    number: '01',
    title: 'Find a proven viral format',
    shortDesc: 'Select a battle-tested video structure from the Format Finder™ Library.',
    detail: 'Stop inventing concepts from scratch. Browse 150+ categorized short-form structures already proven to hold attention past the critical 3-second mark.',
    accent: 'mint',
  },
  {
    number: '02',
    title: 'Adapt it with AI prompts',
    shortDesc: 'Run our niche-specific AI tool to translate the hook and beats to your topic.',
    detail: 'Paste your industry, offer, or topic into our custom Format Finder™ AI prompts to generate tailored opening hooks, visual cues, and spoken scripts in minutes.',
    accent: 'lavender',
  },
  {
    number: '03',
    title: 'Watch step-by-step tutorials',
    shortDesc: 'Follow concise production walkthroughs for framing, lighting, and pacing.',
    detail: 'Every format includes a focused filming and editing breakdown showing exact shot angles, cut timing, and on-screen text placement.',
    accent: 'butter',
  },
  {
    number: '04',
    title: 'Submit for expert feedback',
    shortDesc: 'Get timestamped video reviews from coaches before you hit publish.',
    detail: 'Upload your cut to our review queue and receive actionable notes on hook delivery, visual energy, and drop-off fixes before it goes live.',
    accent: 'blush',
  },
  {
    number: '05',
    title: 'Publish across your channels',
    shortDesc: 'Ship cleanly to Reels, TikTok, and YouTube Shorts with optimized framing.',
    detail: 'Post on a steady weekly cadence backed by clear retention benchmarks rather than posting blindly every single day.',
    accent: 'mint',
  },
  {
    number: '06',
    title: 'Repeat winning formats',
    shortDesc: 'Double down on top performers to compound views and inbound demand.',
    detail: 'Identify which format outperformed your baseline and spin out 5–10 structured variations so growth becomes predictable.',
    accent: 'lavender',
  },
];

export const FORMAT_TEMPLATES: FormatTemplate[] = [
  {
    id: 'myth-buster',
    code: 'FMT-01',
    name: 'The Contrarian Myth-Buster',
    medianViews: '412,000',
    avgWatchThrough: '78%',
    retentionStructure: [
      { phase: '0–3s Visual Hook', window: '00:00 – 00:03', direction: 'Walk into frame mid-sentence holding a physical prop or printed myth.' },
      { phase: '3–18s Pattern Break', window: '00:03 – 00:18', direction: 'Show why the conventional advice quietly stalls growth using one concrete example.' },
      { phase: '18–38s Replacement System', window: '00:18 – 00:38', direction: 'Demonstrate the 3-step alternative on screen with crisp dynamic captions.' },
    ],
  },
  {
    id: 'numbers-breakdown',
    code: 'FMT-02',
    name: 'Behind-the-Numbers Breakdown',
    medianViews: '685,000',
    avgWatchThrough: '82%',
    retentionStructure: [
      { phase: '0–3s Outcome Anchor', window: '00:00 – 00:03', direction: 'Lead with a verifiable milestone and point directly to the real metric card.' },
      { phase: '3–22s Decision Audit', window: '00:03 – 00:22', direction: 'Contrast what changed between week 1 and week 6 in tight 2-second jump cuts.' },
      { phase: '22–45s Actionable Takeaway', window: '00:22 – 00:45', direction: 'Close with one replicable checklist step viewers save and share.' },
    ],
  },
  {
    id: 'visual-tutorial',
    code: 'FMT-03',
    name: '3-Layer Visual Hook Tutorial',
    medianViews: '530,000',
    avgWatchThrough: '75%',
    retentionStructure: [
      { phase: '0–3s Split Comparison', window: '00:00 – 00:03', direction: 'Show amateur vs. high-retention output side-by-side without speaking first.' },
      { phase: '3–20s Live Execution', window: '00:03 – 00:20', direction: 'Record over-the-shoulder workflow showing exact setup in 3 quick steps.' },
      { phase: '20–36s Loop Ending', window: '00:20 – 00:36', direction: 'End on the finished result transitioning cleanly back into frame 1.' },
    ],
  },
];

export const DELIVERABLES: DeliverableItem[] = [
  {
    id: 'format-library',
    index: '01',
    title: 'Format Finder™ Library',
    subtitle: '150+ Proven Video Structures',
    description: 'An organized database of viral video formats broken down by hook mechanic, pacing rhythm, camera angle, and difficulty—updated weekly as algorithms evolve.',
    highlights: ['Filterable by filming setup & niche', 'Exact hook & beat timestamps', 'Real reference examples included'],
    tone: 'mint',
    span: 'wide',
  },
  {
    id: 'ai-prompts',
    index: '02',
    title: 'AI Niche Adaptation Prompts',
    subtitle: 'Zero Blank-Page Friction',
    description: 'Specialized AI prompt workflows engineered to adapt any viral format directly to your business, coaching offer, or creator voice.',
    highlights: ['Generates 5 hook variations per format', 'Tone & credibility calibration'],
    tone: 'lavender',
    span: 'standard',
  },
  {
    id: 'weekly-coaching',
    index: '03',
    title: 'Weekly Live Coaching & Q&A',
    subtitle: '4 Months of Direct Access',
    description: 'Join live group coaching calls every week to dissect analytics, refine content positioning, and solve bottlenecks in real time.',
    highlights: ['Live hot-seat channel audits', 'Full session replay archive'],
    tone: 'surface',
    span: 'standard',
  },
  {
    id: 'video-reviews',
    index: '04',
    title: 'Expert Video Reviews',
    subtitle: 'Pre-Publish Coach Feedback',
    description: 'Submit your edited videos before posting. Our coaching team reviews pacing, hook strength, audio clarity, and visual retention cues.',
    highlights: ['Timestamped feedback before upload', 'Eliminate weak intros early'],
    tone: 'butter',
    span: 'standard',
  },
  {
    id: 'monetization',
    index: '05',
    title: 'Monetization Workshops',
    subtitle: 'Views Into Revenue',
    description: 'Views alone do not pay bills. Learn practical funnels to turn attention into coaching clients, digital offers, and brand partnerships.',
    highlights: ['Lead-magnet & bio funnel architecture', 'Brand deal pricing frameworks'],
    tone: 'blush',
    span: 'standard',
  },
  {
    id: 'community',
    index: '06',
    title: 'Private Creator Community',
    subtitle: 'Peer Testing & Accountability',
    description: 'Connect with vetted creators, founders, and marketers sharing format wins, retention experiments, and weekly publishing accountability.',
    highlights: ['Weekly accountability threads', 'Niche peer feedback circles'],
    tone: 'obsidian',
    span: 'wide',
  },
];

export const CASE_STUDIES: CaseStudy[] = [
  {
    id: 'maya-lin',
    name: 'Maya Lin',
    role: 'Design Educator & Creator',
    organization: 'FrameCraft Studio',
    avatar: '/src/assets/images/creator_studio_woman_1795431474631.jpg',
    beforeMetric: '2,100 avg views/video',
    formatApplied: '3-Layer Visual Hook Tutorial',
    outcomeMetric: '1.84M views',
    timeframe: 'in 9 weeks',
    quote: 'Stopping daily guesswork changed everything. Using two repeatable formats cut my filming time in half while breaking 1M views in two months.',
    tone: 'mint',
  },
  {
    id: 'daniel-ortiz',
    name: 'Daniel Ortiz',
    role: 'Founder & B2B Consultant',
    organization: 'Northline Advisory',
    avatar: '/src/assets/images/creator_founder_man_1795431474699.jpg',
    beforeMetric: '420 avg views/reel',
    formatApplied: 'The Contrarian Myth-Buster',
    outcomeMetric: '620K views · 38 leads',
    timeframe: 'in 12 weeks',
    quote: 'The pre-publish video reviews caught why viewers dropped at second four. Fixing that single beat turned short videos into booked client calls.',
    tone: 'butter',
  },
  {
    id: 'claire-bennett',
    name: 'Claire Bennett',
    role: 'Executive Coach',
    organization: 'Catalyst Leadership',
    avatar: '/src/assets/images/creator_coach_headshot_1795431475627.jpg',
    beforeMetric: 'Inconsistent weekly posts',
    formatApplied: 'Behind-the-Numbers Breakdown',
    outcomeMetric: '1.15M views',
    timeframe: 'in 14 weeks',
    quote: 'Format Finder AI gave me hooks that sounded like me instead of generic scripts. My very fourth video hit 340,000 organic views.',
    tone: 'lavender',
  },
];

export const PROGRAMME_FAQS: FaqItem[] = [
  {
    id: 'time-commitment',
    question: 'How much time do I need per week during the 4-month programme?',
    answer: 'Plan for 3 to 4 hours per week: 60 minutes for a live weekly coaching call, 45 minutes adapting a format with AI prompts, and 1–2 hours filming and submitting at least one video for coach feedback.',
  },
  {
    id: 'guarantee-terms',
    question: 'How does the 1,000,000-view money-back guarantee work?',
    answer: 'Attend at least one weekly live coaching call and publish at least one video per week using the Format Finder™ system throughout the 4-month programme. If your cumulative programme views do not reach 1,000,000 under those stated conditions, you qualify for a full refund.',
  },
  {
    id: 'equipment',
    question: 'Do I need cinema cameras or a full production studio to start?',
    answer: 'No. Every format inside the Format Finder™ Library is built to be shot cleanly on a modern smartphone with natural window light or a simple desk key light.',
  },
  {
    id: 'ai-difference',
    question: 'How is this different from asking generic AI to write video scripts?',
    answer: 'Generic AI invents clichés from scratch. Format Finder™ pairs AI specifically with verified viral pacing blueprints—giving you tested 3-second visual hooks, retention bridges, and coach feedback before you publish.',
  },
];
