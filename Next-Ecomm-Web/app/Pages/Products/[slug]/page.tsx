"use client"
import Link from "next/link";
import React, { useContext, useEffect} from "react";
import Image from "next/image";
import { useState } from "react";
import {
  AiOutlineMinus,
  AiOutlinePlus,
  AiOutlineShoppingCart,
} from "react-icons/ai";
import { client } from "@/sanity/lib/client";

import { urlFor } from "@/sanity/lib/image";
import { ItemQty } from "@/Components/ItemQty";
import { GlobalStateContext } from "@/app/Context/StateContextStore";
async function getfproduct(sl: any) {
  const query = `*[_type == "fproducts" && slug.current =='${sl}']{

name,detail,type,image,care,price,_id

  }`;
  const pro = await client.fetch(query,{cache: "no-store"});
  return pro;

}



export default async function ProductDetails( {params}:{params:{slug:string}}) {

  const [index,setIndex]=useState(0);

  const sl =params.slug;
  const pro = await getfproduct(sl)
  const { price, image, care, detail, name, type } = pro[0];
  return (
    <div>
      <div className="grid grid-cols-3 ml-20 border-2 grid-col-gap p-0 ">
        <div className="m-auto   mt-4 border-2">
          {image.map((dat: any) => (
            <div key={dat._id} className="border-2  m-2">
              <Image
                src={urlFor(dat).url()}
                alt={"Loading Page Image"}
                height={100}
                width={100}
              ></Image>
        
            </div>
          ))}
        </div>
        <div className="mt-4">
          <div className="">
            {
              <Image
                src={urlFor(image[index]).url()}
                alt={"Loading Page Image"}
                height={600}
                width={400}
              >
                {}
              </Image>
            }
          </div>
        </div>

        <div>
          {}
          <div className="mt-4 ml-4 font-bold text-4xl text-gray-800 ">
            <h1>{name}</h1>
            <p className="font-bold text-2xl text-gray-400 mt-4">{type}</p>
            <h1 className="font-bold text-2xl text-gray-800 mt-8">
              Select Size
            </h1>
            <div className="flex gap-4 font-bold text-xl text-gray-500 ">
              <p>SM</p>
              <p>MD</p>
              <p>LG</p>
              <p>XL</p>
            </div>
     
  



          <ItemQty p_id={pro} pid={name} price={price}></ItemQty>
    
    

     
                 
           

            <p className="mt-8 text-4xl">${price}</p>
          </div>
        </div>
      </div>

      <div className="info b-20 ml-40 mt-20 border-2">
        <div className=" text-4xl">
          <h1>Product Information</h1>
        </div>
        <hr className=" line border-1 w-full border-black mt-20 mb-10 " />
        <div className="grig grid col-2 border-2">
          <div className="grid   border-2 grid-cols-[20rem,40rem] ">
            <div className="text-4xl">
              <h1>Product Details</h1>
            </div>
            <div className="text-2xl ml-4">
              <p>{detail}</p>
            </div>
          </div>
          <div className="grid   border-2 grid-cols-[20rem,40rem] ">
            <div className="text-4xl">
              <h1>Product Care</h1>
            </div>
            <div className="text-2xl ml-4 font-sm">
              {care.map((block: any) => (
               block.children.map((child: any) => (<div key={index}><li>{child.text}</li></div>)) )
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
