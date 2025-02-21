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
        console.log(" :", email)
        setemail('');
        alert('Your email has been sent');
    }

    useEffect(() => {
        const handleScroll = () => {
            const scrollPosition = window.scrollY + window.innerHeight; // موقعیت اسکرول + ارتفاع پنجره
            const documentHeight = document.documentElement.scrollHeight; // ارتفاع کامل صفحه
    
            // نمایش فوتر زمانی که کاربر 90% از صفحه را اسکرول کرده باشد
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
                    <li><a href="tel:+1234567890">+90 531 384 5662</a></li>
                    <li><address>Address:</address></li>
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
                            <i className="fab fa-twitter"></i>
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
