import React from "react";
import { Link, useNavigate } from "react-router-dom";

function Footer() {
  const navigate = useNavigate();

  return (
    <footer className="bg-gray-900 text-gray-300 py-12">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8 animate-fadeIn">
        {/* Company Info */}
        <div>
          <h2 className="text-2xl font-bold text-white mb-4">SYMBIOSIS</h2>
          <p className="mb-4">
            We at Symbiosis Infinity Solutions LLP are passionate about identifying and providing the best staffing solutions to our customers.
          </p>
          <Link to="/about" className="text-white hover:text-gray-300 transition duration-300">
            Read More &raquo;
          </Link>
        </div>

        {/* Quick Navigation 1 */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4 border-b-2 border-blue-500 w-fit">Quick Navigation</h3>
          <ul className="space-y-2">
            <li><Link to="/" className="text-white hover:text-gray-300 transition">Home</Link></li>
            <li><Link to="/about" className="text-white hover:text-gray-300 transition">About Us</Link></li>
            <li><Link to="/our-team" className="text-white hover:text-gray-300 transition">Our Team</Link></li>
            <li><Link to="/services" className="text-white hover:text-gray-300 transition">Our Services</Link></li>
            <li><Link to="/testimonials" className="text-white hover:text-gray-300 transition">Testimonials</Link></li>
          </ul>
        </div>

        {/* Quick Navigation 2 */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4 border-b-2 border-blue-500 w-fit">Quick Navigation</h3>
          <ul className="space-y-2">
            <li><Link to="/virtual-staffing" className="text-white hover:text-gray-300 transition">Virtual Staffing</Link></li>
            <li><Link to="/engagement" className="text-white hover:text-gray-300 transition">Engagement Model</Link></li>
            <li><Link to="/request" className="text-white hover:text-gray-300 transition">Request a Staff</Link></li>
            <li><Link to="/faqs" className="text-white hover:text-gray-300 transition">FAQs</Link></li>
            <li><Link to="/contact" className="text-white hover:text-gray-300 transition">Contact</Link></li>
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
