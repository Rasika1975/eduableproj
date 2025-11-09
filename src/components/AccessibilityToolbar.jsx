import { useState } from 'react';
import { useApp } from '../contexts/AppContext';
import { Settings, Plus, Minus, Moon, Sun, Eye, Volume2 } from 'lucide-react';

const AccessibilityToolbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const {
    fontSize,
    darkMode,
    highContrast,
    increaseFontSize,
    decreaseFontSize,
    toggleDarkMode,
    toggleHighContrast,
  } = useApp();

  const handleTextToSpeech = () => {
    const utterance = new SpeechSynthesisUtterance('Text to speech is activated');
    window.speechSynthesis.speak(utterance);
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-14 h-14 bg-blue-600 hover:bg-blue-700 text-white rounded-full shadow-lg flex items-center justify-center transition-all duration-300 hover:scale-110"
        aria-label="Accessibility Settings"
      >
        <Settings className={`w-6 h-6 ${isOpen ? 'rotate-90' : ''} transition-transform`} />
      </button>

      {isOpen && (
        <div className="absolute bottom-20 right-0 bg-white dark:bg-gray-800 rounded-2xl shadow-2xl p-4 w-72 animate-slide-up">
          <h3 className="text-lg font-bold text-gray-800 dark:text-white mb-4">
            Accessibility Options
          </h3>

          <div className="space-y-3">
            <div className="flex items-center justify-between p-3 bg-gray-50 dark:bg-gray-700 rounded-lg">
              <span className="text-sm font-medium text-gray-700 dark:text-gray-200">
                Text Size: {fontSize}
              </span>
              <div className="flex space-x-2">
                <button
                  onClick={decreaseFontSize}
                  className="p-2 bg-blue-500 hover:bg-blue-600 text-white rounded-lg transition"
                  aria-label="Decrease font size"
                >
                  <Minus className="w-4 h-4" />
                </button>
                <button
                  onClick={increaseFontSize}
                  className="p-2 bg-blue-500 hover:bg-blue-600 text-white rounded-lg transition"
                  aria-label="Increase font size"
                >
                  <Plus className="w-4 h-4" />
                </button>
              </div>
            </div>

            <button
              onClick={toggleDarkMode}
              className="w-full flex items-center justify-between p-3 bg-gray-50 dark:bg-gray-700 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-600 transition"
              aria-label="Toggle dark mode"
            >
              <span className="text-sm font-medium text-gray-700 dark:text-gray-200">
                Dark Mode
              </span>
              {darkMode ? (
                <Moon className="w-5 h-5 text-blue-500" />
              ) : (
                <Sun className="w-5 h-5 text-yellow-500" />
              )}
            </button>

            <button
              onClick={toggleHighContrast}
              className="w-full flex items-center justify-between p-3 bg-gray-50 dark:bg-gray-700 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-600 transition"
              aria-label="Toggle high contrast"
            >
              <span className="text-sm font-medium text-gray-700 dark:text-gray-200">
                High Contrast
              </span>
              <Eye className={`w-5 h-5 ${highContrast ? 'text-blue-500' : 'text-gray-400'}`} />
            </button>

            <button
              onClick={handleTextToSpeech}
              className="w-full flex items-center justify-between p-3 bg-blue-500 hover:bg-blue-600 text-white rounded-lg transition"
              aria-label="Text to speech"
            >
              <span className="text-sm font-medium">Text to Speech</span>
              <Volume2 className="w-5 h-5" />
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default AccessibilityToolbar;
