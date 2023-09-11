import React from 'react'
import {AiOutlineTwitter} from 'react-icons/ai'
import {FaFacebookF} from 'react-icons/fa'
import {ImLinkedin2} from 'react-icons/im'
export const Footer = () => {
  return (<>
    <footer className=" ml-20 footer p-4  text-base-content ">
  <div>
    <div className="Hero flex flex-wrap items-center space-x-1">< span><div className="text-5xl">S</div></span> <span><div>tyle</div></span> <span><div>Shop</div></span></div>
     <p>Small, artisan label that offers a <br></br>thoughtfully curated collection of high <br></br>quality everyday essentials made.</p>
  
     <div className='mt-10 flex  gap-x-4'>
    <div className='p-2 bg-gray-200 rounded-full' ><AiOutlineTwitter size={20}></AiOutlineTwitter></div>
    <div className='p-2  bg-gray-200 rounded-full'><FaFacebookF size={20}></FaFacebookF></div>
    <div className='p-2  bg-gray-200 rounded-full'><ImLinkedin2 size={20}></ImLinkedin2></div>
       
     </div>
  
  </div>

  <div className=''>
    <span className="footer-title">Company</span> 
    <a className="link link-hover">About</a> 
    <a className="link link-hover">Terms of Use</a> 
  
    <a className="link link-hover">Privacy Policy</a> 
    <a className="link link-hover">How it Works</a>
  </div> 
  <div>
    <span className="footer-title">Support</span> 
    <a className="link link-hover">Support Carrer</a> 
    <a className="link link-hover">24h Service</a> 
    <a className="link link-hover">Quick Chat</a>
  </div> 
  <div>
    <span className="footer-title">Contact</span> 
    <a className="link link-hover">Whatsapp</a> 
    <a className="link link-hover">Support 24h</a> 
  </div> 
  
</footer>
</>
  )
}
