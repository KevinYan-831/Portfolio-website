import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const cards = [
  {
    title: "Full-Stack Developer",
    description: "Building scalable web applications with modern frameworks and cloud infrastructure. From React frontends to Node.js backends, I craft solutions that perform.",
    tags: ["React", "Node.js", "TypeScript", "Next.js"],
    color: "#111111"
  },
  {
    title: "ML Enthusiast",
    description: "Exploring machine learning to solve real-world problems. From data preprocessing to model deployment, I bridge the gap between data and insights.",
    tags: ["Python", "TensorFlow", "PyTorch", "Scikit-learn"],
    color: "#161616"
  },
  {
    title: "Problem Solver",
    description: "Transforming complex challenges into elegant solutions through clean code, thoughtful design, and continuous learning. The journey is the reward.",
    tags: ["System Design", "Architecture", "Algorithms", "Optimization"],
    color: "#1a1a1a"
  }
];

const Card = ({ i, title, description, tags, color, progress, range, targetScale }) => {
  const containerRef = useRef(null);
  const scale = useTransform(progress, range, [1, targetScale]);
  
  return (
    <div ref={containerRef} className="h-screen flex items-center justify-center sticky top-0">
      <motion.div
        style={{
          scale,
          backgroundColor: color,
          top: `calc(5vh + ${i * 25}px)`
        }}
        className="flex flex-col relative w-[90vw] md:w-[1000px] h-[60vh] md:h-[550px] rounded-3xl overflow-hidden border border-white/10 shadow-2xl origin-top"
      >
        <div className="p-8 md:p-14 flex flex-col h-full justify-between relative z-10">
          <div className="flex justify-between items-start">
            <h2 className="text-4xl md:text-6xl font-serif text-white leading-tight max-w-lg">
              {title}
            </h2>
            <span className="text-sm font-mono text-gray-500 border border-gray-800 px-3 py-1 rounded-full">
              0{i + 1}
            </span>
          </div>

          <div className="flex flex-col md:flex-row justify-between items-end gap-8">
            <p className="text-lg text-gray-400 max-w-md leading-relaxed">
              {description}
            </p>
            
            <div className="flex flex-wrap gap-2 justify-end">
              {tags.map((tag, idx) => (
                <span 
                  key={idx} 
                  className="text-xs uppercase tracking-wider text-gray-300 bg-white/5 px-4 py-2 rounded-full border border-white/5"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

const WhatIDoSection = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end']
  });

  return (
    <section ref={containerRef} id="what-i-do" className="relative bg-black">
      <div className="pt-20 pb-20 px-6 md:px-12 mb-20">
        <h2 className="text-xs uppercase tracking-[0.3em] text-gray-500 mb-12">What I Do</h2>
        {cards.map((card, i) => {
          const targetScale = 1 - ((cards.length - i) * 0.05);
          return (
            <Card
              key={i}
              i={i}
              {...card}
              progress={scrollYProgress}
              range={[i * 0.25, 1]}
              targetScale={targetScale}
            />
          );
        })}
      </div>
    </section>
  );
};

export default WhatIDoSection;
