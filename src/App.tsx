import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, useNavigate } from 'react-router-dom'; 
import Home from "./pages/Home"
import Admin from "./pages/Admin"
import './index.css'
import Login from './pages/Login';

const App = () => {
  return(
    <Router>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/admin" element={<Admin/>}/>
        <Route path="/login" element={<Login/>}/>
      </Routes>
    </Router>
  )

}

export default App;
