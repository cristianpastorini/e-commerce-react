import './App.css'
import Navbar from './components/Navbar/Navbar.jsx'
import ItemListContainer from './components/ItemListContainer/ItemListContainer.jsx'
import {BrowserRouter, Routes , Route, Navigate} from "react-router-dom"
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer.jsx'
import Footer from './components/Footer/Footer.jsx'

function App() {

  return (
    <>
    <BrowserRouter>
      
      <Navbar/>
      <
        Routes>
        <Route path="/" element={<ItemListContainer/>}/>
        <Route path='*' element={ <Navigate to={"/"}/>}/>
        <Route path='/Productos/:categoryId' element={<ItemListContainer/>}/>
        <Route path='/item/:itemId' element={<ItemDetailContainer/>}/>
      </Routes>
      
      <Footer/>
      
      </BrowserRouter>
    </>
  )
}
export default App
