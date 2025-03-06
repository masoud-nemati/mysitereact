import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import "../styles/footerstyle.css";

const Footer = () => {
    const [email, setemail] = useState('')
    const [color, setcolor] = useState("#008800")
    const [message, setmessage] = useState('')
    const [isVisible, setIsVisible] = useState(false);

    const handelemailcheng = (event) => {
        setemail(event.target.value)
    };

    const handleFormSubmit = (event) => {
        event.preventDefault();

        if (!email.trim()) {
            alert('The field is empty. Please enter your email.');
            return;
        }

        localStorage.setItem('userEmail', email);
        console.log("Email sent:", email);

        setemail('');  
        setmessage('Email sent successfully!'); 

        setTimeout(() => {
            setmessage(''); 
        }, 3000);
    };


    useEffect(() => {
        const handleScroll = () => {
            const scrollPosition = window.scrollY + window.innerHeight; 
            const documentHeight = document.documentElement.scrollHeight; 

            if (scrollPosition >= documentHeight * 0.9) {
                setIsVisible(true);
            } else {
                setIsVisible(false);
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <footer className={`footer-container ${isVisible ? 'visible' : ''}`}>
            <div className="footer-logo">
                {/* <img src="logo.png" alt="Logo" /> */}
            </div>

            <div className="footer-contact">
                <h4>Contact Us</h4>
                <ul>
                    <li><a href="mailto:info@example.com">masuodn8@gmail.com</a></li>
                    <li>
                        <a className='a-whatsup' href="https://wa.me/+905313845662" target="_blank" rel="noopener noreferrer">
                            <i className="fab fa-whatsapp"></i> WhatsApp :
                        </a>
                    </li>
                    <li><a href="tel:+1234567890">+90 531 384 5662</a></li>
                </ul>
            </div>


            <div className="footer-social">
                <h4>Follow Us</h4>
                <ul>
                    <li>
                        <a href="https://www.instagram.com/dcorrr2020" target="_blank" rel="noopener noreferrer">
                            <i className="fab fa-instagram"></i>
                        </a>
                    </li>
                    <li>
                        <a href="https://www.facebook.com/Masuod Nemati" target="_blank" rel="noopener noreferrer">
                            <i className="fab fa-facebook-f"></i>
                        </a>
                    </li>
                    <li>
                        <a href="https://twitter.com/masoud_nemati" target="_blank" rel="noopener noreferrer">
                            <i className="fab fa-x-twitter"></i>
                        </a>
                    </li>
                    <li>
                        <a href="https://www.linkedin.com/in/Masuod Nemati" target="_blank" rel="noopener noreferrer">
                            <i className="fab fa-linkedin-in"></i>
                        </a>
                    </li>
                </ul>
            </div>

            <div className="footer-subscribe">
                <h4>Subscribe to our newsletter</h4>
                <form onSubmit={handleFormSubmit}>
                    <input className='input-footer' type="email" placeholder="Your email" value={email} onChange={handelemailcheng} />
                    <button type="submit">Subscribe</button>
                </form>
                <p style={{ color: color }}>{email}</p>
                <p>{message}</p>
            </div>

            <div className="footer-copyright">
                <p>&copy; {new Date().getFullYear()} masoudnemati.com</p>
            </div>
        </footer>
    );
};

export default Footer;
