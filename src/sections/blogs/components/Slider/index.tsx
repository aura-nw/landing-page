'use client'

import Card from '../Card';
import { A11y, Navigation, Pagination, Scrollbar } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import img_cosmos from '@/assets/images/img_cosmos.png';
import img_gateio from '@/assets/images/img_gateio.png';
import img_nft from '@/assets/images/img_nft.png';

const blogsData = [{
    img: img_cosmos,
    title: "Announcement",
    description: "Monsterra, the first interchain GameFi on Cosmos via Aura Network"
},
{
    img: img_nft,
    title: "Announcement",
    description: "Monsterra, the first interchain GameFi on Cosmos via Aura Network"
},
{
    img: img_gateio,
    title: "Announcement",
    description: "Monsterra, the first interchain GameFi on Cosmos via Aura Network"
}]



export default function BlogsSlider() {
    return (
        <Swiper
            modules={[ Pagination, A11y]}
            spaceBetween={16}
            slidesPerView="auto"
            pagination={{
                clickable: true,
            }}
            onSwiper={(swiper) => console.log(swiper)}
            onSlideChange={() => console.log('slide change')}
        >
            {blogsData.map((blog, i) => (
                <SwiperSlide key={i}><Card data={blog} /></SwiperSlide>
            ))}
        </Swiper>
    )
}
