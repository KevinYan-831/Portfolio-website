import { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import { projects } from '../../data/projects';

const ProjectItem = ({ project, index, updateActive }) => {
  const ref = useRef(null);
  // Adjusted margin to trigger closer to center of viewport
  const isInView = useInView(ref, { margin: "-45% 0px -45% 0px" });

  useEffect(() => {
    if (isInView) {
      updateActive(index);
    }
  }, [isInView, index, updateActive]);

  return (
    <div ref={ref} className="flex flex-col gap-6 w-full">
      {/* Mobile Header */}
      <div className="md:hidden flex justify-between items-end border-b border-gray-800 pb-4">
        <h3 className="text-3xl font-serif">{project.title}</h3>
        <span className="text-2xl font-serif text-gray-600">0{index + 1}</span>
      </div>

      {/* Image Card */}
      <Link to={`/project/${project.id}`} className="block w-full">
        <motion.div
          className="w-full aspect-[4/3] md:aspect-[16/9] overflow-hidden relative group cursor-pointer bg-[#1a1a1a] rounded-lg"
          whileHover={{ scale: 0.98 }}
          transition={{ duration: 0.5 }}
        >
          {/* Placeholder Image as requested */}
          <div className="w-full h-full bg-gray-900 flex items-center justify-center group-hover:bg-gray-800 transition-colors duration-500">
            <span className="text-gray-700 font-mono text-sm uppercase tracking-widest">
              Project Preview
            </span>
          </div>
          
          {/* Overlay */}
          <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-500" />
        </motion.div>
      </Link>

      {/* Mobile Details */}
      <div className="md:hidden flex justify-between text-xs text-gray-500 uppercase tracking-widest">
        <span>{project.category}</span>
        <span>{project.year}</span>
      </div>
    </div>
  );
};

const WorkSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section id="work" className="bg-[#0f0f0f] text-white relative z-10">
      <div className="container mx-auto px-6 md:px-12 flex flex-col md:flex-row">
        
        {/* Sticky Left Sidebar - Fixed Positioning */}
        <div className="hidden md:flex w-1/3 h-screen sticky top-0 flex-col justify-center pl-4 pr-12">
          <div className="mb-12">
            <h2 className="text-xs uppercase tracking-[0.3em] text-gray-500">Selected Works</h2>
          </div>

          {/* Animated Counter */}
          <div className="relative overflow-hidden h-[160px] mb-8">
            <AnimatePresence>
              <motion.div
                key={activeIndex}
                initial={{ y: "100%" }}
                animate={{ y: "0%" }}
                exit={{ y: "-100%" }}
                transition={{ duration: 0.5, ease: [0.76, 0, 0.24, 1] }}
                className="text-[9rem] leading-none font-serif text-white absolute top-0 left-0"
              >
                0{activeIndex + 1}
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Animated Project Details */}
          <div className="min-h-[200px]">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeIndex}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.4 }}
              >
                <h3 className="text-4xl font-serif mb-4 leading-tight">
                  {projects[activeIndex].title}
                </h3>
                
                <div className="flex flex-col gap-4">
                  <p className="text-gray-400 text-sm leading-relaxed max-w-xs">
                    {projects[activeIndex].description}
                  </p>
                  
                  <div className="flex gap-4 text-xs text-gray-500 uppercase tracking-widest mt-2">
                    <span>{projects[activeIndex].category}</span>
                    <span className="text-gray-700">/</span>
                    <span>{projects[activeIndex].year}</span>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        {/* Vertical Scrollable Projects - Right Side */}
        <div className="w-full md:w-2/3 md:pl-12 flex flex-col gap-32 md:gap-64 pb-40 pt-20">
          {projects.map((project, index) => (
            <ProjectItem
              key={project.id}
              project={project}
              index={index}
              updateActive={setActiveIndex}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default WorkSection;
