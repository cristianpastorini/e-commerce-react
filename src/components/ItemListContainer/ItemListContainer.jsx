import React from 'react'
import ItemList from './ItemList'

const ItemListContainer = () => {
    return (
    <div className="bg-yellow-200 m-0 p-0 min-h-screen">
        <section className="min-h-screen py-8 px-8">
            <h2 className="bg-green-600 text-center">Productos</h2>
            <ul className="flex flex-wrap justify-around">
                <ItemList>Producto 1</ItemList>
                <ItemList>Producto 2</ItemList>
                <ItemList>Producto 3</ItemList>
                <ItemList>Producto 4</ItemList>
                <ItemList>Producto 5</ItemList>
                <ItemList>Producto 6</ItemList>
                <ItemList>Producto 7</ItemList>
            </ul>
        </section>
    </div>
    );
};
export default ItemListContainer;