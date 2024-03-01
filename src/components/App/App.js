// App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import UsbContent from '../UsbContent/UsbContent';
import ChecklistContent from '../ChecklistContent/ChecklistContent';
import Navigation from '../Navigation/Navigation';
import ErrorPage from '../ErrorPage/ErrorPage'

function App() {
  return (
    <Router>
      <div className="App">
        <Navigation />
        <Routes>
          <Route path="/" element={<UsbContent />} />
          <Route path="/checklist" element={<ChecklistContent />} />
          <Route path='*' element={<ErrorPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
