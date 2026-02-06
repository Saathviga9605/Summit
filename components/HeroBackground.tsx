'use client';

interface HeroBackgroundProps {
  enabled?: boolean;
}

export default function HeroBackground({ enabled = true }: HeroBackgroundProps) {
  if (!enabled) return null;

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Animated particle field */}
      <div className="absolute inset-0 opacity-10">
        {[...Array(20)].map((_, i) => (
          <div
            key={`particle-${i}`}
            className="absolute w-1 h-1 bg-sky-400 rounded-full animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${15 + Math.random() * 10}s`,
            }}
          />
        ))}
      </div>

      {/* Neural network grid with animated connections */}
      <svg className="absolute inset-0 w-full h-full opacity-8">
        <defs>
          {/* Glow filter for connections */}
          <filter id="glow">
            <feGaussianBlur stdDeviation="2" result="coloredBlur"/>
            <feMerge>
              <feMergeNode in="coloredBlur"/>
              <feMergeNode in="SourceGraphic"/>
            </feMerge>
          </filter>
        </defs>

        {/* Animated neural connections */}
        <g className="animate-pulse-slow">
          <line x1="10%" y1="15%" x2="25%" y2="35%" stroke="rgb(56, 189, 248)" strokeWidth="0.5" opacity="0.4" filter="url(#glow)">
            <animate attributeName="opacity" values="0.2;0.6;0.2" dur="4s" repeatCount="indefinite"/>
          </line>
          <line x1="25%" y1="35%" x2="45%" y2="25%" stroke="rgb(34, 211, 238)" strokeWidth="0.5" opacity="0.4" filter="url(#glow)">
            <animate attributeName="opacity" values="0.2;0.6;0.2" dur="5s" repeatCount="indefinite"/>
          </line>
          <line x1="45%" y1="25%" x2="65%" y2="45%" stroke="rgb(56, 189, 248)" strokeWidth="0.5" opacity="0.4" filter="url(#glow)">
            <animate attributeName="opacity" values="0.2;0.6;0.2" dur="4.5s" repeatCount="indefinite"/>
          </line>
          <line x1="65%" y1="45%" x2="85%" y2="30%" stroke="rgb(34, 211, 238)" strokeWidth="0.5" opacity="0.4" filter="url(#glow)">
            <animate attributeName="opacity" values="0.2;0.6;0.2" dur="5.5s" repeatCount="indefinite"/>
          </line>
          <line x1="15%" y1="65%" x2="30%" y2="80%" stroke="rgb(56, 189, 248)" strokeWidth="0.5" opacity="0.4" filter="url(#glow)">
            <animate attributeName="opacity" values="0.2;0.6;0.2" dur="4.2s" repeatCount="indefinite"/>
          </line>
          <line x1="30%" y1="80%" x2="55%" y2="70%" stroke="rgb(34, 211, 238)" strokeWidth="0.5" opacity="0.4" filter="url(#glow)">
            <animate attributeName="opacity" values="0.2;0.6;0.2" dur="4.8s" repeatCount="indefinite"/>
          </line>
          <line x1="55%" y1="70%" x2="80%" y2="85%" stroke="rgb(56, 189, 248)" strokeWidth="0.5" opacity="0.4" filter="url(#glow)">
            <animate attributeName="opacity" values="0.2;0.6;0.2" dur="5.2s" repeatCount="indefinite"/>
          </line>
          <line x1="20%" y1="45%" x2="40%" y2="55%" stroke="rgb(34, 211, 238)" strokeWidth="0.5" opacity="0.4" filter="url(#glow)">
            <animate attributeName="opacity" values="0.2;0.6;0.2" dur="4.6s" repeatCount="indefinite"/>
          </line>
          <line x1="60%" y1="60%" x2="75%" y2="70%" stroke="rgb(56, 189, 248)" strokeWidth="0.5" opacity="0.4" filter="url(#glow)">
            <animate attributeName="opacity" values="0.2;0.6;0.2" dur="5.4s" repeatCount="indefinite"/>
          </line>
        </g>

        {/* Pulsing neural nodes */}
        <g>
          {[
            { x: '10%', y: '15%' }, { x: '25%', y: '35%' }, { x: '45%', y: '25%' },
            { x: '65%', y: '45%' }, { x: '85%', y: '30%' }, { x: '15%', y: '65%' },
            { x: '30%', y: '80%' }, { x: '55%', y: '70%' }, { x: '80%', y: '85%' },
            { x: '20%', y: '45%' }, { x: '40%', y: '55%' }, { x: '60%', y: '60%' },
            { x: '75%', y: '70%' }
          ].map((node, i) => (
            <circle
              key={`node-${i}`}
              cx={node.x}
              cy={node.y}
              r="2"
              fill={i % 2 === 0 ? 'rgb(56, 189, 248)' : 'rgb(34, 211, 238)'}
              opacity="0.5"
              filter="url(#glow)"
            >
              <animate
                attributeName="r"
                values="2;4;2"
                dur={`${3 + (i % 3)}s`}
                repeatCount="indefinite"
              />
              <animate
                attributeName="opacity"
                values="0.3;0.7;0.3"
                dur={`${3 + (i % 3)}s`}
                repeatCount="indefinite"
              />
            </circle>
          ))}
        </g>
      </svg>

      {/* Circuit board traces */}
      <svg className="absolute inset-0 w-full h-full opacity-5">
        <defs>
          <pattern id="circuit-horizontal" x="0" y="0" width="300" height="150" patternUnits="userSpaceOnUse">
            <path d="M0 75 L80 75 L80 30 M80 75 L80 120 L150 120 M150 120 L220 120 L220 50 L300 50" 
              stroke="rgb(56, 189, 248)" strokeWidth="1.5" fill="none" opacity="0.6"/>
            <circle cx="80" cy="75" r="3" fill="rgb(34, 211, 238)"/>
            <circle cx="150" cy="120" r="3" fill="rgb(56, 189, 248)"/>
            <circle cx="220" cy="120" r="3" fill="rgb(34, 211, 238)"/>
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#circuit-horizontal)"/>
      </svg>

      {/* Animated wave pattern */}
      <div className="absolute bottom-0 left-0 right-0 h-64 opacity-5">
        <svg className="w-full h-full" preserveAspectRatio="none" viewBox="0 0 1200 120">
          <path
            d="M0,50 Q300,10 600,50 T1200,50 L1200,120 L0,120 Z"
            fill="rgb(56, 189, 248)"
            className="animate-wave"
          />
          <path
            d="M0,70 Q300,30 600,70 T1200,70 L1200,120 L0,120 Z"
            fill="rgb(34, 211, 238)"
            className="animate-wave-delayed"
            opacity="0.5"
          />
        </svg>
      </div>

      {/* Subtle grid overlay */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="w-full h-full"
          style={{
            backgroundImage: `
              linear-gradient(rgba(56, 189, 248, 0.4) 1px, transparent 1px),
              linear-gradient(90deg, rgba(56, 189, 248, 0.4) 1px, transparent 1px)
            `,
            backgroundSize: '80px 80px',
          }}
        />
      </div>

      {/* Floating data hexagons */}
      <div className="absolute inset-0 opacity-8">
        {[...Array(8)].map((_, i) => (
          <div
            key={`hex-${i}`}
            className="absolute animate-float-slow"
            style={{
              left: `${15 + i * 12}%`,
              top: `${20 + (i % 3) * 25}%`,
              animationDelay: `${i * 0.8}s`,
              animationDuration: `${20 + i * 2}s`,
            }}
          >
            <svg width="40" height="40" viewBox="0 0 100 100">
              <polygon
                points="50 1 95 25 95 75 50 99 5 75 5 25"
                fill="none"
                stroke={i % 2 === 0 ? 'rgb(56, 189, 248)' : 'rgb(34, 211, 238)'}
                strokeWidth="1"
                opacity="0.4"
              />
            </svg>
          </div>
        ))}
      </div>

      {/* AI brain/chip icons in corners */}
      <div className="absolute top-12 left-12 opacity-5 animate-pulse-slow">
        <svg className="w-24 h-24 text-sky-400" fill="currentColor" viewBox="0 0 24 24">
          <path d="M20 9V7c0-1.1-.9-2-2-2h-3c0-1.66-1.34-3-3-3S9 3.34 9 5H6c-1.1 0-2 .9-2 2v2c-1.66 0-3 1.34-3 3s1.34 3 3 3v2c0 1.1.9 2 2 2h3c0 1.66 1.34 3 3 3s3-1.34 3-3h3c1.1 0 2-.9 2-2v-2c1.66 0 3-1.34 3-3s-1.34-3-3-3z"/>
        </svg>
      </div>
      <div className="absolute bottom-12 right-12 opacity-5 animate-pulse-slow" style={{ animationDelay: '1s' }}>
        <svg className="w-24 h-24 text-cyan-400" fill="currentColor" viewBox="0 0 24 24">
          <path d="M20 9V7c0-1.1-.9-2-2-2h-3c0-1.66-1.34-3-3-3S9 3.34 9 5H6c-1.1 0-2 .9-2 2v2c-1.66 0-3 1.34-3 3s1.34 3 3 3v2c0 1.1.9 2 2 2h3c0 1.66 1.34 3 3 3s3-1.34 3-3h3c1.1 0 2-.9 2-2v-2c1.66 0 3-1.34 3-3s-1.34-3-3-3z"/>
        </svg>
      </div>

      {/* Radial gradient orbs for depth */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-sky-500/5 rounded-full blur-3xl animate-pulse-slow" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: '2s' }} />
    </div>
  );
}
