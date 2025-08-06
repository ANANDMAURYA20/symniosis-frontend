import React from "react";
import { Store, BarChart3, FileText, Shield, Clock, CheckCircle, ArrowRight, Users } from "lucide-react";

const Restaurant = () => {
  const services = [
    {
      icon: Store,
      title: "Cost Analysis",
      description: "Detailed cost analysis for food, labor, and overhead expenses"
    },
    {
      icon: BarChart3,
      title: "Inventory Management",
      description: "Comprehensive inventory tracking and management systems"
    },
    {
      icon: FileText,
      title: "POS Integration",
      description: "Seamless integration with point-of-sale systems"
    },
    {
      icon: Shield,
      title: "Financial Reporting",
      description: "Specialized financial reports for restaurant operations"
    },
    {
      icon: Clock,
      title: "Monthly Management",
      description: "Complete monthly accounting and financial management"
    },
    {
      icon: Users,
      title: "Compliance Support",
      description: "Ensuring compliance with restaurant-specific regulations"
    }
  ];

  const benefits = [
    "Improved profit margins through cost control",
    "Better inventory management and waste reduction",
    "Enhanced financial visibility and reporting",
    "Compliance with restaurant regulations",
    "Streamlined operations and processes",
    "Expert understanding of restaurant industry"
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-gray-900 to-black py-20 relative overflow-hidden">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -left-40 w-80 h-80 bg-gradient-to-r from-orange-600/20 to-red-600/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -top-20 -right-20 w-60 h-60 bg-gradient-to-r from-red-500/15 to-orange-600/15 rounded-full blur-2xl animate-bounce"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-orange-500/20 to-red-500/20 backdrop-blur-sm border border-white/10 rounded-full text-sm font-medium mb-6">
            <span className="w-2 h-2 bg-orange-400 rounded-full mr-2 animate-pulse"></span>
            <span className="text-white">Restaurant Accounting</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Specialized <span className="bg-gradient-to-r from-orange-400 to-red-400 bg-clip-text text-transparent">Restaurant Accounting</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
            Expert accounting services specifically designed for restaurants and food service businesses. 
            We understand the unique challenges of the restaurant industry and provide tailored solutions.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div 
                key={index} 
                className="group bg-gray-900/80 backdrop-blur-xl border border-white/10 rounded-2xl p-6 hover:border-orange-500/30 transition-all duration-500 transform hover:-translate-y-2"
              >
                <div className="bg-gradient-to-r from-orange-500/20 to-red-500/20 w-12 h-12 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  <Icon className="w-6 h-6 text-orange-400" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{service.title}</h3>
                <p className="text-gray-300 text-sm leading-relaxed">{service.description}</p>
              </div>
            );
          })}
        </div>

        <div className="bg-gradient-to-r from-gray-900/80 to-black/80 backdrop-blur-xl border border-white/10 rounded-2xl p-8 mb-16">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-white mb-4">Why Choose Our Restaurant Accounting?</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex items-center space-x-3">
                <CheckCircle className="w-5 h-5 text-orange-400 flex-shrink-0" />
                <span className="text-gray-300">{benefit}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="text-center bg-gradient-to-r from-gray-900/80 to-black/80 backdrop-blur-xl border border-white/10 rounded-3xl p-12">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready for Expert <span className="bg-gradient-to-r from-orange-400 to-red-400 bg-clip-text text-transparent">Restaurant Accounting</span>?
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Let our restaurant accounting specialists help you optimize your operations and maximize profits.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <button 
              className="bg-gradient-to-r from-orange-500 to-red-600 text-white px-8 py-4 rounded-xl font-semibold hover:from-orange-600 hover:to-red-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-orange-500/25 inline-flex items-center cursor-pointer"
              style={{ color: 'white !important' }}
            >
              <span style={{ color: 'white' }}>Get Started Today</span>
              <ArrowRight className="ml-2 w-5 h-5" style={{ color: 'white' }} />
            </button>
            <button 
              className="border-2 border-orange-500 text-white px-8 py-4 rounded-xl font-semibold hover:bg-orange-500 hover:text-white transition-all duration-300 transform hover:scale-105 inline-flex items-center cursor-pointer"
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

export default Restaurant;