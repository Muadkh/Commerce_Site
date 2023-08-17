"use client"

import React from 'react'
import {Promotions} from './Promotions'
import {Products} from './Products'
import { AiOutlineShoppingCart } from "react-icons/ai"
import Image from 'next/image'
import { DesignerJewellery } from './DesignerJewellery'
import type { ImageLoaderProps } from 'next/image'
import { urlFor } from '@/sanity/lib/image'
import { client } from '@/sanity/lib/client'




export const LoadingPage= ({data}:any) => {


  return (<>


  
    <div className='ml-20 mt-16 grid grid-cols-[28rem,40rem] flex-wrap md:flex-col'>
   
   <div className="first">

   <button style={{ width: "120px", height: "50px",borderRadius:"8px"}} className="p-2 mb-10 border text-center bg-blue-100 font-bold text-blue-800">{data.sale}</button>
   <span >
    <h1 className="text-5xl font-bold">{data.name}</h1>
    </span>
    <span className=""><p className='mb-10 mt-10 text-2xl'>{data.detail}

</p></span>

<span>

<button style={{ width: "200px", height: "100px"}}  className=" flex  px-4 mb-10 flex-wrap space-x-8 border-gray-600 bg-black font-bold text-white py-8 items-center border-4 border-double"> <div><AiOutlineShoppingCart size={20} > </AiOutlineShoppingCart>  </div> <div>{data.shop}</div> </button>
</span>
<span className='flex space-x-4 flex-wrap'>
  <Image src={'/image1.png'} alt={'Loading Page Image'} height={100} width={100}></Image>
  <Image src={'/image2.png'} alt={'Loading Page Image'} height={100} width={100}></Image>
  <Image src={'/image3.png'} alt={'Loading Page Image'} height={100} width={100}></Image>
  <Image src={'/image4.png'} alt={'Loading Page Image'} height={100} width={100}></Image>
</span>
   </div>
   <div className=' flex-shrink'>
    <div className="  w-full ">
  <div className="  rounded-full -mt-14 ">
    {data.image.map((dat:any)=> (<div key={dat.index} className="flex flex-wrap"><Image src={urlFor(dat).url()} width={500} height={500}  className=" ml-20 rounded-full  " alt="image"></Image></div>))}
  </div>
</div>
   </div>
    </div>
  
  </>
  )
}
