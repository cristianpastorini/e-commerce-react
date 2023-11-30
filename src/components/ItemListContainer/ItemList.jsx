const ItemList = ({producto, children}) => {
    return (
        <li className="mr-6 mt-4 bg-yellow-100 px-8 py-5 rounded-lg">
            {children}
            </li>
    )
}
export default ItemList