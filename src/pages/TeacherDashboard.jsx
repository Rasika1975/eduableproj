import { useApp } from '../contexts/AppContext';
import Card from '../components/Card';
import ProgressBar from '../components/ProgressBar';
import { Users, BookOpen, Upload, TrendingUp, CheckCircle, Clock } from 'lucide-react';

const TeacherDashboard = () => {
  const { userName } = useApp();

  const students = [
    { id: 1, name: 'Alex Johnson', progress: 85, status: 'active', lessons: 12 },
    { id: 2, name: 'Emma Davis', progress: 92, status: 'active', lessons: 15 },
    { id: 3, name: 'Michael Chen', progress: 68, status: 'needs-help', lessons: 9 },
    { id: 4, name: 'Sophia Williams', progress: 78, status: 'active', lessons: 11 },
    { id: 5, name: 'Oliver Brown', progress: 95, status: 'excellent', lessons: 16 },
  ];

  const recentUploads = [
    { id: 1, title: 'Math: Fractions Worksheet', date: '2 hours ago' },
    { id: 2, title: 'Science: Water Cycle Video', date: 'Yesterday' },
    { id: 3, title: 'English: Vocabulary Quiz', date: '3 days ago' },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-blue-50 to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 dark:text-white mb-2">
            Welcome, {userName} 👩‍🏫
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-300">
            Here's an overview of your students' progress
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <Card className="bg-gradient-to-br from-blue-500 to-blue-600 text-white">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-blue-100 text-sm mb-1">Total Students</p>
                <p className="text-3xl font-bold">24</p>
              </div>
              <Users className="w-12 h-12 text-blue-200" />
            </div>
          </Card>

          <Card className="bg-gradient-to-br from-green-500 to-green-600 text-white">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-green-100 text-sm mb-1">Active Lessons</p>
                <p className="text-3xl font-bold">18</p>
              </div>
              <BookOpen className="w-12 h-12 text-green-200" />
            </div>
          </Card>

          <Card className="bg-gradient-to-br from-yellow-500 to-orange-500 text-white">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-yellow-100 text-sm mb-1">Avg. Progress</p>
                <p className="text-3xl font-bold">84%</p>
              </div>
              <TrendingUp className="w-12 h-12 text-yellow-200" />
            </div>
          </Card>

          <Card className="bg-gradient-to-br from-purple-500 to-purple-600 text-white">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-purple-100 text-sm mb-1">Completions</p>
                <p className="text-3xl font-bold">156</p>
              </div>
              <CheckCircle className="w-12 h-12 text-purple-200" />
            </div>
          </Card>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-6">
            <Card>
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-bold text-gray-800 dark:text-white flex items-center">
                  <Users className="w-6 h-6 mr-2 text-blue-500" />
                  Student Progress
                </h2>
                <button className="px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded-lg text-sm font-medium transition">
                  View All
                </button>
              </div>
              <div className="space-y-4">
                {students.map((student) => (
                  <div
                    key={student.id}
                    className="p-4 bg-gray-50 dark:bg-gray-700 rounded-xl hover:shadow-md transition-shadow"
                  >
                    <div className="flex items-center justify-between mb-3">
                      <div className="flex items-center space-x-3">
                        <div className="w-12 h-12 bg-gradient-to-br from-blue-400 to-purple-500 rounded-full flex items-center justify-center text-white font-bold">
                          {student.name.charAt(0)}
                        </div>
                        <div>
                          <h3 className="font-semibold text-gray-800 dark:text-white">
                            {student.name}
                          </h3>
                          <p className="text-sm text-gray-500 dark:text-gray-400">
                            {student.lessons} lessons completed
                          </p>
                        </div>
                      </div>
                      <div className="text-right">
                        <p className="text-2xl font-bold text-gray-800 dark:text-white">
                          {student.progress}%
                        </p>
                        <span className={`text-xs px-2 py-1 rounded-full ${
                          student.status === 'excellent' ? 'bg-green-100 text-green-700 dark:bg-green-900 dark:text-green-300' :
                          student.status === 'active' ? 'bg-blue-100 text-blue-700 dark:bg-blue-900 dark:text-blue-300' :
                          'bg-yellow-100 text-yellow-700 dark:bg-yellow-900 dark:text-yellow-300'
                        }`}>
                          {student.status === 'excellent' ? 'Excellent' :
                           student.status === 'active' ? 'Active' : 'Needs Help'}
                        </span>
                      </div>
                    </div>
                    <ProgressBar progress={student.progress} color={
                      student.status === 'excellent' ? 'green' :
                      student.status === 'active' ? 'blue' : 'yellow'
                    } />
                  </div>
                ))}
              </div>
            </Card>

            <Card>
              <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-6 flex items-center">
                <Upload className="w-6 h-6 mr-2 text-green-500" />
                Upload New Lesson
              </h2>
              <form className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Lesson Title
                  </label>
                  <input
                    type="text"
                    placeholder="Enter lesson title"
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Subject
                  </label>
                  <select className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent">
                    <option>Math</option>
                    <option>English</option>
                    <option>Science</option>
                    <option>Art</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Upload File
                  </label>
                  <div className="border-2 border-dashed border-gray-300 dark:border-gray-600 rounded-lg p-6 text-center hover:border-blue-500 transition cursor-pointer">
                    <Upload className="w-8 h-8 text-gray-400 mx-auto mb-2" />
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      Click to upload or drag and drop
                    </p>
                    <p className="text-xs text-gray-500 dark:text-gray-500 mt-1">
                      PDF, DOC, or Video (Max 50MB)
                    </p>
                  </div>
                </div>
                <button
                  type="button"
                  className="w-full px-6 py-3 bg-green-500 hover:bg-green-600 text-white rounded-lg font-medium transition"
                >
                  Upload Lesson
                </button>
              </form>
            </Card>
          </div>

          <div className="space-y-6">
            <Card>
              <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-4 flex items-center">
                <Clock className="w-6 h-6 mr-2 text-blue-500" />
                Recent Uploads
              </h2>
              <div className="space-y-3">
                {recentUploads.map((upload) => (
                  <div
                    key={upload.id}
                    className="p-3 bg-gray-50 dark:bg-gray-700 rounded-lg hover:shadow-md transition-shadow cursor-pointer"
                  >
                    <p className="text-sm font-medium text-gray-800 dark:text-white mb-1">
                      {upload.title}
                    </p>
                    <p className="text-xs text-gray-500 dark:text-gray-400">
                      {upload.date}
                    </p>
                  </div>
                ))}
              </div>
            </Card>

            <Card className="bg-gradient-to-br from-blue-500 to-purple-600 text-white">
              <h3 className="text-xl font-bold mb-2">Weekly Summary</h3>
              <div className="space-y-3 mt-4">
                <div className="flex justify-between items-center">
                  <span className="text-blue-100 text-sm">Lessons Uploaded</span>
                  <span className="font-bold text-lg">12</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-blue-100 text-sm">Student Interactions</span>
                  <span className="font-bold text-lg">248</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-blue-100 text-sm">Avg. Completion Rate</span>
                  <span className="font-bold text-lg">87%</span>
                </div>
              </div>
            </Card>

            <Card className="bg-gradient-to-br from-yellow-500 to-orange-500 text-white">
              <h3 className="text-xl font-bold mb-2">⚠️ Attention Needed</h3>
              <p className="text-sm text-yellow-100 mb-3">
                3 students need extra support this week
              </p>
              <button className="w-full px-4 py-2 bg-white text-orange-600 rounded-lg font-medium hover:bg-orange-50 transition">
                View Details
              </button>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TeacherDashboard;
