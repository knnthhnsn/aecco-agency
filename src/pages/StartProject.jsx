import { Link } from 'react-router-dom';
import FAQ from '../components/FAQ';
import pil from '../assets/pil.svg';

const StartProject = () => {
  const packages = [
    {
      name: 'Ny hjemmeside',
      price: '6.500',
      description: 'En lynhurtig letvægtsløsning, der respekterer brugernes tid og fremtidssikrer jer mod miljølovkrav.',
      features: [
        'Brainstorm & Workshop',
        'Visuel Retning',
        'Intuitiv Navigation',
        'Målrettet UX-Content',
        'Jamstack Kodning',
        'SEO optimering'
      ],
      cta: 'Køb pakke',
      featured: false
    },
    {
      name: 'Optimering',
      price: '3.500',
      description: 'Vi optimerer billeder, fjerner unødige plugins og komprimerer koden for mærkbar fremgang.',
      features: [
        'Teknisk Benchmark',
        'Strategisk UX-content',
        'Visuel Hovedrengøring',
        'Skærpelse af Tekst',
        'Kode-oprydning',
        'SEO optimering'
      ],
      cta: 'Køb pakke',
      featured: true
    },
    {
      name: 'Komplet webløsning',
      price: '14.500',
      description: 'Den ultimative løsning. Vi tager jer fra indledende strategi til en fuldt optimeret platform.',
      features: [
        'Strategisk Workshop',
        'Brand-identitet',
        'Konverterings-UX',
        'Fullstack Udvikling',
        'Optimeret Infrastruktur',
        'Løbende Vedligeholdelse',
        'Performance-rapportering',
        'SEO optimering'
      ],
      cta: 'Køb pakke',
      featured: false
    }
  ];

  return (
    <div className="container page-padding" style={{ paddingBottom: '8rem' }}>
      <div className="text-center" style={{ position: 'relative', marginTop: '4rem' }}>
        <div className="bio-aura" style={{ left: '50%', transform: 'translateX(-50%)', top: '-100px', opacity: 0.1 }}></div>
        <h1 className="page-title" style={{ justifyContent: 'center' }}>
          Vælg din <span className="highlight-box">Pakke</span>
        </h1>
        <p className="hero-subtext" style={{ margin: '1rem auto 5rem', fontSize: '1.4rem' }}>Gennemsigtige og bæredygtige løsninger skabt til din rejse.</p>

        <div className="pricing-grid">
          {packages.map((pkg, idx) => (
            <div key={idx} className={`pricing-card glass-panel ${pkg.featured ? 'featured' : ''}`}>
              {pkg.featured && <div className="featured-label">Populær</div>}
              <h2 className="package-name" style={{ marginTop: '1rem' }}>{pkg.name}</h2>
              <div className="package-price">{pkg.price} <span>DKK</span></div>
              
              <Link to="/contact" className={`cta-button ${pkg.featured ? 'primary' : 'secondary'}`}>
                {pkg.cta} <img src={pil} alt="pil" className="btn-arrow" />
              </Link>

              <p style={{ opacity: 0.7, marginBottom: '2rem', fontSize: '0.9rem' }}>{pkg.description}</p>

              <ul className="feature-list">
                {pkg.features.map((feature, fIdx) => (
                  <li key={fIdx}>{feature}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="glass-panel" style={{
          marginTop: '6rem',
          padding: '2.5rem 2rem',
          maxWidth: '800px',
          margin: '6rem auto 0',
          background: '#868686',
          borderRadius: '50px',
          border: '1px solid rgba(255, 255, 255, 0.12)'
        }}>
          <p style={{
            opacity: 1,
            fontSize: '1.2rem',
            lineHeight: '1.6',
            margin: 0,
            color: '#FFFFFF'
          }}>
            Alle priser er inkl moms. man kan altid foretage fravalg i pakkerne ved at{' '}
            <Link to="/book-intro" style={{
              backgroundColor: 'var(--accent-lumen-green)',
              color: '#000',
              padding: '2px 8px',
              fontWeight: 'bold',
              textDecoration: 'none',
              borderRadius: '2px',
              margin: '0 4px',
              whiteSpace: 'nowrap',
              display: 'inline-block'
            }}>
              Book en tid
            </Link>{' '}
            for en skræddersyet pris.
          </p>
        </div>
      </div>
      <FAQ />
    </div>
  );
};

export default StartProject;
