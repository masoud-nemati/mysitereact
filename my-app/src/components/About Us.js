import React from 'react';
import "../styles/aboutstyle.css"
import img1 from "../images/img12.jpg";

const AboutUs = () => {
    return (
    <div className='about-main'>  
      <div className="about-us">
        <h1>AboutUs</h1>
        <img src={img1} alt="تیم ما" className="about-us-image" />
        <div className='div-title'>
            <p>

            React is a free and open-source front-end JavaScript library for building user interfaces based on components
             by Facebook Inc. It is maintained by Meta and a community of individual developers and companies. React can
              be used to develop single-page, mobile,
             or server-rendered applications with frameworks like Next.js. Wikipedia
             nt-end JavaScript library for building user interfaces based on components
             by Facebook Inc. It is maintained by Meta and a community of individual developers and companies. React can
              be used to develop single-page, mobile,
             or server-rendered applications with frameworks like Next.js. Wikiped


            </p>


        </div>
       
      </div> 
    </div>    
    );
  };
  
  export default AboutUs;