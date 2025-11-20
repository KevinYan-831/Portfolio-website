import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, ArrowUpRight } from 'lucide-react';
import Navbar from '../components/common/Navbar';
import MobileMenu from '../components/common/MobileMenu';
import { projects } from '../data/projects';

const AllProjects = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % projects.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const getCardStyle = (index) => {
    const total = projects.length;
    const positionIndex = (index - activeIndex + total) % total;
    const angle = positionIndex * (360 / total);
    const radius = 45; // percentage of container

    // Calculate position on circle
    const x = Math.sin((angle * Math.PI) / 180) * radius;
    const y = -Math.cos((angle * Math.PI) / 180) * radius;

    // Scale and opacity based on position
    const isActive = index === activeIndex;
    const distance = Math.abs(positionIndex - total / 2);
    const scale = isActive ? 1.15 : Math.max(0.7, 1 - distance * 0.1);
    const opacity = isActive ? 1 : Math.max(0.3, 1 - distance * 0.15);
    const zIndex = isActive ? 20 : Math.max(1, 10 - distance);

    return {
      transform: `translate(${x}%, ${y}%) scale(${scale})`,
      opacity,
      zIndex,
      transition: 'all 1s cubic-bezier(0.34, 1.56, 0.64, 1)',
      filter: isActive ? 'blur(0px)' : 'blur(1px)',
    };
  };

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

        {/* Circular Gallery */}
        <div className="relative h-[600px] md:h-[700px] flex items-center justify-center my-20">
          <div className="relative w-full h-full max-w-4xl mx-auto">
            {projects.map((project, index) => (
              <div
                key={project.id}
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] md:w-[400px]"
                style={getCardStyle(index)}
              >
                <Link to={`/project/${project.id}`}>
                  <div className="bg-white rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 border border-gray-200 cursor-pointer group">
                    <div className="mb-4">
                      <span className="text-sm font-mono text-gray-400">{project.category}</span>
                      <span className="mx-2 text-gray-300">•</span>
                      <span className="text-sm font-mono text-gray-400">{project.year}</span>
                    </div>

                    <h3 className="text-2xl md:text-3xl font-bold mb-4 group-hover:text-gray-600 transition-colors">
                      {project.title}
                    </h3>

                    <p className="text-gray-600 mb-6 line-clamp-2">
                      {project.description}
                    </p>

                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.techStack.slice(0, 3).map((tech, idx) => (
                        <span
                          key={idx}
                          className="px-3 py-1 bg-gray-100 rounded-full text-xs font-medium text-gray-700"
                        >
                          {tech}
                        </span>
                      ))}
                      {project.techStack.length > 3 && (
                        <span className="px-3 py-1 bg-gray-100 rounded-full text-xs font-medium text-gray-700">
                          +{project.techStack.length - 3} more
                        </span>
                      )}
                    </div>

                    <div className="flex items-center gap-2 text-sm font-medium text-black group-hover:gap-3 transition-all">
                      View Project
                      <ArrowUpRight size={16} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                    </div>
                  </div>
                </Link>
              </div>
            ))}
          </div>

          {/* Navigation Dots */}
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 flex gap-2">
            {projects.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveIndex(index)}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  index === activeIndex ? 'bg-black w-8' : 'bg-gray-300'
                }`}
                aria-label={`Go to project ${index + 1}`}
              />
            ))}
          </div>
        </div>

        {/* Project List View */}
        <div className="max-w-7xl mx-auto mt-32">
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
