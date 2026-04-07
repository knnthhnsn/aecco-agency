import React, { useState } from 'react';

const Calendar = ({ onDateSelect }) => {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [selectedDate, setSelectedDate] = useState(null);

  const daysInMonth = (year, month) => new Date(year, month + 1, 0).getDate();
  const firstDayOfMonth = (year, month) => new Date(year, month, 1).getDay();

  const handlePrevMonth = () => {
    setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() - 1, 1));
  };

  const handleNextMonth = () => {
    setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 1));
  };

  const handleDateClick = (day) => {
    const date = new Date(currentDate.getFullYear(), currentDate.getMonth(), day);
    setSelectedDate(date);
    if (onDateSelect) onDateSelect(date);
  };

  const year = currentDate.getFullYear();
  const month = currentDate.getMonth();
  const monthName = currentDate.toLocaleString('da-DK', { month: 'long' });
  const totalDays = daysInMonth(year, month);
  const startDay = firstDayOfMonth(year, month);

  const days = [];
  for (let i = 0; i < startDay; i++) {
    days.push(<div key={`empty-${i}`} className="calendar-day empty"></div>);
  }
  for (let d = 1; d <= totalDays; d++) {
    const isSelected = selectedDate && 
                      selectedDate.getDate() === d && 
                      selectedDate.getMonth() === month && 
                      selectedDate.getFullYear() === year;
    
    days.push(
      <div 
        key={d} 
        className={`calendar-day ${isSelected ? 'selected' : ''}`}
        onClick={() => handleDateClick(d)}
      >
        {d}
      </div>
    );
  }

  return (
    <div className="calendar-widget glass-panel">
      <div className="calendar-header">
        <button onClick={handlePrevMonth} className="nav-arrow">&lt;</button>
        <h3>{monthName.charAt(0).toUpperCase() + monthName.slice(1)} {year}</h3>
        <button onClick={handleNextMonth} className="nav-arrow">&gt;</button>
      </div>
      <div className="calendar-weekdays">
        <div>Man</div><div>Tir</div><div>Ons</div><div>Tor</div><div>Fre</div><div>Lør</div><div>Søn</div>
      </div>
      <div className="calendar-grid">
        {days}
      </div>
    </div>
  );
};

export default Calendar;
