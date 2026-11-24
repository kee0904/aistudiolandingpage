import { Check, Copy, RefreshCw } from 'lucide-react';
import { useState } from 'react';
import {
  AUDIENCE_PROFILES,
  FORMAT_TEMPLATES,
  FormatId,
  NicheId,
} from '../data/programmeData';
import { getAdaptedFormat } from '../utils/acceleratorLogic';

interface FormatFinderStudioProps {
  selectedNiche: NicheId;
  onSelectNiche: (niche: NicheId) => void;
  onApplyClick: () => void;
}

export function FormatFinderStudio({
  selectedNiche,
  onSelectNiche,
  onApplyClick,
}: FormatFinderStudioProps) {
  const [selectedFormat, setSelectedFormat] = useState<FormatId>('myth-buster');
  const [angleIndex, setAngleIndex] = useState(0);
  const [copied, setCopied] = useState(false);

  const template =
    FORMAT_TEMPLATES.find((f) => f.id === selectedFormat) ?? FORMAT_TEMPLATES[0];
  const adapted = getAdaptedFormat(selectedNiche, selectedFormat, angleIndex);

  const handleCopyPrompt = async () => {
    try {
      if (navigator.clipboard) {
        await navigator.clipboard.writeText(adapted.aiPromptTemplate);
      }
      setCopied(true);
      window.setTimeout(() => setCopied(false), 1800);
    } catch {
      setCopied(true);
      window.setTimeout(() => setCopied(false), 1800);
    }
  };

  return (
    <section id="format-finder" className="scroll-mt-24 py-16 md:py-24 bg-white">
      <div className="max-w-[1220px] mx-auto px-5 sm:px-8">
        <div className="max-w-2xl space-y-3 mb-10">
          <p className="text-sm font-medium text-neutral-500">
            Interactive Format Finder™ Preview
          </p>
          <h2 className="font-display text-3xl sm:text-4xl font-bold tracking-tight text-[#141414] text-balance">
            Test how one proven format adapts to your niche
          </h2>
          <p className="text-base text-neutral-600 leading-relaxed">
            Pick your audience track and a viral structure below to inspect the
            retention beats and generated AI adaptation prompt.
          </p>
        </div>

        <div className="rounded-[32px] bg-[#F7F7F5] p-5 sm:p-8 lg:p-10">
          {/* Controls Bar */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 pb-8 border-b border-neutral-200">
            <div className="lg:col-span-6 space-y-2.5">
              <p className="text-xs font-semibold text-neutral-500">
                01. Choose Your Niche
              </p>
              <div className="flex flex-wrap gap-2">
                {AUDIENCE_PROFILES.map((niche) => {
                  const active = niche.id === selectedNiche;
                  return (
                    <button
                      key={niche.id}
                      type="button"
                      onClick={() => {
                        onSelectNiche(niche.id);
                        setAngleIndex(0);
                      }}
                      className={`px-3.5 py-2 rounded-full text-xs sm:text-sm font-medium transition-colors whitespace-nowrap shrink-0 cursor-pointer ${
                        active
                          ? 'bg-[#141414] text-white'
                          : 'bg-white text-neutral-700 border border-neutral-200 hover:border-[#141414]'
                      }`}
                    >
                      {niche.label}
                    </button>
                  );
                })}
              </div>
            </div>

            <div className="lg:col-span-6 space-y-2.5">
              <p className="text-xs font-semibold text-neutral-500">
                02. Select Proven Format Blueprint
              </p>
              <div className="flex flex-wrap gap-2">
                {FORMAT_TEMPLATES.map((fmt) => {
                  const active = fmt.id === selectedFormat;
                  return (
                    <button
                      key={fmt.id}
                      type="button"
                      onClick={() => {
                        setSelectedFormat(fmt.id);
                        setAngleIndex(0);
                      }}
                      className={`px-3.5 py-2 rounded-full text-xs sm:text-sm font-medium transition-colors whitespace-nowrap shrink-0 cursor-pointer ${
                        active
                          ? 'bg-[#80F4B5] text-[#141414] font-semibold border border-[#141414]'
                          : 'bg-white text-neutral-700 border border-neutral-200 hover:border-[#141414]'
                      }`}
                    >
                      {fmt.name}
                    </button>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Interactive Output Grid */}
          <div className="pt-8 grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
            {/* Left: Adapted Hook & AI Prompt */}
            <div className="lg:col-span-7 bg-white rounded-[28px] p-6 sm:p-8 border border-neutral-200/80 flex flex-col justify-between gap-6">
              <div className="space-y-5">
                <div className="flex flex-wrap items-center justify-between gap-3">
                  <span className="text-xs font-mono font-semibold text-neutral-500">
                    {template.code} · {adapted.nicheLabel}
                  </span>
                  <button
                    type="button"
                    onClick={() => setAngleIndex((prev) => prev + 1)}
                    className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-[#FFF0B3] text-[#141414] text-xs font-semibold hover:brightness-95 transition-all cursor-pointer whitespace-nowrap shrink-0"
                  >
                    <RefreshCw className="w-3.5 h-3.5" />
                    <span>Next Hook Angle ({adapted.angleLabel})</span>
                  </button>
                </div>

                <div>
                  <p className="text-xs font-semibold text-neutral-500 mb-2">
                    Adapted Opening Hook (0–3 Seconds)
                  </p>
                  <blockquote
                    data-testid="adapted-hook-output"
                    className="font-display text-xl sm:text-2xl font-bold text-[#141414] leading-snug"
                  >
                    {adapted.hookLine}
                  </blockquote>
                </div>

                <div className="p-4 rounded-2xl bg-[#F7F7F5] space-y-2">
                  <p className="text-xs font-semibold text-neutral-500">
                    Visual Retention Direction
                  </p>
                  <p className="text-sm text-neutral-800">{adapted.retentionCue}</p>
                </div>

                <div className="space-y-2">
                  <div className="flex items-center justify-between gap-2">
                    <p className="text-xs font-semibold text-neutral-500">
                      AI Niche Adaptation Prompt
                    </p>
                    <button
                      type="button"
                      onClick={handleCopyPrompt}
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-neutral-300 text-xs font-semibold text-[#141414] hover:border-[#141414] transition-colors cursor-pointer"
                    >
                      {copied ? (
                        <>
                          <Check className="w-3.5 h-3.5" />
                          <span>Copied</span>
                        </>
                      ) : (
                        <>
                          <Copy className="w-3.5 h-3.5" />
                          <span>Copy Prompt</span>
                        </>
                      )}
                    </button>
                  </div>
                  <pre className="p-4 rounded-2xl bg-[#141414] text-neutral-100 font-mono text-xs leading-relaxed whitespace-pre-wrap">
                    {adapted.aiPromptTemplate}
                  </pre>
                </div>
              </div>
            </div>

            {/* Right: Pacing Blueprint & Benchmark Card */}
            <div className="lg:col-span-5 flex flex-col gap-5">
              <div className="bg-[#B398FA]/25 squircle-tr p-6 sm:p-7 space-y-5 flex-1">
                <div className="flex items-baseline justify-between gap-4 border-b border-[#141414]/10 pb-4">
                  <div>
                    <p className="text-xs font-semibold text-neutral-600">
                      Format Median Views
                    </p>
                    <p className="font-mono text-2xl font-bold text-[#141414] tabular-nums">
                      {template.medianViews}
                    </p>
                  </div>
                  <div className="text-right">
                    <p className="text-xs font-semibold text-neutral-600">
                      Avg Watch-Through
                    </p>
                    <p className="font-mono text-2xl font-bold text-[#141414] tabular-nums">
                      {template.avgWatchThrough}
                    </p>
                  </div>
                </div>

                <div className="space-y-4">
                  <p className="text-xs font-semibold text-neutral-600">
                    Retention Beat Breakdown
                  </p>
                  {template.retentionStructure.map((beat) => (
                    <div
                      key={beat.phase}
                      className="p-3.5 rounded-2xl bg-white/85 space-y-1"
                    >
                      <div className="flex items-center justify-between gap-2 text-xs font-semibold text-[#141414]">
                        <span>{beat.phase}</span>
                        <span className="font-mono text-neutral-500 tabular-nums">
                          {beat.window}
                        </span>
                      </div>
                      <p className="text-xs sm:text-sm text-neutral-600">
                        {beat.direction}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="p-5 rounded-3xl bg-[#80F4B5] flex items-center justify-between gap-4">
                <div>
                  <p className="text-xs font-semibold text-[#141414]/75">
                    Expected Niche Range
                  </p>
                  <p className="font-mono text-lg font-bold text-[#141414] tabular-nums">
                    {adapted.expectedViewsBand}
                  </p>
                </div>
                <button
                  type="button"
                  onClick={onApplyClick}
                  className="px-4 py-2.5 rounded-full bg-[#141414] text-white text-xs font-semibold hover:bg-neutral-800 transition-colors whitespace-nowrap shrink-0 cursor-pointer"
                >
                  Unlock 150+ Formats
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
