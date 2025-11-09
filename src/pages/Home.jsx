import { useNavigate } from 'react-router-dom';
import { useApp } from '../contexts/AppContext';
import { GraduationCap, BookOpen, Users, Shield } from 'lucide-react';

const Home = () => {
  const navigate = useNavigate();
  const { login } = useApp();

  const roles = [
    {
      id: 'student',
      title: 'Student',
      description: 'Access your personalized lessons and activities',
      icon: GraduationCap,
      color: 'from-blue-400 to-blue-600',
      mockName: 'Alex Johnson',
    },
    {
      id: 'teacher',
      title: 'Teacher',
      description: 'Manage students and track their progress',
      icon: BookOpen,
      color: 'from-green-400 to-green-600',
      mockName: 'Ms. Sarah Williams',
    },
    {
      id: 'parent',
      title: 'Parent',
      description: "View your child's learning journey",
      icon: Users,
      color: 'from-yellow-400 to-orange-500',
      mockName: 'John Parent',
    },
    {
      id: 'admin',
      title: 'Admin',
      description: 'Manage system and users',
      icon: Shield,
      color: 'from-purple-400 to-purple-600',
      mockName: 'Administrator',
    },
  ];

  const handleRoleSelect = (role, name) => {
    login(role, name);
    navigate(`/${role}`);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-16 animate-fade-in">
          <div className="flex justify-center mb-6">
            <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center shadow-xl">
              <span className="text-white font-bold text-4xl">E</span>
            </div>
          </div>
          <h1 className="text-5xl md:text-6xl font-bold text-gray-800 dark:text-white mb-4">
            Welcome to EduAble
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Smart, Inclusive, and Accessible Learning for Every Child
          </p>
          <p className="text-lg text-gray-500 dark:text-gray-400 mt-4">
            Making education accessible, engaging, and inclusive for differently abled students
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {roles.map((role, index) => {
            const Icon = role.icon;
            return (
              <button
                key={role.id}
                onClick={() => handleRoleSelect(role.id, role.mockName)}
                className="group relative bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 animate-slide-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className={`w-16 h-16 bg-gradient-to-br ${role.color} rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                  <Icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-2">
                  {role.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 text-sm">
                  {role.description}
                </p>
                <div className="mt-4 text-blue-600 dark:text-blue-400 font-semibold group-hover:translate-x-2 transition-transform inline-block">
                  Login as {role.title} →
                </div>
              </button>
            );
          })}
        </div>

        <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-800 dark:text-white mb-4 text-center">
            Why EduAble?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
            <div className="text-center">
              <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center mx-auto mb-3">
                <span className="text-2xl">🎯</span>
              </div>
              <h3 className="font-semibold text-gray-800 dark:text-white mb-2">Personalized Learning</h3>
              <p className="text-sm text-gray-600 dark:text-gray-300">
                Adaptive content tailored to each student's needs
              </p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-green-100 dark:bg-green-900 rounded-full flex items-center justify-center mx-auto mb-3">
                <span className="text-2xl">♿</span>
              </div>
              <h3 className="font-semibold text-gray-800 dark:text-white mb-2">Fully Accessible</h3>
              <p className="text-sm text-gray-600 dark:text-gray-300">
                Built with accessibility features from the ground up
              </p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-yellow-100 dark:bg-yellow-900 rounded-full flex items-center justify-center mx-auto mb-3">
                <span className="text-2xl">🎮</span>
              </div>
              <h3 className="font-semibold text-gray-800 dark:text-white mb-2">Engaging & Fun</h3>
              <p className="text-sm text-gray-600 dark:text-gray-300">
                Gamified learning to keep students motivated
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
