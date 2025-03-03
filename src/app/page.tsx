import Features from "@/sections/features";
import Introduction from "@/sections/introduction";
import Tutorials from "@/sections/tutorials";
import { Metadata } from "next";
import dynamic from "next/dynamic";
import AbstractionLayer from "../sections/abstraction";
import Explore from "../sections/explore";
import Parters from "../sections/partners";
import Statistics from "../sections/statistics";

import Image from "next/image";
import BuiltIn from "@/sections/built-in";
import GetStarted from "@/sections/get-started";
import Footer from "@/components/Footer";
import Enterprise from "@/sections/enterprise";
import Entertainment from "@/sections/entertainment";
import AssetIdentityProtocol from "@/sections/asset-identity-protocol";
import GovernmentFramework from "@/sections/government-framework";
const Blogs = dynamic(() => import("../sections/blogs"));

export const metadata: Metadata = {
  title: "The RWA Chain for Enterprise, Entertainment & Government",
  description:
    "Aura Network is the dedicated RWA chain designed for the next generation of enterprise, entertainment, and government innovation, delivering enhanced efficiency, transparency, and accessibility",
  openGraph: {
    images: "https://aura.network/img_thumb.webp",
  },
};

export default function Home() {
  return (
    <>
      <Introduction />
      <div className="flex min-h-screen flex-col items-center">
        <div className="flex flex-col gap-0 w-full items-center">
          <Parters />
          <BuiltIn />
          <AssetIdentityProtocol />
          <Enterprise />
          <Entertainment />
          <GovernmentFramework />
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
