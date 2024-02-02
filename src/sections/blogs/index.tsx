'use client'
import SwiperButton from "@/components/Button/SwiperButton";
import { useRef } from "react";
import BlogsSlider from "./components/Slider";

function Blogs() {
    const sliderRef = useRef<any>();
    return (
        <div className="flex flex-col gap-8 items-center xl:mt-10 xl:w-full">
            <div className="flex w-full justify-center">
                <div className="flex flex-col gap-4 items-center px-10 xl:px-0 xl:w-full xl:items-start">
                    <span className="text-light-yellow font-normal text-center xl:text-start xl:text-xl">Aura's Blog</span>
                    <span className="text-white text-center font-ppmori-semibold text-[28px] font-semibold leading-9">Discover the future of Web3</span>
                </div>
                <div className="hidden xl:flex">
                    <SwiperButton onClickPrev={() => sliderRef.current?.slidePrev()} onClickNext={() => sliderRef.current?.slideNext()} />
                </div>
            </div>
            <div className="w-screen pl-6 xl:pl-0 xl:w-full">
                <BlogsSlider ref={sliderRef} />
            </div>
        </div>
    );
}

export default Blogs;