import { CASE_STUDIES } from '../data/programmeData';

const HEADER_SURFACE: Record<'mint' | 'lavender' | 'butter', string> = {
  mint: 'bg-[#80F4B5]',
  lavender: 'bg-[#B398FA]/35',
  butter: 'bg-[#FFF0B3]',
};

export function ResultsSection() {
  return (
    <section id="results" className="scroll-mt-24 py-16 md:py-24 bg-white">
      <div className="max-w-[1220px] mx-auto px-5 sm:px-8">
        <div className="max-w-2xl space-y-3 mb-12">
          <p className="text-sm font-medium text-neutral-500">
            Verified Cohort Outcomes
          </p>
          <h2 className="font-display text-3xl sm:text-4xl font-bold tracking-tight text-[#141414] text-balance">
            Real creators and business owners scaling with proven formats
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {CASE_STUDIES.map((study) => (
            <article
              key={study.id}
              className="rounded-[32px] border border-neutral-200 bg-white overflow-hidden flex flex-col justify-between"
            >
              <div>
                <div className={`${HEADER_SURFACE[study.tone]} p-6 flex items-center gap-4`}>
                  <img
                    src={study.avatar}
                    alt={`${study.name}, ${study.role}`}
                    referrerPolicy="no-referrer"
                    className="w-16 h-16 rounded-full object-cover object-top border-2 border-white shrink-0"
                  />
                  <div>
                    <h3 className="font-display text-lg font-bold text-[#141414]">
                      {study.name}
                    </h3>
                    <p className="text-xs sm:text-sm text-[#141414]/80">
                      {study.role} · {study.organization}
                    </p>
                  </div>
                </div>

                <div className="p-6 space-y-5">
                  <div className="grid grid-cols-2 gap-3 pb-4 border-b border-neutral-200/80">
                    <div>
                      <p className="text-xs text-neutral-500">Before</p>
                      <p className="text-sm font-semibold text-neutral-700 mt-0.5">
                        {study.beforeMetric}
                      </p>
                    </div>
                    <div>
                      <p className="text-xs text-neutral-500">Outcome</p>
                      <p className="font-mono text-sm font-bold text-[#141414] tabular-nums mt-0.5">
                        {study.outcomeMetric}
                      </p>
                      <p className="text-xs text-neutral-500">{study.timeframe}</p>
                    </div>
                  </div>

                  <p className="text-sm sm:text-base text-neutral-700 leading-relaxed">
                    "{study.quote}"
                  </p>
                </div>
              </div>

              <div className="px-6 py-4 bg-[#F7F7F5] border-t border-neutral-200/70 text-xs text-neutral-600">
                Primary Format: <span className="font-semibold text-[#141414]">{study.formatApplied}</span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
