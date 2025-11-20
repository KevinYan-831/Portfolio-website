import { useEffect, useRef, useState } from 'react';
import Lenis from 'lenis';

export const ScrollStack = ({ children }) => {
  const lenisRef = useRef(null);

  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
      wheelMultiplier: 1,
      touchMultiplier: 2,
    });

    lenisRef.current = lenis;

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  return <div>{children}</div>;
};

export const ScrollStackItem = ({ children, index, total }) => {
  const itemRef = useRef(null);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (!itemRef.current) return;

      const rect = itemRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      const itemHeight = rect.height;

      // Calculate scroll progress for this item
      const start = windowHeight - itemHeight;
      const progress = Math.max(0, Math.min(1, (start - rect.top) / (windowHeight - itemHeight)));

      setScrollProgress(progress);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial call

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Calculate transform values based on scroll progress
  const stackOffset = index * 40; // Vertical offset for stacking
  const scale = 1 - scrollProgress * index * 0.03;
  const opacity = 1 - scrollProgress * 0.3;

  return (
    <div
      ref={itemRef}
      style={{
        position: 'sticky',
        top: `${stackOffset}px`,
        transform: `scale(${scale})`,
        opacity: opacity,
        zIndex: total - index,
        transition: 'transform 0.1s ease-out, opacity 0.1s ease-out',
        willChange: 'transform, opacity',
      }}
    >
      {children}
    </div>
  );
};
