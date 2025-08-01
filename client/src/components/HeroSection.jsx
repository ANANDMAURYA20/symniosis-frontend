import React from "react";
import { useNavigate } from "react-router-dom";

const HeroSection = () => {
  const navigate = useNavigate();

  return (
    <section
      className="relative z-0 bg-cover bg-center h-[80vh] flex items-center justify-center"
      style={{ backgroundImage: "url('https://images.unsplash.com/photo-1498050108023-c5249f4df085')" }} // Replace with your background image
    >
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/60"></div>

      {/* Content */}
      <div className="relative text-center text-white max-w-3xl px-4 animate-fadeIn">
        <h1 className="text-4xl md:text-6xl font-extrabold mb-4 leading-tight">
          Develop Your <span className="text-blue-400">Virtual Team</span>
        </h1>
        <p className="mb-8 text-lg md:text-xl">
          We help you develop your virtual team of Accountants and Tax Preparers.
        </p>
        <div className="flex justify-center gap-4">
          <button
            onClick={() => navigate("/services")}
            className="bg-blue-600 hover:bg-blue-500 text-white font-semibold px-6 py-3 rounded-full transition duration-300"
          >
            Our Services
          </button>
          <button
            onClick={() => navigate("/learn-more")}
            className="bg-white/20 hover:bg-white/30 text-white font-semibold px-6 py-3 rounded-full backdrop-blur-md transition duration-300"
          >
            Learn More
          </button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
