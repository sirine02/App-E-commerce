import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import { Route, Routes } from 'react-router-dom';
import Add from './pages/Add';   // Importation du composant Add
import List from './pages/List';
import Orders from './pages/Orders';
import Login from './components/Login';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const App = () => {
  const [token, setToken] = useState('');

  useEffect(() => {
    const checkTokenValidity = () => {
      if (!token) return; // Aucun token, rien à vérifier
      const tokenExpirationDate = JSON.parse(atob(token.split('.')[1])).exp;  // Exemple pour un token JWT
      if (Date.now() >= tokenExpirationDate * 1000) {
        setToken('');  // Supprimer le token si expiré
        localStorage.removeItem('token');
      }
    };

    checkTokenValidity();
  }, [token]);

  useEffect(() => {
    if (token) {
      localStorage.setItem('token', token);
    } else {
      localStorage.removeItem('token');
    }
  }, [token]);

  return (
    <div className="bg-white min-h-screen">
      <ToastContainer />
      {token === '' ? (
        <Login setToken={setToken} />
      ) : (
        <>
          <Navbar setToken={setToken} />
          <hr className="border-t-1 border-gray-300 -my-1.5" />
          <div className="text-center">
            <Sidebar />
            <div className="w-[70%] mx-auto ml-[max(5vw,25px)] my-8 text-gray-600 text-base">
            <Routes>
  <Route
    path="/"
    element={<Add />}
  />
  <Route
  path="/add"
  element={<Add />}
  onEnter={() => console.log('Navigating to Add page')}
/>
  <Route path="/list" element={<List token={token} />} />
  <Route path="/orders" element={<Orders token={token} />} />
</Routes>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default App;
