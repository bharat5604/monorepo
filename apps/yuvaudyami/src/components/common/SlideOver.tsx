import React, { Fragment, ReactElement } from "react";
import { Dialog, Transition } from "@headlessui/react";
import Link from "next/link";
import Img from "./Img";
import { XMarkIcon } from "@heroicons/react/24/solid";

interface Props {
  open: any;
  close: any;
  children: any;
}

function SlideOver({ open, close, children }: Props): ReactElement {
  return (
    <Transition.Root show={open} as={Fragment}>
      <Dialog
        as="div"
        className="fixed inset-0 z-50 overflow-hidden"
        onClose={close}
      >
        <div className="absolute inset-0 overflow-hidden">
          <Transition.Child
            as={Fragment}
            enter="ease-in-out duration-500"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in-out duration-500"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Dialog.Overlay className="absolute inset-0 transition-opacity bg-opacity-75 backdrop-filter backdrop-blur-sm" />
          </Transition.Child>
          <div className="fixed w-[90%] ">
            <Transition.Child
              as={Fragment}
              enter="transform transition ease-in-out duration-500 sm:duration-700"
              enterFrom="-translate-x-full"
              enterTo="-translate-x-0"
              leave="transform transition ease-in-out duration-500 sm:duration-700"
              leaveFrom="-translate-x-0"
              leaveTo="-translate-x-full"
            >
              <div className="relative w-[90%]">
                <Transition.Child
                  as={Fragment}
                  enter="ease-in-out duration-500"
                  enterFrom="opacity-0"
                  enterTo="opacity-100"
                  leave="ease-in-out duration-500"
                  leaveFrom="opacity-100"
                  leaveTo="opacity-0"
                >
                  <div className="absolute top-0 right-0 flex justify-end w-[100%] pt-4 pr-2 -ml-8 sm:-ml-10 sm:pr-4">
                    {/* <Link href="/" className="mx-4">
                      <Img
                        src={"mainLogo"}
                        alt="lab"
                        isNextImg={true}
                        width={100}
                        height={30}
                        className=""
                      />
                    </Link> */}
                    <button
                      type="button"
                      className="p-1 text-gray-900 rounded-md hover:text-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-300"
                      onClick={close}
                    >
                      <span className="sr-only">Close panel</span>

                      <XMarkIcon
                        className="w-6 h-6 text-white"
                        aria-hidden="true"
                      />
                    </button>
                  </div>
                </Transition.Child>
                <div className="flex flex-col py-6 overflow-y-scroll bg-dark shadow-xl h-screen">
                  <div className="relative mt-8 sm:px-6">{children}</div>
                </div>
              </div>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  );
}

export default SlideOver;
