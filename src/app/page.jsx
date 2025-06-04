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


export default function Home() {

  return (
    <>

    <div className="grid bg-gradient-to-r from-gray-400 to-red-300 justify-center grid-cols-5 pl-3  items-center gap-3 flex-wrap">

      {Pokemons.map((item) => (
      <Card
        key={item.id}
        gradientFrom="from-pink-400"
        gradientTo="to-red-500"
        name={item.name}
        type={item.type}
        image={item.image}
      />
      ))
      }

    </div>
    
    <Footer/>
    </>

  );
}
