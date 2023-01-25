import Head from "next/head";
import React from "react";
import Footer from "../common/Footer";
import Navbar from "../common/Navbar";

type Props = {
  children: JSX.Element;
};

function Layout({ children }: Props) {
  return (
    <div className="antialiased mx-auto font-[Raleway]">
      <Head>
        <title>युवा उद्यमी स्वरोजगार। डेवलपमेंट ऑफ़ इंडिया। रोजगार। ग्रामीण। शिक्षा</title>
        <meta
          name="keywords"
          content="rojgar yojana, new Startup, Entrepreneur Development Center, Empowerment Education System, Skill Development Program, Employment and Councelling Center, education minister of india, pmkvy yojana, atmanirbhar bharat abhiyan"
        />
        <meta
          name="description"
          content=" युवा उधयेमी सवरोजगार का उदेश्ये हर तरह से भारत देश को सक्षम करने का है , ग्रामीण क्षेत्रों में बढ़ती बेरोजगारी का समाधान करने, ग्रामीण शिक्षितों का शहरों की ओर पलायन को हतोत्साहित करने तथा अधिक से अधिक रोजगार का अवसर गॉव में ही उपलब्ध कराने के ध्यान दिया है"
        />
        <link rel="icon" href="/yuva-udhyemi.png" />
      </Head>
      <div className="min-h-screen flex flex-col justify-between">
        <div>
          <div className="sticky top-0 z-50">
            <Navbar />
          </div>
          <main>{children}</main>
        </div>
        <Footer />
      </div>
    </div>
  );
}

export default Layout;
