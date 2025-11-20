import { useState } from 'react';
import Navbar from '../components/common/Navbar';
import MobileMenu from '../components/common/MobileMenu';
import Marquee from '../components/common/Marquee';
import HeroSection from '../components/sections/HeroSection';
import WorkSection from '../components/sections/WorkSection';
import WhatIDoSection from '../components/sections/WhatIDoSection';
import AboutMeSection from '../components/sections/AboutMeSection';
import ContactSection from '../components/sections/ContactSection';

const HomePage = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#f4f4f4] text-[#111] font-sans selection:bg-black selection:text-white relative">
      <Navbar onOpenMenu={() => setIsMenuOpen(true)} />
      <MobileMenu isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)} />

      <main>
        <HeroSection />
        <Marquee text="The Journey is the Reward" />
        <AboutMeSection />
        <WhatIDoSection />
        <WorkSection />
        <ContactSection />
      </main>

      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes slideInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fadeIn {
          animation: fadeIn 0.6s ease-out forwards;
          opacity: 0;
        }
        .animate-slideInUp {
          animation: slideInUp 0.7s cubic-bezier(.51,.92,.24,1.15) forwards;
          opacity: 0;
        }
      `}</style>
    </div>
  );
};

export default HomePage;
