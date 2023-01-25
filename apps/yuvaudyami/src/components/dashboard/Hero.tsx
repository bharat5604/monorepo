import React from "react";
import { Section } from "../Layout";

type Props = {};

const Hero = (props: Props) => {
  return (
    <div className="bg-dark py-10 px-12">
      <Section>
        <div className="flex flex-col gap-y-2 text-2xl md:text-4xl text-white px-6">
          <h1>Hi ......UserName</h1>
          <p>Email:bhushansingh95340@gmail.com</p>
          <p>Phone:1234567890</p>
        </div>
      </Section>
    </div>
  );
};

export default Hero;
