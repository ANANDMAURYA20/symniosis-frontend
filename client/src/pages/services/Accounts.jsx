import React from "react";
import { DollarSign, BarChart3, FileText, Shield, Clock, CheckCircle, ArrowRight, Users } from "lucide-react";

const Accounts = () => {
  const services = [
    {
      icon: DollarSign,
      title: "AP & AR Management",
      description: "Complete accounts payable and receivable processing and management"
    },
    {
      icon: BarChart3,
      title: "Financial Reporting",
      description: "Comprehensive financial statements and performance analysis"
    },
    {
      icon: FileText,
      title: "General Ledger",
      description: "Accurate general ledger maintenance and reconciliation"
    },
    {
      icon: Shield,
      title: "Compliance Management",
      description: "Ensuring compliance with accounting standards and regulations"
    },
    {
      icon: Clock,
      title: "Monthly Close",
      description: "Timely and accurate monthly financial close processes"
    },
    {
      icon: Users,
      title: "Client Support",
      description: "Dedicated support for all accounting-related queries"
    }
  ];

  const benefits = [
    "Improved cash flow management",
    "Enhanced financial visibility",
    "Reduced accounting errors",
    "Timely financial reporting",
    "Cost-effective solutions",
    "Scalable accounting processes"
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-gray-900 to-black py-20 relative overflow-hidden">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -left-40 w-80 h-80 bg-gradient-to-r from-green-600/20 to-teal-600/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -top-20 -right-20 w-60 h-60 bg-gradient-to-r from-emerald-500/15 to-green-600/15 rounded-full blur-2xl animate-bounce"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-green-500/20 to-teal-500/20 backdrop-blur-sm border border-white/10 rounded-full text-sm font-medium mb-6">
            <span className="w-2 h-2 bg-green-400 rounded-full mr-2 animate-pulse"></span>
            <span className="text-white">Accounts Management</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Professional <span className="bg-gradient-to-r from-green-400 to-teal-400 bg-clip-text text-transparent">Accounts Management</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
            Comprehensive accounts management services to keep your financial records accurate, 
            up-to-date, and compliant with all regulatory requirements.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div 
                key={index} 
                className="group bg-gray-900/80 backdrop-blur-xl border border-white/10 rounded-2xl p-6 hover:border-green-500/30 transition-all duration-500 transform hover:-translate-y-2"
              >
                <div className="bg-gradient-to-r from-green-500/20 to-teal-500/20 w-12 h-12 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  <Icon className="w-6 h-6 text-green-400" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{service.title}</h3>
                <p className="text-gray-300 text-sm leading-relaxed">{service.description}</p>
              </div>
            );
          })}
        </div>

        <div className="bg-gradient-to-r from-gray-900/80 to-black/80 backdrop-blur-xl border border-white/10 rounded-2xl p-8 mb-16">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-white mb-4">Benefits of Our Accounts Management</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex items-center space-x-3">
                <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                <span className="text-gray-300">{benefit}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="text-center bg-gradient-to-r from-gray-900/80 to-black/80 backdrop-blur-xl border border-white/10 rounded-3xl p-12">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready for Professional <span className="bg-gradient-to-r from-green-400 to-teal-400 bg-clip-text text-transparent">Accounts Management</span>?
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Let our expert team manage your accounts with precision and professionalism.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <button 
              className="bg-gradient-to-r from-green-500 to-teal-600 text-white px-8 py-4 rounded-xl font-semibold hover:from-green-600 hover:to-teal-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-green-500/25 inline-flex items-center cursor-pointer"
              style={{ color: 'white !important' }}
            >
              <span style={{ color: 'white' }}>Get Started Today</span>
              <ArrowRight className="ml-2 w-5 h-5" style={{ color: 'white' }} />
            </button>
            <button 
              className="border-2 border-green-500 text-white px-8 py-4 rounded-xl font-semibold hover:bg-green-500 hover:text-white transition-all duration-300 transform hover:scale-105 inline-flex items-center cursor-pointer"
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

export default Accounts;