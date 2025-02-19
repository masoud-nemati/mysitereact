import React from 'react';
import   '../styles/scills.css';
import SkillCard from '../components/skillscart';
import  logo1 from '../logos/logo192.png';
import  logo2 from '../logos/java-script.png';
import logwe from '../../src/logos/welder.png';
import ligwork from '../../src/logos/work.png';
import logohtml from '../../src/logos/html-5.png';
import logjava from '../../src/logos/java-script.png';
import logokotlin from '../../src/logos/kotlin-logo.png'
import logoedit from '../../src/logos/editingword.jpeg'
import logogit from '../../src/logos/gitimage1.jpeg'

const skills =[

    { name: 'JavaScript', level:40 , logo:logo2},
    { name: 'React', level: 50, logo:logo1 },
    { name: 'HTML & CSS', level: 70 , logo:logohtml},
    { name: 'CO2 Welding', level: 100 ,logo:logwe},  
    { name: 'Argon Welding', level: 60 ,logo:logwe},  
    { name: 'Laser Welding', level: 100 ,logo:logwe},  
    { name: 'Editing', level: 70 , logo:logoedit }, 
    { name: 'Welding Project Management', level: 80,logo:ligwork }, 

    {name: 'kotlin' , level: 50 , logo:logokotlin},
    {name: 'gitup', level:60 , logo:logogit}
]

const Skills = () => {
    return (  

     
          <div className="skills-page">
            <h2 className='h2skill'>My Skills</h2>
            <div className="skills-list">
              {skills.map((skill, index) => (
                <SkillCard 
                  key={index}
                  name={skill.name}
                  level={skill.level}
                  logo={skill.logo ||logo1||logo2||logjava||logohtml||logwe||ligwork ||logokotlin||logoedit||logogit }
                />
              ))}
            </div>
          </div>
        );
      };

 
export default Skills;