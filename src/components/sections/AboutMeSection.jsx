import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const phrases = [
  "Software Development",
  "Machine Learning",
  "Data Analytics",
];

const About = () => {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, margin: "-20%" });

  return (
    <section ref={containerRef} id="about" className="min-h-screen w-full flex items-center justify-center bg-[#050505] py-24 text-[#e1e1e1]">
      <div className="max-w-screen-xl mx-auto px-6 md:px-12 w-full">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
          <div className="md:col-span-3">
             <motion.span 
               initial={{ opacity: 0, y: 20 }}
               animate={isInView ? { opacity: 1, y: 0 } : {}}
               transition={{ duration: 0.6, delay: 0.2 }}
               className="text-xl font-medium uppercase tracking-widest text-white/40 block border-b border-white/10 pb-4 w-24"
             >
               About Me
             </motion.span>
          </div>
          
          <div className="md:col-span-9">
            <div className="space-y-2">
            {phrases.map((phrase, index) => (
              <div key={index} className="overflow-hidden">
                <motion.h2
                  custom={index}
                  initial={{ y: "110%" }}
                  animate={isInView ? { y: 0 } : {}}
                  transition={{ 
                    duration: 1, 
                    ease: [0.16, 1, 0.3, 1], 
                    delay: 0.1 * index 
                  }}
                  className="text-3xl md:text-5xl lg:text-6xl font-semibold leading-[1.1] tracking-tight"
                >
                  {phrase}
                </motion.h2>
              </div>
            ))}
            </div>
            
            <motion.div 
               initial={{ opacity: 0, y: 20 }}
               animate={isInView ? { opacity: 1, y: 0 } : {}}
               transition={{ delay: 0.8, duration: 1 }}
               className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-8 border-t border-white/10 pt-8"
            >
              <p className="text-base text-white/60 leading-relaxed">
                I'm a computer science student at Northwestern University passionate about app development, robotics, and sports analytics.
              </p>
              <p className="text-base text-white/60 leading-relaxed">
                My work spans from building full-stack web applications to applying machine learning algorithms in sports industry.
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
