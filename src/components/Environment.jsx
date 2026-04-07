import React from 'react';

export const WindTurbine = ({ size = 100, speed = '3s', className = '' }) => (
  <div className={`wind-turbine ${className}`} style={{ width: size, height: size }}>
    <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Tower */}
      <path d="M48 95L50 45L52 95H48Z" fill="var(--text-muted-grey)" opacity="0.3" />
      {/* Blades */}
      <g className="turbine-blades" style={{ animationDuration: speed }}>
        <circle cx="50" cy="45" r="3" fill="var(--accent-lumen-green)" />
        <path d="M50 45L50 5L53 45H47L50 5Z" fill="var(--accent-lumen-green)" opacity="0.6" />
        <path d="M50 45L85 65L50 48L50 42L85 65Z" fill="var(--accent-lumen-green)" opacity="0.6" style={{ transform: 'rotate(120deg)', transformOrigin: '50px 45px' }} />
        <path d="M50 45L15 65L50 48L50 42L15 65Z" fill="var(--accent-lumen-green)" opacity="0.6" style={{ transform: 'rotate(240deg)', transformOrigin: '50px 45px' }} />
      </g>
    </svg>
  </div>
);

export const SwayingPlant = ({ size = 60, delay = '0s', className = '' }) => (
  <div className={`swaying-plant ${className}`} style={{ width: size, animationDelay: delay }}>
    <svg viewBox="0 0 50 100" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M25 100C25 100 25 70 25 50C25 30 15 10 5 5" stroke="var(--accent-lumen-green)" strokeWidth="2" strokeLinecap="round" opacity="0.4" />
      <path d="M25 70C25 70 35 60 45 65" stroke="var(--accent-lumen-green)" strokeWidth="1.5" strokeLinecap="round" opacity="0.3" />
      <circle cx="5" cy="5" r="3" fill="var(--accent-lumen-green)" opacity="0.6" />
      <circle cx="45" cy="65" r="2" fill="var(--accent-lumen-green)" opacity="0.4" />
    </svg>
  </div>
);

const Environment = () => {
  return (
    <div className="environment-overlay">
      <div className="plants-bottom">
        <SwayingPlant size={80} delay="0s" className="p1" />
        <SwayingPlant size={60} delay="-1.5s" className="p2" />
        <SwayingPlant size={100} delay="-0.7s" className="p3" />
      </div>
      <div className="global-turbine-container">
        <WindTurbine size={120} speed="4s" />
      </div>
    </div>
  );
};

export default Environment;
