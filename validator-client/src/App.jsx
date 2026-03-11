import Home from './components/Home';
import {Route, Routes} from 'react-router-dom'
import { useNavigate } from 'react-router-dom';
import { useState, useEffect } from "react";
import Signup from './components/Signup';
import Profile from './components/Profile';
import Navbar from './components/Navbar';

function App() {

  return (
    <>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<Signup/>} />
        <Route path="/profile" element={<Profile/>} />
      </Routes>
    </>
  )
}

export default App
