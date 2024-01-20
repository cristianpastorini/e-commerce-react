import ItemCard from '../ItemCard/ItemCard.jsx'

const ItemList = ({Productos}) => {
    return (
        <section className="bg-white m-12">
            <h2 className="text-sky-700 text-4xl font-bold text-center underline font-serif">Productos :</h2>
            <div className="flex flex-wrap justify-evenly gap-10 items-center mx-5 m-10" >
            {Productos.map((item) => <ItemCard key={item.id} item={item}/>)}
            </div>
        </section>
    );
};
export default ItemList