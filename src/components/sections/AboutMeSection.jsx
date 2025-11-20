import { motion } from 'framer-motion';

const AboutMeSection = () => {
  return (
    <section id="about-me" className="bg-black text-white py-32 relative z-10">
      <div className="container mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row gap-16 md:gap-24">
          {/* Left Column - Title */}
          <div className="w-full md:w-1/3">
            <h2 className="text-xs uppercase tracking-[0.3em] text-gray-500 mb-8 sticky top-32">
              About Me
            </h2>
          </div>

          {/* Right Column - Content */}
          <div className="w-full md:w-2/3 flex flex-col gap-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h3 className="text-3xl md:text-5xl font-serif leading-tight mb-8">
                I&apos;m a creative developer passionate about building digital experiences that matter.
              </h3>
              <p className="text-lg text-gray-400 leading-relaxed mb-6">
                With a background in both design and engineering, I bridge the gap between aesthetics and functionality. I believe that the best products are those that not only work perfectly but also bring joy to their users.
              </p>
              <p className="text-lg text-gray-400 leading-relaxed">
                Currently, I&apos;m focused on exploring the intersection of AI and web development, creating intelligent interfaces that adapt and learn. When I&apos;m not coding, you can find me exploring new technologies, reading about design theory, or capturing moments through my camera lens.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="grid grid-cols-2 gap-8 pt-8 border-t border-white/10"
            >
              <div>
                <h4 className="text-sm font-bold uppercase tracking-widest mb-4">Contact</h4>
                <ul className="flex flex-col gap-2 text-gray-400">
                  <li><a href="mailto:hello@example.com" className="hover:text-white transition-colors">Email</a></li>
                  <li><a href="#" className="hover:text-white transition-colors">LinkedIn</a></li>
                  <li><a href="#" className="hover:text-white transition-colors">GitHub</a></li>
                </ul>
              </div>
              <div>
                <h4 className="text-sm font-bold uppercase tracking-widest mb-4">Services</h4>
                <ul className="flex flex-col gap-2 text-gray-400">
                  <li>Web Development</li>
                  <li>UI/UX Design</li>
                  <li>Technical Strategy</li>
                </ul>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMeSection;
