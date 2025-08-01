import React, { useState, useEffect } from "react";
import { 
  FileText,
  Calculator,
  DollarSign,
  Store,
  Calendar,
  Users,
  BookOpen,
  Database,
  PieChart,
  BarChart4,
  ArrowRight,
  ChevronRight,
  Zap
} from "lucide-react";

const ServicesSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [hoveredService, setHoveredService] = useState(null);
  const [activeTab, setActiveTab] = useState(0);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const section = document.getElementById('services-section');
    if (section) observer.observe(section);

    return () => observer.disconnect();
  }, []);

  const services = [
    {
      icon: FileText,
      title: "Back-office Solutions",
      shortDesc: "Comprehensive back-office support for CPAs and Accounting Firms",
      fullDesc: "Complete back-office solutions tailored for accounting professionals and firms.",
      features: ["Document Management", "Process Automation", "Quality Control", "Compliance Support"],
      color: "from-blue-500 to-cyan-500",
      bgColor: "from-blue-500/10 to-cyan-500/10",
      borderColor: "border-blue-500/30"
    },
    {
      icon: Calculator,
      title: "Tax Preparation Services",
      shortDesc: "Professional tax preparation and review for CPAs and EAs",
      features: ["Tax Return Preparation", "Review Services", "Tax Planning", "Compliance Check"],
      color: "from-purple-500 to-pink-500",
      bgColor: "from-purple-500/10 to-pink-500/10",
      borderColor: "border-purple-500/30"
    },
    {
      icon: DollarSign,
      title: "AP & AR Management",
      shortDesc: "Efficient accounts payable & receivable management",
      features: ["Invoice Processing", "Payment Management", "Collections", "Reconciliation"],
      color: "from-green-500 to-teal-500",
      bgColor: "from-green-500/10 to-teal-500/10",
      borderColor: "border-green-500/30"
    },
    {
      icon: Store,
      title: "Restaurant Accounting",
      shortDesc: "Specialized accounting services for restaurants",
      features: ["Cost Analysis", "Inventory Management", "POS Integration", "Financial Reporting"],
      color: "from-orange-500 to-red-500",
      bgColor: "from-orange-500/10 to-red-500/10",
      borderColor: "border-orange-500/30"
    },
    {
      icon: Calendar,
      title: "Monthly Management",
      shortDesc: "Monthly management and year-end finalization",
      features: ["Monthly Reporting", "Year-End Closing", "Financial Analysis", "Compliance"],
      color: "from-indigo-500 to-purple-500",
      bgColor: "from-indigo-500/10 to-purple-500/10",
      borderColor: "border-indigo-500/30"
    },
    {
      icon: Users,
      title: "Payroll Services",
      shortDesc: "Complete payroll management solutions",
      features: ["Payroll Processing", "Tax Filing", "Benefits Management", "Compliance"],
      color: "from-red-500 to-pink-500",
      bgColor: "from-red-500/10 to-pink-500/10",
      borderColor: "border-red-500/30"
    },
    {
      icon: BookOpen,
      title: "Books Clean-up",
      shortDesc: "Professional books clean-up and catch up work",
      features: ["Data Cleanup", "Record Organization", "Error Correction", "Reconciliation"],
      color: "from-yellow-500 to-orange-500",
      bgColor: "from-yellow-500/10 to-orange-500/10",
      borderColor: "border-yellow-500/30"
    },
    {
      icon: Database,
      title: "Data Migration",
      shortDesc: "Seamless data migration services",
      features: ["System Migration", "Data Conversion", "Quality Assurance", "Legacy Support"],
      color: "from-cyan-500 to-blue-500",
      bgColor: "from-cyan-500/10 to-blue-500/10",
      borderColor: "border-cyan-500/30"
    },
    {
      icon: PieChart,
      title: "Budgeting & Forecasting",
      shortDesc: "Strategic budgeting and cashflow management",
      features: ["Financial Planning", "Cash Flow Analysis", "Forecasting", "Risk Assessment"],
      color: "from-emerald-500 to-green-500",
      bgColor: "from-emerald-500/10 to-green-500/10",
      borderColor: "border-emerald-500/30"
    },
    {
      icon: BarChart4,
      title: "CFO Services",
      shortDesc: "Professional CFO services for your business",
      features: ["Strategic Planning", "Financial Analysis", "Risk Management", "Growth Advisory"],
      color: "from-violet-500 to-purple-500",
      bgColor: "from-violet-500/10 to-purple-500/10",
      borderColor: "border-violet-500/30"
    }
  ];

  const categories = ["All Services", "Accounting", "Tax", "Advisory"];

  // Rest of the component remains the same, just using the new services data
  return (
    <section 
      id="services-section"
      className="relative min-h-screen bg-gradient-to-br from-gray-950 via-slate-900 to-black overflow-hidden py-20"
    >
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute top-10 left-10 w-96 h-96 bg-gradient-to-r from-blue-600/8 to-purple-600/8 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-10 right-10 w-80 h-80 bg-gradient-to-r from-cyan-500/6 to-teal-600/6 rounded-full blur-3xl animate-bounce"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-gradient-to-r from-violet-500/4 to-pink-500/4 rounded-full blur-2xl animate-pulse delay-1000"></div>
        
        {/* Grid Pattern */}
        <div className="absolute inset-0 opacity-[0.03]">
          <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, white 1px, transparent 0)`,
            backgroundSize: '50px 50px'
          }}></div>
        </div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className={`text-center mb-16 transform transition-all duration-1000 ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
        }`}>
          <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-blue-500/20 rounded-full text-blue-400 text-sm font-medium tracking-wide mb-6">
            <Zap size={16} className="mr-2" />
            Our Services
          </div>
          
          <h2 className="text-6xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-white via-blue-100 to-purple-200 bg-clip-text text-transparent">
            Dedicated Services
          </h2>
          
          <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
            Professional accounting and financial services tailored to your business needs
          </p>
          
          <div className="w-32 h-1 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 mx-auto rounded-full mt-8"></div>
        </div>

        {/* Category Tabs */}
        <div className={`flex justify-center mb-12 transform transition-all duration-1000 delay-300 ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
        }`}>
          <div className="flex bg-gray-900/50 backdrop-blur-xl border border-white/10 rounded-2xl p-2">
            {categories.map((category, index) => (
              <button
                key={index}
                onClick={() => setActiveTab(index)}
                className={`px-6 py-3 rounded-xl text-sm font-medium transition-all duration-300 ${
                  activeTab === index
                    ? 'bg-gradient-to-r from-blue-500 to-purple-500 text-white shadow-lg'
                    : 'text-gray-400 hover:text-white hover:bg-white/5'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Services Grid */}
        <div className={`grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16 transform transition-all duration-1000 delay-500 ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
        }`}>
          {services.map((service, index) => {
            const Icon = service.icon;
            const isHovered = hoveredService === index;
            
            return (
              <div
                key={index}
                className="group relative cursor-pointer transform transition-all duration-500 hover:scale-105"
                onMouseEnter={() => setHoveredService(index)}
                onMouseLeave={() => setHoveredService(null)}
              >
                {/* Card */}
                <div className={`relative bg-gradient-to-br from-gray-900/80 to-black/80 backdrop-blur-xl border rounded-3xl p-8 h-full transition-all duration-500 ${
                  isHovered ? `${service.borderColor} shadow-2xl` : 'border-white/10 hover:border-white/20'
                }`}>
                  {/* Background Gradient */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${service.bgColor} rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>
                  
                  {/* Content */}
                  <div className="relative z-10">
                    {/* Icon & Title */}
                    <div className="flex items-start justify-between mb-6">
                      <div className={`w-16 h-16 rounded-2xl flex items-center justify-center transition-all duration-500 ${
                        isHovered ? `bg-gradient-to-br ${service.color}` : 'bg-gray-800 group-hover:bg-gray-700'
                      }`}>
                        <Icon size={28} className={`transition-colors duration-500 ${
                          isHovered ? 'text-white' : 'text-gray-400 group-hover:text-white'
                        }`} />
                      </div>
                    </div>

                    <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:bg-clip-text group-hover:from-white group-hover:to-gray-300 transition-all duration-300">
                      {service.title}
                    </h3>

                    <p className="text-gray-400 mb-6 group-hover:text-gray-300 transition-colors duration-300">
                      {service.shortDesc}
                    </p>

                    {/* Features */}
                    <div className="space-y-2 mb-8">
                      {service.features.map((feature, featureIndex) => (
                        <div key={featureIndex} className="flex items-center text-sm text-gray-500 group-hover:text-gray-400 transition-colors duration-300">
                          <ChevronRight size={14} className={`mr-2 transition-colors duration-300 ${
                            isHovered ? 'text-white' : 'text-gray-600'
                          }`} />
                          {feature}
                        </div>
                      ))}
                    </div>

                    {/* CTA Button */}
                    <button className={`w-full flex items-center justify-center px-6 py-3 rounded-xl font-medium transition-all duration-300 ${
                      isHovered 
                        ? `bg-gradient-to-r ${service.color} text-white shadow-lg` 
                        : 'bg-gray-800 text-gray-400 hover:bg-gray-700 hover:text-white'
                    }`}>
                      More Details
                      <ArrowRight size={16} className="ml-2 transform group-hover:translate-x-1 transition-transform duration-300" />
                    </button>
                  </div>

                  {/* Hover Effect */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-5 rounded-3xl transition-opacity duration-500`}></div>
                </div>

                {/* Floating Elements */}
                <div className={`absolute -top-2 -right-2 w-6 h-6 bg-gradient-to-br ${service.color} rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 animate-ping`}></div>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA Section */}
        <div className={`text-center bg-gradient-to-r from-gray-900/50 to-black/50 backdrop-blur-xl border border-white/10 rounded-3xl p-12 transform transition-all duration-1000 delay-700 ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
        }`}>
          <h3 className="text-3xl font-bold text-white mb-4">
            Ready to Streamline Your Accounting?
          </h3>
          <p className="text-gray-400 mb-8 max-w-2xl mx-auto">
            Let's discuss how our professional services can help optimize your financial operations and drive business success.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold rounded-xl hover:from-blue-600 hover:to-purple-700 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-blue-500/25 group">
              <span className="flex items-center justify-center">
                Get Started Today
                <ArrowRight size={20} className="ml-2 transform group-hover:translate-x-1 transition-transform duration-300" />
              </span>
            </button>
            
            <button className="px-8 py-4 bg-transparent border border-white/20 text-white font-semibold rounded-xl hover:bg-white/5 hover:border-white/40 transition-all duration-300">
              Schedule Consultation
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;