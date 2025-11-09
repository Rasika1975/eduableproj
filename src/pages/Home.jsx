import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
      <div className="text-center p-8">
        <div className="flex justify-center mb-6">
          <div className="w-24 h-24 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center shadow-2xl">
            <span className="text-white font-bold text-5xl">E</span>
          </div>
        </div>
        <h1 className="text-5xl md:text-7xl font-bold text-gray-800 dark:text-white mb-4 animate-fade-in">
          Welcome to EduAble
        </h1>
        <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto mb-10 animate-fade-in-delay">
          Smart, Inclusive, and Accessible Learning for Every Child
        </p>
        <div className="flex justify-center items-center space-x-4">
          <Link
            to="/login"
            className="px-8 py-3 bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 transition-transform transform hover:scale-105"
          >
            Login
          </Link>
          <Link
            to="/signup"
            className="px-8 py-3 bg-white text-blue-600 font-semibold rounded-lg shadow-md hover:bg-gray-100 transition-transform transform hover:scale-105"
          >
            Sign Up
          </Link>
        </div>
        <div className="mt-16 animate-slide-up">
            <h2 className="text-3xl font-bold text-gray-800 dark:text-white mb-4 text-center">
                Why EduAble?
            </h2>
            <p className="text-lg text-gray-500 dark:text-gray-400 max-w-2xl mx-auto">
                We are making education accessible, engaging, and inclusive for differently abled students through personalized learning paths and gamified experiences.
            </p>
            </div>
      </div>
    </div>
  );
};

export default Home;
