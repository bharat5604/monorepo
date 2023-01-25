import React from "react";
import Hero from "../components/programs/Hero";
import Blog from "../components/programs/Blog";
import Marque from "../components/programs/Marque";

type Props = {};

const programs = (props: Props) => {
  return (
    <div>
      <Hero />
      <Blog />
      <Marque />
    </div>
  );
};

export default programs;
