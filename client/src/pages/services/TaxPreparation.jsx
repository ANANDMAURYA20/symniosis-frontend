import React from "react";
import { Calculator, FileText, Shield, Clock, CheckCircle, ArrowRight, Users, BarChart3 } from "lucide-react";

const TaxPreparation = () => {
  const services = [
    {
      icon: Calculator,
      title: "Individual Tax Returns",
      description: "Comprehensive individual tax preparation and filing services"
    },
    {
      icon: FileText,
      title: "Business Tax Returns",
      description: "Complete business tax preparation for corporations, partnerships, and LLCs"
    },
    {
      icon: Shield,
      title: "Tax Review Services",
      description: "Thorough review and quality assurance for all tax returns"
    },
    {
      icon: Clock,
      title: "Tax Planning",
      description: "Strategic tax planning to minimize liabilities and maximize savings"
    },
    {
      icon: Users,
      title: "Multi-State Returns",
      description: "Expert handling of multi-state tax obligations"
    },
    {
      icon: BarChart3,
      title: "Tax Compliance",
      description: "Ensuring full compliance with all federal and state tax regulations"
    }
  ];

  const benefits = [
    "Expert tax professionals with years of experience",
    "Maximum refunds and minimum tax liability",
    "100% accuracy guarantee",
    "Fast turnaround times",
    "Year-round support and consultation",
    "Secure and confidential handling of your data"
  ];

  const specialties = [
    "Real Estate Tax",
    "Small Business Tax",
    "Estate & Trust Tax",
    "International Tax",
    "Non-Profit Tax",
    "Partnership Tax"
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-gray-900 to-black py-20 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -left-40 w-80 h-80 bg-gradient-to-r from-purple-600/20 to-pink-600/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -top-20 -right-20 w-60 h-60 bg-gradient-to-r from-cyan-500/15 to-blue-600/15 rounded-full blur-2xl animate-bounce"></div>
        <div className="absolute top-1/2 left-1/4 w-32 h-32 bg-gradient-to-r from-pink-500/10 to-purple-500/10 rounded-full blur-xl animate-pulse delay-1000"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-purple-500/20 to-pink-500/20 backdrop-blur-sm border border-white/10 rounded-full text-sm font-medium mb-6">
            <span className="w-2 h-2 bg-purple-400 rounded-full mr-2 animate-pulse"></span>
            <span className="text-white">Tax Preparation Services</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Professional <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">Tax Preparation</span> Services
          </h1>
          <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
            Expert tax preparation services for individuals and businesses. Our certified professionals 
            ensure accuracy, maximize your refunds, and provide year-round support for all your tax needs.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div 
                key={index} 
                className="group bg-gray-900/80 backdrop-blur-xl border border-white/10 rounded-2xl p-6 hover:border-purple-500/30 transition-all duration-500 transform hover:-translate-y-2"
              >
                <div className="bg-gradient-to-r from-purple-500/20 to-pink-500/20 w-12 h-12 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  <Icon className="w-6 h-6 text-purple-400" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{service.title}</h3>
                <p className="text-gray-300 text-sm leading-relaxed">{service.description}</p>
              </div>
            );
          })}
        </div>

        {/* Specialties Section */}
        <div className="bg-gradient-to-r from-gray-900/80 to-black/80 backdrop-blur-xl border border-white/10 rounded-2xl p-8 mb-16">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-white mb-4">Tax Specialties</h2>
            <p className="text-gray-300 max-w-2xl mx-auto">
              Our team specializes in various tax areas to provide comprehensive solutions for all your tax needs.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {specialties.map((specialty, index) => (
              <div key={index} className="flex items-center space-x-3 p-4 bg-gray-800/50 rounded-xl">
                <CheckCircle className="w-5 h-5 text-purple-400 flex-shrink-0" />
                <span className="text-gray-300 font-medium">{specialty}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Benefits Section */}
        <div className="bg-gradient-to-r from-gray-900/80 to-black/80 backdrop-blur-xl border border-white/10 rounded-2xl p-8 mb-16">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-white mb-4">Why Choose Our Tax Services?</h2>
            <p className="text-gray-300 max-w-2xl mx-auto">
              Experience the difference with our professional tax preparation services designed 
              to maximize your benefits and ensure compliance.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex items-center space-x-3">
                <CheckCircle className="w-5 h-5 text-purple-400 flex-shrink-0" />
                <span className="text-gray-300">{benefit}</span>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center bg-gradient-to-r from-gray-900/80 to-black/80 backdrop-blur-xl border border-white/10 rounded-3xl p-12">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready for Expert <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">Tax Preparation</span>?
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Let our certified tax professionals handle your tax preparation needs with accuracy and expertise.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <button 
              className="bg-gradient-to-r from-purple-500 to-pink-600 text-white px-8 py-4 rounded-xl font-semibold hover:from-purple-600 hover:to-pink-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-purple-500/25 inline-flex items-center cursor-pointer"
              style={{ color: 'white !important' }}
            >
              <span style={{ color: 'white' }}>Get Started Today</span>
              <ArrowRight className="ml-2 w-5 h-5" style={{ color: 'white' }} />
            </button>
            <button 
              className="border-2 border-purple-500 text-white px-8 py-4 rounded-xl font-semibold hover:bg-purple-500 hover:text-white transition-all duration-300 transform hover:scale-105 inline-flex items-center cursor-pointer"
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

export default TaxPreparation;