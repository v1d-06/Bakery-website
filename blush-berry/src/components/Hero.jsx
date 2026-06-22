import React from 'react';
import hero_img from '../assets/hero_img.jpg';

export default function Hero() {
  return (
    <>
      
      <style>{`
        @keyframes customFadeUp {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes subtleZoom {
          from { transform: scale(1.06); }
          to { transform: scale(1); }
        }
        .animate-fade-up {
          animation: customFadeUp 1s cubic-bezier(0.25, 1, 0.5, 1) forwards;
        }
        .animate-subtle-zoom {
          animation: subtleZoom 12s cubic-bezier(0.25, 1, 0.5, 1) forwards;
        }
        .delay-100 { animation-delay: 150ms; }
        .delay-200 { animation-delay: 300ms; }
        .delay-300 { animation-delay: 450ms; }
        .delay-400 { animation-delay: 600ms; }
      `}</style>

      <header id="story" className="relative px-6 md:px-12 lg:px-24 py-12 lg:py-16 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center w-full max-w-[1700px] mx-auto overflow-hidden lg:overflow-visible">
        
        {/* Left Text Column */}
        <div className="lg:col-span-6 space-y-6">
          <span className="text-xs uppercase tracking-[0.25em] font-bold text-[#E8728A] block opacity-0 animate-fade-up">
            Artisan Patisserie — Since 1987
          </span>
          
          <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl xl:text-7xl leading-[1.15] text-[#7A2438] tracking-tight opacity-0 animate-fade-up delay-100">
            Where <br />every bite <br />is a <span className="font-serif italic text-[#E8728A] font-normal">little ceremony.</span>
          </h1>
          
          <p className="text-[#7A2438]/80 max-w-md font-light text-base lg:text-lg leading-relaxed mb-8 opacity-0 animate-fade-up delay-200">
            Hand-crafted pastries baked fresh each morning with heritage recipes and the finest local ingredients.
          </p>
          
          {/* Responsive & Animated CTA Buttons */}
          <div className="pt-2 pb-4 flex flex-col sm:flex-row flex-wrap gap-4 opacity-0 animate-fade-up delay-300">
            <a href="#menu" className="bg-[#E8728A] text-white font-sans text-xs font-semibold uppercase tracking-widest px-10 py-4 hover:bg-[#7A2438] hover:-translate-y-0.5 transition-all duration-300 shadow-md text-center">
              Explore Menu
            </a>
            <a href="#heritage" className="border border-[#F5CCDA] text-[#7A2438] font-sans text-xs font-semibold uppercase tracking-widest px-10 py-4 hover:bg-[#FFE4EA] hover:-translate-y-0.5 transition-all duration-300 text-center">
              Our Story
            </a>
          </div>

          {/* Quick Metrics Grid */}
          <div className="pt-8 grid grid-cols-3 gap-4 sm:gap-8 border-t border-[#F5CCDA] max-w-lg opacity-0 animate-fade-up delay-400">
            <div>
              <p className="font-serif text-3xl lg:text-4xl text-[#7A2438]">47+</p>
              <p className="text-[10px] lg:text-xs uppercase tracking-widest text-[#7A2438]/60 mt-2">Daily Varieties</p>
            </div>
            <div>
              <p className="font-serif text-3xl lg:text-4xl text-[#7A2438]">36</p>
              <p className="text-[10px] lg:text-xs uppercase tracking-widest text-[#7A2438]/60 mt-2">Years Baking</p>
            </div>
            <div>
              <p className="font-serif text-3xl lg:text-4xl text-[#7A2438]">7 AM</p>
              <p className="text-[10px] lg:text-xs uppercase tracking-widest text-[#7A2438]/60 mt-2">First Batch</p>
            </div>
          </div>
        </div>

        {/* Right Image Column */}
        <div className="lg:col-span-6 mt-6 lg:mt-1 relative w-full opacity-0 animate-fade-up delay-200">
          
          {/* Asymmetrical Frame Container */}
          <div className="bg-[#FFE4EA] p-3 sm:p-4 rounded-t-[140px] sm:rounded-t-[160px] rounded-b-none shadow-sm w-full overflow-hidden">
            <img 
              src={hero_img} 
              alt="Freshly baked croissants dusted with sugar" 
              className="w-full h-[400px] sm:h-[500px] lg:h-[600px] object-cover rounded-t-[125px] sm:rounded-t-[140px] rounded-b-none animate-subtle-zoom"
            />
          </div>
          
          {/* Perfectly Responsive Absolute Badge:
            - Safe absolute spacing on medium layouts up to large screens.
            - Transitions smoothly to a cleanly integrated absolute card on tiny phones without layout overflow clipping.
          */}
          <div className="absolute top-4 right-4 lg:top-auto lg:bottom-6 lg:right-8 bg-[#FFE8EE]/95 backdrop-blur-sm border border-[#F5CCDA] p-4 sm:p-5 shadow-xl w-auto max-w-[280px] sm:min-w-[260px] opacity-0 animate-fade-up delay-400">
            <span className="text-[10px] uppercase tracking-widest font-bold text-[#E8728A] block mb-1 sm:mb-2">
              Today's Special
            </span>
            <div className="flex justify-between items-baseline gap-3 sm:gap-4">
              <h4 className="font-serif text-base sm:text-lg lg:text-xl font-bold text-[#7A2438] leading-tight">
                Strawberry Mille-Feuille
              </h4>
              <span className="font-serif text-sm sm:text-base font-semibold text-[#E8728A] whitespace-nowrap">
                ₹480
              </span>
            </div>
          </div>
          
        </div>
      </header>
    </>
  );
}