import React from 'react'
import Main from './components/Cards/Main';
import { Routes, Route } from "react-router-dom";
import Signup from './components/Auth/Signup';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Login from './components/Auth/Login';
import Dashboard from './components/dashboard/Dashboard';
function App() {
  return (
    <>
      <ToastContainer />
      <Routes>
        {/* Auth */}
        <Route index element={<Login />} />
        <Route path='/signup' element={<Signup />} />
        {/* Card */}
        <Route path='/card' element={<Main />} />
        {/* Dashboard */}
        <Route path='/dashboard' element={<Dashboard   />} />
      </Routes>
    </>
  );
}

export default App;
