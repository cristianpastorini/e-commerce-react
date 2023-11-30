import NavLink from './NavLink'
import CardWidget from '../CardWidget/CardWidget'

const Navbar = () => {
    return (
        <header className="bg-green-800">
            <div className="container p-6 flex flex-col md:flex-row  justify-between items-center">
                <h1 className="text-yellow-200 ">Logo</h1>
            <nav className="flex gap-4 ">
                <NavLink href={"#"} text={"Inicio"}/>
                <NavLink href={"#"} text={"Productos"}/>
                <NavLink href={"#"} text={"Quienes somos"}/>
            </nav>
                <CardWidget/>
            </div>
        </header>
    )
}
export default Navbar 