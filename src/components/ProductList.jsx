import React from 'react'
import Cart from './Cart'
import productos  from '../api/productos'

function ProductList({ listProducts, addToProductList }) {
  return (
    <div className='p-6 xl:px-40 flex flex-wrap justify-center gap-4 bg-white'>

{productos.map((producto) => (
        <Cart
        key={producto.id} 
        producto={producto}
        addToProductList={addToProductList}
        listProducts={listProducts}
        />
      ))}
      

    </div>
  )
}

export default ProductList