
import React from 'react';
import '../styles/scills.css';


const SkillCard = ({ name, level, logo }) => {
  return (
    <div className="skill-card">
      <img src={logo} alt={`${name} logo`} className='skill-logo' />
      <span className="skill-name">{name}:  <br /> </span>

      <meter className='meter'
        value={level}
        min="0"
        max="100">
        {level}%
      </meter>
      <span className="skill-level">{level}%</span>
    </div>
  );
};

export default SkillCard;








