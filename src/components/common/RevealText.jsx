import { useState, useEffect } from 'react';

const RevealText = ({ text, delay = 0, className = "", direction = "bottom" }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), delay);
    return () => clearTimeout(timer);
  }, [delay]);

  const getTransform = () => {
    if (isVisible) return 'translate-x-0 translate-y-0 opacity-100';

    switch(direction) {
      case 'left':
        return '-translate-x-full opacity-0';
      case 'right':
        return 'translate-x-full opacity-0';
      case 'bottom':
      default:
        return 'translate-y-full opacity-0';
    }
  };

  return (
    <div className="overflow-hidden">
      <div className={`transform transition-all duration-1000 ease-[0.22,1,0.36,1] ${getTransform()} ${className}`}>
        {text}
      </div>
    </div>
  );
};

export default RevealText;
