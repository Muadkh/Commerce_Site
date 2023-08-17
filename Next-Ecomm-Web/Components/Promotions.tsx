import React from 'react'
import Image from 'next/image'

export const Promotions = ({promo}:any) => {
  return (<>
  <div className=' text-blue-800 mt-20 font-bold ml-20 flex items-center justify-center '>
  
  PROMOTIONS
    </div>
    <div className="md:text-4xl sm:2xl mt-4 font-bold ml-20 flex items-center justify-center">

        Our Promotions Events
    </div>
    <div className='ml-20 mt-10 grid md:grid-cols-3 grid-rows-2 gap-x-4 sm:grid-cols-1'>
    <div className='absolute ml-10 font-bold z-10  md:text-4xl sm:2xl'>GET<br/>UP<br/>TO<br/>60% <span className='text-xl text-gray-600 font-medium'> <div>For the<br/>summer<br/>seasons</div></span></div>

    <div className='w-50 h-50 bg-gray-200 relative'><Image className='p-2 ml-16' src={'/promotionc1.png'} alt={'Prmotion Image1'} height={350} width={350}></Image>
    </div>
<div className='row-span-2 mt-4 mb-2 bg-red-100 ml-10 '>
     <p className='ml-10 mt-10 '>Flex Sweatshirt</p>
     <p className='ml-10 mb-8'> <span className='line-through'>$100.00</span> <span className='font-bold'>$75.00</span></p>
    <Image src={'/promotionc2.png'} alt={'Prmotion Image2'} height={350} width={300}></Image>
</div>
    <div className='row-span-2 mt-4 mb-2 bg-gray-200 ml-6'>
<p className='ml-10 mt-10'>Flex Push Button Bomber</p>
<p className='ml-10 mb-8'><span className="line-through">$225.00</span>  <span className='font-bold'>$190.00</span></p>
    <Image src={'/promotionc3.png'} alt={'Prmotion Image2'} height={350} width={300}></Image>

    </div>
    <div className="bg-gray-900 mt-4 text-white items-center text-center flex-col pt-20">
        <h1 className='md:text-4xl sm:2xl font-black'>GET 30% OFF</h1>
        <h2 className='mt-4'>USE PROMO CODE</h2>
        <button className='bg-gray-700 rounded-md  md:font-bold sm:font-medium sm:mb-4 w-60 h-10 text-center items-center'>DINEWEEKENDSALE</button>
        
        </div>
    </div>
  </>



  )
}
