const ProgressBar = ({ progress, color = 'blue' }) => {
  const colorClasses = {
    blue: 'bg-blue-500',
    green: 'bg-green-500',
    yellow: 'bg-yellow-500',
    purple: 'bg-purple-500',
    pink: 'bg-pink-500',
  };

  return (
    <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-3 overflow-hidden">
      <div
        className={`h-full ${colorClasses[color]} transition-all duration-500 rounded-full`}
        style={{ width: `${progress}%` }}
      />
    </div>
  );
};

export default ProgressBar;
