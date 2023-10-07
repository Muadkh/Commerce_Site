import React from 'react'

import Image from 'next/image'
export const DesignerJewellery = () => {
  return (
    <>
    <div className='flex justify-between lg:mt-40 sm:mt-10  '>
    
    <div className='ml-60 md:text-4xl sm:2xl font-extrabold  '>
    <h1 className=''>Unique and <br/>Authentic Vintage <br/>Designer <br/>Jewellery</h1>
    </div>
    
    </div>
    
    <h1 className='ml-20 absolute z-10 mt-10 md:text-8xl sm:text-4xl font-extrabold opacity-10'  >Different <br/>From <br/>Others</h1>
  <div className='ml-20 mt-10 grid md:grid-cols-4  sm:gap-x-2 sm:grid-cols-1 sm:text-sm md:text-2xl'>
  <div>
    <h1 className='font-bold'>Using Good <br/>Quality Materials</h1>
    <p>Lorem ipsum dolor <br/>sit amt, consectetur <br/>adipiscing elit.</p>

    <h1 className='font-bold'>Modern Fashion <br/>Design</h1>
    <p>Lorem ipsum dolor <br/>sit amt, consectetur <br/>adipiscing elit.</p>
  </div>
  <div>

  <h1 className='font-bold'>100% Handmade <br/>Products</h1>
    <p>Lorem ipsum dolor <br/>sit amt, consectetur <br/>adipiscing elit.</p>

    <h1 className='font-bold'>Discount for Bulk<br/> Orders</h1>
    <p>Lorem ipsum dolor <br/>sit amt, consectetur <br/>adipiscing elit.</p>

  </div>
  <div>

    <Image src={'/Design.png'} alt="Design Image" height={350} width={350}></Image>
  </div>
  <div className='ml-10'>

    <p>This piece is ethically crafted in our small family-owned workshop in Peru with unmatched attention to detail and care. The Natural color is the actual natural color of the fiber, undyed and 100% traceable.</p>
  <button className=' mt-16 border-double border-4 border-gray-900 bg-black text-sm font-bold p-4 text-white'>See All <br/> Products</button>
  </div>

  </div>




    </>
  )
}
