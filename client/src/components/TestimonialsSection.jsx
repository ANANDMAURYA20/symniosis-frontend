import React, { useState, useEffect } from 'react';
import { Quote, Star, ChevronLeft, ChevronRight, User, MapPin, Calendar, ArrowRight } from 'lucide-react';
import './TestimonialsStyles.css';
import {Link} from 'react-router-dom'
import { useNavigate } from 'react-router-dom';

const TestimonialsSection = () => {
  const navigate=useNavigate();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const [autoPlay, setAutoPlay] = useState(true);

  const testimonials = [
    {
      name: "CPA Firm",
      role: "Client",
      company: "CPA Firm",
      location: "NY, USA",
      feedback: "It has been a fruitful and trustworthy experience of working with Symbiosis so far and we look forward for developing a robust virtual team with them in near future for both bookkeeping and tax preparation work. Thanks to them for their diligence and supportive working methods.",
      rating: 5,
      image: "",
      date: "Verified Client",
      project: "Bookkeeping & Tax Preparation"
    },
    {
      name: "CPA Firm",
      role: "Client",
      company: "CPA Firm",
      location: "TX, USA",
      feedback: "Symbiosis has been excellent in providing us the requisite back-office support services. Perfect allocation of team with experienced staff members to taking care of our peak season workload. Definitely worth giving a try with Symbiosis, for managing your back-office problems.",
      rating: 5,
      image: "",
      date: "Verified Client",
      project: "Back-Office Support"
    },
    {
      name: "Accounting Firm",
      role: "Client",
      company: "Accounting Firm",
      location: "IL, USA",
      feedback: "Hiring virtual staff through Symbiosis now seems a positive change that we brought in our firm. Benefits are many but most visible ones are to hire staff at 60-70% less salary and without worrying about compliance, payroll taxes and many other hassles. Thank you, Symbiosis!",
      rating: 5,
      image: "",
      date: "Verified Client",
      project: "Virtual Staffing"
    },
    {
      name: "CPA Firm",
      role: "Client",
      company: "CPA Firm",
      location: "FL, USA",
      feedback: "We got the opportunity to interview and test various candidates ourselves and find the right candidate for our requirement of tax preparation work. Real help comes to fore when it's a peak of tax season and we saw it while working with Symbiosis what a virtual team can do! Great Help from our virtual team and Symbiosis.",
      rating: 5,
      image: "",
      date: "Verified Client",
      project: "Tax Preparation"
    }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const section = document.getElementById('testimonials-section');
    if (section) observer.observe(section);

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!autoPlay) return;
    
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [autoPlay, testimonials.length]);

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    setAutoPlay(false);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
    setAutoPlay(false);
  };

  const goToTestimonial = (index) => {
    setCurrentIndex(index);
    setAutoPlay(false);
  };

  return (
    <section 
      id="testimonials-section"
      className="relative min-h-screen bg-gradient-to-br from-slate-950 via-gray-900 to-black overflow-hidden py-20 testimonials-container"
    >
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-72 h-72 bg-gradient-to-r from-emerald-600/10 to-teal-600/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-gradient-to-r from-violet-500/8 to-purple-600/8 rounded-full blur-3xl animate-bounce"></div>
        <div className="absolute top-1/2 left-1/3 w-48 h-48 bg-gradient-to-r from-cyan-500/6 to-blue-500/6 rounded-full blur-2xl animate-pulse delay-1000"></div>
        
        {/* Floating testimonial bubbles */}
        {[...Array(15)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-gradient-to-r from-emerald-400/20 to-cyan-400/20 rounded-full animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${3 + Math.random() * 2}s`
            }}
          />
        ))}
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Stats Section */}
        <div className={`flex flex-wrap justify-center gap-8 mb-16 transform transition-all duration-1000 ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
        }`}>
          <div className="bg-gradient-to-br from-gray-900/60 to-black/60 backdrop-blur-xl border border-white/10 rounded-2xl p-6 w-64 text-center transform transition-all duration-500 hover:scale-105 hover:border-emerald-500/30 hover:shadow-lg hover:shadow-emerald-500/10 pulse-animation animate-fadeIn" style={{ animationDelay: '0.3s' }}>
            <div className="text-5xl font-bold bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent mb-2">60-70%</div>
            <div className="text-gray-300 font-medium">Cost Savings</div>
            <div className="text-gray-500 text-sm mt-2">Compared to local hiring</div>
          </div>
          
          <div className="bg-gradient-to-br from-gray-900/60 to-black/60 backdrop-blur-xl border border-white/10 rounded-2xl p-6 w-64 text-center transform transition-all duration-500 hover:scale-105 hover:border-emerald-500/30 hover:shadow-lg hover:shadow-emerald-500/10 pulse-animation animate-fadeIn" style={{ animationDelay: '0.6s' }}>
            <div className="text-5xl font-bold bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent mb-2">100%</div>
            <div className="text-gray-300 font-medium">Compliance Managed</div>
            <div className="text-gray-500 text-sm mt-2">No payroll tax hassles</div>
          </div>
          
          <div className="bg-gradient-to-br from-gray-900/60 to-black/60 backdrop-blur-xl border border-white/10 rounded-2xl p-6 w-64 text-center transform transition-all duration-500 hover:scale-105 hover:border-emerald-500/30 hover:shadow-lg hover:shadow-emerald-500/10 pulse-animation animate-fadeIn" style={{ animationDelay: '0.9s' }}>
            <div className="text-5xl font-bold bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent mb-2">24/7</div>
            <div className="text-gray-300 font-medium">Support Available</div>
            <div className="text-gray-500 text-sm mt-2">For peak tax seasons</div>
          </div>
        </div>
        {/* Header */}
        <div className={`text-center mb-16 transform transition-all duration-1000 ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
        }`}>
          <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-emerald-500/10 to-cyan-500/10 border border-emerald-500/20 rounded-full text-emerald-400 text-sm font-medium tracking-wide mb-6">
            <Quote size={16} className="mr-2" />
            Client Testimonials
          </div>
          
          <h2 className="text-6xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-white via-emerald-100 to-cyan-200 bg-clip-text text-transparent">
            Client Success Stories
          </h2>
          
          <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
            Discover how Symbiosis has helped accounting and CPA firms across the United States transform their operations with virtual staffing solutions.
          </p>
          
          <div className="w-32 h-1 bg-gradient-to-r from-emerald-400 via-cyan-400 to-blue-400 mx-auto rounded-full mt-8"></div>
        </div>

        {/* Main Testimonial Carousel */}
        <div className={`relative max-w-5xl mx-auto mb-16 transform transition-all duration-1000 delay-300 ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
        }`}>
          <div className="relative bg-gradient-to-br from-gray-900/80 to-black/80 backdrop-blur-xl border border-white/10 rounded-3xl p-12 overflow-hidden">
            {/* Background Gradient */}
            <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/5 to-cyan-500/5 opacity-50"></div>
            
            {/* Quote Icon */}
            <div className="absolute top-8 left-8">
              <div className="w-16 h-16 bg-gradient-to-br from-emerald-500 to-cyan-500 rounded-2xl flex items-center justify-center">
                <Quote size={32} className="text-white" />
              </div>
            </div>

            {/* Testimonial Content */}
            <div className="relative z-10 pt-8">
              <div className="flex flex-col lg:flex-row items-center gap-12">
                {/* Avatar & Info */}
                <div className="flex-shrink-0 text-center lg:text-left">
                  <div className="relative inline-block mb-6">
                    <div className="w-32 h-32 rounded-full bg-gradient-to-br from-emerald-500 to-cyan-500 p-1">
                      <div className="w-full h-full rounded-full bg-gray-800 flex items-center justify-center overflow-hidden">
                        <div className="flex flex-col items-center justify-center text-white">
                          <div className="text-2xl font-bold">{testimonials[currentIndex].location.split(',')[0]}</div>
                          <User size={24} className="text-cyan-400 mt-1" />
                        </div>
                      </div>
                    </div>
                    <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-gradient-to-br from-emerald-500 to-cyan-500 rounded-full flex items-center justify-center">
                      <Star size={16} className="text-white fill-current" />
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <h3 className="text-2xl font-bold text-white">{testimonials[currentIndex].name}</h3>
                    <p className="text-emerald-400 font-medium">{testimonials[currentIndex].role}</p>
                    <p className="text-gray-400 text-sm">{testimonials[currentIndex].company}</p>
                    
                    <div className="flex items-center justify-center lg:justify-start text-gray-500 text-sm mt-4">
                      <MapPin size={14} className="mr-1" />
                      {testimonials[currentIndex].location}
                    </div>
                    
                    <div className="flex items-center justify-center lg:justify-start text-gray-500 text-sm">
                      <Calendar size={14} className="mr-1" />
                      {testimonials[currentIndex].date}
                    </div>
                  </div>
                </div>

                {/* Testimonial Text */}
                <div className="flex-1">
                  <div className="mb-6">
                    <div className="flex items-center justify-center lg:justify-start mb-4">
                      {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                        <Star key={i} size={20} className="text-yellow-400 fill-current mr-1" />
                      ))}
                    </div>
                    
                    <blockquote className="text-2xl md:text-3xl font-light text-gray-200 leading-relaxed mb-6 italic">
                      "{testimonials[currentIndex].feedback}"
                    </blockquote>
                    
                    {/* Key Benefits Highlights */}
                     <div className="flex flex-wrap gap-3 mb-6">
                       {currentIndex === 0 && (
                         <>
                           <span className="px-3 py-1 bg-gradient-to-r from-emerald-500/20 to-cyan-500/20 border border-emerald-500/30 rounded-full text-emerald-400 text-sm font-medium hover:scale-105 hover:border-emerald-500/50 transition-all duration-300 cursor-pointer tag">Trustworthy</span>
                           <span className="px-3 py-1 bg-gradient-to-r from-emerald-500/20 to-cyan-500/20 border border-emerald-500/30 rounded-full text-emerald-400 text-sm font-medium hover:scale-105 hover:border-emerald-500/50 transition-all duration-300 cursor-pointer animate-fadeIn tag" style={{animationDelay: '0.1s'}}>Diligent</span>
                           <span className="px-3 py-1 bg-gradient-to-r from-emerald-500/20 to-cyan-500/20 border border-emerald-500/30 rounded-full text-emerald-400 text-sm font-medium hover:scale-105 hover:border-emerald-500/50 transition-all duration-300 cursor-pointer animate-fadeIn tag" style={{animationDelay: '0.2s'}}>Supportive</span>
                         </>
                       )}
                       {currentIndex === 1 && (
                         <>
                           <span className="px-3 py-1 bg-gradient-to-r from-emerald-500/20 to-cyan-500/20 border border-emerald-500/30 rounded-full text-emerald-400 text-sm font-medium hover:scale-105 hover:border-emerald-500/50 transition-all duration-300 cursor-pointer tag">Excellent Service</span>
                           <span className="px-3 py-1 bg-gradient-to-r from-emerald-500/20 to-cyan-500/20 border border-emerald-500/30 rounded-full text-emerald-400 text-sm font-medium hover:scale-105 hover:border-emerald-500/50 transition-all duration-300 cursor-pointer animate-fadeIn tag" style={{animationDelay: '0.1s'}}>Experienced Staff</span>
                           <span className="px-3 py-1 bg-gradient-to-r from-emerald-500/20 to-cyan-500/20 border border-emerald-500/30 rounded-full text-emerald-400 text-sm font-medium hover:scale-105 hover:border-emerald-500/50 transition-all duration-300 cursor-pointer animate-fadeIn tag" style={{animationDelay: '0.2s'}}>Peak Season Support</span>
                         </>
                       )}
                       {currentIndex === 2 && (
                         <>
                           <span className="px-3 py-1 bg-gradient-to-r from-emerald-500/20 to-cyan-500/20 border border-emerald-500/30 rounded-full text-emerald-400 text-sm font-medium hover:scale-105 hover:border-emerald-500/50 transition-all duration-300 cursor-pointer tag">60-70% Cost Savings</span>
                           <span className="px-3 py-1 bg-gradient-to-r from-emerald-500/20 to-cyan-500/20 border border-emerald-500/30 rounded-full text-emerald-400 text-sm font-medium hover:scale-105 hover:border-emerald-500/50 transition-all duration-300 cursor-pointer animate-fadeIn tag" style={{animationDelay: '0.1s'}}>No Compliance Worries</span>
                           <span className="px-3 py-1 bg-gradient-to-r from-emerald-500/20 to-cyan-500/20 border border-emerald-500/30 rounded-full text-emerald-400 text-sm font-medium hover:scale-105 hover:border-emerald-500/50 transition-all duration-300 cursor-pointer animate-fadeIn tag" style={{animationDelay: '0.2s'}}>No Payroll Tax Hassles</span>
                         </>
                       )}
                       {currentIndex === 3 && (
                         <>
                           <span className="px-3 py-1 bg-gradient-to-r from-emerald-500/20 to-cyan-500/20 border border-emerald-500/30 rounded-full text-emerald-400 text-sm font-medium hover:scale-105 hover:border-emerald-500/50 transition-all duration-300 cursor-pointer tag">Candidate Selection</span>
                           <span className="px-3 py-1 bg-gradient-to-r from-emerald-500/20 to-cyan-500/20 border border-emerald-500/30 rounded-full text-emerald-400 text-sm font-medium hover:scale-105 hover:border-emerald-500/50 transition-all duration-300 cursor-pointer animate-fadeIn tag" style={{animationDelay: '0.1s'}}>Tax Season Support</span>
                           <span className="px-3 py-1 bg-gradient-to-r from-emerald-500/20 to-cyan-500/20 border border-emerald-500/30 rounded-full text-emerald-400 text-sm font-medium hover:scale-105 hover:border-emerald-500/50 transition-all duration-300 cursor-pointer animate-fadeIn tag" style={{animationDelay: '0.2s'}}>Virtual Team Benefits</span>
                         </>
                       )}
                     </div>
                    
                    <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-emerald-500/20 to-cyan-500/20 border border-emerald-500/30 rounded-full text-emerald-400 text-sm">
                      Project: {testimonials[currentIndex].project}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Navigation Arrows */}
            <button
              onClick={prevTestimonial}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-gray-800/80 hover:bg-gray-700 border border-white/10 rounded-full flex items-center justify-center text-white transition-all duration-300 hover:scale-110"
            >
              <ChevronLeft size={24} />
            </button>
            
            <button
              onClick={nextTestimonial}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-gray-800/80 hover:bg-gray-700 border border-white/10 rounded-full flex items-center justify-center text-white transition-all duration-300 hover:scale-110"
            >
              <ChevronRight size={24} />
            </button>
          </div>

          {/* Dots Indicator */}
          <div className="flex justify-center mt-8 space-x-3">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => goToTestimonial(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  currentIndex === index
                    ? 'bg-gradient-to-r from-emerald-400 to-cyan-400 scale-125'
                    : 'bg-gray-600 hover:bg-gray-500'
                }`}
              />
            ))}
          </div>
        </div>

        {/* Testimonial Grid */}
        <div className={`grid md:grid-cols-2 lg:grid-cols-3 gap-6 transform transition-all duration-1000 delay-500 ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
        }`}>
          {testimonials.map((testimonial, index) => (
            <div
                key={index}
                className={`group cursor-pointer transform transition-all duration-500 hover:scale-105 testimonial-card animate-fadeIn ${
                  currentIndex === index ? 'scale-105' : ''
                }`}
                onClick={() => goToTestimonial(index)}
                style={{ animationDelay: `${index * 0.15}s` }}
              >
              <div className={`relative bg-gradient-to-br from-gray-900/60 to-black/60 backdrop-blur-xl border rounded-2xl p-6 h-full transition-all duration-300 ${
                currentIndex === index 
                  ? 'border-emerald-500/50 shadow-lg shadow-emerald-500/20' 
                  : 'border-white/10 hover:border-white/20'
              }`}>
                <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/5 to-cyan-500/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                <div className="relative z-10">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-emerald-500 to-cyan-500 p-0.5 mr-4">
                      <div className="w-full h-full rounded-full bg-gray-800 flex items-center justify-center">
                        <div className="text-xs font-bold text-cyan-400">{testimonial.location.split(',')[0]}</div>
                      </div>
                    </div>
                    <div>
                      <h4 className="font-semibold text-white text-sm">{testimonial.name}</h4>
                      <p className="text-gray-400 text-xs">{testimonial.role}</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center mb-3">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} size={14} className="text-yellow-400 fill-current mr-1" />
                    ))}
                  </div>
                  
                  <p className="text-gray-300 text-sm leading-relaxed line-clamp-3 group-hover:text-gray-200 transition-colors duration-300">
                    "{testimonial.feedback.substring(0, 120)}..."
                  </p>
                  
                  {/* Mini Tags */}
                  <div className="flex flex-wrap gap-1 mt-2">
                    {index === 0 && (
                      <>
                        <span className="px-2 py-0.5 bg-emerald-500/10 rounded-md text-emerald-400 text-xs">Trustworthy</span>
                        <span className="px-2 py-0.5 bg-emerald-500/10 rounded-md text-emerald-400 text-xs">Diligent</span>
                      </>
                    )}
                    {index === 1 && (
                      <>
                        <span className="px-2 py-0.5 bg-emerald-500/10 rounded-md text-emerald-400 text-xs">Excellent</span>
                        <span className="px-2 py-0.5 bg-emerald-500/10 rounded-md text-emerald-400 text-xs">Experienced</span>
                      </>
                    )}
                    {index === 2 && (
                      <>
                        <span className="px-2 py-0.5 bg-emerald-500/10 rounded-md text-emerald-400 text-xs">Cost Savings</span>
                        <span className="px-2 py-0.5 bg-emerald-500/10 rounded-md text-emerald-400 text-xs">Hassle-Free</span>
                      </>
                    )}
                    {index === 3 && (
                      <>
                        <span className="px-2 py-0.5 bg-emerald-500/10 rounded-md text-emerald-400 text-xs">Tax Season</span>
                        <span className="px-2 py-0.5 bg-emerald-500/10 rounded-md text-emerald-400 text-xs">Virtual Team</span>
                      </>
                    )}
                  </div>
                  
                  <div className="mt-4 text-xs text-emerald-400">
                    {testimonial.project}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className={`text-center mt-16 transform transition-all duration-1000 delay-700 ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
        }`}>
          <div className="bg-gradient-to-r from-gray-900/50 to-black/50 backdrop-blur-xl border border-white/10 rounded-3xl p-12">
            <h3 className="text-3xl font-bold text-white mb-4">
              Ready to Transform Your Accounting Practice?
            </h3>
            <p className="text-gray-400 mb-8 max-w-2xl mx-auto">
              Join these satisfied clients and discover how Symbiosis can help you reduce costs, increase efficiency, and scale your business with virtual staffing solutions.
            </p>
            
            <Link to="/request-a-staff" className="inline-block">
              <button className="px-8 py-4 bg-gradient-to-r from-emerald-500 to-cyan-600 text-white font-semibold rounded-xl hover:from-emerald-600 hover:to-cyan-700 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-emerald-500/25 group pulse-animation">
                <span className="flex items-center justify-center">
                  Request Virtual Staff
                  <ArrowRight size={20} className="ml-2 transform group-hover:translate-x-1 transition-transform duration-300" />
                </span>
              </button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;