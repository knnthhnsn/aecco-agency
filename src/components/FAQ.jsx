import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import pil from '../assets/pil.svg';

const FAQItem = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className={`faq-item ${isOpen ? 'open' : ''}`} onClick={() => setIsOpen(!isOpen)}>
      <div className="faq-question">
        <span>{question}</span>
        <span className="faq-toggle">+</span>
      </div>
      {isOpen && (
        <div className="faq-answer">
          <p>{answer || "Vi arbejder på at uddybe dette svar. Kontakt os endelig hvis du har brug for hurtig hjælp."}</p>
        </div>
      )}
    </div>
  );
};

const FAQ = () => {
  const faqData = [
    { 
      question: "Hvordan påvirker min hjemmeside miljøet?", 
      answer: "Hver gang en side indlæses, kræver det energi fra servere, netværk og brugerens enhed. Datatung kode og store billeder øger CO2-aftrykket. Vi optimerer alt dette for at spare energi." 
    },
    { 
      question: "Hvad er fordelene ved bæredygtigt webdesign?", 
      answer: "Udover at hjælpe planeten, får I et lynhurtigt website, bedre SEO-placeringer og en overlegen brugeroplevelse uden unødig digital støj." 
    },
    { 
      question: "Skal vi gå på kompromis med det visuelle udtryk?", 
      answer: "Bestemt ikke. Vores 'Sustainable Futurism' stil beviser, at man kan skabe eksklusive og moderne designs ved at prioritere intelligent og minimalistisk æstetik." 
    },
    { 
      question: "Hvad koster det at optimere en eksisterende side?", 
      answer: "Prisen afhænger af kompleksiteten, men vi starter ofte med en gennemgribende performance-audit, der hurtigt viser de største besparelsespotentialer." 
    },
    { 
      question: "Hvad er 'Low-Energy Design' helt præcis?", 
      answer: "Det er design optimeret til OLED-skærme (hvor mørke pixels bruger mindre strøm) og fokus på en effektiv brugerrejse, der gør at besøgende finder svar hurtigere." 
    },
    { 
      question: "Hvordan kommer vi i gang med projektet?", 
      answer: "I kan starte med at booke et gratis intromøde nederst på siden eller via kontakt-siden. Her lægger vi sammen strategien for jeres grønne digitale rejse." 
    }
  ];

  return (
    <section className="faq-section" id="faq">
      <div className="container">
        <div className="faq-header text-center">
          <h4 className="faq-label">FAQ</h4>
          <h2 className="faq-title text-gradient">Måske har vi allerede svaret</h2>
        </div>
        
        <div className="faq-list">
          {faqData.map((item, index) => (
            <FAQItem key={index} question={item.question} answer={item.answer} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
