'use client'
import SwiperButton from "@/components/Button/SwiperButton";
import { useRef } from "react";
import BlogsSlider from "./components/Slider";

function Blogs() {
    const sliderRef = useRef<any>();
    return (
        <div className="flex flex-col gap-8 items-center xl:mt-10 xl:w-full">
            <div className="flex w-full justify-center lg:px-6 xl:px-0">
                <div className="flex flex-col gap-4 items-center px-10 lg:px-0 lg:w-full lg:items-start">
                    <span id="aura-blogs" className="text-light-yellow font-normal text-center text-sm xl:text-start xl:text-xl font-jetBrains-mono">AURA'S BLOG</span>
                    <h3 className="text-white text-center font-ppmori-semibold text-[28px] font-semibold leading-9">Discover the future of Web3</h3>
                </div>
                <div className="hidden lg:flex">
                    <SwiperButton onClickPrev={() => sliderRef.current?.slidePrev()} onClickNext={() => sliderRef.current?.slideNext()} />
                </div>
            </div>
            <div className="pl-6 w-[calc(100vw_-_6px)] xl:pl-0">
                <BlogsSlider ref={sliderRef} />
            </div>
        </div>
    );
}

export default Blogs;