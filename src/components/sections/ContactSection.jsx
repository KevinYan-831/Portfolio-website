import { ArrowUpRight } from 'lucide-react';
import RevealOnScroll from '../common/RevealOnScroll';
import useSmoothScroll from '../../hooks/useSmoothScroll';

const ContactSection = () => {
  const scrollTo = useSmoothScroll();

  return (
    <section id="contact" className="bg-[#111] text-white px-6 md:px-12 py-32 min-h-[90vh] flex flex-col justify-between rounded-t-[3rem] relative z-30">
      <div className="max-w-[95vw]">
        <RevealOnScroll>
          <p className="text-sm font-mono text-gray-500 uppercase mb-8">Interested?</p>
          <a
            href="mailto:JixinYan2029@u.northwestern.edu"
            className="text-[14vw] leading-[0.8] font-bold tracking-tighter hover:text-gray-500 transition-colors block"
          >
            LET&apos;S CONNECT
          </a>
        </RevealOnScroll>
      </div>

      <div className="grid md:grid-cols-3 gap-12 border-t border-white/10 pt-12">
        <div>
          <h4 className="text-xs font-bold uppercase tracking-widest text-gray-500 mb-6">Navigation</h4>
          <div className="flex flex-col gap-3 text-lg text-gray-300">
            <button onClick={() => scrollTo('work')} className="text-left hover:text-white transition-colors">
              Projects
            </button>
            <button onClick={() => scrollTo('about')} className="text-left hover:text-white transition-colors">
              About
            </button>
            <button onClick={() => scrollTo('contact')} className="text-left hover:text-white transition-colors">
              Contact
            </button>
          </div>
        </div>

        <div>
          <h4 className="text-xs font-bold uppercase tracking-widest text-gray-500 mb-6">Socials</h4>
          <div className="flex flex-col gap-3 text-lg text-gray-300">
            <a
              href="https://www.linkedin.com/in/jixin-yan/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-colors"
            >
              LinkedIn
            </a>
            <a
              href="https://www.instagram.com/jixinyan831?igsh=dDM1bG93MmlycDJj&utm_source=qr"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-colors"
            >
              Instagram
            </a>
            <a
              href="https://github.com/KevinYan-831"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-colors"
            >
              GitHub
            </a>
          </div>
        </div>

        <div className="flex flex-col justify-between">
          <h4 className="text-xs font-bold uppercase tracking-widest text-gray-500 mb-6">Version</h4>
          <p className="text-gray-500">2025 Edition</p>
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="mt-8 text-sm font-bold uppercase tracking-widest flex items-center gap-2 hover:text-gray-500 transition-colors"
          >
            Back to Top <ArrowUpRight size={16} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
