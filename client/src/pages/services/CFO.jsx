import React from "react";
import { BarChart4, Shield, Clock, CheckCircle, ArrowRight, FileText, Users, Zap } from "lucide-react";
import { Link } from "react-router-dom";

const CFO = () => {
  const services = [
    {
      icon: BarChart4,
      title: "Strategic Planning",
      description: "Comprehensive strategic financial planning and advisory"
    },
    {
      icon: Shield,
      title: "Risk Management",
      description: "Financial risk assessment and mitigation strategies"
    },
    {
      icon: Clock,
      title: "Performance Analysis",
      description: "In-depth financial performance analysis and reporting"
    },
    {
      icon: FileText,
      title: "Financial Reporting",
      description: "Executive-level financial reporting and insights"
    },
    {
      icon: Users,
      title: "Team Leadership",
      description: "Financial team leadership and development"
    },
    {
      icon: Zap,
      title: "Growth Advisory",
      description: "Strategic growth planning and execution support"
    }
  ];

  const benefits = [
    "Executive-level financial leadership",
    "Strategic financial planning and execution",
    "Enhanced financial performance and profitability",
    "Improved risk management and compliance",
    "Better investor and stakeholder relations",
    "Strategic growth and expansion support"
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-gray-900 to-black py-20 relative overflow-hidden">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -left-40 w-80 h-80 bg-gradient-to-r from-violet-600/20 to-purple-600/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -top-20 -right-20 w-60 h-60 bg-gradient-to-r from-purple-500/15 to-violet-600/15 rounded-full blur-2xl animate-bounce"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-violet-500/20 to-purple-500/20 backdrop-blur-sm border border-white/10 rounded-full text-sm font-medium mb-6">
            <span className="w-2 h-2 bg-violet-400 rounded-full mr-2 animate-pulse"></span>
            <span className="text-white">CFO Services</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Professional <span className="bg-gradient-to-r from-violet-400 to-purple-400 bg-clip-text text-transparent">CFO Services</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
            Executive-level CFO services to provide strategic financial leadership, planning, and advisory 
            to drive your business growth and financial success.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div 
                key={index} 
                className="group bg-gray-900/80 backdrop-blur-xl border border-white/10 rounded-2xl p-6 hover:border-violet-500/30 transition-all duration-500 transform hover:-translate-y-2"
              >
                <div className="bg-gradient-to-r from-violet-500/20 to-purple-500/20 w-12 h-12 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  <Icon className="w-6 h-6 text-violet-400" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{service.title}</h3>
                <p className="text-gray-300 text-sm leading-relaxed">{service.description}</p>
              </div>
            );
          })}
        </div>

        <div className="bg-gradient-to-r from-gray-900/80 to-black/80 backdrop-blur-xl border border-white/10 rounded-2xl p-8 mb-16">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-white mb-4">Benefits of Professional CFO Services</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex items-center space-x-3">
                <CheckCircle className="w-5 h-5 text-violet-400 flex-shrink-0" />
                <span className="text-gray-300">{benefit}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="text-center bg-gradient-to-r from-gray-900/80 to-black/80 backdrop-blur-xl border border-white/10 rounded-3xl p-12">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready for Professional <span className="bg-gradient-to-r from-violet-400 to-purple-400 bg-clip-text text-transparent">CFO Services</span>?
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Let our executive-level financial experts provide strategic leadership for your business growth and success.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Link 
              to="/contact"
              className="bg-gradient-to-r from-violet-500 to-purple-600 text-white px-8 py-4 rounded-xl font-semibold hover:from-violet-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-violet-500/25 inline-flex items-center"
            >
              Get Started Today
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
            <Link 
              to="/contact"
              className="border-2 border-violet-500 text-violet-400 px-8 py-4 rounded-xl font-semibold hover:bg-violet-500 hover:text-white transition-all duration-300 transform hover:scale-105 inline-flex items-center"
            >
              Schedule a Consultation
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CFO; 