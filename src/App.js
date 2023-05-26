import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import DashBoard from "./components/dashboard/DashBoard"
import Twocard from './components/dashboard/Twocard';
import Login from './components/auth/Login';
import "./App.css"
import Dashboard from './components/auth/Dashboard';
import SignUp from './components/auth/SignUp';
import Header from './components/header/Header';

const App = () => {
  return (
    <Router>
      <div className='container'>
      <Header/>
      <Routes>
        <Route path='/' element={<Dashboard/>}/>
        <Route exact path="/login" element={<Login/>} />
        <Route path="/signup" element={<SignUp/>} />
      </Routes>
      </div>
    </Router>
  );
};

export default App;
