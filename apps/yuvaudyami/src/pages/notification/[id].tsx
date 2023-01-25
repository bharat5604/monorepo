import { useRouter } from "next/router";
import React from "react";
import { Section } from "../../components/Layout";

type Props = {};

function NotificationDetails({}: Props) {
  const router = useRouter();
  const { title, date, time, description } = router.query;
  return (
    <Section>
      <div className="py-8 lg:py-16 space-y-10 text-center">
        <div className="space-y-3">
          <p className="font-bold text-2xl">{title}</p>
          <div className="w-1/12 mx-auto border border-dark"></div>
          <p>
            {date}, {time}
          </p>
        </div>
        <p className="text-xl text-justify font-medium bg-dark/5 p-8 rounded-lg">
          {description}
        </p>
      </div>
    </Section>
  );
}

export default NotificationDetails;
