import { useContext } from "react"
import { CartContext } from "../../Context/CartContext"
import Boton from "../botones/Boton"
import trashIcon from '../../assets/trash.svg'
import EmtpyCart from "../EmtpyCart/EmtpyCart"
import { Link } from 'react-router-dom' 
const CartView = () => {
    const {cart, totalCart, clearCart, removeItem} = useContext(CartContext)
    if (cart.length === 0 ) return <EmtpyCart/>
    return (
        <section className="container m-auto mt-8">
            
                <h2 className="text-4xl font-semibold">Tu compra</h2>
            <ul>
            { cart.map((item) => (
                <li key={item.id} className="flex gap-3 border-b my-4">
                    <img src={item.img} alt="Cart img" className="w-36" />
                    <div>
                        <h3 className="text-2xl">{item.name}</h3>
                        <p className="text-2xl font-bold">${item.price * item.cantidad}</p>
                        <p>Cantidad: {item.cantidad}</p>
                        <Boton onClick={() => removeItem(item.id)}>
                            <img src={trashIcon} className="w-8" alt="trash icon" />
                        </Boton>
                        
                    </div>
                </li>

            ))
            }
    </ul>
    <h4 className="text-4xl font-semibold underline my- 2">Total a pagar: ${totalCart()}</h4>
    <Boton onClick={clearCart}>Vaciar Carrito</Boton>
    <Boton><Link to="/Checkout">Terminar mi compra</Link></Boton>
            
        </section>
    )
}
        
export default CartView