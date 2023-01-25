import React from "react";
import Card from "../components/blog/Card";
import Hero from "../components/blog/Hero";

type Props = {};

const blog = (props: Props) => {
  return (
    <div>
      <Hero />
      <Card />
    </div>
  );
};

export default blog;
