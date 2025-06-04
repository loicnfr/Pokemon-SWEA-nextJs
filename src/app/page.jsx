'use client';
import Link from "next/link";
import { useState } from "react";
import { FaRegHeart } from "react-icons/fa";
import Navbar from "@/components/NavBarComponent/NavBar";
import Footer from "@/components/FooterComponent/Footer";
import Card from "@/components/CardComponent/Card";
import contact from "@/app/contact/page";
import page from '@/app/contact/page';
import data, { Pokemons } from '@/utils/data'
import { ToastContainer, toast } from 'react-toastify';

export default function Home() {

  const notify = () => toast("Wow so easy!");
 

  return (
    <>

    <div className="grid justify-center grid-cols-5  items-center gap-3 flex-wrap">

      {Pokemons.map((item) => (
      <Card
        key={item.id}
        gradientFrom="from-pink-400"
        gradientTo="to-red-500"
        name="pikachu"
        type="Electric Type"
        image={item.image}
      />
      ))
      }

      
      <div className="bg-amber-300">
           <button className="w-1 h-1" onClick={()=>notify()}>Notify!</button>
           <ToastContainer />
      </div>
    

      

    </div>
    
    <Footer/>
    </>

  );
}
