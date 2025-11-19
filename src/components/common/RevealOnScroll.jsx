import useElementOnScreen from '../../hooks/useElementOnScreen';

const RevealOnScroll = ({ children, delay = 0, className = "" }) => {
  const [ref, isVisible] = useElementOnScreen({ threshold: 0.1, rootMargin: "0px 0px -50px 0px" });

  return (
    <div
      ref={ref}
      className={`transition-all duration-1000 cubic-bezier(0.22, 1, 0.36, 1) ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'} ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
};

export default RevealOnScroll;
