import Link from "next/link";
import { FaHeart } from "react-icons/fa";

const Navbar = () => {
    return (
        <>
         <div className="h-[60px] bg-white w-full px-[60px] flex p-6 items-center justify-between shadow-md fixed z-50">

            <Link href='/'>
                <img src="./pokemon.png" 
                width="100px" />
            </Link>
            <div className="flex items-center gap-2">
                <FaHeart size={40} color={'#FFCB00'}/>
                <div className="bg-red-500 text-white text-[12px] flex items-center justify-center w-4 h-4 rounded-full relative top-3 right-10">1</div>
                <Link href={"/contact"} 
                className="font-bold">
                    Contact
                </Link>
            </div>

        </div>
        
        </>
       
    )
}

export default Navbar;