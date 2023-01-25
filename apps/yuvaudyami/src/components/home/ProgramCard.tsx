import React from "react";
import { Section } from "../Layout";

type Props = {};

const ProgramCard = (props: Props) => {
  return (
    <div className="py-20">
      <Section>
        <div className="text-center font-semibold md:text-4xl text-2xl  text-dark ">
          <p>Our Programs/हमारे कार्यक्रम</p>
        </div>
        <div className="py-6 grid md:grid-cols-2 gap-y-4">
          <div className="flex flex-col md:flex-row border-4 border-dark p-6 gap-4  rounded-2xl">
            <div className="md:w-[60%] w-full h-full">
              <img className="" src="/program1.png" alt="" />
            </div>
            <div className="flex flex-col space-y-4 w-full">
              <p className="font-bold">Entrepreneur Development Center</p>
              <p className="text-justify h-40 overflow-y-auto scrollbar">
                Yuva Udhyemi Savrojgar- educators dedicated to fostering entrepreneurship through
                dynamic, results-based programs in low- and middle-income district. With an agile,
                adaptive working style, we collaborate with partners to design innovative programs
                and curricula customized for both aspiring and established entrepreneurs. We also
                train local trainers on technical content and pedagogy so they can deliver the
                programs effectively. We work with an extensive network of faculty and educators
                with Yuvaudhyemi Program of Michigan and beyond to design and deliver training that
                helps entrepreneurs navigate real challenges. Whether in-person, virtually, or in a
                hybrid format, we also provide online training and online support throughout the
                life of a program. Entrepreneurs completing our interactive, practical programs get
                the skills, knowledge and confidence they need to succeed.
              </p>
            </div>
          </div>
          <div className="flex flex-col md:flex-row border-4 border-dark p-6 gap-4 rounded-2xl">
            <div className="c">
              <img className="" src="/program2.png" alt="" />
            </div>
            <div className="flex flex-col space-y-4 w-full">
              <p className="font-bold">Empowerment Education System</p>
              <p className="text-justify h-40 overflow-y-auto scrollbar">
                Yuva Udhyemi Savrojgar Program : Becoming a leading resource centre of knowledge
                management pertaining to various aspects of entrepreneurship. Promote
                entrepreneurship through education, training, applied research and
                institution-building. Augment the pool of entrepreneurs in different sectors and
                constituencies in accordance with national priorities and programmes. Assist in
                capacity building, training and institution in the field of entrepreneurship with
                focus on innovation, incubation and digitalization at national and international
                levels.
              </p>
            </div>
          </div>
          <div className="flex flex-col md:flex-row border-4 border-dark p-6 gap-4 rounded-2xl">
            <div className="md:w-[60%] w-full h-full">
              <img className="" src="program3.svg" alt="" />
            </div>
            <div className="flex flex-col space-y-4 w-full">
              <p className="font-bold">Skill Development Program</p>
              <div className="text-justify  flex flex-col gap-2 h-40 overflow-y-auto scrollbar">
                <p className="">
                  Skill Development Cell has been entrusted the accountability to train youth by
                  providing them skills through AICTE approved Colleges/Registered facilitators with
                  objective for enhancing their Employment/ Self-Employment opportunities. The cell
                  is running various schemes to meet its objectives.
                </p>
                <p>
                  Major schemes are- Pradhan Mantri Kaushal Vikas Yojana for Technical Institutes
                  (PMKVY-TI), Employability Enhancement Training Programme (EETP), National
                  Employability Enhancement Mission (NEEM), AICTE-Startup Policy, Skill Assessment
                  Matrix for Vocational Advancement of Youth (SAMVAY), Leadership Development
                  Programs, etc.
                </p>
              </div>
            </div>
          </div>
          <div className="flex flex-col md:flex-row border-4 border-dark p-6 gap-4 rounded-2xl">
            <div className="md:w-[60%] w-full h-full">
              <img className="" src="program4.svg" alt="" />
            </div>
            <div className="flex flex-col space-y-4 w-full">
              <p className="font-bold">Employment and Councelling Center</p>
              <p className="text-justify h-40 overflow-y-auto scrollbar">
                Yuva udhyemi savrojgar : Empowerment and Career Counselling empowers individuals to
                have positive outlook. It helps individuals to solve their confusion related to
                career and helps accomplishing the long term goals. Empowerment & Career Counselors
                encourage individuals to understand their role and the obligations they have towards
                their career path. In many ways career counselling helps the individual determine
                their strengths and weakness in a specific area which can help individuals avoid
                making wrong career choices.
              </p>
            </div>
          </div>
        </div>
      </Section>
    </div>
  );
};

export default ProgramCard;
