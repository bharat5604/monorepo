import Link from "next/link";
import Router, { useRouter } from "next/router";
import React from "react";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";
import { loginAction } from "../../redux/features/loginSlice";

type Props = {};

const LoginForm = (props: Props) => {
  const router = useRouter();
  const dispatch = useDispatch();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = async (data: any) => {
    console.log(data);
    const payload = data;
    const result = await fetch("http://localhost:8000/api/v1/auth/login", {
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      method: "POST",
      body: JSON.stringify(payload),
    });

    const response = await result.json();
    if (result.status === 200) {
      dispatch(loginAction(response));
      router.push("/");
    } else {
      toast.error(response?.msg);
    }
    console.log("response is", response, result);
  };
  return (
    <div>
      <div className="flex justify-center items-center py-20">
        <div className="w-96 p-6 shadow-2xl rounded-md bg-white">
          <div className="flex items-center justify-center space-x-2">
            {" "}
            <div className="w-12">
              {" "}
              <img src="/logo.png" alt="Yuva udyami swarojgar" className="" />
            </div>
            <h1 className="font-bold text-dark block text-3xl">Login</h1>
          </div>
          <hr className="mt-3" />

          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="mt-3">
              <label className="block text-base mb-2" htmlFor="Email">
                Email
              </label>
              <input
                className="w-full border-2 border-gray-400 px-2 py-1 text-base focus:outline-none "
                type="email"
                id="email"
                {...register("email")}
                placeholder="Enter your email"
              />
            </div>
            <div className="mt-3">
              <label className="block text-base mb-2" htmlFor="Password">
                Password
              </label>
              <input
                className="w-full border-2 border-gray-400 px-2 py-1 text-base focus:outline-none "
                type="Password"
                id="password"
                {...register("password")}
                placeholder="Enter your Password"
              />
            </div>
            <div className="mt-3 text-right">
              <a className="text-red-900" href="">
                Forget Password ?
              </a>
            </div>
            <div className="mt-3">
              <button
                type="submit"
                className="w-full py-2 bg-dark text-white hover:font-medium text-xl rounded-md"
              >
                Login
              </button>
            </div>
            <Link href="/apply-now">
              <button
                type="button"
                className="w-full py-2 mt-5 bg-orange-600 text-white hover:font-medium text-xl rounded-md"
              >
                New User ? Register Here
              </button>
            </Link>
          </form>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
