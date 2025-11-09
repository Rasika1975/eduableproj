import { useState } from 'react';
import { useApp } from '../contexts/AppContext';
import Card from '../components/Card';
import { Users, BookOpen, GraduationCap, ShieldCheck, TrendingUp, Activity, BarChart, Settings, FileCheck, UserCog } from 'lucide-react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const AdminDashboard = () => {
  const { userName } = useApp();
  const [activeTab, setActiveTab] = useState('overview');

  const overviewStats = [
    { title: 'Total Users', value: '250', description: 'Students, Teachers, Parents', change: '+18% this month', icon: Users, changeColor: 'text-green-600' },
    { title: 'Total Lessons', value: '720', description: 'Across all subjects', change: '+12%', icon: BookOpen, changeColor: 'text-green-600' },
    { title: 'Active Students', value: '156', description: 'Currently enrolled', icon: GraduationCap },
    { title: 'System Health', value: 'Excellent', description: 'All systems operational', icon: ShieldCheck, changeColor: 'text-green-600' },
  ];

  const platformGrowthData = [
    { name: 'Jan', Users: 200, Content: 300 },
    { name: 'Feb', Users: 250, Content: 350 },
    { name: 'Mar', Users: 300, Content: 450 },
    { name: 'Apr', Users: 320, Content: 500 },
    { name: 'May', Users: 400, Content: 600 },
    { name: 'Jun', Users: 450, Content: 720 },
  ];

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 text-gray-800 dark:text-gray-200">
      {/* Page Header */}
      <div className="bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <h1 className="text-3xl font-bold">
            Admin Dashboard
          </h1>
          <p className="text-gray-500 dark:text-gray-400 mt-1">
            Welcome back, {userName || "Admin"}
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
            onClick={() => setActiveTab('users')}
            className={`px-4 py-3 font-semibold ${activeTab === 'users' ? 'border-b-2 border-blue-600 text-blue-600 dark:text-blue-400' : 'text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-t-md'}`}
          >
            Manage Users
          </button>
          <button
            onClick={() => setActiveTab('settings')}
            className={`px-4 py-3 font-semibold ${activeTab === 'settings' ? 'border-b-2 border-blue-600 text-blue-600 dark:text-blue-400' : 'text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-t-md'}`}
          >
            System Settings
          </button>
        </div>
      </div>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {activeTab === 'overview' && (
          <div className="space-y-8">
            {/* Main Stats */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {overviewStats.map((stat) => {
                const Icon = stat.icon;
                return (
                  <Card key={stat.title}>
                    <div className="flex justify-between items-start">
                      <div className="flex flex-col">
                        <p className="text-gray-500 dark:text-gray-400 text-sm">{stat.title}</p>
                        <span className="text-3xl font-bold mt-1">{stat.value}</span>
                        <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">{stat.description}</p>
                      </div>
                      <div className="p-2 bg-blue-100 dark:bg-blue-900/50 rounded-lg">
                        <Icon className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                      </div>
                    </div>
                    {stat.change && (
                      <div className={`flex items-center space-x-1 text-sm mt-2 ${stat.changeColor}`}>
                        <TrendingUp className="w-4 h-4" />
                        <span>{stat.change}</span>
                      </div>
                    )}
                  </Card>
                );
              })}
            </div>
            
            {/* Main Content Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              <div className="lg:col-span-2">
                <Card>
                  <h2 className="text-xl font-bold mb-4">Platform Growth</h2>
                  <div style={{ height: 300 }}>
                    <ResponsiveContainer width="100%" height="100%">
                      <LineChart data={platformGrowthData} margin={{ top: 5, right: 20, left: -10, bottom: 5 }}>
                        <CartesianGrid strokeDasharray="3 3" stroke="rgba(156, 163, 175, 0.3)" />
                        <XAxis dataKey="name" />
                        <YAxis />
                        <Tooltip contentStyle={{ backgroundColor: 'white', border: '1px solid #e2e8f0', borderRadius: '0.5rem' }} />
                        <Legend />
                        <Line type="monotone" dataKey="Users" stroke="#3b82f6" strokeWidth={2} />
                        <Line type="monotone" dataKey="Content" stroke="#16a34a" strokeWidth={2} />
                      </LineChart>
                    </ResponsiveContainer>
                  </div>
                </Card>
              </div>
              <div className="space-y-8">
                <Card>
                  <h2 className="text-xl font-bold mb-4">System Status</h2>
                  <div className="space-y-4">
                    <div className="flex justify-between items-center"><span className="text-gray-500 dark:text-gray-400">System Uptime</span><span className="font-bold text-green-600">99.9%</span></div>
                    <div className="flex justify-between items-center"><span className="text-gray-500 dark:text-gray-400">Active Sessions</span><span className="font-bold">234</span></div>
                    <div className="flex justify-between items-center"><span className="text-gray-500 dark:text-gray-400">Storage Used</span><span className="font-bold">45GB / 100GB</span></div>
                    <div className="flex justify-between items-center"><span className="text-gray-500 dark:text-gray-400">API Response Time</span><span className="font-bold">120ms</span></div>
                  </div>
                </Card>
                <Card>
                  <h2 className="text-xl font-bold mb-4">Quick Actions</h2>
                  <div className="grid grid-cols-2 gap-4">
                    <button className="flex flex-col items-center p-3 bg-gray-100 dark:bg-gray-700/50 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-700 transition"><UserCog className="w-6 h-6 mb-1 text-blue-600 dark:text-blue-400" /> <span className="text-sm font-semibold">Manage Users</span></button>
                    <button className="flex flex-col items-center p-3 bg-gray-100 dark:bg-gray-700/50 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-700 transition"><FileCheck className="w-6 h-6 mb-1 text-green-600 dark:text-green-400" /> <span className="text-sm font-semibold">Content Moderation</span></button>
                    <button className="flex flex-col items-center p-3 bg-gray-100 dark:bg-gray-700/50 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-700 transition"><BarChart className="w-6 h-6 mb-1 text-yellow-600 dark:text-yellow-400" /> <span className="text-sm font-semibold">View Reports</span></button>
                    <button className="flex flex-col items-center p-3 bg-gray-100 dark:bg-gray-700/50 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-700 transition"><Settings className="w-6 h-6 mb-1 text-purple-600 dark:text-purple-400" /> <span className="text-sm font-semibold">System Settings</span></button>
                  </div>
                </Card>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'users' && (
          <Card>
            <h2 className="text-xl font-bold">Manage Users</h2>
            <p className="mt-4 text-gray-600 dark:text-gray-400">User management interface will be here.</p>
          </Card>
        )}

        {activeTab === 'settings' && (
          <Card>
            <h2 className="text-xl font-bold">System Settings</h2>
            <p className="mt-4 text-gray-600 dark:text-gray-400">System settings interface will be here.</p>
          </Card>
        )}
      </main>
    </div>
  );
};

export default AdminDashboard;
