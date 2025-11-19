import { X } from 'lucide-react';
import useSmoothScroll from '../../hooks/useSmoothScroll';

const MobileMenu = ({ isOpen, onClose }) => {
  const scrollTo = useSmoothScroll();

  const handleNav = (id) => {
    onClose();
    setTimeout(() => scrollTo(id), 300);
  };

  return (
    <div className={`fixed inset-0 bg-[#111] z-50 transition-transform duration-500 cubic-bezier(0.76, 0, 0.24, 1) ${isOpen ? 'translate-y-0' : '-translate-y-full'}`}>
      <div className="flex flex-col h-full p-6 relative">
        <div className="flex justify-between items-center text-white mb-12">
          <div className="text-xl font-bold tracking-tighter">ALEX DEV©</div>
          <button onClick={onClose} className="text-white hover:rotate-90 transition-transform duration-300">
            <X size={32} />
          </button>
        </div>

        <div className="flex flex-col gap-8 mt-12">
          {['work', 'about', 'contact'].map((item, idx) => (
            <button
              key={item}
              onClick={() => handleNav(item)}
              className={`text-5xl font-bold text-white uppercase tracking-tighter text-left hover:text-gray-400 transition-colors transform ${isOpen ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}
              style={{ transition: `all 0.5s ease ${0.1 + (idx * 0.1)}s` }}
            >
              {item}
            </button>
          ))}
        </div>

        <div className="mt-auto text-gray-400 font-mono text-sm">
          <p>BASED IN SAN FRANCISCO</p>
          <p>AVAILABLE FOR FREELANCE</p>
        </div>
      </div>
    </div>
  );
};

export default MobileMenu;
