import {drizzle} from 'drizzle-orm/node-postgres'
import pg from 'pg';
import * as schema from '../DB/schema'
const { Pool } = pg;

const pool = new Pool({
  connectionString: process.env.POSTGRES_URL +"?sslmode=require",
})

pool.connect()

export const db =drizzle(pool)

