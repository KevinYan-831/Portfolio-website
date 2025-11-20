const LightRays = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      <svg
        className="absolute inset-0 w-full h-full"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="xMidYMid slice"
      >
        <defs>
          <radialGradient id="light-gradient" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="rgba(255, 255, 255, 0.3)" />
            <stop offset="100%" stopColor="rgba(244, 244, 244, 0)" />
          </radialGradient>

          <filter id="blur">
            <feGaussianBlur in="SourceGraphic" stdDeviation="2" />
          </filter>
        </defs>

        {/* Central light source */}
        <circle
          cx="50%"
          cy="50%"
          r="30%"
          fill="url(#light-gradient)"
          opacity="0.4"
        />

        {/* Light rays */}
        <g opacity="0.15" filter="url(#blur)">
          {[...Array(12)].map((_, i) => {
            const angle = (i * 360) / 12;
            const rad = (angle * Math.PI) / 180;
            const length = 150;
            const x1 = 50;
            const y1 = 50;
            const x2 = 50 + Math.cos(rad) * length;
            const y2 = 50 + Math.sin(rad) * length;

            return (
              <line
                key={i}
                x1={`${x1}%`}
                y1={`${y1}%`}
                x2={`${x2}%`}
                y2={`${y2}%`}
                stroke="rgba(17, 17, 17, 0.1)"
                strokeWidth="0.5"
                strokeLinecap="round"
              />
            );
          })}
        </g>

        {/* Additional subtle rays at different angles */}
        <g opacity="0.1" filter="url(#blur)">
          {[...Array(24)].map((_, i) => {
            const angle = (i * 360) / 24 + 7.5;
            const rad = (angle * Math.PI) / 180;
            const length = 120;
            const x1 = 50;
            const y1 = 50;
            const x2 = 50 + Math.cos(rad) * length;
            const y2 = 50 + Math.sin(rad) * length;

            return (
              <line
                key={i}
                x1={`${x1}%`}
                y1={`${y1}%`}
                x2={`${x2}%`}
                y2={`${y2}%`}
                stroke="rgba(17, 17, 17, 0.08)"
                strokeWidth="0.3"
                strokeLinecap="round"
              />
            );
          })}
        </g>

        {/* Subtle gradient overlay */}
        <rect
          width="100%"
          height="100%"
          fill="url(#light-gradient)"
          opacity="0.2"
        />
      </svg>
    </div>
  );
};

export default LightRays;
