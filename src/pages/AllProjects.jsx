import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, ArrowUpRight } from 'lucide-react';
import { motion } from 'framer-motion';
import Navbar from '../components/common/Navbar';
import MobileMenu from '../components/common/MobileMenu';
import { projects } from '../data/projects';

const AllProjects = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#050505] text-white font-sans selection:bg-white selection:text-black overflow-x-hidden">
      <Navbar onOpenMenu={() => setIsMenuOpen(true)} />
      <MobileMenu isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)} />

      <main className="pt-32 pb-20 px-6">
        {/* Header */}
        <div className="max-w-screen-xl mx-auto mb-20">
          <Link
            to="/#work"
            className="inline-flex items-center gap-2 text-sm font-mono text-white/60 hover:text-white transition-colors group mb-12"
          >
            <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
            Back to Home
          </Link>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-12"
          >
            <div>
              <h1 className="text-6xl md:text-9xl font-bold tracking-tighter font-syne mb-6">
                All Projects
              </h1>
              <p className="text-xl text-white/60 max-w-2xl font-light leading-relaxed">
                A curated collection of my work across web development, machine learning, and full-stack applications.
              </p>
            </div>
            <span className="text-lg font-mono text-white/40 border-b border-white/10 pb-2">
              {projects.length} Projects
            </span>
          </motion.div>
        </div>

        {/* Project Grid */}
        <div className="max-w-screen-xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8 md:gap-12">
            {projects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Link
                  to={`/project/${project.id}`}
                  className="group block h-full"
                >
                  <div className="bg-[#111] rounded-3xl p-8 md:p-12 border border-white/10 hover:border-white/30 transition-all duration-500 h-full flex flex-col relative overflow-hidden group-hover:bg-[#161616]">
                    
                    {/* Hover Gradient */}
                    <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                    <div className="relative z-10 flex flex-col h-full">
                      <div className="flex items-start justify-between mb-8">
                        <span className="text-sm font-mono text-white/40 border border-white/10 px-3 py-1 rounded-full">
                          {project.year}
                        </span>
                        <ArrowUpRight className="text-white/40 group-hover:text-white group-hover:translate-x-1 group-hover:-translate-y-1 transition-all duration-300" />
                      </div>

                      <div className="mb-auto">
                        <h3 className="text-3xl md:text-4xl font-bold mb-4 font-syne group-hover:text-white/90 transition-colors">
                          {project.title}
                        </h3>
                        <p className="text-white/60 mb-8 line-clamp-3 font-light leading-relaxed">
                          {project.description}
                        </p>
                      </div>

                      <div className="flex flex-wrap gap-2 mt-8 pt-8 border-t border-white/10">
                        {project.techStack.slice(0, 4).map((tech, idx) => (
                          <span
                            key={idx}
                            className="text-xs font-mono text-white/40"
                          >
                            {tech} {idx < 3 && idx < project.techStack.length - 1 && "•"}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
};

export default AllProjects;
