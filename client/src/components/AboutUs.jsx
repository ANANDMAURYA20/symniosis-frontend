import React, { useState, useEffect } from "react";
import { Users, Award, Target, Heart, ChevronRight, Zap, DollarSign, Clock, CheckCircle, Star, ArrowRight, Mail, Phone } from "lucide-react";

const AboutUs = () => {
  const [isVisible, setIsVisible] = useState({});
  const [activeTestimonial, setActiveTestimonial] = useState(0);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(prev => ({
              ...prev,
              [entry.target.id]: true
            }));
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = document.querySelectorAll('[id^="section-"]');
    elements.forEach(el => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  const services = [
    "Bookkeeping and Finance Outsourcing",
    "Accounting Standards",
    "Tax Preparation",
    "Tax Review and Tax Planning",
    "Accountancy and Audit"
  ];

  const benefits = [
    { icon: Users, title: "Easy Staff Recruitment", desc: "Pre-screened resumes with comprehensive interview and testing process" },
    { icon: Target, title: "Virtual Team Development", desc: "Build your own dedicated virtual team regardless of distance" },
    { icon: DollarSign, title: "Affordable Hiring", desc: "Cost-effective alternatives to traditional staffing solutions" },
    { icon: Award, title: "Qualified Staff", desc: "Expert professionals to cater to all your requirements" }
  ];

  const testimonials = [
    { name: "Sarah Johnson", role: "CPA Firm Partner", text: "Symbiosis transformed our practice. The quality of work and cost savings exceeded our expectations." },
    { name: "Michael Chen", role: "Enrolled Agent", text: "Their virtual team feels like an extension of our office. Professional, reliable, and incredibly skilled." },
    { name: "Lisa Rodriguez", role: "Accounting Firm Owner", text: "We've reduced costs by 55% while improving our service quality. Highly recommend Symbiosis!" }
  ];

  const FloatingParticles = () => (
    <div className="fixed inset-0 overflow-hidden pointer-events-none">
      {[...Array(20)].map((_, i) => (
        <div
          key={i}
          className="absolute w-1 h-1 bg-cyan-400 rounded-full opacity-30 animate-pulse"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 3}s`,
            animationDuration: `${3 + Math.random() * 4}s`
          }}
        />
      ))}
    </div>
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-gray-900 to-black text-white relative overflow-hidden">
      <FloatingParticles />
      
      {/* Hero Section */}
      <section className="relative z-10 min-h-screen flex items-center justify-center px-4">
        <div className="text-center max-w-4xl mx-auto">
          <div className="animate-fade-in-up">
            <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 backdrop-blur-sm border border-white/10 rounded-full text-sm font-medium mb-6">
              <span className="w-2 h-2 bg-cyan-400 rounded-full mr-2 animate-pulse"></span>
              <span className="text-white">About Symbiosis</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-cyan-400 via-purple-500 to-blue-400 bg-clip-text text-transparent animate-pulse">
              Symbiosis Infinity Solutions
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-gray-300 font-light">
              Your Trusted Partner for Back-Office Excellence
            </p>
            <div className="w-24 h-1 bg-gradient-to-r from-cyan-500 to-purple-600 mx-auto mb-8 rounded-full"></div>
            <p className="text-lg text-gray-400 max-w-3xl mx-auto leading-relaxed">
              We are passionate about identifying and providing the best back-office support solutions for CPAs, EAs and Accounting firms. We act with reliability and integrity.
            </p>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="section-about" className={`py-20 px-4 transition-all duration-1000 ${isVisible['section-about'] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-4xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                About Our Mission
              </h2>
              <p className="text-gray-300 text-lg leading-relaxed">
                Our clients have confidence in our ability to provide exceptional results for bookkeeping and tax needs. We are empathetic, process-oriented and very professional in our approach.
              </p>
              <p className="text-gray-400 leading-relaxed">
                We strive to offer you an experience that is exceptional in every way. At Symbiosis, we have a team of professionals with requisite knowledge and experience in US Accounts and Tax work, with expertise in majority of accounting and tax software used across the United States.
              </p>
            </div>
            <div className="relative">
              <div className="bg-gradient-to-br from-gray-900/80 to-black/80 backdrop-blur-xl border border-white/10 rounded-3xl p-8 shadow-2xl">
                <h3 className="text-2xl font-semibold mb-6 text-center text-white">Our Specialized Services</h3>
                <div className="space-y-4">
                  {services.map((service, idx) => (
                    <div key={idx} className="flex items-center space-x-3 transform hover:translate-x-2 transition-transform duration-300">
                      <CheckCircle className="w-5 h-5 text-cyan-400 flex-shrink-0" />
                      <span className="text-gray-300">{service}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section id="section-mission" className={`py-20 px-4 transition-all duration-1000 ${isVisible['section-mission'] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">Our Core Values</h2>
          <div className="grid md:grid-cols-2 gap-12 mb-20">
            <div className="bg-gradient-to-br from-gray-900/80 to-black/80 backdrop-blur-xl border border-white/10 rounded-2xl p-8 shadow-2xl hover:shadow-cyan-500/20 transition-all duration-300">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-xl flex items-center justify-center mr-4">
                  <Target className="w-6 h-6 text-white" />
                </div>
                <h2 className="text-2xl font-bold text-white">Our Mission</h2>
              </div>
              <p className="text-gray-300 leading-relaxed">
                To revolutionize the way businesses access and manage their virtual workforce, 
                providing seamless, efficient, and cost-effective staffing solutions that drive growth and success.
              </p>
            </div>

            <div className="bg-gradient-to-br from-gray-900/80 to-black/80 backdrop-blur-xl border border-white/10 rounded-2xl p-8 shadow-2xl hover:shadow-purple-500/20 transition-all duration-300">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-600 rounded-xl flex items-center justify-center mr-4">
                  <Award className="w-6 h-6 text-white" />
                </div>
                <h2 className="text-2xl font-bold text-white">Our Vision</h2>
              </div>
              <p className="text-gray-300 leading-relaxed">
                To become the leading provider of virtual staffing solutions, empowering businesses 
                worldwide to build exceptional teams that deliver outstanding results.
              </p>
            </div>
          </div>

          {/* Values Grid */}
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center group">
              <div className="bg-gradient-to-br from-cyan-500/20 to-purple-500/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 border border-cyan-500/30 group-hover:scale-110 transition-transform duration-300">
                <Heart className="w-8 h-8 text-cyan-400" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">Passion</h3>
              <p className="text-gray-300">
                We are passionate about delivering exceptional service and building lasting relationships with our clients.
              </p>
            </div>

            <div className="text-center group">
              <div className="bg-gradient-to-br from-cyan-500/20 to-purple-500/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 border border-cyan-500/30 group-hover:scale-110 transition-transform duration-300">
                <Users className="w-8 h-8 text-cyan-400" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">Excellence</h3>
              <p className="text-gray-300">
                We strive for excellence in everything we do, ensuring the highest quality standards for our clients.
              </p>
            </div>

            <div className="text-center group">
              <div className="bg-gradient-to-br from-cyan-500/20 to-purple-500/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 border border-cyan-500/30 group-hover:scale-110 transition-transform duration-300">
                <Target className="w-8 h-8 text-cyan-400" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">Innovation</h3>
              <p className="text-gray-300">
                We continuously innovate and adapt to provide cutting-edge solutions that meet evolving business needs.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section id="section-benefits" className={`py-20 px-4 transition-all duration-1000 ${isVisible['section-benefits'] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">
            Why Choose Us
          </h2>
          <p className="text-gray-400 mb-12 max-w-3xl mx-auto">
            Trust us with your back-office support and virtual staffing needs
          </p>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, idx) => (
              <div key={idx} className="group">
                <div className="bg-gradient-to-br from-gray-900/80 to-black/80 backdrop-blur-xl border border-white/10 rounded-2xl p-6 shadow-2xl hover:shadow-cyan-500/20 transition-all duration-500 hover:transform hover:scale-105">
                  <div className="w-16 h-16 bg-gradient-to-br from-cyan-500 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:rotate-12 transition-transform duration-300">
                    <benefit.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3 text-white">{benefit.title}</h3>
                  <p className="text-gray-400 text-sm leading-relaxed">{benefit.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section id="section-stats" className={`py-20 px-4 transition-all duration-1000 ${isVisible['section-stats'] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        <div className="max-w-6xl mx-auto">
          <div className="bg-gradient-to-r from-cyan-600/30 to-purple-600/30 backdrop-blur-xl border border-white/10 rounded-2xl p-8 text-white shadow-2xl">
            <div className="grid md:grid-cols-4 gap-8 text-center">
              <div>
                <div className="text-3xl font-bold mb-2">500+</div>
                <div className="text-cyan-100">Happy Clients</div>
              </div>
              <div>
                <div className="text-3xl font-bold mb-2">1000+</div>
                <div className="text-cyan-100">Team Members</div>
              </div>
              <div>
                <div className="text-3xl font-bold mb-2">5+</div>
                <div className="text-cyan-100">Years Experience</div>
              </div>
              <div>
                <div className="text-3xl font-bold mb-2">99%</div>
                <div className="text-cyan-100">Satisfaction Rate</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Founder Message */}
      <section id="section-founder" className={`py-20 px-4 transition-all duration-1000 ${isVisible['section-founder'] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        <div className="max-w-4xl mx-auto">
          <div className="bg-gradient-to-br from-gray-900/80 to-black/80 backdrop-blur-xl border border-white/10 rounded-3xl p-8 md:p-12 shadow-2xl">
            <h2 className="text-3xl font-bold mb-6 text-center bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent">
              Message From the Founder
            </h2>
            <div className="space-y-6 text-gray-300 leading-relaxed">
              <p>
                As a founder member and managing partner of Symbiosis Infinity Solutions, I firmly believe that if you're an accounting firm, CPA or Enrolled Agent, building your team virtually at Symbiosis has great advantages - the biggest being the quality of service you receive from our staff.
              </p>
              <p>
                The reduced costs along with other benefits such as efficiency and getting time to focus on your marketing and growth in terms of new clients and more business will follow, as your bookkeeping/accounting, tax or audit work will be completely taken care of by your efficient virtual team at Symbiosis.
              </p>
              <div className="bg-gradient-to-r from-cyan-600/20 to-purple-600/20 rounded-2xl p-6 border border-cyan-500/30 mt-8">
                <p className="text-lg font-semibold text-center text-white">
                  <span className="text-cyan-400">Trust us</span> and we guarantee to make your firm more profitable & deliver great client service while increasing efficiency & <span className="text-yellow-400">reduce cost up to 60%</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section id="section-testimonials" className={`py-20 px-4 transition-all duration-1000 ${isVisible['section-testimonials'] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-12 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
            What Our Clients Say
          </h2>
          
          <div className="relative">
            <div className="bg-gradient-to-br from-gray-900/80 to-black/80 backdrop-blur-xl border border-white/10 rounded-3xl p-8 shadow-2xl">
              <div className="flex justify-center mb-6">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-6 h-6 text-yellow-400 fill-current" />
                ))}
              </div>
              <p className="text-xl text-gray-300 mb-6 italic leading-relaxed">
                "{testimonials[activeTestimonial].text}"
              </p>
              <div>
                <p className="font-semibold text-white">{testimonials[activeTestimonial].name}</p>
                <p className="text-gray-400">{testimonials[activeTestimonial].role}</p>
              </div>
            </div>
            
            <div className="flex justify-center mt-6 space-x-2">
              {testimonials.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveTestimonial(idx)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    activeTestimonial === idx ? 'bg-cyan-500 w-8' : 'bg-gray-600'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-gradient-to-br from-gray-900/80 to-black/80 backdrop-blur-xl border border-white/10 rounded-3xl p-12 shadow-2xl">
            <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
              Ready to Build Your Virtual Team?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              That's Great! Let's get started on transforming your business.
            </p>
            <button className="group bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700 text-white font-bold py-4 px-8 rounded-full transition-all duration-300 transform hover:scale-105 hover:shadow-cyan-500/25">
              <span className="flex items-center justify-center space-x-2">
                <span>Request a Staff Now</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
              </span>
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutUs; 