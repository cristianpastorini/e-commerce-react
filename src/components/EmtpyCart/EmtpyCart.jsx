import Boton from "../botones/Boton"
import { Link } from "react-router-dom"
const EmtpyCart = () => {
    return(
    <section className="container m-auto mt-8">
            
                
                <h2 className="text-4xl font-semibold">Tu carrito esta vacio</h2>
                <p>Selecciona algun producto</p>
                <Boton>
                    <Link to={"/"}>Volver al listado</Link>
                    </Boton>
                </section>
            
)
}
export default EmtpyCart