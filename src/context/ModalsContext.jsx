import React, { createContext, useContext } from 'react';
import useModalj from '../hooks/useModal'


// definir contexto
const ModalsContext = createContext ();


// crear provider 
export const ModalsProvider = ({children }) => {
  const modals = useModalj();

   return (
    <ModalsContext.Provider value={modals}>
      { children }
    </ModalsContext.Provider>
  );
};

// usar el contexto 

// consumir contexto 
export function useModals() {
  return useContext(ModalsContext)
};