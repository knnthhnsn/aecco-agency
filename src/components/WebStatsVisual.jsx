import React from 'react';

const WebStatsVisual = () => {
  return (
    <div className="stats-visual-container">
      <div className="bio-flow">
        <div className="organic-blob-1"></div>
        <div className="organic-blob-2"></div>
        <div className="organic-blob-3"></div>
        <div className="visual-content">
          <div className="status-pill glass-panel" style={{ color: '#161616', marginBottom: '2rem' }}>Sustainable Design</div>
          <div className="globe-container">
            <svg width="200" height="200" viewBox="0 0 100 100" style={{ filter: 'drop-shadow(0 0 25px rgba(154, 209, 40, 0.3))' }}>
              <defs>
                <radialGradient id="globe-glow" cx="30%" cy="30%" r="70%">
                  <stop offset="0%" stopColor="var(--accent-lumen-green)" stopOpacity="0.4" />
                  <stop offset="60%" stopColor="transparent" stopOpacity="0" />
                  <stop offset="100%" stopColor="#000" stopOpacity="0.8" />
                </radialGradient>
              </defs>
              
              {/* Ocean / Globe Background */}
              <circle cx="50" cy="50" r="48" fill="#030f05" stroke="var(--accent-lumen-green)" strokeWidth="1" opacity="0.6" />
              
              {/* Map paths indicating continents */}
              <g fill="var(--accent-lumen-green)" opacity="0.85">
                {/* North America */}
                <path d="M 15 25 C 20 10, 45 15, 45 25 C 55 35, 40 40, 35 45 C 30 45, 20 40, 15 35 Z" />
                {/* South America */}
                <path d="M 33 46 C 45 46, 45 55, 45 65 C 45 80, 40 90, 35 85 C 30 70, 25 55, 33 46 Z" />
                {/* Eurasia */}
                <path d="M 50 15 C 65 5, 85 10, 90 25 C 95 40, 80 50, 75 45 C 65 40, 60 40, 50 35 C 45 30, 45 20, 50 15 Z" />
                {/* Africa */}
                <path d="M 45 45 C 55 40, 70 45, 75 55 C 75 65, 65 80, 55 75 C 50 65, 45 60, 45 45 Z" />
                {/* Australia */}
                <path d="M 75 65 C 85 60, 95 65, 90 75 C 85 85, 70 80, 75 65 Z" />
              </g>

              {/* Grid Lines for tech aesthetic */}
              <path d="M 2 50 Q 50 70 98 50" fill="none" stroke="var(--accent-lumen-green)" strokeWidth="0.5" opacity="0.3" strokeDasharray="2 4" />
              <path d="M 50 2 Q 70 50 50 98" fill="none" stroke="var(--accent-lumen-green)" strokeWidth="0.5" opacity="0.3" strokeDasharray="2 4" />
              
              {/* 3D Shading/Glow */}
              <circle cx="50" cy="50" r="48" fill="url(#globe-glow)" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WebStatsVisual;
