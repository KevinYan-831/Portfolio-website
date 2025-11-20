import { ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import RevealOnScroll from '../common/RevealOnScroll';
import ProjectRow from '../common/ProjectRow';
import { projects } from '../../data/projects';

const WorkSection = () => {
  return (
    <section id="work" className="py-32 bg-white">
      <RevealOnScroll>
        <div className="px-6 mb-20 flex items-end justify-between">
          <h2 className="text-sm font-mono text-gray-400 uppercase">Selected Works ({String(projects.length).padStart(2, '0')})</h2>
          <span className="hidden md:block text-sm font-mono text-gray-400 uppercase">2022 — 2025</span>
        </div>
      </RevealOnScroll>

      <div className="flex flex-col border-b border-black/10">
        {projects.map((project, idx) => (
          <RevealOnScroll key={project.id} delay={idx * 100}>
            <ProjectRow
              index={idx}
              title={project.title}
              category={project.category}
              year={project.year}
              projectId={project.id}
            />
          </RevealOnScroll>
        ))}
      </div>

      <RevealOnScroll>
        <div className="flex justify-center py-20">
          <Link
            to="/projects"
            className="group px-8 py-4 border border-black rounded-full text-sm font-medium uppercase hover:bg-black hover:text-white transition-all duration-300 flex items-center gap-2"
          >
            View All Projects
            <ArrowUpRight size={16} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
          </Link>
        </div>
      </RevealOnScroll>
    </section>
  );
};

export default WorkSection;
