import { useRouter } from "next/router";
import React, { useState, useEffect } from "react";
import { courseDetails } from "../../components/digitallearning/Card";
import { Section } from "../../components/Layout";

type Props = {};

function CourseDetail({}: Props) {
  const router = useRouter();
  const [course, setCourse] = useState<any>();
  const id: any = router.query.id;

  useEffect(() => {
    setCourse(courseDetails.filter((item) => item.id == id)[0]);
  }, [id]);

  return (
    <div className="py-20 bg-gray-100">
      <Section>
        <div className="bg-white rounded-xl px-6 py-8">
          <div className="grid grid-cols-12 gap-6">
            <div className="col-span-3 rounded-xl overflow-hidden flex flex-col text-gray-700 gap-4">
              <img src={course?.img} alt="" />
              <p className="font-semibold ">Note:-</p>
              <p className="text-justify">{course?.text}</p>
            </div>
            <div className="col-span-6 flex flex-col text-gray-700">
              <p className="font-semibold text-sm mb-8">PROFESSIONAL</p>
              <div className="space-y-4">
                <p className="font-semibold text-2xl">{course?.title}</p>
                <p className="font-semibold text-base">{course?.about}</p>
                <p className="font-semibold text-2xl">₹ {course?.price}/-</p>
              </div>
            </div>
            <div className="col-span-3 flex flex-col justify-end">
              <button className="bg-dark uppercase hover:bg-dark/90 text-white px-4 py-2 font-medium rounded-lg">
                Add to Cart
              </button>
            </div>
          </div>
        </div>
      </Section>
    </div>
  );
}

export default CourseDetail;
