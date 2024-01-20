import './App.css'
import Navbar from './components/Navbar/Navbar.jsx'
import ItemListContainer from './components/ItemListContainer/ItemListContainer.jsx'
import {BrowserRouter, Routes , Route, Navigate} from "react-router-dom"
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer.jsx'
import Footer from './components/Footer/Footer.jsx'
import { CartProvider } from './Context/CartContext.jsx'
import CartView from './components/CartView/CartView.jsx'
import Checkout from './components/Checkout/Checkout.jsx'

function App() {

  return (
    <CartProvider>
      <BrowserRouter>
        
        <Navbar/>
        
        <Routes>
          <Route path="/" element={<ItemListContainer/>}/>
          <Route path='*' element={ <Navigate to={"/"}/>}/>
          <Route path='/Productos/:categoryId' element={<ItemListContainer/>}/>
          <Route path='/item/:itemId' element={<ItemDetailContainer/>}/>
          <Route path='/cart' element={<CartView/>} />
          <Route path='/checkout' element={<Checkout/>}/>
        </Routes>
        
        <Footer/>
        
      </BrowserRouter>
    </CartProvider>
  )
}
export default App
