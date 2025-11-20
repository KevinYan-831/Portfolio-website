import { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Github, ExternalLink, Calendar, Code2 } from 'lucide-react';
import Navbar from '../components/common/Navbar';
import MobileMenu from '../components/common/MobileMenu';
import RevealOnScroll from '../components/common/RevealOnScroll';
import { projects } from '../data/projects';

const ProjectDetail = () => {
  const { id } = useParams();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const project = projects.find(p => p.id === id);

  if (!project) {
    return (
      <div className="min-h-screen bg-[#f4f4f4] flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Project Not Found</h1>
          <Link to="/" className="text-blue-600 hover:underline">
            Return to Home
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#f4f4f4] text-[#111] font-sans selection:bg-black selection:text-white overflow-x-hidden">
      <Navbar onOpenMenu={() => setIsMenuOpen(true)} />
      <MobileMenu isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)} />

      <main className="pt-32 pb-20">
        {/* Back Button */}
        <div className="max-w-6xl mx-auto px-6 mb-12">
          <Link
            to="/#work"
            className="inline-flex items-center gap-2 text-sm font-mono text-gray-600 hover:text-black transition-colors group"
          >
            <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
            Back to Projects
          </Link>
        </div>

        {/* Hero Section */}
        <RevealOnScroll>
          <div className="max-w-6xl mx-auto px-6 mb-20">
            <div className="flex items-center gap-4 mb-6">
              <span className="text-sm font-mono text-gray-400 uppercase">{project.category}</span>
              <span className="w-1 h-1 bg-gray-400 rounded-full"></span>
              <span className="text-sm font-mono text-gray-400">{project.year}</span>
            </div>

            <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight">
              {project.title}
            </h1>

            <p className="text-xl md:text-2xl text-gray-600 font-light max-w-4xl mb-8">
              {project.description}
            </p>

            {/* Action Buttons */}
            <div className="flex flex-wrap gap-4">
              {project.github && (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group px-6 py-3 border border-black rounded-full text-sm font-medium uppercase hover:bg-black hover:text-white transition-all duration-300 flex items-center gap-2"
                >
                  <Github size={16} />
                  View Code
                  <ExternalLink size={14} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </a>
              )}
              {project.demo && (
                <a
                  href={project.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group px-6 py-3 bg-black text-white rounded-full text-sm font-medium uppercase hover:bg-gray-800 transition-all duration-300 flex items-center gap-2"
                >
                  Live Demo
                  <ExternalLink size={14} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </a>
              )}
            </div>
          </div>
        </RevealOnScroll>

        {/* Project Details Grid */}
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-3 gap-8 mb-20">
          <RevealOnScroll delay={100}>
            <div className="bg-white p-8 rounded-2xl border border-gray-200">
              <div className="flex items-center gap-3 mb-4">
                <Calendar size={20} className="text-gray-400" />
                <h3 className="text-sm font-mono text-gray-400 uppercase">Duration</h3>
              </div>
              <p className="text-lg font-medium">{project.duration}</p>
            </div>
          </RevealOnScroll>

          <RevealOnScroll delay={200}>
            <div className="bg-white p-8 rounded-2xl border border-gray-200">
              <div className="flex items-center gap-3 mb-4">
                <Code2 size={20} className="text-gray-400" />
                <h3 className="text-sm font-mono text-gray-400 uppercase">Role</h3>
              </div>
              <p className="text-lg font-medium">{project.category}</p>
            </div>
          </RevealOnScroll>

          <RevealOnScroll delay={300}>
            <div className="bg-white p-8 rounded-2xl border border-gray-200">
              <div className="flex items-center gap-3 mb-4">
                <Code2 size={20} className="text-gray-400" />
                <h3 className="text-sm font-mono text-gray-400 uppercase">Tech Stack</h3>
              </div>
              <p className="text-lg font-medium">{project.techStack.length} Technologies</p>
            </div>
          </RevealOnScroll>
        </div>

        {/* Overview Section */}
        <RevealOnScroll>
          <div className="max-w-6xl mx-auto px-6 mb-20">
            <div className="bg-white p-12 rounded-2xl border border-gray-200">
              <h2 className="text-3xl font-bold mb-6">Overview</h2>
              <p className="text-lg text-gray-700 leading-relaxed">
                {project.overview}
              </p>
            </div>
          </div>
        </RevealOnScroll>

        {/* Tech Stack Section */}
        <RevealOnScroll>
          <div className="max-w-6xl mx-auto px-6 mb-20">
            <h2 className="text-3xl font-bold mb-8">Tech Stack</h2>
            <div className="flex flex-wrap gap-3">
              {project.techStack.map((tech, idx) => (
                <span
                  key={idx}
                  className="px-6 py-3 bg-white border border-gray-200 rounded-full text-sm font-medium hover:border-black transition-colors"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </RevealOnScroll>

        {/* Key Highlights Section */}
        <RevealOnScroll>
          <div className="max-w-6xl mx-auto px-6 mb-20">
            <h2 className="text-3xl font-bold mb-8">Key Highlights</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {project.highlights.map((highlight, idx) => (
                <div
                  key={idx}
                  className="bg-white p-8 rounded-2xl border border-gray-200 hover:border-black transition-colors group"
                >
                  <div className="flex gap-4">
                    <span className="text-2xl font-bold text-gray-300 group-hover:text-black transition-colors">
                      {String(idx + 1).padStart(2, '0')}
                    </span>
                    <p className="text-gray-700 leading-relaxed flex-1">
                      {highlight}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </RevealOnScroll>

        {/* Features Section */}
        <RevealOnScroll>
          <div className="max-w-6xl mx-auto px-6 mb-20">
            <h2 className="text-3xl font-bold mb-8">Features</h2>
            <div className="bg-white p-12 rounded-2xl border border-gray-200">
              <ul className="grid md:grid-cols-2 gap-4">
                {project.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <span className="w-2 h-2 bg-black rounded-full mt-2"></span>
                    <span className="text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </RevealOnScroll>

        {/* Bottom Navigation */}
        <RevealOnScroll>
          <div className="max-w-6xl mx-auto px-6 pt-12 border-t border-gray-200">
            <Link
              to="/#work"
              className="inline-flex items-center gap-2 text-sm font-mono text-gray-600 hover:text-black transition-colors group"
            >
              <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
              Back to All Projects
            </Link>
          </div>
        </RevealOnScroll>
      </main>
    </div>
  );
};

export default ProjectDetail;
