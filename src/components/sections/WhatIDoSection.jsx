import React from 'react';
import { motion } from 'framer-motion';

const services = [
  {
    id: "01",
    title: "Full Stack Dev",
    description: "Building scalable, responsive web applications using modern technologies like React, Node.js, and Supabase.",
    color: "#1a1a1a",
    textColor: "#ffffff"
  },
  {
    id: "02",
    title: "AI & ML",
    description: "Developing intelligent systems and predictive models using Python, XGBoost, and integrating LLM APIs.",
    color: "#e1e1e1",
    textColor: "#050505"
  },
  {
    id: "03",
    title: "Data Science",
    description: "Analyzing complex datasets to derive actionable insights, utilizing tools like Pandas, NumPy, and Scikit-learn.",
    color: "#1a1a1a",
    textColor: "#ffffff"
  },
  {
    id: "04",
    title: "UI/UX Design",
    description: "Crafting intuitive and engaging user interfaces that prioritize user experience and accessibility.",
    color: "#e1e1e1",
    textColor: "#050505"
  }
];

const Services = () => {
  return (
    <section className="relative w-full bg-[#050505]">
      <div className="px-6 md:px-12 py-24 max-w-screen-xl mx-auto">
        <div className="mb-24">
           <span className="text-xs uppercase tracking-widest text-white/40 block border-b border-white/10 pb-4 w-24">
             What I Do
           </span>
           <h2 className="text-4xl md:text-6xl font-bold text-[#e1e1e1] mt-8 font-syne">
             Capabilities
           </h2>
        </div>

        <div className="flex flex-col pb-24">
          {services.map((service, index) => (
            <div 
              key={service.id}
              className="sticky top-0 h-screen flex items-center justify-center"
              style={{ 
                top: `${index * 30}px`, 
                zIndex: index + 1,
                marginBottom: index === services.length - 1 ? 0 : '0px' 
              }}
            >
              <motion.div
                className="w-full h-[60vh] md:h-[70vh] rounded-2xl overflow-hidden relative flex flex-col shadow-2xl"
                style={{
                  backgroundColor: service.color,
                  color: service.textColor,
                  transformOrigin: "top center"
                }}
                initial={{ y: 100, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true, margin: "-10%" }}
                transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              >
                <div className="p-8 md:p-16 flex flex-col justify-between h-full">
                  <div className="flex justify-between items-start border-b border-current pb-8" style={{ borderColor: 'rgba(125,125,125,0.2)' }}>
                     <span className="text-xl md:text-2xl font-bold opacity-50">{service.id}</span>
                     <div className="w-8 h-8 rounded-full border border-current opacity-50 flex items-center justify-center transform -rotate-45">
                        →
                     </div>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-end">
                    <h3 className="text-4xl md:text-7xl font-bold font-syne leading-none tracking-tighter">
                      {service.title}
                    </h3>
                    <p className="text-lg md:text-xl opacity-70 leading-relaxed max-w-md">
                      {service.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
