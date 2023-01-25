import { Fragment, useState } from "react";
import { Accordion, AccordionHeader, AccordionBody } from "@material-tailwind/react";
import { Section } from "../Layout";
import Link from "next/link";

function AccordionTest() {
  const [open, setOpen] = useState(0);

  const handleOpen = (value: any) => {
    setOpen(open === value ? 0 : value);
  };

  return (
    <Fragment>
      <Section>
        <div className="my-6">
          <div>
            <p className="text-center font-bold text-light text-4xl">Frequent Asked Questions</p>
          </div>
          <Accordion className="" open={open === 1}>
            <AccordionHeader onClick={() => handleOpen(1)}>
              What is the Yuva udyami swarojgar ?
            </AccordionHeader>
            <AccordionBody>
              <div>
                <p className="text-justify">
                  Yuva udyami swarojgar; a government Registered Non-Profit Organization for the
                  enhancement the standard of living of societies.
                </p>
              </div>
            </AccordionBody>
          </Accordion>
          <Accordion open={open === 2}>
            <AccordionHeader onClick={() => handleOpen(2)}>
              What is the Working areas of Yuva udyami swarojgar ?
            </AccordionHeader>
            <AccordionBody>
              <div>
                <ul className="flex flex-col gap-2">
                  <li>
                    1. Government Project Implementation based on Employability through Skill
                    Development.
                  </li>
                  <li>
                    2. Training Partner of Ministry of skill Development and entrepreneurship.
                  </li>
                  <li>3. Training Partner of Day-NULM (Ministry of Housing and Urban Affairs).</li>
                  <li> 4. Education and protection of Right to Education Act.</li>
                  <li> 5. Employability.</li>
                </ul>
              </div>
            </AccordionBody>
          </Accordion>
          <Accordion open={open === 3}>
            <AccordionHeader onClick={() => handleOpen(3)}>
              How does Yuva udyami swarojgar co-ordinate with others aid agency to implement
              Government Project ?
            </AccordionHeader>
            <AccordionBody>
              <div>
                <p>
                  We have focused on Block level in every districts of India and focus on benefits
                  of government aid will reached to grass root beneficiary.
                </p>
              </div>
            </AccordionBody>
          </Accordion>
        </div>
      </Section>
    </Fragment>
  );
}

export default AccordionTest;
