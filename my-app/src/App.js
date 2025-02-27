import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, useLocation, useNavigate } from 'react-router-dom';
import Heder2 from "./components/heder2";
import Imagecallery from "./components/imagecallery";
import Footer from './components/compfooter';
import AboutUs from './components/About Us';
import LoginPage from './components/logincomp';
import Skills from './components/skillscomp';
import CommentSection from './components/compsection';
import ArticlePage from './components/ArticlePage';
import FullArticle from './components/FullArticle';
import "./styles/appstyle.css";
import "./styles/aboutstyle.css";

const LocationBasedLayout = ({ onLogout }) => {
  const location = useLocation();
  const navigate = useNavigate();

  const showAboutUsAndComments = location.pathname === "/home";

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;

      if (scrollPosition >= documentHeight) {
        window.scrollTo(0, documentHeight);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className='app-style'>
      {/* <Comheder /> */}
      <Heder2 onLogout={() => {
        onLogout();
        navigate('/home');
      }} />
      <Routes>
        {/* <Route path="/home" element={<Home />} /> */}
        <Route path="/about" element={<AboutUs />} />
        <Route path='/skills' element={<Skills />} />
        <Route path='/ArticlePage' element={<ArticlePage />} />
        <Route path="/ArticlePage/:articleId" element={<FullArticle />} />
      </Routes>
      {showAboutUsAndComments && (
        <>
          <Imagecallery />
          <AboutUs />
          <CommentSection />
        </>
      )}

      <Footer />
    </div>
  );
};

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
  };

  return (
    <Router>
      {!isLoggedIn ? (
        <LoginPage onLogin={handleLogin} />
      ) : (
        <LocationBasedLayout onLogout={handleLogout} />
      )}
    </Router>
  );
};

export default App;
