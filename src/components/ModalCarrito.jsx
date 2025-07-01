
import { useState } from 'react'
import MsjConfirmacion from './MsjConfirmacion'

function ModalCarrito({ onClose, listProducts, removeFromProductList, clearProductList, decreaseProductQuantity, addToProductList }) {

  const [msjConfirm, setMsjConfirm] = useState(false)


  // Calculamos el total sumando precio * cantidad
  const total = listProducts.reduce(
    (acc, producto) => acc + producto.precio * producto.cantidad,
    0
  ) || 0;

  // funciones para manejar cartel de confirmacion 

  const msjMostrar = () => {
    setMsjConfirm(true)
  }

  const msjConfirmar = () => {
    clearProductList();
    setMsjConfirm(false)
  }

  const msjCancelar = () => {
    setMsjConfirm(false)
  }

  return (

    <section className="fixed inset-0 flex items-center justify-center bg-white/50 backdrop-blur z-50 opacity-100">
      <div className='bg-gray-900 rounded-xl shadow-xl w-11/12 max-w-md overflow-hidden'>
        <header className='bg-gray-100 text-black flex justify-between items-center p-4'>
          <h2 className="text-xl font-bold flex items-center ">
            <img src="/src/assets/logo-Oscuro.png" alt="Logo" className='w-15 h-15 mr-2' />
           Mi Carrito</h2>



          {/* boton para cerrar el modal */}
          <button
            onClick={onClose}
            className=" hover:text-gray-700 transition-transform duration-200 hover:scale-110"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="currentColor"
              viewBox="0 0 256 256"
            >
              <path d="M205.66,194.34a8,8,0,0,1-11.32,11.32L128,139.31,61.66,205.66a8,8,0,0,1-11.32-11.32L116.69,128,50.34,61.66A8,8,0,0,1,61.66,50.34L128,116.69l66.34-66.35a8,8,0,0,1,11.32,11.32L139.31,128Z"></path>
            </svg>
          </button>

        </header>



        {/* Contenido dinamico de los productos  */}

        <div className='p-6 bg-gray-50 max-h-[65vh] overflow-y-auto '>

          {/* Si no hay productos en la lista, mostramos un mensaje */}

          {/* // contenido por si no hay peliculas  */}
          <div className="flex flex-col items-center justify-center text-gray-400 py-10">
            <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="currentColor" className="text-gray-300 mb-2 bi bi-cart3" viewBox="0 0 16 16">
              <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .49.598l-1 5a.5.5 0 0 1-.465.401l-9.397.472L4.415 11H13a.5.5 0 0 1 0 1H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5M3.102 4l.84 4.479 9.144-.459L13.89 4zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4m7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4m-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2m7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2" />
            </svg>


            <p className="text-lg font-semibold text-yellow-400">Tu Carrito está vacío</p>
            <p className="text-sm text-gray-400">Agrega Productos a tu carrito para calcular el precio</p>
          </div>

          {/* contenido para cuando hay productos */}
          <div className='space-y-3'>
            {/* mapeo de la lista de productos en la listProducts  */}
            {listProducts.map((producto) => {

              if (!producto || !producto.precio || !producto.cantidad) return null;

              const precio = Number(producto.precio) || 0;
              const cantidad = Number(producto.cantidad) || 0;
              const subtotal = precio * cantidad;

              return (




                <div key={producto.id} className="flex items-center bg-gray-100 rounded-xl p-3 shadow-md border border-red-500">
                  <img className="w-16 h-24 object-cover rounded-lg shadow-sm" src={producto.imagen} alt={producto.titulo} />
                  <div className="ml-4 flex-grow">
                    <h3 className="text-lg font-semibold text-black">{producto.titulo}</h3>
                    <h3 className='text-lg font-semibold flex flex-wrap gap-3 text-red-700'>{precio.toFixed(2)}$ <p className="text-gray-700">Cantidad: {cantidad}</p></h3>

                    <p className="text-red-700 font-semibold">
                      Subtotal: ${subtotal.toFixed(2)}
                    </p>
                  </div>

                  {/* seccion de botones  */}
                  <div className='flex flex-col justify-between gap-15 align-bottom'>
                    <div className="flex flex-row justify-between">
                      <button
                        onClick={() => addToProductList(producto)}
                        className="bg-green-500 text-white px-3 py-1 rounded hover:bg-green-600"
                        aria-label={`Incrementar cantidad de ${producto.titulo}`}
                      >
                        +
                      </button>
                      <button
                        onClick={() => decreaseProductQuantity(producto.id)}
                        className="bg-yellow-500 text-white px-3 py-1 rounded hover:bg-yellow-600"
                        aria-label={`Disminuir cantidad de ${producto.titulo}`}
                      >
                        -
                      </button>
                    </div>

                    <button
                      onClick={() => removeFromProductList(producto.id)}
                      aria-label={`Eliminar ${producto.titulo} del carrito`}
                      className="bg-red-500 hover:bg-red-600 text-white p-2 rounded-lg flex items-center cursor-pointer">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        fill="currentColor"
                        viewBox="0 0 256 256"
                        className="mr-2"
                      >
                        <path d="M216,48H176V40a24,24,0,0,0-24-24H104A24,24,0,0,0,80,40v8H40a8,8,0,0,0,0,16h8V208a16,16,0,0,0,16,16H192a16,16,0,0,0,16-16V64h8a8,8,0,0,0,0-16ZM96,40a8,8,0,0,1,8-8h48a8,8,0,0,1,8,8v8H96Zm96,168H64V64H192ZM112,104v64a8,8,0,0,1-16,0V104a8,8,0,0,1,16,0Zm48,0v64a8,8,0,0,1-16,0V104a8,8,0,0,1,16,0Z"></path>
                      </svg>
                      Quitar</button>

                  </div>

                </div>
              )
            })}
          </ div>

        </div>


        {/* Total y botón vaciar */}

        {listProducts.length >= 1 && (

          <footer className="bg-gray-100 p-4 rounded-b-lg flex justify-between items-center">
            <span className="font-bold text-lg">Total Compra: ${total.toFixed(2)}</span>
            <button
              onClick={msjMostrar}
              className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700"
              disabled={listProducts.length === 0}
            >
              Vaciar carrito
            </button>
          </footer>



        )}



   {/* Nuevo modal para confirmacion de limpiar lista de del carrito  */}
        {
          msjConfirm && (
            <MsjConfirmacion
              msjConfirmar={msjConfirmar}
              msjCancelar={msjCancelar}
            />)
        }


      </div>
    </section >
  )
}

export default ModalCarrito