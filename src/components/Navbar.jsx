import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/Logo.svg';
import pil from '../assets/pil.svg';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className={`navbar glass-panel ${isOpen ? 'menu-open' : ''}`}>
      <Link to="/" className="logo-brand" onClick={() => setIsOpen(false)} style={{ display: 'flex', alignItems: 'center', gap: '2px', textDecoration: 'none' }}>
        <span style={{ color: 'var(--accent-lumen-green)', fontWeight: '400', fontSize: '1.8rem', letterSpacing: '-1px' }}>æcco</span>
        <img src={logo} alt="æcco logo" style={{ height: '32px', display: 'block', marginLeft: '4px' }} />
      </Link>
      
      <div className={`nav-links-wrapper ${isOpen ? 'active' : ''}`}>
        <ul className="nav-links">
          <li><Link to="/start-project" onClick={() => setIsOpen(false)}>Ydelser</Link></li>
          <li><Link to="/clients" onClick={() => setIsOpen(false)}>Vores kunder</Link></li>
          <li><Link to="/sustainability" onClick={() => setIsOpen(false)}>Bæredygtighed</Link></li>
          <li><Link to="/about" onClick={() => setIsOpen(false)}>Om os</Link></li>
        </ul>
      </div>

      <div className="nav-actions">
        <Link to="/contact" className="contact-btn" style={{ textDecoration: 'none' }} onClick={() => setIsOpen(false)}>
          Kontakt <img src={pil} alt="pil" className="btn-arrow" />
        </Link>
        <button className="menu-toggle" onClick={() => setIsOpen(!isOpen)} aria-label="Menu">
          <span className="hamburger"></span>
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
