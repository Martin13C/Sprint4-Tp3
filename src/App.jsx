import { CartProvider } from './context/CartContext';
import { ModalsProvider } from './context/ModalsContext';
import { ThemeProvider } from './context/ThemeContext';
import Home from './pages/Home';


function App() {

  return (
    <div id='rootElement' >

      {/* contexto de usos de carrito  */}

      <CartProvider>

        {/* Toggle modo oscuro-claro  */}
        <ThemeProvider>

          <ModalsProvider>

          <Home />

          </ModalsProvider>

        </ThemeProvider>

      </CartProvider>
    </div>
  )
}

export default App
