import { useCart } from "../../context/CartContext";
import { useModals } from "../../context/ModalsContext";
import { useTheme } from "../../context/ThemeContext";

function Header() {
  
  const { onOpenModal } = useModals()
  const { logoSrc, carritoSrc } = useTheme();
const { listProducts,  totalProductos  } = useCart()
   
  

  return (
    <nav className="bg-red-700/90 dark:bg-red-800 text-white p-2 flex justify-between items-center shadow-md px-4 sm:px-10 lg:px-10 xl:px-20">

      {/* logo de pagina  */}
      <div className='flex items-center ml-4'>
        <img src={logoSrc}alt="Logo" className='w-10 sm:w-10 md:w-14'/>
        <h1 className='select-none ml-2.5 text-base sm:text-xl md:text-2xl font-bold'>
          Tienda-Online
        </h1>
      </div>
      
      


      {/* boton carrito */}
       
<button
        onClick={onOpenModal}
        className="relative flex text-white py-2 px-4 rounded cursor-pointer transition-transform duration-300 hover:scale-110">
<span className="relative ml-2 opacity: 1 transform: none "></span>
      {
        listProducts.length > 0 ? (
          // icono mas contador 
            <>
              <img src={carritoSrc} alt="Carrito"className='w-10 sm:w-10 md:w-14'/>
              <span className="absolute -top-3 -right-1 bg-yellow-500 text-white dark:text-black text-xs font-bold rounded-full px-2">
                {totalProductos}
              </span>
            </>
        ) : (
          <img src={carritoSrc} alt="Carrito"className='w-10 sm:w-10 md:w-14'/>
        )
      }

      </button>
      {/* <button
        onClick={onOpenModal}
        className="flex text-white py-2 px-4 rounded cursor-pointer transition-transform duration-300 hover:scale-110">
        <img src="/src/assets/carrito-Oscuro.png" alt="Carrito"className='w-10 sm:w-10 md:w-14'/>
      </button> */}

    </nav>
  )
}

export default Header