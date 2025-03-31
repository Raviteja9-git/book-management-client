import { useState } from 'react';
import { login } from '../api/auth';
import { setToken } from '../utils/auth';
import { useNavigate } from 'react-router-dom';
import { FiCheck, FiArrowRight } from 'react-icons/fi';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const isValidEmail = email.includes('@');

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    const res = await login(email, password);
    if (res.token) {
      setToken(res.token);
      navigate('/dashboard');
    } else {
      alert(res.message || 'Login failed');
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
      <div className="bg-white border border-gray-200 rounded-2xl p-8 w-full max-w-sm shadow-sm space-y-6">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Log in</h1>
          <p className="text-gray-600 text-sm">to start learning</p>
        </div>

        <form onSubmit={handleLogin} className="space-y-4">
          <div>
            <label htmlFor="email" className="block text-sm text-gray-700 mb-1">
              Email
            </label>
            <div className={`relative`}>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="you@example.com"
                className={`w-full rounded-md border px-4 py-2 pr-10 text-sm focus:outline-none ${
                  isValidEmail
                    ? 'border-green-600 bg-green-50 text-green-800'
                    : 'border-gray-300'
                }`}
                required
              />
              {isValidEmail && (
                <FiCheck className="absolute right-3 top-2.5 text-green-600" />
              )}
            </div>
          </div>

          <div>
            <label htmlFor="password" className="block text-sm text-gray-700 mb-1">
              Password
            </label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="••••••••"
              className="w-full rounded-md border border-gray-300 px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
              required
            />
          </div>

          <div className="text-right">
            <a href="#" className="text-sm text-blue-500 hover:underline">
              Forgot password?
            </a>
          </div>

          <button
            type="submit"
            className="w-full flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-md font-medium transition"
          >
            Log in <FiArrowRight className="mt-0.5" />
          </button>
        </form>

        <p className="text-center text-sm text-gray-600">
          Don’t have an account?{' '}
          <a href="/register" className="font-semibold text-gray-800 hover:underline">
            Sign up now!
          </a>
        </p>
      </div>
    </div>
  );
};

export default Login;
