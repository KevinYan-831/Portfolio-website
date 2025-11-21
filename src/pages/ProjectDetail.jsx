import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Github, ExternalLink, Calendar, Code2, Layers } from 'lucide-react';
import Navbar from '../components/common/Navbar';
import MobileMenu from '../components/common/MobileMenu';
import RevealOnScroll from '../components/common/RevealOnScroll';
import { projects } from '../data/projects';

const ProjectDetail = () => {
  const { id } = useParams();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const project = projects.find(p => p.id === id);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  if (!project) {
    return (
      <div className="min-h-screen bg-[#050505] flex items-center justify-center text-white">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4 font-syne">Project Not Found</h1>
          <Link to="/" className="text-white/60 hover:text-white hover:underline">
            Return to Home
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#050505] text-white font-sans selection:bg-white selection:text-black overflow-x-hidden">
      <Navbar onOpenMenu={() => setIsMenuOpen(true)} />
      <MobileMenu isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)} />

      <main className="pt-32 pb-20">
        {/* Back Button */}
        <div className="max-w-screen-xl mx-auto px-6 mb-12">
          <Link
            to="/projects"
            className="inline-flex items-center gap-2 text-sm font-mono text-white/60 hover:text-white transition-colors group"
          >
            <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
            Back to All Projects
          </Link>
        </div>

        {/* Hero Section */}
        <RevealOnScroll>
          <div className="max-w-screen-xl mx-auto px-6 mb-20">
            <div className="flex items-center gap-4 mb-6">
              <span className="text-sm font-mono text-white/60 uppercase tracking-widest border border-white/10 px-3 py-1 rounded-full">
                {project.category}
              </span>
              <span className="text-sm font-mono text-white/40">{project.year}</span>
            </div>

            <h1 className="text-5xl md:text-8xl font-bold mb-8 tracking-tighter font-syne leading-none">
              {project.title}
            </h1>

            <p className="text-xl md:text-2xl text-white/60 font-light max-w-4xl mb-12 leading-relaxed">
              {project.description}
            </p>

            {/* Action Buttons */}
            <div className="flex flex-wrap gap-4">
              {project.github && (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group px-8 py-4 border border-white/20 rounded-full text-sm font-medium uppercase tracking-widest hover:bg-white hover:text-black transition-all duration-300 flex items-center gap-2"
                >
                  <Github size={18} />
                  View Code
                  <ExternalLink size={14} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </a>
              )}
              {project.demo && (
                <a
                  href={project.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group px-8 py-4 bg-white text-black rounded-full text-sm font-medium uppercase tracking-widest hover:bg-gray-200 transition-all duration-300 flex items-center gap-2"
                >
                  Live Demo
                  <ExternalLink size={14} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </a>
              )}
            </div>
          </div>
        </RevealOnScroll>

        {/* Project Details Grid */}
        <div className="max-w-screen-xl mx-auto px-6 grid md:grid-cols-3 gap-6 mb-24">
          <RevealOnScroll delay={100}>
            <div className="bg-[#111] p-8 rounded-3xl border border-white/10 h-full">
              <div className="flex items-center gap-3 mb-4">
                <Calendar size={20} className="text-white/40" />
                <h3 className="text-sm font-mono text-white/40 uppercase tracking-widest">Duration</h3>
              </div>
              <p className="text-lg font-medium">{project.duration}</p>
            </div>
          </RevealOnScroll>

          <RevealOnScroll delay={200}>
            <div className="bg-[#111] p-8 rounded-3xl border border-white/10 h-full">
              <div className="flex items-center gap-3 mb-4">
                <Code2 size={20} className="text-white/40" />
                <h3 className="text-sm font-mono text-white/40 uppercase tracking-widest">Role</h3>
              </div>
              <p className="text-lg font-medium">{project.category}</p>
            </div>
          </RevealOnScroll>

          <RevealOnScroll delay={300}>
            <div className="bg-[#111] p-8 rounded-3xl border border-white/10 h-full">
              <div className="flex items-center gap-3 mb-4">
                <Layers size={20} className="text-white/40" />
                <h3 className="text-sm font-mono text-white/40 uppercase tracking-widest">Tech Stack</h3>
              </div>
              <p className="text-lg font-medium">{project.techStack.length} Technologies Used</p>
            </div>
          </RevealOnScroll>
        </div>

        {/* Overview Section */}
        <RevealOnScroll>
          <div className="max-w-screen-xl mx-auto px-6 mb-24">
            <div className="grid md:grid-cols-12 gap-12">
              <div className="md:col-span-4">
                <h2 className="text-3xl font-bold font-syne sticky top-32">Overview</h2>
              </div>
              <div className="md:col-span-8">
                <div className="bg-[#111] p-10 md:p-14 rounded-3xl border border-white/10">
                  <p className="text-lg md:text-xl text-white/80 leading-relaxed font-light">
                    {project.overview}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </RevealOnScroll>

        {/* Tech Stack Section */}
        <RevealOnScroll>
          <div className="max-w-screen-xl mx-auto px-6 mb-24">
            <div className="grid md:grid-cols-12 gap-12">
              <div className="md:col-span-4">
                <h2 className="text-3xl font-bold font-syne sticky top-32">Technologies</h2>
              </div>
              <div className="md:col-span-8">
                <div className="flex flex-wrap gap-3">
                  {project.techStack.map((tech, idx) => (
                    <span
                      key={idx}
                      className="px-6 py-3 bg-[#111] border border-white/10 rounded-full text-sm font-medium hover:border-white/40 transition-colors text-white/80"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </RevealOnScroll>

        {/* Key Highlights Section */}
        <RevealOnScroll>
          <div className="max-w-screen-xl mx-auto px-6 mb-24">
            <div className="grid md:grid-cols-12 gap-12">
              <div className="md:col-span-4">
                <h2 className="text-3xl font-bold font-syne sticky top-32">Key Highlights</h2>
              </div>
              <div className="md:col-span-8">
                <div className="grid gap-6">
                  {project.highlights.map((highlight, idx) => (
                    <div
                      key={idx}
                      className="bg-[#111] p-8 rounded-3xl border border-white/10 hover:border-white/30 transition-colors group"
                    >
                      <div className="flex gap-6 items-start">
                        <span className="text-4xl font-bold font-syne text-white/10 group-hover:text-white/30 transition-colors">
                          {String(idx + 1).padStart(2, '0')}
                        </span>
                        <p className="text-lg text-white/80 leading-relaxed pt-2 font-light">
                          {highlight}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </RevealOnScroll>

        {/* Features Section */}
        <RevealOnScroll>
          <div className="max-w-screen-xl mx-auto px-6 mb-24">
            <div className="grid md:grid-cols-12 gap-12">
              <div className="md:col-span-4">
                <h2 className="text-3xl font-bold font-syne sticky top-32">Features</h2>
              </div>
              <div className="md:col-span-8">
                <div className="bg-[#111] p-10 md:p-14 rounded-3xl border border-white/10">
                  <ul className="grid md:grid-cols-2 gap-y-6 gap-x-8">
                    {project.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-4">
                        <span className="w-1.5 h-1.5 bg-white rounded-full mt-2.5 flex-shrink-0"></span>
                        <span className="text-white/80 font-light text-lg">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </RevealOnScroll>

        {/* Bottom Navigation */}
        <div className="max-w-screen-xl mx-auto px-6 pt-12 border-t border-white/10">
          <div className="flex justify-between items-center">
            <Link
              to="/projects"
              className="inline-flex items-center gap-2 text-sm font-mono text-white/60 hover:text-white transition-colors group"
            >
              <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
              Back to All Projects
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
};

export default ProjectDetail;
