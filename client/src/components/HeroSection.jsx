import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { ArrowRight, Play, Star } from "lucide-react";

const HeroSection = () => {
  const navigate = useNavigate();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-cover bg-center bg-no-repeat pt-20 lg:pt-24" 
      style={{ backgroundImage: "url('https://images.unsplash.com/photo-1498050108023-c5249f4df085')" }}>
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/60"></div>
      
      {/* Animated Background */}
      <div className="absolute inset-0">
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 via-purple-900/20 to-cyan-900/20"></div>
        
        {/* Animated Shapes */}
        <div className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute top-40 right-20 w-96 h-96 bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-full blur-3xl animate-bounce delay-1000"></div>
        <div className="absolute bottom-20 left-1/4 w-64 h-64 bg-gradient-to-r from-green-500/10 to-cyan-500/10 rounded-full blur-2xl animate-pulse delay-2000"></div>
        
        {/* Grid Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.1)_1px,transparent_1px)] bg-[size:50px_50px]"></div>
        </div>
      </div>

      {/* Content Container */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className={`transition-all duration-1000 ease-out ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          
          {/* Badge */}
          <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 border border-cyan-500/30 rounded-full px-4 py-2 mb-8 animate-fade-in">
            <Star size={16} className="text-cyan-400" />
            <span className="text-cyan-400 text-sm font-medium">Trusted by 500+ Businesses</span>
          </div>

          {/* Main Heading */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-white mb-6 leading-tight animate-fade-in-delay">
            Develop Your{" "}
            <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent animate-pulse">
              Virtual Team
            </span>
          </h1>

          {/* Subtitle */}
          <p className="text-lg sm:text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed animate-fade-in-delay-2">
            We help you develop your virtual team of{" "}
            <span className="text-cyan-400 font-semibold">Accountants</span> and{" "}
            <span className="text-purple-400 font-semibold">Tax Preparers</span>{" "}
            with proven expertise and dedicated support.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4 mb-12 animate-fade-in-delay-2">
            <button
              onClick={() => navigate("/services")}
              className="group relative px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-full transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/25 min-w-[200px]"
            >
              <span className="flex items-center justify-center space-x-2">
                <span className="hover:text-white transition-colors duration-300">Our Services</span>
                <ArrowRight size={20} className="transform group-hover:translate-x-1 transition-transform duration-300" />
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-600 to-blue-700 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </button>
            
            <button
              onClick={() => navigate("/learn-more")}
              className="group relative px-8 py-4 bg-white/10 backdrop-blur-md text-white font-semibold rounded-full border border-white/20 transition-all duration-300 transform hover:scale-105 hover:bg-white/20 min-w-[200px]"
            >
              <span className="flex items-center justify-center space-x-2 text-white transition-colors duration-300">
                <Play size={20} className="transform group-hover:scale-110 transition-transform duration-300 text-white" />
                <span>Learn More</span>
              </span>
            </button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-2xl mx-auto animate-fade-in-delay-2">
            <div className="text-center">
              <div className="text-3xl sm:text-4xl font-bold text-cyan-400 mb-2">500+</div>
              <div className="text-gray-400 text-sm">Happy Clients</div>
            </div>
            <div className="text-center">
              <div className="text-3xl sm:text-4xl font-bold text-purple-400 mb-2">50+</div>
              <div className="text-gray-400 text-sm">Expert Staff</div>
            </div>
            <div className="text-center">
              <div className="text-3xl sm:text-4xl font-bold text-blue-400 mb-2">24/7</div>
              <div className="text-gray-400 text-sm">Support</div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/60 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>

      {/* Floating Elements */}
      <div className="absolute top-1/4 left-10 hidden lg:block animate-float">
        <div className="w-4 h-4 bg-cyan-400 rounded-full opacity-60"></div>
      </div>
      <div className="absolute top-1/3 right-20 hidden lg:block animate-float delay-1000">
        <div className="w-6 h-6 bg-purple-400 rounded-full opacity-40"></div>
      </div>
      <div className="absolute bottom-1/4 left-20 hidden lg:block animate-float delay-2000">
        <div className="w-3 h-3 bg-blue-400 rounded-full opacity-50"></div>
      </div>
    </section>
  );
};

export default HeroSection;
