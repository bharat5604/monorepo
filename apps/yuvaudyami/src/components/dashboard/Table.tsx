import React from "react";
import { Section } from "../Layout";

type Props = {};

const Table = (props: Props) => {
  return (
    <div className="py-10">
      <Section>
        <div className="shadow-2xl p-4 rounded-xl">
          <div className="my-4 py-4 text-xl font-semibold border border-b-blue-900 ">
            <p className="px-5">My Purches</p>
          </div>
          <div>
            <div className="border py-4 my-2 border-b-blue-900 ">
              <table className="w-full  ">
                <tr>
                  <th>SN</th>
                  <th>Email</th>
                  <th>Name</th>
                  <th>type</th>
                  <th>payment id</th>
                  <th>status</th>
                  <th>Date</th>
                </tr>
              </table>
            </div>
          </div>
        </div>

        <div className="shadow-2xl p-4 mt-4 rounded-xl">
          <div className="my-4 py-4 text-xl font-semibold border border-b-blue-900 ">
            <p className="px-5">Pending</p>
          </div>
          <div>
            <div className="border py-4 my-2 border-b-blue-900 ">
              <table className="w-full  ">
                <tr>
                  <th>SN</th>
                  <th>Email</th>
                  <th>Name</th>
                  <th>Course ID</th>
                  <th>Order Id</th>
                  <th>PaymentId</th>
                  <th>action</th>
                </tr>
              </table>
            </div>
          </div>
        </div>
      </Section>
    </div>
  );
};

export default Table;
