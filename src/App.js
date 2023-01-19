// import logo from './logo.svg';
import { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import About from './components/About';
import TextForm from './components/TextForm';

import React from "react";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";




function App() {
  const [mode, setMode] = useState('light'); //weather dark mode is unable or not

 const toggleMode = ()=>{
    if(mode ==='light'){
      setMode('dark');
      document.body.style.backgroundColor="#292b2f"
    }else{
      setMode('light')
      document.body.style.backgroundColor="white"
    }
 }

  return (
    <>

      <BrowserRouter>
       <Navbar title="WoRdArt" about="About" mode={mode} toggleMode={toggleMode}/>
      <Routes>
        <Route path="/" element={<TextForm heading = "Welcome to the WoRdArt" mode={mode}/>} />
        <Route path="about/*" element={<About />} />
      </Routes>
    </BrowserRouter>
  </>
  );
}

export default App;
 