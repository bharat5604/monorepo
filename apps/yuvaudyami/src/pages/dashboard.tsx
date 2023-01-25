import React from "react";
import Hero from "../components/dashboard/Hero";
import Table from "../components/dashboard/Table";

type Props = {};

const dashboard = (props: Props) => {
  return (
    <div>
      <Hero />
      <Table/>
    </div>
  );
};

export default dashboard;
