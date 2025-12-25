import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useApp } from '../contexts/AppContext';
import { motion } from 'framer-motion';
import { Mail, Lock, AlertCircle, Sparkles, BookOpen, Brain } from 'lucide-react';

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();
  const { login } = useApp();

  const handleLogin = (e) => {
    e.preventDefault();
    setError('');
    
    // Simple validation
    if (!email || !password) {
      setError('Please enter both email and password');
      return;
    }

    // Check if user exists in localStorage
    const storedUser = localStorage.getItem('eduableUser');
    if (!storedUser) {
      setError('No account found. Please sign up first.');
      return;
    }

    const userData = JSON.parse(storedUser);
    if (userData.email !== email) {
      setError('Invalid email or password');
      return;
    }

    // Login successful
    login(userData.role, userData.name, userData.email);
    navigate('/disorder-select');
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#FCE4E6] via-[#FFF8F4] to-[#C9C4FF] relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div 
          className="absolute top-20 left-10 w-72 h-72 bg-[#7E8BFF]/10 rounded-full blur-3xl"
          animate={{ 
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3]
          }}
          transition={{ duration: 8, repeat: Infinity }}
        />
        <motion.div 
          className="absolute bottom-20 right-10 w-96 h-96 bg-[#FF8A80]/10 rounded-full blur-3xl"
          animate={{ 
            scale: [1.2, 1, 1.2],
            opacity: [0.3, 0.5, 0.3]
          }}
          transition={{ duration: 8, repeat: Infinity, delay: 1 }}
        />
      </div>

      <div className="relative w-full max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
        {/* Left Side - Branding */}
        <motion.div 
          className="hidden md:block"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="flex items-center gap-3 mb-6">
            <div className="w-14 h-14 bg-gradient-to-br from-[#7E8BFF] to-[#C9C4FF] rounded-2xl flex items-center justify-center shadow-lg">
              <Brain className="w-8 h-8 text-white" />
            </div>
            <span className="text-4xl font-bold text-[#1F1F2E]">EduAble</span>
          </div>
          
          <h1 className="text-4xl md:text-5xl font-bold text-[#1F1F2E] mb-6 leading-tight">
            Welcome Back to Your
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#7E8BFF] via-[#FF8A80] to-[#F8B9A8]">
              {' '}Learning Journey
            </span>
          </h1>
          
          <p className="text-lg text-[#1F1F2E]/70 mb-8 leading-relaxed">
            Continue your personalized learning experience with adaptive tools designed for your unique needs.
          </p>

          <div className="space-y-4">
            <div className="flex items-center gap-3 text-[#1F1F2E]/80">
              <div className="w-10 h-10 bg-[#7E8BFF]/10 rounded-full flex items-center justify-center">
                <BookOpen className="w-5 h-5 text-[#7E8BFF]" />
              </div>
              <span>Personalized learning paths</span>
            </div>
            <div className="flex items-center gap-3 text-[#1F1F2E]/80">
              <div className="w-10 h-10 bg-[#FF8A80]/10 rounded-full flex items-center justify-center">
                <Sparkles className="w-5 h-5 text-[#FF8A80]" />
              </div>
              <span>AI-powered assistive tools</span>
            </div>
          </div>
        </motion.div>

        {/* Right Side - Login Form */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="bg-white/80 backdrop-blur-xl p-8 md:p-10 rounded-3xl shadow-2xl border border-white/50">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-[#1F1F2E] mb-2">Sign In</h2>
              <p className="text-[#1F1F2E]/60">Enter your credentials to continue</p>
            </div>
            
            <form onSubmit={handleLogin} className="space-y-5">
              {error && (
                <motion.div 
                  className="flex items-center gap-2 text-red-600 text-sm bg-red-50 p-3 rounded-xl border border-red-200"
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                >
                  <AlertCircle className="w-4 h-4" />
                  {error}
                </motion.div>
              )}
              
              <div>
                <label className="block text-sm font-semibold text-[#1F1F2E] mb-2">Email Address</label>
                <div className="relative">
                  <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-[#1F1F2E]/40" />
                  <input 
                    type="email" 
                    className="w-full pl-12 pr-4 py-3.5 rounded-xl border-2 border-[#1F1F2E]/10 focus:outline-none focus:border-[#7E8BFF] transition-colors bg-white/50"
                    placeholder="your@email.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
              </div>
              
              <div>
                <label className="block text-sm font-semibold text-[#1F1F2E] mb-2">Password</label>
                <div className="relative">
                  <Lock className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-[#1F1F2E]/40" />
                  <input 
                    type="password" 
                    className="w-full pl-12 pr-4 py-3.5 rounded-xl border-2 border-[#1F1F2E]/10 focus:outline-none focus:border-[#7E8BFF] transition-colors bg-white/50"
                    placeholder="••••••••"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </div>
              </div>

              <div className="flex items-center justify-between text-sm">
                <label className="flex items-center gap-2 cursor-pointer">
                  <input type="checkbox" className="w-4 h-4 rounded border-[#1F1F2E]/20 text-[#7E8BFF] focus:ring-[#7E8BFF]" />
                  <span className="text-[#1F1F2E]/60">Remember me</span>
                </label>
                <a href="#" className="text-[#7E8BFF] hover:text-[#7E8BFF]/80 font-semibold">Forgot password?</a>
              </div>

              <motion.button 
                type="submit"
                className="w-full py-4 bg-gradient-to-r from-[#7E8BFF] to-[#C9C4FF] text-white font-bold rounded-xl shadow-lg hover:shadow-xl transition-all"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                Sign In
              </motion.button>
            </form>

            <div className="mt-8 text-center">
              <p className="text-[#1F1F2E]/60">
                Don't have an account?{' '}
                <Link to="/signup" className="text-[#7E8BFF] font-bold hover:text-[#7E8BFF]/80 transition-colors">
                  Create Account
                </Link>
              </p>
            </div>

            <div className="mt-6 pt-6 border-t border-[#1F1F2E]/10 text-center">
              <Link 
                to="/" 
                className="text-[#1F1F2E]/60 hover:text-[#1F1F2E] transition-colors text-sm font-medium"
              >
                ← Back to Home
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default LoginPage;