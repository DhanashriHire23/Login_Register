import React, { useState } from 'react';
import axios from 'axios';

const Navbar: React.FC = () => {
  const [showLogin, setShowLogin] = useState(false);
  const [showRegister, setShowRegister] = useState(false);
  const [loginData, setLoginData] = useState({ email: '', password: '' });
  const [registerData, setRegisterData] = useState({ username: '', email: '', password: '' });
  const [message, setMessage] = useState('');

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:8080/api/users/login', loginData);
      console.log(response.data);
      setShowLogin(false);
      setMessage('Login successful');
    } catch (error) {
      console.error('Login failed', error);
      setMessage('Login failed');
    }
  };

  const handleRegister = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:8080/api/users/register', registerData);
      console.log(response.data);
      setShowRegister(false);
      setMessage('Registration successful');
    } catch (error) {
      console.error('Registration failed', error);
      setMessage('Registration failed');
    }
  };

  return (
    <div className="bg-purple-600 p-4 text-white">
      <div className="flex justify-between items-center">
        <div className="text-2xl font-bold">LoginRegister</div>
        <div>
          <button className="mx-2" onClick={() => setShowLogin(true)}>Login</button>
          <button className="mx-2" onClick={() => setShowRegister(true)}>Register</button>
        </div>
      </div>

      {message && (
        <div className="mt-4 p-2 text-center bg-violet-900 text-white">
          {message}
        </div>
      )}

      {showLogin && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-violet-500 p-8 rounded shadow-lg max-w-sm w-full">
            <h1 className="text-2xl mb-6 text-center">Login</h1>
            <form onSubmit={handleLogin}>
              <input
                type="email"
                placeholder="Email"
                className="border p-2 mb-4 w-full text-black rounded"
                value={loginData.email}
                onChange={(e) => setLoginData({ ...loginData, email: e.target.value })}
              />
              <input
                type="password"
                placeholder="Password"
                className="border p-2 mb-4 w-full text-black rounded"
                value={loginData.password}
                onChange={(e) => setLoginData({ ...loginData, password: e.target.value })}
              />
              <button type="submit" className="bg-purple-900 text-white p-2 w-full rounded">Login</button>
            </form>
            <button className="mt-4 text-black underline" onClick={() => setShowLogin(false)}>Close</button>
          </div>
        </div>

)}
      



      {showRegister && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-violet-500 p-8 rounded shadow-lg max-w-sm w-full">
            <h1 className="text-2xl mb-6 text-center">Register</h1>
            <form onSubmit={handleRegister}>
              <input
                type="text"
                placeholder="Username"
                className="border p-2 mb-4 w-full text-black rounded"
                value={registerData.username}
                onChange={(e) => setRegisterData({ ...registerData, username: e.target.value })}
              />
              <input
                type="email"
                placeholder="Email"
                className="border p-2 mb-4 w-full text-black rounded"
                value={registerData.email}
                onChange={(e) => setRegisterData({ ...registerData, email: e.target.value })}
              />
              <input
                type="password"
                placeholder="Password"
                className="border p-2 mb-4 w-full text-black rounded"
                value={registerData.password}
                onChange={(e) => setRegisterData({ ...registerData, password: e.target.value })}
              />
              <button type="submit" className="bg-purple-900 text-white p-2 w-full rounded">Register</button>


            </form>
            <button className="mt-4 text-black underline" onClick={() => setShowRegister(false)}>Close</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
