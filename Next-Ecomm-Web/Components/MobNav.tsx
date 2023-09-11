import { useGlobalState } from '@/app/Context/StateContextStore';
import Link from 'next/link'
import React from 'react'

const MobNav = () => {


    const {
        isOpen,setOpen
      } = useGlobalState();
    
  return (
    <div>

<div className={` sm:mt-20  ml-20 justify-center items-center ${isOpen ? 'block': 'hidden'} bg-white text-black from-neutral-focus  overflow-x-hidden min-w-full min-h-screen relative `}>


<ul className="flex-shrink ">
     <li> <button type='button' >

       <Link onClick={()=> setOpen(false)}  className="navbar__link relative" href={'/Pages'}>Female</Link>
     </button>
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
  )
}

export default MobNav