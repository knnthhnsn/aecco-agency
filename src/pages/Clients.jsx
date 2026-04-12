import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import logo from '../assets/Logo.svg';
import pil from '../assets/pil.svg';
import { Link } from 'react-router-dom';
import volume_village_img from '../assets/volume-village.avif';
import bitcoin_basics_img from '../assets/bitcoin-basics.avif';
import steno_museum_logo from '../assets/Steno-Museum-logo.avif';
import min_bornehave_logo from '../assets/min-børnehave-logo.avif';

const portfolios = [
  {
    id: 1,
    title: 'Volume village',
    subtitle: "Aarhus' urbane koncertsted. De danner rammen om rå, nærværende musikoplevelser og events med stærkt fokus på fællesskab.",
    footer: 'Optimering pakke',
    link: 'https://volume-village.vercel.app',
    imgType: 'party',
    imgText: 'V',
    customImg: volume_village_img
  },
  {
    id: 2,
    title: 'Steeno museum',
    subtitle: 'En del af Aarhus Universitet. De gør kompleks naturvidenskab, astronomi og medicinhistorie levende, interaktivt.',
    footer: 'Komplet webløsning',
    link: 'https://interstellar-smoky-psi.vercel.app',
    imgType: 'rings',
    imgText: 'S',
    customImg: steno_museum_logo
  },
  {
    id: 3,
    title: 'Bitcoin Basics',
    subtitle: 'Den førende platform for personlig Bitcoin-uddannelse og sikker opbevaring.',
    footer: 'Ny Hjemmeside',
    imgType: 'rings',
    imgText: 'B',
    customImg: bitcoin_basics_img
  },
  {
    id: 4,
    title: 'Min Børnehave',
    subtitle: 'De leverer digital efterforskning og overvågning ved at opspore, indsamle og analysere komplekse data fra åbne kilder.',
    footer: 'Optimering pakke',
    link: 'https://minbørnehave.dk',
    imgType: 'rings',
    imgText: 'M',
    customImg: min_bornehave_logo
  }
];

const testimonials = [
  {
    id: 1,
    title: 'VOLUME VILLAGE',
    quote: 'æcco formåede at oversætte vores rå, industrielle identitet til et knivskarpt digitalt univers, der loader lynhurtigt og respekterer vores gæsters data.',
    author: 'Mark Vandenberg',
    role: 'Projektleder, Volume Village',
    avatar: volume_village_img
  },
  {
    id: 2,
    title: 'STENO MUSEUM',
    quote: '"Vores nye platform har ikke bare fået et visuelt løft; den tekniske optimering har reduceret vores digitale CO2-aftryk markant uden at gå på kompromis med oplevelsen."',
    author: 'Bent Schmidt',
    role: 'Digital Ansvarlig, Steno Museum',
    avatar: steno_museum_logo
  },
  {
    id: 3,
    title: 'BITCOIN BASICS',
    quote: '"Endelig en hjemmeside der matcher kompleksiteten i Bitcoin med et simpelt, bæredygtigt design. Resonansen hos vores brugere har været overvældende."',
    author: 'Andreas Gade',
    role: 'Founder, Bitcoin Basics',
    avatar: bitcoin_basics_img
  },
  {
    id: 4,
    title: 'MIN BØRNEHAVE',
    quote: '"Som en platform for institutioner er tillid alt. æcco har skabt en sikker og bæredygtig infrastruktur, der gør det nemt for os at vækste ansvarligt."',
    author: 'Sarah Jensen',
    role: 'CEO, Min Børnehave',
    avatar: min_bornehave_logo
  }
];

