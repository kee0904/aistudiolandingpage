import { Check } from 'lucide-react';
import { DELIVERABLES, DeliverableItem } from '../data/programmeData';

const TONE_CLASSES: Record<DeliverableItem['tone'], string> = {
  mint: 'bg-[#80F4B5] text-[#141414] squircle-tl',
  lavender: 'bg-[#B398FA]/35 text-[#141414] squircle-tr',
  butter: 'bg-[#FFF0B3] text-[#141414] squircle-bl',
  blush: 'bg-[#F6DBFF] text-[#141414] squircle-br',
  surface: 'bg-[#F7F7F5] text-[#141414] rounded-[32px]',
  obsidian: 'bg-[#141414] text-white squircle-tr',
};

export function CurriculumSection() {
  return (
    <section id="curriculum" className="scroll-mt-24 py-16 md:py-24 bg-[#F7F7F5]">
      <div className="max-w-[1220px] mx-auto px-5 sm:px-8">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-12">
          <div className="max-w-2xl space-y-3">
            <p className="text-sm font-medium text-neutral-500">
              Inside the 4-Month Programme
            </p>
            <h2 className="font-display text-3xl sm:text-4xl font-bold tracking-tight text-[#141414] text-balance">
              Everything included to turn views into revenue
            </h2>
          </div>
          <p className="text-base text-neutral-600 max-w-md leading-relaxed">
            This is not a passive video course. You get direct coaching, custom AI
            tooling, pre-publish video feedback, and monetization workshops.
          </p>
        </div>

        {/* Asymmetric Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {DELIVERABLES.map((item) => {
            const isWide = item.span === 'wide';
            const isDark = item.tone === 'obsidian';

            return (
              <article
                key={item.id}
                className={`${TONE_CLASSES[item.tone]} ${
                  isWide ? 'lg:col-span-2' : 'lg:col-span-1'
                } p-7 sm:p-8 flex flex-col justify-between gap-6`}
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between gap-4">
                    <span
                      className={`font-mono text-xs font-semibold tabular-nums ${
                        isDark ? 'text-white/70' : 'text-[#141414]/65'
                      }`}
                    >
                      {item.index}. {item.subtitle}
                    </span>
                  </div>

                  <h3 className="font-display text-2xl font-bold tracking-tight">
                    {item.title}
                  </h3>

                  <p
                    className={`text-sm sm:text-base leading-relaxed max-w-xl ${
                      isDark ? 'text-neutral-300' : 'text-[#141414]/80'
                    }`}
                  >
                    {item.description}
                  </p>
                </div>

                <ul className="space-y-2 pt-4 border-t border-current/10">
                  {item.highlights.map((bullet) => (
                    <li key={bullet} className="flex items-center gap-2.5 text-sm font-medium">
                      <Check className="w-4 h-4 shrink-0" />
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
