"use client"
import React from "react";
import Image from "next/image";
import { urlFor } from "@/sanity/lib/image";
import Link from "next/link";
import { useRouter } from "next/router";
export const Fprod = ({ fpro }: any) => {
  return (
    <>
      
        <div className="container ">
          
            <div className=" sm:grid grid-cols-2">

          <Link href={{pathname:`/Pages/Products/${fpro.slug.current}`}} >
            
          {
            
            <Image   
            src={urlFor(fpro.image[0]).url()}
            width={250}
            height={250}
            className=" ml-8 "
            alt="image"
            >
            </Image>
}
          <div className="lg:mt-4 lg:ml-8 lg:font-bold text-gray-800 lg:space-y-1 sm:mt-2 sm:ml-8 ">
            <h1>{fpro.name}</h1>
            <h1 className="text-gray-600">{fpro.type}</h1>
            <p> ${fpro.price}</p>
          </div>
            </Link>
        </div>
              </div>
    
    </>
  );
};
