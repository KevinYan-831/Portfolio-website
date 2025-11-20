import { ArrowDown } from 'lucide-react';
import RevealText from '../common/RevealText';
import RevealOnScroll from '../common/RevealOnScroll';

const HeroSection = () => {
  return (
    <section className="h-screen flex flex-col justify-between pt-32 pb-12 px-6 relative">
      <div className="max-w-[90vw]">
        <RevealText
          text="JIXIN YAN"
          className="text-[13vw] leading-[0.85] font-bold tracking-tighter text-[#111]"
          delay={100}
        />
        <RevealText
          text="ENGINEER"
          className="text-[13vw] leading-[0.85] font-bold tracking-tighter text-gray-400"
          delay={300}
        />
        <RevealText
          text="BASED IN EVANSTON"
          className="text-[13vw] leading-[0.85] font-bold tracking-tighter text-[#111]"
          delay={500}
        />
      </div>

      <RevealOnScroll delay={800}>
        <div className="flex justify-between items-end">
          <div className="hidden md:block max-w-xs">
            <p className="text-sm text-gray-500 leading-relaxed font-medium">
              THE JOURNEY IS THE REWARD
            </p>
          </div>
          <div className="animate-bounce p-4 rounded-full border border-black/10">
            <ArrowDown size={24} />
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};

export default HeroSection;
