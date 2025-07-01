import ProductList from '../components/ProductList'
import Footer from '../components/Footer'
import Header from '../components/Header'
import Modo from '../components/Modo'
import { useState } from 'react'
import ModalCarrito from '../components/ModalCarrito'
import { useListProduct } from '../hooks/useListProduct'

function Home() {

  // useState para enviar stado de modal abierto o no 
  const [isModalOpen, setIsModalOpen] = useState(false)


  const { listProducts, removeFromProductList, clearProductList, addToProductList, decreaseProductQuantity } = useListProduct()

  return (
    <div>

      {/* Toggle modo oscuro-claro  */}

      <Modo />


      <Header
        onOpenModal={() => setIsModalOpen(true)}
      />
      {
        isModalOpen && (
          <ModalCarrito
            onClose={() => setIsModalOpen(false)}
            listProducts={listProducts}
            addToProductList={addToProductList}
            decreaseProductQuantity={decreaseProductQuantity}
            removeFromProductList={removeFromProductList}
            clearProductList={clearProductList}
          />
        )}

      <ProductList
        listProducts={listProducts}
        addToProductList={addToProductList}
      />

      <Footer />
    </div>
  )
}

export default Home