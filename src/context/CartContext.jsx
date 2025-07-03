import React, { createContext, useContext } from 'react'
import useListProductj from '../hooks/useListProduct';


// definir contexto
const CartContext = createContext ();

// crear provider 
export const CartProvider = ({children }) => {
  const cart = useListProductj();

  return (
    <CartContext.Provider value={cart}>
      { children }
    </CartContext.Provider>
  );
};
// usar el contexto 

// consumir contexto 
export function useCart() {
  return useContext(CartContext)
}