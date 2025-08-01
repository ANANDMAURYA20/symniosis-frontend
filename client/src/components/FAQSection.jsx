import React, { useState } from "react";

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: "What is the purpose of this application?",
      answer: "This application serves as a platform to showcase various features and services, providing users with an intuitive interface to explore cutting-edge solutions and innovative technologies."
    },
    {
      question: "How can I contact support?",
      answer: "You can contact support through multiple channels: the Contact section of the application, our 24/7 live chat feature, or by emailing support@symbiosis.com. Our team typically responds within 2-4 hours."
    },
    {
      question: "Is there a mobile version of this application?",
      answer: "Yes! The application is fully responsive and optimized for all devices. Whether you're using a smartphone, tablet, or desktop, you'll enjoy a seamless experience across all platforms."
    },
    {
      question: "Where can I find the documentation?",
      answer: "Comprehensive documentation is available in multiple formats: online help center, downloadable PDF guides, video tutorials, and the README.md file in our GitHub repository. All resources are regularly updated."
    },
    {
      question: "What are the system requirements?",
      answer: "Our application works on any modern web browser including Chrome, Firefox, Safari, and Edge. No additional software installation is required, and it runs smoothly on devices with at least 2GB RAM."
    },
    {
      question: "Is my data secure?",
      answer: "Absolutely! We use enterprise-grade encryption, secure SSL connections, and follow industry best practices for data protection. Your information is stored securely and never shared with third parties."
    }
  ];

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="relative min-h-screen bg-gradient-to-br from-slate-950 via-indigo-950 to-purple-950 py-20 px-6 overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-64 h-64 bg-blue-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-32 right-16 w-80 h-80 bg-purple-500/15 rounded-full blur-3xl animate-bounce opacity-60"></div>
        <div className="absolute top-1/2 left-1/4 w-48 h-48 bg-cyan-500/10 rounded-full blur-2xl animate-pulse delay-1000"></div>
        <div className="absolute bottom-20 left-1/3 w-56 h-56 bg-pink-500/10 rounded-full blur-3xl animate-bounce delay-500"></div>
      </div>

      {/* Floating geometric shapes */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(15)].map((_, i) => (
          <div
            key={i}
            className={`absolute rounded-full opacity-30 animate-bounce ${
              i % 3 === 0 ? 'bg-cyan-400/20' : i % 3 === 1 ? 'bg-purple-400/20' : 'bg-pink-400/20'
            }`}
            style={{
              width: `${Math.random() * 20 + 10}px`,
              height: `${Math.random() * 20 + 10}px`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${4 + Math.random() * 4}s`
            }}
          ></div>
        ))}
      </div>

      <div className="relative max-w-4xl mx-auto z-10">
        {/* Header Section */}
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-bold mb-6 animate-pulse">
            <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
              Frequently Asked
            </span>
            <br />
            <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent">
              Questions
            </span>
          </h2>
          <p className="text-gray-300 text-xl max-w-3xl mx-auto leading-relaxed">
            Find answers to common questions about our platform, features, and services.
          </p>
        </div>

        {/* FAQ Items */}
        <div className="space-y-6">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="group relative backdrop-blur-xl bg-white/5 rounded-2xl border border-white/10 overflow-hidden transition-all duration-500 hover:bg-white/10 hover:border-white/20"
            >
              {/* Animated gradient border */}
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 via-purple-500/20 to-pink-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl blur-sm"></div>
              
              {/* FAQ Item Content */}
              <div className="relative z-10">
                {/* Question Header */}
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full text-left p-6 md:p-8 focus:outline-none group"
                >
                  <div className="flex items-center justify-between">
                    <h3 className="text-lg md:text-xl font-semibold text-white group-hover:bg-gradient-to-r group-hover:from-cyan-400 group-hover:to-purple-400 group-hover:bg-clip-text group-hover:text-transparent transition-all duration-300">
                      {faq.question}
                    </h3>
                    <div className="relative">
                      {/* Plus/Minus Icon */}
                      <div className={`w-8 h-8 flex items-center justify-center rounded-full bg-gradient-to-r from-cyan-500 to-purple-500 transition-all duration-300 ${openIndex === index ? 'rotate-45 scale-110' : 'hover:scale-110'}`}>
                        <div className="w-4 h-0.5 bg-white absolute"></div>
                        <div className={`w-0.5 h-4 bg-white absolute transition-opacity duration-300 ${openIndex === index ? 'opacity-0' : 'opacity-100'}`}></div>
                      </div>
                      {/* Glow effect */}
                      <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full blur-md opacity-50 scale-0 group-hover:scale-150 transition-transform duration-300"></div>
                    </div>
                  </div>
                </button>

                {/* Answer Content */}
                <div className={`overflow-hidden transition-all duration-500 ease-in-out ${
                  openIndex === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                }`}>
                  <div className="px-6 md:px-8 pb-6 md:pb-8">
                    <div className="h-px bg-gradient-to-r from-transparent via-white/20 to-transparent mb-6"></div>
                    <p className="text-gray-300 leading-relaxed text-base md:text-lg">
                      {faq.answer}
                    </p>
                  </div>
                </div>

                {/* Active item indicator */}
                {openIndex === index && (
                  <div className="absolute left-0 top-6 bottom-6 w-1 bg-gradient-to-b from-cyan-500 via-purple-500 to-pink-500 rounded-r-full animate-pulse"></div>
                )}
              </div>

              {/* Decorative corner elements */}
              <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-bl from-purple-500/10 to-transparent rounded-bl-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="absolute bottom-0 left-0 w-16 h-16 bg-gradient-to-tr from-cyan-500/10 to-transparent rounded-tr-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            </div>
          ))}
        </div>

        {/* Bottom CTA Section */}
        <div className="text-center mt-16">
          <div className="backdrop-blur-xl bg-white/5 rounded-2xl p-8 border border-white/10">
            <h3 className="text-2xl font-bold text-white mb-4">
              Still have questions?
            </h3>
            <p className="text-gray-300 mb-6">
              Our support team is here to help you 24/7
            </p>
            <button className="relative group bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500 text-white font-semibold py-3 px-8 rounded-xl shadow-lg shadow-purple-500/25 hover:shadow-xl hover:shadow-purple-500/40 transform hover:scale-105 transition-all duration-300 overflow-hidden">
              <span className="relative z-10">Contact Support</span>
              <div className="absolute inset-0 bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </button>
          </div>
        </div>
      </div>

      {/* Bottom accent line */}
      <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500 animate-pulse"></div>
    </section>
  );
};

export default FAQSection;