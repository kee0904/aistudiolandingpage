import { ArrowRight, Play } from 'lucide-react';
import { useState } from 'react';
import {
  AUDIENCE_PROFILES,
  HERO_MOMENTUM_MONTHS,
  NicheId,
} from '../data/programmeData';

interface HeroSectionProps {
  selectedNiche: NicheId;
  onSelectNiche: (niche: NicheId) => void;
  onApplyClick: () => void;
}

const SHORT_TRACK_LABELS: Record<NicheId, string> = {
  creators: 'Creators',
  coaches: 'Coaches',
  business: 'Business Owners',
  marketers: 'Marketers',
};

export function HeroSection({
  selectedNiche,
  onSelectNiche,
  onApplyClick,
}: HeroSectionProps) {
  const [activeMonthIndex, setActiveMonthIndex] = useState(3); // July default
  const activeMonth = HERO_MOMENTUM_MONTHS[activeMonthIndex];
  const activeAudience =
    AUDIENCE_PROFILES.find((a) => a.id === selectedNiche) ?? AUDIENCE_PROFILES[0];

  return (
    <section className="pt-8 pb-12 md:pt-10 md:pb-14 bg-white">
      <div className="max-w-[1220px] mx-auto px-5 sm:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
          {/* Left Column: Editorial Value Proposition & Functional Audience Switcher */}
          <div className="lg:col-span-6 space-y-6">
            <div className="space-y-3.5">
              <p className="text-sm font-medium text-neutral-500">
                Viral Content Accelerator · 4-Month Cohort
              </p>

              <h1 className="font-display text-[clamp(2.35rem,4.1vw,3.75rem)] font-extrabold leading-[1.06] tracking-[-0.03em] text-[#141414] text-balance">
                Make viral videos repeatedly — without guessing what to post
              </h1>

              <p className="text-base sm:text-lg text-neutral-600 leading-relaxed max-w-[52ch]">
                Stop starting from a blank page every morning. Use our{' '}
                <span className="font-semibold text-[#141414]">Format Finder™</span>{' '}
                library, niche AI prompts, and weekly expert video reviews to reach
                hundreds of thousands—or millions—of organic views.
              </p>
            </div>

            {/* Primary CTA + Secondary Anchor */}
            <div className="flex flex-wrap items-center gap-3.5">
              <button
                type="button"
                onClick={onApplyClick}
                className="inline-flex items-center gap-2.5 px-7 py-3.5 rounded-full bg-[#141414] text-white text-sm sm:text-base font-semibold hover:bg-neutral-800 active:scale-[0.98] transition-all duration-150 whitespace-nowrap shrink-0 cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#141414]"
              >
                <span>Apply for Next Cohort</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <a
                href="#format-finder"
                className="inline-flex items-center gap-2 px-5 py-3.5 rounded-full border border-neutral-300 text-[#141414] text-sm sm:text-base font-semibold hover:border-[#141414] hover:bg-neutral-50 transition-all duration-150 whitespace-nowrap shrink-0"
              >
                <Play className="w-4 h-4 fill-current" />
                <span>Try Format Finder™</span>
              </a>
            </div>

            {/* Interactive Audience Filter */}
            <div className="pt-1 space-y-2.5">
              <p className="text-xs font-semibold tracking-wide text-neutral-500">
                Built for your growth model — select your track:
              </p>

              <div
                role="tablist"
                aria-label="Target audience tracks"
                className="flex flex-wrap gap-2"
              >
                {AUDIENCE_PROFILES.map((profile) => {
                  const isActive = profile.id === selectedNiche;
                  return (
                    <button
                      key={profile.id}
                      type="button"
                      role="tab"
                      aria-selected={isActive}
                      onClick={() => onSelectNiche(profile.id)}
                      className={`px-4 py-2 rounded-full text-sm font-medium border transition-all duration-150 whitespace-nowrap shrink-0 cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#141414] ${
                        isActive
                          ? 'bg-[#80F4B5] border-[#141414] text-[#141414] font-semibold'
                          : 'bg-white border-neutral-300 text-neutral-700 hover:border-[#141414] hover:text-[#141414]'
                      }`}
                    >
                      {SHORT_TRACK_LABELS[profile.id]}
                    </button>
                  );
                })}
              </div>

              {/* Active Audience Focus Note */}
              <div
                data-testid="hero-audience-detail"
                className="p-4 rounded-2xl bg-[#F7F7F5] space-y-1"
              >
                <p className="text-sm font-semibold text-[#141414]">
                  {activeAudience.headlineNote}
                </p>
                <p className="text-xs sm:text-sm text-neutral-600">
                  Weekly rhythm: {activeAudience.weeklyFocus}
                </p>
              </div>
            </div>
          </div>

          {/* Right Column: Asymmetric Pastel Squircle Bento Collage with Newly Generated Models */}
          <div className="lg:col-span-6">
            <div className="grid grid-cols-12 gap-4 sm:gap-5 items-stretch">
              {/* Top-Left: Mint Portrait Frame */}
              <div className="col-span-6">
                <div className="h-[250px] sm:h-[295px] bg-[#80F4B5] squircle-tl overflow-hidden">
                  <img
                    src="/src/assets/images/creator_studio_woman_1795431474631.jpg"
                    alt="Creator filming a viral short-form video in a mint studio"
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover object-top"
                  />
                </div>
              </div>

              {/* Top-Right: Lavender Monthly Reach Momentum Chart */}
              <div className="col-span-6">
                <div className="h-[250px] sm:h-[295px] bg-gradient-to-b from-[#C4AEFC] to-[#A688FA] squircle-tr p-5 sm:p-6 flex flex-col justify-between text-white">
                  <div className="flex items-start justify-between gap-2">
                    <div>
                      <p className="text-xl sm:text-2xl font-display font-bold tracking-tight">
                        {activeMonth.month}
                      </p>
                      <p className="text-xs text-white/85">Cohort view velocity</p>
                    </div>
                    <span
                      data-testid="hero-chart-readout"
                      className="px-3 py-1 rounded-full bg-[#141414] text-white text-xs font-mono font-semibold tabular-nums shrink-0"
                    >
                      {activeMonth.viewsLabel}
                    </span>
                  </div>

                  {/* Interactive Vertical Bars */}
                  <div className="pt-3 flex items-end justify-between gap-2 h-36">
                    {HERO_MOMENTUM_MONTHS.map((item, idx) => {
                      const isSelected = idx === activeMonthIndex;
                      return (
                        <button
                          key={item.month}
                          type="button"
                          onClick={() => setActiveMonthIndex(idx)}
                          aria-label={`Inspect ${item.month}: ${item.viewsLabel} views`}
                          className="group flex-1 flex flex-col items-center gap-2 h-full justify-end cursor-pointer focus-visible:outline-2 focus-visible:outline-white rounded-lg"
                        >
                          <div className="w-full flex-1 flex items-end justify-center">
                            <div
                              style={{ height: `${item.barHeightPct}%` }}
                              className={`w-full max-w-[26px] rounded-full transition-all duration-200 ${
                                isSelected
                                  ? 'bg-gradient-to-b from-white via-white/85 to-white/25 scale-[1.04]'
                                  : 'bg-gradient-to-b from-white/55 to-white/10 group-hover:from-white/80'
                              }`}
                            />
                          </div>
                          <span
                            className={`text-xs font-medium ${
                              isSelected ? 'text-white font-bold' : 'text-white/75'
                            }`}
                          >
                            {item.shortLabel}
                          </span>
                        </button>
                      );
                    })}
                  </div>
                </div>
              </div>

              {/* Bottom-Left: Blush Lilac Creator Collaboration & Coaching Card */}
              <div className="col-span-6">
                <div className="h-[215px] sm:h-[235px] bg-gradient-to-br from-[#F9E7FF] to-[#F3CFFF] squircle-bl p-5 flex flex-col justify-between">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-semibold text-[#141414]/75">
                      Weekly Peer & Coach Loop
                    </span>
                  </div>

                  <div className="flex items-center justify-center gap-3 my-auto">
                    <div className="w-20 h-20 sm:w-22 sm:h-22 rounded-full overflow-hidden border-2 border-white bg-[#80F4B5]/40 shrink-0">
                      <img
                        src="/src/assets/images/creator_collab_studio_1795431476794.jpg"
                        alt="Creators collaborating in video studio"
                        referrerPolicy="no-referrer"
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="w-20 h-20 sm:w-22 sm:h-22 rounded-full overflow-hidden border-2 border-white bg-[#FFF0B3]/50 shrink-0">
                      <img
                        src="/src/assets/images/creator_coach_headshot_1795431475627.jpg"
                        alt="Programme coach Claire"
                        referrerPolicy="no-referrer"
                        className="w-full h-full object-cover object-top"
                      />
                    </div>
                  </div>

                  <p className="text-center text-sm font-display font-semibold text-[#141414]">
                    Grow with expert feedback
                  </p>
                </div>
              </div>

              {/* Bottom-Right: Butter Yellow Male Founder Frame */}
              <div className="col-span-6">
                <div className="h-[215px] sm:h-[235px] bg-[#FFF0B3] squircle-br overflow-hidden">
                  <img
                    src="/src/assets/images/creator_founder_man_1795431474699.jpg"
                    alt="Founder checking video retention performance on smartphone"
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover object-top"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Full-Width 4-Column Quantitative Proof Strip */}
        <div className="mt-10 pt-7 border-t border-neutral-200 grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          <div>
            <p className="font-mono text-2xl sm:text-3xl font-semibold text-[#141414] tabular-nums">
              1,000,000+
            </p>
            <p className="mt-1 text-sm text-neutral-600">
              View guarantee over 4 months
            </p>
          </div>
          <div>
            <p className="font-mono text-2xl sm:text-3xl font-semibold text-[#141414] tabular-nums">
              150+
            </p>
            <p className="mt-1 text-sm text-neutral-600">
              Proven viral formats in library
            </p>
          </div>
          <div>
            <p className="font-mono text-2xl sm:text-3xl font-semibold text-[#141414] tabular-nums">
              6-Step
            </p>
            <p className="mt-1 text-sm text-neutral-600">
              Repeatable Format Finder™ loop
            </p>
          </div>
          <div>
            <p className="font-mono text-2xl sm:text-3xl font-semibold text-[#141414] tabular-nums">
              Weekly
            </p>
            <p className="mt-1 text-sm text-neutral-600">
              Live coaching & pre-publish reviews
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
