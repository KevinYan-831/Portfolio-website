import { ArrowUpRight, Github, Linkedin, Twitter } from 'lucide-react';
import RevealOnScroll from '../common/RevealOnScroll';
import ContactForm from '../common/ContactForm';

const ContactSection = () => {
  return (
    <section id="contact" className="min-h-screen flex flex-col justify-between bg-[#f4f4f4] px-6 py-20">
      <div className="max-w-7xl mx-auto w-full grid lg:grid-cols-2 gap-20">
        <RevealOnScroll className="space-y-8">
          <p className="text-sm font-mono text-gray-400 uppercase">Get in touch</p>
          <h2 className="text-6xl md:text-8xl font-bold tracking-tighter leading-[0.9]">
            LET&apos;S WORK <br /> TOGETHER
          </h2>
          <div className="pt-8">
            <ContactForm />
          </div>
        </RevealOnScroll>

        <RevealOnScroll delay={200} className="hidden lg:flex flex-col justify-end items-end text-right space-y-8">
          <div className="space-y-2">
            <h3 className="text-sm font-mono text-gray-400 uppercase">Contact Details</h3>
            <a href="mailto:hello@alex.dev" className="text-xl block hover:text-gray-500 transition-colors">hello@alex.dev</a>
            <p className="text-xl">+1 (555) 000-0000</p>
          </div>
          <div className="space-y-2">
            <h3 className="text-sm font-mono text-gray-400 uppercase">Socials</h3>
            <div className="flex gap-4 justify-end">
              <a href="#" className="hover:text-gray-500 transition-colors">Twitter</a>
              <a href="#" className="hover:text-gray-500 transition-colors">LinkedIn</a>
              <a href="#" className="hover:text-gray-500 transition-colors">GitHub</a>
            </div>
          </div>
        </RevealOnScroll>
      </div>

      <RevealOnScroll delay={400} className="border-t border-black/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-6 mt-20">
        <div className="flex gap-6 lg:hidden">
          <a href="#" className="p-4 border border-black/10 rounded-full hover:bg-black hover:text-white transition-colors"><Github size={20} /></a>
          <a href="#" className="p-4 border border-black/10 rounded-full hover:bg-black hover:text-white transition-colors"><Linkedin size={20} /></a>
          <a href="#" className="p-4 border border-black/10 rounded-full hover:bg-black hover:text-white transition-colors"><Twitter size={20} /></a>
        </div>
        <div className="text-sm font-medium uppercase text-gray-500">
          © 2025 Alex Dev.
        </div>
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="text-sm font-medium uppercase flex items-center gap-2 hover:opacity-50 transition-opacity"
        >
          Back to Top <ArrowUpRight size={16} />
        </button>
      </RevealOnScroll>
    </section>
  );
};

export default ContactSection;
