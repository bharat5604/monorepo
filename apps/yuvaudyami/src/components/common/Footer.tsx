import React from "react";
import { Section } from "../Layout";
import { WalletIcon } from "@heroicons/react/24/solid";
import Link from "next/link";
import {
  FaFacebook,
  FaLinkedin,
  FaYoutube,
  FaGooglePlusG,
  FaTwitter,
  FaInstagram,
  FaAddressBook,
  FaPinterest,
} from "react-icons/fa";

type Props = {};

function Footer({}: Props) {
  return (
    <div className="bg-dark py-4">
      <Section>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4 py-10">
          <div className="flex flex-col gap-3">
            <h1 className="font-bold text-white text-xl">
              Yuva udyami swarojgar
            </h1>
            <hr />
            <p className="text-justify text-white">
              युवा उद्यमी स्वरोजगार, उद्यमशीलता एवम रोजगार को बढ़ावा देने वाली
              विभिन्न विभाग के विभिन्न सरकारी योजनाओं को समन्वित करके ग्रामीण
              भारत को आत्मनिर्भर बनाने के लिए युवा उद्यमी स्वरोजगार द्वारा
              कार्यान्वित किया गया है। इस योजना के तहत देश के सभी क्षेत्रो में
              सभी बेरोजगार युवाओ को रोजगार देने के लिए कदम उठाये गए है
            </p>
          </div>
          <div className="flex flex-col gap-3">
            <h1 className="font-bold text-white text-xl">Quick Links</h1>
            <hr />
            <ul className="flex flex-col gap-2 text-white">
              <Link href="/privacy">Privacy policy</Link>
              <Link href="/terms">Terms & Condition</Link>
              <Link href="/refund">Cancellation & Refund & Return Policy</Link>

              <Link href="/disclaimer">Disclaimer</Link>
              <Link href="/about">About</Link>
              <Link href="/faq">Faq</Link>
            </ul>
          </div>
          <div className="flex flex-col gap-3">
            <h1 className="font-bold text-white text-xl">Follow Up</h1>
            <hr />
            <div className="grid grid-cols-3 gap-4">
              <Link href="https:/www.facebook.com/profile.php?id=100089457668487">
                <FaFacebook size={30} className="text-white cursor-pointer " />
              </Link>

              <Link href="https:/www.instagram.com/yuvaudyami/">
                <FaInstagram size={30} className="text-white cursor-pointer" />
              </Link>

              <Link href="https:/www.linkedin.com/in/yuva-udyami-45463a261/">
                <FaLinkedin size={30} className="text-white cursor-pointer" />
              </Link>

              <Link href="https:/twitter.com/UdyamiYuva">
                <FaTwitter size={30} className="text-white cursor-pointer" />
              </Link>

              <Link href="https:/in.pinterest.com/yuvaudyami/">
                <FaPinterest size={30} className="text-white cursor-pointer" />
              </Link>

              <FaYoutube size={30} className="text-white cursor-pointer" />
            </div>
          </div>
          <div className="flex flex-col gap-3">
            <h1 className="font-bold text-white text-xl">contact us</h1>
            <hr />
            <div className="flex flex-col gap-2 text-white">
              <p className="text-justify">test</p>
              <p>phone: 12300 5648</p>
              <p>Timing: Monday - Sunday 9:30 AM - 7 PM</p>
              <p>emailk: support@yuvaudhyemi.org</p>
            </div>
          </div>
        </div>
      </Section>
    </div>
  );
}

export default Footer;
