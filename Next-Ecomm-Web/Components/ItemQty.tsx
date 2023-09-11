'use client'

import {
    AiOutlineMinus,
    AiOutlinePlus,
    AiOutlineShoppingCart,
  } from "react-icons/ai";

import { useContext, useState } from "react";
import { useGlobalState } from "@/app/Context/StateContextStore";


export const ItemQty = ({p_id,pid,price}:any) => {

const  {Inc,qty,Dec,Onadd,setQty}=useGlobalState()
     

  return (
    <>

    
    
    <div className=" flex mt-8 ml-2 font-bold lg:text-2xl sm:text-2xl text-gray-800 ">
              <h2 className="">Quantity:</h2>
              <div className="ml-4 file flex items-center justify-center gap-4 ">
                <button type="button" onClick={()=> {Inc()}} className="border-2 rounded-full border-black" >
                  <AiOutlinePlus  size={20} className=""></AiOutlinePlus>
                </button>
                <div>{qty}</div>
                <button type="button" onClick={()=> {Dec()}} className="border-2 rounded-full border-black" >
                  <AiOutlineMinus size={20}></AiOutlineMinus>
                </button>
              </div>
            </div>
          

            <div className=" flex  text-sm mt-4">
              <button   type="button" onClick={()=> {Onadd(p_id,qty,pid,price)}}
              
              style={{ width: "200px", height: "20px" }}
              className=" flex   border-gray-600 bg-black font-bold text-white py-8 items-center border-4 border-double"
              >
                <div className=" gap-4 after flex">
                  <AiOutlineShoppingCart size={20}></AiOutlineShoppingCart>
                  <p>Add to Cart</p>
                </div>
              </button>
            </div>
              
    
    
        
    </>
  )
}
