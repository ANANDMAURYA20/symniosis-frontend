import React from "react";
import { Linkedin, Mail, Star } from "lucide-react";
import pic from "../assets/2.png";
import {Link, useNavigate} from "react-router-dom";

const OurTeam = () => {
  const navigate = useNavigate();
  const teamMembers = [
    {
      name: "Nishant Bharadwa",
      position: "Founder and Managing Partner",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face",
      bio: "Nishant is a recognised expert in US Accounts and Tax field and a founder member of Symbiosis which makes him the driving force behind us. He has been associated with various multinational companies previously on leading roles and obtained the clear understanding the client requirements of this industry. He completed his masters in Accounting and tax field and is QuickBooks Certified Advisor and having the in-depth knowledge of Business Management with enormous exposure for team handling and client retention and expansion for business growth.",
      linkedin: "#",
      email: "nishant@symbiosisllp.com",
      expertise: ["US Accounts & Tax", "QuickBooks Certified", "Business Management", "Team Leadership"],
      achievements: ["Masters in Accounting", "QuickBooks Certified Advisor", "Multinational Experience"]
    },
    {
      name: "Tarannum Hamdani",
      position: "Partner and Internal Training Head",
      image: pic,
      bio: "Master of Business Administration (MBA) qualified accountant, Tarranum is the partner at Symbiosis and leads the Training department for US Accounts and Taxes and is always in the process of making the staff better in terms of their knowledge and understanding. Under her wing, Symbiosis has grown exponentially in terms of operational knowledge and client retention standards. She has managed to sharpen the skillset of our employees with her continuous efforts and bringing in the new ideas and ways to enhance the knowledge of our staff for US GAAP and US Tax Laws along with obtaining the command over various US accounts and tax software.",
      linkedin: "#",
      email: "tarannum@symbiosisllp.com",
      expertise: ["MBA in Accounting", "US GAAP", "US Tax Laws", "Training & Development"],
      achievements: ["MBA Qualified", "Training Department Head", "Operational Excellence"]
    },
    {
      name: "Atik Shaikh",
      position: "Director of US Operations",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face",
      bio: "With over 8 years of experience in accounting and tax, Atik Shaikh is a force to reckon with in the US accounting and tax industry. He has been associated with Symbiosis as senior tax consultant providing us the benefits of his experience and insightful knowledge about this industry. Atik Shaikh was previously associated with a multi-national company for over 5 years as Operation Head for US Accounts and Taxes, before getting associated with Symbiosis in Jan 2020 as a Sr. Tax Consultant. He is a Fellow member of Institute of Chartered Accountants of India (FCA) and qualified professional expert in cloud accounting, individual and business tax for USA.",
      linkedin: "#",
      email: "atik@symbiosisllp.com",
      expertise: ["8+ Years Experience", "FCA Qualified", "Cloud Accounting", "US Tax Expert"],
      achievements: ["Fellow CA (FCA)", "Senior Tax Consultant", "Multinational Experience"]
    },
    {
      name: "Anil Sadiya",
      position: "Sr. Manager - US Operations",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop&crop=face",
      bio: "Anil holds his Masters qualification in accounts and is a qualified accountant with over 6 years' experience dealing with clients across a wide range of industries in US Accounts and taxes. He specialises in managing accounts for limited companies, LLPs and sole traders, and also has expertise US tax preparation, review and tax planning. Anil is associated with Symbiosis for more than 2 years as Sr. Manager Operations and manages our Ahmedabad office and supports our business expansion.",
      linkedin: "#",
      email: "anil@symbiosisllp.com",
      expertise: ["Masters in Accounts", "6+ Years Experience", "Tax Planning", "Business Expansion"],
      achievements: ["Masters Qualified", "Ahmedabad Office Head", "Tax Preparation Expert"]
    },
    {
      name: "Ednise Desmangles",
      position: "Head - Client Relations",
      image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=400&h=400&fit=crop&crop=face",
      bio: "Ednise is our Florida based Client Relations Head and works for connecting Symbiosis with prospective clients and helps is managing business relations with our current clients. She has been the star performer of Symbiosis and has got the tremendous history of client onboarding and retentions in her association tenure with us which comes up from her never give up attitude and always on learning mode personality. She had been an important link for Symbiosis stationed locally in United States and helps us connect better with our clients.",
      linkedin: "#",
      email: "ednise@symbiosisllp.com",
      expertise: ["Client Relations", "Business Development", "US Market", "Client Retention"],
      achievements: ["Florida Based", "Star Performer", "Client Onboarding Expert"]
    },
    {
      name: "Andy Shah",
      position: "Marketing & Client Relations",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop&crop=face",
      bio: "A qualified MBA in Marketing, Andy has over 7 years of marketing and team building experience with various multi-national accounting and IT Solutions companies. After joining Symbiosis, Andy has been working closely with the Managing Partner and is a key team member for business expansions strategies for Symbiosis to spread its wings across globe and serve in the field of accounting, tax and audit. A certified digital marketing expert with multiple marketing certifications, Andy brings to the table that thorough understanding and clear vision to expand and to grow in the direction management has been looking at over the years. Andy has been part of two functions at Symbiosis and taking care of both Marketing and Client Relations duties as effectively as his calibre persuades the management to expect from him.",
      linkedin: "#",
      email: "andy@symbiosisllp.com",
      expertise: ["MBA in Marketing", "7+ Years Experience", "Digital Marketing", "Business Expansion"],
      achievements: ["MBA in Marketing", "Digital Marketing Expert", "Global Expansion"]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-gray-900 to-black py-20 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -left-40 w-80 h-80 bg-gradient-to-r from-purple-600/20 to-indigo-600/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -top-20 -right-20 w-60 h-60 bg-gradient-to-r from-cyan-500/15 to-blue-600/15 rounded-full blur-2xl animate-bounce"></div>
        <div className="absolute top-1/2 left-1/4 w-32 h-32 bg-gradient-to-r from-violet-500/10 to-purple-500/10 rounded-full blur-xl animate-pulse delay-1000"></div>
        <div className="absolute bottom-20 right-1/3 w-40 h-40 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 rounded-full blur-2xl animate-bounce delay-500"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 backdrop-blur-sm border border-white/10 rounded-full text-sm font-medium mb-6 animate-fade-in">
            <span className="w-2 h-2 bg-cyan-400 rounded-full mr-2 animate-pulse"></span>
            <span className="text-white">Our Dedicated Team</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 animate-slide-up">
            Meet Our <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">Expert Team</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed animate-fade-in-delay">
            We are here to manage your virtual staffing needs for accounts and tax with experience and expertise. 
            Our team of certified professionals brings together decades of combined experience in US accounting, 
            tax preparation, and business management to deliver exceptional results for your business.
          </p>
        </div>

        {/* Team Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {teamMembers.map((member, index) => (
            <div 
              key={index} 
              className="group bg-gray-900/80 backdrop-blur-xl border border-white/10 rounded-2xl shadow-2xl hover:shadow-cyan-500/20 transition-all duration-500 transform hover:-translate-y-4 animate-fade-in-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Member Image */}
              <div className="relative overflow-hidden rounded-t-2xl">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-72 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent"></div>
                
                {/* Position Badge */}
                <div className="absolute top-4 left-4">
                  <span className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-3 py-1 rounded-full text-xs font-semibold shadow-lg">
                    {member.position.split(' ')[0]}
                  </span>
                </div>
                
                {/* Social Links */}
                <div className="absolute bottom-4 right-4 flex space-x-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <a
                    href={member.linkedin}
                    className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white p-2 rounded-full hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-110 shadow-lg"
                  >
                    <Linkedin size={16} />
                  </a>
                  <a
                    href={`mailto:${member.email}`}
                    className="bg-gradient-to-r from-purple-500 to-pink-600 text-white p-2 rounded-full hover:from-purple-600 hover:to-pink-700 transition-all duration-300 transform hover:scale-110 shadow-lg"
                  >
                    <Mail size={16} />
                  </a>
                </div>
              </div>

              {/* Member Info */}
              <div className="p-6">
                <div className="text-center mb-4">
                  <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors duration-300">
                    {member.name}
                  </h3>
                  <p className="text-cyan-400 font-semibold text-sm mb-4">{member.position}</p>
                </div>
                
                {/* Bio */}
                <p className="text-gray-300 text-sm leading-relaxed mb-6 line-clamp-4 group-hover:line-clamp-none transition-all duration-300">
                  {member.bio}
                </p>
                
                {/* Achievements */}
                <div className="mb-4">
                  <h4 className="text-sm font-semibold text-white mb-2">Key Achievements:</h4>
                  <div className="space-y-1">
                    {member.achievements.map((achievement, achievementIndex) => (
                      <div key={achievementIndex} className="flex items-center text-xs text-gray-300">
                        <div className="w-1.5 h-1.5 bg-cyan-400 rounded-full mr-2 animate-pulse"></div>
                        {achievement}
                      </div>
                    ))}
                  </div>
                </div>
                
                {/* Expertise Tags */}
                <div className="flex flex-wrap gap-2">
                  {member.expertise.map((skill, skillIndex) => (
                    <span
                      key={skillIndex}
                      className="bg-gradient-to-r from-cyan-500/20 to-purple-500/20 text-cyan-300 text-xs px-3 py-1 rounded-full font-medium border border-cyan-500/30 backdrop-blur-sm"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Team Values */}
        <div className="bg-gradient-to-r from-gray-900/80 to-black/80 backdrop-blur-xl border border-white/10 rounded-2xl p-8 text-white mb-16 shadow-2xl">
          <h2 className="text-3xl font-bold text-center mb-8 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">Why Choose Our Team?</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center group">
              <div className="bg-gradient-to-r from-cyan-500/20 to-purple-500/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 border border-cyan-500/30 group-hover:scale-110 transition-transform duration-300">
                <Star className="w-8 h-8 text-cyan-400" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-white">Expertise</h3>
              <p className="text-gray-300">
                Our team brings together decades of combined experience in US accounting, tax preparation, and business management.
              </p>
            </div>
            <div className="text-center group">
              <div className="bg-gradient-to-r from-cyan-500/20 to-purple-500/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 border border-cyan-500/30 group-hover:scale-110 transition-transform duration-300">
                <Star className="w-8 h-8 text-cyan-400" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-white">Dedication</h3>
              <p className="text-gray-300">
                We are committed to your success and go above and beyond to deliver exceptional results for your business.
              </p>
            </div>
            <div className="text-center group">
              <div className="bg-gradient-to-r from-cyan-500/20 to-purple-500/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 border border-cyan-500/30 group-hover:scale-110 transition-transform duration-300">
                <Star className="w-8 h-8 text-cyan-400" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-white">Innovation</h3>
              <p className="text-gray-300">
                We continuously innovate and adapt to provide cutting-edge solutions for modern businesses.
              </p>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center bg-gradient-to-r from-gray-900/80 to-black/80 backdrop-blur-xl border border-white/10 rounded-3xl p-12 mb-16 shadow-2xl">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 animate-fade-in">
              Ready to Build Your <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">Virtual Team</span>?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed animate-fade-in-delay">
              That's Great! Our expert team is ready to help you build the perfect virtual workforce 
              for your accounting and tax needs. Let's start your journey towards business success.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center animate-fade-in-delay-2">
              <button 
                onClick={() => navigate('/contact')}
                className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-xl font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-cyan-500/25"
              >
                Get Started Today
              </button>
              <button 
                onClick={() => navigate('/contact')}
                className="border-2 border-cyan-500 text-cyan-400 px-8 py-4 rounded-xl font-semibold hover:bg-cyan-500 hover:text-white transition-all duration-300 transform hover:scale-105"
              >
                Schedule a Call
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurTeam; 