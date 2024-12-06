"use client";
import SwiperButton from "@/components/Button/SwiperButton";
import { useRef } from "react";
import BlogsSlider from "./components/Slider";
import Link from "next/link";

function Blogs() {
  const sliderRef = useRef<any>();
  return (
    <div
      className="py-[64px] sm:py-[120px] w-full"
      id="press"
    >
      <div className="main-container pb-10">
        <div className="flex justify-between w-full">
          <div className="text-[#1c1f2a] text-[40px] font-semibold font-interTight leading-[52px]">
            Press
          </div>
          <Link
            href={"https://insight.aura.network/"}
            target="_blank"
            className="group h-12 px-6 py-3 bg-white rounded-[99px] border border-[#e0dedd] justify-center items-center gap-2 inline-flex hover:bg-gray-100 transition-all"
          >
            <div className="text-[#1c1f2a] text-base font-semibold font-interTight leading-normal group-hover:text-[#2671cf]">
              View all blogs
            </div>
          </Link>
        </div>
      </div>
      {/* <div className="hidden lg:flex">
        <SwiperButton
          onClickPrev={() => sliderRef.current?.slidePrev()}
          onClickNext={() => sliderRef.current?.slideNext()}
        />
      </div> */}

      <div className="pl-6 w-[calc(100vw_-_24px)]">
        <BlogsSlider ref={sliderRef} />
      </div>
    </div>
  );
}

export default Blogs;
