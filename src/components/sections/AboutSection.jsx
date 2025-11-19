import { ArrowUpRight } from 'lucide-react';
import RevealOnScroll from '../common/RevealOnScroll';

const AboutSection = () => {
  return (
    <section id="about" className="py-32 px-6 bg-[#111] text-white">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-20">
        <div>
          <RevealOnScroll className="sticky top-32">
            <h2 className="text-6xl md:text-8xl font-medium tracking-tight mb-8">
              Code as <br /> <span className="text-gray-500">Craft.</span>
            </h2>
            <a href="#" className="text-sm font-mono uppercase text-gray-500 hover:text-white transition-colors border-b border-gray-800 pb-1 inline-block group">
              Download Resume <ArrowUpRight className="inline-block ml-1 w-3 h-3 group-hover:-translate-y-0.5 transition-transform" />
            </a>
          </RevealOnScroll>
        </div>
        <div className="flex flex-col justify-between space-y-16">
          <RevealOnScroll delay={200}>
            <p className="text-xl md:text-2xl font-light text-gray-300 leading-relaxed">
              I believe that robust backend logic and fluid frontend interaction are two sides of the same coin. My approach combines rigorous computer science principles with modern design sensibilities.
            </p>
          </RevealOnScroll>

          <div className="space-y-12">
            <RevealOnScroll delay={300}>
              <div className="border-t border-gray-800 pt-8">
                <h4 className="text-sm font-mono text-gray-500 mb-6 uppercase">Tech Stack</h4>
                <div className="grid grid-cols-2 gap-4 text-lg font-light text-gray-300">
                  <span>TypeScript / React</span>
                  <span>Node.js / Express</span>
                  <span>Go / Docker</span>
                  <span>PostgreSQL / Redis</span>
                  <span>AWS / Terraform</span>
                  <span>WebGL / Three.js</span>
                </div>
              </div>
            </RevealOnScroll>

            <RevealOnScroll delay={400}>
              <div className="border-t border-gray-800 pt-8">
                <h4 className="text-sm font-mono text-gray-500 mb-6 uppercase">Capabilities</h4>
                <div className="grid grid-cols-2 gap-4 text-lg font-light text-gray-300">
                  <span>Frontend Development</span>
                  <span>Backend Architecture</span>
                  <span>System Design</span>
                  <span>Performance Optimization</span>
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
