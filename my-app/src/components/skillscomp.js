import React from 'react';
import '../styles/scills.css';
import SkillCard from '../components/skillscart';
import logo1 from '../logos/logo192.png';
import logo2 from '../logos/java-script.png';
import logohtml from '../logos/html-5.png';
import logokotlin from '../logos/kotlin-logo.png';
import logoedit from '../logos/editingword.jpeg';
import logogit from '../logos/github2.png';
import logwe from '../../src/logos/welder.png';
import ligwork from '../../src/logos/work.png';


const programmingSkills = [
  { name: 'JavaScript', level: 40, logo: logo2 },
  { name: 'React', level: 50, logo: logo1 },
  { name: 'HTML & CSS', level: 70, logo: logohtml },
  { name: 'Kotlin', level: 50, logo: logokotlin },
  { name: 'Github', level: 60, logo: logogit },
  { name: 'Editing', level: 70, logo: logoedit },
];

const industrialSkills = [
  { name: 'CO2 Welding', level: 100, logo: logwe },
  { name: 'Argon Welding', level: 60, logo: logwe },
  { name: 'Laser Welding', level: 100, logo: logwe },
  { name: 'Welding Project Management', level: 80, logo: ligwork }
];

const Skills = () => {
  return (
    <div className="skills-page">
      <h2 className='h2skill'>My Skills</h2>

      <div className="skills-category">
        <h3>Programming Skills</h3>
        <div className="skills-list">
          {programmingSkills.map((skill, index) => (
            <SkillCard key={index} {...skill} />
          ))}
        </div>
      </div>
      <div className="skills-category">
        <h3>Industrial Skills</h3>
        <div className="skills-list">
          {industrialSkills.map((skill, index) => (
            <SkillCard key={index} {...skill} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;
