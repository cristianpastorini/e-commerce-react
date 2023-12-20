import { useState, useEffect } from 'react'
import { pedirDatos } from '../../utils/utils'
import ItemList from '../Itemlist/ItemList'
import { useParams } from 'react-router-dom'

const ItemListContainer = () => {
    
    const [productos, setProductos] = useState([])
    const {categoryId} = useParams()
    useEffect(()=> {
        pedirDatos()
        .then((data) =>{
            const items = categoryId ? data.filter(prod => prod.category === categoryId) : data
            setProductos(items)
        })
    }, [categoryId])

    return (
            <>
            <div>
                <ItemList productos={productos}/>
                </div>
            </>
    )
}
export default ItemListContainer