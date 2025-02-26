import React from 'react';
import "../styles/aboutstyle.css";
import img1 from "../images/img1.jpg";

const AboutUs = () => {
    return (
        <div className='about-main'>
            <div className="about-us">
                <h1>I am:</h1>
                
                <div className='div-title'>
                    <p>
                        React is a free and open-source front-end JavaScript library for building user interfaces based on components.
                        React is maintained by Meta and a community of individual developers and companies.
                    </p>
                </div>
                <img src={img1} alt="تیم ما" className="about-us-image" />


                {/* باکس دوم */}
                <div className='div-title'>
                    <p>
                        React is commonly used for developing single-page applications, mobile applications, and server-rendered applications.
                        It allows developers to build dynamic and interactive user interfaces with ease.
                    </p>
                </div>

                {/* باکس سوم */}
                <div className='div-title'>
                    <p>
                        React also has a powerful ecosystem of tools and libraries, such as Redux for state management and Next.js for server-side rendering.
                        These tools make React a flexible and highly efficient choice for web development.
                    </p>
                </div>

            </div> 
        </div>    
    );
};

export default AboutUs;
