"use client";
import { createContext, useContext, useEffect, useState } from "react";
import { toast } from "react-hot-toast";
export const GlobalContext = createContext();
export const GlobalStateContext = ({ children }) => {
  const [cartItems, setCartItems] = useState([""]);
  const [qty, setQty] = useState(1);
  const [showCart, setShowCart] = useState(false);
  const [order, setOrder] = useState(0);
  const [totalPrice, setTotalPrice] = useState(0);
  const [Gprice,setGprice]=useState(0)
  const [isOpen, setOpen] = useState(false)
  const [vis, notvis] = useState(false)
  const amount=[]
  const sum=0


  const Inc = () => {
  
    return setQty((qty) => ++qty);
  };

  const Dec = () => {
    if (qty !== 1) {
  
      return setQty((qty) => --qty);
    } else {

      return setQty(1);
    }

  };
  const Del=(qt,nm,pr)=>{

    const item= cartItems.findIndex((e) => e.product[0].name==nm)
    const newCartItems=cartItems.splice(item,1)
   console.log(cartItems)

  setOrder(order-1)
  setGprice((previous)=>  previous -  pr*qt)
  toast.success(`Item Removed From Your Cart`)
  }

const Incc=(qt,nm,pr,gp)=>{
if(qt>=1){
  const item= cartItems.findIndex((e) => e.product[0].name==nm)  
 cartItems[item].qty= qt+1
 setTotalPrice((previous) => previous + pr * cartItems[item].qty);
 setGprice((previous)=>  previous + pr*1)
 toast.success(`Quantity Updated In Your Cart Item`)
}
else {

  toast.success("Quantity Has Reached to Its Max Limit")
}
}
const Decc=(qt,nm,pr)=>{
 if(qt>1){
  const item= cartItems.findIndex((e) => e.product[0].name==nm)  
  
  cartItems[item].qty= qt-1
  setTotalPrice((previous) => previous - pr * cartItems[item].qty);
  setGprice((previous)=> previous- pr*1)
  toast.success(`Quantity Updated In Your Cart Item`)
   }
   else {

    toast.success("Quantity Has Reached to Its Lower Limit")
   }
}




  const Onadd = (p_id, pqty, pid, price) => {

    if (cartItems[0] === "") {
      cartItems.shift();
      setCartItems((cartItems) => [...cartItems, { product: p_id, qty: pqty }]);
      setOrder((order) => ++order);
      setTotalPrice((previous) => previous + price * qty);
      toast.success("Successfully Added To Cart Items");

      setGprice((previous)=> previous+ price*qty)
    } 
    else if (cartItems.findIndex((e) => e.product[0].name === pid) == -1) {
      setCartItems((cartItems) => [...cartItems, { product: p_id, qty: qty }]);
      setOrder((order) => ++order);
      setTotalPrice((previous) => previous + price * qty);
      toast.success("Successfully Added To Cart Items");
      setGprice((previous)=> previous+ price*qty)
    } 
    else {
         if(cartItems[cartItems.findIndex((e) => e.product[0].name)].qty== pqty) {
        toast.success(`Product is Already In Your Cart Items`);
      } else 
      {
        const item= cartItems.findIndex((e) => e.product[0].name==pid)  
        const prev=cartItems[item].qty
        cartItems[item].qty=pqty
        if (prev>pqty){
        setTotalPrice((previous) => previous - price * qty);
        setGprice((previous)=> previous - price*(prev-qty))
        //const amount= cartItems.map((item)=> item.product[0].price *item.qty );
        
        toast.success(`Quantity Updated In Your Cart Item`);
        } else {
        setTotalPrice((previous) => previous + price *qty);
        setGprice((previous)=> previous + price*(qty-prev))
        toast.success(`Quantity Updated In Your Cart Item`)
        }
      
      }
    }
  };

  return (
    <GlobalContext.Provider
      value={{
        Inc,
        qty,
        Dec,
        Onadd,
        cartItems,
        order,
        showCart,
        setShowCart,
        totalPrice,
        setQty,
        Gprice,
        Del,Incc,Decc,setCartItems,setGprice,setOrder,setTotalPrice,isOpen,setOpen,vis,notvis

      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
export const useGlobalState = () => useContext(GlobalContext);
