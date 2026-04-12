import React from 'react';
import { Helmet } from 'react-helmet-async';

const Contact = () => {
  return (
    <div className="container page-padding">
      <Helmet>
        <title>Kontakt | Start Dialogen om dit Grønne Website | æcco</title>
        <meta name="description" content="Klar til at gøre dit website mere bæredygtigt? Kontakt æcco for en uforpligtende samtale om lynhurtig performance og CO2-optimering." />
        <link rel="canonical" href="https://aecco-agency.web.app/contact" />
      </Helmet>
      <div className="contact-card" style={{ maxWidth: '650px', margin: '2rem auto', position: 'relative' }}>
        <div className="bio-aura" style={{ width: '300px', height: '300px', top: '-100px', right: '-100px', opacity: 0.12 }}></div>
        <h1 className="text-gradient" style={{ fontSize: '3.5rem', marginBottom: '1rem' }}>Lad os tale sammen</h1>
        <p className="hero-subtext" style={{ fontSize: '1.3rem', marginBottom: '3.5rem', opacity: 0.9 }}>Har du spørgsmål til bæredygtigt webdesign eller vil du bare sige hej? Vi svarer hurtigt.</p>
        
        <form className="contact-form">
          <div className="form-group">
            <label>Navn</label>
            <input type="text" placeholder="Dit navn" className="glass-input" />
          </div>
          <div className="form-group">
            <label>Email</label>
            <input type="email" placeholder="din@email.dk" className="glass-input" />
          </div>
          <div className="form-group">
            <label>Besked</label>
            <textarea placeholder="Hvad kan vi hjælpe med?" className="glass-input" rows="6"></textarea>
          </div>
          <button type="submit" className="cta-button primary">Send Hilsen</button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
