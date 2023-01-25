import React from "react";
import Hero from "../components/about/Hero";
import Blog from "../components/about/Blog";
type Props = {};

const about = (props: Props) => {
  return (
    <div>
      <Hero />
      <Blog />
    </div>
  );
};

export default about;
