
import { BsCartDash } from "react-icons/bs";
import { Link } from "react-router-dom";
import { CartContext } from "../../Context/CartContext";
import {useContext} from "react"

const CartWidget = () => {
    const {itemsInCart} = useContext(CartContext)
    return (
        <Link to="/cart" className={`${itemsInCart() === 0 ? "invisible" : "visible" } flex flex-row gap-1 justify-end text-white hover:text-green-600 mr-2`}>
                <BsCartDash className="w-8 h-8 "/>
            <span className="text-2xl"> {itemsInCart()} </span>
        </Link>
    )
}
export default CartWidget