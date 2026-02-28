import HeroSection from '@/components/sections/HeroSection';
import PainPointsSection from '@/components/sections/PainPointsSection';
import AuthoritySection from '@/components/sections/AuthoritySection';
import BenefitsSection from '@/components/sections/BenefitsSection';

export default function Home() {
  return (
    <main className="min-h-screen bg-[#0B0B0B] text-white overflow-hidden font-[family-name:var(--font-montserrat)] relative">

      {/* 
        NEW REDESIGN ARCHITECTURE 
      */}
      <HeroSection />

      {/* 2. Pain Points Section */}
      <PainPointsSection />

      {/* 3. Authority Section */}
      <AuthoritySection />

      {/* 4. Benefits Section (Cards + Transition CTA) */}
      <BenefitsSection />

    </main>
  );
}
