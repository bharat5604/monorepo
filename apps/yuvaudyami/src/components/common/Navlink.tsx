import React, { ReactElement } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import { Disclosure } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/24/solid";

function classNames(...classes: any) {
  return classes.filter(Boolean).join(" ");
}

interface Props {
  link: {
    name: string;
    url: string;
    // subName?: {
    //   name: string;
    //   url: string;
    // }[];
  };
  isSideOverlay: Boolean;
  close: any;
}

function Navlink({ link, isSideOverlay = false, close }: Props): ReactElement {
  const { pathname, push } = useRouter();
  // console.log("path", pathname, link.url);

  return (
    <>
      <li className="w-full px-4 pb-1">
        <Link
          className={`text-[16px] font-semibold ${
            link?.url === pathname ? "text-gray-200" : "text-white"
          }`}
          href={link?.url}
        >
          {link.name}
        </Link>
        {/* <Disclosure>
          {({ open }) => (
            <>
              <Disclosure.Button className="flex p-2 space-x-2 font-bold tracking-wider transition duration-500 ease-in-out rounded hover:border-gray-200 focus:outline-none focus:ring-2 focus:ring-indigo-800">
                <span
                  className={`${
                    pathname === "/services/doctor-consultation" ||
                    pathname === "/services/lab-test"
                      ? "text-[#F05123]"
                      : "text-gray-800"
                  }`}
                >
                  {link.name}
                </span>
                <ChevronDownIcon
                  className={`${
                    open ? "rotate-180 transform" : ""
                  } h-5 w-5 text-gray-900`}
                />
              </Disclosure.Button>
              <Disclosure.Panel className="flex flex-col space-y-3 text-[17px] font-medium justify-items-start px-5">
                <Link
                  href="/services/doctor-consultation"
                  className={`${
                    pathname === "/services/doctor-consultation"
                      ? "text-[#F05123]"
                      : "text-gray-700"
                  } `}
                >
                  <p onClick={close}> Doctor Consultation</p>
                </Link>
                <Link
                  href="/services/lab-test"
                  className={`${
                    pathname === "/services/lab-test"
                      ? "text-[#F05123]"
                      : "text-gray-700"
                  } `}
                >
                  <p onClick={close}>Lab Test</p>
                </Link>
              </Disclosure.Panel>
            </>
          )}
        </Disclosure> */}
      </li>
    </>
  );
}

export default Navlink;
