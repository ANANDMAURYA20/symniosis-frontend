import React, { useState } from "react";

const FeaturesSection = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const features = [
    {
      title: "AI-Powered Analytics",
      description: "Harness the power of artificial intelligence to gain deep insights into your data. Our advanced algorithms analyze patterns, predict trends, and provide actionable recommendations to drive your business forward.",
      icon: "🤖",
      gradient: "from-cyan-500 to-blue-600",
      hoverGradient: "from-cyan-400 to-blue-500",
      shadowColor: "cyan-500/50",
      borderColor: "cyan-500/30"
    },
    {
      title: "Real-time Collaboration",
      description: "Connect and collaborate with your team seamlessly across the globe. Share ideas, edit documents simultaneously, and stay synchronized with real-time updates and instant notifications.",
      icon: "🚀",
      gradient: "from-purple-500 to-pink-600",
      hoverGradient: "from-purple-400 to-pink-500",
      shadowColor: "purple-500/50",
      borderColor: "purple-500/30"
    },
    {
      title: "Enterprise Security",
      description: "Protect your valuable data with bank-level security measures. Multi-factor authentication, end-to-end encryption, and compliance with international security standards ensure your information stays safe.",
      icon: "🛡️",
      gradient: "from-emerald-500 to-teal-600",
      hoverGradient: "from-emerald-400 to-teal-500",
      shadowColor: "emerald-500/50",
      borderColor: "emerald-500/30"
    },
    {
      title: "Cloud Integration",
      description: "Seamlessly integrate with major cloud platforms including AWS, Azure, and Google Cloud. Scale your operations effortlessly with automatic load balancing and global content delivery.",
      icon: "☁️",
      gradient: "from-orange-500 to-red-600",
      hoverGradient: "from-orange-400 to-red-500",
      shadowColor: "orange-500/50",
      borderColor: "orange-500/30"
    },
    {
      title: "Custom Workflows",
      description: "Design and automate complex business processes with our intuitive drag-and-drop workflow builder. Create custom triggers, actions, and conditions to streamline your operations.",
      icon: "⚡",
      gradient: "from-indigo-500 to-purple-600",
      hoverGradient: "from-indigo-400 to-purple-500",
      shadowColor: "indigo-500/50",
      borderColor: "indigo-500/30"
    },
    {
      title: "Advanced Reporting",
      description: "Generate comprehensive reports with beautiful visualizations and interactive dashboards. Export to multiple formats and schedule automated delivery to stakeholders.",
      icon: "📊",
      gradient: "from-pink-500 to-rose-600",
      hoverGradient: "from-pink-400 to-rose-500",
      shadowColor: "pink-500/50",
      borderColor: "pink-500/30"
    }
  ];

  return (
    <section id="features" className="relative min-h-screen bg-gradient-to-br from-slate-950 via-gray-900 to-slate-950 py-20 px-6 overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-32 left-16 w-80 h-80 bg-gradient-to-r from-blue-500/10 to-cyan-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-32 right-16 w-96 h-96 bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-full blur-3xl animate-bounce opacity-70"></div>
        <div className="absolute top-1/2 left-1/3 w-64 h-64 bg-gradient-to-r from-emerald-500/8 to-teal-500/8 rounded-full blur-2xl animate-pulse delay-1000"></div>
      </div>

      {/* Floating geometric shapes */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(25)].map((_, i) => (
          <div
            key={i}
            className={`absolute opacity-20 animate-bounce ${
              i % 5 === 0 ? 'bg-cyan-400' : 
              i % 5 === 1 ? 'bg-purple-400' : 
              i % 5 === 2 ? 'bg-pink-400' : 
              i % 5 === 3 ? 'bg-emerald-400' : 'bg-orange-400'
            } ${
              i % 3 === 0 ? 'rounded-full' : 
              i % 3 === 1 ? 'rounded-lg rotate-45' : 'rounded-full'
            }`}
            style={{
              width: `${Math.random() * 12 + 6}px`,
              height: `${Math.random() * 12 + 6}px`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 8}s`,
              animationDuration: `${5 + Math.random() * 6}s`
            }}
          ></div>
        ))}
      </div>

      <div className="relative max-w-7xl mx-auto z-10">
        {/* Header Section */}
        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent animate-pulse">
              Powerful Features
            </span>
            <br />
            <span className="bg-gradient-to-r from-emerald-400 via-blue-400 to-indigo-400 bg-clip-text text-transparent">
              Built for Excellence
            </span>
          </h2>
          <p className="text-gray-300 text-xl max-w-3xl mx-auto leading-relaxed">
            Discover the cutting-edge capabilities that make our platform the perfect choice 
            for modern businesses seeking innovation and efficiency.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className={`group relative backdrop-blur-xl bg-white/5 rounded-3xl p-8 border border-white/10 transition-all duration-500 hover:bg-white/10 hover:border-${feature.borderColor} hover:shadow-2xl hover:shadow-${feature.shadowColor} hover:scale-105 cursor-pointer`}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              {/* Animated gradient border */}
              <div className={`absolute inset-0 bg-gradient-to-r ${hoveredIndex === index ? feature.hoverGradient : feature.gradient} opacity-0 group-hover:opacity-20 transition-all duration-500 rounded-3xl blur-sm`}></div>
              
              {/* Feature Content */}
              <div className="relative z-10">
                {/* Icon Container */}
                <div className={`w-20 h-20 rounded-2xl bg-gradient-to-r ${feature.gradient} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg shadow-${feature.shadowColor}`}>
                  <span className="text-3xl">{feature.icon}</span>
                  {/* Icon glow effect */}
                  <div className={`absolute inset-0 bg-gradient-to-r ${feature.gradient} rounded-2xl blur-md opacity-0 group-hover:opacity-75 transition-opacity duration-300`}></div>
                </div>

                {/* Feature Title */}
                <h3 className={`text-2xl font-bold text-white mb-4 group-hover:bg-gradient-to-r group-hover:${feature.hoverGradient} group-hover:bg-clip-text group-hover:text-transparent transition-all duration-300`}>
                  {feature.title}
                </h3>

                {/* Feature Description */}
                <p className="text-gray-300 leading-relaxed group-hover:text-gray-200 transition-colors duration-300">
                  {feature.description}
                </p>

                {/* Hover indicator */}
                <div className={`mt-6 flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0`}>
                  <span className="text-sm font-semibold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                    Learn More
                  </span>
                  <div className={`w-6 h-6 rounded-full bg-gradient-to-r ${feature.gradient} flex items-center justify-center group-hover:rotate-45 transition-transform duration-300`}>
                    <div className="w-3 h-0.5 bg-white"></div>
                    <div className="w-0.5 h-3 bg-white absolute"></div>
                  </div>
                </div>
              </div>

              {/* Decorative corner elements */}
              <div className={`absolute top-0 right-0 w-16 h-16 bg-gradient-to-bl ${feature.gradient} opacity-10 rounded-bl-3xl opacity-0 group-hover:opacity-20 transition-opacity duration-500`}></div>
              <div className={`absolute bottom-0 left-0 w-12 h-12 bg-gradient-to-tr ${feature.gradient} opacity-10 rounded-tr-3xl opacity-0 group-hover:opacity-20 transition-opacity duration-500`}></div>

              {/* Active feature indicator */}
              {hoveredIndex === index && (
                <div className={`absolute left-0 top-8 bottom-8 w-1 bg-gradient-to-b ${feature.gradient} rounded-r-full animate-pulse`}></div>
              )}
            </div>
          ))}
        </div>

        {/* Bottom CTA Section */}
        {/* <div className="text-center mt-20">
          <div className="backdrop-blur-xl bg-white/5 rounded-3xl p-12 border border-white/10 max-w-4xl mx-auto">
            <h3 className="text-3xl font-bold text-white mb-6">
              Ready to experience these features?
            </h3>
            <p className="text-gray-300 text-lg mb-8 max-w-2xl mx-auto">
              Join thousands of satisfied customers who have transformed their workflow with our powerful platform.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="relative group bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500 text-white font-bold py-4 px-8 rounded-xl shadow-lg shadow-purple-500/50 hover:shadow-xl hover:shadow-purple-500/70 transform hover:scale-105 transition-all duration-300 overflow-hidden">
                <span className="relative z-10">Start Free Trial</span>
                <div className="absolute inset-0 bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </button>
              
              <button className="relative group backdrop-blur-xl bg-white/10 text-white font-semibold py-4 px-8 rounded-xl border-2 border-white/20 hover:border-white/40 hover:bg-white/20 transform hover:scale-105 transition-all duration-300">
                <span className="relative z-10">View Demo</span>
              </button>
            </div>
          </div>
        </div> */}
      </div>

      {/* Bottom accent line */}
      <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500 animate-pulse"></div>
    </section>
  );
};

export default FeaturesSection;