import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Heder2 from "./components/heder2";
import Imagecallery from "./components/imagecallery";
import Footer from './components/compfooter';
import AboutUs from './components/About Us';
import LoginPage from './components/logincomp';
import Skills from './components/skillscomp';
import CommentSection from './components/compsection';
import ArticlePage from './components/ArticlePage';
import FullArticle from './components/FullArticle';
import ScrollToTop from './components/ScrollToTop';
import "./styles/appstyle.css";
import "./styles/aboutstyle.css";

const LocationBasedLayout = ({ onLogout }) => {
  return (
    <div className='app-style'>
      <Heder2 onLogout={onLogout} />
      <Routes>
        <Route path="/" element={<Navigate to="/home" />} /> {/* تغییر مسیر به /home */}
        <Route
          path="/home"
          element={
            <>
              <Imagecallery />
              <AboutUs />
              <CommentSection />
            </>
          }
        />
        <Route path="/about" element={<AboutUs />} />
        <Route path='/skills' element={<Skills />} />
        <Route path='/ArticlePage' element={<ArticlePage />} />
        <Route path="/ArticlePage/:articleId" element={<FullArticle />} />
      </Routes>
      <ScrollToTop />
      <Footer />
    </div>
  );
};

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <Router>
      {!isLoggedIn ? (
        <LoginPage onLogin={() => setIsLoggedIn(true)} />
      ) : (
        <LocationBasedLayout onLogout={() => setIsLoggedIn(false)} />
      )}
    </Router>
  );
};

export default App;
