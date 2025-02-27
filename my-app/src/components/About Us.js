import React from 'react';
import "../styles/aboutstyle.css";
import img1 from "../images/img1.jpg";

const AboutUs = () => {
  return (
    <div className='about-main'>
      <div className="about-us">
        <h1>I am:</h1>

        <div className='about-div'>
          <h2 className='about-h2'>My Journey</h2>
          <p className='p-1'>Programmer on a journey of learning and growth. I've always been fascinated by technology and creativity, and now I'm diving into JavaScript, TypeScript, React, and Kotlin.</p>

          <p className='p-1'>But above all, my family means the world to me. I live with my amazing wife and our two wonderful kids, and I love them more than anything. They are my biggest motivation to keep pushing forward.</p>

          <p className='p-1'>I used to live in Iran, but now I'm in Turkey. Moving here has come with its challenges, but it has also given me the chance to learn new things and face new experiences.</p>

          <p className='p-1'>I'm always eager to learn and improve my skills. My dreams are big, and I hope that one day, I can make a positive impact on the world through my work.</p>
        </div>

        <img src={img1} alt="تیم ما" className="about-us-image" />



        <div className='about-div'>
          <h2 className='about-h2'>My Journey</h2>
          <p>Throughout my life, I have gained various experiences and developed skills in different fields. From technology and programming to industrial welding and theology, all of these skills have been part of my growth journey.</p>

          <h3 className='about-h3'>Technology and Development</h3>
          <ul>
            <li><strong>Frontend Developer</strong> – Proficient in designing and developing web user interfaces using modern technologies.</li>
          </ul>

          <h3 className='about-h3'>Industry and Technical Skills</h3>
          <ul>
            <li><strong>CO2 Welding</strong> – Skilled in semi-automatic welding with carbon dioxide gas.</li>
            <li><strong>Argon Welding (TIG)</strong> – Experienced in precise and clean welding on various metals.</li>
            <li><strong>Laser Welding</strong> – Using laser technology for high-precision welding of parts.</li>
          </ul>

          <h3 className='about-h3'>Theology and Writing</h3>
          <ul>
            <li><strong>Christian Theology</strong> – Studying and examining faith, spirituality, and biblical teachings.</li>
            <li><strong>Editor</strong> – Writing and editing articles, books, and theological discussions.</li>
          </ul>
        </div>


        <div className='about-div'>
          <h2 className='about-h2'>Now</h2>
          <ul className="status-list">
            <li>Working at<strong> Townlit</strong> Company</li>
            <li>Working at a <strong>Welding </strong>Company</li>
            <li>Student of<strong> Programming</strong></li>
          </ul>
        </div>

      </div>
    </div>
  );
};

export default AboutUs;
