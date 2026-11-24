import { Menu, X } from 'lucide-react';
import { useState } from 'react';

interface NavbarProps {
  onApplyClick: () => void;
}

const NAV_LINKS = [
  { href: '#how-it-works', label: 'How It Works' },
  { href: '#format-finder', label: 'Format Finder' },
  { href: '#curriculum', label: 'Curriculum' },
  { href: '#results', label: 'Results' },
  { href: '#pricing', label: 'Pricing' },
];

export function Navbar({ onApplyClick }: NavbarProps) {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-neutral-200/80">
      <div className="max-w-[1220px] mx-auto px-5 sm:px-8 h-16 md:h-20 flex items-center justify-between gap-8">
        {/* Zone 1: Single-line Brand Wordmark */}
        <a
          href="#"
          className="inline-flex items-center gap-2.5 text-lg font-bold tracking-tight text-[#141414] whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#141414] rounded-md"
        >
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            aria-hidden="true"
            className="shrink-0"
          >
            <path
              d="M5 4.5C5 3.67157 5.67157 3 6.5 3H15.5C17.9853 3 20 5.01472 20 7.5C20 9.98528 17.9853 12 15.5 12H8.5C6.567 12 5 10.433 5 8.5V4.5Z"
              fill="#141414"
            />
            <path
              d="M4 15.5C4 13.567 5.567 12 7.5 12H16.5C17.8807 12 19 13.1193 19 14.5C19 17.5376 16.5376 20 13.5 20H6.5C5.11929 20 4 18.8807 4 17.5V15.5Z"
              fill="#141414"
            />
          </svg>
          <span>OnePeak</span>
        </a>

        {/* Zone 2: 5 concise single-line text links */}
        <nav aria-label="Primary navigation" className="hidden md:flex items-center gap-7">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-neutral-600 hover:text-[#141414] transition-colors duration-150 whitespace-nowrap shrink-0 hover:underline underline-offset-4 decoration-neutral-300 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#141414] rounded-sm"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Zone 3: Single Primary Action */}
        <div className="flex items-center gap-3 shrink-0">
          <button
            type="button"
            onClick={onApplyClick}
            className="hidden md:inline-flex items-center justify-center px-5 py-2.5 text-sm font-semibold text-white bg-[#141414] rounded-full hover:bg-neutral-800 active:scale-[0.98] transition-all duration-150 whitespace-nowrap shrink-0 cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#141414]"
          >
            Apply Now
          </button>

          <button
            type="button"
            onClick={() => setMobileOpen((prev) => !prev)}
            aria-expanded={mobileOpen}
            aria-label={mobileOpen ? 'Close navigation menu' : 'Open navigation menu'}
            className="md:hidden inline-flex items-center justify-center w-11 h-11 rounded-full border border-neutral-200 text-[#141414] hover:bg-neutral-100 transition-colors cursor-pointer"
          >
            {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileOpen && (
        <div className="md:hidden border-t border-neutral-200 bg-white px-5 py-4 space-y-2">
          <nav aria-label="Mobile navigation" className="flex flex-col gap-1">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="py-2.5 px-3 rounded-xl text-base font-medium text-neutral-700 hover:bg-neutral-100 hover:text-[#141414] transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>
          <div className="pt-2">
            <button
              type="button"
              onClick={() => {
                setMobileOpen(false);
                onApplyClick();
              }}
              className="w-full py-3 px-5 rounded-full bg-[#141414] text-white text-sm font-semibold hover:bg-neutral-800 transition-colors cursor-pointer"
            >
              Apply Now
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
