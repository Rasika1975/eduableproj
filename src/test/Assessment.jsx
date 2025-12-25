import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Check, Home } from "lucide-react";
import { Link } from "react-router-dom";

const questions = [
  { id: 1, question: "Does the child mix up letters like b-d or p-q when reading or writing?", disability: "Dyslexia", category: "Reading & Writing" },
  { id: 2, question: "Does the child read very slowly or guess words?", disability: "Dyslexia", category: "Reading & Writing" },
  { id: 3, question: "Does the child skip words while reading?", disability: "Dyslexia", category: "Reading & Writing" },

  { id: 4, question: "Is the child's handwriting messy or hard to read?", disability: "Dysgraphia", category: "Writing Skills" },
  { id: 5, question: "Does the child struggle to write neatly?", disability: "Dysgraphia", category: "Writing Skills" },
  { id: 6, question: "Does the child get tired while writing?", disability: "Dysgraphia", category: "Writing Skills" },

  { id: 7, question: "Does the child struggle with numbers?", disability: "Dyscalculia", category: "Mathematics" },
  { id: 8, question: "Does the child find basic math difficult?", disability: "Dyscalculia", category: "Mathematics" },
  { id: 9, question: "Does the child mix number order?", disability: "Dyscalculia", category: "Mathematics" },

  { id: 10, question: "Does the child get distracted easily?", disability: "ADHD", category: "Attention & Focus" },
  { id: 11, question: "Is it hard for the child to sit still?", disability: "ADHD", category: "Attention & Focus" },
  { id: 12, question: "Does the child leave tasks unfinished?", disability: "ADHD", category: "Attention & Focus" },

  { id: 13, question: "Does the child avoid eye contact?", disability: "Autism (ASD)", category: "Social Interaction" },
  { id: 14, question: "Is the child sensitive to loud sounds?", disability: "Autism (ASD)", category: "Social Interaction" },
  { id: 15, question: "Does the child repeat actions or words?", disability: "Autism (ASD)", category: "Social Interaction" },
];

