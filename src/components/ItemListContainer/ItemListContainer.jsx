import { useEffect, useState } from "react"
import ItemList from '../Itemlist/ItemList'
import { useParams } from 'react-router-dom'
import { collection, getDocs, query, where } from 'firebase/firestore'
import { db } from '../../firebase/config'

const ItemListContainer = () => {
    
    const [productos, setProductos] = useState([])
    
    const {categoryId} = useParams()
    useEffect(()=> {
        const productosRef = collection(db, 'Productos')
        const referencia = categoryId
        ? query(productosRef, where('category', '==', categoryId))         
        : productosRef
        getDocs (referencia)
        .then((querySnapshot) =>{
            const docs= querySnapshot.docs.map(doc => {
                return{
                    ...doc.data(),
                    id: doc.id
                }
            })
    console.log(docs)
            setProductos(docs)
})

}, [categoryId]);



    return (
            <>
            <div>
                <ItemList Productos={productos}/>
                </div>
            </>
    )
}
export default ItemListContainer