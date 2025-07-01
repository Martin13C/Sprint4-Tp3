import React from 'react'

function Cart({ producto, addToProductList }) {

  // desestructuracion del objeto producto 
  const { id, imagen, titulo, precio, descripcion } = producto;

  return (
    <div className='bg-gray-100/50 py-4 px-2 rounded-xl shadow-lg text-center max-w-[350px]'>

      <div className="w-full h-96 overflow-hidden rounded-xl">
        <img src={imagen} alt={titulo} className="w-full h-full object-contain" />
      </div>

      <h3 className="text-lg font-semibold  mt-3">{titulo}</h3>
      <h3 className='text-lg font-bold'>{precio}$</h3>
      <h6 className='text-gray-600 mt-2'>
        {descripcion}
      </h6>

      {/* bootn de agregar productos con funcion en el boton,
      con envios de datos al LocalStorage*/}
      <button
        className="mt-3 text-white font-medium py-2 px-4 rounded-full transition-colors cursor-pointer bg-red-700 hover:bg-red-800"
      onClick={() => addToProductList({ id, titulo, imagen, precio, descripcion })}
      >
        Agregar al Carrito
      </button>
    </div>

  )
}

export default Cart