import React, { useState } from "react";
import { ChevronDown, Mail, Phone, Facebook, Twitter, Linkedin, ArrowRight, Sparkles } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import photo from "../assets/logo.png"

const Header = () => {
  const [activeDropdown, setActiveDropdown] = useState(null);
  const navigate = useNavigate();

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
        { name: "Testimonials", path: "/testimonials", icon: "⭐" }
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
  };

  const getDropdownPosition = (itemName, index) => {
    const baseLeft = 200 + (index * 150);
    const dropdownWidth = 280;
    const viewportWidth = window.innerWidth;
    
    // For Contact dropdown, position it from the right
    if (itemName === "Contact") {
      return Math.max(20, viewportWidth - dropdownWidth - 20);
    }
    
    // For other dropdowns, check if they would go outside the viewport
    if (baseLeft + dropdownWidth > viewportWidth - 20) {
      return Math.max(20, viewportWidth - dropdownWidth - 20);
    }
    
    return baseLeft;
  };

  return (
    <header className="relative bg-gradient-to-br from-slate-900 via-gray-900 to-black overflow-hidden">
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

      {/* Top Info Bar */}
      <div className="relative z-20 flex justify-between items-center px-6 py-3 bg-black/40 backdrop-blur-sm border-b border-white/10">
        <div className="flex items-center space-x-6 text-gray-300">
          <div className="flex items-center space-x-2 hover:text-white transition-colors duration-300 cursor-pointer">
            <Mail size={16} className="text-cyan-400" />
            <span className="text-sm">info@symbiosisllp.com</span>
          </div>
          <div className="flex items-center space-x-2 hover:text-white transition-colors duration-300 cursor-pointer">
            <Phone size={16} className="text-green-400" />
            <span className="text-sm">+1 (929) 214-4491</span>
          </div>
          <div className="flex items-center space-x-2 hover:text-white transition-colors duration-300 cursor-pointer">
            <Phone size={16} className="text-green-400" />
            <span className="text-sm">+1 (925) 222-5218</span>
          </div>
        </div>

        <div className="flex items-center space-x-6">
          <div className="flex items-center space-x-4">
            <button
              onClick={() => handleNavClick('/paypal')}
              className="text-gray-300 hover:text-cyan-400 transition-colors duration-300 text-sm font-medium"
            >
              PayPal
            </button>
            <button
              onClick={() => handleNavClick('/veem')}
              className="text-gray-300 hover:text-cyan-400 transition-colors duration-300 text-sm font-medium"
            >
              Veem
            </button>
          </div>

          <div className="w-px h-6 bg-white/20"></div>

          <div className="flex items-center space-x-3">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer"
              className="text-gray-400 hover:text-blue-400 transition-all duration-300 transform hover:scale-110">
              <Facebook size={18} />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer"
              className="text-gray-400 hover:text-sky-400 transition-all duration-300 transform hover:scale-110">
              <Twitter size={18} />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer"
              className="text-gray-400 hover:text-blue-500 transition-all duration-300 transform hover:scale-110">
              <Linkedin size={18} />
            </a>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <div className="relative z-20 flex justify-between items-center px-6 py-5">
        <Link
          to="/"
          className="flex items-center group cursor-pointer"
        >
          <div className="w-24 h-16 rounded-lg flex items-center justify-center group-hover:scale-105 transition-all duration-500 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 animate-pulse"></div>
            <img
              src={photo}
              alt="Symbiosis Logo"
              className="w-full h-full object-contain p-2 transform hover:rotate-3 transition-transform duration-300 relative z-10"
              style={{
                filter: 'drop-shadow(0 0 8px rgba(6, 182, 212, 0.3))'
              }}
            />
            <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-lg opacity-20 group-hover:opacity-30 transition-opacity duration-500 animate-gradient"></div>
          </div>
        </Link>

        <nav className="relative">
          <ul className="flex items-center space-x-8">
            {navigationItems.map((item, index) => (
              <li key={item.name} className="relative group">
                <div className="flex items-center space-x-1">
                  {item.name === "Home" ? (
                    <Link
                      to={item.path}
                      className="text-white font-medium text-sm tracking-wide hover:text-cyan-400 transition-colors duration-300"
                    >
                      {item.name}
                    </Link>
                  ) : (
                    <button
                      className="text-white font-medium text-sm tracking-wide hover:text-cyan-400 transition-colors duration-300"
                    >
                      {item.name}
                    </button>
                  )}
                  {item.name !== "Home" && (
                    <div className="text-white hover:text-cyan-400 transition-all duration-300 p-1 rounded-full hover:bg-white/10">
                      <ChevronDown
                        size={16}
                        className="transform transition-transform duration-300 group-hover:rotate-180"
                      />
                    </div>
                  )}
                </div>

                {/* Hover underline effect */}
                <span className="absolute left-0 -bottom-1 w-full h-0.5 bg-gradient-to-r from-cyan-400 to-purple-400 scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-300"></span>

                {/* Enhanced Hover Dropdown Menu */}
                {item.name !== "Home" && (
                  <div 
                    className="fixed mt-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-500 transform origin-top scale-95 group-hover:scale-100"
                    style={{
                      top: '120px',
                      left: `${getDropdownPosition(item.name, index)}px`,
                      zIndex: 9999,
                      minWidth: '280px',
                      maxHeight: item.name === "Services" ? '400px' : 'auto'
                    }}
                  >
                    {/* Dropdown Container with Glass Effect */}
                    <div className="relative">
                      {/* Glowing Border */}
                      <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500/50 via-purple-500/50 to-cyan-500/50 rounded-2xl blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                      
                      {/* Main Dropdown Content */}
                      <div className="relative bg-gray-900/95 backdrop-blur-xl border border-white/20 rounded-2xl shadow-2xl p-3 overflow-hidden">
                        {/* Animated Background Pattern */}
                        <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                        
                        {/* Dropdown Header */}
                        <div className="relative z-10 mb-3 pb-3 border-b border-white/10">
                          <div className="flex items-center space-x-2">
                            <Sparkles size={16} className="text-cyan-400" />
                            <h3 className="text-white font-semibold text-sm">{item.name}</h3>
                          </div>
                        </div>

                        {/* Dropdown Items with Scroll for Services */}
                        <div className={`relative z-10 space-y-1 ${item.name === "Services" ? 'max-h-64 overflow-y-auto [&::-webkit-scrollbar]:w-2 [&::-webkit-scrollbar-track]:bg-gray-800/50 [&::-webkit-scrollbar-thumb]:bg-gray-600/80 [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-thumb:hover]:bg-gray-500/90' : ''}`}>
                      {item.dropdown.map((dropdownItem, dropdownIndex) => (
                        <Link
                          key={dropdownIndex}
                              to={dropdownItem.path}
                              className="group/item relative w-full text-left block px-4 py-3 text-white hover:text-cyan-400 rounded-xl transition-all duration-300 text-sm overflow-hidden no-underline"
                              style={{ textDecoration: 'none' }}
                            >
                              {/* Hover Background Effect */}
                              <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 to-purple-500/10 opacity-0 group-hover/item:opacity-100 transition-opacity duration-300 rounded-xl"></div>
                              
                              {/* Item Content */}
                              <div className="relative z-10 flex items-center justify-between">
                                <div className="flex items-center space-x-3">
                                  <span className="text-lg">{dropdownItem.icon}</span>
                                  <span className="font-medium text-white group-hover/item:text-cyan-400">{dropdownItem.name}</span>
                                </div>
                                
                                {/* Arrow Icon */}
                                <ArrowRight 
                                  size={16} 
                                  className="text-gray-400 group-hover/item:text-cyan-400 transform group-hover/item:translate-x-1 transition-all duration-300" 
                                />
                              </div>

                              {/* Animated Underline */}
                              <div className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-cyan-400 to-purple-400 transform scale-x-0 group-hover/item:scale-x-100 origin-left transition-transform duration-300"></div>
                        </Link>
                      ))}
                        </div>

                        {/* Dropdown Footer */}
                        <div className="relative z-10 mt-3 pt-3 border-t border-white/10">
                          <div className="text-center">
                            <span className="text-xs text-gray-400">Explore all options</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </li>
            ))}
          </ul>
        </nav>

        {/* CTA Button */}
        <div className="flex items-center space-x-4">
          {/* <button 
            onClick={() => handleNavClick('/get-started')}
            className="px-6 py-2.5 bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-medium rounded-lg hover:from-cyan-600 hover:to-purple-700 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-cyan-500/25"
          >
            Get Started
          </button> */}
        </div>
      </div>

      {/* Bottom gradient line */}
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-cyan-500/50 to-transparent"></div>
    </header>
  );
};

export default Header;
