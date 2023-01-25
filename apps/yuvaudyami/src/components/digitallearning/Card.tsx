import Link from "next/link";
import { useRouter } from "next/router";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../../redux/features/cartSlice";
import { Section } from "../Layout";
type Props = {};

export const courseDetails = [
  {
    id: 1,
    img: "https://iid.org.in/basepath/uploads/media_manager/450.jpg",
    title: "Digita marketing",
    about:
      "(Introduction to Digital Marketing, How Can You Do Digital Marketing, etc.)",
    price: 2799,
    btn: "Add to Cart",
    text: "The course you are willing to purchase is only available in the Hindi Language. The amount is non-refundable once purchased.",
  },
  {
    id: 2,
    img: "https://iid.org.in/basepath/uploads/media_manager/554.jpg",
    title: "C++ Programming",
    about:
      "(Introduction to the C++, How to take user input, Constructors In C++, etc.)",
    price: 900,
    btn: "Add to Cart",
    text: "The course you are willing to purchase is only available in the Hindi Language. The amount is non-refundable once purchased.",
  },
  {
    id: 3,
    img: "https://iid.org.in/basepath/uploads/media_manager/495.jpg",
    title: "Robotics (Arduino)",
    about:
      "(Introduction to the Arduino Robotics, How to create an Alarm system, etc.)",
    price: 1500,
    btn: "Add to Cart",
    text: "The course you are willing to purchase is only available in the Hindi Language. The amount is non-refundable once purchased.",
  },
  {
    id: 4,
    img: "https://iid.org.in/basepath/uploads/media_manager/80.jpg",
    title: "Web Designing Using HTML & CSS",
    about:
      "(Introduction to web designing using HTML & CSS, CSS list style property,  HTML links & block elements, etc.)",
    price: 900,
    btn: "Add to Cart",
    text: "The course you are willing to purchase is only available in the Hindi Language. The amount is non-refundable once purchased.",
  },
  {
    id: 5,
    img: "https://iid.org.in/basepath/uploads/media_manager/555.png",
    title: "Advance Java",
    about:
      "(Introduction to Java Programming, Features of Java 8 & Working On Stream API, JDBC Implementation, etc.)",
    price: 1100,
    btn: "Add to Cart",
    text: "The course you are willing to purchase is only available in the Hindi Language. The amount is non-refundable once purchased.",
  },
  {
    id: 6,
    img: "https://iid.org.in/basepath/uploads/media_manager/545.jpg",
    title: "Basic Computer Knowledge",
    about:
      "(Introduction to the basic Computer Knowledge, Data Processing, Hardware, Software, etc.)",
    price: 500,
    btn: "Add to Cart",
    text: "The course you are willing to purchase is only available in the Hindi Language. The amount is non-refundable once purchased.",
  },
  {
    id: 7,
    img: "https://iid.org.in/basepath/uploads/media_manager/498.jpg",
    title: "Python Advance",
    about:
      "(Introduction to the Python Advance, Telephone Billing System, etc.)",
    price: 1000,
    btn: "Add to Cart",
    text: "The course you are willing to purchase is only available in the Hindi Language. The amount is non-refundable once purchased.",
  },
  {
    id: 8,
    img: "https://iid.org.in/basepath/uploads/media_manager/536.jpg",
    title: ".NET Programming",
    about:
      "(Web Application Development, Features of Dot Net Programming, Practical Inventory Control System, etc.)",
    price: 1000,
    btn: "Add to Cart",
    text: "The course you are willing to purchase is only available in the Hindi Language. The amount is non-refundable once purchased.",
  },
  {
    id: 9,
    img: "https://iid.org.in/basepath/uploads/media_manager/513.jpg",
    title: "Junior Software Developer",
    about:
      "( Basics of IT, Tools and Software for testing entry-level tasks, Problem Solving and Programme design, Workplace data management, etc.)",
    price: 1000,
    btn: "Add to Cart",
    text: "The course you are willing to purchase is only available in the Hindi Language. The amount is non-refundable once purchased.",
  },
];

const Card = (props: Props) => {
  const router = useRouter();
  const dispatch = useDispatch();
  const cart = useSelector((state: any) => state?.cartDetails?.cart);
  useEffect(() => {}, [cart]);
  const handleRoute = (id: any) => {
    router.push(`/course/${id}`);
  };
  return (
    <Section>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-10 py-20">
        {courseDetails.map((item, index) => {
          const idInCart = cart.filter((detail: any) => detail.id == item.id);

          return (
            <div key={index}>
              <div
                onClick={() => handleRoute(item.id)}
                className="flex flex-col hover:scale-105 gap-4 shadow-2xl rounded-md p-4"
              >
                <div>
                  <img src={item?.img} alt="" />
                </div>
                <div>
                  <p className="text-xl text-dark text-center">{item?.title}</p>
                </div>
                <div className="flex justify-between items-center">
                  <p className="font-semibold">₹ {item?.price}/-</p>
                  {idInCart.length === 0 ? (
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        dispatch(addToCart({ ...item, type: "Course" }));
                      }}
                      className="bg-dark hover:bg-dark/90 font-semibold text-white px-4 py-2 rounded-xl"
                    >
                      ADD TO CART
                    </button>
                  ) : (
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        router.push("/cart");
                      }}
                      className="bg-dark hover:bg-dark/90 font-semibold text-white px-4 py-2 rounded-xl"
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
    </Section>
  );
};

export default Card;
