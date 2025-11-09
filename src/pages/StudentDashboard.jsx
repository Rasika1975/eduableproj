import { useState } from 'react';
import { useApp } from '../contexts/AppContext';
import Card from '../components/Card';
import ProgressBar from '../components/ProgressBar';
import { BookOpen, Trophy, Target, Star, CheckCircle, Zap, Bot, Book, Atom, Award, Palette } from 'lucide-react';
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, Cell } from 'recharts';

const StudentDashboard = () => {
  const [activeTab, setActiveTab] = useState('lessons');
  const { userName } = useApp();

  const lessons = [
    { id: 1, title: 'Math: Addition & Subtraction', progress: 75, color: 'blue', icon: Bot },
    { id: 2, title: 'English: Reading Comprehension', progress: 60, color: 'green', icon: Book },
    { id: 3, title: 'Science: Plants & Animals', progress: 90, color: 'yellow', icon: Atom },
    { id: 4, title: 'Art: Colors & Shapes', progress: 45, color: 'pink', icon: Palette },
  ];

  const achievements = [
    { id: 1, title: 'Quick Learner', icon: Zap, unlocked: true },
    { id: 2, title: 'Math Wizard', icon: Bot, unlocked: true },
    { id: 3, title: 'Reading Star', icon: Star, unlocked: true },
    { id: 4, 'title': 'Science Explorer', icon: Atom, unlocked: false },
    { id: 5, 'title': 'Perfect Week', icon: Award, unlocked: false },
    { id: 6, 'title': 'Creative Mind', icon: Palette, unlocked: false },
  ];

  const recentActivities = [
    { id: 1, title: 'Completed Math Quiz', time: '2 hours ago', type: 'success' },
    { id: 2, title: 'Started English Lesson', time: 'Yesterday', type: 'info' },
    { id: 3, title: 'Earned Reading Star Badge', time: '2 days ago', type: 'achievement' },
  ];

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 text-gray-800 dark:text-gray-200">
      {/* Page Header */}
      <div className="bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <h1 className="text-3xl font-bold">
            Hello, {userName}!
          </h1>
          <p className="text-gray-500 dark:text-gray-400 mt-1">
            Ready to learn something amazing today?
          </p>
        </div>
      </div>

      {/* Navigation Tabs */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-6 border-b border-gray-200 dark:border-gray-700">
        <div className="flex gap-4">
          <button
            onClick={() => setActiveTab('lessons')}
            className={`px-4 py-3 font-semibold ${activeTab === 'lessons' ? 'border-b-2 border-blue-600 text-blue-600 dark:text-blue-400' : 'text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-t-md'}`}
          >
            My Lessons
          </button>
          <button
            onClick={() => setActiveTab('achievements')}
            className={`px-4 py-3 font-semibold ${activeTab === 'achievements' ? 'border-b-2 border-blue-600 text-blue-600 dark:text-blue-400' : 'text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-t-md'}`}
          >
            Achievements
          </button>
          <button
            onClick={() => setActiveTab('activities')}
            className={`px-4 py-3 font-semibold ${activeTab === 'activities' ? 'border-b-2 border-blue-600 text-blue-600 dark:text-blue-400' : 'text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-t-md'}`}
          >
            Recent Activities
          </button>
        </div>
      </div>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {activeTab === 'lessons' && (
          <div className="space-y-8">
            {/* Main Stats */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Card>
                <div className="flex justify-between items-start">
                  <div>
                    <p className="text-gray-500 dark:text-gray-400 text-sm">Lessons Completed</p>
                    <h2 className="text-3xl font-bold mt-1">12</h2>
                  </div>
                  <BookOpen className="text-gray-400 w-8 h-8" />
                </div>
              </Card>
              <Card>
                <div className="flex justify-between items-start">
                  <div>
                    <p className="text-gray-500 dark:text-gray-400 text-sm">Badges Earned</p>
                    <h2 className="text-3xl font-bold mt-1">8</h2>
                  </div>
                  <Trophy className="text-gray-400 w-8 h-8" />
                </div>
              </Card>
              <Card>
                <div className="flex justify-between items-start">
                  <div>
                    <p className="text-gray-500 dark:text-gray-400 text-sm">Current Streak</p>
                    <h2 className="text-3xl font-bold mt-1">5 Days</h2>
                  </div>
                  <Target className="text-gray-400 w-8 h-8" />
                </div>
              </Card>
            </div>
            
            {/* Main Content Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-6">
            <Card>
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-bold text-gray-800 dark:text-white flex items-center">
                  <BookOpen className="w-6 h-6 mr-2 text-blue-500" />
                  My Lessons
                </h2>
                <button className="px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded-lg text-sm font-medium transition">
                  View All
                </button>
              </div>
              <div style={{ width: '100%', height: 250 }}>
                <ResponsiveContainer>
                  <BarChart
                    data={lessons}
                    layout="vertical"
                    margin={{ top: 5, right: 20, left: 20, bottom: 5 }}
                  >
                    <XAxis type="number" domain={[0, 100]} hide />
                    <YAxis dataKey="title" type="category" width={120} tickLine={false} axisLine={false} stroke="#6b7280" fontSize={12} />
                    <Tooltip cursor={{fill: 'rgba(243, 244, 246, 0.5)'}} contentStyle={{ backgroundColor: 'white', border: '1px solid #e2e8f0', borderRadius: '0.5rem' }} />
                    <Bar dataKey="progress" barSize={20} radius={[0, 10, 10, 0]} fill="#3b82f6" />
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </Card>

            <Card>
              <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-4 flex items-center">
                <CheckCircle className="w-6 h-6 mr-2 text-green-500" />
                Recent Activities
              </h2>
              <div className="space-y-3">
                {recentActivities.map((activity) => (
                  <div
                    key={activity.id}
                    className="flex items-center space-x-3 p-3 bg-gray-50 dark:bg-gray-700 rounded-lg"
                  >
                    <div className={`w-2 h-2 rounded-full ${
                      activity.type === 'success' ? 'bg-green-500' :
                      activity.type === 'achievement' ? 'bg-yellow-500' : 'bg-blue-500'
                    }`} />
                    <div className="flex-1">
                      <p className="text-sm font-medium text-gray-800 dark:text-white">
                        {activity.title}
                      </p>
                      <p className="text-xs text-gray-500 dark:text-gray-400">
                        {activity.time}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </Card>
          </div>

          <div className="space-y-6">
            <Card>
              <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-4 flex items-center">
                <Trophy className="w-6 h-6 mr-2 text-yellow-500" />
                Achievements
              </h2>
              <div className="grid grid-cols-2 gap-3">
                {achievements.map((achievement) => {
                  const Icon = achievement.icon;
                  return (<div
                    key={achievement.id}
                    className={`p-4 rounded-xl text-center transition-all ${
                      achievement.unlocked
                        ? 'bg-yellow-100 dark:bg-yellow-900/50 border border-yellow-300 dark:border-yellow-700'
                        : 'bg-gray-100 dark:bg-gray-700 opacity-50'
                    }`}
                  >
                    <Icon className={`w-8 h-8 mx-auto mb-2 ${achievement.unlocked ? 'text-yellow-600 dark:text-yellow-400' : 'text-gray-400'}`} />
                    <p className="text-xs font-medium text-gray-800 dark:text-white">
                      {achievement.title}
                    </p>
                    {achievement.unlocked && (
                      <CheckCircle className="w-4 h-4 text-green-600 mx-auto mt-1" />
                    )}
                  </div>
                )})}
              </div>
            </Card>

            <Card>
              <h3 className="text-xl font-bold mb-2">Daily Goal</h3>
              <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">
                Complete 3 lessons today to maintain your streak!
              </p>
              <div className="mb-2">
                <ProgressBar progress={66} color="blue" />
              </div>
              <p className="text-sm font-medium">2 of 3 lessons completed</p>
            </Card>
          </div>
        </div>
          </div>
        )}

        {activeTab === 'achievements' && (
          <Card>
            <h2 className="text-xl font-bold">My Achievements</h2>
            <p className="mt-4 text-gray-600 dark:text-gray-400">Your badges and awards will be displayed here.</p>
          </Card>
        )}

        {activeTab === 'activities' && (
          <Card>
            <h2 className="text-xl font-bold">Recent Activities</h2>
            <p className="mt-4 text-gray-600 dark:text-gray-400">A log of your recent activities will be shown here.</p>
          </Card>
        )}
      </main>
    </div>
  );
};

export default StudentDashboard;
