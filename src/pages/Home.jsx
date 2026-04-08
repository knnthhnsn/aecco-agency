import React, { useEffect, useState } from 'react';
import Hero from '../components/Hero';
import ServiceCard from '../components/ServiceCard';
import { SustainableIcon, PerformanceIcon, IdentityIcon } from '../components/Icons';
import pil from '../assets/pil.svg';
import logo from '../assets/Logo.svg';
import teemo from '../assets/teemo.avif';
import { Link } from 'react-router-dom';

const Home = () => {
  const [activeStep, setActiveStep] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const cards = document.querySelectorAll('.process-card');
      let currentStep = 1;

      cards.forEach((card) => {
        const rect = card.getBoundingClientRect();
        // Justeret til 0.5 for en mere perfekt reaktion hvornår kortet er i fokus (især baglæns scroll)
        if (rect.top <= window.innerHeight * 0.5) {
          currentStep = parseInt(card.getAttribute('data-step'));
        }
      });

      setActiveStep(currentStep);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); // Sæt initial state ved load

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <main className="organic-landing">
      <Hero />

      {/* Projects Section */}
      <section className="projects-section" id="projects">
        <div className="container">
          <div className="projects-layout">
            <div className="project-video-placeholder">
              <div className="play-button-icon">
                <svg width="30" height="30" viewBox="0 0 24 24" fill="#161616">
                  <path d="M8 5v14l11-7z"></path>
                </svg>
              </div>
            </div>

            <div className="projects-info">
              <h2 className="projects-heading">Se vores tidligere projekter</h2>
              <p className="projects-description">
                Vores ydelser giver jer de nødvendige værktøjer til at blomstre og gøre en mærkbar forskel i det digitale landskab.
              </p>

              <div className="benefits-grid">
                <div className="benefit-item">
                  <div className="benefit-icon">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#161616" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                  </div>
                  <div className="benefit-text">
                    <h4>Bæredygtig Performance</h4>
                    <p>En uovertruffen brugeroplevelse med en perfekt balance mellem moderne æstetik og grøn funktionalitet.</p>
                  </div>
                </div>
                <div className="benefit-item">
                  <div className="benefit-icon">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#161616" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                  </div>
                  <div className="benefit-text">
                    <h4>Skalerbart Design</h4>
                    <p>Fremtidssikret arkitektur, der giver jeres virksomhed plads til at vokse uden at gå på kompromis med hastighed.</p>
                  </div>
                </div>
              </div>

              <div className="projects-action">
                <Link to="/contact" className="cta-button primary" style={{ display: 'inline-flex', alignItems: 'center', gap: '1.5rem', textDecoration: 'none' }}>
                  Kontakt <img src={pil} alt="pil" className="btn-arrow" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="process-section" id="process">
        <div className="container">
          <div className="process-layout">
            <div className="process-info sticky">
              <span className="process-label" style={{ color: 'var(--accent-lumen-green)', fontWeight: 'bold', fontSize: '0.8rem', letterSpacing: '1px', textTransform: 'uppercase' }}>PROCES</span>
              <h2 className="text-gradient">Sådan foregår samarbejdet med os...</h2>
              <p>Vi guider jer trygt gennem hele forløbet, fra den første idé til det færdige, grønne aftryk på nettet.</p>

              <div className="process-steps-indicator" style={{ marginTop: '1.5rem', display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
                <div className={`step-dot ${activeStep === 1 ? 'active' : ''}`}><span className="dot-label">Indledende samtale</span></div>
                <div className={`step-dot ${activeStep === 2 ? 'active' : ''}`}><span className="dot-label">Strategi</span></div>
                <div className={`step-dot ${activeStep === 3 ? 'active' : ''}`}><span className="dot-label">Udvikling</span></div>
                <div className={`step-dot ${activeStep === 4 ? 'active' : ''}`}><span className="dot-label">Lancering</span></div>
              </div>

              <Link to="/start-project" className="buy-template-btn" style={{ display: 'inline-flex', alignItems: 'center', gap: '1.5rem', textDecoration: 'none', marginTop: '1.8rem' }}>
                Se Pakkeløsninger
                <img src={pil} alt="pil" className="btn-arrow" />
              </Link>
            </div>
            <div className="process-steps">
              <div className="process-card" data-step="1">
                <img src={logo} alt="æcco" className="card-watermark" />
                <div className="step-number">1</div>
                <h3>Book et intromøde</h3>
                <p>Start processen ved at booke et gratis intromøde. Her taler vi om jeres visioner og hvordan vi kan hjælpe.</p>
              </div>
              <div className="process-card" data-step="2">
                <img src={logo} alt="æcco" className="card-watermark" />
                <div className="step-number">2</div>
                <h3>Strategi og Design-DNA</h3>
                <p>På baggrund af samtalen kortlægger vi kravene og skitserer en bæredygtig vækststrategi for jeres brand.</p>
              </div>
              <div className="process-card" data-step="3">
                <img src={logo} alt="æcco" className="card-watermark" />
                <div className="step-number">3</div>
                <h3>Onboarding og Udvikling</h3>
                <p>Når strategien er på plads, starter udviklingen. Vi sørger for en gnidningsfri kommunikation under hele forløbet.</p>
              </div>
              <div className="process-card" data-step="4">
                <img src={logo} alt="æcco" className="card-watermark" />
                <div className="step-number">4</div>
                <h3>Implementering og Lancering</h3>
                <p>Til sidst implementerer vi løsningen og sørger for, at I er klar til at skabe mærkbare resultater på markedet.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* New Content Block Section */}
      <section className="content-block-section">
        <div className="container">
          <div className="content-block-grid">
            <div className="content-visual">
              <div className="img-placeholder square-ratio">
                <span className="placeholder-text">CREATE THROUGH CHAOS</span>
              </div>
            </div>
            <div className="content-text-side">
              <span className="block-label">CONTENT BLOCK</span>
              <h2 className="block-title">Del din vision og set os på mission</h2>
              <p className="block-desc">
                Få hurtigt tilsendt et visuelt designudkast. Vores AI-designgenerator skærer genvej fra idé til visuelt udkast.
                Ved at sende jeres kernebehov og håndtegnede skitser, skaber systemet et skræddersyet, minimalistisk fundament.
                Det giver jer et øjeblikkeligt overblik over, hvordan jeres fremtidige platform kan se ud, inden vi går i maskinrummet og koder hjemmesiden - Få det helt gratis.
              </p>
              <Link to="/book-intro" className="design-udkast-btn" style={{ textDecoration: 'none' }}>
                Designudkast
                <img src={pil} alt="pil" className="btn-arrow" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* New Teemo Quote Section */}
      <section className="teemo-quote-section">
        <div className="container">
          <div className="teemo-quote-card">
            <div className="quote-left">
              <h2 className="quote-main-text">"Mit designfokus ligger altid i spændingsfeltet mellem en gnidningsfri brugerrejse (UX) og strategisk placerede konverteringselementer. En logisk arkitektur er for mig fundamentet for ethvert salg."</h2>
              <div className="quote-author">
                <div className="author-info">
                  <h4 className="author-name">Teemo Skov Hansen</h4>
                  <p className="author-role">Innovator @ æcco</p>
                </div>
                <img src={logo} alt="æcco" className="quote-logo" />
              </div>
            </div>
            <div className="quote-right">
              <img src={teemo} alt="Teemo Skov Hansen" className="teemo-profile-img" style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'top' }} />
            </div>
          </div>
        </div>
      </section>

    </main>
  );
};

export default Home;
