
function Header({ onOpenModal }) {
  

  
  return (
    <nav className="bg-red-700/90 text-white p-2 flex justify-between items-center shadow-md px-4 sm:px-10 lg:px-10 xl:px-20">

      {/* logo de pagina  */}
      <div className='flex items-center ml-4'>
        <img src="/src/assets/logo-Oscuro.png" alt="Logo" className='w-10 sm:w-10 md:w-14'/>
        <h1 className='ml-2.5 text-base sm:text-xl md:text-2xl font-bold'>
          Tienda-Online
        </h1>
      </div>
      
      


      {/* boton carrito */}

      <button
        onClick={onOpenModal}
        className="flex text-white py-2 px-4 rounded cursor-pointer transition-transform duration-300 hover:scale-110">
        <img src="/src/assets/carrito-Oscuro.png" alt="Carrito"className='w-10 sm:w-10 md:w-14'/>
      </button>

    </nav>
  )
}

export default Header