import React, { useEffect } from "react";
import { Section } from "../Layout";
import Link from "next/link";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../../redux/features/cartSlice";
import { useRouter } from "next/router";

type Props = {};

export const Product = [
  {
    id: 100,
    img: "https://iid.org.in/_next/image?url=%2Fbasepath%2Fthumbnail%2Fproject-report%2F5837274BEAUTY%20PARLOUR%20PROJECT.jpg&w=1920&q=75",
    title: "Sell product though Amazon,Flipkart,Myntra.",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad a repellendus quasi, quae eligendi dolores sed libero officiis. Odio aut voluptate adipisci ut doloremque cumque praesentium dolores id fuga facilis, rerum sed quas blanditiis perferendis corporis consequuntur ullam quidem obcaecati! Sint facere eaque ab dolore itaque modi nihil iusto inventore?",
    price: 510,
    btn: "ADD TO CART",
  },
  {
    id: 200,
    img: "https://iid.org.in/_next/image?url=%2Fbasepath%2Fthumbnail%2Fproject-report%2F5837274BEAUTY%20PARLOUR%20PROJECT.jpg&w=1920&q=75",
    title: "Astrology Course (Earn 50k to 2 lac per month)",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad a repellendus quasi, quae eligendi dolores sed libero officiis. Odio aut voluptate adipisci ut doloremque cumque praesentium dolores id fuga facilis, rerum sed quas blanditiis perferendis corporis consequuntur ullam quidem obcaecati! Sint facere eaque ab dolore itaque modi nihil iusto inventore?",
    price: 250,
    btn: "ADD TO CART",
  },
  {
    id: 300,
    img: "https://iid.org.in/_next/image?url=%2Fbasepath%2Fthumbnail%2Fproject-report%2F5837274BEAUTY%20PARLOUR%20PROJECT.jpg&w=1920&q=75",
    title: "Make money through online teaching",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad a repellendus quasi, quae eligendi dolores sed libero officiis. Odio aut voluptate adipisci ut doloremque cumque praesentium dolores id fuga facilis, rerum sed quas blanditiis perferendis corporis consequuntur ullam quidem obcaecati! Sint facere eaque ab dolore itaque modi nihil iusto inventore?",
    price: 450,
    btn: "ADD TO CART",
  },
  {
    id: 400,
    img: "https://iid.org.in/_next/image?url=%2Fbasepath%2Fthumbnail%2Fproject-report%2F5837274BEAUTY%20PARLOUR%20PROJECT.jpg&w=1920&q=75",
    title: "Vastu Course (Earn 50k to 2 lac per month)",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad a repellendus quasi, quae eligendi dolores sed libero officiis. Odio aut voluptate adipisci ut doloremque cumque praesentium dolores id fuga facilis, rerum sed quas blanditiis perferendis corporis consequuntur ullam quidem obcaecati! Sint facere eaque ab dolore itaque modi nihil iusto inventore?",
    price: 550,
    btn: "ADD TO CART",
  },
];

const ProjectReports = (props: Props) => {
  const router = useRouter();
  const dispatch = useDispatch();
  const cart = useSelector((state: any) => state?.cartDetails?.cart);

  useEffect(() => {}, [cart]);

  return (
    <div>
      <Section>
        <div className="py-10">
          <div>
            <p className="font-bold text-2xl">Service Industries</p>
          </div>
          <div className="flex flex-col space-y-4">
            {Product.map((item, index) => {
              const idInCart = cart.filter(
                (detail: any) => detail.id == item.id
              );

              return (
                <div
                  key={index}
                  className="py-10 flex flex-col md:flex-row justify-between shadow-2xl rounded-md px-4 gap-4"
                >
                  <div className="">
                    <img src={item?.img} alt="" />
                  </div>

                  <div className="w-full flex flex-col gap-4">
                    <p className="text-xl font-semibold text-dark text-center">
                      {item?.title}
                    </p>
                    <p className="text-justify">{item?.text}</p>
                    <div className="flex justify-between">
                      <p className="font-bold text-2xl text-dark">
                        ₹ {item?.price}
                      </p>
                      {idInCart.length === 0 ? (
                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            dispatch(
                              addToCart({ ...item, type: "Project Report" })
                            );
                          }}
                          className="bg-dark hover:bg-dark/90 text-white font-semibold px-4 py-2 rounded-xl"
                        >
                          ADD TO CART
                        </button>
                      ) : (
                        <button
                          onClick={(e) => {
                            router.push("/cart");
                          }}
                          className="bg-dark hover:bg-dark/90 text-white font-semibold px-4 py-2 rounded-xl"
                        >
                          GO TO CART
                        </button>
                      )}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </Section>
    </div>
  );
};

export default ProjectReports;
