"use client"
import { Carme, Linden_Hill } from "next/font/google";
import Link from "next/link";
import React,{useState} from "react";
import {GrSearch} from 'react-icons/gr'
import {client} from '../sanity/lib/client'
import Hamburger from 'hamburger-react'
import { useGlobalState } from '@/app/Context/StateContextStore'

// export const getfproducts=async ()=>{
//   const query= '*[_type == "fproducts"][0]'
//   const pro= await client.fetch(query)
//    return  pro

// }

 export const  NavBar= ()=> {

  // const fpro=  await getfproducts()

  const {
    isOpen,setOpen,vis,notvis
  } = useGlobalState();


  

  return (
    <>
           <div className="container m-auto   ">

      <div className={`relative  lg:ml-[60px] nav  sm:hidden flex lg:block items-center m-auto justify-center`}>
        <ul className="flex-shrink ">
          <li>
            <Link className="navbar__link relative" href={'/Pages'}>Female</Link>
          </li>
          <li>
            <Link className="navbar__link relative" href={"/Pages"}>Male</Link>
          </li>
          <li>
            <Link className="navbar__link relative" href={"/"}>Kids</Link>
          </li>
          <li>
            <Link className="navbar__link relative" href={"/"}>All Products</Link>
          </li>
        </ul>
      </div>
           

           </div>
           <div className="containder m-auto">

      <div className="  rounded-8 items-center flex pl-2 lg:visible sm:invisible">
      <div className="z-1 ml-1 absolute">  <GrSearch></GrSearch></div>
      <input className="pl-8 -ml-2"
          
          placeholder="What you looking for"
          style={{ height:'30px',width:'250px'}}
          type="text"
          
          />
    </div>
    </div>
    <div className="absolute">

    <div className="sm:block md:ml-80 sm:ml-40 lg:hidden">
   
    <Hamburger className="" size={24} toggled={isOpen} toggle={setOpen} />
          </div>

    </div>

  
    </>
  );
};

