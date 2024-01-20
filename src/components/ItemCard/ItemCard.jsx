import Boton from "../botones/Boton";
import { Link } from "react-router-dom";
        const ItemCard = ({item}) => {

        return(
        <article key={item.id} className="flex flex-col items-center ">
            <div className="bg-black box-border rounded-xl min-h-[550px] max-w-[400px] flex flex-col justify-evenly">
                <img src={item.img} alt={item.name} className="border-solid border-white h-52 w-52 m-auto rounded-md " />
                <h3 className="text-3xl text-sky-700 font-bold underline text-serif text-center px-4">{item.name}</h3>
                { <p className="flex flex-wrap text-white text-center  m-2">{item.description}</p>}
                {item.stock <= 10 && <p className="font-bold text-green-600 ml-2">Quedan sólo {item.stock} unidades!</p>}
                <p className="text-sky-700 text-xl font-bold items-end text-end mr-2">Precio: ${item.price}</p>

                <Boton>
                    <Link to={`/item/${item.id}`}>Ver mas</Link>
                </Boton>
            </div>
        </article>
    
    );
};
export default ItemCard;