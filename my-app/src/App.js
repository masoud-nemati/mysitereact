

import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, useLocation, useNavigate } from 'react-router-dom';
import Comheder from "./components/comheder";
import Heder2 from "./components/heder2";
import Imagecallery from "./components/imagecallery";
import Footer from './components/compfooter';
import Home from './components/homecomp';
import AboutUs from './components/About Us';
import LoginPage from './components/logincomp';
import Skills from './components/skillscomp';
import "./styles/appstyle.css";


const LocationBasedLayout = ({ onLogout }) => {
  const location = useLocation();
  const navigate = useNavigate(); 
  const showImageGallery = location.pathname === "/home";

  return (
    <div className='app-style'>
    
      <Comheder />
      <Heder2 onLogout={() => { 
        onLogout(); 
        navigate('/home'); 
      }} />
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path='/skills' element={<Skills/>}/>
      </Routes>
      {showImageGallery && <Imagecallery />}
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






