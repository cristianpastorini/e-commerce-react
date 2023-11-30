const NavLink = ({href, text}) => {
    return(
        <a className="text-white hover:text-black text-lg" href={href}>
            {text}
            </a>
        )
}
export default NavLink