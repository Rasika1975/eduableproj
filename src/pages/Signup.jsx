import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useApp } from '../contexts/AppContext';
import { motion } from 'framer-motion';
import { Mail, Lock, User, AlertCircle, CheckCircle, Brain, Target, Users, Award } from 'lucide-react';

const SignupPage = () => {
  const [formData, setFormData] = useState({ name: '', email: '', password: '' });
  const [error, setError] = useState('');
  const navigate = useNavigate();
  const { signup } = useApp();

  const handleSubmit = (e) => {
    e.preventDefault();
    setError('');

    // Validation
    if (!formData.name || !formData.email || !formData.password) {
      setError('Please fill in all fields');
      return;
    }

    // Check if user already exists
    const existingUser = localStorage.getItem('eduableUser');
    if (existingUser) {
      const userData = JSON.parse(existingUser);
      if (userData.email === formData.email) {
        setError('An account with this email already exists. Please login.');
        return;
      }
      // Only one user allowed - clear existing user
      localStorage.removeItem('eduableUser');
    }

    // Create new user (always as student)
    signup(formData.name, formData.email, 'student');
    navigate('/disorder-select');
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#C9C4FF] via-[#FFF8F4] to-[#FCE4E6] relative overflow-hidden py-12">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div 
          className="absolute top-10 right-20 w-80 h-80 bg-[#7E8BFF]/10 rounded-full blur-3xl"
          animate={{ 
            scale: [1, 1.3, 1],
            opacity: [0.2, 0.4, 0.2]
          }}
          transition={{ duration: 10, repeat: Infinity }}
        />
        <motion.div 
          className="absolute bottom-10 left-20 w-96 h-96 bg-[#F8B9A8]/10 rounded-full blur-3xl"
          animate={{ 
            scale: [1.3, 1, 1.3],
            opacity: [0.2, 0.4, 0.2]
          }}
          transition={{ duration: 10, repeat: Infinity, delay: 1.5 }}
        />
      </div>

      <div className="relative w-full max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
        {/* Left Side - Benefits */}
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
            Start Your
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#7E8BFF] via-[#FF8A80] to-[#F8B9A8]">
              {' '}Personalized
            </span>
            <br />Learning Adventure
          </h1>
          
          <p className="text-lg text-[#1F1F2E]/70 mb-8 leading-relaxed">
            Join thousands of students who are learning with confidence using our adaptive, AI-powered platform.
          </p>

          <div className="space-y-4">
            <div className="flex items-start gap-4 p-4 bg-white/50 backdrop-blur-sm rounded-2xl border border-white/60">
              <div className="w-12 h-12 bg-[#7E8BFF]/10 rounded-xl flex items-center justify-center flex-shrink-0">
                <Target className="w-6 h-6 text-[#7E8BFF]" />
              </div>
              <div>
                <h3 className="font-bold text-[#1F1F2E] mb-1">Personalized Learning Paths</h3>
                <p className="text-sm text-[#1F1F2E]/70">Adaptive content that grows with your progress</p>
              </div>
            </div>

            <div className="flex items-start gap-4 p-4 bg-white/50 backdrop-blur-sm rounded-2xl border border-white/60">
              <div className="w-12 h-12 bg-[#FF8A80]/10 rounded-xl flex items-center justify-center flex-shrink-0">
                <Users className="w-6 h-6 text-[#FF8A80]" />
              </div>
              <div>
                <h3 className="font-bold text-[#1F1F2E] mb-1">Expert Support</h3>
                <p className="text-sm text-[#1F1F2E]/70">Specialized tools for different learning needs</p>
              </div>
            </div>

            <div className="flex items-start gap-4 p-4 bg-white/50 backdrop-blur-sm rounded-2xl border border-white/60">
              <div className="w-12 h-12 bg-[#F8B9A8]/10 rounded-xl flex items-center justify-center flex-shrink-0">
                <Award className="w-6 h-6 text-[#F8B9A8]" />
              </div>
              <div>
                <h3 className="font-bold text-[#1F1F2E] mb-1">Track Progress</h3>
                <p className="text-sm text-[#1F1F2E]/70">Celebrate achievements and milestones</p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Right Side - Signup Form */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="bg-white/80 backdrop-blur-xl p-8 md:p-10 rounded-3xl shadow-2xl border border-white/50">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-[#1F1F2E] mb-2">Create Account</h2>
              <p className="text-[#1F1F2E]/60">Join the learning revolution today</p>
            </div>
            
            <form onSubmit={handleSubmit} className="space-y-5">
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
                <label className="block text-sm font-semibold text-[#1F1F2E] mb-2">Full Name</label>
                <div className="relative">
                  <User className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-[#1F1F2E]/40" />
                  <input 
                    type="text" 
                    className="w-full pl-12 pr-4 py-3.5 rounded-xl border-2 border-[#1F1F2E]/10 focus:outline-none focus:border-[#7E8BFF] transition-colors bg-white/50"
                    placeholder="John Doe"
                    value={formData.name}
                    onChange={e => setFormData({...formData, name: e.target.value})}
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-semibold text-[#1F1F2E] mb-2">Email Address</label>
                <div className="relative">
                  <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-[#1F1F2E]/40" />
                  <input 
                    type="email" 
                    className="w-full pl-12 pr-4 py-3.5 rounded-xl border-2 border-[#1F1F2E]/10 focus:outline-none focus:border-[#7E8BFF] transition-colors bg-white/50"
                    placeholder="your@email.com"
                    value={formData.email}
                    onChange={e => setFormData({...formData, email: e.target.value})}
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
                    value={formData.password}
                    onChange={e => setFormData({...formData, password: e.target.value})}
                  />
                </div>
                <p className="text-xs text-[#1F1F2E]/50 mt-2">Must be at least 8 characters</p>
              </div>

              <div className="flex items-start gap-2 p-3 bg-[#7E8BFF]/5 rounded-xl">
                <CheckCircle className="w-5 h-5 text-[#7E8BFF] flex-shrink-0 mt-0.5" />
                <p className="text-xs text-[#1F1F2E]/70">
                  By signing up, you agree to our Terms of Service and Privacy Policy
                </p>
              </div>

              <motion.button 
                type="submit"
                className="w-full py-4 bg-gradient-to-r from-[#7E8BFF] to-[#C9C4FF] text-white font-bold rounded-xl shadow-lg hover:shadow-xl transition-all"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                Create Account
              </motion.button>
            </form>

            <div className="mt-8 text-center">
              <p className="text-[#1F1F2E]/60">
                Already have an account?{' '}
                <Link to="/login" className="text-[#7E8BFF] font-bold hover:text-[#7E8BFF]/80 transition-colors">
                  Sign In
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

export default SignupPage;