import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, ArrowUpRight } from 'lucide-react';
import Navbar from '../components/common/Navbar';
import MobileMenu from '../components/common/MobileMenu';
import { projects } from '../data/projects';

const AllProjects = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#f4f4f4] text-[#111] font-sans selection:bg-black selection:text-white overflow-hidden">
      <Navbar onOpenMenu={() => setIsMenuOpen(true)} />
      <MobileMenu isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)} />

      <main className="pt-32 pb-20 px-6">
        {/* Header */}
        <div className="max-w-7xl mx-auto mb-12">
          <Link
            to="/#work"
            className="inline-flex items-center gap-2 text-sm font-mono text-gray-600 hover:text-black transition-colors group mb-8"
          >
            <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
            Back to Home
          </Link>

          <div className="flex items-end justify-between mb-4">
            <h1 className="text-6xl md:text-8xl font-bold tracking-tight">All Projects</h1>
            <span className="text-sm font-mono text-gray-400">{projects.length} Projects</span>
          </div>
          <p className="text-xl text-gray-600 max-w-2xl">
            A collection of my work across web development, machine learning, and full-stack applications.
          </p>
        </div>

        {/* Project List View */}
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold mb-12">All Projects</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <Link
                key={project.id}
                to={`/project/${project.id}`}
                className="group"
              >
                <div className="bg-white rounded-2xl p-8 border border-gray-200 hover:border-black transition-all duration-300 h-full">
                  <div className="flex items-start justify-between mb-4">
                    <span className="text-sm font-mono text-gray-400">
                      {String(index + 1).padStart(2, '0')}
                    </span>
                    <div className="flex items-center gap-2">
                      <span className="text-sm font-mono text-gray-400">{project.year}</span>
                    </div>
                  </div>

                  <h3 className="text-2xl font-bold mb-3 group-hover:text-gray-600 transition-colors">
                    {project.title}
                  </h3>

                  <p className="text-gray-600 mb-4 line-clamp-2">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.techStack.slice(0, 4).map((tech, idx) => (
                      <span
                        key={idx}
                        className="px-3 py-1 bg-gray-100 rounded-full text-xs font-medium text-gray-700"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="flex items-center gap-2 text-sm font-medium">
                    <span className="text-gray-400">{project.category}</span>
                    <ArrowUpRight size={16} className="text-gray-400 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
};

export default AllProjects;
