import React from 'react';
import { Link } from 'react-router-dom';
import "../styles/heder2style.css";
import "../styles/main.scss";

const Header2 = ({ onLogout }) => {
    const handleLogout = (e) => {
        e.preventDefault(); 
        onLogout(); 
    };

    return (
        <div className="header-container">
            <nav>
                <ul>
                <li className="border-li">
                        <Link to="/skills">Skills</Link>
                    </li>
                    <li className="border-li">
                        <Link to="/ArticlePage">Blog</Link>
                    </li>
                  
                    {/* <li className="border-li">
                        <Link to="/contact">Contact Us</Link>
                    </li> */}
                    <li className="border-li">
                        <a href="/" onClick={handleLogout}>Logout</a>
                    </li>
                </ul>
            </nav>
            <div className="header-logo">
                <Link to="/home" aria-label="Home">
                    <h1 className="logo-text">MySite</h1>
                </Link>
            </div>
        </div>
    );
};

export default Header2;
