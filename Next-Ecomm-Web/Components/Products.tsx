

import React from "react";
import Image from "next/image";
import { client } from "@/sanity/lib/client";



// export const getfproducts=async ()=>{
//   const query= '*[_type == "fproducts"]'
//   const pro= await client.fetch(query)
//    return  pro

// }





  
// console.log(fpros)






export const Products = ()=>{
  // const fpros=  await getfproducts()
  return (
    <>
      <div>
        <div className=" text-blue-800 mt-20 font-bold ml-10 flex items-center justify-center">
          PRPDUCTS
        </div>
        <div className="md:text-4xl  sm:text-2xl mt-4 font-bold ml-20 flex items-center justify-center">
          Check What We Have
        </div>

        <div className="ml-20 mt-10 grid md:grid-cols-3 sm:grid-cols-1 gap-0 ">
          <div>
            <div className="hover:scale-110 duration-300 delay-200  z-0">
              <Image
                className=" md:ml-8 sm:ml-4 "
                src={"/public/products1.png"}
                alt={"Prmotion Image1"}
                height={350}
                width={450}
              ></Image>
              <div className="mt-4 ml-8 font-bold text-gray-800 ">
                <h1>Brushed Raglan Sweatshirt</h1>
                <p>$545</p>
              </div>
            </div>
          </div>
          <div className="hover:scale-110 duration-300 delay-200  z-10">
            <div>
              <Image
                className=""
                src={"/public/LoadinPageImage.png"}
                alt={"Lproducts Image"}
                height={350}
                width={450}
              ></Image>
              <div className="ml-0 mt-4 font-bold text-gray-800 ">
                <h1>Cameryn Sash Tie Dress</h1>
                <p>$195</p>
              </div>
            </div>
          </div>
          <div className="hover:scale-110 duration-300 delay-200  z-20">
            <Image
              className=""
              src={"/public/products3.png"}
              alt={"Prmotion Image2"}
              height={350}
              width={450}
            ></Image>

            <div className="mt-4 ml-0 font-bold text-gray-800 ">
              <h1>Flex Sweatshirt</h1>
              <p>$175</p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
