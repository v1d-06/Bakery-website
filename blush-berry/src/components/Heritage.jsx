import React from 'react';
import heritage from '../assets/heritage.png';

export default function Heritage() {
  return (
    <section
      id="heritage"
      className="bg-[#FFE4EA] border-y border-[#F5CCDA] py-10 sm:py-10 lg:py-18 px-4 sm:px-6 lg:px-12 overflow-hidden"
    >
      <div className="max-w-8xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-7 lg:gap-12 items-center">

        {/* IMAGE */}
        <div className="lg:col-span-5 group reveal animate-[fadeLeft_1s_ease_forwards]">
          <div className="overflow-hidden rounded-2xl border border-[#F5CCDA] shadow-xl shadow-[#E8728A]/10">
            <img
              src={heritage}
              alt="Cupcakes inside kitchen setting"
              className="w-full h-[300px] sm:h-[420px] lg:h-[520px] object-cover group-hover:scale-105 transition duration-700"
            />
          </div>
        </div>

        {/* CONTENT */}
        <div className="lg:col-span-7 space-y-6 sm:space-y-7 animate-[fadeUp_1s_ease_forwards]">

          {/* TOP LABEL */}
          <div className="flex items-center gap-3">
            <span className="h-[1px] w-10 bg-[#E8728A]"></span>

            <span className="text-[10px] sm:text-xs uppercase tracking-[0.3em] font-semibold text-[#E8728A]">
              Our Heritage
            </span>
          </div>

          {/* HEADING */}
          <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl leading-tight text-[#7A2438]">
            Baked with{" "}
            <span className="italic text-[#E8728A]">
              love
            </span>
            ,
            <br />
            served with pride
          </h2>

          {/* TEXT */}
          <p className="text-[#7A2438]/80 font-light leading-8 text-base sm:text-lg max-w-3xl">
            Since 1987, Blush & Butter has been crafting
            pastries the way they were meant to be —
            slowly, carefully, and with complete devotion
            to the craft. Every recipe is rooted in classic
            French traditions, and every ingredient is
            chosen from farms we know by name.
          </p>

          {/* PILLS */}
          <div className="flex flex-wrap gap-3 pt-2">

            {[
              'Heritage recipes',
              'Local farms',
              'No preservatives',
              'Small batch',
            ].map((pill, idx) => (
              <span
                key={idx}
                className="bg-[#FFF0F3] border border-[#F5CCDA] text-[#7A2438] text-[11px] sm:text-xs px-5 py-2 rounded-full hover:bg-[#E8728A] hover:text-white hover:border-[#E8728A] transition-all duration-300 cursor-default hover:scale-105"
              >
                {pill}
              </span>
            ))}
          </div>

          {/* STATS */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-4">

            {[
              { number: '38+', label: 'Years' },
              { number: '25k+', label: 'Customers' },
              { number: '100%', label: 'Fresh Daily' },
              { number: '50+', label: 'Recipes' },
            ].map((item, idx) => (
              <div
                key={idx}
                className="bg-[#FFF0F3]/70 backdrop-blur-sm border border-[#F5CCDA] rounded-2xl px-4 py-5 text-center hover:-translate-y-1 hover:shadow-lg transition-all duration-300"
              >
                <h3 className="font-serif text-2xl sm:text-3xl text-[#E8728A]">
                  {item.number}
                </h3>

                <p className="text-[#7A2438]/70 text-xs uppercase tracking-widest mt-1">
                  {item.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ANIMATIONS */}
      <style>{`
        @keyframes fadeUp {
          from {
            opacity: 0;
            transform: translateY(40px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes fadeLeft {
          from {
            opacity: 0;
            transform: translateX(-50px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
      `}</style>
    </section>
  );
}