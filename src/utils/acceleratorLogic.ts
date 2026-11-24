import { FormatId, NicheId, PlanId } from '../data/programmeData';

export interface AdaptedFormatResult {
  nicheLabel: string;
  formatName: string;
  hookLine: string;
  aiPromptTemplate: string;
  retentionCue: string;
  expectedViewsBand: string;
  angleLabel: string;
}

export interface PricingSummary {
  planId: PlanId;
  title: string;
  headlinePrice: string;
  installmentDetail: string;
  totalUsd: number;
  savingsUsd: number;
  durationLabel: string;
}

export interface ApplicationFormInput {
  fullName: string;
  email: string;
  socialHandle: string;
  niche: NicheId;
  planId: PlanId;
  agreedToWeeklyCadence: boolean;
}

export interface ApplicationValidationResult {
  valid: boolean;
  errors: Partial<Record<keyof ApplicationFormInput, string>>;
}

export interface GuaranteeCheckResult {
  eligible: boolean;
  callsMet: boolean;
  videosMet: boolean;
  summary: string;
}

const NICHE_LABELS: Record<NicheId, string> = {
  creators: 'Creators & Influencers',
  coaches: 'Coaches & Consultants',
  business: 'Business Owners',
  marketers: 'Social Media Marketers',
};

const FORMAT_NAMES: Record<FormatId, string> = {
  'myth-buster': 'The Contrarian Myth-Buster',
  'numbers-breakdown': 'Behind-the-Numbers Breakdown',
  'visual-tutorial': '3-Layer Visual Hook Tutorial',
};

const ADAPTATION_MATRIX: Record<
  NicheId,
  Record<
    FormatId,
    {
      hooks: string[];
      retentionCue: string;
      viewsBand: string;
      topicExample: string;
    }
  >
> = {
  creators: {
    'myth-buster': {
      hooks: [
        '"Posting 3 times a day is actually why your channel stopped growing—here is the 1-format fix."',
        '"Stop chasing trending audio. This boring 35-second structure outperformed every trend I tried."',
      ],
      retentionCue: 'Hold up a printed analytics screenshot at 00:01 while stepping into frame.',
      viewsBand: '320K – 940K views',
      topicExample: 'growing a creator channel with 1 video per week',
    },
    'numbers-breakdown': {
      hooks: [
        '"How 4 videos using the exact same opening beat generated 1.2M organic views this month."',
        '"I deleted 60% of my content ideas and only filmed this format—here is the retention graph."',
      ],
      retentionCue: 'Zoom tightly onto the retention spike at 00:03 before explaining why.',
      viewsBand: '450K – 1.4M views',
      topicExample: 'breaking out of the 500-view plateau',
    },
    'visual-tutorial': {
      hooks: [
        '"Watch the first 3 seconds of this clip—this single framing tweak doubled my watch time."',
        '"You do not need a $3,000 camera. Change these two angles on your phone instead."',
      ],
      retentionCue: 'Start with a silent split-screen before vs. after for 1.8 seconds.',
      viewsBand: '280K – 760K views',
      topicExample: 'filming high-retention creator hooks at home',
    },
  },
  coaches: {
    'myth-buster': {
      hooks: [
        '"Most coaches burn out making educational carousels nobody watches—do this 40-second format instead."',
        '"Your audience does not want another morning routine tip. They want to see how you solve this mistake."',
      ],
      retentionCue: 'Write the common coaching mistake on a whiteboard and cross it out in frame 1.',
      viewsBand: '180K – 620K views',
      topicExample: 'attracting high-ticket coaching clients organically',
    },
    'numbers-breakdown': {
      hooks: [
        '"Zero ad spend, 14 weeks, and 38 booked strategy calls—here is the exact video format behind it."',
        '"How one 38-second client teardown brought in 4x more leads than 20 long-form webinars."',
      ],
      retentionCue: 'Overlay the real calendar booking metric cleanly at the top third at 00:02.',
      viewsBand: '240K – 810K views',
      topicExample: 'turning short-form views into coaching inquiries',
    },
    'visual-tutorial': {
      hooks: [
        '"Here is the exact 3-part client objection script I film in 15 minutes every Tuesday."',
        '"If people watch your advice and never book a call, fix this final 6-second bridge."',
      ],
      retentionCue: 'Use an over-the-shoulder view of your actual client checklist on desk.',
      viewsBand: '160K – 540K views',
      topicExample: 'structuring authority coaching videos',
    },
  },
  business: {
    'myth-buster': {
      hooks: [
        '"Why polished brand commercials get scrolled past in 0.8 seconds—and what founders film instead."',
        '"Stop hiding behind your logo. Here is why raw founder breakdowns cut our customer acquisition cost."',
      ],
      retentionCue: 'Film directly inside your workspace or packaging line with natural motion.',
      viewsBand: '290K – 1.1M views',
      topicExample: 'founder-led organic customer acquisition',
    },
    'numbers-breakdown': {
      hooks: [
        '"We spent $0 on paid ads for this launch and still crossed 1.1M views—here is the 3-step format."',
        '"The exact cost breakdown of turning one behind-the-scenes reel into $42K in inbound pipeline."',
      ],
      retentionCue: 'Show the physical product or service deliverable in your hand within 1 second.',
      viewsBand: '410K – 1.3M views',
      topicExample: 'showing real business economics on short video',
    },
    'visual-tutorial': {
      hooks: [
        '"How we turn one 20-minute customer onboarding call into 4 high-converting short videos."',
        '"Steal this 3-shot studio layout that makes any small business look authoritative on a phone."',
      ],
      retentionCue: 'Demonstrate the camera angle shift live in real time during seconds 0–4.',
      viewsBand: '230K – 690K views',
      topicExample: 'building a repeatable business content workflow',
    },
  },
  marketers: {
    'myth-buster': {
      hooks: [
        '"Brainstorming new content calendars every Monday is broken—here is how top teams scale 10 accounts."',
        '"Clients do not pay for vanity posting streaks. They pay for repeatable format testing."',
      ],
      retentionCue: 'Open directly over a clean Format Finder™ testing tracker on laptop.',
      viewsBand: '260K – 820K views',
      topicExample: 'replacing content brainstorming with format libraries',
    },
    'numbers-breakdown': {
      hooks: [
        '"How we took a stagnant client account from 900 views to 1.4M monthly views using 3 formats."',
        '"Why 80% of a client account’s growth comes from repeating just 2 validated video blueprints."',
      ],
      retentionCue: 'Flash the before/after 90-day view comparison cleanly in the first 2 seconds.',
      viewsBand: '390K – 1.2M views',
      topicExample: 'auditing client video retention performance',
    },
    'visual-tutorial': {
      hooks: [
        '"Watch how I adapt one proven viral structure for 3 completely different client niches in 4 minutes."',
        '"Here is the exact pre-publish checklist we run before shipping any client short."',
      ],
      retentionCue: 'Split screen the original reference beat with your adapted client script.',
      viewsBand: '210K – 640K views',
      topicExample: 'adapting viral structures across client industries',
    },
  },
};

