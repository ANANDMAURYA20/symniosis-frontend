import React from "react";
import { ArrowRight, Star, Users, BookOpen, Briefcase, CheckCircle } from "lucide-react";
import { Link } from "react-router-dom";

const features = [
  {
    icon: <Star className="w-8 h-8 text-cyan-400" />,
    title: "Expert Team",
    desc: "Our team consists of certified professionals with decades of combined experience in US accounting, tax, and business management."
  },
  {
    icon: <Users className="w-8 h-8 text-purple-400" />,
    title: "Personalized Service",
    desc: "We tailor our solutions to your unique business needs, ensuring you get the best value and results."
  },
  {
    icon: <BookOpen className="w-8 h-8 text-emerald-400" />,
    title: "Comprehensive Solutions",
    desc: "From bookkeeping to CFO services, we offer a full suite of accounting and tax solutions for businesses of all sizes."
  },
  {
    icon: <Briefcase className="w-8 h-8 text-pink-400" />,
    title: "Modern Technology",
    desc: "We leverage the latest cloud accounting and automation tools to deliver efficient, secure, and transparent services."
  }
];

const LearnMore = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-gray-900 to-black py-20 relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -left-40 w-80 h-80 bg-gradient-to-r from-cyan-600/20 to-indigo-600/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -top-20 -right-20 w-60 h-60 bg-gradient-to-r from-purple-500/15 to-blue-600/15 rounded-full blur-2xl animate-bounce"></div>
        <div className="absolute top-1/2 left-1/4 w-32 h-32 bg-gradient-to-r from-violet-500/10 to-purple-500/10 rounded-full blur-xl animate-pulse delay-1000"></div>
      </div>
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 backdrop-blur-sm border border-white/10 rounded-full text-sm font-medium mb-6 animate-fade-in">
            <span className="w-2 h-2 bg-cyan-400 rounded-full mr-2 animate-pulse"></span>
            <span className="text-white">Learn More</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 animate-slide-up">
            Discover <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">Symbiosis</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed animate-fade-in-delay">
            We are your trusted partner for virtual accounting, tax, and business solutions. Learn how our expertise, technology, and personalized approach can help your business thrive.
          </p>
        </div>
        {/* Features */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {features.map((f, i) => (
            <div key={i} className="bg-gray-900/80 backdrop-blur-xl border border-white/10 rounded-2xl p-8 flex flex-col items-center text-center shadow-2xl hover:shadow-cyan-500/20 transition-all duration-500 animate-fade-in-up" style={{ animationDelay: `${i * 100}ms` }}>
              <div className="mb-4">{f.icon}</div>
              <h3 className="text-2xl font-bold text-white mb-2">{f.title}</h3>
              <p className="text-gray-300 text-base">{f.desc}</p>
            </div>
          ))}
        </div>
        {/* CTA Section */}
        <div className="text-center bg-gradient-to-r from-gray-900/80 to-black/80 backdrop-blur-xl border border-white/10 rounded-3xl p-12 mb-16 shadow-2xl animate-fade-in-delay-2">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 animate-fade-in">
            Ready to Experience the <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">Symbiosis Advantage</span>?
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed animate-fade-in-delay">
            Connect with us today to explore how we can help you achieve your business goals with confidence.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center animate-fade-in-delay-2">
            <Link to="/contact" className="inline-flex items-center bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-xl font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-cyan-500/25">
              <span className="text-white">Contact Us</span> <ArrowRight className="ml-2 w-5 h-5 text-white" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LearnMore;
