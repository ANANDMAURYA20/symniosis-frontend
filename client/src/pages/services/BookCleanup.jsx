import React from "react";
import { BookOpen, Shield, Clock, CheckCircle, ArrowRight, FileText, BarChart3, Zap } from "lucide-react";
import { Link } from "react-router-dom";

const BookCleanup = () => {
  const services = [
    {
      icon: BookOpen,
      title: "Data Cleanup",
      description: "Comprehensive cleanup of accounting records and data"
    },
    {
      icon: Shield,
      title: "Reconciliation",
      description: "Thorough reconciliation of accounts and ledgers"
    },
    {
      icon: Clock,
      title: "Historical Review",
      description: "Review and correction of historical accounting data"
    },
    {
      icon: FileText,
      title: "Documentation",
      description: "Proper documentation and organization of records"
    },
    {
      icon: BarChart3,
      title: "Analysis",
      description: "Detailed analysis of financial data and trends"
    },
    {
      icon: Zap,
      title: "Process Improvement",
      description: "Implementation of improved accounting processes"
    }
  ];

  const benefits = [
    "Clean and accurate financial records",
    "Improved financial reporting",
    "Better decision-making capabilities",
    "Enhanced compliance and audit readiness",
    "Streamlined accounting processes",
    "Reduced risk of errors and discrepancies"
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-gray-900 to-black py-20 relative overflow-hidden">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -left-40 w-80 h-80 bg-gradient-to-r from-amber-600/20 to-orange-600/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -top-20 -right-20 w-60 h-60 bg-gradient-to-r from-orange-500/15 to-amber-600/15 rounded-full blur-2xl animate-bounce"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-amber-500/20 to-orange-500/20 backdrop-blur-sm border border-white/10 rounded-full text-sm font-medium mb-6">
            <span className="w-2 h-2 bg-amber-400 rounded-full mr-2 animate-pulse"></span>
            <span className="text-white">Book Cleanup</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Professional <span className="bg-gradient-to-r from-amber-400 to-orange-400 bg-clip-text text-transparent">Book Cleanup</span> Services
          </h1>
          <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
            Comprehensive book cleanup services to organize, reconcile, and optimize your accounting records 
            for better financial management and compliance.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div 
                key={index} 
                className="group bg-gray-900/80 backdrop-blur-xl border border-white/10 rounded-2xl p-6 hover:border-amber-500/30 transition-all duration-500 transform hover:-translate-y-2"
              >
                <div className="bg-gradient-to-r from-amber-500/20 to-orange-500/20 w-12 h-12 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  <Icon className="w-6 h-6 text-amber-400" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{service.title}</h3>
                <p className="text-gray-300 text-sm leading-relaxed">{service.description}</p>
              </div>
            );
          })}
        </div>

        <div className="bg-gradient-to-r from-gray-900/80 to-black/80 backdrop-blur-xl border border-white/10 rounded-2xl p-8 mb-16">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-white mb-4">Benefits of Book Cleanup</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex items-center space-x-3">
                <CheckCircle className="w-5 h-5 text-amber-400 flex-shrink-0" />
                <span className="text-gray-300">{benefit}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="text-center bg-gradient-to-r from-gray-900/80 to-black/80 backdrop-blur-xl border border-white/10 rounded-3xl p-12">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready for Professional <span className="bg-gradient-to-r from-amber-400 to-orange-400 bg-clip-text text-transparent">Book Cleanup</span>?
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Let our experts clean up and organize your accounting records for better financial management.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Link 
              to="/contact"
              className="bg-gradient-to-r from-amber-500 to-orange-600 text-white px-8 py-4 rounded-xl font-semibold hover:from-amber-600 hover:to-orange-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-amber-500/25 inline-flex items-center"
            >
              Get Started Today
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
            <Link 
              to="/contact"
              className="border-2 border-amber-500 text-amber-400 px-8 py-4 rounded-xl font-semibold hover:bg-amber-500 hover:text-white transition-all duration-300 transform hover:scale-105 inline-flex items-center"
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

export default BookCleanup; 