const Assessment = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState({});
  const [result, setResult] = useState(null);
  const [direction, setDirection] = useState(0);
  const totalQuestions = questions.length;
  const progress = ((currentQuestion + 1) / totalQuestions) * 100;

  const handleAnswer = (value) => {
    const currentQ = questions[currentQuestion];
    setAnswers({ ...answers, [currentQ.id]: value });
    
    // Auto-advance to next question after a short delay
    setTimeout(() => {
      if (currentQuestion < totalQuestions - 1) {
        setDirection(1);
        setCurrentQuestion(currentQuestion + 1);
      }
    }, 300);
  };

  const handlePrevious = () => {
    if (currentQuestion > 0) {
      setDirection(-1);
      setCurrentQuestion(currentQuestion - 1);
    }
  };

  const handleNext = () => {
    if (currentQuestion < totalQuestions - 1) {
      setDirection(1);
      setCurrentQuestion(currentQuestion + 1);
    }
  };

  const calculateResult = () => {
    const scores = {
      Dyslexia: 0,
      Dysgraphia: 0,
      Dyscalculia: 0,
      ADHD: 0,
      "Autism (ASD)": 0,
    };

    questions.forEach((q) => {
      scores[q.disability] += answers[q.id] || 0;
    });

    Object.keys(scores).forEach(
      (key) => (scores[key] = Math.round((scores[key] / 6) * 100))
    );

    setResult(scores);
  };

  const slideVariants = {
    enter: (direction) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1
    },
    exit: (direction) => ({
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0
    })
  };

  const currentQ = questions[currentQuestion];
  const isAnswered = answers[currentQ?.id] !== undefined;

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#FCE4E6] via-[#C9C4FF]/30 to-[#7E8BFF]/20 p-3 md:p-4 relative overflow-hidden">
      {/* Animated Background Blobs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div 
          className="absolute top-20 left-10 w-96 h-96 bg-[#7E8BFF]/10 rounded-full blur-3xl"
          animate={{ 
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3]
          }}
          transition={{ duration: 8, repeat: Infinity }}
        />
        <motion.div 
          className="absolute bottom-20 right-10 w-96 h-96 bg-[#FF8A80]/10 rounded-full blur-3xl"
          animate={{ 
            scale: [1.2, 1, 1.2],
            opacity: [0.3, 0.5, 0.3]
          }}
          transition={{ duration: 8, repeat: Infinity, delay: 1 }}
        />
      </div>

      <div className="max-w-3xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-6 pt-4">
          <Link to="/" className="inline-flex items-center gap-2 text-[#7E8BFF] hover:text-[#7E8BFF]/80 transition-colors mb-4">
            <Home className="w-4 h-4" />
            <span className="font-semibold text-sm">Back to Home</span>
          </Link>
          <h1 className="text-2xl md:text-3xl font-bold text-[#1F1F2E] mb-2">
            Child Learning Assessment
          </h1>
          <p className="text-[#1F1F2E]/70 text-xs md:text-sm">
            Answer honestly to understand possible learning challenges
          </p>
        </div>

        {!result ? (
          <div className="bg-white/40 backdrop-blur-xl rounded-2xl shadow-2xl p-5 md:p-8 border border-white/60">
            {/* Progress Bar */}
            <div className="mb-6">
              <div className="flex justify-between items-center mb-2">
                <span className="text-xs md:text-sm font-semibold text-[#1F1F2E]/80">
                  Question {currentQuestion + 1} of {totalQuestions}
                </span>
                <span className="text-xs md:text-sm font-semibold text-[#7E8BFF]">
                  {Math.round(progress)}% Complete
                </span>
              </div>
              <div className="w-full h-2 bg-white/50 rounded-full overflow-hidden backdrop-blur-sm">
                <motion.div
                  className="h-full bg-gradient-to-r from-[#7E8BFF] to-[#C9C4FF] shadow-lg"
                  initial={{ width: 0 }}
                  animate={{ width: `${progress}%` }}
                  transition={{ duration: 0.5, ease: "easeOut" }}
                />
              </div>
            </div>

            {/* Question Card */}
            <AnimatePresence mode="wait" custom={direction}>
              <motion.div
                key={currentQuestion}
                custom={direction}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{
                  x: { type: "spring", stiffness: 300, damping: 30 },
                  opacity: { duration: 0.2 }
                }}
                className="min-h-[320px] flex flex-col justify-between"
              >
                <div>
                  <div className="inline-block px-3 py-1.5 bg-white/60 backdrop-blur-md text-[#7E8BFF] rounded-full text-xs md:text-sm font-semibold mb-4 border border-[#7E8BFF]/20">
                    {currentQ.category}
                  </div>
                  
                  <h2 className="text-xl md:text-2xl font-bold text-[#1F1F2E] mb-6 leading-relaxed">
                    {currentQ.question}
                  </h2>

                  {/* Answer Options */}
                  <div className="space-y-3">
                    {[
                      { value: 2, label: "Yes / Often", color: "from-red-500 to-orange-500" },
                      { value: 1, label: "Sometimes", color: "from-yellow-500 to-amber-500" },
                      { value: 0, label: "No / Never", color: "from-green-500 to-emerald-500" }
                    ].map((option) => (
                      <motion.button
                        key={option.value}
                        onClick={() => handleAnswer(option.value)}
                        className={`w-full p-4 rounded-xl border-2 transition-all text-left font-semibold text-base md:text-lg ${
                          answers[currentQ.id] === option.value
                            ? `bg-gradient-to-r ${option.color} text-white border-transparent shadow-2xl backdrop-blur-md`
                            : "bg-white/50 backdrop-blur-md border-white/60 text-[#1F1F2E] hover:border-[#7E8BFF] hover:shadow-xl hover:bg-white/70"
                        }`}
                        whileHover={{ scale: answers[currentQ.id] === option.value ? 1.02 : 1.01, y: -2 }}
                        whileTap={{ scale: 0.98 }}
                      >
                        <div className="flex items-center justify-between">
                          <span>{option.label}</span>
                          {answers[currentQ.id] === option.value && (
                            <motion.div
                              initial={{ scale: 0 }}
                              animate={{ scale: 1 }}
                              transition={{ type: "spring", stiffness: 500, damping: 25 }}
                            >
                              <Check className="w-6 h-6" />
                            </motion.div>
                          )}
                        </div>
                      </motion.button>
                    ))}
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Navigation Buttons */}
            <div className="flex justify-between items-center mt-6 pt-5 border-t border-white/40">
              <button
                onClick={handlePrevious}
                disabled={currentQuestion === 0}
                className="flex items-center gap-2 px-5 py-2.5 rounded-xl font-semibold transition-all disabled:opacity-40 disabled:cursor-not-allowed text-[#1F1F2E] hover:bg-white/50 backdrop-blur-md text-sm md:text-base"
              >
                <ChevronLeft className="w-5 h-5" />
                Previous
              </button>

              {currentQuestion === totalQuestions - 1 ? (
                <button
                  onClick={calculateResult}
                  disabled={Object.keys(answers).length !== totalQuestions}
                  className="flex items-center gap-2 px-6 py-2.5 bg-gradient-to-r from-[#7E8BFF] to-[#C9C4FF] text-white rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all disabled:opacity-50 disabled:cursor-not-allowed text-sm md:text-base backdrop-blur-md"
                >
                  Show Results
                  <Check className="w-5 h-5" />
                </button>
              ) : (
                <button
                  onClick={handleNext}
                  className="flex items-center gap-2 px-5 py-2.5 bg-[#7E8BFF] text-white rounded-xl font-semibold shadow-md hover:shadow-lg transition-all text-sm md:text-base backdrop-blur-md"
                >
                  Next
                  <ChevronRight className="w-5 h-5" />
                </button>
              )}
            </div>

            {/* Question Dots */}
            <div className="flex justify-center gap-1.5 mt-5">
              {questions.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => {
                    setDirection(idx > currentQuestion ? 1 : -1);
                    setCurrentQuestion(idx);
                  }}
                  className={`w-2 h-2 rounded-full transition-all backdrop-blur-sm ${
                    idx === currentQuestion
                      ? "bg-[#7E8BFF] w-6 shadow-lg"
                      : answers[questions[idx].id] !== undefined
                      ? "bg-[#7E8BFF]/60"
                      : "bg-white/60 border border-white/80"
                  }`}
                />
              ))}
            </div>
          </div>
        ) : (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="bg-white/40 backdrop-blur-xl rounded-2xl shadow-2xl p-6 md:p-10 border border-white/60"
          >
            <div className="text-center mb-8">
              <div className="w-16 h-16 bg-gradient-to-br from-[#7E8BFF] to-[#C9C4FF] rounded-full flex items-center justify-center mx-auto mb-5 shadow-lg backdrop-blur-md">
                <Check className="w-8 h-8 text-white" />
              </div>
              <h2 className="text-2xl md:text-3xl font-bold text-[#1F1F2E] mb-2">
                Assessment Complete!
              </h2>
              <p className="text-[#1F1F2E]/70 text-sm md:text-base">
                Here are your personalized results
              </p>
            </div>

            <div className="space-y-4 mb-6">
              {Object.entries(result).map(([disability, score], idx) => (
                <motion.div
                  key={disability}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: idx * 0.1 }}
                  className="bg-white/50 backdrop-blur-md p-5 rounded-xl border border-white/70 shadow-lg hover:shadow-xl transition-all"
                >
                  <div className="flex justify-between items-center mb-2.5">
                    <h3 className="text-lg md:text-xl font-bold text-[#1F1F2E]">{disability}</h3>
                    <span className="text-xl md:text-2xl font-bold text-[#7E8BFF]">{score}%</span>
                  </div>
                  <div className="w-full h-2.5 bg-white/60 rounded-full overflow-hidden backdrop-blur-sm">
                    <motion.div
                      className={`h-full rounded-full ${
                        score >= 67 ? "bg-gradient-to-r from-red-500 to-orange-500" :
                        score >= 34 ? "bg-gradient-to-r from-yellow-500 to-amber-500" :
                        "bg-gradient-to-r from-green-500 to-emerald-500"
                      }`}
                      initial={{ width: 0 }}
                      animate={{ width: `${score}%` }}
                      transition={{ duration: 1, delay: idx * 0.1 + 0.3, ease: "easeOut" }}
                    />
                  </div>
                </motion.div>
              ))}
            </div>

            <div className="bg-yellow-50/70 backdrop-blur-md border-l-4 border-yellow-400 p-4 md:p-5 rounded-xl mb-6">
              <p className="text-sm text-yellow-800 font-medium flex items-start gap-2">
                <span className="text-xl">⚠️</span>
                <span>This assessment is for awareness only and not a medical diagnosis. Please consult with a qualified healthcare professional for proper evaluation.</span>
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Link to="/" className="flex-1 sm:flex-none">
                <button className="w-full px-6 py-3 bg-[#7E8BFF] text-white rounded-xl font-semibold shadow-lg hover:bg-[#7E8BFF]/90 transition-all backdrop-blur-md text-sm md:text-base">
                  Back to Home
                </button>
              </Link>
              <button
                onClick={() => {
                  setCurrentQuestion(0);
                  setAnswers({});
                  setResult(null);
                }}
                className="flex-1 sm:flex-none px-6 py-3 bg-white/50 backdrop-blur-md text-[#1F1F2E] border-2 border-white/70 rounded-xl font-semibold hover:border-[#7E8BFF] hover:bg-white/70 transition-all text-sm md:text-base"
              >
                Retake Assessment
              </button>
            </div>
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default Assessment;
