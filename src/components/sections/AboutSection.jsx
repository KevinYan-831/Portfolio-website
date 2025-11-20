import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const cards = [
  {
    title: "Full-Stack Developer",
    description: "Building scalable web applications with modern frameworks and cloud infrastructure. From React frontends to Node.js backends, I craft solutions that perform.",
    src: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=1000&h=1000&fit=crop",
    color: "#111111"
  },
  {
    title: "ML Enthusiast",
    description: "Exploring machine learning to solve real-world problems. From data preprocessing to model deployment, I bridge the gap between data and insights.",
    src: "https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=1000&h=1000&fit=crop",
    color: "#161616"
  },
  {
    title: "Problem Solver",
    description: "Transforming complex challenges into elegant solutions through clean code, thoughtful design, and continuous learning. The journey is the reward.",
    src: "https://images.unsplash.com/photo-1531498860502-7c67cf02f657?w=1000&h=1000&fit=crop",
    color: "#1a1a1a"
  }
];

const Card = ({ i, title, description, src, color, progress, range, targetScale }) => {
  const scale = useTransform(progress, range, [1, targetScale]);

  return (
    <div className="h-screen flex items-center justify-center sticky top-0">
      <motion.div
        style={{
          scale,
          backgroundColor: color,
          top: `calc(-5% + ${i * 25}px)`
        }}
        className="flex flex-col md:flex-row relative w-[90vw] md:w-[1000px] h-[80vh] md:h-[600px] rounded-3xl overflow-hidden border border-white/5 shadow-2xl origin-top"
      >
        {/* Text Section */}
        <div className="flex flex-col justify-between p-8 md:p-12 w-full md:w-1/2 h-full">
          <div>
            <span className="text-xs font-bold uppercase tracking-widest text-gray-500 mb-2 block">
              0{i + 1}.
            </span>
            <h2 className="text-4xl md:text-5xl text-white mb-6 leading-tight">
              {title}
            </h2>
          </div>

          <div>
            <p className="text-base md:text-lg text-gray-300 font-light leading-relaxed mb-8">
              {description}
            </p>
            <span className="text-xs underline cursor-pointer text-white hover:text-gray-400 transition-colors">
              Read More
            </span>
          </div>
        </div>

        {/* Image Section */}
        <div className="w-full md:w-1/2 h-full relative overflow-hidden">
          <motion.div
            className="w-full h-full"
            style={{ scale: 1.1 }}
          >
            <img
              src={src}
              alt={title}
              className="w-full h-full object-cover filter grayscale hover:grayscale-0 transition-all duration-700 ease-in-out"
            />
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
};

const AboutSection = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end']
  });

  return (
    <section ref={containerRef} id="about" className="relative mt-20 mb-20">
      {cards.map((card, i) => {
        const targetScale = 1 - ((cards.length - i) * 0.05);
        return (
          <Card
            key={i}
            i={i}
            {...card}
            progress={scrollYProgress}
            range={[i * 0.25, 1]}
            targetScale={targetScale}
          />
        );
      })}
    </section>
  );
};

export default AboutSection;
