import { ArrowUpRight } from 'lucide-react';
import RevealOnScroll from '../common/RevealOnScroll';
import ProjectRow from '../common/ProjectRow';

const WorkSection = () => {
  const projects = [
    {
      title: "Careezy-AI",
      category: "AI Web App",
      year: "2025"
    },
    {
      title: "Ba-zi College Admission Predictor",
      category: "Web App",
      year: "2025"
    },
    {
      title: "Scout4One",
      category: "Machine Learning",
      year: "2025"
    },
    {
      title: "Pet-your-Pet",
      category: "Web App",
      year: "2025"
    },
    {
      title: "NBA Fantasy",
      category: "Machine Learning",
      year: "2024"
    }
  ];

  return (
    <section id="work" className="py-32 bg-white">
      <RevealOnScroll>
        <div className="px-6 mb-20 flex items-end justify-between">
          <h2 className="text-sm font-mono text-gray-400 uppercase">Selected Projects</h2>
          <span className="hidden md:block text-sm font-mono text-gray-400 uppercase">2024 — 2025</span>
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
