import React, { useState, useEffect } from "react";
import { Users, Calculator, BookOpen, ArrowRight, Building2, FileSpreadsheet, ClipboardCheck, FileText } from "lucide-react";

const AboutSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeCard, setActiveCard] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 200);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveCard((prev) => (prev + 1) % 3);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const services = [
    {
      icon: Calculator,
      title: "Bookkeeping & Accounting",
      description: "We provide accurate back office solutions for your bookkeeping and accounting needs, managing daily and monthly bookkeeping tasks. From routine transactions to financial statement preparation, we ensure timely delivery within deadlines."
    },
    {
      icon: FileText,
      title: "Tax Services",
      description: "Our comprehensive tax preparation, review, and planning services help CPA and EA firms manage their tax season workload effectively. We handle tax preparation so you can focus on client consulting and return filing."
    },
    {
      icon: ClipboardCheck,
      title: "Audit Assistance",
      description: "Our qualified audit team assists CPAs with client audit work, preparing necessary documentation and deliverables to ensure complete audit readiness and compliance."
    }
  ];

  return (
    <section className="relative min-h-screen bg-gradient-to-br from-slate-950 via-gray-900 to-black overflow-hidden py-20">
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-r from-purple-600/10 to-indigo-600/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-gradient-to-r from-cyan-500/8 to-blue-600/8 rounded-full blur-3xl animate-bounce"></div>
        <div className="absolute top-1/2 left-1/3 w-48 h-48 bg-gradient-to-r from-violet-500/5 to-purple-500/5 rounded-full blur-2xl animate-pulse delay-1000"></div>
        
        {/* Floating particles */}
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-cyan-400/20 rounded-full animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 2}s`,
              animationDuration: `${2 + Math.random() * 2}s`
            }}
          />
        ))}
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Header Section */}
        <div className={`text-center mb-16 transform transition-all duration-1000 ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
        }`}>
          <div className="inline-block mb-4">
            <span className="px-4 py-2 bg-gradient-to-r from-cyan-500/10 to-purple-500/10 border border-cyan-500/20 rounded-full text-cyan-400 text-sm font-medium tracking-wide">
              Back Office Solutions for Accounting Firms, CPA Firms and Enrolled Agents
            </span>
          </div>
          
          <h2 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white via-cyan-100 to-purple-200 bg-clip-text text-transparent">
            Symbiosis Infinity Solutions
          </h2>
          
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-purple-400 mx-auto rounded-full mb-8"></div>
          
          <p className="text-gray-300 text-lg max-w-3xl mx-auto">
            As a leading back office solutions provider based in Ahmedabad, India, we help Accounting Firms, CPAs, and Enrolled Agents across the United States with their bookkeeping, tax, and audit needs.
          </p>
        </div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          {/* Left Content */}
          <div className={`space-y-8 transform transition-all duration-1000 delay-300 ${
            isVisible ? 'translate-x-0 opacity-100' : '-translate-x-10 opacity-0'
          }`}>
            <div className="relative">
              <div className="absolute -left-4 top-0 w-1 h-full bg-gradient-to-b from-cyan-400 to-purple-400 rounded-full"></div>
              <div className="pl-8">
                <h3 className="text-2xl font-semibold text-white mb-4 flex items-center">
                  <span className="w-3 h-3 bg-cyan-400 rounded-full mr-3 animate-pulse"></span>
                  Our Expertise
                </h3>
                <p className="text-gray-300 text-lg leading-relaxed mb-6">
                  We specialize in providing accurate and timely back office solutions for bookkeeping, tax preparation, and audit assistance. Our dedicated team ensures that all deliverables meet the highest standards of quality and compliance, allowing you to focus on growing your practice.
                </p>
              </div>
            </div>

            <div className="relative">
              <div className="absolute -left-4 top-0 w-1 h-full bg-gradient-to-b from-purple-400 to-pink-400 rounded-full"></div>
              <div className="pl-8">
                <h3 className="text-2xl font-semibold text-white mb-4 flex items-center">
                  <span className="w-3 h-3 bg-purple-400 rounded-full mr-3 animate-pulse delay-500"></span>
                  Our Commitment
                </h3>
                <p className="text-gray-300 text-lg leading-relaxed mb-6">
                  We are committed to helping our clients focus on growth and client relationships while we handle their back office operations with precision and professionalism. Our team works diligently to ensure all deadlines are met and quality standards are exceeded.
                </p>
              </div>
            </div>
          </div>

          {/* Right Content - Interactive Stats */}
          <div className={`transform transition-all duration-1000 delay-500 ${
            isVisible ? 'translate-x-0 opacity-100' : 'translate-x-10 opacity-0'
          }`}>
            <div className="relative bg-gradient-to-br from-gray-900/50 to-black/50 backdrop-blur-xl border border-white/10 rounded-3xl p-8">
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 to-purple-500/5 rounded-3xl"></div>
              
              <div className="relative z-10">
                <h3 className="text-2xl font-bold text-white mb-8 text-center">Why Choose Us</h3>
                
                <div className="grid grid-cols-2 gap-6">
                  {[
                    { number: "15+", label: "Years Experience", color: "from-cyan-400 to-blue-400" },
                    { number: "1000+", label: "Projects Completed", color: "from-purple-400 to-pink-400" },
                    { number: "24/7", label: "Support Available", color: "from-green-400 to-teal-400" },
                    { number: "100%", label: "Client Satisfaction", color: "from-yellow-400 to-orange-400" }
                  ].map((stat, index) => (
                    <div 
                      key={index}
                      className="text-center p-4 rounded-xl bg-gradient-to-br from-white/5 to-white/0 border border-white/10 hover:border-white/20 transition-all duration-300 transform hover:scale-105"
                    >
                      <div className={`text-3xl font-bold bg-gradient-to-r ${stat.color} bg-clip-text text-transparent mb-2`}>
                        {stat.number}
                      </div>
                      <div className="text-gray-400 text-sm">{stat.label}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Service Cards */}
        <div className={`grid md:grid-cols-3 gap-6 transform transition-all duration-1000 delay-700 ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
        }`}>
          {services.map((service, index) => {
            const Icon = service.icon;
            const isActive = activeCard === index;
            
            return (
              <div
                key={index}
                className={`relative group cursor-pointer transform transition-all duration-500 ${
                  isActive ? 'scale-105' : 'hover:scale-105'
                }`}
                onMouseEnter={() => setActiveCard(index)}
              >
                <div className={`relative bg-gradient-to-br from-gray-900/80 to-black/80 backdrop-blur-xl border rounded-2xl p-6 transition-all duration-500 h-full ${
                  isActive ? 'border-cyan-400/50 shadow-lg shadow-cyan-400/20' : 'border-white/10 hover:border-white/20'
                }`}>
                  <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 to-purple-500/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  
                  <div className="relative z-10">
                    <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-4 transition-all duration-500 ${
                      isActive ? 'bg-gradient-to-br from-cyan-500 to-purple-500' : 'bg-gradient-to-br from-gray-700 to-gray-800 group-hover:from-cyan-500/20 group-hover:to-purple-500/20'
                    }`}>
                      <Icon size={24} className={`transition-colors duration-500 ${
                        isActive ? 'text-white' : 'text-gray-400 group-hover:text-cyan-400'
                      }`} />
                    </div>
                    
                    <h4 className="text-xl font-semibold text-white mb-2 group-hover:text-cyan-100 transition-colors duration-300">
                      {service.title}
                    </h4>
                    
                    <p className="text-gray-400 text-sm leading-relaxed group-hover:text-gray-300 transition-colors duration-300">
                      {service.description}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Call to Action */}
        <div className={`text-center mt-16 transform transition-all duration-1000 delay-1000 ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
        }`}>
          {/* <button className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-semibold rounded-xl hover:from-cyan-600 hover:to-purple-700 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-cyan-500/25 group">
            <span className="flex items-center">
              Get Started Today
              <ArrowRight size={20} className="ml-2 transform group-hover:translate-x-1 transition-transform duration-300" />
            </span>
          </button> */}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;