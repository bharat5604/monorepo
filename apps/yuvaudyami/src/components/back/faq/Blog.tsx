import React from "react";
import { Section } from "../../Layout";
type Props = {};

const Blog = (props: Props) => {
  return (
    <div className="py-10">
      <Section>
        <div className=" flex flex-col space-y-2 text-primary">
          
          <div>
            <p className="text-4xl text-center font-bold text-dark py-6">Faq</p>
          </div>

          <div className="text-justify flex flex-col space-y-2 py-4">
            <p className="font-bold text-xl text-dark">Q. What is the Yuva udyami swarojgar ?</p>
            <p>
              Yuva udyami swarojgar Yuva udyami swarojgar; a government Registered Non-Profit
              Organization for the enhancement the standard of living of societies.
            </p>
          </div>

          <div className="text-justify flex flex-col space-y-2 py-4">
            <p className="font-bold text-xl text-dark">
              Q. What is the Working areas of Yuva udyami swarojgar ?
            </p>
            <div className="flex flex-col space-y-4 px-4">
              <p>
                1. Government Project Implementation based on Employability through Skill
                Development.
              </p>
              <p>2. Training Partner of Ministry of skill Development and entrepreneurship.</p>
              <p>3. Training Partner of Day-NULM (Ministry of Housing and Urban Affairs).</p>
              <p>4. Education and protection of Right to Education Act.</p>
              <p>5. Employability.</p>
              <p>6. Entrepreneurs.</p>
              <p>7. Government Project implementation.</p>
            </div>
          </div>

          <div className="text-justify flex flex-col space-y-2 py-4">
            <p className="font-bold text-xl text-dark">
              Q. How does Yuva udyami swarojgar co-ordinate with others aid agency to implement
              Government Project ?
            </p>
            <p>
              We have focused on Block level in every districts of India and focus on benefits of
              government aid will reached to grass root beneficiary.
            </p>
          </div>

          <div className="text-justify flex flex-col space-y-2 py-4">
            <p className="font-bold text-xl text-dark">Q. How do I apply for Refund ?</p>
            <p>
              Refund will done as per refund policies. If you have or will have make payment
              multiple time by server issue or any other reason for single application then you
              should send an email on nuvchelp@gmail.com with all details to initiate refund of
              addition amount.
            </p>
          </div>

          <div className="text-justify flex flex-col space-y-2 py-4">
            <p className="font-bold text-xl text-dark">
              Q. Where can I find the Yuva udyami swarojgar ? publication in public media ?
            </p>
            <p>
              We have publish all notification in various National News paper and on our website.
              For more details always login on website with your user name and Password which is
              generated after successfully applied.
            </p>
          </div>

        </div>
      </Section>
    </div>
  );
};

export default Blog;
