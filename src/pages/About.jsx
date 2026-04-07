import React from 'react';
import { Link } from 'react-router-dom';
import teemo from '../assets/teemo.avif';
import kenneth from '../assets/kenneth.avif';
import andreas from '../assets/andreas.avif';
import logo from '../assets/Logo.svg';
import pil from '../assets/pil.svg';
import { motion, AnimatePresence } from 'framer-motion';

const AboutIcon = ({ type }) => {
  if (type === 'fast') {
    return (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
        <path d="M2 12c1-4 2-4 3 0s2 4 3 0 2-4 3 0 2 4 3 0 2-4 3 0 2 4 3 0" />
      </svg>
    );
  }
  if (type === 'transparent') {
    return (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
        <circle cx="12" cy="12" r="9" opacity="0.3" />
        <circle cx="12" cy="12" r="3" />
      </svg>
    );
  }
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
      <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
      <circle cx="9" cy="7" r="4" />
      <path d="M23 21v-2a4 4 0 0 0-3-3.87" opacity="0.4" />
      <path d="M16 3.13a4 4 0 0 1 0 7.75" opacity="0.4" />
    </svg>
  );
};

const About = () => {
  const team = [
    {
      name: 'Teemo',
      tag: 'UX INNOVATOR',
      title: 'Besat af den perfekte rejse',
      desc: 'Teemo stopper aldrig før hver pixel tjener et formål. Han hader unødvendig kode mere end han hader lunkent kaffe, og han sikrer at jeres brugere aldrig farer vild i det digitale vildnis.',
      img: teemo
    },
    {
      name: 'Kenneth',
      tag: 'UDVIKLER',
      title: 'Kode der sparer strøm',
      desc: 'Kenneth bygger den tekniske arkitektur. Fokus er på lynhurtig performance og en infrastruktur, der minimerer energiforbruget per besøg.',
      img: kenneth
    },
    {
      name: 'Andreas',
      tag: 'DESIGNER',
      title: 'Visuel Resonans',
      desc: 'Andreas designer de visuelle koncepter, der får jeres brand til at give genlyd, uden at gå på kompromis med bæredygtighedsprincipperne.',
      img: andreas
    }
  ];

  const values = [
    { title: 'Lynhurtig', icon: <AboutIcon type="fast" />, desc: 'Vi fjerner tunge scripts og overflødig kode for at sikre, at jeres site loader på et splitsekund.' },
    { title: 'Transparent', icon: <AboutIcon type="transparent" />, desc: 'Ingen skjulte data-omkostninger eller "greenwashing". Vi leverer målbare resultater.' },
    { title: 'Menneskelig', icon: <AboutIcon type="human" />, desc: 'UX der er intuitivt og inkluderende for alle, skabt med respekt for brugerens tid og båndbredde.' }
  ];

  const sliderItems = [
    {
      title: "Vi beskatter os selv",
      subtitle: "(1 % for the Planet)",
      text: "Vi er stolte medlemmer af \"1 % for the Planet\". Det betyder, at vi hvert år donerer 1 % af vores samlede omsætning til miljøorganisatione, der arbejder for at beskytte klimaet. Det er vores faste, selvvalgte afgift til planeten."
    },
    {
      title: "Et grønnere internet",
      subtitle: "(Greening the web)",
      text: "Vi udvikler udelukkende efter principper for bæredygtigt webdesign. Vi koder letvægtsløsninger, udregner CO2-aftrykket på alt, hvad vi bygger, og hoster alle websites på energieffektive servere, der drives af 100 % vedvarende energi."
    },
    {
      title: "Plantebaseret mad",
      subtitle: "(Plant based and healthy)",
      text: "Kødproduktion er en massiv klimabelastning. Derfor serverer vi udelukkende plantebaseret mad til vores firmaarrangementer og kundemøder."
    },
    {
      title: "Genanvendelse",
      subtitle: "(Second hand appliances)",
      text: "Ny elektronik koster dyrt i klimaregnskabet. Vores hardware skal ikke belaste planeten unødigt. Derfor donerer vi dem videre, til Afrika, så de får et nyt liv."
    },
    {
      title: "En hjælpende hånd",
      subtitle: "(Gratis hjælp til NGO'er)",
      text: "Vi bruger vores digitale og visuelle kompetencer til at skabe genlyd for planeten. Derfor hjælper vi jævnligt miljøorganisationer med at producere animationer og visuelt indhold uden beregning."
    },
    {
      title: "Grøn transport",
      subtitle: "(Free city cycles & cykeldage)",
      text: "Vi opmuntrer til grøn transport ved at stille gratis el-cykler til rådighed og holde faste \"cykeldage\", hvor vi sammen udforsker naturen og holder hjulene kørende for klimaet."
    }
  ];

  const isMobile = typeof window !== 'undefined' && window.innerWidth <= 1024;
  const [currentIndex, setCurrentIndex] = React.useState(0);
  const itemsPerPage = isMobile ? 1 : 3;
  const maxIndex = sliderItems.length - itemsPerPage;

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
      <div className="container">
        <section className="about-manifesto" style={{ paddingTop: '4rem', paddingBottom: '6rem' }}>
          <p className="manifesto-quote">
            "I en verden oversvømmet af digital støj, <br />bygger vi de platforme, der fortjener at blive hørt."
          </p>
          <div style={{ maxWidth: '750px', margin: '3rem auto 0' }}>
            <p style={{ color: 'rgba(255,255,255,0.6)', lineHeight: 1.8, fontSize: '1.15rem' }}>
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
                    <p className="sust-subtitle">{item.subtitle}</p>
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
                    <h4 style={{ color: 'rgba(255,255,255,0.5)', fontSize: '0.85rem', marginBottom: '0.6rem', textTransform: 'uppercase', letterSpacing: '3px', fontWeight: '700' }}>
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

      <div className="container">
        <section className="about-values-section" style={{ marginTop: '4rem' }}>
          <div className="values-grid">
            {values.map((v, i) => (
              <div key={i} className="value-item">
                <div className="value-icon">{v.icon}</div>
                <h3>{v.title}</h3>
                <p>{v.desc}</p>
              </div>
            ))}
          </div>
        </section>


        <section className="about-cta" style={{ marginTop: '10rem' }}>
          <h2>Skal vi skabe resonans for dit brand?</h2>
          <p style={{ marginBottom: '2rem', opacity: 0.8 }}>Start jeres rejse mod et mere bæredygtigt website i dag.</p>
          <Link to="/contact" className="cta-button-large">
            Lad os tale sammen
          </Link>
        </section>
      </div>
    </main>
  );
};

export default About;
