'use client';
import Link from "next/link";
import { useState } from "react";
import { FaRegHeart } from "react-icons/fa";
import Navbar from "@/components/NavBarComponent/NavBar";
import Footer from "@/components/FooterComponent/Footer";

export default function Home() {
  // States
  const [isClicked, setIsClicked] = useState(false);
  const [counter,  setCounter] = useState(0)
  const [textEntered, setTextEntered] = useState('')

  // increment count with useState
  const increment = () => {
    setCounter(counter + 1);
  }

  // decrement count with useState
  const decrement = () => {
    // ternary operator
    setCounter(counter == 0 ? counter : counter - 1);
  }

  return (
    <>
    {/* <Navbar/> */}
    <div className="bg-amber-600 h-fit flex items-center justify-center flex-col">
      <img 
      className="h-50 w-50 mb-3 mt-3" 
      src="./netflix.jpg" alt="" />

      <FaRegHeart className="mb-2"
        size={50}
        onClick={() => setIsClicked(!isClicked)} color={isClicked ? "red": "white"}
        />
      <form>
        <input 
        type="text" 
        value={textEntered}
        placeholder="Enter your message"
        className="px-4 py-3 bg-white text-black rounded mb-2 "
        onChange={(e) => setTextEntered(e.target.value)}
        />
      </form>

      <h1 className="mb-2 text-amber-50 font-bold">Text entered: {textEntered}</h1>

        <h1 className="bg-amber-100 mb-6 font-bold px-11 py-18 rounded-full text-white text-7xl">{counter}</h1>
     
    <div className="flex gap-5 mb-10 ">
      <button 
      onClick={decrement} 
      className=" bg-green-600 px-13 py-4">
         - 
         </button>

      <button onClick={increment}
      className=" bg-red-700 px-13 py-4">
         + 
         </button>

    </div>

    <button 
    onClick={() => setCounter(0)} 
    className=" bg-green-300 mb-2 rounded px-24.5 py-4">
      Reset
      </button>

      <Link href={"/contact"} 
      className="bg-violet-700 mb-4 text-[20px] rounded px-20 py-4">
        Click me
        </Link>

        
      
    </div>
    <Footer/>
    </>

  );
}
