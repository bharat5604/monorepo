import React from "react";
import { Section } from "../Layout";

type Props = {};

const Hero = (props: Props) => {
  return (
    <div className="bg-dark py-20">
      <Section>
        <div className="flex flex-col gap-4 text-center text-white">
          <h1 className="text-4xl font-semibold">भाग कैसे लें ?</h1>
          <p className="text-2xl md:text-3xl ">सरल 3 चरणों की प्रक्रिया का पालन करें</p>
        </div>
      </Section>
    </div>
  );
};

export default Hero;
