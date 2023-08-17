import React from 'react'

export const NewsLetter = () => {
  return (
    <>

    <h1 className='absolute z-10 mt-30 md:text-8xl  sm:text-2xl font-black opacity-10 sm:mx-auto'>Newsletter</h1>
    <div className='mt-30'>

    <span className=" md:text-3xl sm:text-xl font-bold text-gray-900 mb-16">
Subscribe Our Newsletter</span> 
    <div className="mb-16">
      <label className="label">
        <span className="label-text">Get the latest information and promo offers directly</span>
      </label> 
      <div className="relative">
        <input type="text" placeholder="Input Email Address" className="input input-bordered w-full pr-16" /> 
        <button className="btn btn-primary absolute top-0 right-0 rounded-l-none">Subscribe</button>
      </div>
    </div>
  </div>

</>

  )
}
