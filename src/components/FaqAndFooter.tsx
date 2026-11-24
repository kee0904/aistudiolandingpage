import { ChevronDown } from 'lucide-react';
import { useState } from 'react';
import { PROGRAMME_FAQS } from '../data/programmeData';

interface FaqAndFooterProps {
  onApplyClick: () => void;
}

export function FaqAndFooter({ onApplyClick }: FaqAndFooterProps) {
  const [openId, setOpenId] = useState<string | null>(PROGRAMME_FAQS[0].id);

  return (
    <>
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-[920px] mx-auto px-5 sm:px-8">
          <div className="text-center space-y-3 mb-12">
            <p className="text-sm font-medium text-neutral-500">Common Questions</p>
            <h2 className="font-display text-3xl sm:text-4xl font-bold tracking-tight text-[#141414]">
              Before you apply
            </h2>
          </div>

          <div className="divide-y divide-neutral-200 border-t border-b border-neutral-200">
            {PROGRAMME_FAQS.map((faq) => {
              const isOpen = openId === faq.id;
              return (
                <div key={faq.id} className="py-5">
                  <button
                    type="button"
                    aria-expanded={isOpen}
                    onClick={() => setOpenId(isOpen ? null : faq.id)}
                    className="w-full flex items-center justify-between gap-4 text-left cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#141414] rounded-lg"
                  >
                    <span className="font-display text-base sm:text-lg font-semibold text-[#141414]">
                      {faq.question}
                    </span>
                    <ChevronDown
                      className={`w-5 h-5 text-neutral-500 shrink-0 transition-transform duration-200 ${
                        isOpen ? 'rotate-180 text-[#141414]' : ''
                      }`}
                    />
                  </button>
                  {isOpen && (
                    <p className="mt-3 text-sm sm:text-base text-neutral-600 leading-relaxed pr-8">
                      {faq.answer}
                    </p>
                  )}
                </div>
              );
            })}
          </div>

          {/* Closing Conversion Banner */}
          <div className="mt-14 bg-[#141414] text-white squircle-tr p-8 sm:p-12 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <div className="space-y-2 max-w-lg">
              <h3 className="font-display text-2xl sm:text-3xl font-bold tracking-tight text-balance">
                Ready to make viral video growth predictable?
              </h3>
              <p className="text-sm sm:text-base text-neutral-300">
                Join the next 4-month Viral Content Accelerator cohort and build your
                repeatable Format Finder™ library.
              </p>
            </div>
            <button
              type="button"
              onClick={onApplyClick}
              className="px-7 py-3.5 rounded-full bg-[#80F4B5] text-[#141414] text-sm sm:text-base font-bold hover:brightness-95 transition-all whitespace-nowrap shrink-0 cursor-pointer"
            >
              Apply for Cohort
            </button>
          </div>
        </div>
      </section>

      {/* Quiet Footer */}
      <footer className="border-t border-neutral-200 bg-white py-10">
        <div className="max-w-[1220px] mx-auto px-5 sm:px-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 text-sm text-neutral-500">
          <div className="flex items-center gap-2 font-display font-bold text-[#141414]">
            <span>OnePeak</span>
            <span className="text-neutral-300">·</span>
            <span className="font-normal text-neutral-500">Viral Content Accelerator</span>
          </div>

          <div className="flex flex-wrap items-center gap-6">
            <a href="#how-it-works" className="hover:text-[#141414] transition-colors">
              How It Works
            </a>
            <a href="#format-finder" className="hover:text-[#141414] transition-colors">
              Format Finder
            </a>
            <a href="#curriculum" className="hover:text-[#141414] transition-colors">
              Curriculum
            </a>
            <a href="#pricing" className="hover:text-[#141414] transition-colors">
              Pricing
            </a>
          </div>

          <p className="text-xs text-neutral-400">
            © {new Date().getFullYear()} OnePeak Creative. All rights reserved.
          </p>
        </div>
      </footer>
    </>
  );
}
