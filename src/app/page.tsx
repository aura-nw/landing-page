import Features from "@/sections/features";
import Introduction from "@/sections/introduction";
import Tutorials from "@/sections/tutorials";
import { Metadata } from "next";
import dynamic from "next/dynamic";
import AbstractionLayer from "../sections/abstraction";
import Explore from "../sections/explore";
import Parters from "../sections/partners";
import Statistics from "../sections/statistics";
import ic_background from "@/assets/images/img_bg_desktop_2.png";
import Image from "next/image";
import BuiltIn from "@/sections/built-in";
import GetStarted from "@/sections/get-started";
import Footer from "@/components/Footer";
import Enterprise from "@/sections/enterprise";
import Entertainment from "@/sections/entertainment";
const Blogs = dynamic(() => import("../sections/blogs"));

export const metadata: Metadata = {
  title: "Aura Network - The Abstraction Layer For Programmable IPs",
  description:
    "Aura Network is an Abstraction Layer for Intellectual Property (IP), aiming to revolutionize RWA areas.",
  openGraph: {
    images: "https://aura.network/img_thumb.png",
  },
};

export default function Home() {
  return (
    <>
      <div className="w-full m-auto h-[665px] sm:h-[870px] bg-blue relative">
        <div className="absolute w-full h-full inset-0 bg-[#2671cf]"></div>
        <Image
          className="absolute inset-0 w-full h-full object-cover mix-blend-soft-light"
          src={ic_background}
          alt="bg"
        />
        <div className="relative z-10 main-container">
          <Introduction />
        </div>
      </div>

      <div className="flex min-h-screen flex-col items-center">
        <div className="flex flex-col gap-0 w-full items-center">
          <Parters />
          <BuiltIn />
          <Enterprise />
          <Entertainment />
          {/* <Explore /> */}
          {/* <AbstractionLayer /> */}
          <Statistics />
          {/* <Features /> */}
          <Blogs />
          <GetStarted />
        </div>
      </div>
      {/* <Footer /> */}
    </>
  );
}
