
import React, { useState } from "react";
import "../styles/loginstyle.css";
import profilePic from "../images/img2.jpg"; // مسیر عکس پروفایل خود را وارد کنید

const LoginPage = ({ onLogin }) => {
  const [email, setEmail] = useState("");

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
            onChange={(e) => setEmail(e.target.value)}
            className="styled-input"
          />
          <button className="btn subscribe-btn">Subscribe</button>
          <button className="btn visit-btn" onClick={handleLogin}>
            Visit
          </button>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;


















// import React, { useState } from 'react';
// import "../styles/loginstyle.css";
// import profilePic from '../images/img2.jpg'; // مسیر عکس پروفایل خود را وارد کنید

// const LoginPage = ({ onLogin }) => {
//   const [email, setEmail] = useState('');

//   const handleLogin = () => {
//     // اعتبارسنجی ایمیل و یا اقدامات دیگر قبل از ورود
//     onLogin();
//   };

//   return (
//     <div className="login-page">
//     <div className="login-card">
//       <div className="profile-container">
//         <div className="profile-info">
//           <h2>masoud nemati</h2>
//           <p></p>
//         </div>
//         <img className="img-login" src={profilePic} alt="Profile" className="profile-pic" />
        
//        </div>
//       <div className='div-input-login'>
//         <input
//         type="email"
//         placeholder="Enter your email"
//         value={email}
//         onChange={(e) => setEmail(e.target.value)}
//         />
//         <button >subscribe</button>
//         <button onClick={handleLogin}>visit</button>
//       </div>
//     </div>
//   </div>
//   );
// };

// export default LoginPage;

