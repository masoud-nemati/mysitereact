import React, { useState } from "react";
import "../styles/loginstyle.css";
import profilePic from "../images/img2.jpg";

const LoginPage = ({ onLogin }) => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubscribe = () => {
    if (email) {
      localStorage.setItem("userEmail", email);
      setEmail("");
      setMessage("sent");

      setTimeout(() => {
        setMessage("");
      }, 3000);
    } else {
      alert("please enter your email");
    }
  };

  const handleLogin = () => {
    onLogin();
  };

  return (
    <div className="login-page">
      <div className="login-card">
        <h1>I am ......</h1>
        <div className="profile-container">
          <img className="profile-pic" src={profilePic} alt="Profile" />
          <h2 className="username">Masoud Nemati</h2>
        </div>
        <div className="div-input-login">
          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)} // مقدار ایمیل را ذخیره می‌کند
            className="styled-input"
          />
          <button className="btn subscribe-btn" onClick={handleSubscribe}>
            Subscribe
          </button>
          <button className="btn visit-btn" onClick={handleLogin}>
            Visit
          </button>
          {message && <p className="success-message">{message}</p>} {/* نمایش پیام ارسال شد */}
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
