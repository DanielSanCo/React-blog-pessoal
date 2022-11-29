import React from 'react';
import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Navbar from './components/navbar/Navbar';
import Footer from './components/footer/Footer';
import Login from './components/login/Login';
import Home from './components/home/Home'; 

function App() {
  return (
    <Router>
      <Navbar/>
        <Routes>
          <Route path='/' element={<Login />}/>
          <Route path='/home' element={<Home />}/>
        </Routes>
      <Footer/>
    </Router>
  );
}

export default App;
