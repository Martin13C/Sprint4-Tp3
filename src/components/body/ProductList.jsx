import Cart from './Cart'
import productos  from '../../api/productos'

function ProductList() {
  return (
    <div className='p-6 xl:px-40 flex flex-wrap justify-center gap-4 bg-white dark:bg-gray-950'>

{productos.map((producto) => (
        <Cart
        key={producto.id} 
        producto={producto}
        />
      ))}
      

    </div>
  )
}

export default ProductList