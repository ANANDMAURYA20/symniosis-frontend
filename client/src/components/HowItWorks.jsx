import React from "react";
import { Search, Users, Handshake, CheckCircle, ArrowRight } from "lucide-react";

const HowItWorks = () => {
  const steps = [
    {
      icon: Search,
      title: "Assessment & Planning",
      description: "We analyze your business needs and create a customized staffing plan that aligns with your goals and requirements.",
      details: [
        "Business requirement analysis",
        "Skill gap identification",
        "Customized staffing strategy",
        "Timeline and budget planning"
      ]
    },
    {
      icon: Users,
      title: "Talent Selection",
      description: "Our expert team carefully selects qualified professionals who match your specific requirements and company culture.",
      details: [
        "Rigorous screening process",
        "Skill assessment and testing",
        "Background verification",
        "Cultural fit evaluation"
      ]
    },
    {
      icon: Handshake,
      title: "Onboarding & Integration",
      description: "We ensure smooth integration of your virtual team members with proper training and support systems.",
      details: [
        "Comprehensive onboarding",
        "Technology setup and training",
        "Process documentation",
        "Ongoing support and guidance"
      ]
    },
    {
      icon: CheckCircle,
      title: "Ongoing Management",
      description: "We provide continuous support and management to ensure optimal performance and productivity of your virtual team.",
      details: [
        "Performance monitoring",
        "Regular feedback and reviews",
        "Continuous improvement",
        "24/7 support availability"
      ]
    }
  ];

  const benefits = [
    {
      title: "Cost Savings",
      description: "Reduce operational costs by up to 60% compared to traditional hiring",
      icon: "💰"
    },
    {
      title: "Scalability",
      description: "Easily scale your team up or down based on business needs",
      icon: "📈"
    },
    {
      title: "Access to Global Talent",
      description: "Tap into a worldwide pool of skilled professionals",
      icon: "🌍"
    },
    {
      title: "Flexibility",
      description: "Choose from various engagement models that suit your business",
      icon: "⚡"
    },
    {
      title: "Quality Assurance",
      description: "Our rigorous selection process ensures top-quality talent",
      icon: "✅"
    },
    {
      title: "Time Efficiency",
      description: "Get your team up and running in days, not months",
      icon: "⏰"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-gray-900 to-black py-20 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -left-40 w-80 h-80 bg-gradient-to-r from-purple-600/20 to-indigo-600/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -top-20 -right-20 w-60 h-60 bg-gradient-to-r from-cyan-500/15 to-blue-600/15 rounded-full blur-2xl animate-bounce"></div>
        <div className="absolute top-1/2 left-1/4 w-32 h-32 bg-gradient-to-r from-violet-500/10 to-purple-500/10 rounded-full blur-xl animate-pulse delay-1000"></div>
        <div className="absolute bottom-20 right-1/3 w-40 h-40 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 rounded-full blur-2xl animate-bounce delay-500"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 backdrop-blur-sm border border-white/10 rounded-full text-sm font-medium mb-6 animate-fade-in">
            <span className="w-2 h-2 bg-cyan-400 rounded-full mr-2 animate-pulse"></span>
            <span className="text-white">Our Process</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 animate-slide-up">
            How It <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">Works</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto animate-fade-in-delay">
            Our streamlined process makes it easy to build your perfect virtual team. 
            From initial assessment to ongoing management, we handle everything for you.
          </p>
        </div>

        {/* Process Steps */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-center text-white mb-12 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">Our 4-Step Process</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, index) => {
              const Icon = step.icon;
              return (
                <div key={index} className="relative animate-fade-in-up" style={{ animationDelay: `${index * 100}ms` }}>
                  {/* Step Number */}
                  <div className="absolute -top-4 -left-4 w-8 h-8 bg-gradient-to-r from-cyan-500 to-purple-600 text-white rounded-full flex items-center justify-center font-bold text-sm shadow-lg">
                    {index + 1}
                  </div>
                  
                  {/* Step Card */}
                  <div className="bg-gradient-to-br from-gray-900/80 to-black/80 backdrop-blur-xl border border-white/10 rounded-2xl p-6 shadow-2xl hover:shadow-cyan-500/20 transition-all duration-300 h-full transform hover:-translate-y-2">
                    <div className="flex items-center mb-4">
                      <div className="bg-gradient-to-r from-cyan-500/20 to-purple-500/20 p-3 rounded-xl mr-4 border border-cyan-500/30">
                        <Icon className="w-8 h-8 text-cyan-400" />
                      </div>
                      <h3 className="text-xl font-bold text-white">{step.title}</h3>
                    </div>
                    
                    <p className="text-gray-300 mb-4 leading-relaxed">{step.description}</p>
                    
                    <ul className="space-y-2">
                      {step.details.map((detail, detailIndex) => (
                        <li key={detailIndex} className="flex items-center text-sm text-gray-400">
                          <ArrowRight size={16} className="text-cyan-400 mr-2 flex-shrink-0" />
                          {detail}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Benefits Section */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-center text-white mb-12 bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">Why Choose Virtual Staffing?</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="bg-gradient-to-br from-gray-900/80 to-black/80 backdrop-blur-xl border border-white/10 rounded-2xl p-6 shadow-2xl hover:shadow-cyan-500/20 transition-all duration-300 transform hover:-translate-y-2 animate-fade-in-up" style={{ animationDelay: `${index * 100}ms` }}>
                <div className="text-4xl mb-4">{benefit.icon}</div>
                <h3 className="text-xl font-bold text-white mb-3">{benefit.title}</h3>
                <p className="text-gray-300 leading-relaxed">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Timeline Section */}
        <div className="bg-gradient-to-r from-gray-900/80 to-black/80 backdrop-blur-xl border border-white/10 rounded-2xl p-8 text-white mb-16 shadow-2xl">
          <h2 className="text-3xl font-bold text-center mb-8 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">Timeline</h2>
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div className="group">
              <div className="text-3xl font-bold mb-2 text-white">Day 1-3</div>
              <div className="text-cyan-100 group-hover:text-cyan-300 transition-colors duration-300">Initial Assessment</div>
            </div>
            <div className="group">
              <div className="text-3xl font-bold mb-2 text-white">Day 4-7</div>
              <div className="text-cyan-100 group-hover:text-cyan-300 transition-colors duration-300">Talent Selection</div>
            </div>
            <div className="group">
              <div className="text-3xl font-bold mb-2 text-white">Day 8-10</div>
              <div className="text-cyan-100 group-hover:text-cyan-300 transition-colors duration-300">Onboarding</div>
            </div>
            <div className="group">
              <div className="text-3xl font-bold mb-2 text-white">Day 11+</div>
              <div className="text-cyan-100 group-hover:text-cyan-300 transition-colors duration-300">Full Operation</div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <h2 className="text-3xl font-bold text-white mb-6 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">Ready to Get Started?</h2>
          <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
            Join hundreds of businesses that have successfully built their virtual teams with Symbiosis. 
            Let's start your journey today!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-3 rounded-xl font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-cyan-500/25">
              Start Your Assessment
            </button>
            <button className="border-2 border-cyan-500 text-cyan-400 px-8 py-3 rounded-xl font-semibold hover:bg-cyan-500 hover:text-white transition-all duration-300 transform hover:scale-105">
              Schedule a Demo
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HowItWorks; 