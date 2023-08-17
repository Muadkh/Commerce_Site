import { type SchemaTypeDefinition } from 'sanity'
import fproducts from './fproducts'
import LoadingPage from './LoadingPage'
import Product from './LoadingPage'
import promotion from './promotion'
export const schema: { types: SchemaTypeDefinition[] } = {
  types: [LoadingPage,fproducts,promotion]
  
}
