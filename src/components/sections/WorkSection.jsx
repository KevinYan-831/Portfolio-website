import { ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import RevealOnScroll from '../common/RevealOnScroll';
import { projects } from '../../data/projects';

const WorkSection = () => {
  return (
    <section id="work" className="py-32 bg-[#f4f4f4]">
      <RevealOnScroll>
        <div className="max-w-7xl mx-auto px-6 mb-20 flex items-end justify-between">
          <h2 className="text-sm font-mono text-gray-400 uppercase">Selected Projects</h2>
          <span className="hidden md:block text-sm font-mono text-gray-400 uppercase">2024 — 2025</span>
        </div>
      </RevealOnScroll>

      <div className="max-w-6xl mx-auto px-6 space-y-8">
        {projects.map((project, idx) => (
          <RevealOnScroll key={project.id}>
            <Link to={`/project/${project.id}`}>
              <div className="bg-white rounded-3xl p-8 md:p-12 border border-gray-200 shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-[1.01]">
                <div className="flex items-start justify-between mb-6">
                  <div className="flex items-center gap-4">
                    <span className="text-3xl md:text-4xl font-bold text-gray-300">
                      {String(idx + 1).padStart(2, '0')}
                    </span>
                    <div>
                      <span className="text-sm font-mono text-gray-400 uppercase">{project.category}</span>
                      <span className="mx-2 text-gray-300">•</span>
                      <span className="text-sm font-mono text-gray-400">{project.year}</span>
                    </div>
                  </div>
                </div>

                <h3 className="text-4xl md:text-5xl font-bold mb-6 group-hover:text-gray-600 transition-colors">
                  {project.title}
                </h3>

                <p className="text-lg md:text-xl text-gray-600 mb-8 max-w-3xl leading-relaxed">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-8">
                  {project.techStack.slice(0, 6).map((tech, techIdx) => (
                    <span
                      key={techIdx}
                      className="px-4 py-2 bg-gray-100 rounded-full text-sm font-medium text-gray-700 hover:bg-black hover:text-white transition-colors"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.techStack.length > 6 && (
                    <span className="px-4 py-2 bg-gray-100 rounded-full text-sm font-medium text-gray-700">
                      +{project.techStack.length - 6} more
                    </span>
                  )}
                </div>

                <div className="grid md:grid-cols-2 gap-4 text-sm text-gray-500">
                  {project.highlights.slice(0, 2).map((highlight, highlightIdx) => (
                    <div key={highlightIdx} className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 bg-gray-400 rounded-full mt-2 flex-shrink-0"></span>
                      <span className="line-clamp-2">{highlight}</span>
                    </div>
                  ))}
                </div>
              </div>
            </Link>
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
