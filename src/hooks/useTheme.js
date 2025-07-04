import { useEffect, useState } from "react";


export const useThemej = () => {
  
    // estado para el modo oscuro
    const [darkMode, setDarkMode] = useState(() => {
      return localStorage.getItem("darkMode") === "true";
    });
  
    // funcion para cambiar el modo
    const toggleDarkMode = () => {
      setDarkMode((prev) => !prev);
    }
  
  
    // useEffect para agregar/quitar la clase 'dark' en id='rootEllement'
  
    useEffect(() => {
    localStorage.setItem("darkMode", darkMode);
    const root = document.getElementById("rootElement");
    if (root) {
      root.classList.toggle('dark', darkMode);
    }
  }, [darkMode]);

//  useEffect(() => {
//   localStorage.setItem("darkMode", darkMode);
//   const html = document.documentElement; // referencia al <html>
//   if (darkMode) {
//     html.classList.add("dark");
//   } else {
//     html.classList.remove("dark");
//   }
// }, [darkMode]);

// cambio de imagenes segun tema 
  const logoSrc = darkMode ? '/logo-Oscuro.png' : '/logo-Claro.png' ;
  const carritoSrc = darkMode ? '/carrito-Oscuro.png' : '/carrito-Claro.png' ;
  
    return { darkMode, toggleDarkMode, logoSrc, carritoSrc}
}
export default useThemej