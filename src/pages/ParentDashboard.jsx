import { useApp } from '../contexts/AppContext';
import Card from '../components/Card';
import ProgressBar from '../components/ProgressBar';
import { User, TrendingUp, Calendar, MessageSquare, Award, Clock } from 'lucide-react';

const ParentDashboard = () => {
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
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-yellow-50 to-green-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 dark:text-white mb-2">
            Welcome, {userName} 👨‍👩‍👧
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-300">
            Track Alex's learning journey and progress
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <Card className="bg-gradient-to-br from-blue-500 to-blue-600 text-white">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-blue-100 text-sm mb-1">Overall Progress</p>
                <p className="text-3xl font-bold">81%</p>
              </div>
              <TrendingUp className="w-12 h-12 text-blue-200" />
            </div>
          </Card>

          <Card className="bg-gradient-to-br from-green-500 to-green-600 text-white">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-green-100 text-sm mb-1">Attendance</p>
                <p className="text-3xl font-bold">95%</p>
              </div>
              <Calendar className="w-12 h-12 text-green-200" />
            </div>
          </Card>

          <Card className="bg-gradient-to-br from-yellow-500 to-orange-500 text-white">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-yellow-100 text-sm mb-1">Badges Earned</p>
                <p className="text-3xl font-bold">12</p>
              </div>
              <Award className="w-12 h-12 text-yellow-200" />
            </div>
          </Card>

          <Card className="bg-gradient-to-br from-purple-500 to-purple-600 text-white">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-purple-100 text-sm mb-1">Study Time</p>
                <p className="text-3xl font-bold">18h</p>
              </div>
              <Clock className="w-12 h-12 text-purple-200" />
            </div>
          </Card>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-6">
            <Card>
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-bold text-gray-800 dark:text-white flex items-center">
                  <User className="w-6 h-6 mr-2 text-blue-500" />
                  Alex's Progress by Subject
                </h2>
              </div>
              <div className="space-y-4">
                {childProgress.map((subject) => (
                  <div
                    key={subject.id}
                    className="p-4 bg-gray-50 dark:bg-gray-700 rounded-xl"
                  >
                    <div className="flex items-center justify-between mb-3">
                      <div className="flex items-center space-x-3">
                        <div className="w-12 h-12 bg-gradient-to-br from-blue-400 to-purple-500 rounded-full flex items-center justify-center text-white font-bold text-lg">
                          {subject.subject.charAt(0)}
                        </div>
                        <div>
                          <h3 className="font-semibold text-gray-800 dark:text-white">
                            {subject.subject}
                          </h3>
                          <p className="text-sm text-gray-500 dark:text-gray-400">
                            Current Grade: {subject.grade}
                          </p>
                        </div>
                      </div>
                      <div className="flex items-center space-x-2">
                        <span className="text-2xl font-bold text-gray-800 dark:text-white">
                          {subject.progress}%
                        </span>
                        {subject.trend === 'up' && (
                          <TrendingUp className="w-5 h-5 text-green-500" />
                        )}
                      </div>
                    </div>
                    <ProgressBar progress={subject.progress} color="blue" />
                  </div>
                ))}
              </div>
            </Card>

            <Card>
              <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-4 flex items-center">
                <MessageSquare className="w-6 h-6 mr-2 text-green-500" />
                Teacher Feedback
              </h2>
              <div className="space-y-4">
                {recentFeedback.map((feedback) => (
                  <div
                    key={feedback.id}
                    className="p-4 bg-gray-50 dark:bg-gray-700 rounded-xl"
                  >
                    <div className="flex items-start justify-between mb-2">
                      <div>
                        <h3 className="font-semibold text-gray-800 dark:text-white">
                          {feedback.teacher}
                        </h3>
                        <p className="text-sm text-gray-500 dark:text-gray-400">
                          {feedback.subject}
                        </p>
                      </div>
                      <span className="text-xs text-gray-500 dark:text-gray-400">
                        {feedback.date}
                      </span>
                    </div>
                    <p className="text-sm text-gray-700 dark:text-gray-300 bg-white dark:bg-gray-600 p-3 rounded-lg">
                      "{feedback.message}"
                    </p>
                  </div>
                ))}
              </div>
            </Card>
          </div>

          <div className="space-y-6">
            <Card>
              <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-4 flex items-center">
                <Calendar className="w-6 h-6 mr-2 text-blue-500" />
                Upcoming Activities
              </h2>
              <div className="space-y-3">
                {upcomingActivities.map((activity) => (
                  <div
                    key={activity.id}
                    className="p-3 bg-gradient-to-br from-blue-50 to-purple-50 dark:from-gray-700 dark:to-gray-600 rounded-lg"
                  >
                    <h3 className="font-semibold text-gray-800 dark:text-white mb-1">
                      {activity.title}
                    </h3>
                    <p className="text-sm text-gray-600 dark:text-gray-300">
                      {activity.date} at {activity.time}
                    </p>
                  </div>
                ))}
              </div>
            </Card>

            <Card className="bg-gradient-to-br from-green-500 to-green-600 text-white">
              <h3 className="text-xl font-bold mb-2">🎉 Recent Achievements</h3>
              <div className="space-y-2 mt-4">
                <div className="flex items-center space-x-2 bg-white bg-opacity-20 rounded-lg p-2">
                  <span className="text-2xl">⭐</span>
                  <span className="text-sm">Reading Star Badge</span>
                </div>
                <div className="flex items-center space-x-2 bg-white bg-opacity-20 rounded-lg p-2">
                  <span className="text-2xl">🧙</span>
                  <span className="text-sm">Math Wizard Badge</span>
                </div>
                <div className="flex items-center space-x-2 bg-white bg-opacity-20 rounded-lg p-2">
                  <span className="text-2xl">⚡</span>
                  <span className="text-sm">Quick Learner Badge</span>
                </div>
              </div>
            </Card>

            <Card className="bg-gradient-to-br from-yellow-500 to-orange-500 text-white">
              <h3 className="text-xl font-bold mb-2">💪 Keep Going!</h3>
              <p className="text-sm text-yellow-100 mb-3">
                Alex is on a 5-day learning streak! Help maintain the momentum.
              </p>
              <div className="bg-white bg-opacity-20 rounded-lg p-3">
                <p className="text-sm font-medium mb-2">This Week's Goal</p>
                <ProgressBar progress={80} color="yellow" />
                <p className="text-xs mt-2">4 of 5 daily goals completed</p>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ParentDashboard;
