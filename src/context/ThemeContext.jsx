import React, { createContext, useContext } from 'react';
import useThemej from '../hooks/useTheme';

// deifinir contexto
const ThemeContext = createContext();

// crear provider 
export const ThemeProvider = ({ children }) => {
const tema = useThemej()
  return (
    <ThemeContext.Provider value={tema}>
      {children}
    </ThemeContext.Provider>
  );
};

// usar el context 

// cosnumir context
export function useTheme() {
  return useContext(ThemeContext);
}