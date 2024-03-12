import React from 'react';
import './App.css'; 
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import CareerPage from './CareerPage';
import Form from './form';


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<CareerPage />} />
        <Route path="/apply/:jobTitle" element={<Form />} />
      </Routes>
    </Router>
  );
}

export default App;

