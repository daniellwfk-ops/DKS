import HeroSection from '@/components/sections/HeroSection';
import PainPointsSection from '@/components/sections/PainPointsSection';

export default function Home() {
  return (
    <main className="min-h-screen bg-[#0B0B0B] text-white overflow-hidden font-[family-name:var(--font-montserrat)] relative">

      {/* 
        NEW REDESIGN ARCHITECTURE 
      */}
      <HeroSection />

      {/* 2. Pain Points Section */}
      <PainPointsSection />

    </main>
  );
}
