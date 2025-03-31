import { useState } from 'react';
import { login, register } from '../api/auth';
import { setToken } from '../utils/auth';
import { useNavigate } from 'react-router-dom';
import { FiUser, FiMail, FiLock } from 'react-icons/fi';

const Home = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [form, setForm] = useState({ name: '', email: '', password: '' });
  const navigate = useNavigate();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const { name, email, password } = form;

    const res = isLogin
      ? await login(email, password)
      : await register(name, email, password);

    if (res.token) {
      setToken(res.token);
      navigate('/dashboard');
    } else {
      alert(res.message || 'Something went wrong');
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-100 to-indigo-200 px-4">
      <div className="w-full max-w-md bg-white p-8 rounded-xl shadow-lg space-y-6">
        <h2 className="text-2xl font-bold text-center text-indigo-700">
          {isLogin ? 'Login to your account' : 'Create an account'}
        </h2>

        <form onSubmit={handleSubmit} className="space-y-4">
          {!isLogin && (
            <div className="relative">
              <FiUser className="absolute left-3 top-3 text-gray-400" />
              <input
                type="text"
                name="name"
                placeholder="Full Name"
                value={form.name}
                onChange={handleChange}
                className="pl-10 pr-4 py-2 border rounded w-full focus:outline-none focus:ring-2 focus:ring-indigo-400"
                required
              />
            </div>
          )}
          <div className="relative">
            <FiMail className="absolute left-3 top-3 text-gray-400" />
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={form.email}
              onChange={handleChange}
              className="pl-10 pr-4 py-2 border rounded w-full focus:outline-none focus:ring-2 focus:ring-indigo-400"
              required
            />
          </div>
          <div className="relative">
            <FiLock className="absolute left-3 top-3 text-gray-400" />
            <input
              type="password"
              name="password"
              placeholder="Password"
              value={form.password}
              onChange={handleChange}
              className="pl-10 pr-4 py-2 border rounded w-full focus:outline-none focus:ring-2 focus:ring-indigo-400"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full bg-indigo-600 hover:bg-indigo-700 text-white py-2 rounded transition"
          >
            {isLogin ? 'Login' : 'Register'}
          </button>
        </form>

        <p className="text-center text-sm text-gray-600">
          {isLogin ? "Don't have an account?" : 'Already have an account?'}{' '}
          <button
            type="button"
            onClick={() => setIsLogin(!isLogin)}
            className="text-indigo-600 font-semibold hover:underline"
          >
            {isLogin ? 'Register' : 'Login'}
          </button>
        </p>
        

      </div>
    </div>
  );
};

export default Home;
