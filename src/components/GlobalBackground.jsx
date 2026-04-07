import React from 'react';
import { useEco } from './EcoToggle';

const GlobalBackground = () => {
  const { level } = useEco();

  // Hvis brugeren vælger laveste CO2-aftryk, mountes elementerne slet ikke i DOM'en for at spare ressourcer
  if (level === 'low') {
    return null;
  }

  // 20 blokke er mere end rigeligt til at dække de længste sider (over 10.000px højde).
  const tiles = Array.from({ length: 20 });

  return (
    <div className="global-vector-wrapper">
      {tiles.map((_, i) => (
        <div key={i} className="bg-vector"></div>
      ))}
    </div>
  );
};

export default GlobalBackground;
