import Stripe from 'stripe' 
import { NextResponse } from 'next/server'
import { isTemplateMiddle } from 'typescript'
import { db } from '@/app/DB'
import { users } from '@/app/DB/schema'
import { drizzle } from 'drizzle-orm/node-postgres'
import pg from 'pg';
const stripe= new Stripe(process.env.STRIPE_SECRET_KEY as string, {
    apiVersion: "2022-11-15",
  })


export async function POST(req: Request){
  const data:any=  await req.json()
   data.map((item:any)=> (item.product[0].image[0],"Image"))
const params:any= {
submit_type:'pay',
mode: 'payment',
payment_method_types:['card'],
billing_address_collection:'auto',
shipping_options:[

    {shipping_rate:'shr_1NTonTLoSQ7OohXwsxj6fAlz'},
    {
shipping_rate:'shr_1NToruLoSQ7OohXwPwBnD5oj'
    }
],

    line_items: data?.map((item:any)=> {
    const img=item.product[0].image[0].asset._ref;
    const newimage=img.replace('image-','https://cdn.sanity.io/images/xdy7grnc/production/').replace('-png','.png')
   return {


    price_data:{
      currency:'usd',
      product_data:{
        name: item.product[0].name,
        images:[newimage],
      },
      unit_amount: item.product[0].price*100,
    },
    adjustable_quantity:{
enabled: true,
minimum:1,
    },
    quantity:item.qty
   }
    }),
      
      
      success_url: 'http://localhost:3000/Pages/Success',
      cancel_url: 'http://localhost:3000/Pages/Fail',
      }

      const session =await stripe.checkout.sessions.create(params);
      return NextResponse.json(session?.id)
    }


  
    