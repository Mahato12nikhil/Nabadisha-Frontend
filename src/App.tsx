import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from './components/pages/navbar';
import LoginForm from './components/login/loginForm'
import RegistrationForm from './components/login/registrationForm';
import Home from './components/Home/home';

function App() {
  return (
    <div className="App">
         <>
            <Router>
                  <Navbar/>
              
                  <Routes>
                    <Route path="/login"  element={<LoginForm />} />
                    <Route path="/home"  element={<Home />} />
                    <Route path="/sign_up"  element={<RegistrationForm />} />
                  </Routes>
        
            </Router>
        </>
    </div>
  );
}

export default App;
