import { useApp } from '../contexts/AppContext';
import Card from '../components/Card';
import { Users, BookOpen, GraduationCap, UserCheck, TrendingUp, Activity } from 'lucide-react';

const AdminDashboard = () => {
  const { userName } = useApp();

  const systemStats = [
    { id: 1, label: 'Total Users', value: '1,248', change: '+12%', icon: Users, color: 'blue' },
    { id: 2, label: 'Active Students', value: '856', change: '+8%', icon: GraduationCap, color: 'green' },
    { id: 3, label: 'Total Teachers', value: '42', change: '+3', icon: UserCheck, color: 'yellow' },
    { id: 4, label: 'Lessons Created', value: '324', change: '+24', icon: BookOpen, color: 'purple' },
  ];

  const recentActivity = [
    { id: 1, action: 'New teacher registered', user: 'John Smith', time: '5 minutes ago', type: 'user' },
    { id: 2, action: 'Lesson uploaded', user: 'Ms. Sarah Williams', time: '1 hour ago', type: 'content' },
    { id: 3, action: 'Student completed assessment', user: 'Alex Johnson', time: '2 hours ago', type: 'activity' },
    { id: 4, action: 'New parent account created', user: 'Mary Davis', time: '3 hours ago', type: 'user' },
    { id: 5, action: 'System backup completed', user: 'System', time: '6 hours ago', type: 'system' },
  ];

  const userBreakdown = [
    { role: 'Students', count: 856, percentage: 69, color: 'blue' },
    { role: 'Parents', count: 350, percentage: 28, color: 'green' },
    { role: 'Teachers', count: 42, percentage: 3, color: 'yellow' },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-blue-50 to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 dark:text-white mb-2">
            Admin Dashboard
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-300">
            Welcome, {userName} - System Overview & Management
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {systemStats.map((stat) => {
            const Icon = stat.icon;
            const colorClasses = {
              blue: 'from-blue-500 to-blue-600',
              green: 'from-green-500 to-green-600',
              yellow: 'from-yellow-500 to-orange-500',
              purple: 'from-purple-500 to-purple-600',
            };

            return (
              <Card key={stat.id} className={`bg-gradient-to-br ${colorClasses[stat.color]} text-white`}>
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <p className="text-white text-opacity-80 text-sm mb-1">{stat.label}</p>
                    <p className="text-3xl font-bold">{stat.value}</p>
                  </div>
                  <Icon className="w-12 h-12 text-white text-opacity-80" />
                </div>
                <div className="flex items-center space-x-1 text-sm">
                  <TrendingUp className="w-4 h-4" />
                  <span>{stat.change} this month</span>
                </div>
              </Card>
            );
          })}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-6">
            <Card>
              <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-6 flex items-center">
                <Activity className="w-6 h-6 mr-2 text-blue-500" />
                Recent System Activity
              </h2>
              <div className="space-y-3">
                {recentActivity.map((activity) => (
                  <div
                    key={activity.id}
                    className="flex items-start space-x-3 p-4 bg-gray-50 dark:bg-gray-700 rounded-lg hover:shadow-md transition-shadow"
                  >
                    <div className={`w-2 h-2 rounded-full mt-2 ${
                      activity.type === 'user' ? 'bg-blue-500' :
                      activity.type === 'content' ? 'bg-green-500' :
                      activity.type === 'activity' ? 'bg-yellow-500' :
                      'bg-purple-500'
                    }`} />
                    <div className="flex-1">
                      <p className="text-sm font-medium text-gray-800 dark:text-white">
                        {activity.action}
                      </p>
                      <p className="text-xs text-gray-500 dark:text-gray-400">
                        {activity.user} • {activity.time}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </Card>

            <Card>
              <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-6">
                Quick Actions
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <button className="p-4 bg-blue-500 hover:bg-blue-600 text-white rounded-lg text-left transition-all hover:shadow-lg">
                  <Users className="w-6 h-6 mb-2" />
                  <p className="font-semibold">Manage Users</p>
                  <p className="text-sm text-blue-100">Add, edit, or remove users</p>
                </button>
                <button className="p-4 bg-green-500 hover:bg-green-600 text-white rounded-lg text-left transition-all hover:shadow-lg">
                  <BookOpen className="w-6 h-6 mb-2" />
                  <p className="font-semibold">Content Management</p>
                  <p className="text-sm text-green-100">Review and approve lessons</p>
                </button>
                <button className="p-4 bg-yellow-500 hover:bg-yellow-600 text-white rounded-lg text-left transition-all hover:shadow-lg">
                  <Activity className="w-6 h-6 mb-2" />
                  <p className="font-semibold">Analytics</p>
                  <p className="text-sm text-yellow-100">View detailed reports</p>
                </button>
                <button className="p-4 bg-purple-500 hover:bg-purple-600 text-white rounded-lg text-left transition-all hover:shadow-lg">
                  <TrendingUp className="w-6 h-6 mb-2" />
                  <p className="font-semibold">System Settings</p>
                  <p className="text-sm text-purple-100">Configure platform settings</p>
                </button>
              </div>
            </Card>
          </div>

          <div className="space-y-6">
            <Card>
              <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-4">
                User Distribution
              </h2>
              <div className="space-y-4">
                {userBreakdown.map((user) => {
                  const colorClasses = {
                    blue: 'bg-blue-500',
                    green: 'bg-green-500',
                    yellow: 'bg-yellow-500',
                  };

                  return (
                    <div key={user.role}>
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                          {user.role}
                        </span>
                        <span className="text-sm font-bold text-gray-800 dark:text-white">
                          {user.count}
                        </span>
                      </div>
                      <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-3 overflow-hidden">
                        <div
                          className={`h-full ${colorClasses[user.color]} transition-all duration-500 rounded-full`}
                          style={{ width: `${user.percentage}%` }}
                        />
                      </div>
                    </div>
                  );
                })}
              </div>
            </Card>

            <Card className="bg-gradient-to-br from-blue-500 to-purple-600 text-white">
              <h3 className="text-xl font-bold mb-2">System Health</h3>
              <div className="space-y-3 mt-4">
                <div className="flex justify-between items-center">
                  <span className="text-blue-100 text-sm">Server Status</span>
                  <span className="px-2 py-1 bg-green-500 rounded text-xs font-semibold">Online</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-blue-100 text-sm">Database</span>
                  <span className="px-2 py-1 bg-green-500 rounded text-xs font-semibold">Healthy</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-blue-100 text-sm">API Response</span>
                  <span className="font-bold text-lg">45ms</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-blue-100 text-sm">Uptime</span>
                  <span className="font-bold text-lg">99.9%</span>
                </div>
              </div>
            </Card>

            <Card className="bg-gradient-to-br from-green-500 to-green-600 text-white">
              <h3 className="text-xl font-bold mb-2">Monthly Growth</h3>
              <p className="text-sm text-green-100 mb-3">
                Platform is growing steadily across all metrics
              </p>
              <div className="space-y-2">
                <div className="flex justify-between items-center text-sm">
                  <span>New Users</span>
                  <span className="font-bold">+156</span>
                </div>
                <div className="flex justify-between items-center text-sm">
                  <span>Lessons Created</span>
                  <span className="font-bold">+48</span>
                </div>
                <div className="flex justify-between items-center text-sm">
                  <span>Total Engagement</span>
                  <span className="font-bold">+23%</span>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
