// src/components/feature/Feature.jsx
import React from 'react';
import './feature.css';

const Feature = ({ title, text, icon, hobbyType, showBar = false }) => (
  <div className="feature">
    {icon && (
      <span className={`feature-icon ${hobbyType ? `hobby-${hobbyType}` : ''}`}>
        {icon}
      </span>
    )}
    <div className="feature-title-container">
      <h3 className="feature-title">{title}</h3>
      {showBar && <div className="feature-bar"></div>}
    </div>
    <p className="feature-text">{text}</p>
  </div>
);

export default Feature;