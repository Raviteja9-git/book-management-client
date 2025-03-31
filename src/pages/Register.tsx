import { useState } from 'react';
import { register } from '../api/auth';
import { setToken } from '../utils/auth';
import { useNavigate } from 'react-router-dom';
import { FiUser, FiMail, FiLock } from 'react-icons/fi';

const Register = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleRegister = async (e: React.FormEvent) => {
    e.preventDefault();
    const res = await register(name, email, password);
    if (res.token) {
      setToken(res.token);
      navigate('/dashboard');
    } else {
      alert(res.message || 'Registration failed');
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-50 to-indigo-100 px-4">
      <form
        onSubmit={handleRegister}
        className="w-full max-w-md bg-white shadow-lg rounded-lg p-8 space-y-6"
      >
        <h1 className="text-2xl font-bold text-center text-indigo-700">Create an Account</h1>

        <div className="relative">
          <FiUser className="absolute left-3 top-3 text-gray-400" />
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Full Name"
            className="pl-10 pr-4 py-2 border rounded w-full focus:outline-none focus:ring-2 focus:ring-indigo-400"
            required
          />
        </div>

        <div className="relative">
          <FiMail className="absolute left-3 top-3 text-gray-400" />
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email"
            className="pl-10 pr-4 py-2 border rounded w-full focus:outline-none focus:ring-2 focus:ring-indigo-400"
            required
          />
        </div>

        <div className="relative">
          <FiLock className="absolute left-3 top-3 text-gray-400" />
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
            className="pl-10 pr-4 py-2 border rounded w-full focus:outline-none focus:ring-2 focus:ring-indigo-400"
            required
          />
        </div>

        <button
          type="submit"
          className="w-full bg-indigo-600 hover:bg-indigo-700 text-white py-2 rounded transition"
        >
          Register
        </button>
      </form>
    </div>
  );
};

export default Register;
