import { ArrowDown } from 'lucide-react';
import RevealText from '../common/RevealText';
import RevealOnScroll from '../common/RevealOnScroll';
import LightRays from '../common/LightRays';

const HeroSection = () => {
  return (
    <section className="h-screen flex flex-col justify-between pt-32 pb-12 px-6 relative overflow-hidden">
      <LightRays />
      <div className="flex-1 flex items-center justify-center relative z-10">
        <div className="text-center">
          <RevealText
            text="JIXIN YAN"
            className="text-[10vw] md:text-[9vw] leading-[0.9] font-bold tracking-tighter text-[#111]"
            delay={100}
            direction="left"
          />
          <RevealText
            text="ASPIRING"
            className="text-[5vw] md:text-[4vw] leading-[0.9] font-bold tracking-tighter text-gray-400"
            delay={400}
            direction="right"
          />
          <RevealText
            text="SOFTWARE ENGINEER"
            className="text-[8vw] md:text-[7vw] leading-[0.9] font-bold tracking-tighter text-[#111]"
            delay={700}
            direction="left"
          />
        </div>
      </div>

      <RevealOnScroll delay={700}>
        <div className="flex justify-between items-end relative z-10">
          <div className="hidden md:block max-w-xs">
            <p className="text-sm text-gray-500 leading-relaxed font-medium">
              THE JOURNEY IS THE REWARD
            </p>
          </div>
          <div className="animate-bounce p-4 rounded-full border border-black/10 bg-white/50 backdrop-blur-sm">
            <ArrowDown size={24} />
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};

export default HeroSection;
