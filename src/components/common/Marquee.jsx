const Marquee = ({ text, speed = 20 }) => (
  <div className="w-full overflow-hidden border-y border-black/10 py-4 bg-white select-none relative z-10">
    <div className="flex whitespace-nowrap animate-marquee">
      {[...Array(4)].map((_, i) => (
        <span key={i} className="text-6xl md:text-8xl font-bold uppercase text-transparent stroke-text px-8 tracking-tighter opacity-20">
          {text} —
        </span>
      ))}
    </div>
    <style>{`
      .stroke-text {
        -webkit-text-stroke: 2px #000;
      }
      @keyframes marquee {
        0% { transform: translateX(0); }
        100% { transform: translateX(-50%); }
      }
      .animate-marquee {
        animation: marquee ${speed}s linear infinite;
      }
    `}</style>
  </div>
);

export default Marquee;
