import { createContext, useContext, useState } from 'react';

const AppContext = createContext();

export const useApp = () => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error('useApp must be used within AppProvider');
  }
  return context;
};

export const AppProvider = ({ children }) => {
  const [userRole, setUserRole] = useState(null);
  const [userName, setUserName] = useState('');
  const [fontSize, setFontSize] = useState('normal');
  const [darkMode, setDarkMode] = useState(false);
  const [highContrast, setHighContrast] = useState(false);

  const increaseFontSize = () => {
    setFontSize(prev => {
      if (prev === 'normal') return 'large';
      if (prev === 'large') return 'xlarge';
      return 'xlarge';
    });
  };

  const decreaseFontSize = () => {
    setFontSize(prev => {
      if (prev === 'xlarge') return 'large';
      if (prev === 'large') return 'normal';
      return 'normal';
    });
  };

  const toggleDarkMode = () => setDarkMode(prev => !prev);
  const toggleHighContrast = () => setHighContrast(prev => !prev);

  const login = (role, name) => {
    setUserRole(role);
    setUserName(name);
  };

  const logout = () => {
    setUserRole(null);
    setUserName('');
  };

  const value = {
    userRole,
    userName,
    fontSize,
    darkMode,
    highContrast,
    increaseFontSize,
    decreaseFontSize,
    toggleDarkMode,
    toggleHighContrast,
    login,
    logout,
  };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};
