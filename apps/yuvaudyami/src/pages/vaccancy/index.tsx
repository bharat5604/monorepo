import React from "react";
import Hero from "../../components/vaccancy/Hero";
import Jobs from "../../components/vaccancy/Jobs";

type Props = {};

const vaccancy = (props: Props) => {
  return (
    <div>
      <Hero />
      <Jobs />
    </div>
  );
};

export default vaccancy;
