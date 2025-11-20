import React, { useState, useEffect, useRef } from 'react';
import { motion, useInView } from 'framer-motion';

import { projects as projectData } from '../../data/projects';

// Placeholder images since project data doesn't have images yet
const placeholderImages = [
  "https://images.unsplash.com/photo-1618331835717-801e976710b2?q=80&w=1000&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=1000&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1000&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?q=80&w=1000&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=1000&auto=format&fit=crop"
];

const projects = projectData.map((project, index) => ({
  id: index + 1,
  title: project.title,
  category: project.category,
  src: project.images?.[0] || placeholderImages[index % placeholderImages.length]
}));

const ProjectCard = ({ project, index, setIndex }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { margin: "-40% 0px -40% 0px" });

  useEffect(() => {
    if (isInView) {
      setIndex(index);
    }
  }, [isInView, index, setIndex]);

  return (
    <div ref={ref} className="mb-32 last:mb-0 group cursor-pointer w-full">
      <div className="relative overflow-hidden bg-[#111] aspect-[3/4] md:aspect-[4/3] mb-6">
         <motion.img 
           src={project.src} 
           alt={project.title}
           className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-80 group-hover:opacity-100"
           initial={{ scale: 1.2 }}
           whileInView={{ scale: 1 }}
           viewport={{ once: true }}
           transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
         />
      </div>
      <div className="flex flex-col gap-2">
        <h3 className="text-2xl md:text-3xl font-medium text-[#e1e1e1]">{project.title}</h3>
        <span className="text-sm text-white/40 uppercase tracking-wider">{project.category}</span>
      </div>
    </div>
  );
};

const Works = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  return (
    <section id="works" className="relative w-full bg-[#050505] text-white py-24">
      <div className="max-w-screen-xl mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row gap-12">
          
          <div className="hidden md:block md:w-1/4">
            <div className="sticky top-24">
              <span className="text-xs uppercase tracking-widest text-white/40 block border-b border-white/10 pb-4 w-24 mb-8">
                 Selected Works
               </span>
            </div>
          </div>
          
          <div className="md:hidden mb-8">
            <span className="text-xs uppercase tracking-widest text-white/40 block border-b border-white/10 pb-4 w-24">
               Selected Works
             </span>
          </div>

          <div className="w-full md:w-2/4">
             {projects.map((project, index) => (
               <ProjectCard 
                  key={project.id} 
                  project={project} 
                  index={index} 
                  setIndex={setCurrentIndex} 
               />
             ))}
          </div>

          <div className="hidden md:block md:w-1/4 relative">
            <div className="sticky top-1/2 -translate-y-1/2 flex justify-end">
                <div className="flex items-start gap-4">
                    <div className="text-xs font-medium text-white/40 uppercase tracking-widest mt-2">
                        No.
                    </div>
                    <div className="h-[5rem] overflow-hidden relative">
                        <motion.div 
                            animate={{ y: `-${currentIndex * 5}rem` }} 
                            transition={{ duration: 0.5, ease: [0.76, 0, 0.24, 1] }}
                            className="flex flex-col"
                        >
                            {projects.map((project) => (
                                <div key={project.id} className="h-[5rem] flex items-center justify-end">
                                    <span className="text-7xl font-syne font-bold text-white leading-none">
                                        0{project.id}
                                    </span>
                                </div>
                            ))}
                        </motion.div>
                    </div>
                </div>
            </div>
          </div>
          
        </div>
        
        <div className="flex justify-center mt-24">
             <button className="px-8 py-4 border border-white/20 rounded-full text-sm uppercase tracking-widest hover:bg-white hover:text-black transition-all duration-300">
                 View Full Archive
             </button>
        </div>
      </div>
    </section>
  );
};

export default Works;
