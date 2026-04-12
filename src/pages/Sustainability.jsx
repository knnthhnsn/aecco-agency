import React from 'react';
import { motion } from 'framer-motion';
import Logo from '../assets/Logo.svg';
import lyn from '../assets/lyn.svg';
import { Helmet } from 'react-helmet-async';

const Sustainability = () => {
  const avatars = [
    'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=200&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=200&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=200&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=200&auto=format&fit=crop'
  ];

  return (
    <div className="container page-padding sustainability-page" style={{ paddingTop: '2rem' }}>
      <Helmet>
        <title>Hvad er Digital Bæredygtighed? | æcco's Grønne Vision</title>
        <meta name="description" content="Lær hvordan webdesign påvirker klimaet. æcco optimerer infrastruktur, hosting og assets for at reducere CO2-udledning fra internettet." />
        <meta property="og:title" content="Digital Bæredygtighed: Fra Teori til Handling" />
        <meta property="og:description" content="Internettet står for 4% af verdens CO2. Lær hvordan vi gør din hjemmeside grønnere." />
        <link rel="canonical" href="https://aecco-agency.web.app/sustainability" />
      </Helmet>
      <div className="sustainability-layout">
        
        {/* Hero Title - Hvad er digital bæredygtighed? */}
        <section className="sust-hero-title" style={{ marginBottom: '4rem' }}>
          <h1 className="page-title" style={{ fontSize: 'clamp(3rem, 8vw, 6rem)', justifyContent: 'center' }}>
            Hvad er <span className="highlight-box">digital</span> bæredygtighed?
          </h1>
        </section>

        {/* Top Grid Section */}
        <div className="sustainability-top-grid">
          {/* Large Left Card - CO2 Optimized */}
          <motion.div 
            className="sust-card sust-card-large-left co2-optimized-card"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="card-top-header">
              <h2 className="card-main-title">CO2 optimeret <br /> webdesign</h2>
              <div className="lyn-icon-container">
                <img src={lyn} alt="Lyn" className="lyn-icon" />
              </div>
            </div>
            <p className="card-description-text">
              Internettet står idag for 3-4 % af verdens samlede CO2-udledning – hvilket faktisk overstiger hele flybranchen. Hver gang en tung hjemmeside loades, trækker det massiv strøm fra fysiske datacentre og netværkskabler.
            </p>
          </motion.div>

          {/* Right Column Stacked */}
          <div className="sust-right-col">
            <motion.div 
              className="sust-card sust-card-side digital-pollution-card"
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="side-card-title">Digitalt foruning = fysisk</h2>
              <p className="side-card-text">
                Internettet er ikke en usynlig "sky", men en enorm fysisk maskine af servere. Selvom din skærm ikke har et udstødningsrør, koster hver eneste byte data ægte strøm og udleder reel CO2.
              </p>
            </motion.div>

            <motion.div 
              className="sust-card sust-card-side optimize-card"
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
            >
              <h2 className="side-card-title">Optimize</h2>
              <p className="side-card-text">
                Enjoy exclusive networking sessions, roundtables, and social events to foster collaboration and spark new partnerships.
              </p>
            </motion.div>
          </div>
        </div>

        {/* Grønnere Webløsninger - Section Title before Options */}
        <section className="sust-solutions-header" style={{ marginTop: '8rem', marginBottom: '4rem', textAlign: 'center' }}>
          <h2 style={{ fontSize: 'clamp(2.5rem, 6vw, 4.5rem)', fontWeight: '900', color: '#FFFCDF', textTransform: 'uppercase', letterSpacing: '-2px' }}>
            GRØNNERE <span style={{ color: 'var(--accent-lumen-green)' }}>WEBLØSNINGER</span>
          </h2>
        </section>

        {/* Stacking Options Section */}
        <div className="sust-options-container">
          {/* Option 1: Infrastruktur Data Visualization */}
          <motion.div 
            className="sust-option-card"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="card-left">
              <div className="card-number">1</div>
              <div className="card-left-header">
                <h3>Optimize</h3>
              </div>
              <p className="card-description">
                Uden handling vil datacentres elforbrug eksplodere frem mod 2030. Vi designer for at holde jeres digitale fodaftryk i det absolutte "bedste scenarie".
              </p>
            </div>

            <div className="card-divider-vertical" style={{ background: '#FFFCDF', width: '2px', opacity: 1, margin: '2rem 0' }}></div>

            <div className="card-right" style={{ paddingTop: '2rem' }}>
              <div style={{ paddingLeft: '15px', marginBottom: '1.5rem', textAlign: 'left' }}>
                <span style={{ fontSize: '0.7rem', opacity: 0.6, color: '#FFFCDF', display: 'block', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '2px', marginBottom: '0.3rem' }}>Statistics</span>
                <h4 className="card-right-title" style={{ fontSize: '1.8rem', fontWeight: '900', margin: '0', textTransform: 'none', letterSpacing: '-0.5px', lineHeight: '1.1' }}>Infrastruktur data</h4>
              </div>
              
              <div className="chart-container" style={{ position: 'relative', width: '100%', boxSizing: 'border-box', maxWidth: '420px', marginTop: '1rem' }}>
                <svg width="100%" height="320" viewBox="-20 0 470 320" style={{ overflow: 'visible' }}>
                  {/* Legend Top Right - Precision Placement */}
                  <g transform="translate(320, -110)">
                    <g transform="translate(0, 0)">
                      <circle cx="-35" cy="0" r="5" fill="#000" />
                      <line x1="-50" y1="0" x2="-20" y2="0" stroke="#000" strokeWidth="3" />
                      <text x="0" y="5" fill="#FFFCDF" fontSize="13" fontWeight="700">Værste</text>
                    </g>
                    <g transform="translate(0, 35)">
                      <circle cx="-35" cy="0" r="5" fill="#FF0000" />
                      <line x1="-50" y1="0" x2="-20" y2="0" stroke="#FF0000" strokeWidth="3" />
                      <text x="0" y="5" fill="#FFFCDF" fontSize="13" fontWeight="700">Forventet</text>
                    </g>
                    <g transform="translate(0, 70)">
                      <circle cx="-35" cy="0" r="5" fill="var(--accent-lumen-green)" />
                      <line x1="-50" y1="0" x2="-20" y2="0" stroke="var(--accent-lumen-green)" strokeWidth="3" />
                      <text x="0" y="5" fill="#FFFCDF" fontSize="13" fontWeight="700">æcco</text>
                    </g>
                  </g>

                  {/* Horizontal Grid Lines - Full Width */}
                  {[0, 2000, 4000, 6000, 8000].map((val) => {
                    const y = 240 - (val / 8000) * 220;
                    return (
                      <React.Fragment key={val}>
                        <line x1="-10" y1={y} x2="380" y2={y} stroke="#FFFCDF" strokeWidth="2" />
                        <text x="-25" y={y + 5} fill="#FFFCDF" fontSize="12" fontWeight="700" textAnchor="end">
                          {val === 0 ? '0' : val === 8000 ? '8k' : val === 6000 ? '6k' : val === 4000 ? '4k' : '2k'}
                        </text>
                      </React.Fragment>
                    );
                  })}
                  
                  {/* Paths with Cubic Beziers for S-Shapes */}
                  {/* Red (Forventet) */}
                  <motion.path 
                    d="M0 240 C100 240 200 40 350 20" 
                    fill="none" stroke="#FF0000" strokeWidth="8"
                    initial={{ pathLength: 0 }}
                    whileInView={{ pathLength: 1 }}
                    transition={{ duration: 2.5, ease: "easeInOut" }}
                  />
                  {/* End Marker Red */}
                  <motion.g initial={{ scale: 0 }} whileInView={{ scale: 1 }} transition={{ delay: 2.2 }}>
                    <circle cx="350" cy="20" r="16" fill="#FF0000" stroke="#FFFCDF" strokeWidth="4" />
                    <text x="375" y="10" fill="#FFFCDF" fontSize="16" fontWeight="900">7,933</text>
                  </motion.g>

                  {/* Black (Værste) */}
                  <motion.path 
                    d="M0 240 C100 240 200 180 350 155" 
                    fill="none" stroke="#000" strokeWidth="8"
                    initial={{ pathLength: 0 }}
                    whileInView={{ pathLength: 1 }}
                    transition={{ duration: 2.5, ease: "easeInOut", delay: 0.2 }}
                  />
                  {/* End Marker Black */}
                  <motion.g initial={{ scale: 0 }} whileInView={{ scale: 1 }} transition={{ delay: 2.4 }}>
                    <circle cx="350" cy="155" r="16" fill="#000" stroke="#FFFCDF" strokeWidth="4" />
                    <text x="375" y="145" fill="#FFFCDF" fontSize="16" fontWeight="900">2,967</text>
                  </motion.g>

                  {/* æcco (Grøn) */}
                  <motion.path 
                    d="M0 240 C100 240 250 240 350 210" 
                    fill="none" stroke="var(--accent-lumen-green)" strokeWidth="8"
                    initial={{ pathLength: 0 }}
                    whileInView={{ pathLength: 1 }}
                    transition={{ duration: 2.5, ease: "easeInOut", delay: 0.4 }}
                  />
                  {/* End Marker Green */}
                  <motion.g initial={{ scale: 0 }} whileInView={{ scale: 1 }} transition={{ delay: 2.6 }}>
                    <circle cx="350" cy="210" r="16" fill="var(--accent-lumen-green)" stroke="#FFFCDF" strokeWidth="4" />
                    <text x="375" y="200" fill="#FFFCDF" fontSize="16" fontWeight="900">1,137</text>
                  </motion.g>

                  {/* X-Axis Labels - Bolder */}
                  <g transform="translate(0, 270)">
                    <text x="0" y="0" fill="#FFFCDF" fontSize="14" fontWeight="700" textAnchor="start">2010</text>
                    <text x="87.5" y="0" fill="#FFFCDF" fontSize="14" fontWeight="700" textAnchor="middle">2015</text>
                    <text x="175" y="0" fill="#FFFCDF" fontSize="14" fontWeight="700" textAnchor="middle">2020</text>
                    <text x="262.5" y="0" fill="#FFFCDF" fontSize="14" fontWeight="700" textAnchor="middle">2025</text>
                    <text x="350" y="0" fill="#FFFCDF" fontSize="14" fontWeight="700" textAnchor="end">2030</text>
                  </g>
                </svg>
              </div>
              <div className="card-logo-mini">
                <img src={Logo} alt="æcco logo" style={{ width: '60px', height: 'auto', opacity: 0.8 }} />
              </div>
            </div>
          </motion.div>

          {/* Option 2: Forbrugerforventninger */}
          <motion.div 
            className="sust-option-card"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            <div className="card-left">
              <div className="card-number">2</div>
              <div className="card-left-header">
                <h3>Insights</h3>
              </div>
              <p className="card-description" style={{ fontSize: '1.2rem', fontWeight: '700', color: '#FFFCDF' }}>
                74% af forbrugerne vil hellere handle hos brands, der tager bæredygtige valg.
              </p>
            </div>

            <div className="card-divider-vertical"></div>

            <div className="card-right" style={{ padding: '1rem' }}>
              <div className="bubble-chart-container">
                <div className="bubble-chart-header">
                  <span className="label">website</span>
                  <h3>Bæredygtig valg</h3>
                </div>
                
                <div className="bubbles-wrapper">
                  <motion.div 
                    className="bubble active"
                    initial={{ scale: 0, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ type: "spring", stiffness: 100, delay: 0.2 }}
                  >
                    74%
                  </motion.div>
                  <motion.div 
                    className="bubble maintenance"
                    initial={{ scale: 0, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ type: "spring", stiffness: 100, delay: 0.4 }}
                  >
                    20%
                  </motion.div>
                  <motion.div 
                    className="bubble inactive"
                    initial={{ scale: 0, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ type: "spring", stiffness: 100, delay: 0.6 }}
                  >
                    6%
                  </motion.div>
                </div>

                <div className="bubble-legend">
                  <div className="legend-item">
                    <div className="dot" style={{ background: 'var(--accent-lumen-green)' }}></div>
                    Vælger Bæredygtighed
                  </div>
                  <div className="legend-item">
                    <div className="dot" style={{ background: '#000000' }}></div>
                    Bæredygtighed er et plus
                  </div>
                  <div className="legend-item">
                    <div className="dot" style={{ background: '#CC0000' }}></div>
                    Ingen præference
                  </div>
                </div>
              </div>
              <div className="card-logo-mini">
                <img src={Logo} alt="æcco logo" style={{ width: '60px', height: 'auto', opacity: 0.8 }} />
              </div>
            </div>
          </motion.div>

          {/* Option 3: Grøn Hosting */}
          <motion.div 
            className="sust-option-card"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <div className="card-left">
              <div className="card-number">3</div>
              <div className="card-left-header">
                <h3>Infrastructure</h3>
              </div>
              <p className="card-description">
                Vi flytter jeres platform til servere, der kører på 100% vedvarende energi. Ved at vælge grøn hosting reducerer I jeres digitale fodaftryk med op mod 90%.
              </p>
            </div>

            <div className="card-divider-vertical"></div>

            <div className="card-right" style={{ padding: '1rem' }}>
              <div className="gauge-chart-container">
                <div className="bubble-chart-header">
                  <span className="label">website</span>
                  <h3>Bæredygtig Hosting</h3>
                </div>

                <div className="gauge-wrapper">
                  <svg className="gauge-svg" viewBox="0 0 200 120">
                    {/* Background Arc */}
                    <path 
                      d="M20,100 A80,80 0 0,1 180,100" 
                      fill="none" 
                      stroke="#FFFCDF" 
                      strokeWidth="20" 
                      strokeLinecap="round" 
                    />
                    {/* Active Arc */}
                    <motion.path 
                      d="M20,100 A80,80 0 0,1 180,100" 
                      fill="none" 
                      stroke="var(--accent-lumen-green)" 
                      strokeWidth="20" 
                      strokeLinecap="round" 
                      strokeDasharray={251.2}
                      initial={{ strokeDashoffset: 251.2 }}
                      whileInView={{ strokeDashoffset: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 1.5, ease: "easeOut", delay: 0.2 }}
                    />
                    {/* End Indicator Dot */}
                    <motion.circle 
                      cx="180" 
                      cy="100" 
                      r="12" 
                      fill="var(--accent-lumen-green)" 
                      stroke="#FFFCDF" 
                      strokeWidth="4"
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: 1.5 }}
                    />
                  </svg>
                  <div className="gauge-center-text">
                    <span className="gauge-percentage">100%</span>
                    <span className="gauge-label">Bæredygtigenergi</span>
                  </div>
                </div>
              </div>
              <div className="card-logo-mini">
                <img src={Logo} alt="æcco logo" style={{ width: '60px', height: 'auto', opacity: 0.8 }} />
              </div>
            </div>
          </motion.div>

          {/* Option 4: Billeder */}
          <motion.div 
            className="sust-option-card"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            <div className="card-left">
              <div className="card-number">4</div>
              <div className="card-left-header">
                <h3>Optimize</h3>
              </div>
              <p className="card-description">
                Optimering af billeder er det punkt, der har størst indflydelse på CO2-udslip. Vi erstatter tunge filformater med lynhurtig vektorgrafik og moderne formater som AVIF.
              </p>
            </div>

            <div className="card-divider-vertical"></div>

            <div className="card-right" style={{ padding: '2rem', display: 'flex', flexDirection: 'column' }}>
              <div className="bubble-chart-header">
                <span className="label">performance</span>
                <h3>Asset Optimering</h3>
              </div>

              <div style={{ flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'center', gap: '1rem', marginTop: '1rem' }}>
                {/* Legacy JPG - Heavy */}
                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', background: '#FFFFFF', padding: '1rem 1.2rem', borderRadius: '20px', border: '1px solid #FFFFFF' }}>
                  <div style={{ width: '56px', height: '56px', background: '#1a1a1a', borderRadius: '14px', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                    {/* Raster image icon - mountains & sun */}
                    <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
                      <rect x="2" y="4" width="28" height="24" rx="3" stroke="#FFFFFF" strokeWidth="1.5"/>
                      <circle cx="10" cy="12" r="3" fill="rgba(255,200,50,0.5)"/>
                      <path d="M2 22 L10 14 L16 20 L22 13 L30 22 L30 25 C30 26.5 28.5 28 27 28 L5 28 C3.5 28 2 26.5 2 25 Z" fill="#FFFFFF" stroke="#FFFFFF" strokeWidth="1"/>
                    </svg>
                  </div>
                  <div style={{ flex: 1 }}>
                    <span style={{ fontSize: '0.55rem', textTransform: 'uppercase', opacity: 0.4, fontWeight: 700, display: 'block', letterSpacing: '1px' }}>Rasterbillede</span>
                    <span style={{ fontSize: '1rem', color: '#FFFCDF', fontWeight: 800 }}>Høj opl. .JPG</span>
                  </div>
                  <span style={{ fontSize: '1.3rem', fontWeight: 900, color: '#FFFCDF', whiteSpace: 'nowrap' }}>4.2 MB</span>
                </div>

                {/* Reduction arrow */}
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.8rem', padding: '0 1rem' }}>
                  <div style={{ flex: 1, height: '1px', background: '#FFFCDF' }}></div>
                  <motion.div
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ type: 'spring', delay: 0.5 }}
                    style={{ background: 'var(--accent-lumen-green)', color: '#161616', padding: '0.3rem 1rem', borderRadius: '50px', fontSize: '0.6rem', fontWeight: 900, letterSpacing: '0.5px', boxShadow: '0 0 15px var(--accent-lumen-green-glow)', whiteSpace: 'nowrap' }}
                  >
                    ↓ 98% REDUKTION
                  </motion.div>
                  <div style={{ flex: 1, height: '1px', background: '#FFFCDF' }}></div>
                </div>

                {/* æcco AVIF - Light */}
                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', background: 'rgba(154,209,40,0.06)', padding: '1rem 1.2rem', borderRadius: '20px', border: '1px solid rgba(154,209,40,0.4)' }}>
                  <div style={{ width: '56px', height: '56px', background: 'rgba(154,209,40,0.08)', borderRadius: '14px', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, border: '1px solid rgba(154,209,40,0.2)' }}>
                    {/* Vector/modern format icon - clean bezier curves */}
                    <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
                      <path d="M4 24 Q10 8 16 16 T28 8" stroke="var(--accent-lumen-green)" strokeWidth="2.5" strokeLinecap="round"/>
                      <circle cx="4" cy="24" r="2.5" fill="var(--accent-lumen-green)" opacity="0.6"/>
                      <circle cx="16" cy="16" r="2.5" fill="var(--accent-lumen-green)" opacity="0.6"/>
                      <circle cx="28" cy="8" r="2.5" fill="var(--accent-lumen-green)" opacity="0.6"/>
                    </svg>
                  </div>
                  <div style={{ flex: 1 }}>
                    <span style={{ fontSize: '0.55rem', textTransform: 'uppercase', color: 'var(--accent-lumen-green)', fontWeight: 700, display: 'block', letterSpacing: '1px' }}>æcco Standard</span>
                    <span style={{ fontSize: '1rem', color: '#FFFCDF', fontWeight: 800 }}>Vektor / AVIF</span>
                  </div>
                  <motion.span
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.8 }}
                    style={{ fontSize: '1.3rem', fontWeight: 900, color: 'var(--accent-lumen-green)', whiteSpace: 'nowrap' }}
                  >
                    84 KB
                  </motion.span>
                </div>
              </div>

              <div className="card-logo-mini">
                <img src={Logo} alt="æcco logo" style={{ width: '60px', height: 'auto', opacity: 0.8 }} />
              </div>
            </div>



          </motion.div>
        </div>

      </div>
    </div>
  );
};

export default Sustainability;
