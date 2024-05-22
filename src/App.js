import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './Components/Navbar';
import Header from './Components/Header';
import About from './Components/About';
import Contact from './Components/Contact';




const App = () => {
  return (
  
      <Router>
        <Navbar />
        <Routes>
        <Route path="/" element={<Header />} />
         
        </Routes>
        <About/>
        <Contact />
      </Router>
  
  );
};

export default App;
