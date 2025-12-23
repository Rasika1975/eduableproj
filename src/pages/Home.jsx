import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  Book,
  Zap,
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
  ChevronRight,
  Star,
  Users,
  Award,
  TrendingUp,
  CheckCircle,
  ArrowRight,
  Play,
  FileText,
  Target,
  Shield,
  Sparkles
} from "lucide-react";

const Home = () => {
  const [activeTab, setActiveTab] = useState("overview");

  const disabilities = [
    {
      title: "Dyslexia",
      description: "Reading, writing, and spelling difficulties",
      icon: BookOpen,
      color: "text-[#7E8BFF]",
      bgColor: "bg-[#7E8BFF]/10",
      support: ["Dyslexia-friendly fonts", "Text spacing tools", "Audio support"]
    },
    {
      title: "ADHD",
      description: "Focus and attention maintenance challenges",
      icon: Zap,
      color: "text-[#F8B9A8]",
      bgColor: "bg-[#F8B9A8]/20",
      support: ["Structured routines", "Break reminders", "Gamified focus"]
    },
    {
      title: "Autism (ASD)",
      description: "Communication and social interaction variations",
      icon: Heart,
      color: "text-[#FF8A80]",
      bgColor: "bg-[#FF8A80]/10",
      support: ["Visual schedules", "Social stories", "Predictable patterns"]
    },
    {
      title: "Visual Impairment",
      description: "Low vision or blindness",
      icon: EyeOff,
      color: "text-[#2E2A3F]",
      bgColor: "bg-[#2E2A3F]/5",
      support: ["Screen readers", "Voice navigation", "Braille displays"]
    },
    {
      title: "Hearing Impairment",
      description: "Hearing loss or deafness",
      icon: EarOff,
      color: "text-[#C9C4FF]",
      bgColor: "bg-[#C9C4FF]/20",
      support: ["Visual captions", "Sign language videos", "Written instructions"]
    },
    {
      title: "Speech Disorders",
      description: "Verbal expression challenges",
      icon: MessageCircle,
      color: "text-[#7E8BFF]",
      bgColor: "bg-[#7E8BFF]/10",
      support: ["AAC devices", "Text communication", "Symbol boards"]
    }
  ];

  const stats = [
    { icon: Users, number: "10,000+", label: "Active Learners", color: "text-[#7E8BFF]" },
    { icon: Award, number: "500+", label: "Certified Educators", color: "text-[#2E2A3F]" },
    { icon: Star, number: "4.9/5", label: "Parent Satisfaction", color: "text-[#F8B9A8]" },
    { icon: TrendingUp, number: "95%", label: "Milestone Achievement", color: "text-[#FF8A80]" }
  ];

  return (
    <div className="min-h-screen bg-[#FFF8F4]">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-[#FCE4E6] to-[#C9C4FF] pt-20 pb-32">
        <div className="absolute inset-0 bg-grid-slate-100/50 [mask-image:linear-gradient(0deg,white,rgba(255,255,255,0.6))] pointer-events-none" />
        
        <div className="relative max-w-7xl mx-auto px-6">
          <motion.div 
            className="text-center max-w-4xl mx-auto mb-16"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#7E8BFF]/20 rounded-full mb-8">
              <Sparkles className="w-4 h-4 text-[#7E8BFF]" />
              <span className="text-sm font-semibold text-[#2E2A3F]">Accessible Education for Every Child</span>
            </div>

            <h1 className="text-4xl md:text-6xl font-bold text-[#1F1F2E] mb-6 leading-tight">
              Transform Learning
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#7E8BFF] via-[#FF8A80] to-[#F8B9A8]">
                For Every Ability
              </span>
            </h1>

            <p className="text-sm md:text-base text-[#1F1F2E]/80 mb-12 leading-relaxed max-w-2xl mx-auto">
              Evidence-based, AI-powered educational platform designed specifically for children with diverse learning needs and disabilities.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
              <Link to="/signup">
                <motion.button
                  className="px-8 py-4 bg-[#7E8BFF] text-white font-semibold rounded-lg shadow-lg hover:bg-[#7E8BFF]/90 transition-all flex items-center gap-2 justify-center text-base"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Start Free Trial
                  <ArrowRight className="w-5 h-5" />
                </motion.button>
              </Link>

              <Link to="/mock-test">
                <motion.button
                  className="px-8 py-4 bg-[#FFF8F4] text-[#1F1F2E] font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all flex items-center gap-2 justify-center border-2 border-[#1F1F2E]/10 text-base"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <FileText className="w-5 h-5" />
                  Take Assessment Test
                </motion.button>
              </Link>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat, idx) => (
                <motion.div 
                  key={idx}
                  className="bg-[#FFF8F4] rounded-2xl p-6 shadow-lg border border-transparent"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: idx * 0.1 + 0.5 }}
                >
                  <stat.icon className={`w-8 h-8 mx-auto mb-3 ${stat.color}`} />
                  <div className="text-3xl font-bold text-[#1F1F2E] mb-1">{stat.number}</div>
                  <div className="text-sm text-[#1F1F2E]/80 font-medium">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Disabilities Support Section */}
      <section className="py-24 px-6 bg-gradient-to-br from-[#FCE4E6]/40 to-[#C9C4FF]/40">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-[#1F1F2E] mb-4">
              Specialized Support Systems
            </h2>
            <p className="text-xl text-[#1F1F2E]/80 max-w-3xl mx-auto">
              Comprehensive assistance tailored for diverse learning challenges and disabilities
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {disabilities.map((disability, idx) => (
              <motion.div
                key={idx}
                className={`${disability.bgColor} rounded-2xl p-8 border-2 border-transparent hover:border-[#7E8BFF]/30 hover:shadow-xl transition-all`}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
              >
                <disability.icon className={`w-12 h-12 ${disability.color} mb-4`} />
                <h3 className="text-2xl font-bold text-[#1F1F2E] mb-2">
                  {disability.title}
                </h3>
                <p className="text-[#1F1F2E]/90 mb-6 leading-relaxed">
                  {disability.description}
                </p>
                
                <div className="border-t border-black/10 pt-4">
                  <p className="text-sm font-semibold text-[#1F1F2E] mb-3">Support Features:</p>
                  <ul className="space-y-2">
                    {disability.support.map((item, sIdx) => (
                      <li key={sIdx} className="flex items-center gap-2 text-sm text-[#1F1F2E]/80">
                        <div className={`w-1.5 h-1.5 ${disability.color.replace('text-', 'bg-')} rounded-full`} />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Mock Assessment CTA Section */}
      <section className="py-24 px-6 bg-[#FFF8F4]">
        <div className="max-w-5xl mx-auto">
          <motion.div
            className="bg-gradient-to-br from-[#7E8BFF] via-[#FF8A80] to-[#F8B9A8] rounded-3xl p-12 text-center text-white shadow-2xl"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
          >
            <div className="w-20 h-20 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center mx-auto mb-6">
              <FileText className="w-10 h-10 text-white" />
            </div>
            
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Not Sure Where to Start?
            </h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
              Take our comprehensive assessment test to identify your child's unique learning needs and get personalized recommendations.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/mock-test">
                <motion.button
                  className="px-8 py-4 bg-[#FFF8F4] text-[#2E2A3F] font-bold rounded-lg shadow-lg hover:shadow-xl transition-all flex items-center gap-2 justify-center text-lg"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Start Assessment
                  <Play className="w-5 h-5" />
                </motion.button>
              </Link>

              <button className="px-8 py-4 bg-white/10 backdrop-blur-sm text-white font-bold rounded-lg border-2 border-white/30 hover:bg-white/20 transition-all flex items-center gap-2 justify-center text-lg">
                <Shield className="w-5 h-5" />
                Free & Confidential
              </button>
            </div>

            <div className="mt-8 flex items-center justify-center gap-8 text-sm opacity-80">
              <div className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5" />
                <span>15-20 minutes</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5" />
                <span>Science-backed</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5" />
                <span>Instant results</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-24 px-6 bg-gradient-to-br from-[#FCE4E6]/40 to-[#C9C4FF]/40">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-[#1F1F2E] mb-4">
              How It Works
            </h2>
            <p className="text-xl text-[#1F1F2E]/80 max-w-3xl mx-auto">
              A simple, four-step process to transform your child's learning journey
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { step: "01", title: "Assessment", desc: "Complete our comprehensive evaluation to understand your child's unique needs", icon: FileText },
              { step: "02", title: "Personalization", desc: "Receive a tailored learning path designed specifically for your child", icon: Target },
              { step: "03", title: "Learning", desc: "Engage with adaptive content that grows with your child's progress", icon: BookOpen },
              { step: "04", title: "Progress", desc: "Track milestones and celebrate achievements together", icon: BarChart }
            ].map((item, idx) => (
              <motion.div
                key={idx}
                className="relative"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.15 }}
              >
                <div className="bg-[#FFF8F4] rounded-2xl p-8 shadow-lg border border-transparent h-full">
                  <div className="text-5xl font-bold text-[#7E8BFF]/20 mb-4">{item.step}</div>
                  <item.icon className="w-10 h-10 text-[#7E8BFF] mb-4" />
                  <h3 className="text-xl font-bold text-[#1F1F2E] mb-3">{item.title}</h3>
                  <p className="text-[#1F1F2E]/80 leading-relaxed">{item.desc}</p>
                </div>
                
                {idx < 3 && (
                  <ChevronRight className="hidden md:block absolute -right-4 top-1/2 -translate-y-1/2 w-8 h-8 text-[#7E8BFF]/40" />
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-24 px-6 bg-[#FFF8F4]">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-[#1F1F2E] mb-6">
            Let's Build Your Child's Future Together
          </h2>
          <p className="text-xl text-[#1F1F2E]/80 mb-12">
            Join thousands of families who have transformed their children's learning experience
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/signup">
              <motion.button
                className="px-10 py-5 bg-[#7E8BFF] text-white font-bold rounded-lg shadow-lg hover:bg-[#7E8BFF]/90 transition-all flex items-center gap-2 justify-center text-base"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Get Started Free
                <ArrowRight className="w-5 h-5" />
              </motion.button>
            </Link>

            <Link to="/login">
              <motion.button
                className="px-10 py-5 bg-[#FFF8F4] text-[#1F1F2E] font-bold rounded-lg shadow-lg hover:shadow-xl transition-all flex items-center gap-2 justify-center border-2 border-[#1F1F2E]/10 text-base"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Sign In
              </motion.button>
            </Link>
          </div>

          <p className="text-sm text-[#1F1F2E]/70 mt-8">
            No credit card required • 14-day free trial • Cancel anytime
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#2E2A3F] text-[#FFF8F4] py-16 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-gradient-to-br from-[#7E8BFF] to-[#C9C4FF] rounded-lg flex items-center justify-center">
                  <span className="text-xl font-bold text-[#2E2A3F]">E</span>
                </div>
                <span className="text-2xl font-bold text-white">EduAccess</span>
              </div>
              <p className="text-[#FFF8F4]/70">Making education accessible for every child, regardless of ability.</p>
            </div>

            <div>
              <h4 className="font-bold mb-4">Services</h4>
              <ul className="space-y-2 text-[#FFF8F4]/70">
                <li><a href="#" className="hover:text-[#FFF8F4] transition-colors">Personalized Learning</a></li>
                <li><a href="#" className="hover:text-[#FFF8F4] transition-colors">Assistive Technology</a></li>
                <li><a href="#" className="hover:text-[#FFF8F4] transition-colors">Progress Analytics</a></li>
                <li><a href="#" className="hover:text-[#FFF8F4] transition-colors">Parent Resources</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold mb-4">Support</h4>
              <ul className="space-y-2 text-[#FFF8F4]/70">
                <li><a href="#" className="hover:text-[#FFF8F4] transition-colors">Help Center</a></li>
                <li><a href="#" className="hover:text-[#FFF8F4] transition-colors">Contact Us</a></li>
                <li><a href="#" className="hover:text-[#FFF8F4] transition-colors">Community Forum</a></li>
                <li><Link to="/mock-test" className="hover:text-[#FFF8F4] transition-colors">Assessment Test</Link></li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold mb-4">Legal</h4>
              <ul className="space-y-2 text-[#FFF8F4]/70">
                <li><a href="#" className="hover:text-[#FFF8F4] transition-colors">Privacy Policy</a></li>
                <li><a href="#" className="hover:text-[#FFF8F4] transition-colors">Terms of Service</a></li>
                <li><a href="#" className="hover:text-[#FFF8F4] transition-colors">Accessibility</a></li>
              </ul>
            </div>
          </div>

          <div className="border-t border-white/10 pt-8 text-center text-[#FFF8F4]/60">
            <p>&copy; {new Date().getFullYear()} EduAccess. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Home;