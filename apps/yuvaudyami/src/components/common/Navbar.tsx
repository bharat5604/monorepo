import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";
import { Section } from "../Layout";
import {
  MegaphoneIcon,
  ShoppingCartIcon,
  UserCircleIcon,
  UserIcon,
} from "@heroicons/react/24/solid";
import SlideOver from "./SlideOver";
import Navlink from "./Navlink";
import { useSelector } from "react-redux";

type Props = {};

const links = [
  {
    url: "/",
    name: "Home",
  },
  {
    url: "/about",
    name: "About",
  },
  {
    url: "/programs",
    name: "Programs",
  },
  // {
  //   url: "/blog",
  //   name: "Blogs",
  // },
  {
    url: "/course",
    name: "Courses",
  },
  {
    url: "/project",
    name: "Project Reports",
  },
  {
    url: "/vaccancy",
    name: "Vaccancy",
  },
  {
    url: "/applyprocess",
    name: "Apply Process",
  },
  {
    url: "/contact",
    name: "Contact Us",
  },
];

function Navbar({}: Props) {
  const router = useRouter();
  const [open, setOpen] = useState(false);
  const cart = useSelector((state: any) => state?.cartDetails?.cart);
  const loginDetails = useSelector((state: any) => state?.loginDetails);

  console.log("state is", loginDetails);

  const handleCart = () => {
    router.push("/cart");
  };

  const handleClose = () => {
    setOpen(!open);
  };

  return (
    <div className="bg-dark py-6 px-12">
      <div className="justify-between flex items-center">
        <div className="flex items-center gap-6">
          <div className="w-10">
            <Link href="/">
              <img src="/logo.png" alt="" />
            </Link>
          </div>
          <div className="lg:flex space-x-3 hidden font-medium text-[15px] cursor-pointer ">
            {links?.map((item, index) => (
              <div key={index}>
                <Link
                  href={item?.url}
                  className={` ${
                    item.url === router.pathname
                      ? "text-white"
                      : "text-white hover:text-secondary hover:underline-offset-2 hover:underline"
                  } `}
                >
                  {item?.name}
                </Link>
              </div>
            ))}
          </div>
        </div>

        <div className="flex flex-row gap-6 items-center">
          {/* <div
            className="relative cursor-pointer flex items-center"
            onClick={handleCart}
          >
            <p className="font-medium text-white">Cart</p>
            <ShoppingCartIcon className="text-white w-8 h-8 mr-6" />
            {cart?.length > 0 && (
              <div className="w-5 h-5 top-0 right-1 absolute text-white font-semibold flex justify-center items-center bg-black p-1 rounded-full">
                <p className="mb-1"> {cart?.length}</p>
              </div>
            )}
          </div> */}
          <div
            onClick={handleCart}
            className="text-lg relative cursor-pointer space-x-2 items-center font-bold hidden md:flex bg-white px-2 py-1 text-dark rounded-md hover:bg-gray-100"
          >
            <ShoppingCartIcon className="text-dark w-4 h-4" />
            <p>Cart</p>
            {cart?.length > 0 && (
              <div className="w-6 h-6 -top-2 -right-4 absolute text-white font-semibold flex justify-center items-center bg-black p-1 rounded-full">
                <p className="mb-1"> {cart?.length}</p>
              </div>
            )}
          </div>
          <Link
            href="/vaccancy"
            className="text-lg font-bold hidden md:flex bg-white px-2 py-1 text-dark rounded-md hover:bg-gray-100"
          >
            Jobs
          </Link>
          <Link
            href="/apply-now"
            className="text-lg bg-white px-2 py-1 text-dark rounded-md font-bold hover:bg-gray-100"
          >
            Apply Now
          </Link>
          {!loginDetails?.isLoggedIn ? (
            <Link
              href="/login"
              className="text-lg  bg-white px-2 py-1 text-dark rounded-md  hidden md:flex font-bold hover:bg-gray-100"
            >
              Login
            </Link>
          ) : (
            <div className="">
              <UserCircleIcon className="text-white w-10 h-10" />
            </div>
          )}
        </div>

        <div className="lg:hidden" onClick={() => setOpen(true)}>
          {/* <MegaphoneIcon className="text-white w-4" /> */}
          <svg
            className="w-6 h-6 text-white"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h8m-8 6h16"
            ></path>
          </svg>
        </div>
      </div>
      <div className="flex text-white lg:hidden">
        <SlideOver open={open} close={handleClose}>
          <nav className="">
            <ul className="space-y-4 w-full">
              {links.map((link, i) => (
                <div
                  key={`nav-link-${link.name}-${i + 1}`}
                  className="border-b border-white border-dashed"
                >
                  <Navlink
                    link={link}
                    isSideOverlay={true}
                    close={handleClose}
                  />
                </div>
              ))}
              <div className="flex flex-col gap-2 text-gray-600">
                <Link
                  href="/login"
                  className=" font-bold border-b border-white border-dashed text-white px-4 py-1 "
                >
                  Login
                </Link>
                <Link
                  href="/vaccancy"
                  className="   font-bold border-b border-white border-dashed text-white px-4 py-1 "
                >
                  Jobs
                </Link>
                <Link
                  href="/apply-now"
                  className="font-bold border-b border-white border-dashed text-white px-4 py-1"
                >
                  Apply Now
                </Link>
              </div>
            </ul>
          </nav>
        </SlideOver>
      </div>
    </div>
  );
}

export default Navbar;
