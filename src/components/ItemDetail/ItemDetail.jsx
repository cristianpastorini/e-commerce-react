import { useContext, useState } from "react"
import Boton from "../botones/Boton"
import QuantilySelector from "../QuantilySelector/QuantilySelector"
import { Link, useNavigate } from "react-router-dom"
import { CartContext } from "../../Context/CartContext"

const ItemDetail = ({item}) => {
    
    const [cantidad, setCantidad] = useState (1)
    
    const navigate = useNavigate()

    const {addToCart, isInCart} = useContext(CartContext)
    
    const handlerVolver = () => {
        navigate(-1)
    }
    const handleAgregar = () => {
        const itemToCart = {
            ...item,
            cantidad,
        }
        addToCart(itemToCart)
    }

    return (
        <div className="flex flex-col justify-center items-center m-8">
            <article key={item.id} className=" bg-black box-border rounded-xl min-h-[550px] max-w-[400px] ">
                <div className=" w-20 :md-w60 ">
                    <h3 className="text-3xl text-sky-700 font-bold underline text-serif text-center p-4">{item.name}</h3>
                    </div>
        <div className=" flex gap-8 border-solid border-white  h-50 w-50 rounded-xl ">
            <img src={item.img} alt={item.name} className="h-auto w-auto m-auto rounded-md" />
        </div>
        <div>
            <p className="text-white text-justity my-2 ml-4">{item.description}</p>
        <p className="text-sky-700 text-xl font-bold items-end text-end mr-2">Precio: ${item.price}</p>
        </div>
        {
            isInCart (item.id)
                ? <Boton><Link to="/cart"> Ir al carrito</Link></Boton>
                : <>
                <QuantilySelector cantidad={cantidad} stock={item.stock} setCantidad={setCantidad}/>
            <div>
                <Boton onClick={handleAgregar} disable={item.stock === 0} className="bg-green-600 text-sky-900">Agregar al carrito </Boton>
                </div>
            </>
                
            
        }
            </article>
            <Boton onClick={handlerVolver}>Volver atrás</Boton>
        </div>
    )
}
export default ItemDetail