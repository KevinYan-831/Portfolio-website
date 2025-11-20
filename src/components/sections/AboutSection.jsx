import { ArrowUpRight } from 'lucide-react';
import RevealOnScroll from '../common/RevealOnScroll';

const AboutSection = () => {
  return (
    <section id="about" className="py-32 px-6 bg-[#111] text-white">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-20">
        <div className="flex items-center justify-center">
          <RevealOnScroll className="sticky top-32">
            <h2 className="text-6xl md:text-8xl font-medium tracking-tight mb-8 text-center">
              Code as <br /> <span className="text-gray-500">Expression</span>
            </h2>
          </RevealOnScroll>
        </div>
        <div className="flex flex-col justify-between space-y-16">
          <RevealOnScroll delay={200}>
            <p className="text-xl md:text-2xl font-light text-gray-300 leading-relaxed">
              I build because I’m drawn to the spark between an idea and what it becomes. Every line of code, every design choice, every obstacle teaches me something new. I chase the craft, not the finish line—because for me, the journey is the reward.
            </p>
          </RevealOnScroll>

          <div className="space-y-12">
            <RevealOnScroll delay={300}>
              <div className="border-t border-gray-800 pt-8">
                <h4 className="text-sm font-mono text-gray-500 mb-6 uppercase">Tech Stack</h4>
                <div className="grid grid-cols-2 gap-4 text-lg font-light text-gray-300">
                  <span>(Java/Type) Script / React</span>
                  <span>Node.js / Express</span>
                  <span>Python / Flask, Django</span>
                  <span>PostgreSQL / Supabase</span>
                  <span>Firebase / Replit</span>
                  <span>Git / Github</span>
                </div>
              </div>
            </RevealOnScroll>

            <RevealOnScroll delay={400}>
              <div className="border-t border-gray-800 pt-8">
                <h4 className="text-sm font-mono text-gray-500 mb-6 uppercase">Capabilities</h4>
                <div className="grid grid-cols-2 gap-4 text-lg font-light text-gray-300">
                  <span>Full Stack Development</span>
                  <span>Machine Learning</span>
                  <span>Data Analytics and Visualizations</span>
                  <span>Project Management and Prototyping</span>
                </div>
              </div>
            </RevealOnScroll>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
