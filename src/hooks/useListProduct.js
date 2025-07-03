import { useEffect, useState } from "react";

export const useListProductj = () => {
  const [listProducts, setListProducts] = useState([]);

  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem("listProducts")) || [];
    setListProducts(stored);
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
    setListProducts((prevList) => {
      const existe = prevList.find((item) => item.id === producto.id);
      let updated;
      if (existe) {
        updated = prevList.map((item) =>
          item.id === producto.id
            ? { ...item, cantidad: item.cantidad + 1 }
            : item
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
    setListProducts((prevList) => {
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
    setListProducts((prevList) => {
      const updated = prevList.filter((item) => item.id !== id);
      localStorage.setItem("listProducts", JSON.stringify(updated));
      return updated;
    });
  };

  const clearProductList = () => {
    setListProducts([]);
    localStorage.removeItem("listProducts");
  };

  // variable para controlar la cantidad de productos que hay dentro del carrito a pesar de estar repetidos
  const totalProductos = listProducts.reduce(
    (acc, producto) => acc + (producto.cantidad || 0),
    0
  );

  // Calculamos el total sumando precio * cantidad
  const total =
    listProducts.reduce(
      (acc, producto) => acc + producto.precio * producto.cantidad,
      0
    ) || 0;

  return {
    listProducts,
    totalProductos,
    total,
    addToProductList,
    decreaseProductQuantity,
    removeFromProductList,
    clearProductList,
  };
};

export default useListProductj;