export function getAdaptedFormat(
  nicheId: NicheId,
  formatId: FormatId,
  angleIndex = 0
): AdaptedFormatResult {
  const nicheData = ADAPTATION_MATRIX[nicheId][formatId];
  const safeIndex = Math.abs(angleIndex) % nicheData.hooks.length;
  const hookLine = nicheData.hooks[safeIndex];
  const nicheLabel = NICHE_LABELS[nicheId];
  const formatName = FORMAT_NAMES[formatId];

  const cleanHook = hookLine.replace(/^"+|"+$/g, '');
  const aiPromptTemplate = [
    `Role: Short-form retention strategist for ${nicheLabel}.`,
    `Format Blueprint: ${formatName}.`,
    `Topic Focus: ${nicheData.topicExample}.`,
    `Task: Write 3 spoken hooks under 14 words matching "${cleanHook}", followed by a 25-second middle proof beat and 1 natural CTA.`,
  ].join('\n');

  return {
    nicheLabel,
    formatName,
    hookLine,
    aiPromptTemplate,
    retentionCue: nicheData.retentionCue,
    expectedViewsBand: nicheData.viewsBand,
    angleLabel: `Angle ${safeIndex + 1} of ${nicheData.hooks.length}`,
  };
}

export function calculatePricingSummary(planId: PlanId): PricingSummary {
  if (planId === 'one-time') {
    return {
      planId: 'one-time',
      title: 'One-Time Payment',
      headlinePrice: 'US$5,999',
      installmentDetail: 'Single upfront payment · Full 4-month programme',
      totalUsd: 5999,
      savingsUsd: 601,
      durationLabel: '4-month coaching cohort',
    };
  }

  return {
    planId: 'payment-plan',
    title: '4-Month Payment Plan',
    headlinePrice: 'US$1,650 × 4',
    installmentDetail: '4 monthly payments · US$6,600 total',
    totalUsd: 6600,
    savingsUsd: 0,
    durationLabel: '4-month coaching cohort',
  };
}

export function checkGuaranteeEligibility(
  callsAttendedPerWeek: number,
  videosPublishedPerWeek: number
): GuaranteeCheckResult {
  const callsMet = callsAttendedPerWeek >= 1;
  const videosMet = videosPublishedPerWeek >= 1;
  const eligible = callsMet && videosMet;

  if (eligible) {
    return {
      eligible: true,
      callsMet,
      videosMet,
      summary:
        'Eligible for the 1,000,000-view guarantee: you meet both the 1+ weekly coaching call and 1+ weekly published video requirements.',
    };
  }

  const missing: string[] = [];
  if (!callsMet) missing.push('at least 1 coaching call per week');
  if (!videosMet) missing.push('at least 1 published video per week');

  return {
    eligible: false,
    callsMet,
    videosMet,
    summary: `Not yet eligible: guarantee conditions require ${missing.join(' and ')}.`,
  };
}

export function validateApplicationForm(input: ApplicationFormInput): ApplicationValidationResult {
  const errors: Partial<Record<keyof ApplicationFormInput, string>> = {};

  if (!input.fullName.trim() || input.fullName.trim().length < 2) {
    errors.fullName = 'Please enter your full name (at least 2 characters).';
  }

  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailPattern.test(input.email.trim())) {
    errors.email = 'Please enter a valid email address.';
  }

  if (!input.socialHandle.trim() || input.socialHandle.trim().length < 2) {
    errors.socialHandle = 'Please share your primary social handle or channel URL.';
  }

  if (!input.agreedToWeeklyCadence) {
    errors.agreedToWeeklyCadence =
      'Please confirm you can commit to 1+ weekly call and 1+ weekly video during the 4-month cohort.';
  }

  return {
    valid: Object.keys(errors).length === 0,
    errors,
  };
}
