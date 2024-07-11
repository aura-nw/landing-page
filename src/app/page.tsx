import Features from "@/sections/features";
import Introduction from "@/sections/introduction";
import Tutorials from "@/sections/tutorials";
import { Metadata } from "next";
import dynamic from "next/dynamic";
import AbstractionLayer from "../sections/abstraction";
import Elixir from "../sections/elixir";
import Explore from "../sections/explore";
import Parters from "../sections/partners";
import Statistics from "../sections/statistics";
const Blogs = dynamic(() => import("../sections/blogs"));

export const metadata: Metadata = {
  title: "Aura Network - The Layer 1 for emerging countries",
  description: "Aura Network is the Layer 1 for emerging countries, providing public infrastructure through modular tech stacks. Build and drive Blockchain mass adoption.",
  openGraph: {
    images: "https://aura.network/img_thumb.png",
  },
};

export default function Home() {
  return (
    <div className="bg-[url('../assets/images/img_bg_mobile_2.png')] lg:bg-[url('../assets/images/img_bg_desktop_2.png')] bg-cover bg-no-repeat">
      <div className="main-container">
        <div className="flex min-h-screen flex-col items-center mb-20 xl:mb-[120px]">
          <Introduction />
          <div className="mt-[141px] lg:mt-[246px] flex flex-col gap-20 w-full items-center">
            <Parters />
            <Elixir />
            <Explore />
            <AbstractionLayer />
            <Statistics />
            <Features />
            <Blogs />
          </div>
        </div>
      </div>
      <Tutorials />
    </div>
  )
}
