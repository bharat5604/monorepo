import { Fragment, useState } from "react";
import { Accordion, AccordionHeader, AccordionBody } from "@material-tailwind/react";
import { Section } from "../Layout";
import Link from "next/link";

function Test() {
  const [open, setOpen] = useState(0);

  const handleOpen = (value: any) => {
    setOpen(open === value ? 0 : value);
  };

  return (
    <Fragment>
      <Section>
        <Accordion className="" open={open === 1}>
          <AccordionHeader onClick={() => handleOpen(1)}>Data Entry Operator</AccordionHeader>
          <AccordionBody>
            <div className="flex flex-col gap-4">
              <div>
                <p className="font-bold">Description</p>
                <p>
                  We&apos;re not always in the position that we want to be at. We&apos;re constantly
                  growing. We&apos;re constantly making mistakes. We&apos;re constantly trying to
                  express ourselves and actualize our dreams.
                </p>
              </div>
              <div>
                <p className="font-semibold py-1">Fee for General/OBC</p>
                <p>350/- Rs</p>
              </div>
              <div>
                <p className="font-semibold py-1">Exam Date</p>
                <p>Feburary , March</p>
              </div>
              <div>
                <p className="font-semibold py-1">Salary</p>
                <p>Rs-12000/</p>
              </div>
              <div>
                <p className="font-semibold py-1">Last Date</p>
                <p>
                  15 th January 2023 (Madhye Pradesh or Chhatisgarh) 15 th January 2023 (West
                  Bengal) 15 th January 2023 (Uttar Pradesh)
                </p>
              </div>
              <div className="">
                <Link
                  href="/applynow"
                  className="bg-dark font-semibold text-white px-3 py-2 rounded-xl"
                >
                  Apply Now
                </Link>
              </div>
            </div>
          </AccordionBody>
        </Accordion>
        <Accordion open={open === 2}>
          <AccordionHeader onClick={() => handleOpen(2)}>
            District Program Executive
          </AccordionHeader>
          <AccordionBody>
            We&apos;re not always in the position that we want to be at. We&apos;re constantly
            growing. We&apos;re constantly making mistakes. We&apos;re constantly trying to express
            ourselves and actualize our dreams.
          </AccordionBody>
        </Accordion>
        <Accordion open={open === 3}> 
          <AccordionHeader onClick={() => handleOpen(3)}>State Program Executive</AccordionHeader>
          <AccordionBody>
            We&apos;re not always in the position that we want to be at. We&apos;re constantly
            growing. We&apos;re constantly making mistakes. We&apos;re constantly trying to express
            ourselves and actualize our dreams.
          </AccordionBody>
        </Accordion>
      </Section>
    </Fragment>
  );
}

export default Test;
