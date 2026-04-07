import { Link } from 'react-router-dom';
import logo from '../assets/Logo.svg';
import pil from '../assets/pil.svg';
import ProjectAnimation from './ProjectAnimation';

const Hero = () => {
  return (
    <section className="hero">
      <ProjectAnimation />
      <div className="hero-heading-container">
        <h1 className="hero-headline">
          Et digitalt aftryk,<br />
          der skaber{' '}
          <span className="logo-box">
            æcco

          </span>
        </h1>
      </div>
      <div className="hero-description-container">
        <p className="hero-body">
          Vi bygger hurtige og knivskarpe hjemmesider, til et prisvenligt niveau. Ved at fjerne tung kode og overflødigt design sikres, at din virksomhed ikke bare bliver set, men husket i fremtiden.
        </p>
        <div className="hero-actions">
          <Link to="/start-project" className="buy-template-btn" style={{ textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: '1.5rem' }}>
            Se Pakkeløsninger <img src={pil} alt="pil" className="btn-arrow" />
          </Link>
          <img src={logo} alt="æcco large icon" className="hero-icon-large" loading="lazy" />
        </div>
        <div className="hero-social-proof">
          <div className="avatars">
            <img src="https://i.pravatar.cc/100?img=5" alt="Customer 1" className="avatar" loading="lazy" />
            <img src="https://i.pravatar.cc/100?img=12" alt="Customer 2" className="avatar" loading="lazy" />
            <img src="https://i.pravatar.cc/100?img=23" alt="Customer 3" className="avatar" loading="lazy" />
          </div>
          <div className="social-proof-content">
            <span className="rating-text">20+</span>
            <div className="happy-customers">
              <span className="dot"></span> Glade kunder
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