const Clients = () => {
  return (
    <div className="clients-page page-padding">
      <Helmet>
        <title>Vores Kunder | Case Stories & Digitale Løsninger | æcco</title>
        <meta name="description" content="Se hvordan vi har hjulpet Volume Village, Steno Museet og andre med at optimere deres digitale tilstedeværelse med fokus på performance og bæredygtighed." />
        <meta property="og:title" content="æcco Cases - Mærkbare resultater for visionære brands" />
        <link rel="canonical" href="https://aecco-agency.web.app/clients" />
      </Helmet>
      <div className="container">

        <header className="clients-header">
          <h1 className="page-title" style={{ justifyContent: 'flex-start' }}>
            Vores tidligere <span className="highlight-box">kunder</span>
          </h1>
        </header>

        <section className="portfolio-section" style={{ marginTop: '8rem' }}>
          <div className="portfolio-grid" style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(2, 1fr)',
            gap: '1rem'
          }}>
            {portfolios.map((client, index) => {
              const isVisualRight = index < 2;
              return (
                <motion.div
                  key={client.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="client-card-v2"
                  style={{ flexDirection: isVisualRight ? 'row-reverse' : 'row' }}
                >
                  {/* Visual Side */}
                  {client.link ? (
                    <a
                      href={client.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="card-visual-side"
                      style={{
                        textDecoration: 'none',
                        cursor: 'pointer',
                        marginRight: isVisualRight ? 0 : '-50px',
                        marginLeft: isVisualRight ? '-50px' : 0
                      }}
                    >
                      <div className="abstract-waves">
                        <svg viewBox="0 0 400 400" preserveAspectRatio="none" style={{ width: '100%', height: '100%' }}>
                          {[...Array(20)].map((_, i) => (
                            <motion.path
                              key={i}
                              d={`M${50 + i * 5} 0 Q${150 + i * 10} 200 ${50 + i * 5} 400`}
                              fill="none"
                              stroke="var(--accent-lumen-green)"
                              strokeWidth="0.5"
                              strokeOpacity={0.1 + (i * 0.02)}
                              initial={{ pathLength: 0 }}
                              animate={{ pathLength: 1 }}
                              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", repeatType: "mirror", delay: i * 0.1 }}
                            />
                          ))}
                        </svg>
                      </div>

                      <div 
                        className="logo-echo-wrapper" 
                        style={{ '--logo-src': `url(${client.customImg || logo})` }}
                      >
                        {client.customImg ? (
                          <img src={client.customImg} alt={client.title} className="card-custom-visual" />
                        ) : (
                          <img src={logo} alt="æcco" className="card-logo-plain" />
                        )}
                      </div>
                    </a>
                  ) : (
                    <div className="card-visual-side" style={{
                      marginRight: isVisualRight ? 0 : '-50px',
                      marginLeft: isVisualRight ? '-50px' : 0
                    }}>
                      <div className="abstract-waves">
                        <svg viewBox="0 0 400 400" preserveAspectRatio="none" style={{ width: '100%', height: '100%' }}>
                          {[...Array(20)].map((_, i) => (
                            <motion.path
                              key={i}
                              d={`M${50 + i * 5} 0 Q${150 + i * 10} 200 ${50 + i * 5} 400`}
                              fill="none"
                              stroke="var(--accent-lumen-green)"
                              strokeWidth="0.5"
                              strokeOpacity={0.1 + (i * 0.02)}
                              initial={{ pathLength: 0 }}
                              animate={{ pathLength: 1 }}
                              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", repeatType: "mirror", delay: i * 0.1 }}
                            />
                          ))}
                        </svg>
                      </div>

                      <div 
                        className="logo-echo-wrapper" 
                        style={{ '--logo-src': `url(${client.customImg || logo})` }}
                      >
                        {client.customImg ? (
                          <img src={client.customImg} alt={client.title} className="card-custom-visual" />
                        ) : (
                          <img src={logo} alt="æcco" className="card-logo-plain" />
                        )}
                      </div>
                    </div>
                  )}

                  {/* Grey Dashboard Content */}
                  <div className="card-content-side" style={{
                    paddingLeft: isVisualRight ? '3rem' : '5rem',
                    paddingRight: isVisualRight ? '5rem' : '3rem',
                    textAlign: 'left',
                    alignItems: 'flex-start'
                  }}>
                    <div className="card-header-v2">
                      <h2 className="client-title-v2">{client.title}</h2>
                      <p className="client-subtitle-v2" style={{ textTransform: 'none' }}>{client.subtitle}</p>
                    </div>
                    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', marginTop: 'auto' }}>
                      <p className="package-label-v2">{client.footer}</p>
                      <Link to="/start-project" className="buy-package-btn">
                        Køb pakke <img src={pil} alt="pil" className="btn-arrow" />
                      </Link>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </section>

        {/* Testimonials Section with Marquee Cards */}
        <section className="testimonials-marquee-section">
          <div className="container">
            <h2 className="testimonials-static-title">TILFREDSE KUNDER</h2>
          </div>

          <div className="marquee-scroller-cards">
            <div className="marquee-cards-track">
              {/* First set of cards */}
              {testimonials.map((t) => (
                <div key={`t1-${t.id}`} className="testimonial-card-v3">
                  <h3 className="testimonial-v3-title">{t.title}</h3>
                  <p className="testimonial-v3-quote">{t.quote}</p>
                  <div className="testimonial-v3-author">
                    <div className={`v3-avatar-box ${t.title.includes('BØRNEHAVE') ? 'v3-scale-up' : ''}`}>
                      <img src={t.avatar} alt={t.author} />
                    </div>
                    <div className="v3-author-info">
                      <span className="v3-name">{t.author}</span>
                      <span className="v3-role">{t.role}</span>
                    </div>
                  </div>
                </div>
              ))}
              {/* Duplicate set for seamless looping */}
              {testimonials.map((t) => (
                <div key={`t2-${t.id}`} className="testimonial-card-v3">
                  <h3 className="testimonial-v3-title">{t.title}</h3>
                  <p className="testimonial-v3-quote">{t.quote}</p>
                  <div className="testimonial-v3-author">
                    <div className={`v3-avatar-box ${t.title.includes('BØRNEHAVE') ? 'v3-scale-up' : ''}`}>
                      <img src={t.avatar} alt={t.author} />
                    </div>
                    <div className="v3-author-info">
                      <span className="v3-name">{t.author}</span>
                      <span className="v3-role">{t.role}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

      </div>
    </div>
  );
};

export default Clients;
