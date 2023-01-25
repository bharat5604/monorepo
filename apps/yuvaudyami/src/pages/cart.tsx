import { TrashIcon } from "@heroicons/react/24/solid";
import React from "react";
import { useSelector } from "react-redux";
import { Section } from "../components/Layout";
import { removeItem } from "../redux/features/cartSlice";
import { useDispatch } from "react-redux";
import { useRouter } from "next/router";

type Props = {};

function Cart({}: Props) {
  const router = useRouter();
  const dispatch = useDispatch();
  const cart = useSelector((state: any) => state?.cartDetails?.cart);
  const loginDetails = useSelector((state: any) => state?.loginDetails);

  const handleRemove = (id: any) => {
    dispatch(removeItem(id));
  };

  return (
    <>
      <div className="bg-dark py-8">
        <Section>
          <div className="text-center text-4xl md:text-6xl text-white">
            <h1>Shopping Cart</h1>
          </div>
        </Section>
      </div>
      <Section>
        <div className="my-20">
          <div className="grid grid-cols-12 bg-dark text-white font-semibold px-4">
            <p className="col-span-2 py-2 mx-auto">#</p>
            <p className="col-span-6 mx-auto py-2">Item Details</p>
            <p className="col-span-2 mx-auto py-2">Total</p>
            <p className="col-span-2 mx-auto py-2"></p>
          </div>
          {cart?.map((item: any, index: number) => (
            <div
              key={index}
              className="grid grid-cols-12 font-semibold bg-gray-50 items-center text-gray-800 px-4"
            >
              <p className="col-span-2 py-2 mx-auto">{index + 1}</p>
              <div className="col-span-6  py-2 space-y-2">
                <p>{item.title}</p>
                <p className="text-sm text-gray-600 font-medium">{item.type}</p>
              </div>
              <p className="col-span-2 mx-auto py-2">₹ {item.price}/-</p>
              <p className="col-span-2 mx-auto py-2">
                <TrashIcon
                  className="w-5 h-5 text-dark/80 hover:text-dark cursor-pointer"
                  onClick={() => handleRemove(item.id)}
                />
              </p>
            </div>
          ))}
          <div className="grid grid-cols-12 bg-gray-100 text-gray-800 font-semibold px-4">
            <p className="col-span-2 py-2 mx-auto"></p>
            <p className="col-span-6 mx-auto py-2 text-right">
              TOTAL (TAX INCL.)
            </p>
            <p className="col-span-2 mx-auto py-2">
              ₹{" "}
              {cart?.reduce(
                (total: any, { price }: any) => total + parseInt(price),
                0
              )}
              /-
            </p>
            <p className="col-span-2 mx-auto py-2"></p>
          </div>
          {cart.length === 0 && (
            <div className="flex flex-col justify-center items-center">
              <img
                src="/empty-cart.png"
                alt="emptyCart"
                className="w-1/6 my-6"
              />
              <p className="text-2xl font-semibold text-dark">
                Your cart is currently empty
              </p>
            </div>
          )}
        </div>
        {cart.length > 0 && (
          <div className=" flex justify-end">
            {loginDetails?.isLoggedIn ? (
              <button className="bg-dark py-2 px-4 text-xl font-semibold text-white rounded-lg focus:ring-dark mb-12 flex justify-end">
                Proceed
              </button>
            ) : (
              <button
                onClick={() => {
                  router.push("/login");
                }}
                className="bg-dark py-2 px-4 text-xl font-semibold text-white rounded-lg focus:ring-dark mb-12 flex justify-end"
              >
                Login to Proceed
              </button>
            )}
          </div>
        )}
      </Section>
    </>
  );
}

export default Cart;
