import { useState } from 'react';
import Navbar from '../components/common/Navbar';
import MobileMenu from '../components/common/MobileMenu';
import Marquee from '../components/common/Marquee';
import HeroSection from '../components/sections/HeroSection';
import WorkSection from '../components/sections/WorkSection';
import AboutSection from '../components/sections/AboutSection';
import ContactSection from '../components/sections/ContactSection';

const HomePage = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#f4f4f4] text-[#111] font-sans selection:bg-black selection:text-white overflow-x-hidden relative">
      <Navbar onOpenMenu={() => setIsMenuOpen(true)} />
      <MobileMenu isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)} />

      <main>
        <HeroSection />
        <Marquee text="Open to Work • Creative Dev • System Design •" />
        <WorkSection />
        <AboutSection />
        <ContactSection />
      </main>

      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translate(-50%, -50%) rotate(0deg) scale(0.9); }
          to { opacity: 1; transform: translate(-50%, -50%) rotate(-2deg) scale(1); }
        }
        .animate-fadeIn {
          animation: fadeIn 0.4s ease-out forwards;
        }
      `}</style>
    </div>
  );
};

export default HomePage;
