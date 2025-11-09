import { useApp } from '../contexts/AppContext';
import Card from '../components/Card';
import ProgressBar from '../components/ProgressBar';
import { BookOpen, Trophy, Target, Star, CheckCircle } from 'lucide-react';

const StudentDashboard = () => {
  const { userName } = useApp();

  const lessons = [
    { id: 1, title: 'Math: Addition & Subtraction', progress: 75, color: 'blue', icon: '🔢' },
    { id: 2, title: 'English: Reading Comprehension', progress: 60, color: 'green', icon: '📚' },
    { id: 3, title: 'Science: Plants & Animals', progress: 90, color: 'yellow', icon: '🌱' },
    { id: 4, title: 'Art: Colors & Shapes', progress: 45, color: 'pink', icon: '🎨' },
  ];

  const achievements = [
    { id: 1, title: 'Quick Learner', icon: '⚡', unlocked: true },
    { id: 2, title: 'Math Wizard', icon: '🧙', unlocked: true },
    { id: 3, title: 'Reading Star', icon: '⭐', unlocked: true },
    { id: 4, title: 'Science Explorer', icon: '🔬', unlocked: false },
    { id: 5, title: 'Perfect Week', icon: '🏆', unlocked: false },
    { id: 6, title: 'Creative Mind', icon: '💡', unlocked: false },
  ];

  const recentActivities = [
    { id: 1, title: 'Completed Math Quiz', time: '2 hours ago', type: 'success' },
    { id: 2, title: 'Started English Lesson', time: 'Yesterday', type: 'info' },
    { id: 3, title: 'Earned Reading Star Badge', time: '2 days ago', type: 'achievement' },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 dark:text-white mb-2">
            Hello, {userName}! 👋
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-300">
            Ready to learn something amazing today?
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <Card className="bg-gradient-to-br from-blue-500 to-blue-600 text-white">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-blue-100 text-sm mb-1">Lessons Completed</p>
                <p className="text-3xl font-bold">12</p>
              </div>
              <BookOpen className="w-12 h-12 text-blue-200" />
            </div>
          </Card>

          <Card className="bg-gradient-to-br from-green-500 to-green-600 text-white">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-green-100 text-sm mb-1">Badges Earned</p>
                <p className="text-3xl font-bold">8</p>
              </div>
              <Trophy className="w-12 h-12 text-green-200" />
            </div>
          </Card>

          <Card className="bg-gradient-to-br from-yellow-500 to-orange-500 text-white">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-yellow-100 text-sm mb-1">Current Streak</p>
                <p className="text-3xl font-bold">5 Days</p>
              </div>
              <Target className="w-12 h-12 text-yellow-200" />
            </div>
          </Card>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-6">
            <Card>
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-bold text-gray-800 dark:text-white flex items-center">
                  <BookOpen className="w-6 h-6 mr-2 text-blue-500" />
                  My Lessons
                </h2>
              </div>
              <div className="space-y-4">
                {lessons.map((lesson) => (
                  <div
                    key={lesson.id}
                    className="p-4 bg-gray-50 dark:bg-gray-700 rounded-xl hover:shadow-md transition-shadow cursor-pointer"
                  >
                    <div className="flex items-center justify-between mb-3">
                      <div className="flex items-center space-x-3">
                        <span className="text-3xl">{lesson.icon}</span>
                        <div>
                          <h3 className="font-semibold text-gray-800 dark:text-white">
                            {lesson.title}
                          </h3>
                          <p className="text-sm text-gray-500 dark:text-gray-400">
                            {lesson.progress}% Complete
                          </p>
                        </div>
                      </div>
                      <button className="px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded-lg text-sm font-medium transition">
                        Continue
                      </button>
                    </div>
                    <ProgressBar progress={lesson.progress} color={lesson.color} />
                  </div>
                ))}
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
                {achievements.map((achievement) => (
                  <div
                    key={achievement.id}
                    className={`p-4 rounded-xl text-center transition-all ${
                      achievement.unlocked
                        ? 'bg-gradient-to-br from-yellow-100 to-yellow-200 dark:from-yellow-900 dark:to-yellow-800 shadow-md'
                        : 'bg-gray-100 dark:bg-gray-700 opacity-50'
                    }`}
                  >
                    <div className="text-3xl mb-2">{achievement.icon}</div>
                    <p className="text-xs font-medium text-gray-800 dark:text-white">
                      {achievement.title}
                    </p>
                    {achievement.unlocked && (
                      <Star className="w-4 h-4 text-yellow-600 mx-auto mt-1" />
                    )}
                  </div>
                ))}
              </div>
            </Card>

            <Card className="bg-gradient-to-br from-purple-500 to-pink-500 text-white">
              <h3 className="text-xl font-bold mb-2">Daily Goal</h3>
              <p className="text-sm text-purple-100 mb-4">
                Complete 3 lessons today to maintain your streak!
              </p>
              <div className="mb-2">
                <ProgressBar progress={66} color="purple" />
              </div>
              <p className="text-sm font-medium">2 of 3 lessons completed</p>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StudentDashboard;
