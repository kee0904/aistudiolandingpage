import { CheckCircle2, X } from 'lucide-react';
import { FormEvent, useEffect, useState } from 'react';
import { AUDIENCE_PROFILES, NicheId, PlanId } from '../data/programmeData';
import {
  ApplicationFormInput,
  calculatePricingSummary,
  validateApplicationForm,
} from '../utils/acceleratorLogic';

interface ApplicationModalProps {
  isOpen: boolean;
  initialNiche: NicheId;
  initialPlan: PlanId;
  onClose: () => void;
}

export function ApplicationModal({
  isOpen,
  initialNiche,
  initialPlan,
  onClose,
}: ApplicationModalProps) {
  const [formState, setFormState] = useState<ApplicationFormInput>({
    fullName: '',
    email: '',
    socialHandle: '',
    niche: initialNiche,
    planId: initialPlan,
    agreedToWeeklyCadence: false,
  });
  const [errors, setErrors] = useState<Partial<Record<keyof ApplicationFormInput, string>>>(
    {}
  );
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    setFormState((prev) => ({
      ...prev,
      niche: initialNiche,
      planId: initialPlan,
    }));
  }, [initialNiche, initialPlan]);

  useEffect(() => {
    if (!isOpen) return;
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const planSummary = calculatePricingSummary(formState.planId);

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    const validation = validateApplicationForm(formState);
    if (!validation.valid) {
      setErrors(validation.errors);
      return;
    }
    setErrors({});
    setSubmitted(true);
  };

  const handleResetAndClose = () => {
    setSubmitted(false);
    setErrors({});
    onClose();
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="application-modal-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/55 backdrop-blur-xs"
    >
      <div className="relative w-full max-w-lg bg-white rounded-[32px] p-6 sm:p-8 shadow-2xl border border-neutral-200 max-h-[92vh] overflow-y-auto">
        <button
          type="button"
          onClick={handleResetAndClose}
          aria-label="Close application modal"
          className="absolute top-5 right-5 w-10 h-10 rounded-full border border-neutral-200 flex items-center justify-center text-neutral-600 hover:text-[#141414] hover:border-[#141414] transition-colors cursor-pointer"
        >
          <X className="w-4 h-4" />
        </button>

        {submitted ? (
          <div data-testid="application-confirmation" className="py-4 space-y-5">
            <div className="w-12 h-12 rounded-full bg-[#80F4B5] flex items-center justify-center text-[#141414]">
              <CheckCircle2 className="w-6 h-6" />
            </div>

            <div className="space-y-2">
              <h2
                id="application-modal-title"
                className="font-display text-2xl font-bold text-[#141414]"
              >
                Cohort application received
              </h2>
              <p className="text-sm sm:text-base text-neutral-600">
                Thank you, <span className="font-semibold text-[#141414]">{formState.fullName}</span>.
                Our coaching team is reviewing your channel ({formState.socialHandle}) and
                will email onboarding details to{' '}
                <span className="font-semibold text-[#141414]">{formState.email}</span>.
              </p>
            </div>

            <div className="p-4 rounded-2xl bg-[#F7F7F5] space-y-1.5 text-sm">
              <div className="flex justify-between">
                <span className="text-neutral-500">Selected Tuition Plan</span>
                <span className="font-mono font-semibold text-[#141414] tabular-nums">
                  {planSummary.headlinePrice}
                </span>
              </div>
              <div className="flex justify-between">
                <span className="text-neutral-500">Track</span>
                <span className="font-medium text-[#141414]">
                  {AUDIENCE_PROFILES.find((n) => n.id === formState.niche)?.label}
                </span>
              </div>
            </div>

            <button
              type="button"
              onClick={handleResetAndClose}
              className="w-full py-3.5 px-6 rounded-full bg-[#141414] text-white text-sm font-semibold hover:bg-neutral-800 transition-colors cursor-pointer"
            >
              Return to Programme Page
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} noValidate className="space-y-5">
            <div className="pr-10 space-y-1.5">
              <p className="text-xs font-semibold text-neutral-500">
                4-Month Cohort Enrollment
              </p>
              <h2
                id="application-modal-title"
                className="font-display text-2xl font-bold text-[#141414]"
              >
                Apply for Viral Content Accelerator
              </h2>
            </div>

            {/* Plan Picker */}
            <div className="grid grid-cols-2 gap-2.5">
              <button
                type="button"
                onClick={() => setFormState((prev) => ({ ...prev, planId: 'one-time' }))}
                className={`p-3 rounded-2xl border text-left transition-all cursor-pointer ${
                  formState.planId === 'one-time'
                    ? 'bg-[#80F4B5]/45 border-[#141414]'
                    : 'bg-white border-neutral-200 hover:border-neutral-400'
                }`}
              >
                <p className="text-xs font-medium text-neutral-600">One-Time</p>
                <p className="font-mono text-base font-bold text-[#141414] tabular-nums">
                  US$5,999
                </p>
              </button>
              <button
                type="button"
                onClick={() =>
                  setFormState((prev) => ({ ...prev, planId: 'payment-plan' }))
                }
                className={`p-3 rounded-2xl border text-left transition-all cursor-pointer ${
                  formState.planId === 'payment-plan'
                    ? 'bg-[#B398FA]/30 border-[#141414]'
                    : 'bg-white border-neutral-200 hover:border-neutral-400'
                }`}
              >
                <p className="text-xs font-medium text-neutral-600">4 Monthly</p>
                <p className="font-mono text-base font-bold text-[#141414] tabular-nums">
                  US$1,650 × 4
                </p>
              </button>
            </div>

            <div className="space-y-1.5">
              <label
                htmlFor="apply-full-name"
                className="block text-xs font-semibold text-neutral-700"
              >
                Full Name
              </label>
              <input
                id="apply-full-name"
                type="text"
                value={formState.fullName}
                onChange={(e) =>
                  setFormState((prev) => ({ ...prev, fullName: e.target.value }))
                }
                placeholder="e.g. Jordan Mercer"
                className="w-full px-4 py-2.5 rounded-xl border border-neutral-300 text-sm text-[#141414] focus:outline-none focus:border-[#141414]"
              />
              {errors.fullName && (
                <p className="text-xs font-medium text-red-600">{errors.fullName}</p>
              )}
            </div>

            <div className="space-y-1.5">
              <label
                htmlFor="apply-email"
                className="block text-xs font-semibold text-neutral-700"
              >
                Email Address
              </label>
              <input
                id="apply-email"
                type="email"
                value={formState.email}
                onChange={(e) =>
                  setFormState((prev) => ({ ...prev, email: e.target.value }))
                }
                placeholder="jordan@studio.co"
                className="w-full px-4 py-2.5 rounded-xl border border-neutral-300 text-sm text-[#141414] focus:outline-none focus:border-[#141414]"
              />
              {errors.email && (
                <p className="text-xs font-medium text-red-600">{errors.email}</p>
              )}
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
              <div className="space-y-1.5">
                <label
                  htmlFor="apply-handle"
                  className="block text-xs font-semibold text-neutral-700"
                >
                  Primary Social Handle
                </label>
                <input
                  id="apply-handle"
                  type="text"
                  value={formState.socialHandle}
                  onChange={(e) =>
                    setFormState((prev) => ({ ...prev, socialHandle: e.target.value }))
                  }
                  placeholder="@yourhandle"
                  className="w-full px-4 py-2.5 rounded-xl border border-neutral-300 text-sm text-[#141414] focus:outline-none focus:border-[#141414]"
                />
                {errors.socialHandle && (
                  <p className="text-xs font-medium text-red-600">
                    {errors.socialHandle}
                  </p>
                )}
              </div>

              <div className="space-y-1.5">
                <label
                  htmlFor="apply-niche"
                  className="block text-xs font-semibold text-neutral-700"
                >
                  Creator Track
                </label>
                <select
                  id="apply-niche"
                  value={formState.niche}
                  onChange={(e) =>
                    setFormState((prev) => ({
                      ...prev,
                      niche: e.target.value as NicheId,
                    }))
                  }
                  className="w-full px-3.5 py-2.5 rounded-xl border border-neutral-300 bg-white text-sm text-[#141414] focus:outline-none focus:border-[#141414]"
                >
                  {AUDIENCE_PROFILES.map((niche) => (
                    <option key={niche.id} value={niche.id}>
                      {niche.label}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            <div className="space-y-1.5">
              <label className="flex items-start gap-2.5 text-xs text-neutral-700 cursor-pointer">
                <input
                  type="checkbox"
                  checked={formState.agreedToWeeklyCadence}
                  onChange={(e) =>
                    setFormState((prev) => ({
                      ...prev,
                      agreedToWeeklyCadence: e.target.checked,
                    }))
                  }
                  className="mt-0.5 w-4 h-4 accent-[#141414]"
                />
                <span>
                  I understand the 1,000,000-view guarantee requires attending 1+
                  coaching call and publishing 1+ video per week across 4 months.
                </span>
              </label>
              {errors.agreedToWeeklyCadence && (
                <p className="text-xs font-medium text-red-600">
                  {errors.agreedToWeeklyCadence}
                </p>
              )}
            </div>

            <button
              type="submit"
              className="w-full py-3.5 px-6 rounded-full bg-[#141414] text-white text-sm font-semibold hover:bg-neutral-800 transition-colors cursor-pointer"
            >
              Submit Application · {planSummary.headlinePrice}
            </button>
          </form>
        )}
      </div>
    </div>
  );
}
