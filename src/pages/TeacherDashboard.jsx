import { useState } from 'react';
import { useApp } from '../contexts/AppContext';
import Card from '../components/Card';
import ProgressBar from '../components/ProgressBar';
import { Users, BookOpen, Upload, TrendingUp, Clock } from 'lucide-react';

const TeacherDashboard = () => {
  const { userName } = useApp();
  const [activeTab, setActiveTab] = useState('overview');

  const students = [
    { id: 1, name: 'Emma Johnson', grade: 5, progress: 85 },
    { id: 2, name: 'Michael Chen', grade: 4, progress: 72 },
    { id: 3, name: 'Sofia Rodriguez', grade: 6, progress: 91 },
    { id: 4, name: 'James Williams', grade: 5, progress: 68 },
    { id: 5, name: 'Olivia Martinez', grade: 4, progress: 79 },
    { id: 6, name: 'Noah Davis', grade: 6, progress: 88 },
  ];
  const getInitials = (name) => name.split(' ').map(n => n[0]).join('');

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 text-gray-800 dark:text-gray-200">
      {/* Page Header */}
      <div className="bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <h1 className="text-3xl font-bold">Teacher Dashboard</h1>
          <p className="text-gray-500 dark:text-gray-400 mt-1">
            Welcome back, {userName || 'Teacher'}
          </p>
        </div>
      </div>

      {/* Navigation Tabs */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-6 border-b border-gray-200 dark:border-gray-700">
        <div className="flex gap-4">
          <button
            onClick={() => setActiveTab('overview')}
            className={`px-4 py-3 font-semibold ${
              activeTab === 'overview'
                ? 'border-b-2 border-blue-600 text-blue-600 dark:text-blue-400'
                : 'text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-t-md'
            }`}
          >
            Overview
          </button>
          <button
            onClick={() => setActiveTab('students')}
            className={`px-4 py-3 font-semibold ${
              activeTab === 'students'
                ? 'border-b-2 border-blue-600 text-blue-600 dark:text-blue-400'
                : 'text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-t-md'
            }`}
          >
            Students
          </button>
          <button
            onClick={() => setActiveTab('upload')}
            className={`px-4 py-3 font-semibold ${
              activeTab === 'upload'
                ? 'border-b-2 border-blue-600 text-blue-600 dark:text-blue-400'
                : 'text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-t-md'
            }`}
          >
            Upload Content
          </button>
        </div>
      </div>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {activeTab === 'overview' && (
          <div className="space-y-8">
            {/* Main Stats */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <Card>
                <div className="flex justify-between items-start">
                  <div>
                    <p className="text-gray-500 dark:text-gray-400 text-sm">Total Students</p>
                    <h2 className="text-3xl font-bold mt-1">156</h2>
                    <p className="text-green-600 text-sm mt-1">+12 this month</p>
                  </div>
                  <Users className="text-gray-400 w-8 h-8" />
                </div>
              </Card>

              <Card>
                <div className="flex justify-between items-start">
                  <div>
                    <p className="text-gray-500 dark:text-gray-400 text-sm">Lessons Created</p>
                    <h2 className="text-3xl font-bold mt-1">42</h2>
                    <p className="text-gray-500 dark:text-gray-400 text-sm mt-1">This semester</p>
                  </div>
                  <BookOpen className="text-gray-400 w-8 h-8" />
                </div>
              </Card>

              <Card>
                <div className="flex justify-between items-start">
                  <div>
                    <p className="text-gray-500 dark:text-gray-400 text-sm">Avg. Completion</p>
                    <h2 className="text-3xl font-bold mt-1">78%</h2>
                    <p className="text-green-600 text-sm mt-1">+5%</p>
                  </div>
                  <TrendingUp className="text-gray-400 w-8 h-8" />
                </div>
              </Card>

              <Card>
                <div className="flex justify-between items-start">
                  <div>
                    <p className="text-gray-500 dark:text-gray-400 text-sm">Learning Hours</p>
                    <h2 className="text-3xl font-bold mt-1">1,234</h2>
                    <p className="text-gray-500 dark:text-gray-400 text-sm mt-1">This month</p>
                  </div>
                  <Clock className="text-gray-400 w-8 h-8" />
                </div>
              </Card>
            </div>

            {/* Student Progress List */}
            <Card>
              <h2 className="text-xl font-bold mb-4">Student Progress</h2>
              <div className="space-y-5">
                {students.map((student) => (
                  <div key={student.id} className="grid grid-cols-5 items-center gap-4">
                    <p className="font-semibold col-span-2 sm:col-span-1 truncate">{student.name}</p>
                    <div className="col-span-3 sm:col-span-4 flex items-center gap-3">
                      <ProgressBar progress={student.progress} />
                      <span className="font-bold text-gray-700 dark:text-gray-300 w-12 text-right">{student.progress}%</span>
                    </div>
                  </div>
                ))}
              </div>
            </Card>
          </div>
        )}

        {activeTab === 'students' && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {students.map((student) => (
              <Card key={student.id}>
                <div className="flex flex-col items-center text-center">
                  <div className="w-20 h-20 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center mb-4">
                    <span className="text-2xl font-bold text-blue-600 dark:text-blue-300">{getInitials(student.name)}</span>
                  </div>
                  <h3 className="text-lg font-bold">{student.name}</h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400">Grade {student.grade}</p>
                  <div className="my-4">
                    <p className="text-sm text-gray-500 dark:text-gray-400">Overall Progress</p>
                    <p className="text-2xl font-bold text-blue-600 dark:text-blue-400">{student.progress}%</p>
                  </div>
                  <button className="w-full px-4 py-2 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition">
                    View Details
                  </button>
                </div>
              </Card>
            ))}
          </div>
        )}

        {activeTab === 'upload' && (
          <Card>
            <div className="max-w-2xl mx-auto">
              <h2 className="text-2xl font-bold mb-2">Upload New Lesson</h2>
              <p className="text-gray-600 dark:text-gray-400 mb-6">Create and share educational content with your students</p>
              <form className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Lesson Title</label>
                  <input type="text" placeholder="Enter lesson title" className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 focus:ring-2 focus:ring-blue-500" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Description</label>
                  <textarea placeholder="Describe what students will learn" rows="4" className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 focus:ring-2 focus:ring-blue-500"></textarea>
                </div>
                <div>
                  <div className="border-2 border-dashed border-gray-300 dark:border-gray-600 rounded-lg p-6 text-center hover:border-blue-500 transition cursor-pointer">
                    <Upload className="w-8 h-8 text-gray-400 mx-auto mb-2" />
                    <p className="text-sm font-medium text-gray-700 dark:text-gray-300">Click to upload files</p>
                    <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">
                      PDF, DOC, PPT up to 10MB
                    </p>
                  </div>
                </div>
                <div>
                  <button
                    type="submit"
                    className="w-full px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium transition"
                  >
                    Upload Lesson
                  </button>
                </div>
              </form>
            </div>
          </Card>
        )}
      </main>
    </div>
  );
};

export default TeacherDashboard;
