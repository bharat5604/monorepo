import React from "react";
import Blog from "../components/back/disclaimer/Blog";
import Hero from "../components/back/disclaimer/Hero";

type Props = {};

const disclaimer = (props: Props) => {
  return (
    <div>
      <Hero />
      <Blog />
    </div>
  );
};

export default disclaimer;
