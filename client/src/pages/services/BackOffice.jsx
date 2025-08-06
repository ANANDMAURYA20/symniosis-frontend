import React from "react";
import { FileText, Users, Shield, Zap, ArrowRight, CheckCircle, BarChart3, Clock } from "lucide-react";

const BackOffice = () => {
  const features = [
    {
      icon: FileText,
      title: "Document Management",
      description: "Streamlined document processing, storage, and retrieval systems"
    },
    {
      icon: Users,
      title: "Team Coordination",
      description: "Efficient team management and workflow coordination"
    },
    {
      icon: Shield,
      title: "Quality Control",
      description: "Rigorous quality checks and compliance monitoring"
    },
    {
      icon: Zap,
      title: "Process Automation",
      description: "Automated workflows to increase efficiency and reduce errors"
    },
    {
      icon: BarChart3,
      title: "Performance Analytics",
      description: "Comprehensive reporting and performance tracking"
    },
    {
      icon: Clock,
      title: "24/7 Support",
      description: "Round-the-clock support for your business operations"
    }
  ];

  const benefits = [
    "Reduced operational costs by up to 40%",
    "Improved accuracy and compliance",
    "Faster turnaround times",
    "Scalable solutions for growth",
    "Enhanced data security",
    "Access to specialized expertise"
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-gray-900 to-black py-20 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -left-40 w-80 h-80 bg-gradient-to-r from-blue-600/20 to-cyan-600/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -top-20 -right-20 w-60 h-60 bg-gradient-to-r from-purple-500/15 to-pink-600/15 rounded-full blur-2xl animate-bounce"></div>
        <div className="absolute top-1/2 left-1/4 w-32 h-32 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 rounded-full blur-xl animate-pulse delay-1000"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-blue-500/20 to-cyan-500/20 backdrop-blur-sm border border-white/10 rounded-full text-sm font-medium mb-6">
            <span className="w-2 h-2 bg-blue-400 rounded-full mr-2 animate-pulse"></span>
            <span className="text-white">Back Office Solutions</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Comprehensive <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">Back Office</span> Solutions
          </h1>
          <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
            Streamline your business operations with our comprehensive back-office solutions. 
            We provide end-to-end support for CPAs and accounting firms, ensuring efficiency, 
            accuracy, and compliance in all your business processes.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div 
                key={index} 
                className="group bg-gray-900/80 backdrop-blur-xl border border-white/10 rounded-2xl p-6 hover:border-blue-500/30 transition-all duration-500 transform hover:-translate-y-2"
              >
                <div className="bg-gradient-to-r from-blue-500/20 to-cyan-500/20 w-12 h-12 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  <Icon className="w-6 h-6 text-blue-400" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                <p className="text-gray-300 text-sm leading-relaxed">{feature.description}</p>
              </div>
            );
          })}
        </div>

        {/* Benefits Section */}
        <div className="bg-gradient-to-r from-gray-900/80 to-black/80 backdrop-blur-xl border border-white/10 rounded-2xl p-8 mb-16">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-white mb-4">Why Choose Our Back Office Solutions?</h2>
            <p className="text-gray-300 max-w-2xl mx-auto">
              Our back-office solutions are designed to transform your business operations 
              and drive sustainable growth through efficiency and innovation.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex items-center space-x-3">
                <CheckCircle className="w-5 h-5 text-blue-400 flex-shrink-0" />
                <span className="text-gray-300">{benefit}</span>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center bg-gradient-to-r from-gray-900/80 to-black/80 backdrop-blur-xl border border-white/10 rounded-3xl p-12">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to Transform Your <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">Back Office</span>?
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Let us help you streamline your operations and focus on what matters most - growing your business.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <button 
              className="bg-gradient-to-r from-blue-500 to-cyan-600 text-white px-8 py-4 rounded-xl font-semibold hover:from-blue-600 hover:to-cyan-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-blue-500/25 inline-flex items-center cursor-pointer"
              style={{ color: 'white !important' }}
            >
              <span style={{ color: 'white' }}>Get Started Today</span>
              <ArrowRight className="ml-2 w-5 h-5" style={{ color: 'white' }} />
            </button>
            <button 
              className="border-2 border-blue-500 text-white px-8 py-4 rounded-xl font-semibold hover:bg-blue-500 hover:text-white transition-all duration-300 transform hover:scale-105 inline-flex items-center cursor-pointer"
              style={{ color: 'white !important' }}
            >
              <span style={{ color: 'white' }}>Schedule a Consultation</span>
              <ArrowRight className="ml-2 w-5 h-5" style={{ color: 'white' }} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BackOffice;