import { FaRegCopyright } from "react-icons/fa";


const Footer = () => {
    return (
        <div>
            <footer >
                <div className="h-[70px] bg-white w-full px-[60px] flex items-center justify-between">
                <img src="./pokemonball.png" width="40px" />
                <FaRegCopyright  size={30}/>
                </div>
                
            </footer>
            
        </div>
    )
}

export default Footer;