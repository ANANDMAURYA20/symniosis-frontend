import React, { useState } from "react";

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const faqCategories = [
    {
      title: "Virtual Staff – Qualification, Experience and Knowledge",
      faqs: [
        {
          question: "What Accounting functions can your Virtual Staff perform?",
          answer: "Our virtual staff can handle a comprehensive range of accounting functions including bookkeeping, accounts payable/receivable, financial statement preparation, tax preparation, payroll processing, bank reconciliations, and compliance reporting. They are proficient in various accounting standards and can adapt to your specific business needs."
        },
        {
          question: "US GAAP, IRC, US Tax and Accounting Software – How do staff learn them and are they experienced?",
          answer: "Our staff undergo rigorous training in US GAAP principles, Internal Revenue Code (IRC), and popular US accounting software like QuickBooks, Xero, Sage, and TaxSlayer. We provide continuous education through our in-house training facility and ensure they stay updated with the latest tax laws and accounting standards through regular certification programs."
        },
        {
          question: "What qualifications do your employees hold?",
          answer: "Our virtual staff hold relevant accounting and finance degrees (Bachelor's/Master's in Commerce, Accounting, or Finance), professional certifications like CPA equivalent, and specialized training in US accounting practices. Many have additional certifications in specific software platforms and maintain continuing education requirements."
        }
      ]
    },
    {
      title: "Hiring Options, Onboarding and Working, Payment Plans, Benefits",
      faqs: [
        {
          question: "Is the staff experienced in US Accounting and Tax Software – A Hiring option?",
          answer: "Absolutely! We offer specialized hiring options where you can specifically request staff with proven experience in US accounting and tax software. During the selection process, we can arrange technical interviews and practical assessments to ensure the candidate meets your software proficiency requirements."
        },
        {
          question: "How do I sign-off a contract or work order?",
          answer: "Our streamlined onboarding process includes digital contract signing through secure platforms. Once you've selected your virtual staff, we'll provide a detailed work order outlining scope, deliverables, and timelines. Contracts can be signed electronically, and work can commence within 24-48 hours of agreement."
        },
        {
          question: "What sort of pricing strategy do you have for development projects?",
          answer: "We offer flexible pricing models including hourly rates, monthly retainers, and project-based pricing. Our transparent pricing structure is based on skill level, experience, and project complexity. We provide detailed cost breakdowns upfront with no hidden fees, ensuring you get maximum value for your investment."
        },
        {
          question: "What are the main benefits of offshore outsourcing?",
          answer: "Key benefits include significant cost savings (up to 60% reduction), access to skilled talent pool, 24/7 operational capability, scalability, reduced overhead costs, faster turnaround times, and the ability to focus on core business activities while maintaining high-quality service standards."
        },
        {
          question: "Why should I hire virtual staff for my support functions?",
          answer: "Virtual staff provide cost-effective solutions, eliminate recruitment hassles, offer specialized expertise, provide flexible scaling options, reduce infrastructure costs, and allow you to focus on strategic business growth while ensuring your support functions are handled by qualified professionals."
        },
        {
          question: "Do I lose control over my business when involving third parties?",
          answer: "Not at all! You maintain complete control through regular reporting, real-time communication tools, project management systems, and defined workflows. Our virtual staff work as an extension of your team, following your processes and reporting directly to you with full transparency."
        },
        {
          question: "How do I pay you?",
          answer: "We offer multiple secure payment options including wire transfers, ACH payments, credit cards, and international payment platforms like Wise or Payoneer. Payments can be structured monthly, bi-weekly, or per project milestone based on your preference and cash flow requirements."
        }
      ]
    },
    {
      title: "Secured Infrastructure, Data Security and Confidentiality",
      faqs: [
        {
          question: "Do you have a protected infrastructure and systems?",
          answer: "Yes, we maintain enterprise-grade infrastructure with multiple layers of security including firewalls, intrusion detection systems, secure VPN access, encrypted data transmission, and 24/7 monitoring. Our facilities are equipped with backup power systems and redundant internet connections to ensure uninterrupted service."
        },
        {
          question: "How do you ensure clients' data confidentiality?",
          answer: "We implement strict confidentiality measures including signed NDAs, role-based access controls, data encryption at rest and in transit, regular security audits, employee background verification, and compliance with international data protection standards like GDPR and SOC 2 Type II."
        },
        {
          question: "Do you handle all work via Internet? How do I send work to you?",
          answer: "We utilize secure cloud-based platforms and encrypted file transfer systems. Work can be shared through secure client portals, encrypted email systems, or integrated directly with your existing software platforms. We ensure all data transmission meets banking-level security standards."
        },
        {
          question: "How do you secure your workstations?",
          answer: "All workstations are secured with endpoint protection software, encrypted hard drives, automatic screen locks, restricted USB access, monitored internet usage, and regular security updates. Staff work in controlled environments with CCTV monitoring and restricted access protocols."
        },
        {
          question: "Do you have adequate infrastructure to support my business processes?",
          answer: "Our infrastructure includes high-speed internet connectivity, redundant power backup, modern computing equipment, licensed software, secure communication tools, and scalable cloud resources. We can adapt our infrastructure to meet specific client requirements and handle varying workload demands."
        }
      ]
    },
    {
      title: "Training, Communication and Upgrade Needs",
      faqs: [
        {
          question: "Do you have an in-house training facility to train your staff?",
          answer: "Yes, we have a state-of-the-art in-house training facility with dedicated trainers and customized training modules. Our comprehensive training covers US tax laws, accounting standards, software proficiency, soft skills, and industry best practices. We continuously update our training programs to reflect the latest industry trends and regulatory changes."
        },
        {
          question: "What if I am not satisfied with the work?",
          answer: "We have clear problem escalation routes and replacement policies in our contracts. If you're not satisfied, we provide immediate issue resolution, additional training for the staff member, or a suitable replacement. We also offer a trial period to ensure the right fit before long-term commitment."
        },
        {
          question: "Does your staff speak English and are comfortable with written English?",
          answer: "Yes, all our staff undergo English proficiency assessments during recruitment. English is widely used in India, and our team is comfortable with both written communication (chat/email) and verbal communication (audio/video calls). We ensure clear, professional communication at all times."
        }
      ]
    }
  ];

  const toggleFAQ = (categoryIndex, faqIndex) => {
    const index = `${categoryIndex}-${faqIndex}`;
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
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className={`absolute rounded-full opacity-20 animate-bounce ${
              i % 4 === 0 ? 'bg-cyan-400/20' : 
              i % 4 === 1 ? 'bg-purple-400/20' : 
              i % 4 === 2 ? 'bg-pink-400/20' : 'bg-green-400/20'
            }`}
            style={{
              width: `${Math.random() * 24 + 8}px`,
              height: `${Math.random() * 24 + 8}px`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 6}s`,
              animationDuration: `${3 + Math.random() * 5}s`
            }}
          ></div>
        ))}
      </div>

      <div className="relative max-w-6xl mx-auto z-10">
        {/* Header Section */}
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-bold mb-6 animate-pulse">
            <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
              Virtual Staff
            </span>
            <br />
            <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent">
              FAQ Hub
            </span>
          </h2>
          <p className="text-gray-300 text-xl max-w-3xl mx-auto leading-relaxed">
            Everything you need to know about our virtual accounting and tax professionals
          </p>
        </div>

        {/* FAQ Categories */}
        <div className="space-y-12">
          {faqCategories.map((category, categoryIndex) => (
            <div key={categoryIndex} className="backdrop-blur-xl bg-white/5 rounded-3xl border border-white/10 p-8 transition-all duration-500 hover:bg-white/8">
              {/* Category Title */}
              <h3 className="text-2xl md:text-3xl font-bold mb-8 text-center">
                <span className="bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                  {category.title}
                </span>
              </h3>
              
              {/* FAQ Items in Category */}
              <div className="space-y-4">
                {category.faqs.map((faq, faqIndex) => {
                  const isOpen = openIndex === `${categoryIndex}-${faqIndex}`;
                  
                  return (
                    <div
                      key={faqIndex}
                      className="group relative backdrop-blur-xl bg-white/5 rounded-2xl border border-white/10 overflow-hidden transition-all duration-500 hover:bg-white/10 hover:border-white/20"
                    >
                      {/* Animated gradient border */}
                      <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 via-purple-500/20 to-pink-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl blur-sm"></div>
                      
                      {/* FAQ Item Content */}
                      <div className="relative z-10">
                        {/* Question Header */}
                        <button
                          onClick={() => toggleFAQ(categoryIndex, faqIndex)}
                          className="w-full text-left p-6 md:p-8 focus:outline-none group"
                        >
                          <div className="flex items-start justify-between">
                            <h4 className="text-lg md:text-xl font-semibold text-white group-hover:bg-gradient-to-r group-hover:from-cyan-400 group-hover:to-purple-400 group-hover:bg-clip-text group-hover:text-transparent transition-all duration-300 pr-4">
                              {faq.question}
                            </h4>
                            <div className="relative flex-shrink-0">
                              {/* Plus/Minus Icon */}
                              <div className={`w-8 h-8 flex items-center justify-center rounded-full bg-gradient-to-r from-cyan-500 to-purple-500 transition-all duration-300 ${isOpen ? 'rotate-45 scale-110' : 'hover:scale-110'}`}>
                                <div className="w-4 h-0.5 bg-white absolute"></div>
                                <div className={`w-0.5 h-4 bg-white absolute transition-opacity duration-300 ${isOpen ? 'opacity-0' : 'opacity-100'}`}></div>
                              </div>
                              {/* Glow effect */}
                              <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full blur-md opacity-50 scale-0 group-hover:scale-150 transition-transform duration-300"></div>
                            </div>
                          </div>
                        </button>

                        {/* Answer Content */}
                        <div className={`overflow-hidden transition-all duration-500 ease-in-out ${
                          isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                        }`}>
                          <div className="px-6 md:px-8 pb-6 md:pb-8">
                            <div className="h-px bg-gradient-to-r from-transparent via-white/20 to-transparent mb-6"></div>
                            <p className="text-gray-300 leading-relaxed text-base md:text-lg">
                              {faq.answer}
                            </p>
                          </div>
                        </div>

                        {/* Active item indicator */}
                        {isOpen && (
                          <div className="absolute left-0 top-6 bottom-6 w-1 bg-gradient-to-b from-cyan-500 via-purple-500 to-pink-500 rounded-r-full animate-pulse"></div>
                        )}
                      </div>

                      {/* Decorative corner elements */}
                      <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-bl from-purple-500/10 to-transparent rounded-bl-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                      <div className="absolute bottom-0 left-0 w-16 h-16 bg-gradient-to-tr from-cyan-500/10 to-transparent rounded-tr-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA Section */}
        <div className="text-center mt-16">
          <div className="backdrop-blur-xl bg-white/5 rounded-2xl p-8 border border-white/10">
            <h3 className="text-3xl font-bold mb-4">
              <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                Ready to Build Your Virtual Team?
              </span>
            </h3>
            <p className="text-gray-300 mb-6 text-lg">
              That's Great! Let's get started with your perfect virtual accounting staff
            </p>
            <button 
              onClick={() => alert('Contact form would open here!')}
              className="relative group bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500 text-white font-semibold py-4 px-10 rounded-xl shadow-lg shadow-purple-500/25 hover:shadow-xl hover:shadow-purple-500/40 transform hover:scale-105 transition-all duration-300 overflow-hidden inline-block cursor-pointer"
            >
              <span className="relative z-10 text-lg text-white">Request a Staff Now</span>
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