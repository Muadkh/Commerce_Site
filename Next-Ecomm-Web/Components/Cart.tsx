
"use client"
import { useGlobalState } from '@/app/Context/StateContextStore'
import Link from 'next/link'
import React, { useContext, useEffect } from 'react'
import { AiOutlineShoppingCart,AiOutlineMinus,AiOutlinePlus,AiOutlineLeft } from "react-icons/ai"
import {TiDeleteOutline} from 'react-icons/ti'
import { Toast } from 'react-toastify/dist/types'

export const Cart = () => {

  const  {qty,cartItems,order,showCart,setShowCart}=useGlobalState()
  
return (

<>


<Link href={"/Pages/Cart"}>
  <button type='button' onClick={setShowCart(true)}>

    <div className=' flex bg-gray-200 rounded-full h-14 w-14 p-1  ' >
      
<div className=' flex rounded-full items-center pl-2'>
<AiOutlineShoppingCart  size={16}/>

</div>

<p className=" text-xs p-0 text-white flex rounded-xl items-center  justify-center w-4 h-4 bg-red-600 ">{order}</p>



    </div>
</button>
 </Link>  




</>


)





}