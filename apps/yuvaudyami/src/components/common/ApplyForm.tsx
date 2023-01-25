import React from "react";
import { UserIcon, PhoneIcon, KeyIcon } from "@heroicons/react/24/solid";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import Link from "next/link";

type Props = {};

const ApplyForm = (props: Props) => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const onSubmit = async (data: any) => {
    console.log(data);
    const payload = {
      email: data.email,
      name: data.name,
      password: data.password,
    };
    const result = await fetch("http://localhost:8000/api/v1/auth/register", {
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      method: "POST",
      body: JSON.stringify(payload),
    });

    const response = await result.json();
    if (result.status === 201) {
      toast.success(response?.msg);
      reset();
    } else {
      toast.error(response?.msg);
    }
  };
  return (
    <div className="flex justify-center items-center py-20">
      <div className="text-center text-2xl font-semibold">
        <p>Apply Now</p>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="mt-3 flex items-center">
            <UserIcon className="w-10 py-1 px-1 bg-gray-400" />
            <input
              className="w-full border-2 border-gray-400 px-2 py-1 text-base focus:outline-none "
              type="text"
              id="name"
              {...register("name")}
              placeholder="user name"
            />
          </div>
          <div className="mt-3 flex items-center">
            <PhoneIcon className="w-10 py-1 px-1 bg-gray-400" />
            <input
              className="w-full border-2 border-gray-400 px-2 py-1 text-base focus:outline-none "
              type="number"
              id="number"
              {...register("number")}
              placeholder="Number"
            />
          </div>
          <div className="mt-3 flex items-center">
            <UserIcon className="w-10 py-1 px-1 bg-gray-400" />
            <input
              className="w-full border-2 border-gray-400 px-2 py-1 text-base focus:outline-none "
              type="email"
              id="email"
              {...register("email")}
              placeholder="username@gmail.com"
            />
          </div>
          <div className="mt-3 flex items-center">
            <KeyIcon className="w-10 py-1 px-1 bg-gray-400" />
            <input
              className="w-full border-2 border-gray-400 px-2 py-1 text-base focus:outline-none "
              type="password"
              id="password"
              {...register("password")}
              placeholder="Enter your Password"
            />
          </div>
          <div className="mt-3 flex items-center">
            <KeyIcon className="w-10 py-1 px-1 bg-gray-400" />
            <input
              className="w-full border-2 border-gray-400 px-2 py-1 text-base focus:outline-none "
              type="password"
              name="Confirm Password"
              id="Confirm Password"
              placeholder="Confirm Password"
            />
          </div>
          <div className="mt-3">
            <button
              type="submit"
              className="w-full py-2 bg-secondary text-xl rounded-xl"
            >
              Register
            </button>
          </div>
          <Link href="/login">
            <button
              type="button"
              className="w-full py-2 mt-3 text-white bg-red-800 text-sm rounded-xl"
            >
              Have an Account ? Login
            </button>
          </Link>
        </form>
      </div>
    </div>
  );
};

export default ApplyForm;
