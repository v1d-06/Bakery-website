import React from 'react';
import { TESTIMONIALS } from '../data/menuData';

export default function Testimonials() {
  return (
    <section className="py-24 px-6 lg:px-16 bg-[#FFF0F3] border-b border-[#F5CCDA]">
      <div className="max-w-7xl mx-auto space-y-12">

        {/* Heading */}
        <div className="text-center space-y-2">
          <span className="text-xs uppercase tracking-widest font-semibold text-[#E8728A] block">
            Testimonials
          </span>

          <h2 className="font-serif text-4xl lg:text-5xl text-[#7A2438]">
            What our{' '}
            <span className="font-serif italic text-[#E8728A]">
              guests
            </span>{' '}
            say
          </h2>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {TESTIMONIALS.map((t, idx) => (
            <div
              key={idx}
              className="bg-[#FFE8EE] border border-[#F5CCDA] p-8 flex flex-col justify-between space-y-8 hover:shadow-lg transition-all duration-300"
            >
              <div className="space-y-4">

                {/* Stars */}
                <div className="text-[#E8728A] text-lg">
                  ★★★★★
                </div>

                {/* Quote */}
                <p className="font-serif text-lg text-[#7A2438] italic leading-relaxed">
                  "{t.quote}"
                </p>
              </div>

              {/* Author */}
              <div className="flex items-center gap-4 pt-4 border-t border-[#F5CCDA]/60">
                <div className="w-10 h-10 rounded-full bg-[#7A2438] text-white font-sans font-bold text-xs flex items-center justify-center uppercase tracking-wider">
                  {t.author
                    .split(' ')
                    .map((n) => n[0])
                    .join('')}
                </div>

                <div>
                  <h4 className="font-sans text-sm font-semibold text-[#7A2438]">
                    {t.author}
                  </h4>

                  <p className="text-[11px] text-[#7A2438]/60 uppercase tracking-wider">
                    {t.status}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}