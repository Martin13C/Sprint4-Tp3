import { useEffect, useState } from 'react'

export const useListProduct = () => {
const [listProducts, setListProducts] = useState([])

  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem("listProducts")) || [];
    setListProducts(stored)
  }, []);
  
//   const addToProductList = (producto)  => {
//     if (!listProducts.find(item => item.id === producto.id)) {
//       const updated = [...listProducts, producto];
//       setListProducts(updated);
//       localStorage.setItem("listProducts", JSON.stringify(updated));
//     }
//   };


  // Agregar producto o incrementar cantidad si ya existe
  const addToProductList = (producto) => {
    setListProducts(prevList => {
      const existe = prevList.find(item => item.id === producto.id);
      let updated;
      if (existe) {
        updated = prevList.map(item =>
          item.id === producto.id ? { ...item, cantidad: item.cantidad + 1 } : item
        );
      } else {
        updated = [...prevList, { ...producto, cantidad: 1 }];
      }
      localStorage.setItem("listProducts", JSON.stringify(updated));
      return updated;
    });
  };

 // Disminuir cantidad o eliminar producto si cantidad llega a 1
  const decreaseProductQuantity = (id) => {
    setListProducts(prevList => {
      const updated = prevList.reduce((acc, item) => {
        if (item.id === id) {
          if (item.cantidad > 1) {
            acc.push({ ...item, cantidad: item.cantidad - 1 });
          }
          // Si cantidad es 1, no se agrega (se elimina)
        } else {
          acc.push(item);
        }
        return acc;
      }, []);
      localStorage.setItem("listProducts", JSON.stringify(updated));
      return updated;
    });
  };



//  const removeFromProductList = (id) => {
//     const updated = listProducts.filter(producto => producto.id !== id);
//     setListProducts(updated);
//     localStorage.setItem("listProducts", JSON.stringify(updated));
//   };

  // Eliminar producto completo
  const removeFromProductList = (id) => {
    setListProducts(prevList => {
      const updated = prevList.filter(item => item.id !== id);
      localStorage.setItem("listProducts", JSON.stringify(updated));
      return updated;
    });
  };

  const clearProductList = () => {
    setListProducts([]);
    localStorage.removeItem("listProducts");
  };

  return {listProducts, addToProductList, decreaseProductQuantity, removeFromProductList, clearProductList}
}

export default useListProduct