import { useContext, useState } from "react"
import { CartContext } from "../../Context/CartContext"
import { db } from "../../firebase/config"
import {collection, addDoc} from "firebase/firestore"
const Checkout = () =>{
    const {cart, totalCart, clearCart} = useContext(CartContext)

    const [values, setValues] = useState({
        nombre:"",
        direccion:"",
        email:""
    })
    const [orderId, setOrderId] = useState(null)
    const handleInputChange = (e) =>{
        setValues ({
            ...values,
            [e.target.name]: e.target.value
        })
    }
    const handleSubmit = (e) => {
        e.preventDefault()

        const orden ={
            cliente: values,
            items: cart,
            total: totalCart(),
            fecha: new Date()
        }

        

        const ordersRef = collection(db, 'orders')
        addDoc(ordersRef,orden).then(doc => {setOrderId(doc.id)
            clearCart()
        })
        
    }
    if (orderId) {
        return(
        <div>
            <h2 className="text-blue-600 text-4xl font-bold">Gracias por tu compra!</h2>
            <p className="text-blue-600 text-xl font-semibold">Tu codigo de orden es: {orderId}</p>
        </div>
        )
    }
    return (
        <div className="container m-auto mt-8"> 
            <h2 className="text-4xl text-blue-600 font-semibold">Ingresa tus datos:</h2>

            <form onSubmit={handleSubmit} className="flex flex-col gap-4 max-w-md mt-4">
                <input className="border p-2" type="text" placeholder="Nombre" onChange={handleInputChange} value={values.nombre} name="nombre"/>
                <input className="border p-2" type="text" placeholder="Direcion" onChange={handleInputChange} value={values.direccion} name="direccion"/>
                <input className="border p-2" type="email"  placeholder="Emai" onChange={handleInputChange}  value={values.email} name="email"/>
                <button type="submit" className="bg-blue-500  text-white py-2">Enviar</button>
            </form>
        </div>
    )
}
export default Checkout;