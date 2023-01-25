import React from "react";
import { Section } from "../../Layout";

type Props = {};

const Hero = (props: Props) => {
  return (
    <div className="bg-dark py-20">
      <Section>
        <div className="text-center text-2xl md:text-4xl text-white">
          <h1>Cancellation & Refund & Return Policy</h1>
        </div>
      </Section>
    </div>
  );
};

export default Hero;
