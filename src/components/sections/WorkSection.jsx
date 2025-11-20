import { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion, useInView } from 'framer-motion';
import { projects } from '../../data/projects';

const ProjectItem = ({ project, index, updateActive }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { margin: "-50% 0px -50% 0px" });

  useEffect(() => {
    if (isInView) {
      updateActive(index);
    }
  }, [isInView, index, updateActive]);

  return (
    <div ref={ref} className="flex flex-col gap-6">
      {/* Mobile Header */}
      <div className="md:hidden flex justify-between items-end border-b border-gray-800 pb-4">
        <h3 className="text-3xl font-serif">{project.title}</h3>
        <span className="text-2xl font-serif text-gray-600">0{index + 1}</span>
      </div>

      {/* Image Card */}
      <Link to={`/project/${project.id}`}>
        <motion.div
          className="w-full aspect-[3/4] md:aspect-[4/5] overflow-hidden relative group cursor-pointer bg-gray-900"
          whileHover={{ scale: 0.99 }}
          transition={{ duration: 0.5 }}
        >
          <motion.img
            src={`https://images.unsplash.com/photo-${1500000000000 + index * 100000000}?w=1000&h=1300&fit=crop`}
            alt={project.title}
            className="w-full h-full object-cover transition-transform duration-1000 ease-out group-hover:scale-105"
          />
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
    <section id="work" className="bg-[#0f0f0f] text-white py-20 md:py-32 relative z-10">
      <div className="container mx-auto px-6 md:px-12 flex flex-col md:flex-row">
        {/* Sticky Left Sidebar */}
        <div className="hidden md:flex w-1/3 h-screen sticky top-0 flex-col justify-center pl-4">
          <div className="mb-8">
            <h2 className="text-xs uppercase tracking-[0.3em] text-gray-500">Selected Works</h2>
          </div>

          {/* Animated Counter */}
          <div className="relative overflow-hidden h-[180px] mb-6">
            <motion.div
              key={activeIndex}
              initial={{ y: "100%" }}
              animate={{ y: "0%" }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              className="text-[10rem] leading-none font-serif text-white mix-blend-difference"
            >
              0{activeIndex + 1}
            </motion.div>
          </div>

          {/* Animated Project Details */}
          <div className="h-32">
            <motion.div
              key={activeIndex}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <h3 className="text-4xl font-serif mb-3 leading-tight">
                {projects[activeIndex].title}
              </h3>
              <div className="flex gap-4 text-sm text-gray-400 uppercase tracking-widest">
                <span>{projects[activeIndex].category}</span>
                <span className="text-gray-700">/</span>
                <span>{projects[activeIndex].year}</span>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Vertical Scrollable Images */}
        <div className="w-full md:w-2/3 md:pl-24 flex flex-col gap-24 md:gap-40 pb-20 pt-10">
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
