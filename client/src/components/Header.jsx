import React, { useState, useEffect } from "react";
import { ChevronDown, Mail, Phone, Facebook, Twitter, Linkedin, ArrowRight, Sparkles, Menu, X } from "lucide-react";
import photo from "../assets/logo.png";
import { Link } from "react-router-dom";
const Header = () => {
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Mock navigation functions
  const navigate = (path) => {
    console.log(`Navigating to: ${path}`);
    setActiveDropdown(null);
    setIsMobileMenuOpen(false);
  };

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navigationItems = [
    {
      name: "Home",
      path: "/",
    },
    {
      name: "Why Choose Us",
      path: "/why-choose-us", 
      dropdown: [
        { name: "About Us", path: "/about-us", icon: "👥" },
        { name: "Our Team", path: "/our-team", icon: "👨‍💼" },
      ]
    },
    {
      name: "Virtual Staffing",
      path: "/virtual-staffing",
      dropdown: [
        { name: "How It Works", path: "/how-it-works", icon: "⚙️" },
        { name: "Engagement Model", path: "/engagement-model", icon: "🤝" }
      ]
    },
    {
      name: "Services",
      path: "/services",
      dropdown: [
        { name: "Back Office Solutions", path: "/services/back-office", icon: "🏢" },
        { name: "Tax Preparation", path: "/services/tax-preparation", icon: "📊" },
        { name: "Accounts Management", path: "/services/accounts", icon: "💰" },
        { name: "Restaurant Accounting", path: "/services/restaurant", icon: "🍽️" },
        { name: "Monthly Management", path: "/services/monthly", icon: "📅" },
        { name: "Payroll Services", path: "/services/payroll", icon: "💼" },
        { name: "Book Cleanup", path: "/services/book-cleanup", icon: "🧹" },
        { name: "Data Migration", path: "/services/data-migration", icon: "📤" },
        { name: "Budgeting & Forecasting", path: "/services/budgeting", icon: "📈" },
        { name: "CFO Services", path: "/services/cfo", icon: "👑" }
      ]
    },
    {
      name: "FAQs",
      path: "/faqs",
      dropdown: [
        { name: "General Questions", path: "/faqs/general", icon: "❓" },
      ]
    },
    {
      name: "Request a Staff",
      path: "/request-a-staff",
      dropdown: [
        { name: "Submit Request", path: "/request-a-staff", icon: "📝" }
      ]
    },
    {
      name: "Contact", 
      path: "/contact",
      dropdown: [
        { name: "Get in Touch", path: "/contact", icon: "📞" }
      ]
    }
  ];

  const handleDropdownToggle = (index) => {
    setActiveDropdown(activeDropdown === index ? null : index);
  };

  const handleNavClick = (path) => {
    navigate(path);
    setActiveDropdown(null);
    setIsMobileMenuOpen(false);
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-[9999] transition-all duration-300 ${
      isScrolled ? 'bg-gray-900/95 backdrop-blur-md shadow-lg' : 'bg-gradient-to-br from-slate-900/95 via-gray-900/95 to-black/95 backdrop-blur-sm'
    } overflow-visible`}>
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -left-40 w-80 h-80 bg-gradient-to-r from-purple-600/20 to-indigo-600/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -top-20 -right-20 w-60 h-60 bg-gradient-to-r from-cyan-500/15 to-blue-600/15 rounded-full blur-2xl animate-bounce"></div>
        <div className="absolute top-1/2 left-1/4 w-32 h-32 bg-gradient-to-r from-violet-500/10 to-purple-500/10 rounded-full blur-xl animate-pulse delay-1000"></div>

        {/* Animated Grid Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent animate-pulse"></div>
        </div>
      </div>

      {/* Top Info Bar - Hidden on mobile */}
      <div className="relative z-20 hidden lg:flex justify-between items-center px-6 py-2 bg-black/40 backdrop-blur-sm border-b border-white/10">
        <div className="flex items-center space-x-6 text-gray-300">
          <div className="flex items-center space-x-2 hover:text-white transition-colors duration-300 cursor-pointer">
            <Mail size={14} className="text-cyan-400" />
            <span className="text-xs text-white">info@symbiosisllp.com</span>
          </div>
          <div className="flex items-center space-x-2 hover:text-white transition-colors duration-300 cursor-pointer">
            <Phone size={14} className="text-green-400" />
            <span className="text-xs text-white">+1 (929) 214-4491</span>
          </div>
          <div className="flex items-center space-x-2 hover:text-white transition-colors duration-300 cursor-pointer">
            <Phone size={14} className="text-green-400" />
            <span className="text-xs text-white">+1 (925) 222-5218</span>
          </div>
        </div>

        <div className="flex items-center space-x-6">
          <div className="flex items-center space-x-4">
            {/* Enhanced PayPal Link */}
            <a
              href="https://www.paypal.com/paypalme/Symbiosisllp"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative flex items-center space-x-3 text-white hover:text-blue-300 transition-all duration-300 transform hover:scale-105 px-4 py-2 rounded-lg bg-gradient-to-r from-blue-600/20 to-blue-500/20 hover:from-blue-500/30 hover:to-blue-400/30 border border-blue-400/30 hover:border-blue-300/50 shadow-lg hover:shadow-blue-500/25"
            >
              {/* PayPal Logo */}
              <img 
                src="https://www.paypalobjects.com/webstatic/mktg/Logo/pp-logo-100px.png"
                alt="PayPal"
                className="w-5 h-5 object-contain filter brightness-0 invert group-hover:brightness-100 group-hover:invert-0 transition-all duration-300"
              />
              <span className="text-sm font-medium text-white">PayPal</span>
              <ArrowRight size={12} className="transform group-hover:translate-x-1 transition-transform duration-200 text-blue-300" />
              
              {/* Glow effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-blue-400/20 rounded-lg blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10"></div>
            </a>
            
            {/* Enhanced Veem Link */}
            <a
              href="https://apps.veem.com/CustomerApp/Pay/symbiosisinfinitysolutionsllp"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative flex items-center space-x-3 text-white hover:text-green-300 transition-all duration-300 transform hover:scale-105 px-4 py-2 rounded-lg bg-gradient-to-r from-green-600/20 to-green-500/20 hover:from-green-500/30 hover:to-green-400/30 border border-green-400/30 hover:border-green-300/50 shadow-lg hover:shadow-green-500/25"
            >
              {/* Veem Logo */}
              <img 
                src="https://www.veem.com/static/media/veem-logo-white.svg"
                alt="Veem"
                className="w-5 h-5 object-contain transition-all duration-300 group-hover:brightness-110"
                onError={(e) => {
                  // Fallback if image doesn't load
                  e.target.style.display = 'none';
                  e.target.nextSibling.style.display = 'inline-block';
                }}
              />
              {/* Fallback icon */}
              <div className="w-5 h-5 bg-green-400 rounded text-white text-xs flex items-center justify-center font-bold hidden">
                V
              </div>
              <span className="text-sm font-medium text-white">Veem</span>
              <ArrowRight size={12} className="transform group-hover:translate-x-1 transition-transform duration-200 text-green-300" />
              
              {/* Glow effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-green-500/20 to-green-400/20 rounded-lg blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10"></div>
            </a>
          </div>

          <div className="w-px h-4 bg-white/20"></div>

          <div className="flex items-center space-x-2">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer"
              className="text-gray-400 hover:text-blue-400 transition-all duration-300 transform hover:scale-110 p-2 rounded-full hover:bg-blue-400/10">
              <Facebook size={16} />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer"
              className="text-gray-400 hover:text-sky-400 transition-all duration-300 transform hover:scale-110 p-2 rounded-full hover:bg-sky-400/10">
              <Twitter size={16} />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer"
              className="text-gray-400 hover:text-blue-500 transition-all duration-300 transform hover:scale-110 p-2 rounded-full hover:bg-blue-500/10">
              <Linkedin size={16} />
            </a>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <div className="relative z-20 flex justify-between items-center px-4 lg:px-6 py-3">
        {/* Logo */}
        <Link
          to="/"
          className="flex items-center group cursor-pointer"
        >
          <div className="w-12 h-10 lg:w-16 lg:h-12 rounded-lg flex items-center justify-center group-hover:scale-105 transition-all duration-500 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 animate-pulse"></div>
            <img
              src={photo}
              alt="Symbiosis Logo"
              className="w-full h-full object-contain p-1 transform hover:rotate-3 transition-transform duration-300 relative z-10"
              style={{
                filter: 'drop-shadow(0 0 8px rgba(6, 182, 212, 0.3))'
              }}
            />
            <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-lg opacity-20 group-hover:opacity-30 transition-opacity duration-500 animate-gradient"></div>
          </div>
        </Link>

        {/* Desktop Navigation - Slightly Right Aligned */}
        <nav className="hidden lg:block relative flex-1 flex justify-center ml-16">
          <ul className="flex items-center space-x-6">
            {navigationItems.map((item, index) => (
              <li key={item.name} className="relative group">
                <div className="flex items-center space-x-1">
                  <button
                    className="text-white font-medium text-sm tracking-wide hover:text-cyan-400 transition-colors duration-300"
                    onClick={() => item.name === "Home" ? navigate(item.path) : null}
                  >
                    {item.name}
                  </button>
                  {item.name !== "Home" && (
                    <div className="text-white hover:text-cyan-400 transition-all duration-300 p-1 rounded-full hover:bg-white/10">
                      <ChevronDown
                        size={14}
                        className="transform transition-transform duration-300 group-hover:rotate-180"
                      />
                    </div>
                  )}
                </div>

                {/* Hover underline effect */}
                <span className="absolute left-0 -bottom-1 w-full h-0.5 bg-gradient-to-r from-cyan-400 to-purple-400 scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-300"></span>

                {/* Improved Dropdown Menu - Properly Sized */}
                {item.name !== "Home" && (
                  <div className="absolute top-full left-1/2 transform -translate-x-1/2 mt-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform origin-top scale-95 group-hover:scale-100 z-[9999]">
                    <div className="relative">
                      {/* Glowing Border */}
                      <div className="absolute -inset-0.5 bg-gradient-to-r from-cyan-500/50 via-purple-500/50 to-cyan-500/50 rounded-lg blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                      
                      {/* Main Dropdown Content - Compact Size */}
                      <div className="relative bg-slate-900 border border-cyan-400/50 rounded-lg shadow-2xl p-3 overflow-hidden min-w-[240px] max-w-[280px]">
                        
                        {/* Solid Background */}
                        <div className="absolute inset-0 bg-slate-900 rounded-lg"></div>
                        
                        {/* Dropdown Header - Compact */}
                        <div className="relative z-20 mb-3 pb-2 border-b border-cyan-400/30">
                          <div className="flex items-center space-x-2">
                            <Sparkles size={14} className="text-cyan-400" />
                            <h3 className="text-white font-semibold text-sm">{item.name}</h3>
                          </div>
                        </div>

                        {/* Dropdown Items - Compact */}
                        <div className={`relative z-20 space-y-1 ${item.name === "Services" ? 'max-h-48 overflow-y-auto scrollbar-thin scrollbar-thumb-cyan-400 scrollbar-track-slate-800' : ''}`}>
                          {item.dropdown.map((dropdownItem, dropdownIndex) => (
                            <button
                              key={dropdownIndex}
                              onClick={() => navigate(dropdownItem.path)}
                              className="group/item relative w-full text-left block px-3 py-2 text-white hover:text-cyan-300 rounded-md transition-all duration-200 text-sm hover:bg-slate-800/80"
                            >
                              {/* Item Content */}
                              <div className="relative z-10 flex items-center justify-between">
                                <div className="flex items-center space-x-2">
                                  <span className="text-sm">{dropdownItem.icon}</span>
                                  <span className="font-medium text-white group-hover/item:text-cyan-200">{dropdownItem.name}</span>
                                </div>
                                
                                {/* Arrow Icon */}
                                <ArrowRight 
                                  size={14} 
                                  className="text-gray-400 group-hover/item:text-cyan-300 transform group-hover/item:translate-x-1 transition-all duration-200" 
                                />
                              </div>
                            </button>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </li>
            ))}
          </ul>
        </nav>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="lg:hidden text-white p-2 rounded-lg hover:bg-white/10 transition-colors duration-300"
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu Overlay - Overlapping Hero Section */}
      {isMobileMenuOpen && (
        <div className="lg:hidden fixed inset-0 z-[10000]">
          <div className="absolute top-0 right-0 w-80 max-w-[90vw] h-screen bg-slate-900/95 backdrop-blur-md transform transition-transform duration-300 ease-in-out shadow-2xl border-l border-cyan-400/50">
            
            <div className="relative z-20 p-4 h-full overflow-y-auto">
              {/* Mobile Menu Header */}
              <div className="flex justify-between items-center mb-6 pb-3 border-b border-cyan-400/30">
                <div className="flex items-center space-x-2">
                  <Sparkles size={18} className="text-cyan-400" />
                  <h3 className="text-white text-lg font-bold">Navigation</h3>
                </div>
                <button
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-white p-2 rounded-lg bg-slate-800 hover:bg-cyan-600 transition-colors duration-300"
                >
                  <X size={20} />
                </button>
              </div>

              {/* Mobile Navigation Items */}
              <nav className="space-y-2">
                {navigationItems.map((item, index) => (
                  <div key={item.name} className="border-b border-slate-700/50 pb-2">
                    {item.dropdown ? (
                      <div>
                        <button
                          onClick={() => handleDropdownToggle(index)}
                          className="flex items-center justify-between w-full text-white font-medium py-3 hover:text-cyan-300 transition-colors duration-300 px-3 rounded-lg hover:bg-slate-800"
                        >
                          <span className="text-sm">{item.name}</span>
                          <ChevronDown
                            size={16}
                            className={`transform transition-transform duration-300 ${
                              activeDropdown === index ? 'rotate-180' : ''
                            }`}
                          />
                        </button>
                        
                        {/* Mobile Dropdown */}
                        <div className={`overflow-hidden transition-all duration-300 ${
                          activeDropdown === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                        }`}>
                          <div className="pl-2 space-y-1 mt-2">
                            {item.dropdown.map((dropdownItem, dropdownIndex) => (
                              <button
                                key={dropdownIndex}
                                onClick={() => navigate(dropdownItem.path)}
                                className="flex items-center space-x-2 text-gray-300 hover:text-cyan-300 transition-colors duration-300 py-2 px-3 rounded-md hover:bg-slate-800 text-sm w-full text-left"
                              >
                                <span className="text-sm">{dropdownItem.icon}</span>
                                <span>{dropdownItem.name}</span>
                              </button>
                            ))}
                          </div>
                        </div>
                      </div>
                    ) : (
                      <button
                        onClick={() => navigate(item.path)}
                        className="block text-white font-medium py-3 hover:text-cyan-300 transition-colors duration-300 px-3 rounded-lg hover:bg-slate-800 text-sm w-full text-left"
                      >
                        <span>{item.name}</span>
                      </button>
                    )}
                  </div>
                ))}
              </nav>

              {/* Enhanced Mobile Payment Links */}
              <div className="mt-6 pt-4 border-t border-cyan-400/30 bg-slate-800/50 rounded-lg p-4">
                <h4 className="text-white font-semibold mb-3 text-sm flex items-center space-x-2">
                  <Sparkles size={16} className="text-cyan-400" />
                  <span>Quick Payments</span>
                </h4>
                <div className="flex flex-col space-y-3">
                  <a
                    href="https://www.paypal.com/paypalme/Symbiosisllp"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group relative flex items-center space-x-3 text-white hover:text-blue-300 transition-all duration-300 transform hover:scale-105 px-4 py-3 rounded-lg bg-gradient-to-r from-blue-600/20 to-blue-500/20 hover:from-blue-500/30 hover:to-blue-400/30 border border-blue-400/30 hover:border-blue-300/50"
                  >
                    <img 
                      src="https://www.paypalobjects.com/webstatic/mktg/Logo/pp-logo-100px.png"
                      alt="PayPal"
                      className="w-6 h-6 object-contain filter brightness-0 invert group-hover:brightness-100 group-hover:invert-0 transition-all duration-300"
                    />
                    <span className="text-sm font-medium text-white flex-1">Pay via PayPal</span>
                    <ArrowRight size={16} className="transform group-hover:translate-x-1 transition-transform duration-200 text-blue-300" />
                    
                    {/* Glow effect */}
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-blue-400/20 rounded-lg blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10"></div>
                  </a>
                  
                  <a
                    href="https://apps.veem.com/CustomerApp/Pay/symbiosisinfinitysolutionsllp"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group relative flex items-center space-x-3 text-white hover:text-green-300 transition-all duration-300 transform hover:scale-105 px-4 py-3 rounded-lg bg-gradient-to-r from-green-600/20 to-green-500/20 hover:from-green-500/30 hover:to-green-400/30 border border-green-400/30 hover:border-green-300/50"
                  >
                    <img 
                      src="https://www.veem.com/static/media/veem-logo-white.svg"
                      alt="Veem"
                      className="w-6 h-6 object-contain transition-all duration-300 group-hover:brightness-110"
                      onError={(e) => {
                        e.target.style.display = 'none';
                        e.target.nextSibling.style.display = 'flex';
                      }}
                    />
                    {/* Fallback icon */}
                    <div className="w-6 h-6 bg-green-400 rounded text-white text-sm flex items-center justify-center font-bold hidden">
                      V
                    </div>
                    <span className="text-sm font-medium text-white flex-1">Pay via Veem</span>
                    <ArrowRight size={16} className="transform group-hover:translate-x-1 transition-transform duration-200 text-green-300" />
                    
                    {/* Glow effect */}
                    <div className="absolute inset-0 bg-gradient-to-r from-green-500/20 to-green-400/20 rounded-lg blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10"></div>
                  </a>
                </div>
              </div>

              {/* Mobile Contact Info - More Compact */}
              <div className="mt-4 pt-4 border-t border-cyan-400/30 bg-slate-800/50 rounded-lg p-4">
                <h4 className="text-white font-semibold mb-3 text-sm flex items-center space-x-2">
                  <Phone size={16} className="text-cyan-400" />
                  <span>Contact Info</span>
                </h4>
                <div className="space-y-2 text-sm text-gray-300">
                  <div className="flex items-center space-x-2">
                    <Mail size={16} className="text-cyan-400" />
                    <span className="text-white">info@symbiosisllp.com</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Phone size={16} className="text-green-400" />
                    <span className="text-white">+1 (929) 214-4491</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Phone size={16} className="text-green-400" />
                    <span className="text-white">+1 (925) 222-5218</span>
                  </div>
                </div>

                {/* Mobile Social Links */}
                <div className="flex items-center justify-center space-x-4 mt-4 pt-3 border-t border-slate-600">
                  <a href="https://facebook.com" target="_blank" rel="noopener noreferrer"
                    className="text-gray-400 hover:text-blue-400 transition-all duration-300 transform hover:scale-110 p-2 rounded-full hover:bg-slate-700">
                    <Facebook size={18} />
                  </a>
                  <a href="https://twitter.com" target="_blank" rel="noopener noreferrer"
                    className="text-gray-400 hover:text-sky-400 transition-all duration-300 transform hover:scale-110 p-2 rounded-full hover:bg-slate-700">
                    <Twitter size={18} />
                  </a>
                  <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer"
                    className="text-gray-400 hover:text-blue-500 transition-all duration-300 transform hover:scale-110 p-2 rounded-full hover:bg-slate-700">
                    <Linkedin size={18} />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Bottom gradient line */}
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-cyan-500/50 to-transparent"></div>
    </header>
  );
};

export default Header;