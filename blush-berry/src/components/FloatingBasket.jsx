import React from 'react';
import { useBasket } from '../context/BasketContext';

export default function FloatingBasket() {
  const { totalCount, totalPrice } = useBasket();

  if (totalCount === 0) return null;

  return (
    <div className="fixed bottom-6 right-6 z-50 animate-bounce">
      <button className="bg-berry text-white font-sans text-xs font-semibold uppercase tracking-widest py-3 px-6 flex items-center gap-4 border border-borderPink/30 shadow-2xl hover:bg-strawberry transition-colors">
        <span>Basket ({totalCount})</span>
        <span className="w-[1px] h-4 bg-white/30"></span>
        <span>₹{totalPrice}</span>
      </button>
    </div>
  );
}