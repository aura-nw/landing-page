'use client'
import ic_arrow_left from "@/assets/icons/ic_arrow_left.svg";
import ic_arrow_right from "@/assets/icons/ic_arrow_right.svg";
import Image from "next/image";
import { useSwiper } from "swiper/react";

function SwiperButton() {
    const swiper = useSwiper()
    return (
        <div className="flex gap-6">
            <button className="bg-dark-charcoal rounded-full w-14 h-14 flex justify-center items-center" onClick={() => {swiper.slidePrev()}}>
                <Image src={ic_arrow_left} alt="ic_arrow_left" />
            </button>
            <button className="bg-dark-charcoal rounded-full w-14 h-14 flex justify-center items-center" onClick={() => {swiper.slideNext()}}>
                <Image src={ic_arrow_right} alt="ic_arrow_right" />
            </button>
        </div>
    );
}

export default SwiperButton;