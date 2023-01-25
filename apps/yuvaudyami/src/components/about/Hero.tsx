import React from "react";
import { Section } from "../Layout";

type Props = {};

const Hero = (props: Props) => {
  return (
    <div className="bg-dark py-20">
      <Section>
        <div className="text-center text-4xl md:text-6xl text-white">
          <h1>About</h1>
        </div>
      </Section>
    </div>
  );
};

export default Hero;
