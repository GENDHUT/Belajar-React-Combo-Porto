import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import BayaComponent from './Baya/BayaComponent';  
import HilmyComponent from './Hilmy/HilmyComponent'; 
import './Hilmy/index.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<BayaComponent />} /> {/* Default to Baya */}
        <Route path="/Baya" element={<BayaComponent />} />
        <Route path="/Hilmy" element={<HilmyComponent />} />
      </Routes>
    </Router>
  );
}

export default App;
