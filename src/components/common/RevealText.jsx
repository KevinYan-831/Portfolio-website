import { useState, useEffect } from 'react';

const RevealText = ({ text, delay = 0, className = "" }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), delay);
    return () => clearTimeout(timer);
  }, [delay]);

  return (
    <div className="overflow-hidden">
      <div className={`transform transition-transform duration-1000 ease-[0.22,1,0.36,1] ${isVisible ? 'translate-y-0' : 'translate-y-full'} ${className}`}>
        {text}
      </div>
    </div>
  );
};

export default RevealText;
