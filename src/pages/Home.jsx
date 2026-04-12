import React, { useEffect, useState } from 'react';
import Hero from '../components/Hero';
import ServiceCard from '../components/ServiceCard';
import { SustainableIcon, PerformanceIcon, IdentityIcon } from '../components/Icons';
import pil from '../assets/pil.svg';
import logo from '../assets/Logo.svg';
import teemo from '../assets/teemo.avif';
import hurtigeIcon from '../assets/tid.svg';
import visuelIcon from '../assets/visuel-komprimering.svg';
import friktionIcon from '../assets/friktionsloes-navigation.svg';
import oekonomiIcon from '../assets/oekonomi-og-groen-drift.svg';
import aeccoVideo from '../assets/aecco.mp4';
import { Link } from 'react-router-dom';
import udkast from '../assets/udkast.avif';
import { Helmet } from 'react-helmet-async';

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
      <Helmet>
        <title>æcco | Bæredygtigt Webdesign & Digital Resonans</title>
        <meta name="description" content="æcco er et bæredygtigt webbureau, der forener æstetik med CO2-optimeret performance. Vi hjælper startups med at skabe digitale løsninger med minimalt miljøaftryk." />
        <meta property="og:title" content="æcco | Bæredygtigt Webdesign for Startups" />
        <meta property="og:description" content="Skab mærkbar forskel med CO2-optimeret webdesign og lynhurtig performance." />
        <meta property="og:type" content="website" />
        <link rel="canonical" href="https://aecco-agency.web.app/" />
      </Helmet>
      <Hero />

      {/* Projects Section */}
      <section className="projects-section" id="projects">
        <div className="container">
          <div className="projects-layout">
            <div className="project-video-container">
              <video 
                src={aeccoVideo} 
                controls
                playsInline 
                className="project-video"
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  borderRadius: '24px',
                  display: 'block',
                  cursor: 'pointer'
                }}
              />
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
              <span className="process-label" style={{ color: 'var(--accent-lumen-green)', fontWeight: 'bold', fontSize: '0.8rem', letterSpacing: '1px', textTransform: 'uppercase' }}>VORES MISSION</span>
              <h2 className="text-gradient">Sådan hjælper æcco til at nedtænke Co2-udledning</h2>

              <div className="process-steps-indicator" style={{ marginTop: '1.5rem', display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
                <div className={`step-dot ${activeStep === 1 ? 'active' : ''}`}><span className="dot-label">Hurtige hjemmesider</span></div>
                <div className={`step-dot ${activeStep === 2 ? 'active' : ''}`}><span className="dot-label">Visuel komprimering</span></div>
                <div className={`step-dot ${activeStep === 3 ? 'active' : ''}`}><span className="dot-label">Friktionsløs navigation</span></div>
                <div className={`step-dot ${activeStep === 4 ? 'active' : ''}`}><span className="dot-label">Økonomi og grøn drift</span></div>
              </div>

              <Link to="/sustainability" className="buy-template-btn" style={{ display: 'inline-flex', alignItems: 'center', gap: '1.5rem', textDecoration: 'none', marginTop: '1.8rem' }}>
                Digital forurening
                <img src={pil} alt="pil" className="btn-arrow" />
              </Link>
            </div>
            <div className="process-steps">
              <div className="process-card" data-step="1">
                <img src={hurtigeIcon} alt="Hurtige hjemmesider" style={{ position: 'absolute', top: '1.2rem', right: '1.2rem', width: '50px' }} />
                <div className="step-number">1</div>
                <h3>Hurtige hjemmesider</h3>
                <p>Vi skrotter tunge plugins og koder jeres fundament fra bunden. Ren, statisk arkitektur betyder færre server-anmodninger.</p>
              </div>
              <div className="process-card" data-step="2">
                <img src={visuelIcon} alt="Visuel komprimering" style={{ position: 'absolute', top: '1.5rem', right: '1.5rem', width: '36px' }} />
                <div className="step-number">2</div>
                <h3>Visuel komprimering</h3>
                <p>Kreativt design behøver ikke at være tungt. Vi tænker i smarte, alternative løsninger og koder med moderne letvægtsformater, til besparelser af megabytes.</p>
              </div>
              <div className="process-card" data-step="3">
                <img src={friktionIcon} alt="Friktionsløs navigation" style={{ position: 'absolute', top: '1.5rem', right: '1.5rem', width: '36px' }} />
                <div className="step-number">3</div>
                <h3>Friktionsløs navigation</h3>
                <p>Jo hurtigere brugeren finder sit mål, jo bedre konvertering. Vi designer en ren brugerrejse, der eliminerer forvirring og unødige klik.</p>
              </div>
              <div className="process-card" data-step="4">
                <img src={oekonomiIcon} alt="Økonomi og grøn drift" style={{ position: 'absolute', top: '1.5rem', right: '1.5rem', width: '36px' }} />
                <div className="step-number">4</div>
                <h3>Økonomi og grøn drift</h3>
                <p>Når sitet er live, hoster vi det på top-optimerede, energieffektive servere. Færre data, mindre serveromkostninger.</p>
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
              <img src={udkast} alt="Designudkast eksempler" className="udkast-img" />
            </div>
            <div className="content-text-side">
              <span className="block-label">CONTENT BLOCK</span>
              <h2 className="block-title">Del din <span className="highlight-box">vision</span> og set os på <span className="highlight-box">mission</span></h2>
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
          <Link to="/about" className="teemo-quote-card" style={{ textDecoration: 'none', color: 'inherit' }}>
            <div className="quote-left">
              <h2 className="quote-main-text">"Jeg designer digitale løsninger, hvor brugervenlighed og forretningsmål smelter sammen. En enkel og logisk struktur er fundamentet for at skabe resultater, der kan mærkes."</h2>
              <div className="quote-author">
                <div className="author-info">
                  <h4 className="author-name">Teemo Skov Hansen</h4>
                  <p className="author-role">Innovator @ æcco</p>
                  <div className="teemo-cta-wrapper">
                    <div className="cta-button">
                      <span>mere om os</span>
                      <img src={pil} alt="pil" className="btn-arrow" />
                    </div>
                  </div>
                </div>
                <img src={logo} alt="æcco" className="quote-logo" />
              </div>
            </div>
            <div className="quote-right">
              <img src={teemo} alt="Teemo Skov Hansen" className="teemo-profile-img" style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'top' }} />
            </div>
          </Link>
        </div>
      </section>

    </main>
  );
};

export default Home;
