import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import '../../style.css';
import AboutUs from '../Pages/AboutUs/AboutUs';
import Error from '../Pages/404/Error';
import HomePage from '../Pages/HomePage/HomePage';

function App() {
  return (
    <div className="App">
      <header className="header">
        <div className="header__wrapper">
          <Link to="/">home</Link>
          <Link to="/about">About</Link>
          <Link to="/404">404</Link>
        </div>
      </header>
      <Routes>
        <Route path="" element={<HomePage />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/404" element={<Error />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </div>
  );
}

export default App;
