import React, { useState } from 'react';
import { Users, Briefcase, Mail, Phone, User, FileText, Send, CheckCircle, ChevronDown } from 'lucide-react';
import { apiService } from '../services/api';

 export const RequestStaff = () => {
  const [formData, setFormData] = useState({
    jobFunction: '',
    positionHiringFor: '',
    positionType: '',
    name: '',
    email: '',
    phone: '',
    jobDescription: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);

  const jobFunctions = [
    'Accounting & Finance',
    'Tax Preparation',
    'Bookkeeping',
    'Payroll Management',
    'Financial Analysis',
    'Audit & Compliance',
    'Business Consulting',
    'Administrative Support',
    'Customer Service',
    'Data Entry',
    'Other'
  ];

  const positionTypes = [
    'Full-time',
    'Part-time',
    'Contract',
    'Temporary',
    'Project-based',
    'Consulting',
    'Seasonal'
  ];

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleDropdownSelect = (field, value) => {
    setFormData({
      ...formData,
      [field]: value
    });
    setActiveDropdown(null);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      const result = await apiService.submitRequestStaff(formData);
      
      setIsSubmitted(true);
      console.log('✅ Staff request submitted successfully:', result);
      
      // Reset form after 4 seconds
      setTimeout(() => {
        setIsSubmitted(false);
        setFormData({
          jobFunction: '',
          positionHiringFor: '',
          positionType: '',
          name: '',
          email: '',
          phone: '',
          jobDescription: ''
        });
      }, 4000);
    } catch (error) {
      console.error('❌ Form submission failed:', error);
      alert(`Submission failed: ${error.message || 'Please try again later'}`);
    } finally {
      setIsSubmitting(false);
    }
  };

  const CustomDropdown = ({ label, options, value, field, placeholder }) => {
    return (
      <div className="group">
        <label className="block text-sm font-semibold text-gray-300 mb-2">
          {label} *
        </label>
        <select
          name={field}
          value={value}
          onChange={handleInputChange}
          className="w-full px-4 py-3 bg-gray-700/50 border border-gray-600 rounded-xl text-white hover:border-cyan-500 focus:border-cyan-400 focus:ring-2 focus:ring-cyan-500/20 transition-all duration-300 cursor-pointer"
        >
          <option value="" className="bg-gray-800 text-gray-400">
            {placeholder}
          </option>
          {options.map((option, index) => (
            <option key={index} value={option} className="bg-gray-800 text-white">
              {option}
            </option>
          ))}
        </select>
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-gray-900 to-black relative overflow-hidden">
      {/* Background Animation Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -left-40 w-80 h-80 bg-gradient-to-r from-purple-600/20 to-indigo-600/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -top-20 -right-20 w-60 h-60 bg-gradient-to-r from-cyan-500/15 to-blue-600/15 rounded-full blur-2xl animate-bounce"></div>
        <div className="absolute bottom-0 left-1/4 w-32 h-32 bg-gradient-to-r from-violet-500/10 to-purple-500/10 rounded-full blur-xl animate-pulse"></div>
        <div className="absolute top-1/2 right-10 w-4 h-4 bg-cyan-400 rounded-full animate-ping"></div>
        <div className="absolute top-20 left-10 w-3 h-3 bg-purple-400 rounded-full animate-bounce"></div>
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-4 py-12">
        {/* Header Section */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-2xl mb-6 animate-bounce shadow-lg">
            <Users className="w-8 h-8 text-white" />
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-4 bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
            YOU ARE JUST ONE STEP AWAY FROM HIRING A STAFF YOU NEED
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Just give us a few details in the form below and we will get in touch soon.
          </p>
          <div className="mt-6 h-1 w-32 bg-gradient-to-r from-cyan-500 to-purple-500 mx-auto rounded-full"></div>
        </div>

        {/* Form Container */}
        <div className="bg-gray-800/40 backdrop-blur-lg rounded-3xl shadow-2xl border border-white/10 p-8 md:p-12 transform hover:scale-[1.02] transition-all duration-300 hover:border-white/20">
          {!isSubmitted ? (
            <div className="space-y-8">
              {/* Top Row - Dropdowns */}
              <div className="grid md:grid-cols-3 gap-6">
                <CustomDropdown
                  label="Job Function"
                  options={jobFunctions}
                  value={formData.jobFunction}
                  field="jobFunction"
                  placeholder="Select Job Function"
                />
                
                <div className="group">
                  <label className="block text-sm font-semibold text-gray-300 mb-2 group-focus-within:text-cyan-400 transition-colors duration-300">
                    Position Hiring For *
                  </label>
                  <input
                    type="text"
                    name="positionHiringFor"
                    required
                    value={formData.positionHiringFor}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-gray-700/50 border border-gray-600 rounded-xl text-white placeholder-gray-400 hover:border-cyan-500 focus:border-cyan-400 focus:ring-2 focus:ring-cyan-500/20 transition-all duration-300 group-hover:shadow-md hover:bg-gray-700/70"
                    placeholder="E.g Tax Preparer"
                  />
                </div>

                <CustomDropdown
                  label="Position Type"
                  options={positionTypes}
                  value={formData.positionType}
                  field="positionType"
                  placeholder="Select Position Type"
                />
              </div>

              {/* Contact Information Row */}
              <div className="grid md:grid-cols-3 gap-6">
                <div className="group">
                  <label className="block text-sm font-semibold text-gray-300 mb-2 group-focus-within:text-cyan-400 transition-colors duration-300 flex items-center">
                    <User className="w-4 h-4 mr-2 text-cyan-400" />
                    Name *
                  </label>
                  <input
                    type="text"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-gray-700/50 border border-gray-600 rounded-xl text-white placeholder-gray-400 hover:border-cyan-500 focus:border-cyan-400 focus:ring-2 focus:ring-cyan-500/20 transition-all duration-300 group-hover:shadow-md hover:bg-gray-700/70"
                    placeholder="E.g Mr. First Last"
                  />
                </div>

                <div className="group">
                  <label className="block text-sm font-semibold text-gray-300 mb-2 group-focus-within:text-cyan-400 transition-colors duration-300 flex items-center">
                    <Mail className="w-4 h-4 mr-2 text-cyan-400" />
                    Email *
                  </label>
                  <input
                    type="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-gray-700/50 border border-gray-600 rounded-xl text-white placeholder-gray-400 hover:border-cyan-500 focus:border-cyan-400 focus:ring-2 focus:ring-cyan-500/20 transition-all duration-300 group-hover:shadow-md hover:bg-gray-700/70"
                    placeholder="E.g you@domain.com"
                  />
                </div>

                <div className="group">
                  <label className="block text-sm font-semibold text-gray-300 mb-2 group-focus-within:text-cyan-400 transition-colors duration-300 flex items-center">
                    <Phone className="w-4 h-4 mr-2 text-cyan-400" />
                    Phone *
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    required
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-gray-700/50 border border-gray-600 rounded-xl text-white placeholder-gray-400 hover:border-cyan-500 focus:border-cyan-400 focus:ring-2 focus:ring-cyan-500/20 transition-all duration-300 group-hover:shadow-md hover:bg-gray-700/70"
                    placeholder="(+1) ###-###-###"
                  />
                </div>
              </div>

              {/* Job Description */}
              <div className="group">
                <label className="block text-sm font-semibold text-gray-300 mb-2 group-focus-within:text-cyan-400 transition-colors duration-300 flex items-center">
                  <FileText className="w-4 h-4 mr-2 text-cyan-400" />
                  Job Description *
                </label>
                <textarea
                  name="jobDescription"
                  required
                  rows={6}
                  value={formData.jobDescription}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 bg-gray-700/50 border border-gray-600 rounded-xl text-white placeholder-gray-400 hover:border-cyan-500 focus:border-cyan-400 focus:ring-2 focus:ring-cyan-500/20 transition-all duration-300 resize-none group-hover:shadow-md hover:bg-gray-700/70"
                  placeholder="E.g I am looking for Tax preparer having more than 3 years experience in Ultra Tax Software"
                ></textarea>
              </div>

              {/* Submit Button */}
              <div className="text-center pt-6">
                <button
                  onClick={handleSubmit}
                  disabled={isSubmitting}
                  className="px-12 py-4 bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-bold text-lg rounded-2xl hover:from-cyan-600 hover:to-purple-700 transform hover:scale-105 transition-all duration-300 shadow-xl hover:shadow-cyan-500/25 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none flex items-center mx-auto group"
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-6 h-6 border-2 border-white/30 border-t-white rounded-full animate-spin mr-3"></div>
                      SUBMITTING REQUEST...
                    </>
                  ) : (
                    <>
                      <Send className="w-5 h-5 mr-3 group-hover:translate-x-1 transition-transform duration-300" />
                      SUBMIT NOW
                    </>
                  )}
                </button>
              </div>
            </div>
          ) : (
            <div className="text-center py-16">
              <div className="inline-flex items-center justify-center w-20 h-20 bg-green-500 rounded-full mb-8 animate-bounce">
                <CheckCircle className="w-10 h-10 text-white" />
              </div>
              <h2 className="text-3xl font-bold text-white mb-4">Request Submitted Successfully!</h2>
              <p className="text-lg text-gray-300 mb-6">
                Thank you for your staff request. Our team will review your requirements and get back to you within 24 hours.
              </p>
              <div className="bg-gray-700/50 backdrop-blur-sm rounded-2xl p-6 max-w-md mx-auto border border-white/10">
                <p className="text-cyan-300 font-medium">
                  What's Next?
                </p>
                <ul className="text-gray-300 text-sm mt-2 space-y-1">
                  <li>• We'll review your requirements</li>
                  <li>• Match you with qualified candidates</li>
                  <li>• Schedule interviews within 48 hours</li>
                </ul>
              </div>
            </div>
          )}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-12">
          <div className="bg-gray-800/40 backdrop-blur-sm rounded-2xl p-6 border border-white/10">
            <p className="text-gray-300 font-medium mb-4">
              Need help with your request? Our team is here to assist you!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-xl hover:from-cyan-600 hover:to-blue-700 transform hover:scale-105 transition-all duration-300 shadow-lg flex items-center justify-center">
                <Phone className="w-4 h-4 mr-2" />
                Call: +1 (929) 214-4491
              </button>
              <button className="px-6 py-3 bg-gradient-to-r from-purple-500 to-indigo-600 text-white font-semibold rounded-xl hover:from-purple-600 hover:to-indigo-700 transform hover:scale-105 transition-all duration-300 shadow-lg flex items-center justify-center">
                <Mail className="w-4 h-4 mr-2" />
                Email: info@symbiosisllp.com
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Click outside to close dropdowns */}
      {activeDropdown && (
        <div 
          className="fixed inset-0 z-40" 
          onClick={() => setActiveDropdown(null)}
        ></div>
      )}
    </div>
  );
};

