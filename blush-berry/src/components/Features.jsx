import React from 'react';

export default function Features() {
  return (
    <section
      id="features"
      className="bg-[#7A2438] text-[#FFF0F3] border-y border-[#F5CCDA]/20 py-16 px-6 lg:px-16"
    >
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12 text-center md:text-left">
        
        <div className="space-y-3">
          <div className="text-[#E8728A] text-2xl font-serif italic">
            01.
          </div>

          <h3 className="font-serif text-xl font-semibold tracking-wide">
            Local & Seasonal
          </h3>

          <p className="text-[#FFF0F3]/70 font-light text-sm leading-relaxed">
            Sourced from farms within 80 km. Every ingredient is chosen with
            the season and the recipe in mind.
          </p>
        </div>

        <div className="space-y-3">
          <div className="text-[#E8728A] text-2xl font-serif italic">
            02.
          </div>

          <h3 className="font-serif text-xl font-semibold tracking-wide">
            Baked at Dawn
          </h3>

          <p className="text-[#FFF0F3]/70 font-light text-sm leading-relaxed">
            Our ovens light up at 4 AM. Everything you see on our shelves was
            made by hand this morning.
          </p>
        </div>

        <div className="space-y-3">
          <div className="text-[#E8728A] text-2xl font-serif italic">
            03.
          </div>

          <h3 className="font-serif text-xl font-semibold tracking-wide">
            Gift & Catering
          </h3>

          <p className="text-[#FFF0F3]/70 font-light text-sm leading-relaxed">
            Bespoke boxes for weddings, corporate events, and gifting.
            Minimum 48 hours notice.
          </p>
        </div>

      </div>
    </section>
  );
}