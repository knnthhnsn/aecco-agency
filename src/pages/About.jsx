import React from 'react';
import { Link } from 'react-router-dom';
import teemo from '../assets/teemo.avif';
import kenneth from '../assets/kenneth.avif';
import andreas from '../assets/andreas.avif';
import logo from '../assets/Logo.svg';
import pil from '../assets/pil.svg';
import { motion, AnimatePresence } from 'framer-motion';
import { Helmet } from 'react-helmet-async';



const About = () => {
  const team = [
    {
      name: 'Teemo',
      tag: 'UX INNOVATOR',
      title: 'Brugeroplevelse & Strategisk UX',
      desc: 'Teemo sikrer, at hver interaktion har et klart formål. Han designer intuitive brugerrejser, der fjerner unødig digital friktion og leder besøgende sikkert mod deres mål.',
      img: teemo
    },
    {
      name: 'Kenneth',
      tag: 'UDVIKLER',
      title: 'Bæredygtig Webarkitektur',
      desc: 'Kenneth er arkitekten bag vores lynhurtige performance. Han bygger fundamentet fra bunden for at eliminere tunge plugins og sikre markedets laveste CO2-aftryk per sidevisning.',
      img: kenneth
    },
    {
      name: 'Andreas',
      tag: 'DESIGNER',
      title: 'Visuel Identitet & Resonans',
      desc: 'Andreas forener moderne æstetik med digital bæredygtighed. Han udvikler visuelle koncepter, der skaber stærk brand-resonans gennem ressourcebesparende designprincipper.',
      img: andreas
    }
  ];



  const sliderItems = [
    {
      title: "Vi beskatter os selv",
      text: "Vi er stolte medlemmer af \"1 % for the Planet\". Det betyder, at vi hvert år donerer 1 % af vores samlede omsætning til miljøorganisatione, der arbejder for at beskytte klimaet. Det er vores faste, selvvalgte afgift til planeten."
    },
    {
      title: "Et grønnere internet",
      text: "Vi udvikler udelukkende efter principper for bæredygtigt webdesign. Vi koder letvægtsløsninger, udregner CO2-aftrykket på alt, hvad vi bygger, og hoster alle websites på energieffektive servere, der drives af 100 % vedvarende energi."
    },
    {
      title: "Plantebaseret mad",
      text: "Kødproduktion er en massiv klimabelastning. Derfor serverer vi udelukkende plantebaseret mad til vores firmaarrangementer og kundemøder."
    },
    {
      title: "Genanvendelse",
      text: "Ny elektronik koster dyrt i klimaregnskabet. Vores hardware skal ikke belaste planeten unødigt. Derfor donerer vi dem videre, til Afrika, så de får et nyt liv."
    },
    {
      title: "En hjælpende hånd",
      text: "Vi bruger vores digitale og visuelle kompetencer til at skabe genlyd for planeten. Derfor hjælper vi jævnligt miljøorganisationer med at producere animationer og visuelt indhold uden beregning."
    },
    {
      title: "Grøn transport",
      text: "Vi opmuntrer til grøn transport ved at stille gratis el-cykler til rådighed og holde faste \"cykeldage\", hvor vi sammen udforsker naturen og holder hjulene kørende for klimaet."
    }
  ];

  const [isMobile, setIsMobile] = React.useState(typeof window !== 'undefined' ? window.innerWidth <= 1024 : false);

  React.useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 1024);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const [currentIndex, setCurrentIndex] = React.useState(0);
  const itemsPerPage = isMobile ? 1 : 3;
  const maxIndex = Math.max(0, sliderItems.length - itemsPerPage);

  const nextSlide = () => {
    setCurrentIndex(prev => Math.min(prev + 1, maxIndex));
  };

  const prevSlide = () => {
    setCurrentIndex(prev => Math.max(prev - 1, 0));
  };

  const [scrollProgress, setScrollProgress] = React.useState(0);
  const containerRef = React.useRef(null);

  React.useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      
      // Beregn hvor langt vi er i sektionen (0 til 1)
      const progress = Math.min(Math.max(-rect.top / (rect.height - windowHeight), 0), 1);
      setScrollProgress(progress * 100);

      // Skjul navbar mens scroll-sektionen er aktiv
      if (progress > 0 && progress < 1) {
        document.body.classList.add('hide-nav');
      } else {
        document.body.classList.remove('hide-nav');
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', handleScroll);
      document.body.classList.remove('hide-nav');
    };
  }, []);

  return (
    <main className="about-page" style={{ paddingBottom: '12rem' }}>
      <Helmet>
        <title>Om os | Mød Teamet bag æcco</title>
        <meta name="description" content="Mød Teemo, Kenneth og Andreas. Vi er et bureau dedikeret til at bevise, at digital vækst kan gå hånd i hånd med bæredygtighed." />
        <meta property="og:title" content="Om æcco - Digital Resonans og Bæredygtighed" />
        <link rel="canonical" href="https://aecco-agency.web.app/about" />
      </Helmet>
      <div className="container">
        <section className="about-manifesto" style={{ paddingTop: '4rem', paddingBottom: '6rem' }}>
          <p className="manifesto-quote">
            "I en verden oversvømmet af digital støj, <br />bygger vi de platforme, der fortjener at blive hørt."
          </p>
          <div style={{ maxWidth: '750px', margin: '3rem auto 0' }}>
            <p style={{ color: '#FFFCDF', lineHeight: 1.8, fontSize: '1.15rem' }}>
              æcco er født ud fra en vision om, at digital vækst ikke behøver koste planeten. 
              Vi fjerner vægten fra de eksisterende løsninger, optimerer den digitale puls og skaber løsninger, der giver genlyd hos dem, der betyder mest.
            </p>
          </div>
        </section>

        {/* Sustainability Slider */}
        <section className="sust-slider-container">
            <div className="slider-nav-btns">
              <button 
                className={`slider-nav-btn prev ${currentIndex === 0 ? 'disabled' : ''}`} 
                onClick={prevSlide}
                disabled={currentIndex === 0}
              >
                <img src={pil} alt="prev" style={{ transform: 'rotate(180deg)', width: '20px' }} />
              </button>
              <button 
                className={`slider-nav-btn next ${currentIndex >= maxIndex ? 'disabled' : ''}`} 
                onClick={nextSlide}
                disabled={currentIndex >= maxIndex}
              >
                <img src={pil} alt="next" style={{ width: '20px' }} />
              </button>
            </div>

          <div className="sust-slider-track-wrapper">
            <motion.div 
              className="sust-slider-track"
              animate={{ x: `-${currentIndex * (100 / itemsPerPage)}%` }}
              transition={{ type: "spring", damping: 25, stiffness: 120 }}
            >
              {sliderItems.map((item, index) => (
                <div key={index} className="sust-slider-card">
                  <div className="sust-slider-header">
                    <h3>{item.title}</h3>
                    <div className="sust-divider">
                      <div className="divider-line"></div>
                      <div className="divider-logo">
                        <img src={logo} alt="æcco" />
                      </div>
                      <div className="divider-line"></div>
                    </div>
                  </div>
                  <div className="sust-slider-content">
                    <p className="sust-text">{item.text}</p>
                  </div>
                </div>
              ))}
            </motion.div>
          </div>
        </section>
      </div>

      {/* Den sande Horisontale Scroll-Sektion - Udenfor container for fuld bredde */}
      <div ref={containerRef} className="about-horizontal-scroll-section">
        <div className="sticky-scroll-wrapper">
          <div 
            className="horizontal-track" 
            style={{ 
              transform: `translateX(-${scrollProgress * (isMobile ? 2.8 : 0.78)}vw)`, /* Hurtigere horisontal scroll på mobil da vw er mindre */
              display: 'flex',
              flexDirection: 'row', /* Tvunget horisontalt tilbage */
              gap: isMobile ? '5vw' : '3vw',
              paddingLeft: isMobile ? '5vw' : '35vw',
              paddingRight: isMobile ? '5vw' : '35vw',
              height: 'max-content',
              alignItems: 'stretch'
            }}
          >
            {/* Titlen – starter i midten, scrolles ud til venstre */}
            <div className="track-intro" style={{ flexShrink: 0, width: isMobile ? '90vw' : '40vw', paddingRight: isMobile ? 0 : '10vw', alignSelf: 'center' }}>
               <h1 className="page-title" style={{ fontSize: isMobile ? '2.5rem' : '4.5rem', lineHeight: 1.1, justifyContent: 'flex-start' }}>
                 Mød holdet <span style={{ whiteSpace: 'nowrap' }}>bag <span className="highlight-box">æcco</span></span>
               </h1>
            </div>

            {/* Spacer – ekstra luft så kortene først dukker op EFTER titlen er væk */}
            <div style={{ flexShrink: 0, width: isMobile ? '10vw' : '15vw' }}></div>

            {team.map((member, i) => {
              const start = 20 + (i * 12); /* Kortene starter senere i scroll-progressionen */
              const end = start + 30;
              let cardProgress = Math.min(Math.max((scrollProgress - start) / (end - start), 0), 1);
              
              const staggerX = (1 - cardProgress) * (isMobile ? 80 : 150);
              const rotate = isMobile ? 0 : (1 - cardProgress) * 8;
              const scale = isMobile ? 0.95 + (cardProgress * 0.05) : 0.85 + (cardProgress * 0.15);

              return (
                <div 
                  key={i} 
                  className="team-track-card team-card" 
                  style={{ 
                    flexShrink: 0, 
                    width: isMobile ? '85vw' : '300px',
                    maxWidth: isMobile ? '350px' : 'none',
                    transform: `translateX(${staggerX}px) rotate(${rotate}deg) scale(${scale})`,
                    opacity: Math.min(cardProgress * 3, 1),
                    transition: 'transform 0.1s ease-out'
                  }}
                >
                  <div className="team-img-container">
                    <img src={member.img} alt={member.name} loading="lazy" />
                  </div>
                  <div className="team-info">
                    <h4 style={{ color: '#FFFCDF', fontSize: '0.85rem', marginBottom: '0.6rem', textTransform: 'uppercase', letterSpacing: '3px', fontWeight: '700' }}>
                      {member.name}
                    </h4>
                    <h3 className="team-title">{member.title}</h3>
                    <p className="team-desc">{member.desc}</p>
                    <div className="team-tag-wrapper">
                       <span className="team-tag">{member.tag}</span>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

        <section className="about-cta">
          <div className="cta-container">
            <div className="cta-left">
              <h2 className="cta-heading">Skal vi skabe resonans for dit brand?</h2>
              <p className="cta-subtext">Start jeres rejse mod et mere bæredygtigt website i dag.</p>
              <Link to="/contact" className="cta-button primary">
                Kontakt os <img src={pil} alt="pil" className="btn-arrow" />
              </Link>
            </div>
            <div className="cta-right">
              <div className="cta-chat-icon">
                <svg viewBox="0 0 120 120" role="img" aria-label="Chat Icon">
                  <path d="M10 20C10 14.4772 14.4772 10 20 10H100C105.523 10 110 14.4772 110 20V80C110 85.5228 105.523 90 100 90H80L55 110L55 90H20C14.4772 90 10 85.5228 10 80V20Z" fill="currentColor"/>
                  <path d="M30 35H90" stroke="#000" strokeWidth="6" strokeLinecap="round"/>
                  <path d="M30 55H70" stroke="#000" strokeWidth="6" strokeLinecap="round"/>
                </svg>
              </div>
            </div>
          </div>
        </section>
    </main>
  );
};

export default About;
