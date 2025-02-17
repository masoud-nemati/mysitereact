
import React, { useState } from 'react';


import "../styles/footerstyle.css";

const Footer = () => {
    const[email, setemail] =useState('')
    const[color, setcolor] =useState("#008800")
    const[message,setmessage]=useState('')
    

    const handelemailcheng=(event)=>{
        setemail(event.target.value)
    };

    const handleFormSubmit=(event)=>{
        event.preventDefault();
        console.log(" :" ,email)
        setemail('');
        alert('your email has been sent');
       
        
    }


    return (
        <footer className="footer-container">
            <div className="footer-logo">
                {/* <img src="logo.png" alt="Logo" />
                <p>Short description about the company or website.</p> */}
            </div>
            <div className="footer-nav">
                <h4>Important Links</h4>
                <ul>
                    <li><a href="#home">Home</a></li>
                    <li><a href="#about">About Us</a></li>
                    <li><a href="#services">Services</a></li>
                    <li><a href="#contact">Contact Us</a></li>
                    <li><a href="#privacy">Privacy Policy</a></li>
                    <li><a href="#terms">Terms of Use</a></li>
                </ul>
            </div>
            <div className="footer-contact">
                <h4>Contact Us</h4>
                <ul>
                    <li><a href="mailto:info@example.com">masuodn8@gmail.com</a></li>
                    <li><a href="tel:+1234567890">+90 531 384 5662</a></li>
                    <li><address>-------------</address></li>
                </ul>
            </div>
         
            <div className="footer-social">
    <h4>Follow Us</h4>
    <ul>

    <li>
            <a href="https://www.townlit.com" target="_blank" rel="noopener noreferrer">
                <i className="#"></i>
                townlit
            </a>
        </li>


        <li>
            <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-facebook-f"></i>
                Facebook
            </a>
        </li>
        <li>
            <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-twitter"></i>
                Twitter
            </a>
        </li>
        <li>
            <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-instagram"></i>
                Instagram
            </a>
        </li>
        <li>
            <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-linkedin-in"></i>
                LinkedIn
            </a>
        </li>
    </ul>
</div>
<div className="footer-subscribe">
    <h4>Subscribe to our newsletter</h4>
        <form onSubmit={handleFormSubmit}>
            <input className='input-footer' type="email" placeholder="Your email" value={email}  onChange={handelemailcheng}/>
            <button type="submit">Subscribe</button>
        </form>
          <p style={{color:color}}>{email}</p>  
          <p>{message}</p>  
</div>
<div className="footer-copyright">
    <p>&copy; {new Date().getFullYear()} masoudnemati.com</p>
</div>
        </footer>
    );
};

export default Footer;
