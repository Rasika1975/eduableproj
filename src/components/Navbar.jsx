import { useState } from 'react';
import { useNavigate, useLocation, Link } from 'react-router-dom';
import { useApp } from '../contexts/AppContext';
import { Home, LogOut, Menu, X, ChevronDown } from 'lucide-react';

const Navbar = () => {
  const { userRole, userName, logout } = useApp();
  const navigate = useNavigate();
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);

  const handleLogout = () => {
    logout();
    navigate('/');
    setIsOpen(false);
  };

  const scrollToSection = (id) => {
    if (location.pathname !== '/') {
      navigate('/');
      setTimeout(() => {
        const element = document.getElementById(id);
        if (element) element.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    } else {
      const element = document.getElementById(id);
      if (element) element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsOpen(false);
  };

  const publicLinks = [
    { name: 'About Platform', id: 'about' },
    { name: 'Disabilities', id: 'disabilities' },
    { name: 'How it Works', id: 'features' },
    { name: 'Parents Info', id: 'contact' },
  ];

  const disabilitiesList = [
    { title: "Dyslexia", desc: "Reading & spelling" },
    { title: "ADHD", desc: "Focus & attention" },
    { title: "Autism (ASD)", desc: "Social interaction" },
    { title: "Visually Impaired", desc: "Vision support" },
    { title: "Hearing Impaired", desc: "Hearing support" },
    { title: "Speech Disorders", desc: "Communication" },
    { title: "Learning Disabilities", desc: "Math/Writing" },
    { title: "Physical Disabilities", desc: "Mobility" },
    { title: "Mental Health", desc: "Anxiety & stress" },
  ];

  return (
    <nav className="bg-white dark:bg-gray-800 shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center space-x-4">
            <div 
              className="flex items-center space-x-2 cursor-pointer" 
              onClick={() => navigate('/')}
            >
              <div className="w-10 h-10 bg-gradient-to-br from-blue-400 to-purple-500 rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-xl">E</span>
              </div>
              <span className="text-2xl font-bold text-gray-800 dark:text-white">
                EduAble
              </span>
            </div>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-6">
            {!userRole ? (
              <>
                {publicLinks.map((link) => (
                  link.id === 'disabilities' ? (
                    <div key={link.name} className="relative group">
                      <button
                        onClick={() => scrollToSection(link.id)}
                        className="flex items-center text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 font-medium transition"
                      >
                        {link.name}
                        <ChevronDown className="w-4 h-4 ml-1" />
                      </button>
                      {/* Dropdown Menu */}
                      <div className="absolute left-0 mt-2 w-64 bg-white dark:bg-gray-800 rounded-xl shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 border border-gray-100 dark:border-gray-700 p-2 grid grid-cols-1 gap-1 z-50">
                        {disabilitiesList.map((d) => (
                          <div key={d.title} className="px-3 py-2 hover:bg-gray-50 dark:hover:bg-gray-700 rounded-lg cursor-default">
                            <p className="text-sm font-semibold text-gray-800 dark:text-white">{d.title}</p>
                            <p className="text-xs text-gray-500 dark:text-gray-400">{d.desc}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                  ) : (
                    <button
                      key={link.name}
                      onClick={() => scrollToSection(link.id)}
                      className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 font-medium transition"
                    >
                      {link.name}
                    </button>
                  )
                ))}
                <div className="h-6 w-px bg-gray-300 dark:bg-gray-600 mx-2"></div>
                <Link to="/login" className="px-4 py-2 text-blue-600 font-medium hover:bg-blue-50 dark:hover:bg-gray-700 rounded-lg transition">
                  Login
                </Link>
                <Link to="/signup" className="px-4 py-2 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition shadow-md">
                  Sign Up
                </Link>
              </>
            ) : (
              <>
                <div className="text-sm text-gray-600 dark:text-gray-300">
                  Welcome, <span className="font-semibold text-blue-600 dark:text-blue-400">{userName}</span>
                </div>
                <button
                  onClick={() => navigate(`/${userRole}`)}
                  className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition"
                  aria-label="Dashboard"
                >
                  <Home className="w-5 h-5 text-gray-600 dark:text-gray-300" />
                </button>
                <button
                  onClick={handleLogout}
                  className="flex items-center space-x-2 px-4 py-2 bg-red-500 hover:bg-red-600 text-white rounded-lg transition shadow-sm"
                  aria-label="Logout"
                >
                  <LogOut className="w-4 h-4" />
                  <span>Logout</span>
                </button>
              </>
            )}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button onClick={() => setIsOpen(!isOpen)} className="text-gray-600 dark:text-gray-300">
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white dark:bg-gray-800 border-t border-gray-200 dark:border-gray-700">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {!userRole ? (
              <>
                {publicLinks.map((link) => (
                  <button
                    key={link.name}
                    onClick={() => scrollToSection(link.id)}
                    className="block w-full text-left px-3 py-2 rounded-md text-base font-medium text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700"
                  >
                    {link.name}
                  </button>
                ))}
                <Link to="/login" onClick={() => setIsOpen(false)} className="block w-full text-left px-3 py-2 text-blue-600 font-medium">Login</Link>
                <Link to="/signup" onClick={() => setIsOpen(false)} className="block w-full text-left px-3 py-2 text-blue-600 font-medium">Sign Up</Link>
              </>
            ) : (
              <button onClick={handleLogout} className="block w-full text-left px-3 py-2 text-red-600 font-medium">Logout</button>
            )}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
