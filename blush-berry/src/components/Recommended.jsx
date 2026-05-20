import React, { useState } from 'react';
import { MENU_ITEMS } from '../data/menuData';
import { useBasket } from '../context/BasketContext';
import { useNavigate } from 'react-router-dom';

export default function Recommended() {
  const [activeTab, setActiveTab] = useState('ALL');

  const { addToBasket } = useBasket();
  const navigate = useNavigate();

  const filteredMenu =
    activeTab === 'ALL'
      ? MENU_ITEMS.slice(0, 6)
      : MENU_ITEMS.filter(
          (item) => item.type.toUpperCase() === activeTab
        );

  return (
    <section
      id="menu"
      className="py-12 sm:py-10 lg:py-15 px-4 sm:px-6 lg:px-8 xl:px-12 max-w-8xl mx-auto bg-[#FFF0F3] overflow-hidden"
    >

      {/* HEADING */}
      <div className="text-center space-y-4 mb-7 sm:mb-10 animate-[fadeUp_1s_ease_forwards]">

        <span className="text-[10px] sm:text-xs uppercase tracking-[0.3em] font-semibold text-[#E8728A] block">
          Our Recommendations
        </span>

        <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl text-[#7A2438] leading-tight">
          Made fresh,
          <br className="sm:hidden" /> every morning
        </h2>

        <p className="text-[#7A2438]/70 italic font-serif text-sm sm:text-base max-w-2xl mx-auto leading-7">
          No freezers. No shortcuts. Everything on
          the shelf was baked today.
        </p>

        {/* TABS */}
        <div className="flex justify-center gap-2 sm:gap-3 pt-6 overflow-x-auto scrollbar-hide pb-2 px-1">

          {['ALL', 'PASTRIES', 'CAKES', 'CUPCAKES'].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`font-sans text-[10px] sm:text-xs font-semibold tracking-[0.2em] uppercase px-5 sm:px-6 py-2.5 border rounded-full transition-all duration-300 whitespace-nowrap hover:scale-105 ${
                activeTab === tab
                  ? 'bg-[#7A2438] text-white border-[#7A2438] shadow-lg shadow-[#7A2438]/20'
                  : 'bg-[#FFE8EE] text-[#7A2438] border-[#F5CCDA] hover:bg-[#FFE4EA]'
              }`}
            >
              {tab === 'ALL' ? 'Recommended' : tab}
            </button>
          ))}
        </div>
      </div>

      {/* PRODUCT GRID */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-16">

        {filteredMenu.map((item, index) => (
          <div
            key={item.id}
            className="bg-[#FFE8EE] border border-[#F5CCDA] rounded-4xl overflow-hidden group hover:-translate-y-2 hover:shadow-2xl hover:shadow-[#E8728A]/10 transition-all duration-500 animate-[fadeUp_1s_ease_forwards]"
            style={{
              animationDelay: `${index * 120}ms`,
            }}
          >

            {/* IMAGE */}
            <div className="relative overflow-hidden h-[220px] sm:h-[260px] lg:h-[300px] bg-[#FFF0F3]">

              {item.tag && (
                <span className="absolute top-4 left-4 z-10 bg-white/90 backdrop-blur-sm text-[#7A2438] text-[9px] sm:text-[10px] font-bold uppercase tracking-[0.2em] px-3 py-1.5 rounded-full border border-[#F5CCDA] shadow-sm">
                  {item.tag}
                </span>
              )}

              <img
                src={item.img}
                alt={item.name}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#280C14]/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition duration-500"></div>
            </div>

            {/* CONTENT */}
            <div className="p-5 sm:p-6 flex flex-col flex-grow justify-between">

              <div>

                <div className="flex justify-between items-start gap-4 mb-3">

                  <h3 className="font-serif text-xl sm:text-2xl text-[#7A2438] group-hover:text-[#E8728A] transition-colors duration-300 leading-snug">
                    {item.name}
                  </h3>

                  <span className="font-serif text-lg sm:text-xl font-semibold text-[#7A2438] whitespace-nowrap">
                    ₹{item.price}
                  </span>
                </div>

                <p className="text-[#7A2438]/70 font-light text-sm leading-7 mb-5 line-clamp-2">
                  {item.desc}
                </p>
              </div>

              {/* BUTTON */}
              <div className="flex justify-end">

                <button
                  onClick={() => addToBasket(item)}
                  className="w-8 h-8 rounded-full border border-[#F5CCDA] flex items-center justify-center bg-[#FFF0F3] text-[#7A2438] text-xl hover:bg-[#E8728A] hover:text-white hover:border-[#E8728A] hover:rotate-90 transition-all duration-300 shadow-sm hover:shadow-lg"
                >
                  +
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* VIEW MORE BUTTON */}
      <div className="flex justify-center mt-6 sm:mt-10 animate-[fadeUp_1.2s_ease_forwards]">

        <button
          onClick={() => navigate('/full-menu')}
          className="px-8 sm:px-10 py-3.5 sm:py-4 bg-[#E8728A] text-white text-sm sm:text-base font-semibold tracking-[0.15em] rounded-full hover:bg-[#7A2438] hover:scale-105 transition-all duration-300 shadow-xl shadow-[#E8728A]/20"
        >
          View More
        </button>
      </div>

      {/* CUSTOM ANIMATIONS */}
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

        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }

        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </section>
  );
}