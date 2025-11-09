import { useState } from 'react';
import { useApp } from '../contexts/AppContext';
import Card from '../components/Card';
import ProgressBar from '../components/ProgressBar';
import { User, TrendingUp, Calendar, MessageSquare, Award, Clock, Star } from 'lucide-react';

const ParentDashboard = () => {
  const [activeTab, setActiveTab] = useState('overview');
  const { userName } = useApp();

  const childProgress = [
    { id: 1, subject: 'Math', progress: 85, grade: 'A', trend: 'up' },
    { id: 2, subject: 'English', progress: 78, grade: 'B+', trend: 'up' },
    { id: 3, subject: 'Science', progress: 92, grade: 'A+', trend: 'up' },
    { id: 4, subject: 'Art', progress: 70, grade: 'B', trend: 'stable' },
  ];

  const recentFeedback = [
    { id: 1, teacher: 'Ms. Sarah Williams', subject: 'Math', message: 'Alex is showing great improvement in fractions!', date: '2 days ago' },
    { id: 2, teacher: 'Mr. John Smith', subject: 'English', message: 'Excellent reading comprehension skills.', date: '5 days ago' },
    { id: 3, teacher: 'Dr. Emily Brown', subject: 'Science', message: 'Very engaged during the plants lesson.', date: '1 week ago' },
  ];

  const upcomingActivities = [
    { id: 1, title: 'Math Quiz', date: 'Tomorrow', time: '10:00 AM' },
    { id: 2, title: 'Science Project Due', date: 'Friday', time: '3:00 PM' },
    { id: 3, title: 'Reading Assessment', date: 'Next Monday', time: '11:00 AM' },
  ];

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 text-gray-800 dark:text-gray-200">
      {/* Page Header */}
      <div className="bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <h1 className="text-3xl font-bold">
            Welcome, {userName}
          </h1>
          <p className="text-gray-500 dark:text-gray-400 mt-1">
            Track Alex's learning journey and progress
          </p>
        </div>
      </div>

      {/* Navigation Tabs */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-6 border-b border-gray-200 dark:border-gray-700">
        <div className="flex gap-4">
          <button
            onClick={() => setActiveTab('overview')}
            className={`px-4 py-3 font-semibold ${activeTab === 'overview' ? 'border-b-2 border-blue-600 text-blue-600 dark:text-blue-400' : 'text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-t-md'}`}
          >
            Overview
          </button>
          <button
            onClick={() => setActiveTab('feedback')}
            className={`px-4 py-3 font-semibold ${activeTab === 'feedback' ? 'border-b-2 border-blue-600 text-blue-600 dark:text-blue-400' : 'text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-t-md'}`}
          >
            Teacher Feedback
          </button>
          <button
            onClick={() => setActiveTab('activities')}
            className={`px-4 py-3 font-semibold ${activeTab === 'activities' ? 'border-b-2 border-blue-600 text-blue-600 dark:text-blue-400' : 'text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-t-md'}`}
          >
            Upcoming Activities
          </button>
        </div>
      </div>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {activeTab === 'overview' && (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2 space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Card>
                  <div className="flex justify-between items-start">
                    <div>
                      <p className="text-gray-500 dark:text-gray-400 text-sm">Overall Progress</p>
                      <h2 className="text-3xl font-bold mt-1">81%</h2>
                    </div>
                    <TrendingUp className="text-gray-400 w-8 h-8" />
                  </div>
                </Card>
                <Card>
                  <div className="flex justify-between items-start">
                    <div>
                      <p className="text-gray-500 dark:text-gray-400 text-sm">Attendance</p>
                      <h2 className="text-3xl font-bold mt-1">95%</h2>
                    </div>
                    <Calendar className="text-gray-400 w-8 h-8" />
                  </div>
                </Card>
                <Card>
                  <div className="flex justify-between items-start">
                    <div>
                      <p className="text-gray-500 dark:text-gray-400 text-sm">Badges Earned</p>
                      <h2 className="text-3xl font-bold mt-1">12</h2>
                    </div>
                    <Award className="text-gray-400 w-8 h-8" />
                  </div>
                </Card>
                <Card>
                  <div className="flex justify-between items-start">
                    <div>
                      <p className="text-gray-500 dark:text-gray-400 text-sm">Study Time</p>
                      <h2 className="text-3xl font-bold mt-1">18h</h2>
                    </div>
                    <Clock className="text-gray-400 w-8 h-8" />
                  </div>
                </Card>
              </div>
              <Card>
                <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-4">Progress by Subject</h2>
                <div className="space-y-4">
                  {childProgress.map((subject) => (
                    <div key={subject.id} className="p-4 bg-gray-50 dark:bg-gray-700/50 rounded-xl">
                      <div className="flex items-center justify-between mb-3">
                        <h3 className="font-semibold text-gray-800 dark:text-white">{subject.subject}</h3>
                        <span className="text-lg font-bold text-gray-800 dark:text-white">{subject.progress}%</span>
                      </div>
                      <ProgressBar progress={subject.progress} color="blue" />
                    </div>
                  ))}
                </div>
              </Card>
            </div>
            <div className="space-y-6">
              <Card>
                <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-4 flex items-center">
                  <MessageSquare className="w-6 h-6 mr-2 text-green-500" />
                  Latest Feedback
                </h2>
                <div className="p-4 bg-gray-50 dark:bg-gray-700 rounded-xl">
                  <h3 className="font-semibold text-gray-800 dark:text-white">{recentFeedback[0].teacher}</h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400 mb-2">{recentFeedback[0].subject}</p>
                  <p className="text-sm text-gray-700 dark:text-gray-300">"{recentFeedback[0].message}"</p>
                </div>
              </Card>
              <Card>
                <h3 className="text-xl font-bold mb-2 flex items-center"><Award className="w-5 h-5 mr-2 text-yellow-500" />Recent Achievements</h3>
                <div className="space-y-2 mt-4">
                  <div className="flex items-center space-x-2 bg-gray-100 dark:bg-gray-700 rounded-lg p-2">
                    <Star className="w-5 h-5 text-yellow-500" />
                    <span className="text-sm">Reading Star Badge</span>
                  </div>
                  <div className="flex items-center space-x-2 bg-gray-100 dark:bg-gray-700 rounded-lg p-2">
                    <User className="w-5 h-5 text-blue-500" />
                    <span className="text-sm">Math Wizard Badge</span>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        )}
      </main>
    </div>
  );
};

export default ParentDashboard;
