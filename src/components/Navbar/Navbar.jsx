import React from 'react'

import CartWidget from '../CartWidget/CartWidget'
import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <header className="bg-sky-700 bg-cover">
            <div className=" flex flex-col md:flex-row justify-between items-center m-auto">
            <img src="../../../public/bebidas.jpg" alt="bebidas" className='flex  w-20 h-30 rounded-3xl' />
            <nav className="flex gap-4 m-3">
                
                <Link to={"/"}className=" text-white hover:text-black text-lg text-center">Inicio</Link>
                <Link to={"/Productos/Cervezas"}className=" text-white hover:text-black text-lg text-center" >Cervezas</Link>
                <Link to={"/Productos/Vinos"} className=" text-white hover:text-black text-lg text-center">Vinos y Espumantes</Link>
                <Link to={"/Productos/Whisky"} className=" text-white hover:text-black text-lg text-center">Whiskys y Licores</Link>
            </nav>
                <CartWidget/>
            </div>
        </header>
    )
}
export default Navbar 