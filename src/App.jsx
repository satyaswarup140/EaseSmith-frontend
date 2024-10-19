import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home/Home';
import Thankyoupage from './components/Thankyoupage/Thankyoupage';



const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />  
        <Route path="/thank-you" element={<Thankyoupage/>} /> 
      </Routes>
    </Router>
  );
};

export default App;
