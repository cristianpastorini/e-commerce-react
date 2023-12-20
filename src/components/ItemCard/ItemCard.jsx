import Boton from "../botones/Boton";
import { Link } from "react-router-dom";
        const ItemCard = ({item}) => {

        return(
        <article key={item.id} className="flex flex-col  w-80   items-between">
        <div className="bg-black box-border h-50 w-50 rounded-xl ">
        <img src={item.img} alt={item.name} className="border-solid border-white h-40 w-40 m-auto rounded-md cover py-2" />
        <h3 className="text-3xl text-sky-900 font-bold underline text-serif text-center px-4">{item.name}</h3>
        <p className="text-white text-justity my-2 ml-4">{item.description}</p>
        <p className="text-sky-700 text-xl font-bold items-end text-end mr-2">Precio: ${item.price}</p>

        <Boton>
            <Link to={`/item/${item.id}`}>Ver mas</Link>
            </Boton>
        </div>
    </article>
    
    );
};
export default ItemCard;