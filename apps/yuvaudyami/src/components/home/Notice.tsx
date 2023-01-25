import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
import { Section } from "../Layout";

type Props = {};

const newsDetails = [
  {
    title:
      "TRAI extends last date to receive Comments / Counter-Comments on Consultation Paper on ‘Licensing Framework and Regulatory Mechanism for Submarine Cable Landing in India’",
    date: "09/09/2022",
    time: "5:00 pm",
    description:
      "The Telecom Regulatory Authority of India (TRAI) had released a Consultation Paper on ‘Licensing Framework and Regulatory Mechanism for Submarine Cable Landing in India’on 23rdDecember 2022. The last date for receiving comments on the issues raised in the Consultation Paper from the stakeholders was fixed as 20th January 2023 and for Counter-Comments as 03rd February 2023.      Keeping in view of the requests received from stakeholders/ associations for further extension of time for submission of comments and counter-comments, it has been decided to extend the last date for submission of written comments and counter -comments up to 10th February, 2023 and   24th February, 2023 respectively.The Comments / Counter-Comments may be sent, preferably in electronic form at advbbpa@trai.gov.in with a copy to jtadvbbpa-1@trai.gov.in. For any further clarification / information, Shri Sanjeev Kumar Sharma, Advisor (Broadband and Policy Analysis), TRAI may be contacted at Tel. No. +91-11-23236119.",
  },
  {
    title: "B.Tech",
    date: "09/09/2022",
    time: "5:30 pm",
    description:
      "What God helps you get a job? The bearer of strength and loyalty, lord hanuman is the one who can present many job opportunities to help you get a job immediately. Here's what you can do. Reciting the mantra, 'Om Shree Hanumante Namaha', 21 times a day is one of the best remedies to get a job immediate",
  },
  {
    title:
      "Prime Minister Shri Narendra Modi addressed the United Nations World Geospatial International Congress, via video message, today.",
    date: "13/10/2022",
    time: "5:30 pm",
    description: `Welcoming International Delegates, the Prime Minister said, “the people of India are happy to host you on this historic occasion as we build our future together.” Expressing his happiness at the conference happening in Hyderabad, the Prime Minister said that the city is known for its culture and cuisine, its hospitality and hi-tech vision. The Prime Minister pointed out that the theme of the conference, 'Geo-enabling the Global Village: No one should be left behind' can be seen in the steps India has taken over the last few years. “We have been working on a vision of Antyodaya which means empowering the last person at the last mile, in a mission mode” he said. 450 million unbanked people, a population greater than that of USA, were brought under banking net and 135 million people, about twice the population of France, were given insurance, the Prime Minister elaborated. Sanitation facilities were taken to 110 million families and tap water connections to over 60 million families, he added, underlining that “India is ensuring no one is left behind.” Technology and talent are the two pillars that are key to India’s development journey. Technology brings transformation, the Prime Minister said, citing the example of JAM trinity which has delivered welfare benefits to 800 million people seamlessly and of the tech platform that powered the world’s largest vaccination drive. “In India, technology is not an agent of exclusion. It is an agent of inclusion,” Shri Modi said. The Prime Minister highlighted the role of geospatial technology in driving inclusion and progress. The role of technology in schemes like SVAMITVA and housing, and the outcomes in terms of property ownership and women empowerment, have a direct impact on the UN’s Sustainable Development Goals on poverty and gender equality, the Prime Minister emphasized. The PM GatiShakti Master Plan is being powered by geo-spatial technology, as is the Digital Ocean platform, he added. India has already set an example in sharing the benefits of geo-spatial technology, the Prime Minister stated, citing the example of the South Asia Satellite for facilitating communication in India’s neighbourhood. “India is a young nation with great innovative spirit,” the Prime Minister said, highlighting the role of talent as the second pillar in India’s journey. India is one of the top startup hubs in the world, he added, with the number of unicorn startups having almost doubled since 2021- a testimony to India’s young talent. One of the most important freedoms is the freedom to innovate, the Prime Minister said, and this has been ensured for the geospatial sector. Collection, generation and digitization of geospatial data have now been democratized, he added. Such reforms have been accompanied with a boost to the drone sector and opening up of the space sector for private participation, along with 5G taking off in India. According to Prime Minister Modi, the COVID-19 pandemic should have been a wake-up call for the call in taking everyone along. There is a need for an institutional approach by the international community to help each other during a crisis, he emphasized. “Global organisations like the United Nations can lead the way in taking resources to the last mile in every region,” he highlighted. Hand-holding and technology transfer are also crucial in fighting climate change, the Prime Minister added, suggesting that best practices may be shared for saving our planet. The Prime Minister underscored the endless possibilities that geo-spatial technology offers. These include sustainable urban development, managing and mitigating disasters, tracking the impact of climate change, forest management, water management, stopping desertification and food security. He expressed his wish that this conference becomes a platform to discuss developments in such important areas. In conclusion, the Prime Minister expressed his optimism at the occasion. “With the stakeholders of the global geo-spatial industry coming together, with the policy makers and academic world interacting with each other, I am confident that this conference will help steer the global village into a new future,” he added.`,
  },
  {
    title:
      "Lok Sabha Speaker Shri Om Birla to address the National Conference on Tourist Police Scheme on 19th Oct",
    date: "09/09/2022",
    time: "5:00 pm",
    description: `Ministry of Tourism in co-ordination with MHA and BPR&D is organizing the conference Agenda of the National Conference is implementation of uniform Tourist Police Scheme at pan India level for developing the tourist specific policing Union Minister Shri G. Kishan Reddy, MoS Shri Shripad Yesso Naik and MoS Shri Nityanand Rai will also address the conference Ministry of Tourism in co-ordination with Ministry of Home Affairs and Bureau of Police Research and Development (BPR&D) is organizing National Conference of Director Generals/ Inspector Generals (DGs/IGs) of Police Department of all States/UTs in connection with implementation of Uniform Tourist Police Scheme, on 19th October, 2022 at Vigyan Bhawan, New Delhi. Speaker of Lok Sabha, Shri Om Birla will be the Chief-guest for the conference. The conference will be attended by Minister of Tourism, Culture & DONER, Shri G. Kishan Reddy. Minister of State for Tourism, Shri Shripad Yesso Naik and Minister of State for Home Affairs, Shri Nityanand Rai. Shri Ajay Kumar Bhalla, Secretary (Home), Shri Arvind Singh, Secretary (Tourism), Shri Balaji Srivastava, Director General (BPR&D, MHA), Joint Secretary (Foreigners division, MHA), State Tourism Secretaries of Rajasthan, Kerala, Goa & Meghalaya, DGs/ IGs of all States/UTs and other senior officials of MHA, MoT, BPR&D will also be present during the conference. Agenda of the National Conference of DGs/IGs of Police department of all States/UTs is implementation of uniform Tourist Police Scheme at pan India level for developing the tourist specific policing with suitable roles and responsibility and training aspects, to provide safer ecosystem to the foreign and domestic tourists in and around tourist destinations, as safety and security and the first & foremost priority of any tourist. During the conference, the report on ‘Tourist Police Scheme’ prepared by BPR&D will be deliberated and BPR&D would be sharing the finding and recommendations of the report with MHA, MOT and representatives of State Govts/ UT Administrations. The idea of the conference is to develop a dedicated team of Police personnel by States/ UTs to work towards talking care of the requirements of the foreign & domestic tourists, their safety & security. Objective of the National Conference on Tourist Police Scheme is to bring Ministry of Tourism, Ministry of Home Affairs, Bureau of Police Research & Development and State Govts/ UT Administration on the same platform, so that they may work together in close coordination with the State/UT Police department and sensitize them about the specific requirements of the foreign & domestic tourists for effective implementation of Uniform Tourist Police Scheme at pan-India level. This would change the safety & security related perception of India at global level and will help in making India a must visit destination around the globe.`,
  },
];

