import Link from 'next/link'
import React from 'react'
import { BsBagCheckFill } from 'react-icons/bs'

const Fail = () => {
  return (
    <>
    <div>
        <div className="success flex-col text-center items-center justify-between  ">
        <div className="icon items-center justify-center flex p-8 mt-8 gap-x-10 ">
          
          <BsBagCheckFill fill="Red" size={40} />
          </div>
      

        <h2 className="font-bold text-3xl p-8">Transaction Failure</h2>
        <p className="text-xl ">Something Went Wrong</p>
        <p className="text-xl ">
          If You Have Any Questions, Please E-mail
        <span></span>  <a href="mailto:order@exemple.com" className="text-blue-600 font-bold hover:underline ">order@exemple.com</a>
        </p>
        <div className="mt-16">
          <Link href={'/'}>
          <button
            type="button"
            className={` py-3 px-4  w-48 inline-flex justify-center items-center gap-2 rounded-md border border-transparent font-semibold bg-red-500 text-white hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 transition-all text-sm dark:focus:ring-offset-gray-800`}
            >
            Continue Shopping
          </button>
            </Link>
        </div>
      </div>
    </div>
              </>
  )
}

export default Fail