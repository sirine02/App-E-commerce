import React, { useState } from 'react';
import { toast } from 'react-toastify';
import axios from 'axios';

const backendUrl = import.meta.env.VITE_BACKEND_URL;

const Login = ({ setToken }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const onSubmitHandler = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(`${backendUrl}/api/user/admin`, {
        email,
        password,
      });

      if (response.data.success) {
        const token = response.data.token;

        // ✅ On stocke le token dans localStorage
        localStorage.setItem('token', token);

        // ✅ On le passe au parent (si nécessaire)
        setToken(token);

        toast.success('Connexion réussie !');
      } else {
        toast.error(response.data.message || 'Erreur lors de la connexion');
      }
    } catch (err) {
      console.error(err);
      toast.error('Une erreur est survenue. Veuillez réessayer.');
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 shadow-md rounded-md w-[350px]">
        <h1 className="text-xl font-bold mb-6 text-center">Admin Panel</h1>

        {error && <div className="mb-4 text-red-600">{error}</div>}

        <form onSubmit={onSubmitHandler}>
          <div className="mb-4">
            <p className="mb-1 text-gray-700">Email</p>
            <input
              type="email"
              required
              placeholder="admin@email.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full border px-3 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-800"
            />
          </div>

          <div className="mb-6">
            <p className="mb-1 text-gray-700">Password</p>
            <input
              type="password"
              required
              placeholder="••••••••"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full border px-3 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-800"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-black text-white py-2 rounded-md hover:bg-gray-800"
          >
            Se connecter
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
