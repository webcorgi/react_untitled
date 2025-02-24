import React, { useState } from 'react';
import LoginPopup from './LoginPopup';

function Header() {
  const [showLogin, setShowLogin] = useState(false);
    return (
      <header>
        <h1>ShiningPath</h1>
        <button 
          className="btn-login"
          onClick={() => setShowLogin(true)}
        >
          로그인</button>
        {showLogin && <LoginPopup onClose={() => setShowLogin(false)} />}
      </header>
    );
}

export default Header;
