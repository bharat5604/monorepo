import React from "react";
import Link from "next/link";
import { Section } from "../Layout";

type Props = {};

const jobDetails = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const Jobs = (props: Props) => {
  return (
    <div className="py-20 ">
      <Section>
        <div className="grid md:grid-cols-2 lg:grid-cols-4  gap-6">
          {jobDetails.map((item, index) => (
            <div key={index} className="shadow-2xl border-4 border-gray-600 flex flex-col">
              <div className="bg-dark text-white text-center py-2">
                <p>Mobilizer Distric Lebel</p>
              </div>
              <div className="bg-cover">
                <img className="w-full" src="/program1.png" alt="" />
              </div>
              <div className="flex justify-between bg-dark py-2 px-1">
                <button className="bg-gray-50 rounded-md hover:bg-gray-100 font-semibold text-[14px] py-1 px-2 hover:font-bold text-dark">
                  Read More
                </button>
                <Link href="/vaccancy/user-details">
                  <button className="bg-gray-50 rounded-md hover:bg-gray-100 font-semibold text-[14px] py-1 px-2 hover:font-bold text-dark">
                    Apply Now
                  </button>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </Section>
    </div>
  );
};

export default Jobs;
