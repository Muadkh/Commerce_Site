"use client";

import { useGlobalState } from "@/app/Context/StateContextStore";
import { fireRun } from "@/sanity/lib/utils";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import { BsBagCheckFill } from "react-icons/bs";
const Success = () => {
  const {
    Incc,
    qty,
    Decc,
    Onadd,
    cartItems,
    showCart,
    setShowCart,
    order,
    totalPrice,
    Gprice,
    Del,setCartItems,setGprice,setOrder,setTotalPrice
  } = useGlobalState();


   useEffect(()=>{

     localStorage.clear()
     setCartItems([])
     setGprice(0)
     setOrder(0)
     setTotalPrice(0)
     fireRun()

   },[])
  return ( 
    
    <>
      <div className="success flex-col text-center items-center justify-between  ">
        <div className="icon items-center justify-center flex p-8 mt-8 gap-x-10 ">
          
          <BsBagCheckFill fill="green" size={40} />
          </div>
      

        <h2 className="font-bold text-3xl p-8">Thank You For Your Order</h2>
        <p className="text-xl ">Check Your E-mail For The Receive</p>
        <p className="text-xl ">
          If You Have Any Questions, Please E-mail
        <span></span>  <a href="mailto:order@exemple.com" className="text-blue-600 font-bold hover:underline ">order@exemple.com</a>
        </p>
        <div className="mt-16">
          <Link href={'/'}>
          <button
            type="button"
            className={` py-3 px-4  w-48 inline-flex justify-center items-center gap-2 rounded-md border border-transparent font-semibold bg-red-500 text-white hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 transition-all text-sm dark:focus:ring-offset-gray-800`}
            >
            Continue Shopping
          </button>
            </Link>
        </div>
      </div>
  
              </>
  );
};

export default Success;
