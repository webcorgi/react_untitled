import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../img/logo.png'

function Header() {
    return (
      <header className="site-header">
        <Link to="/main" className="logo">
          <img src={logo} alt="logo" />
        </Link>
        <Link
          to="/login"
          className="btn-login"
        >
          로그인
        </Link>
      </header>
    );
}

export default Header;
