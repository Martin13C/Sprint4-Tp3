import Header from '../components/head/Header'
import Footer from '../components/footer/Footer'
import ModalCarrito from '../components/ModalCarrito'
import Modo from '../components/head/Modo'
import ProductList from '../components/body/ProductList'
import { useModals } from '../context/ModalsContext'
// import { useListProduct } from '../hooks/useListProduct'

function Home() {


const { isModalOpen } = useModals()

  // useState para enviar stado de modal abierto o no 
  // const [isModalOpen, setIsModalOpen] = useState(false)


  // const { listProducts, removeFromProductList, clearProductList, addToProductList, decreaseProductQuantity } = useListProduct()

  return (
    <div>

      {/* Toggle modo oscuro-claro  */}

      <Modo />

      

        <Header
          // onOpenModal={() => setIsModalOpen(true)}
        // listProducts={listProducts}
        />
        {
          isModalOpen && (
            <ModalCarrito
              // onClose={() => setIsModalOpen(false)}
            // listProducts={listProducts}
            // addToProductList={addToProductList}
            // decreaseProductQuantity={decreaseProductQuantity}
            // removeFromProductList={removeFromProductList}
            // clearProductList={clearProductList}
            />
          )}

     


      <ProductList
      // listProducts={listProducts}
      // addToProductList={addToProductList}
      />

      <Footer />
    </div>
  )
}

export default Home