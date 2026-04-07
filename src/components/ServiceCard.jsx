import React from 'react';
import logo from '../assets/Logo.svg';

const ServiceCard = ({ title, description, icon, className }) => {
  return (
    <div className={`service-card glass-panel ${className || ''}`} style={{ position: 'relative' }}>
      <img src={logo} alt="æcco" className="card-watermark" loading="lazy" />
      <div className="icon-container">
        {icon}
      </div>
      <h3 className="card-title">{title}</h3>
      <p className="card-description">{description}</p>
    </div>
  );
};

export default ServiceCard;
