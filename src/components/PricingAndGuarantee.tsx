import { Check, ShieldCheck } from 'lucide-react';
import { useState } from 'react';
import { PlanId } from '../data/programmeData';
import {
  calculatePricingSummary,
  checkGuaranteeEligibility,
} from '../utils/acceleratorLogic';

interface PricingAndGuaranteeProps {
  selectedPlan: PlanId;
  onSelectPlan: (plan: PlanId) => void;
  onOpenApplication: (plan: PlanId) => void;
}

const INCLUDED_LIST = [
  'Full Format Finder™ Library (150+ structures)',
  'Custom Niche AI Adaptation Prompts',
  'Weekly Live Group Coaching & Q&A Calls',
  'Pre-Publish Expert Video Reviews',
  'Monetization & Lead-Generation Workshops',
  'Private Creator Community Access (4 Months)',
];

export function PricingAndGuarantee({
  selectedPlan,
  onSelectPlan,
  onOpenApplication,
}: PricingAndGuaranteeProps) {
  const [callsPerWeek, setCallsPerWeek] = useState(1);
  const [videosPerWeek, setVideosPerWeek] = useState(1);

  const oneTimeSummary = calculatePricingSummary('one-time');
  const installmentSummary = calculatePricingSummary('payment-plan');
  const guaranteeStatus = checkGuaranteeEligibility(callsPerWeek, videosPerWeek);

  return (
    <section id="pricing" className="scroll-mt-24 py-16 md:py-24 bg-[#F7F7F5]">
      <div className="max-w-[1220px] mx-auto px-5 sm:px-8">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-12">
          <div className="max-w-2xl space-y-3">
            <p className="text-sm font-medium text-neutral-500">
              Tuition & 1,000,000-View Guarantee
            </p>
            <h2 className="font-display text-3xl sm:text-4xl font-bold tracking-tight text-[#141414] text-balance">
              Simple 4-month cohort pricing
            </h2>
          </div>

          {/* Interactive Payment Mode Toggle */}
          <div
            role="group"
            aria-label="Choose preferred payment view"
            className="inline-flex items-center p-1 rounded-full bg-white border border-neutral-200 self-start"
          >
            <button
              type="button"
              onClick={() => onSelectPlan('one-time')}
              className={`px-4 py-2 rounded-full text-xs sm:text-sm font-semibold transition-colors whitespace-nowrap shrink-0 cursor-pointer ${
                selectedPlan === 'one-time'
                  ? 'bg-[#141414] text-white'
                  : 'text-neutral-600 hover:text-[#141414]'
              }`}
            >
              One-Time (Save US$601)
            </button>
            <button
              type="button"
              onClick={() => onSelectPlan('payment-plan')}
              className={`px-4 py-2 rounded-full text-xs sm:text-sm font-semibold transition-colors whitespace-nowrap shrink-0 cursor-pointer ${
                selectedPlan === 'payment-plan'
                  ? 'bg-[#141414] text-white'
                  : 'text-neutral-600 hover:text-[#141414]'
              }`}
            >
              4-Month Plan
            </button>
          </div>
        </div>

        {/* Pricing Comparison Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
          {/* Option 1: One-Time Payment */}
          <div
            className={`lg:col-span-6 squircle-tl p-7 sm:p-9 flex flex-col justify-between gap-8 border transition-all ${
              selectedPlan === 'one-time'
                ? 'bg-[#80F4B5] border-[#141414]'
                : 'bg-white border-neutral-200'
            }`}
          >
            <div className="space-y-4">
              <div className="flex items-center justify-between gap-4">
                <span className="text-sm font-semibold text-[#141414]">
                  {oneTimeSummary.title}
                </span>
                <span className="text-xs font-mono font-semibold text-[#141414]/80">
                  Save US${oneTimeSummary.savingsUsd}
                </span>
              </div>

              <div>
                <p className="font-display text-4xl sm:text-5xl font-extrabold tracking-tight text-[#141414] tabular-nums">
                  {oneTimeSummary.headlinePrice}
                </p>
                <p className="mt-2 text-sm text-[#141414]/80">
                  {oneTimeSummary.installmentDetail}
                </p>
              </div>

              <ul className="space-y-2.5 pt-4 border-t border-[#141414]/15">
                {INCLUDED_LIST.map((item) => (
                  <li key={item} className="flex items-center gap-2.5 text-sm font-medium text-[#141414]">
                    <Check className="w-4 h-4 shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <button
              type="button"
              onClick={() => onOpenApplication('one-time')}
              className="w-full py-3.5 px-6 rounded-full bg-[#141414] text-white text-sm sm:text-base font-semibold hover:bg-neutral-800 transition-colors cursor-pointer"
            >
              Apply with One-Time Payment
            </button>
          </div>

          {/* Option 2: 4-Month Payment Plan */}
          <div
            className={`lg:col-span-6 squircle-tr p-7 sm:p-9 flex flex-col justify-between gap-8 border transition-all ${
              selectedPlan === 'payment-plan'
                ? 'bg-[#B398FA]/40 border-[#141414]'
                : 'bg-white border-neutral-200'
            }`}
          >
            <div className="space-y-4">
              <div className="flex items-center justify-between gap-4">
                <span className="text-sm font-semibold text-[#141414]">
                  {installmentSummary.title}
                </span>
                <span className="text-xs font-mono font-semibold text-neutral-600 tabular-nums">
                  US$6,600 total
                </span>
              </div>

              <div>
                <p className="font-display text-4xl sm:text-5xl font-extrabold tracking-tight text-[#141414] tabular-nums">
                  {installmentSummary.headlinePrice}
                </p>
                <p className="mt-2 text-sm text-neutral-600">
                  {installmentSummary.installmentDetail}
                </p>
              </div>

              <ul className="space-y-2.5 pt-4 border-t border-neutral-200">
                {INCLUDED_LIST.map((item) => (
                  <li key={item} className="flex items-center gap-2.5 text-sm font-medium text-neutral-800">
                    <Check className="w-4 h-4 shrink-0 text-[#141414]" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <button
              type="button"
              onClick={() => onOpenApplication('payment-plan')}
              className="w-full py-3.5 px-6 rounded-full border-2 border-[#141414] bg-white text-[#141414] text-sm sm:text-base font-semibold hover:bg-[#141414] hover:text-white transition-colors cursor-pointer"
            >
              Apply with 4-Month Plan
            </button>
          </div>
        </div>

        {/* 1,000,000-View Money-Back Guarantee Panel */}
        <div className="mt-8 bg-[#FFF0B3] squircle-bl p-7 sm:p-9 border border-[#141414]/15">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-7 space-y-3">
              <div className="inline-flex items-center gap-2 text-sm font-bold text-[#141414]">
                <ShieldCheck className="w-5 h-5" />
                <span>1,000,000-View Money-Back Guarantee</span>
              </div>
              <h3 className="font-display text-2xl sm:text-3xl font-bold tracking-tight text-[#141414] text-balance">
                Do the weekly work, reach 1M views—or receive a full refund
              </h3>
              <p className="text-sm sm:text-base text-[#141414]/85 leading-relaxed">
                Show up to at least one weekly live coaching call and publish at least
                one video per week using Format Finder™ across the 4-month cohort. If
                you do not cross 1,000,000 views under our stated programme terms, we
                refund 100% of your tuition.
              </p>
            </div>

            {/* Interactive Guarantee Condition Simulator */}
            <div className="lg:col-span-5 bg-white/90 rounded-3xl p-5 sm:p-6 space-y-4">
              <p className="text-xs font-semibold text-neutral-600">
                Verify Guarantee Commitment
              </p>

              <div className="grid grid-cols-2 gap-3">
                <div className="space-y-1.5">
                  <label
                    htmlFor="guarantee-calls"
                    className="block text-xs font-medium text-neutral-700"
                  >
                    Coaching calls / wk
                  </label>
                  <select
                    id="guarantee-calls"
                    value={callsPerWeek}
                    onChange={(e) => setCallsPerWeek(Number(e.target.value))}
                    className="w-full px-3 py-2 rounded-xl border border-neutral-300 bg-white text-sm font-mono font-semibold text-[#141414]"
                  >
                    <option value={0}>0 calls / wk</option>
                    <option value={1}>1 call / wk</option>
                    <option value={2}>2+ calls / wk</option>
                  </select>
                </div>

                <div className="space-y-1.5">
                  <label
                    htmlFor="guarantee-videos"
                    className="block text-xs font-medium text-neutral-700"
                  >
                    Videos posted / wk
                  </label>
                  <select
                    id="guarantee-videos"
                    value={videosPerWeek}
                    onChange={(e) => setVideosPerWeek(Number(e.target.value))}
                    className="w-full px-3 py-2 rounded-xl border border-neutral-300 bg-white text-sm font-mono font-semibold text-[#141414]"
                  >
                    <option value={0}>0 videos / wk</option>
                    <option value={1}>1 video / wk</option>
                    <option value={3}>3+ videos / wk</option>
                  </select>
                </div>
              </div>

              <div
                data-testid="guarantee-status-box"
                className={`p-3.5 rounded-2xl text-xs font-medium leading-relaxed ${
                  guaranteeStatus.eligible
                    ? 'bg-[#80F4B5]/45 text-[#141414]'
                    : 'bg-neutral-100 text-neutral-800'
                }`}
              >
                {guaranteeStatus.summary}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
