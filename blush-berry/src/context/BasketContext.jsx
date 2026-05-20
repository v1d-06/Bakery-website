import React, { createContext, useContext, useState } from 'react';

const BasketContext = createContext();

export function BasketProvider({ children }) {
  const [basket, setBasket] = useState([]);

  const addToBasket = (item) => {
    setBasket((prevBasket) => {
      const exists = prevBasket.find((i) => i.id === item.id);
      if (exists) {
        return prevBasket.map((i) => i.id === item.id ? { ...i, quantity: i.quantity + 1 } : i);
      }
      return [...prevBasket, { ...item, quantity: 1 }];
    });
  };

  const totalCount = basket.reduce((acc, item) => acc + item.quantity, 0);
  const totalPrice = basket.reduce((acc, item) => acc + (item.price * item.quantity), 0);

  return (
    <BasketContext.Provider value={{ basket, addToBasket, totalCount, totalPrice }}>
      {children}
    </BasketContext.Provider>
  );
}

export const useBasket = () => useContext(BasketContext);