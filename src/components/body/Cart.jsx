import React from 'react'
import { useCart } from '../../context/CartContext';

function Cart({ producto }) {

  const { addToProductList } = useCart()

  // desestructuracion del objeto producto 
  const { id, imagen, titulo, precio, descripcion } = producto;

  return (
    <div className='bg-gray-100/50 dark:bg-gray-800 dark:shadow-gray-700 py-4 px-2 rounded-xl shadow-lg text-center max-w-[350px]'>

      <div className="w-full h-96 overflow-hidden rounded-xl">
        <img src={imagen} alt={titulo} className="w-full h-full object-contain" />
      </div>

      <h3 className="text-black dark:text-gray-200 text-lg font-semibold  mt-3">{titulo}</h3>
      <h3 className='"text-black dark:text-yellow-400  text-lg font-bold'>{precio}$</h3>
      <h6 className='text-gray-600 dark:text-gray-200 mt-2'>
        {descripcion}
      </h6>

      {/* bootn de agregar productos con funcion en el boton,
      con envios de datos al LocalStorage*/}
      <button
        className="mt-3 text-white dark:text-black font-medium py-2 px-4 rounded-full transition-colors cursor-pointer bg-red-700 hover:bg-red-800  dark:bg-yellow-400 dark:hover:bg-yellow-500"
      onClick={() => addToProductList({ id, titulo, imagen, precio, descripcion })}
      >
        Agregar al Carrito
      </button>
    </div>

  )
}

export default Cart