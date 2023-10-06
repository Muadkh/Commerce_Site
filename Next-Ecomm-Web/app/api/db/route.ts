import { db } from "@/app/DB"
import { order, users } from "@/app/DB/schema"
import { exists, ne } from "drizzle-orm"
import { NextRequest, NextResponse } from "next/server"

export async function POST( req:NextResponse,res:NextResponse){
    const fullName="Adil"
    const phone="03449509625"
    await db.insert(users).values({fullName,phone})

  return NextResponse.json(res)
         
      }
      export async function GET( req:NextRequest,res:NextResponse){
       
      const data= await db.select().from(users)
      return NextResponse.json(data)
             
          }