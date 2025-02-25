import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Login from './pages/Login';
import Main from './pages/Main';

function App() {
  const [isLogin, setIsLogin] = useState(true);

  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/login" index element={<Login />} />
        { isLogin && <Route path="/main" element={<Main />} /> }
      </Routes>
    </Router>
  );
}

export default App;