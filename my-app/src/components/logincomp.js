
import React, { useState } from 'react';
import "../styles/loginstyle.css";
import profilePic from '../images/img2.jpg'; // مسیر عکس پروفایل خود را وارد کنید

const LoginPage = ({ onLogin }) => {
  const [email, setEmail] = useState('');

  const handleLogin = () => {
    // اعتبارسنجی ایمیل و یا اقدامات دیگر قبل از ورود
    onLogin();
  };

  return (
    <div className="login-page">
    <div className="login-card">
      <div className="profile-container">
        <div className="profile-info">
          <h2>masoud nemati</h2>
          <p>masoudnemati.com</p>
        </div>
        <img className="img-login" src={profilePic} alt="Profile" className="profile-pic" />
        
       </div>
      <div className='div-input-login'>
        <input
        type="email"
        placeholder="Enter your email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        />
        <button >subscribe</button>
        <button onClick={handleLogin}>visit</button>
      </div>
    </div>
  </div>
  );
};

export default LoginPage;

