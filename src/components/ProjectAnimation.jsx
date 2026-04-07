import React from 'react';
import { useEco } from './EcoToggle';

const ProjectAnimation = () => {
  const { level } = useEco();

  // Sparer GPU/Netværksrendering ved slet ikke at bygge the DOM-node
  if (level === 'low') return null;

  return (
    <div className="project-animation-wrapper">
      <svg className="project-motion-svg" viewBox="0 0 800 600" preserveAspectRatio="xMidYMid meet">
        <path 
          id="motionPath"
          className="motion-path"
          d="M50,300 C50,50 350,50 400,300 C450,550 750,550 750,300 C750,50 450,50 400,300 C350,550 50,550 50,300 Z" 
          fill="none"
        />
        
        {/* Trail-cirkler (skygger der følger EFTER lederen) - renderes bagfra og frem for korrekt stacking */}
        {Array.from({ length: 16 }, (_, i) => 15 - i).map((val) => (
          <circle 
            key={val} 
            className={`orbit-circle shadow-circle shadow-${val}`} 
            r={45 - (val * 2.2)}
          >
            <animateMotion 
              dur="8s" 
              repeatCount="indefinite" 
              begin={`-${8 - (0.12 * (val + 1))}s`} 
              rotate="auto"
              calcMode="spline"
              keySplines="0.5 0 0.5 1; 0.5 0 0.5 1"
              keyTimes="0; 0.5; 1"
              keyPoints="0; 0.5; 1"
            >
              <mpath xlinkHref="#motionPath" />
            </animateMotion>
          </circle>
        ))}

        {/* Hoved-cirkel (Lederen - forest i retningen, størst og øverst) */}
        <circle className="orbit-circle main-circle" r="45">
          <animateMotion 
            dur="8s" 
            repeatCount="indefinite" 
            begin="0s"
            rotate="auto"
            calcMode="spline"
            keySplines="0.5 0 0.5 1; 0.5 0 0.5 1"
            keyTimes="0; 0.5; 1"
            keyPoints="0; 0.5; 1"
          >
            <mpath xlinkHref="#motionPath" />
          </animateMotion>
        </circle>
      </svg>
    </div>
  );
};

export default ProjectAnimation;
