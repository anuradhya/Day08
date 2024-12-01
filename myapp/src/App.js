import './App.css';
import {useState} from "react";

import{
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  NavLink
}from "react-router-dom";

import AboutUs from './components/AboutUs';
import ContactUs from './components/ContactUs';
import Dashboard from './components/Dashboard';
import Home from './components/Home';
import Login from './components/Login';

function App() {
  return (
    <>
    <Router>
      <Routes>
        <Route path="/aboutus" element ={<AboutUs/>}/>
        <Route path="contsctus" element={<ContactUs/>}/>
        <Route path="dashboard" element={<Dashboard/>}/>
        <Route path="home" element={<Home/>}/>
        <Route path="login" element={<Login/>}/>
      </Routes>
    </Router>
    </>
  );
}

export default App;
