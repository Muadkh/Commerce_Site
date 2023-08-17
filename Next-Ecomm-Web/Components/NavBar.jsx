"use client"
import { Carme, Linden_Hill } from "next/font/google";
import Link from "next/link";
import React,{useState} from "react";
import {GrSearch} from 'react-icons/gr'
import {client} from '../sanity/lib/client'
import Hamburger from 'hamburger-react'

// export const getfproducts=async ()=>{
//   const query= '*[_type == "fproducts"][0]'
//   const pro= await client.fetch(query)
//    return  pro

// }

 export const  NavBar= ()=> {

  // const fpro=  await getfproducts()

  const [isOpen, setOpen] = useState(false)


  

  return (
    <>
      <div className=" ml-10 flex nav items-center justify-between md:visible sm:invisible">
        <ul className="">
          <li>
            <Link  href={'/Pages'}>Female</Link>
          </li>
          <li>
            <Link href={"/Pages"}>Male</Link>
          </li>
          <li>
            <Link href={"/"}>Kids</Link>
          </li>
          <li>
            <Link href={"/"}>All Products</Link>
          </li>
        </ul>
      </div>

      <div className="ml-7  border-2 rounded-8 items-center m-auto flex pl-2 md:visible sm:invisible">
      <div className="z-1 ml-1 absolute">  <GrSearch></GrSearch></div>
      <input className="pl-8 -ml-2"
          
          placeholder="What you looking for"
          style={{ height:'30px',width:'250px'}}
          type="text"
          
        />
    </div>
    <div className="md:invisible">

    <Hamburger size={16} toggled={isOpen} toggle={setOpen} />

    </div>
    </>
  );
};

