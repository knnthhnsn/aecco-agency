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
      question: "Hvad skal we tilsende jer inden vi vælger en af jeres pakker?", 
      answer: "Før du binder dig til noget, bruger vi vores AI-designgenerator til lynhurtigt at skabe et visuelt udkast. Det gør vi for at forventningsafstemme og fjerne risikoen for dig. Først når vi er helt enige om den visuelle retning, går vi i gang med selve byggeprocessen." 
    },
    { 
      question: "Skal vi selv stå for driften af hjemmesiden bagefter?", 
      answer: "Hvis I vælger det, håndterer vi det hele. Vi benytter grønne datacentre drevet af 100 % vedvarende energi og en moderne serverless-arkitektur. Det giver jer maksimal sikkerhed, nul nedetid og et minimalt klimaaftryk, uden at I skal røre en finger." 
    },
    { 
      question: "Kan vi nemt selv ændre tekster og billeder?", 
      answer: "Ja, absolut. Selvom maskinrummet er bygget på avanceret letvægtskode (JAMstack), får I adgang til et utrolig brugervenligt CMS-system. I kan nemt opdatere indholdet – og som en klimabonus bruger databasen bagved kun strøm i de minutter, I rent faktisk er logget ind for at rette ting." 
    },
    { 
      question: "Hvor lang tid tager det, fra vi siger ja, til siden er live?", 
      answer: "Fordi vi bygger i letvægtskode og fjerner ugevis af tungt forarbejde. Fra vi har det endelige designudkast godkendt, kan vi typisk lancere din nye hjemmeside inden for et par uger. Vi respekterer din tid og går direkte til sagen." 
    },
    { 
      question: "Hvad hvis vi har brug for en funktion, der ikke er nævnt i pakken?", 
      answer: "Pakkerne er skabt til at dække 90 % af de behov, en moderne SMV har. Har I specifikke krav – f.eks. avancerede integrationer til et regnskabsprogram eller et unikt bookingsystem – tager vi en snak om det og giver en fast, gennemskuelig pris på tilkøbet, inden vi går i gang." 
    },
    { 
      question: "Hvad har fremtidens miljøkrav med min hjemmeside at gøre?", 
      answer: "Nye EU-krav (som CSRD) betyder, at virksomheder snart skal kunne dokumentere deres CO2-aftryk – også det digitale. En tung, traditionel hjemmeside trækker ned i jeres klimaregnskab og kan koste jer kunder. Med vores pakker får I en letvægtsløsning, der allerede overholder morgendagens regler." 
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
