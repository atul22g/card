import React from 'react'
import Main from './components/Cards/Main';
import { Routes, Route } from "react-router-dom";
import Signup from './components/Auth/Signup';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
function App() {
  return (
    <>
      <ToastContainer />
      <Routes>
        <Route index element={<Signup />} />
        <Route path='/card' element={<Main />} />
        <Route path='/asdcard' element={<Main />} />
      </Routes>
    </>
  );
}

export default App;
