import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useApp } from './contexts/AppContext';

// Mock users database
const mockUsers = {
  'student@eduable.com': { password: 'password', role: 'student', name: 'Alex Johnson' },
  'teacher@eduable.com': { password: 'password', role: 'teacher', name: 'Ms. Sarah Williams' },
  'parent@eduable.com': { password: 'password', role: 'parent', name: 'John Parent' },
  'admin@eduable.com': { password: 'password', role: 'admin', name: 'Administrator' },
};

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();
  const { login } = useApp();

  const handleLogin = (e) => {
    e.preventDefault();
    const user = mockUsers[email];
    if (user && user.password === password) {
      login(user.role, user.name);
      navigate(`/${user.role}`);
    } else {
      setError('Invalid email or password');
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 dark:bg-gray-900">
      <div className="max-w-md w-full bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-8 m-4">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-800 dark:text-white">Login to EduAble</h1>
          <p className="text-gray-600 dark:text-gray-300">Welcome back!</p>
        </div>
        <form onSubmit={handleLogin} className="space-y-6">
          {error && <p className="text-red-500 text-sm text-center">{error}</p>}
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Email Address</label>
            <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white focus:ring-2 focus:ring-blue-500" placeholder="you@example.com" />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Password</label>
            <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} required className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white focus:ring-2 focus:ring-blue-500" placeholder="••••••••" />
          </div>
          <button type="submit" className="w-full px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium transition">
            Login
          </button>
        </form>
        <p className="text-center text-sm text-gray-600 dark:text-gray-400 mt-6">
          Don't have an account?{' '}
          <Link to="/signup" className="font-medium text-blue-600 hover:text-blue-500">
            Sign up
          </Link>
        </p>
      </div>
    </div>
  );
};

export default LoginPage;