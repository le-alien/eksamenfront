import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, useNavigate } from 'react-router-dom'; 
import Home from "./pages/Home"
import Admin from "./pages/Admin"
import './index.css'
import Login from './pages/Login';
import Register from './pages/Register';
import FAQ from './pages/FAQ';
import AdminRoute from './utils/AdminRoute';
import LoggedinRoute from './utils/LoggedinRoute';
import GeneralBoard from './pages/GeneralBoard';
import Thread from './pages/Thread';

const App = () => {
  return(
    <Router>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/admin" element={<AdminRoute><Admin/></AdminRoute>} />
        <Route path="/login" element={<Login/>}/>
        <Route path="/register" element={<Register/>}/>
        <Route path="/faq" element={<FAQ/>}/>
        <Route path="/GeneralBoard" element={<LoggedinRoute><GeneralBoard/></LoggedinRoute>}/>
        <Route path="/threads/:id" element={<Thread />}/>
      </Routes>
    </Router>
  )
}

export default App;
