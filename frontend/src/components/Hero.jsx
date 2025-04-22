import React from 'react'
import { assets } from '../assets/assets '

function Hero() {
  return (
    <div className="relative flex flex-col sm:flex-row items-center justify-between py-12 px-6 bg-gradient-to-r from-[#ffffff] to-[#fffcfb] border-2 border-[#d1a28e] rounded-lg shadow-lg">
    {/* Hero Left Side */}
    <div className="w-full sm:w-1/2 text-center sm:text-left max-w-md mx-auto sm:mx-0">
      {/* Ligne de séparation avant le texte */}
      <div className="flex justify-center sm:justify-start mb-4">
        <div className="w-12 h-[2px] bg-gradient-to-r from-[#e2c09d] to-[#a9705c]"></div>
      </div>
  
      {/* Titre principal */}
      <h1 className="text-2xl sm:text-3xl font-semibold text-[#4a4a4a] mb-4 leading-tight tracking-wide">
        Discover the Elegance of Our Latest Collection
      </h1>
  
      {/* Description */}
      <p className="text-xs sm:text-sm text-[#b6b0b0] mb-6 opacity-80 max-w-xs mx-auto sm:mx-0">
        Explore exquisite designs and premium materials tailored for every occasion. Timeless pieces that elevate your style effortlessly.
      </p>
  
      {/* Call to Action Button */}
      <button className="bg-[#d1a28e] text-white px-6 py-3 rounded-full text-sm font-semibold hover:bg-[#c78d7a] transition-all duration-300 ease-in-out">
        Shop Now
      </button>
    </div>
  
    {/* Hero Right Side (Image or additional content) */}
    <div className="w-full sm:w-1/2 mt-8 sm:mt-0 flex justify-center sm:justify-end">
      <img 
       className="w-full sm:w-1/2 lg:w-3/4 max-w-[400px] h-auto rounded-lg shadow-xl transform hover:scale-105 transition duration-500  "  
        src={assets.bg_image} 
        alt="Hero" 
        
      />
      
    </div>
  </div>
  

  )
}

export default Hero
