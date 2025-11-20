import { ArrowUpRight, Plus } from 'lucide-react';
import { Link } from 'react-router-dom';
import RevealOnScroll from '../common/RevealOnScroll';
import { projects } from '../../data/projects';

const ProjectRow = ({ title, category, year, index, id }) => {
  return (
    <Link to={`/project/${id}`} className="block">
      <div className="group relative border-t border-black/10 transition-colors duration-500 hover:bg-white cursor-pointer w-full">
        <div className="relative z-10 px-6 py-12 md:py-16 flex flex-col md:flex-row justify-between items-start md:items-baseline gap-6 md:gap-12">
          <span className="text-sm font-mono text-gray-400 w-12 transition-colors group-hover:text-black">
            {String(index + 1).padStart(2, '0')}
          </span>

          <div className="flex-grow overflow-hidden">
            <h3 className="text-2xl md:text-8xl font-medium text-[#111] tracking-tighter group-hover:translate-x-4 transition-transform duration-700 cubic-bezier(0.25, 1, 0.5, 1)">
              {title}
            </h3>
          </div>

          <div className="flex items-center gap-8 md:ml-auto w-full md:w-auto justify-between md:justify-end opacity-100 md:opacity-0 group-hover:opacity-100 transition-all duration-500 delay-75">
            <span className="text-xl font-mono uppercase text-gray-400 group-hover:text-black transition-colors">
              {category}
            </span>
            <span className="text-xl font-mono text-gray-400 group-hover:text-black transition-colors">
              {year}
            </span>

            <div className="w-12 h-12 rounded-full bg-[#111] text-white flex items-center justify-center transform scale-0 group-hover:scale-100 transition-transform duration-500 cubic-bezier(0.25, 1, 0.5, 1)">
              <ArrowUpRight size={20} />
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

const WorkSection = () => {
  return (
    <section id="work" className="py-32 bg-[#f4f4f4] relative z-20">
      <div className="px-6 md:px-12 mb-20 flex items-end justify-between">
        <RevealOnScroll>
          <h2 className="text-[12vw] leading-[0.8] font-bold tracking-tighter text-[#d4d4d4]">
            SELECTED<br />PROJECTS
          </h2>
        </RevealOnScroll>
        <span className="hidden md:block text-sm font-mono text-gray-400 uppercase mb-2">
          2022 — 2025
        </span>
      </div>

      <div className="flex flex-col border-b border-black/10">
        {projects.map((project, idx) => (
          <RevealOnScroll key={project.id} delay={idx * 50}>
            <ProjectRow
              index={idx}
              title={project.title}
              category={project.category}
              year={project.year}
              id={project.id}
            />
          </RevealOnScroll>
        ))}
      </div>

      <div className="flex justify-center py-32">
        <Link
          to="/projects"
          className="group relative px-10 py-5 rounded-full overflow-hidden bg-transparent border border-black/20 hover:border-black transition-colors duration-300"
        >
          <div className="absolute inset-0 w-full h-full bg-black transform translate-y-full group-hover:translate-y-0 transition-transform duration-500 cubic-bezier(0.25, 1, 0.5, 1)"></div>
          <span className="relative flex items-center gap-3 text-xs font-bold uppercase tracking-widest group-hover:text-white transition-colors duration-300">
            View All Projects
            <Plus size={14} />
          </span>
        </Link>
      </div>
    </section>
  );
};

export default WorkSection;
