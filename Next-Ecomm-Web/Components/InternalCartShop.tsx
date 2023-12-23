import React from "react";
import { useGlobalState } from "@/app/Context/StateContextStore";
import getStripe from "@/sanity/lib/GetStripe";
import { urlFor } from "@/sanity/lib/image";
import Link from "next/link";
import Image from "next/image";
import toast from "react-hot-toast";
import { AiOutlineDelete, AiOutlineMinus, AiOutlinePlus, AiOutlineShopping } from "react-icons/ai";

const InternalCartShop = () => {
  const {
    Incc,
    qty,
    Decc,
    Onadd,
    cartItems,
    showCart,
    setShowCart,
    order,
    totalPrice,
    Gprice,
    Del,
  } = useGlobalState();

  const handlecheckout = async () => {
    const stripe = await getStripe();

    const responce = await fetch(
      "/api/stripe",

      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(cartItems),
      }
    );
    if (responce.status === 500) return console.log(responce.statusText);
    const data = await responce.json();
    toast.success("Redirecting...");
    stripe?.redirectToCheckout({ sessionId: data });
  };

  return (
    <>
      <div className="flex lg:ml-60 lg:mt-20 sm:ml-24 sm:mt-10 flex-shrink">
        <div className="">
          {order >= 1 ? (
            <div className="mt-8 ">
              {cartItems.map((item: any) => (
                <div
                  key={item}
                  className="flex font-bold mt-8 text-center items-centre lg:gap-x-14 sm:gap-x-4 flex-shrink"
                > 
                 <Image src={urlFor(item.product[0].image[0]).url()} alt={"Loading Page Image"} height={100}  width={100}></Image>
                 
                   
                  <div className=" mt-10">
                    {
                      <>
                        <div className="flex lg:gap-x-8 sm:gap-x-4">
                          <button
                            onClick={() =>
                              Incc(
                                item.qty,
                                item.product[0].name,
                                item.product[0].price,
                                Gprice
                              )
                            }
                            type="button"
                            className="border-2 p-1 rounded-full border-black"
                          >
                            <AiOutlinePlus
                              size={14}
                              className=""
                            ></AiOutlinePlus>
                          </button>

                          <button
                            type="button"
                            onClick={() =>
                              Del(
                                item.qty,
                                item.product[0].name,
                                item.product[0].price
                              )
                            }
                            className="border-2 p-1 rounded-full border-black"
                          >
                            <div>
                              <AiOutlineDelete
                                size={14}
                                fill={"red"}
                              ></AiOutlineDelete>
                            </div>
                          </button>
                          <button
                            onClick={() =>
                              Decc(
                                item.qty,
                                item.product[0].name,
                                item.product[0].price
                              )
                            }
                            className="border-2 p-1 rounded-full border-black "
                          >
                            <AiOutlineMinus size={14}></AiOutlineMinus>
                          </button>
                        </div>
                      </>
                    }
                  </div>
                  <div className=" text-center felx ml-10 p-0 w-40">
                    {item.product[0].type}

                    <div className="mt-8"> ${item.product[0].price}</div>
                    <div className="mt-4"> {item.qty}</div>
                  </div>

                  <div className=" felx ml-20  p-0 w-40">
                    ${item.product[0].price * item.qty}
                  </div>
                </div>
              ))}

              <div className="flex mt-20 h-12 text-center items-center gap-x-20 justify-end font-bold ">
                <div className=" text-centre ml-60">Total Amount:</div>
                <div className=" mr-16">$ {Gprice}</div>
              </div>
            </div>
          ) : (
            <div className="  flex items-center justify-center  lg:ml-40 sm:ml-16">
              <div className="  flex items-center  justify-centre">
                <div className="">
                  <AiOutlineShopping fill="blue" size={60}></AiOutlineShopping>
                </div>
                <div className="mt-4 ml-6">
                  <h3 className="text-orange-600 file:font-bold text-2xl">
                    Your Shopping Bag is Empty
                  </h3>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>

      <div
        className={`mt-20 lg:ml-80 sm:ml-32 flex  lg:gap-x-32 sm:gap-x-16  items-center  justify-center`}
      >
        <div className={`visible:${order !== 0}`}>
          <Link href={"/"}>
            <button
              type="button"
              className="py-3 px-4 w-48 inline-flex justify-center items-center gap-2 rounded-md border border-transparent font-semibold bg-red-500 text-white hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 transition-all text-sm dark:focus:ring-offset-gray-800"
            >
              Continue Shopping
            </button>
          </Link>
        </div>

        <div className="ml-16">
          <button
            type="button"
            disabled={cartItems.length == 0}
            onClick={() => handlecheckout()}
            className={` py-3 px-4  w-48 inline-flex justify-center items-center gap-2 rounded-md border border-transparent font-semibold bg-blue-500 text-white hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 transition-all text-sm dark:focus:ring-offset-gray-800`}
          >
            Pay With Stripe
          </button>
        </div>
      </div>
    </>
  );
};

export default InternalCartShop;
