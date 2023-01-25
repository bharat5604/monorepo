import React from "react";
import BlogCard from "../common/BlogCard";
import { Section } from "../Layout";

type Props = {};

const Card = (props: Props) => {
  return (
    <div>
      <Section>
        <div className="grid lg:grid-cols-3 gap-4">
          <BlogCard />
        </div>
      </Section>
    </div>
  );
};

export default Card;
