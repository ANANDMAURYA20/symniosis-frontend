import React from "react";

function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 py-12">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8 animate-fadeIn">
        {/* Company Info */}
        <div>
          <h2 className="text-2xl font-bold text-white mb-4">SYMBIOSIS</h2>
          <p className="mb-4">
            We at Symbiosis Infinity Solutions LLP are passionate about identifying and providing the best staffing solutions to our customers.
          </p>
          <a href="#readmore" className="text-blue-400 hover:text-blue-300 transition duration-300">
            Read More &raquo;
          </a>
        </div>

        {/* Quick Navigation 1 */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4 border-b-2 border-blue-500 w-fit">Quick Navigation</h3>
          <ul className="space-y-2">
            <li><a href="#home" className="hover:text-blue-400 transition">Home</a></li>
            <li><a href="#about" className="hover:text-blue-400 transition">About Us</a></li>
            <li><a href="#team" className="hover:text-blue-400 transition">Our Team</a></li>
            <li><a href="#services" className="hover:text-blue-400 transition">Our Services</a></li>
            <li><a href="#testimonials" className="hover:text-blue-400 transition">Testimonials</a></li>
          </ul>
        </div>

        {/* Quick Navigation 2 */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4 border-b-2 border-blue-500 w-fit">Quick Navigation</h3>
          <ul className="space-y-2">
            <li><a href="#virtual-staffing" className="hover:text-blue-400 transition">Virtual Staffing</a></li>
            <li><a href="#engagement" className="hover:text-blue-400 transition">Engagement Model</a></li>
            <li><a href="#request" className="hover:text-blue-400 transition">Request a Staff</a></li>
            <li><a href="#faqs" className="hover:text-blue-400 transition">FAQs</a></li>
            <li><a href="#contact" className="hover:text-blue-400 transition">Contact</a></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div className="md:col-span-3 border-t border-gray-700 mt-8 pt-6 flex flex-col md:flex-row justify-between items-center text-sm">
          <div className="mb-4 md:mb-0">
            <p>150 S, Pine Island Road, Suite 300, Plantation, FL 33324</p>
          </div>
          <div className="mb-4 md:mb-0">
            <p>🇺🇸 +1 (929) 214 4491 | 🇮🇳 +91 79 4781 3134</p>
          </div>
          <div>
            <p>info@symbiosisllp.com</p>
          </div>
        </div>

        {/* Copyright */}
        <div className="md:col-span-3 text-center text-gray-500 text-xs mt-4">
          &copy; {new Date().getFullYear()} Symbiosis Infinity Solutions LLP. All Rights Reserved.
        </div>
      </div>
    </footer>
  );
}

export default Footer;