const notificationDetails = [
  {
    title: "राजस्थान में नौकरीओं की भरमार अब राजस्थान से बेरोजगारी होगी ख़तम",
    date: "09/09/2022",
    time: "5:00 pm",
    description:
      "The bearer of strength and loyalty, lord hanuman is the one who can present many job opportunities to help you get a job immediately. Here's what you can do. Reciting the mantra, 'Om Shree Hanumante Namaha', 21 times a day is one of the best remedies to get a job immediately.",
  },
];

const Notice = (props: Props) => {
  const router = useRouter();
  const handleNews = (id: any, item: any) => {
    router.push(
      {
        pathname: `/news/${id}`,
        query: item,
      },
      `/news/${id}`
    );
  };
  const handleNotifications = (id: any, item: any) => {
    router.push(
      {
        pathname: `/notification/${id}`,
        query: item,
      },
      `/notification/${id}`
    );
  };
  return (
    <div className="py-10">
      <Section>
        <div className="flex flex-col md:flex-row gap-6">
          <div className="border-4 border-dark w-full h-96 rounded-xl">
            <div className="bg-dark py-4 text-center text-white text-xl font-semibold">
              <p>News</p>
            </div>
            <div className="list-inside space-y-3 h-72 overflow-y-scroll overflow-x-hidden scrollbar list-disc m-4">
              {newsDetails.map((item, index) => (
                <>
                  <div
                    onClick={() => handleNews(index + 1, item)}
                    className="flex cursor-pointer justify-between"
                  >
                    <div className="font-semibold w-[80%] text-lg space-x-2 flex text-dark items-start">
                      <div className="w-[5%] h-2 rounded-full mt-2 bg-dark"></div>
                      <p className="w-[95%]"> {item?.title}</p>
                    </div>
                    <p className="text-xs w-[20%] mt-2">
                      {item?.date}, {item?.time}
                    </p>
                  </div>
                </>
              ))}
            </div>
          </div>
          <div className="border-4 border-dark w-full h-96 rounded-xl">
            <div className="bg-dark py-4 text-center text-white text-2xl font-semibold">
              <p>Notification</p>
            </div>
            <div className="list-inside space-y-3 h-72 overflow-y-scroll overflow-x-hidden scrollbar list-disc m-4">
              {notificationDetails.map((item, index) => (
                <>
                  <div
                    onClick={() => handleNotifications(index + 1, item)}
                    className="flex cursor-pointer justify-between"
                  >
                    <div className="font-semibold w-[80%] text-lg space-x-2 flex text-dark items-start">
                      <div className="w-[5%] h-2 rounded-full mt-2 bg-dark"></div>
                      <p className="w-[95%]"> {item?.title}</p>
                    </div>
                    <p className="text-xs w-[20%] mt-2">
                      {item?.date}, {item?.time}
                    </p>
                  </div>
                </>
              ))}
            </div>
          </div>
        </div>
      </Section>
    </div>
  );
};

export default Notice;
