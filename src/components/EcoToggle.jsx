import React, { createContext, useContext, useState, useEffect } from 'react';

const EcoContext = createContext();

export const useEco = () => useContext(EcoContext);

export const EcoProvider = ({ children }) => {
  const [level, setLevel] = useState(() => {
    return localStorage.getItem('eco-level') || 'high';
  });

  useEffect(() => {
    localStorage.setItem('eco-level', level);
    document.body.classList.remove('eco-high', 'eco-medium', 'eco-low');
    document.body.classList.add(`eco-${level}`);
  }, [level]);

  return (
    <EcoContext.Provider value={{ level, setLevel }}>
      {children}
    </EcoContext.Provider>
  );
};

// Custom æcco Resonance SVGs for a non-greenwashing identity
const ResonanceIcon = ({ level }) => {
  if (level === 'low') {
    return (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
        <path d="M2 12h20" opacity="0.3" />
        <path d="M7 12h10" />
      </svg>
    );
  }
  if (level === 'medium') {
    return (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
        <path d="M2 12c2-4 4-4 6 0s4 4 6 0 4-4 6 0" />
      </svg>
    );
  }
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
      <path d="M2 12c1-3 2-3 3 0s2 3 3 0 2-3 3 0 2 3 3 0 2-3 3 0 2 3 3 0" />
      <path d="M2 12c1-6 2-6 3 0s2 6 3 0 2-6 3 0 2 6 3 0 2-6 3 0 2 6 3 0" opacity="0.4" />
    </svg>
  );
};

const EcoToggle = () => {
  const { level, setLevel } = useEco();

  const levels = [
    { key: 'low', label: 'Lav', icon: <ResonanceIcon level="low" />, title: 'Minimal: Kun tekst, knapper & ikoner' },
    { key: 'medium', label: 'Mellem', icon: <ResonanceIcon level="medium" />, title: 'Balanceret: Uden animationer & tunge visuals' },
    { key: 'high', label: 'Høj', icon: <ResonanceIcon level="high" />, title: 'Fuld oplevelse: Alle visuelle elementer' },
  ];

  return (
    <div className="eco-toggle-bar">
      <span className="eco-toggle-label">CO2 Aftryk</span>
      <div className="eco-toggle-buttons">
        {levels.map(l => (
          <button
            key={l.key}
            className={`eco-btn ${level === l.key ? 'active' : ''}`}
            onClick={() => setLevel(l.key)}
            title={l.title}
          >
            <span className="eco-icon-wrapper">{l.icon}</span>
            {l.label}
          </button>
        ))}
      </div>
    </div>
  );
};

export default EcoToggle;
