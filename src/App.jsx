import { BrowserRouter as Router, Routes, Route, Navigate, useLocation } from 'react-router-dom';
import { AppProvider, useApp } from './contexts/AppContext';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import StudentDashboard from './pages/StudentDashboard';
import TeacherDashboard from './pages/TeacherDashboard';
import ParentDashboard from './pages/ParentDashboard';
import AdminDashboard from './pages/AdminDashboard';
import LoginPage from './LoginPage';
import SignupPage from './SignupPage';
import Assessment from './test/Assessment';

const ProtectedRoute = ({ children, allowedRole }) => {
  const { userRole } = useApp();

  if (!userRole) {
    return <Navigate to="/login" replace />;
  }

  if (userRole !== allowedRole) {
    return <Navigate to={`/${userRole}`} replace />;
  }

  return children;
};

const AppContent = () => {
  const { fontSize, darkMode, highContrast } = useApp();
  const location = useLocation();

  const fontSizeClasses = {
    normal: 'text-base',
    large: 'text-lg',
    xlarge: 'text-xl',
  };

  return (
    <div
      className={`
        ${fontSizeClasses[fontSize]}
        ${darkMode ? 'dark' : ''}
        ${highContrast ? 'contrast-high' : ''}
      `}
    >
      <div className="min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
        {location.pathname !== '/' && location.pathname !== '/login' && location.pathname !== '/signup' && location.pathname !== '/assessment' && <Navbar />}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/signup" element={<SignupPage />} />
          <Route path="/assessment" element={<Assessment />} />
          <Route
            path="/student"
            element={
              <ProtectedRoute allowedRole="student">
                <StudentDashboard />
              </ProtectedRoute>
            }
          />
          <Route
            path="/teacher"
            element={
              <ProtectedRoute allowedRole="teacher">
                <TeacherDashboard />
              </ProtectedRoute>
            }
          />
          <Route
            path="/parent"
            element={
              <ProtectedRoute allowedRole="parent">
                <ParentDashboard />
              </ProtectedRoute>
            }
          />
          <Route
            path="/admin"
            element={
              <ProtectedRoute allowedRole="admin">
                <AdminDashboard />
              </ProtectedRoute>
            }
          />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </div>
    </div>
  );
};

function App() {
  return (
    <Router>
      <AppProvider>
        <AppContent />
      </AppProvider>
    </Router>
  );
}

export default App;
