import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const services = [
  {
    id: "01",
    title: "Full Stack Dev",
    description: "Building scalable, responsive web applications using modern technologies like React, Node.js, and Supabase.",
    color: "#0a0a0a",
    textColor: "#ffffff",
    borderColor: "rgba(255,255,255,0.1)"
  },
  {
    id: "02",
    title: "Machine Learning",
    description: "Developing intelligent systems and predictive models using Python, XGBoost, and integrating LLM APIs.",
    color: "#ffffff",
    textColor: "#0a0a0a",
    borderColor: "rgba(0,0,0,0.1)"
  },
  {
    id: "03",
    title: "Data Analytics",
    description: "Analyzing complex datasets to derive actionable insights, utilizing tools like Pandas, NumPy, and Scikit-learn.",
    color: "#0a0a0a",
    textColor: "#ffffff",
    borderColor: "rgba(255,255,255,0.1)"
  }
];

const Card = ({ service, index, total, progress, range, targetScale }) => {
  const scale = useTransform(progress, range, [1, targetScale]);
  
  return (
    <div 
      className="sticky top-0 flex items-center justify-center h-screen"
      style={{ 
        top: `calc(10vh + ${index * 25}px)`,
        marginBottom: index === total - 1 ? '10vh' : '0px'
      }}
    >
      <motion.div
        className="w-full max-w-4xl h-[60vh] md:h-[70vh] rounded-3xl overflow-hidden relative flex flex-col shadow-2xl origin-top"
        style={{
          backgroundColor: service.color,
          color: service.textColor,
          scale,
          zIndex: index + 1,
          border: `1px solid ${service.borderColor}`
        }}
        initial={{ y: 50, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true, margin: "-10%" }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      >
        <div className="p-8 md:p-16 flex flex-col justify-between h-full relative z-10">
          <div className="flex justify-between items-start border-b pb-8" style={{ borderColor: service.borderColor }}>
             <span className="text-4xl md:text-5xl font-bold font-syne">{service.id}</span>
             <div className="w-12 h-12 rounded-full border flex items-center justify-center transform -rotate-45 hover:rotate-0 transition-transform duration-500 cursor-pointer" style={{ borderColor: service.textColor }}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
             </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-end">
            <h3 className="text-5xl md:text-8xl font-bold font-syne leading-[0.9] tracking-tighter">
              {service.title}
            </h3>
            <p className="text-lg md:text-xl opacity-80 leading-relaxed max-w-md font-light">
              {service.description}
            </p>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

const Services = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end']
  });

  return (
    <section ref={containerRef} className="relative w-full bg-[#050505]">
      <div className="px-6 md:px-12 pt-32 pb-48 max-w-screen-xl mx-auto">
        <div className="mb-32">
           <span className="text-sm font-mono uppercase tracking-widest text-white/40 block border-b border-white/10 pb-4 w-32">
             What I Do
           </span>
           <h2 className="text-5xl md:text-7xl font-bold text-[#e1e1e1] mt-8 font-syne">
             Capabilities
           </h2>
        </div>

        <div className="relative">
          {services.map((service, index) => {
            const targetScale = 1 - ((services.length - 1 - index) * 0.05);
            const step = 1 / (services.length - 1 || 1); 
            const start = index * step;
            const end = start + step;
            
            return (
              <Card 
                key={service.id} 
                service={service} 
                index={index} 
                total={services.length}
                progress={scrollYProgress}
                range={[start, end]}
                targetScale={targetScale}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;
