import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  Book,
  Zap,
  Volume2,
  VolumeX,
  Sparkles,
  Heart,
  BookOpen,
  EyeOff,
  EarOff,
  MessageCircle,
  BrainCircuit,
  Accessibility,
  Smile,
  UserCheck,
  ScreenShare,
  Bot,
  BarChart,
  Palette,
  Atom,
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

  const disabilities = [
    {
      title: "Dyslexia",
      description: "Pdhne, likhne aur spelling mein difficulty",
      icon: BookOpen,
      color: "text-blue-500",
    },
    {
      title: "ADHD",
      description: "Focus aur attention maintain karne mein problem",
      icon: Zap,
      color: "text-orange-500",
    },
    {
      title: "Autism (ASD)",
      description: "Communication aur social interaction mein difficulty",
      icon: Heart,
      color: "text-teal-500",
    },
    {
      title: "Visually Impaired",
      description: "Kam ya bilkul nahi dikhta",
      icon: EyeOff,
      color: "text-gray-500",
    },
    {
      title: "Hearing Impaired",
      description: "Sunne mein problem",
      icon: EarOff,
      color: "text-indigo-500",
    },
    {
      title: "Speech & Language Disorders",
      description: "Bolne ya express karne mein difficulty",
      icon: MessageCircle,
      color: "text-sky-500",
    },
    {
      title: "Learning Disabilities",
      description: "Dyscalculia (maths), Dysgraphia (writing)",
      icon: BrainCircuit,
      color: "text-purple-500",
    },
    {
      title: "Physical Disabilities",
      description: "Body movement limited",
      icon: Accessibility,
      color: "text-green-500",
    },
    {
      title: "Mental Health Challenges",
      description: "Anxiety, depression, stress",
      icon: Smile,
      color: "text-yellow-500",
    },
  ];

  const smartFeatures = [
    {
      title: "Personalized Learning",
      description: "Personalized learning provide kare",
      icon: UserCheck,
    },
    {
      title: "Assistive Tech Support",
      description: "Screen reader, speech-to-text & Braille support de",
      icon: ScreenShare,
    },
    {
      title: "AI-Powered Adaptation",
      description: "AI-based adaptive pace follow kare",
      icon: Bot,
    },
    {
      title: "Progress Tracking",
      description: "Teachers & parents ko progress tracking de",
      icon: BarChart,
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
        <div id="about" className="scroll-mt-24">
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
        </div>

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

        {/* ✅ Features & Support Section */}
        <div className="w-full max-w-6xl mx-auto mb-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Disabilities Column */}
            <div id="disabilities" className="scroll-mt-24">
              <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center lg:text-left">
                For Every Unique Learner
              </h2>
              <div className="space-y-4">
                {disabilities.map((disability, index) => (
                  <InfoItem key={index} item={disability} />
                ))}
              </div>
            </div>

            {/* Smart Features Column */}
            <div id="features" className="scroll-mt-24">
              <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center lg:text-left">
                Powered by Smart Technology
              </h2>
              <div className="space-y-4">
                {smartFeatures.map((feature, index) => (
                  <InfoItem key={index} item={feature} />
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* ✅ Contact / Parents Info Section */}
        <div id="contact" className="w-full max-w-4xl mx-auto mb-16 text-center bg-white/60 backdrop-blur-md p-8 rounded-2xl shadow-sm border border-white scroll-mt-24">
          <h2 className="text-3xl font-bold text-gray-800 mb-6">Contact & Parents Info</h2>
          <p className="text-gray-600 mb-8 text-lg">
            We are here to support parents and teachers in creating the best learning environment.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
            <div className="p-4 bg-white rounded-xl shadow-sm">
              <h3 className="font-bold text-blue-600 mb-2">Support</h3>
              <p className="text-sm text-gray-600">Need help with the platform? Reach out to our 24/7 support team.</p>
              <a href="#" className="text-blue-500 text-sm font-semibold mt-2 inline-block">Contact Support →</a>
            </div>
            <div className="p-4 bg-white rounded-xl shadow-sm">
              <h3 className="font-bold text-purple-600 mb-2">Parent Guide</h3>
              <p className="text-sm text-gray-600">Download our comprehensive guide for parents and guardians.</p>
              <a href="#" className="text-purple-500 text-sm font-semibold mt-2 inline-block">Download PDF →</a>
            </div>
            <div className="p-4 bg-white rounded-xl shadow-sm">
              <h3 className="font-bold text-pink-600 mb-2">Community</h3>
              <p className="text-sm text-gray-600">Join our community forum to connect with other parents.</p>
              <a href="#" className="text-pink-500 text-sm font-semibold mt-2 inline-block">Join Forum →</a>
            </div>
          </div>
        </div>

        {/* ✅ Bottom Icons */}
        <div className="flex justify-center gap-10 text-gray-600">
          {[Book, Palette, Atom, Zap].map((Icon, i) => (
            <motion.div key={i} whileHover={{ scale: 1.2, rotate: 15 }} transition={{ duration: 0.3 }}>
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


// ✅ Info Item
const InfoItem = ({ item }) => {
  const Icon = item.icon;
  return (
    <motion.div
      className="flex items-start gap-4 p-4 bg-white/80 backdrop-blur-sm rounded-xl shadow-lg border border-gray-200 hover:shadow-xl transition-shadow"
      whileHover={{ y: -5 }}
    >
      <Icon className={`w-8 h-8 ${item.color || 'text-blue-600'} mt-1 flex-shrink-0`} />
      <div>
        <h3 className="text-lg font-bold text-gray-800">{item.title}</h3>
        <p className="text-gray-600 text-sm">{item.description}</p>
      </div>
    </motion.div>
  );
};

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
