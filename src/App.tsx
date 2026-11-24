import { useState } from 'react';
import { ApplicationModal } from './components/ApplicationModal';
import { CurriculumSection } from './components/CurriculumSection';
import { FaqAndFooter } from './components/FaqAndFooter';
import { FormatFinderStudio } from './components/FormatFinderStudio';
import { FormatLoopSection } from './components/FormatLoopSection';
import { HeroSection } from './components/HeroSection';
import { Navbar } from './components/Navbar';
import { PricingAndGuarantee } from './components/PricingAndGuarantee';
import { ResultsSection } from './components/ResultsSection';
import { NicheId, PlanId } from './data/programmeData';

export default function App() {
  const [selectedNiche, setSelectedNiche] = useState<NicheId>('creators');
  const [selectedPlan, setSelectedPlan] = useState<PlanId>('one-time');
  const [modalOpen, setModalOpen] = useState(false);

  const handleOpenApplication = (plan?: PlanId) => {
    if (plan) {
      setSelectedPlan(plan);
    }
    setModalOpen(true);
  };

  return (
    <div className="min-h-screen bg-white text-[#141414]">
      <Navbar onApplyClick={() => handleOpenApplication()} />

      <main>
        <HeroSection
          selectedNiche={selectedNiche}
          onSelectNiche={setSelectedNiche}
          onApplyClick={() => handleOpenApplication()}
        />

        <FormatLoopSection />

        <FormatFinderStudio
          selectedNiche={selectedNiche}
          onSelectNiche={setSelectedNiche}
          onApplyClick={() => handleOpenApplication()}
        />

        <CurriculumSection />

        <ResultsSection />

        <PricingAndGuarantee
          selectedPlan={selectedPlan}
          onSelectPlan={setSelectedPlan}
          onOpenApplication={handleOpenApplication}
        />

        <FaqAndFooter onApplyClick={() => handleOpenApplication()} />
      </main>

      <ApplicationModal
        isOpen={modalOpen}
        initialNiche={selectedNiche}
        initialPlan={selectedPlan}
        onClose={() => setModalOpen(false)}
      />
    </div>
  );
}
