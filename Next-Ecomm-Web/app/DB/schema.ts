import { date, integer, pgTable, serial, text, timestamp, varchar } from "drizzle-orm/pg-core";
export const users= pgTable('users_details', {
    id: serial('user_id').primaryKey(),
    fullName: text('full_name'),
    phone: varchar('phone', { length: 256 }),
  });
  export const order= pgTable('order_details', {
    id: serial('order_id').primaryKey(),
    productname: text('product_name'),
    producttype: varchar('product_type', { length: 32 }),
    userid:integer('user_id').references(()=> users.id),
    productprice:integer('product_price' ),
    productquantity: integer('product_quantity'),
    orderprice:integer('order_price'),
    data:timestamp('order_date',{mode:'date'}).defaultNow()
  });