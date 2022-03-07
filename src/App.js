import React, { useContext } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';

import { ThemeContext } from './contexts/ThemeContext';
import { Main, ProjectPage } from './pages'
import { BackToTop } from './components'
import ScrollToTop from './utils/ScrollToTop'

import './App.css'

const App = () =>{

  const { theme } = useContext(ThemeContext);
  // console.log = console.warn = console.error = () => {};

  return (
    <div className="app">
      <Router>
        {/* <ScrollToTop/> */}
        <Routes>
          <Route path="/"  element={<Main />} exact/>
          <Route path="/projects" element={<ProjectPage />} exact/>
          <Route path="/" element={ <Navigate to="/" /> } />
        </Routes>
      </Router>
      <BackToTop />
    </div>
  );
}

export default App;