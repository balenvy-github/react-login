import React from 'react';
import './App.css';
import Modal from 'react-modal';

import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from './features/login/components/Login';
import HomePage from './pages/HomePage';
import Unauthorized from './features/login/components/Unauthorized';
import RequireAuth from './features/login/components/RequireAuth';
import Service from './features/service/components/Service';

Modal.setAppElement('#root');

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="*">Not Found</Route>
        <Route path="/login" element={<Login />} />
        <Route path="/unauthorized" element={<Unauthorized />} />
        <Route element={<RequireAuth />}>
          <Route path="/" element={<HomePage />} />
        </Route>
        <Route path="/service" element={<Service />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
