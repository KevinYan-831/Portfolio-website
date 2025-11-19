import useSmoothScroll from '../../hooks/useSmoothScroll';

const Navbar = ({ onOpenMenu }) => {
  const scrollTo = useSmoothScroll();

  return (
    <nav className="fixed top-0 w-full z-40 px-6 py-6 flex justify-between items-center mix-blend-difference text-white pointer-events-auto">
      <div
        className="text-xl font-bold tracking-tighter cursor-pointer hover:opacity-80 transition-opacity"
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      >
        ALEX DEV©
      </div>
      <div className="hidden md:flex gap-8 text-sm font-medium uppercase tracking-widest">
        <button onClick={() => scrollTo('work')} className="hover:opacity-50 transition-opacity">Work</button>
        <button onClick={() => scrollTo('about')} className="hover:opacity-50 transition-opacity">About</button>
        <button onClick={() => scrollTo('contact')} className="hover:opacity-50 transition-opacity">Contact</button>
      </div>
      <button onClick={onOpenMenu} className="md:hidden text-xl font-bold z-50">
        MENU
      </button>
    </nav>
  );
};

export default Navbar;
