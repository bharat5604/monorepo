import React from "react";

import { useForm } from "react-hook-form";

type Props = {};

const Contact = (props: Props) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data: any) => console.log(data);

  return (
    <div className="m-4">
      <div className="flex flex-col lg:flex-row w-full gap-5">
        <div className="w-full px-6 ">
          <div>
            <img
              src="/logo.png"
              alt="Yuva udyami swarojgar"
              className="w-20 mx-auto"
            />
            <p className="text-3xl text-dark text-center py-4">
              Yuva udyami swarojgar
            </p>
            <p className="text-justify text-lg text-primary py-6">
              Yuva udyami swarojgar of India provides a single-Window access to
              information and services that are elctronicaly delivered to from
              all Goverment Departments, Institutions and Organization.
            </p>
          </div>
          <div>
            <p className="text-center text-4xl text-dark py-4">Contact Us At</p>
            <div className="flex flex-col space-y-4 text-primary">
              {/* <p>Address:FLAT NO.A-3 LOWER GF B-15 SHANKAR GARDEN NAJAFGARH</p> */}
              {/* <p>Phone:912 6225 436</p> */}
              <p>Timing: Monday - Saturday 9:30AM to 7:30PM</p>
              <p>Email: support@yuvaudhyemi.org</p>
            </div>
          </div>
        </div>

        <div className="px-6 w-full">
          <div className="text-3xl text-dark">
            <p className="py-4">Contact Us</p>
            <p>शिकायत / शुझाव / सहायता</p>
          </div>
          <div>
            <form
              className="w-full py-4 space-y-4"
              onSubmit={handleSubmit(onSubmit)}
            >
              <div className="">
                <label
                  className="block text-gray-700 text-sm font-bold mb-2"
                  htmlFor="Name"
                >
                  Name*
                </label>
                <input
                  className="shadow  border rounded w-full py-2 px-3 text-gray-700"
                  id="Name"
                  placeholder="Name"
                  type="text"
                  {...register("Name", { required: true, maxLength: 30 })}
                />
              </div>

              <div>
                <label
                  className="block text-gray-700 text-sm font-bold mb-2"
                  htmlFor="Reason"
                >
                  Reason*
                </label>
                <select
                  className="shadow   border rounded w-full py-2 px-3 text-gray-700"
                  {...register("Reason", { required: true })}
                >
                  <option value="Payment">Payment</option>
                  <option value="querey">querey</option>
                  <option value="admission">admission</option>
                  <option value="exam">exam</option>
                </select>
              </div>

              <div className="">
                <label
                  className="block text-gray-700 text-sm font-bold mb-2"
                  htmlFor="Email"
                >
                  Email*
                </label>
                <input
                  className="shadow  border rounded w-full py-2 px-3 text-gray-700"
                  id="Email"
                  placeholder="Email"
                  type="text"
                  {...register("Email", { required: true, maxLength: 40 })}
                />
              </div>

              <div className="">
                <label
                  className="block text-gray-700 text-sm font-bold mb-2"
                  htmlFor="Number"
                >
                  Number*
                </label>
                <input
                  className="shadow   border rounded w-full py-2 px-3 text-gray-700"
                  id="Number"
                  placeholder="Number"
                  type="number"
                  {...register("Number", { required: true, maxLength: 30 })}
                />
              </div>

              <div className="">
                <label
                  className="block text-gray-700 text-sm font-bold mb-2"
                  htmlFor="Messege"
                >
                  Messege
                </label>
                <textarea
                  className="shadow   border rounded w-full py-2 px-3 text-gray-700"
                  {...register("messege", { required: true, maxLength: 1000 })}
                  name="messege"
                  id="messege"
                  // cols="80"
                  // rows="6"
                  placeholder="Messege"
                ></textarea>
              </div>

              <button
                className="bg-dark text-white w-full  py-2 mt-4 text-center text-2xl font-bold rounded-2xl"
                type="submit"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
