import React from 'react';
import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Footer from './components/estaticos/footer/Footer';
import Login from './paginas/login/Login';
import Home from './paginas/home/Home'; 
import CadastroUsuario from './paginas/cadastroUsuario/CadastroUsuario';
import Navbar from './components/estaticos/navbar/Navbar';

function App() {
  return (
    <Router>
      <Navbar/>
        <Routes>
          <Route path='/' element={<Login />}/>
          <Route path='/login' element={<Login />}/>
          <Route path='/home' element={<Home />}/>
          <Route path='/cadastrousuario' element={<CadastroUsuario />}/>
        </Routes>
      <Footer/>
    </Router>
  );
}

export default App;
