import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  Book,
  Palette,
  Atom,
  Zap,
  Volume2,
  VolumeX,
  Sparkles,
  Heart,
  Calculator,
  BookOpen,
} from "lucide-react";
import confetti from "canvas-confetti";

// ✅ MAIN HOME COMPONENT
const Home = () => {
  const welcomeMessages = [
    "Hello Explorer!",
    "Ready to Learn Something Awesome?",
    "Let's Begin Our Adventure!",
    "Welcome to Your Learning Journey!",
    "Time for Fun and Discovery!",
  ];

  const didYouKnowFacts = [
    "Did you know? Bees can count!",
    "Colors have moods!",
    "Planets dance around the sun!",
    "Every snowflake is unique!",
    "A rainbow has 7 colors!",
    "Music can make plants grow!",
  ];

  const learningWorlds = [
    {
      title: "Math World",
      icon: <Calculator className="w-14 h-14 text-blue-600" />,
      color: "from-blue-400 to-blue-600",
      description: "Numbers & Patterns",
    },
    {
      title: "Art World",
      icon: <Palette className="w-14 h-14 text-pink-500" />,
      color: "from-pink-400 to-pink-600",
      description: "Create & Express",
    },
    {
      title: "Science World",
      icon: <Atom className="w-14 h-14 text-green-500" />,
      color: "from-green-400 to-green-600",
      description: "Explore & Discover",
    },
    {
      title: "Story World",
      icon: <BookOpen className="w-14 h-14 text-purple-600" />,
      color: "from-purple-400 to-purple-600",
      description: "Read & Imagine",
    },
  ];

  const [welcomeIndex, setWelcomeIndex] = useState(0);
  const [soundEnabled, setSoundEnabled] = useState(false);

  // Change welcome messages every 2.5 sec
  useEffect(() => {
    const interval = setInterval(() => {
      setWelcomeIndex((prev) => (prev + 1) % welcomeMessages.length);
    }, 2500);
    return () => clearInterval(interval);
  }, []);

  const handleButtonClick = () => {
    confetti({
      particleCount: 120,
      spread: 70,
      origin: { y: 0.6 },
      colors: ["#60A5FA", "#A78BFA", "#F472B6", "#34D399", "#FBBF24"],
    });
  };

  return (
    <div className="min-h-screen relative overflow-hidden bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50">
      <ParticleBackground />

      {/* ✅ Sound Toggle */}
      <motion.button
        onClick={() => setSoundEnabled(!soundEnabled)}
        className="fixed top-4 right-4 z-50 p-3 bg-white rounded-full shadow-lg"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        {soundEnabled ? (
          <Volume2 className="w-6 h-6 text-blue-600" />
        ) : (
          <VolumeX className="w-6 h-6 text-gray-400" />
        )}
      </motion.button>

      <FloatingMascot />

      {/* ✅ Fact Bubbles */}
      {didYouKnowFacts.map((fact, i) => (
        <FactBubble key={i} fact={fact} delay={i * 2} />
      ))}

      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-4 py-12">
        {/* ✅ Animated Logo */}
        <motion.div
          className="flex justify-center mb-6"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ type: "spring", stiffness: 260, damping: 20 }}
        >
          <motion.div
            className="w-32 h-32 bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 rounded-full flex items-center justify-center shadow-2xl relative"
            animate={{ rotate: [0, 5, -5, 0], scale: [1, 1.05, 1] }}
            transition={{ duration: 3, repeat: Infinity }}
          >
            <div className="w-28 h-28 bg-white rounded-full flex items-center justify-center">
              <motion.span
                className="text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-600"
                animate={{ scale: [1, 1.1, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                E
              </motion.span>
            </div>

            <motion.div
              className="absolute -top-1 -right-1"
              animate={{ rotate: 360 }}
              transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
            >
              <Sparkles className="w-8 h-8 text-yellow-400" />
            </motion.div>
          </motion.div>
        </motion.div>

        {/* ✅ Welcome Changing Text */}
        <motion.div key={welcomeIndex} initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
          <p className="text-2xl md:text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
            {welcomeMessages[welcomeIndex]}
          </p>
        </motion.div>

        {/* ✅ Main Title */}
        <h1 className="text-5xl md:text-6xl font-extrabold text-gray-800 mt-3 text-center">
          Your Learning Adventure
          <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600">
            Starts Here!
          </span>
        </h1>

        {/* ✅ Sub Title */}
        <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto mb-10 text-center">
          Fun, accessible, and smart learning designed for every amazing child
          <Heart className="inline-block w-6 h-6 ml-2 text-pink-500" />
        </p>

        {/* ✅ LOGIN / SIGNUP BUTTONS */}
        <div className="flex flex-col sm:flex-row gap-4 mb-16">
          <Link
            to="/login"
            onClick={handleButtonClick}
            className="px-10 py-4 bg-blue-600 text-white font-bold rounded-full shadow-lg text-lg hover:bg-blue-700 transition"
          >
            Login
          </Link>

          <Link
            to="/signup"
            onClick={handleButtonClick}
            className="px-10 py-4 bg-white text-blue-600 font-bold rounded-full shadow-lg text-lg border-2 border-blue-600"
          >
            Sign Up
          </Link>
        </div>

        {/* ✅ WORLDS */}
        <h2 className="text-3xl font-bold text-gray-800 mb-8">Choose Your World!</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto mb-10">
          {learningWorlds.map((world, index) => (
            <LearningWorldCard key={index} world={world} index={index} />
          ))}
        </div>

        {/* ✅ Bottom Icons */}
        <div className="flex justify-center gap-10 text-gray-600">
          {[Book, Palette, Atom, Zap].map((Icon, i) => (
            <motion.div key={i} whileHover={{ scale: 1.2, rotate: 360 }} transition={{ duration: 0.5 }}>
              <Icon className="w-10 h-10" />
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;





/* ✅✅✅ COMPONENTS BELOW ✅✅✅ */



// ✅ Floating Fun Facts
const FactBubble = ({ fact, delay }) => {
  const left = Math.random() * 80 + 10;
  const duration = 15 + Math.random() * 10;

  return (
    <motion.div
      className="fixed z-20 pointer-events-none"
      style={{ left: `${left}%`, bottom: "-100px" }}
      initial={{ opacity: 0 }}
      animate={{ y: -window.innerHeight - 200, opacity: [0, 1, 1, 0] }}
      transition={{ duration, delay, repeat: Infinity, repeatDelay: 20 }}
    >
      <div className="bg-white/90 backdrop-blur-sm px-4 py-3 rounded-2xl shadow-lg border-2 border-blue-200">
        <p className="text-sm font-medium text-gray-700 whitespace-nowrap">{fact}</p>
      </div>
    </motion.div>
  );
};


// ✅ Floating Mascot
const FloatingMascot = () => (
  <motion.div className="fixed bottom-8 left-8 z-40" initial={{ scale: 0 }} animate={{ scale: 1 }}>
    <motion.div
      className="relative w-24 h-24 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full shadow-2xl flex items-center justify-center"
      animate={{ y: [0, -15, 0] }}
      transition={{ duration: 2, repeat: Infinity }}
    >
      {/* Eyes */}
      <div className="absolute top-4 left-6 w-3 h-3 bg-gray-800 rounded-full" />
      <div className="absolute top-4 right-6 w-3 h-3 bg-gray-800 rounded-full" />

      {/* Smile */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-3xl text-gray-800">
        😊
      </div>
    </motion.div>

    <motion.div
      className="absolute -top-8 left-1/2 bg-white px-4 py-2 rounded-full shadow-lg"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
      <p className="text-sm font-bold text-gray-800">Hi Friend!</p>
    </motion.div>
  </motion.div>
);


// ✅ Learning World Card
const LearningWorldCard = ({ world, index }) => (
  <motion.div
    initial={{ opacity: 0, y: 50 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, delay: index * 0.2 }}
    className={`bg-gradient-to-br ${world.color} p-6 rounded-2xl text-white flex flex-col items-center shadow-lg`}
  >
    <div className="mb-4">{world.icon}</div>
    <h3 className="text-2xl font-bold">{world.title}</h3>
    <p className="text-sm opacity-90">{world.description}</p>
  </motion.div>
);


// ✅ Particle Background
const ParticleBackground = () => {
  const particles = Array.from({ length: 20 }, (_, i) => ({
    id: i,
    size: Math.random() * 30 + 10,
    left: Math.random() * 100,
    top: Math.random() * 100,
    duration: Math.random() * 10 + 10,
  }));

  return (
    <div className="absolute inset-0 pointer-events-none">
      {particles.map((p) => (
        <motion.div
          key={p.id}
          className="absolute bg-blue-200 rounded-full opacity-30"
          style={{
            width: p.size,
            height: p.size,
            left: `${p.left}%`,
            top: `${p.top}%`,
          }}
          animate={{
            y: [0, -30, 0],
            x: [0, 15, -15, 0],
            opacity: [0.2, 0.5, 0.2],
            scale: [1, 1.2, 1],
          }}
          transition={{ duration: p.duration, repeat: Infinity }}
        />
      ))}
    </div>
  );
};
