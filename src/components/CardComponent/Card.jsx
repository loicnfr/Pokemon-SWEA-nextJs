import { FaHeart } from "react-icons/fa";



const Card = ({name, type, image, gradientFrom, gradientTo}) => {
    return (
       
            <div className={`w-[280px] hover:w-[350px] hover:h-[500px] hover:shadow-orange-100 hover:z-20  rounded-2xl relative p-5 h-[390px] bg-gradient-to-r ${gradientFrom} ${gradientTo} shadow-lg mb-4 mt-20 gap-2 hover:gap-4 hover:scale-105 transition-all duration-300 `}>
                <div className="absolute shadow-lg top-1.5 right-2">
                    <FaHeart className="top-21 right-175" size={30} color={'#FFCB00'}/>
                </div>
            <img className="w-full h-2/3 object-cover" src={image} alt="" />
            <div className="p-4">
                <h2 className="text-xl font-bold">{name}</h2>
                <p className="text-gray-600">{type}</p>
                <button className="mt-4 w-full px-6 py-2 bg-gradient-to-r shadow-md from-red-400 to-pink-500 text-white rounded hover:bg-yellow-600 transition-colors ">Catch</button>
            </div>
            
        </div>
       
    )
}

export default Card;