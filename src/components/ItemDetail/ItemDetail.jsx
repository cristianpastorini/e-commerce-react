import Boton from "../botones/Boton"
const ItemDetail = ({item}) => {


    return (
        <div className="flex flex-row justify-center items-center m-8">
            <article key={item.id} className=" bg-black box-border h-auto w-96 rounded-xl  ">
                <div className=" w-20 :md-w60 ">
                    <h3 className="text-3xl text-sky-900 font-bold underline text-serif text-center p-4">{item.name}</h3>
                    </div>
        <div className=" flex gap-8 border-solid border-white  h-50 w-50 rounded-xl ">
            <img src={item.img} alt={item.name} className="h-auto w-auto m-auto rounded-md" />
        </div>
        <div>
            <p className="text-white text-justity my-2 ml-4">{item.description}</p>
        <p className="text-sky-700 text-xl font-bold items-end text-end mr-2">Precio: ${item.price}</p>
        </div>
        <div>
            <Boton className="bg-green-600 text-sky-900">Agregar al carrito</Boton>
        </div>
            </article>
        </div>
    )
}
export default ItemDetail