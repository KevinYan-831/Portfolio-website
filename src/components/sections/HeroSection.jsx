import { ArrowDown } from 'lucide-react';
import RevealOnScroll from '../common/RevealOnScroll';

const RevealText = ({ text, delay = 0, className = '' }) => {
  return (
    <div className="overflow-hidden">
      <div
        className={`animate-slideInUp ${className}`}
        style={{ animationDelay: `${delay}ms` }}
      >
        {text}
      </div>
    </div>
  );
};

const HeroSection = () => {
  return (
    <section className="min-h-screen flex flex-col justify-end pb-12 px-4 md:px-8 pt-32 relative">
      <div className="max-w-full space-y-[-2vw] z-0">
        <RevealText
          text="JIXIN YAN"
          className="text-[18vw] leading-[0.8] font-bold tracking-tighter text-[#111]"
          delay={0}
        />
        <RevealText
          text="DEVELOPER"
          className="text-[15vw] leading-[0.8] font-bold tracking-tighter text-[#b0b0b0] ml-[5vw]"
          delay={150}
        />
      </div>

      <div className="flex flex-col md:flex-row justify-between items-end mt-12 md:mt-24">
        <RevealOnScroll delay={500}>
          <div className="flex items-center gap-4 animate-bounce">
            <ArrowDown size={24} />
            <span className="text-xs font-mono uppercase">Scroll</span>
          </div>
        </RevealOnScroll>

        <RevealOnScroll delay={600} className="text-right hidden md:block">
          <p className="text-sm font-medium leading-relaxed uppercase tracking-wide">
            Evanston, IL<br />
            Northwestern University
          </p>
        </RevealOnScroll>
      </div>
    </section>
  );
};

export default HeroSection;
