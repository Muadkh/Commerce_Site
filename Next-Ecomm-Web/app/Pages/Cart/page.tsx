"use client";
import Link from "next/link";
import {
  AiOutlineShoppingCart,
  AiOutlineMinus,
  AiOutlinePlus,
  AiOutlineLeft,
  AiOutlineShopping,
  AiOutlineDelete,
} from "react-icons/ai";
import Image from "next/image";
import { TiDeleteOutline } from "react-icons/ti";
import { Toast } from "react-toastify/dist/types";
import { urlFor } from "@/sanity/lib/image";
import { client } from "@/sanity/lib/client";
import { useGlobalState } from "@/app/Context/StateContextStore";
import getStripe from "@/sanity/lib/GetStripe";
import { loadStaticPaths } from "next/dist/server/dev/static-paths-worker";
import { toast } from "react-toastify";
import { Index } from "drizzle-orm/pg-core";
import InternalCartShop from "@/Components/InternalCartShop";

const CartShop = () => {
  const {
    Inc,
    qty,
    Dec,
    Onadd,
    cartItems,
    showCart,
    setShowCart,
    totalPrice,
    Gprice,
  } = useGlobalState();

  return (
    <>
      <InternalCartShop />
    </>
  );
};

export default CartShop;
