import RevealOnScroll from '../common/RevealOnScroll';

const LogoMarquee = ({ logos, reverse = false }) => (
  <div className="w-full overflow-hidden select-none py-6">
    <div className={`flex whitespace-nowrap ${reverse ? 'animate-marquee-reverse' : 'animate-marquee'}`}>
      {[...Array(3)].map((_, setIndex) => (
        <div key={setIndex} className="flex items-center">
          {logos.map((logo, idx) => (
            <div
              key={`${setIndex}-${idx}`}
              className="flex items-center justify-center px-8 py-5 mx-3 bg-white rounded-xl border border-black/5 hover:border-black/15 transition-all duration-300 hover:scale-105 group"
            >
              <img
                src={logo.icon}
                alt={logo.name}
                className="h-10 w-auto object-contain grayscale group-hover:grayscale-0 transition-all duration-300"
              />
            </div>
          ))}
        </div>
      ))}
    </div>
  </div>
);

const AboutSection = () => {
  const languagesAndFrameworks = [
    { name: 'JavaScript', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg' },
    { name: 'TypeScript', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg' },
    { name: 'Python', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg' },
    { name: 'Java', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original.svg' },
    { name: 'React', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg' },
    { name: 'Node.js', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg' },
    { name: 'Express', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/express/express-original.svg' },
    { name: 'Flask', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/flask/flask-original.svg' },
    { name: 'Django', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/django/django-plain.svg' },
  ];

  const toolsAndPlatforms = [
    { name: 'PostgreSQL', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original.svg' },
    { name: 'MySQL', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original.svg' },
    { name: 'MongoDB', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original.svg' },
    { name: 'Firebase', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/firebase/firebase-plain.svg' },
    { name: 'Git', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg' },
    { name: 'Docker', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/docker/docker-original.svg' },
    { name: 'AWS', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/amazonwebservices/amazonwebservices-original-wordmark.svg' },
    { name: 'Pandas', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/pandas/pandas-original.svg' },
    { name: 'NumPy', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/numpy/numpy-original.svg' },
  ];

  return (
    <section id="about" className="py-32 bg-[#f4f4f4]">
      {/* Main Content */}
      <div className="px-6 md:px-12 mb-24">
        <div className="max-w-7xl mx-auto">
          <RevealOnScroll>
            <div className="mb-16">
              <p className="text-sm font-mono text-gray-400 uppercase tracking-widest mb-4">About</p>
              <div className="h-px w-20 bg-gradient-to-r from-black/20 to-transparent"></div>
            </div>
          </RevealOnScroll>

          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <RevealOnScroll>
                <h2 className="text-5xl md:text-7xl font-bold leading-[1.1] tracking-tight mb-8">
                  Crafting Digital
                  <span className="block text-gray-400 mt-2">Experiences</span>
                </h2>
              </RevealOnScroll>
            </div>

            <div className="space-y-6">
              <RevealOnScroll delay={200}>
                <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
                  I&apos;m a <span className="font-semibold text-black">full-stack developer</span> passionate about building scalable applications and exploring the frontiers of machine learning.
                </p>
              </RevealOnScroll>

              <RevealOnScroll delay={300}>
                <p className="text-lg md:text-xl text-gray-600 leading-relaxed">
                  I transform complex problems into elegant solutions through clean code, thoughtful design, and a relentless pursuit of innovation.
                </p>
              </RevealOnScroll>

              <RevealOnScroll delay={400}>
                <div className="pt-4 flex items-center gap-4">
                  <div className="h-px flex-1 bg-gradient-to-r from-black/10 to-transparent"></div>
                  <p className="text-sm font-mono text-gray-400 uppercase tracking-widest">Northwestern University</p>
                </div>
              </RevealOnScroll>
            </div>
          </div>
        </div>
      </div>

      {/* Logo Marquees */}
      <div className="space-y-6">
        <RevealOnScroll>
          <div>
            <div className="px-6 md:px-12 mb-4">
              <h3 className="text-xs font-mono uppercase tracking-widest text-gray-400">Languages & Frameworks</h3>
            </div>
            <LogoMarquee logos={languagesAndFrameworks} />
          </div>
        </RevealOnScroll>

        <RevealOnScroll delay={100}>
          <div>
            <div className="px-6 md:px-12 mb-4">
              <h3 className="text-xs font-mono uppercase tracking-widest text-gray-400">Tools & Platforms</h3>
            </div>
            <LogoMarquee logos={toolsAndPlatforms} reverse />
          </div>
        </RevealOnScroll>
      </div>

      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-33.333%); }
        }
        @keyframes marquee-reverse {
          0% { transform: translateX(-33.333%); }
          100% { transform: translateX(0); }
        }
        .animate-marquee {
          animation: marquee 25s linear infinite;
        }
        .animate-marquee-reverse {
          animation: marquee-reverse 25s linear infinite;
        }
      `}</style>
    </section>
  );
};

export default AboutSection;
