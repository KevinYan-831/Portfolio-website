import useSmoothScroll from '../../hooks/useSmoothScroll';

const Navbar = ({ onOpenMenu }) => {
  const scrollTo = useSmoothScroll();

  return (
    <nav className="fixed top-0 w-full z-50 px-6 py-8 flex justify-between items-center mix-blend-difference text-white pointer-events-auto">
      <button
        className="text-xl font-bold tracking-tighter hover:opacity-70 transition-opacity"
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      >
        JIXIN YAN
      </button>

      <div className="hidden md:flex gap-12 text-xs font-bold uppercase tracking-widest">
        <button onClick={() => scrollTo('work')} className="hover:text-gray-400 transition-colors">Work</button>
        <button onClick={() => scrollTo('about')} className="hover:text-gray-400 transition-colors">About</button>
        <button onClick={() => scrollTo('contact')} className="hover:text-gray-400 transition-colors">Contact</button>
      </div>

      <button onClick={onOpenMenu} className="group flex items-center gap-3 text-xs font-bold uppercase tracking-widest hover:opacity-70 transition-opacity">
        <span className="hidden md:inline">Menu</span>
        <div className="flex flex-col gap-1.5">
          <div className="w-8 h-[2px] bg-white group-hover:w-6 transition-all duration-300 ml-auto"></div>
          <div className="w-8 h-[2px] bg-white"></div>
        </div>
      </button>
    </nav>
  );
};

export default Navbar;
