import React, { useState } from 'react';
import Calendar from '../components/Calendar';

const BookIntro = () => {
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedTime, setSelectedTime] = useState(null);

  const times = ["10:00", "11:30", "13:00", "14:30", "16:00"];

  const handleConfirm = () => {
    if (selectedDate && selectedTime) {
      alert(`Booking bekræftet for ${selectedDate.toLocaleDateString('da-DK')} kl. ${selectedTime}`);
    }
  };

  return (
    <div className="container page-padding">
      <div className="glass-panel booking-container text-center organic-shape">
        <h1 className="text-gradient">Book en Intro</h1>
        <p className="hero-subtext">Vælg et tidspunkt der passer dig, så tager vi en uforpligtende snak om dit projekt.</p>
        
        <div className="booking-grid">
          <Calendar onDateSelect={(date) => setSelectedDate(date)} />
          
          <div className="time-selection-column">
            <h3 style={{ marginBottom: '1.5rem', color: 'var(--text-pure-white)' }}>
              {selectedDate ? `Ledige tider for ${selectedDate.toLocaleDateString('da-DK')}` : 'Vælg en dato'}
            </h3>
            
            <div className="time-grid">
              {times.map(time => (
                <button 
                  key={time} 
                  className={`time-btn glass-panel ${selectedTime === time ? 'selected' : ''}`}
                  onClick={() => setSelectedTime(time)}
                  disabled={!selectedDate}
                >
                  {time}
                </button>
              ))}
            </div>

            <button 
              className="cta-button primary margin-top" 
              style={{ width: '100%' }}
              disabled={!selectedDate || !selectedTime}
              onClick={handleConfirm}
            >
              Bekræft Booking
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookIntro;
