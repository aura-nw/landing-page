'use client '

import Image from "next/image";
import { A11y, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

function Slider({ data }: { data: any }) {
    return (

        <Swiper
            modules={[A11y, Navigation]}
            spaceBetween={16}
            slidesPerView="auto"
            pagination={{
                clickable: true,
            }}

        >
            <div className='flex gap-4'>
                {data.map((item: any, i: number) => {
                    return (
                        <SwiperSlide key={i}>
                            <div className='rounded-lg object-cover'>
                                <Image className='rounded-lg h-[124px] w-[275px]' width={275} height={124} alt='img_catze_1' src={item} />
                            </div>
                        </SwiperSlide>
                    )
                })}
            </div>

        </Swiper>

    );
}

export default Slider;