import { apiVersion, dataset, projectId } from '@/sanity/env'
import {client} from '../sanity/lib/client'
import Image from 'next/image'
// import { urlForImage } from '@/sanity/lib/image'
import {Footer,HeroBanner,NavBar,Cart,NewsLetter,Footer1,LoadingPage, Products, Promotions} from '../Components'
import { DesignerJewellery } from '@/Components/DesignerJewellery'

export const  getData=async()=>{

  const query= '*[_type == "loading"][0]'
  const products= await client.fetch(query)
  
   return  products

  }





export default async function Home() {

    const data=  await getData()
  
 
  // console.log(data)

  return (
    <>
    

   
     <div className=''>
  
<LoadingPage data={data}  ></LoadingPage>
<Promotions  ></Promotions>
  <Products ></Products>
  <DesignerJewellery></DesignerJewellery>


     </div>
     <div className="flex justify-center mt-60"><NewsLetter></NewsLetter></div>
  
    </>
  )
}

