import { useState } from 'react';
import { SIX_STEP_LOOP } from '../data/programmeData';

const ACCENT_SURFACE: Record<'mint' | 'lavender' | 'butter' | 'blush', string> = {
  mint: 'bg-[#80F4B5]',
  lavender: 'bg-[#B398FA]',
  butter: 'bg-[#FFF0B3]',
  blush: 'bg-[#F6DBFF]',
};

export function FormatLoopSection() {
  const [activeStepIndex, setActiveStepIndex] = useState(0);
  const activeStep = SIX_STEP_LOOP[activeStepIndex];

  return (
    <section id="how-it-works" className="scroll-mt-24 py-16 md:py-24 bg-[#F7F7F5]">
      <div className="max-w-[1220px] mx-auto px-5 sm:px-8">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-12">
          <div className="max-w-2xl space-y-3">
            <p className="text-sm font-medium text-neutral-500">
              The Core Methodology · Format Finder™
            </p>
            <h2 className="font-display text-3xl sm:text-4xl font-bold tracking-tight text-[#141414] text-balance">
              How repeatable viral content actually works
            </h2>
          </div>
          <p className="text-base text-neutral-600 max-w-md leading-relaxed">
            Instead of brainstorming fresh video ideas every day, reuse structures
            already proven to retain viewers—then adapt them to your niche.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* 6 Interactive Steps List */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-3.5">
            {SIX_STEP_LOOP.map((step, index) => {
              const isSelected = index === activeStepIndex;
              return (
                <button
                  key={step.number}
                  type="button"
                  onClick={() => setActiveStepIndex(index)}
                  aria-pressed={isSelected}
                  className={`text-left p-5 rounded-3xl border transition-all duration-150 cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#141414] ${
                    isSelected
                      ? 'bg-white border-[#141414] shadow-sm'
                      : 'bg-white/75 border-neutral-200/80 hover:bg-white hover:border-neutral-400'
                  }`}
                >
                  <div className="flex items-center justify-between gap-3 mb-3">
                    <span
                      className={`inline-flex items-center justify-center w-9 h-9 rounded-full font-mono text-xs font-semibold tabular-nums ${
                        isSelected
                          ? `${ACCENT_SURFACE[step.accent]} text-[#141414]`
                          : 'bg-neutral-100 text-neutral-700'
                      }`}
                    >
                      {step.number}
                    </span>
                    <span className="text-xs font-medium text-neutral-500">
                      Step {index + 1} of 6
                    </span>
                  </div>
                  <h3 className="font-display text-base font-bold text-[#141414]">
                    {step.title}
                  </h3>
                  <p className="mt-1.5 text-sm text-neutral-600 leading-relaxed">
                    {step.shortDesc}
                  </p>
                </button>
              );
            })}
          </div>

          {/* Active Step Editorial Spotlight Card */}
          <div className="lg:col-span-5">
            <div
              data-testid="active-loop-spotlight"
              className={`${ACCENT_SURFACE[activeStep.accent]} squircle-tr p-7 sm:p-9 text-[#141414] flex flex-col justify-between min-h-[340px]`}
            >
              <div className="space-y-4">
                <span className="font-mono text-sm font-semibold tabular-nums">
                  {activeStep.number}. Format Finder™ Step
                </span>
                <h3 className="font-display text-2xl sm:text-3xl font-bold tracking-tight text-balance">
                  {activeStep.title}
                </h3>
                <p className="text-base text-[#141414]/85 leading-relaxed">
                  {activeStep.detail}
                </p>
              </div>

              <div className="pt-8 mt-8 border-t border-[#141414]/15 flex items-center justify-between gap-4">
                <span className="text-xs font-semibold text-[#141414]/80">
                  Next in workflow
                </span>
                <button
                  type="button"
                  onClick={() =>
                    setActiveStepIndex((prev) => (prev + 1) % SIX_STEP_LOOP.length)
                  }
                  className="px-4 py-2 rounded-full bg-[#141414] text-white text-xs font-semibold hover:bg-neutral-800 transition-colors whitespace-nowrap shrink-0 cursor-pointer"
                >
                  Inspect Step 0{((activeStepIndex + 1) % SIX_STEP_LOOP.length) + 1}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
