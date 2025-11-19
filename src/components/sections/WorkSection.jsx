import { ArrowUpRight } from 'lucide-react';
import RevealOnScroll from '../common/RevealOnScroll';
import ProjectRow from '../common/ProjectRow';

const WorkSection = () => {
  const projects = [
    {
      title: "Pathfinder AI",
      category: "Algorithm Viz",
      year: "2024"
    },
    {
      title: "Cloud Atlas",
      category: "Distributed Sys",
      year: "2023"
    },
    {
      title: "Neural Sync",
      category: "Machine Learning",
      year: "2023"
    },
    {
      title: "Vortex Engine",
      category: "WebGL / 3D",
      year: "2022"
    }
  ];

  return (
    <section id="work" className="py-32 bg-white">
      <RevealOnScroll>
        <div className="px-6 mb-20 flex items-end justify-between">
          <h2 className="text-sm font-mono text-gray-400 uppercase">Selected Works (04)</h2>
          <span className="hidden md:block text-sm font-mono text-gray-400 uppercase">2022 — 2025</span>
        </div>
      </RevealOnScroll>

      <div className="flex flex-col border-b border-black/10">
        {projects.map((project, idx) => (
          <RevealOnScroll key={idx} delay={idx * 100}>
            <ProjectRow
              index={idx}
              title={project.title}
              category={project.category}
              year={project.year}
            />
          </RevealOnScroll>
        ))}
      </div>

      <RevealOnScroll>
        <div className="flex justify-center py-20">
          <button className="group px-8 py-4 border border-black rounded-full text-sm font-medium uppercase hover:bg-black hover:text-white transition-all duration-300 flex items-center gap-2">
            View All Projects
            <ArrowUpRight size={16} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
          </button>
        </div>
      </RevealOnScroll>
    </section>
  );
};

export default WorkSection;
