import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import DashBoard from "./components/dashboard/DashBoard"
import Twocard from './components/dashboard/Twocard';
import "./App.css"

const App = () => {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<DashBoard/>} />
        <Route path="/TwoCard" element={<Twocard/>} />
      </Routes>
    </Router>
  );
};

export default App;
