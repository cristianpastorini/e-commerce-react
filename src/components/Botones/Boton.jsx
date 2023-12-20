const Boton = ({children, className = "", onClick}) => {
    return(
        
    <button 
        onClick= {onClick}
        className={` bg-blue-800 rounded flex justify-center py-2 px-4  text-center text-white hover:text-black font-semibold m-auto my-1 ${className}`}>
            {children}
    </button>
    ) 
    }

    export default Boton;