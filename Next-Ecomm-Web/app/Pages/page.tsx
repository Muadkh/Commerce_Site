import React from "react";
import Image from "next/image";
import { client } from "@/sanity/lib/client";
import {Fprod}  from "../../Components/Fprod";
import { fromJSON } from "postcss";


const getfproducts=async ()=>{
  const query= '*[_type == "fproducts"]'
  const pro= await client.fetch(query, {
    mode: 'cors',
    credentials: 'include'
  })
   return  pro

}



 async function page() {

  
    const fpros=  await getfproducts()
    // console.log(fpros)
  
  return (
    <>
      <div className="ml-10 mt-20">
        <div className="grid  grid-cols-[repeat(4,auto)] gap-y-16">
{
  fpros.map((fpro:any)=> (<Fprod key={fpro._id} fpro={fpro} />))
  
  
  
}
  </div>
        </div>
  
    </>
  );
}
export default page