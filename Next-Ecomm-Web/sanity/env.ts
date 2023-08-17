import { Console } from "console"

export const apiVersion =
  process.env.NEXT_PUBLIC_SANITY_API_VERSION 

export const dataset = 
  process.env.NEXT_PUBLIC_SANITY_DATASET
//   'Missing environment variable: NEXT_PUBLIC_SANITY_DATASET'
// )

export const projectId = 
  process.env.NEXT_PUBLIC_SANITY_PROJECT_ID
//   'Missing environment variable: NEXT_PUBLIC_SANITY_PROJECT_ID'
// )

export const useCdn = false
export const token=process.env.NEXT_PUBLIC_SANITY_TOKEN


function assertValue<T>(v: T | undefined, errorMessage: string): T {
  if (v === undefined) {
    console.log(apiVersion)
    throw new Error(errorMessage)
  }

  return v
}
