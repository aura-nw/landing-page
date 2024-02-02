'use client'

import img_cosmos from '@/assets/images/img_cosmos.png';
import img_gateio from '@/assets/images/img_gateio.png';
import img_nft from '@/assets/images/img_nft.png';
import { forwardRef, useEffect, useState } from 'react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { A11y, Navigation, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import useWindowSize from '../../../../hooks/useWindowSize';
import Card from '../Card';

const blogsData = [{
    key: "cosmos",
    img: img_cosmos,
    title: "Announcement",
    description: "Monsterra, the first interchain GameFi on Cosmos via Aura Network"
},
{
    key: "nft",
    img: img_nft,
    title: "Announcement",
    description: "Monsterra, the first interchain GameFi on Cosmos via Aura Network"
},
{
    key: "gateio",
    img: img_gateio,
    title: "Announcement",
    description: "Monsterra, the first interchain GameFi on Cosmos via Aura Network"
}]


const BlogsSlider = forwardRef((props, ref: any) => {
    const { isMobile } = useWindowSize();
    const [sliderReach, setSliderReach] = useState<string>("start")

    useEffect(() => {
        const changeButtonStyle = (button: HTMLElement, isReached: boolean) => {
            if (isReached) {
                button.classList.add('bg-[#1B1916]', 'cursor-auto');
                changeStrokeColor(button, 'gray');
            } else {
                button.classList.remove('bg-[#1B1916]', 'cursor-auto');
                changeStrokeColor(button, 'white');
            }
        };

        const changeStrokeColor = (button: HTMLElement, newColor: string) => {
            const paths = button.querySelectorAll('path');
            paths.forEach(path => {
                path.setAttribute('stroke', newColor);
            });
        };

        const buttonPrev = document.getElementById('btn-swiper-prev');
        const buttonNext = document.getElementById('btn-swiper-next');

        if (buttonPrev) {
            changeButtonStyle(buttonPrev, sliderReach === 'start');
        }
        if (buttonNext) {
            changeButtonStyle(buttonNext, sliderReach === 'end');
        }
    }, [sliderReach]);

    return (
        <Swiper
            modules={[Navigation, Pagination, A11y]}
            spaceBetween={isMobile ? 16 : 32}
            slidesPerView="auto"
            pagination={{
                clickable: true,
                enabled: isMobile
            }}
            onSwiper={(swiper) => {
                ref && (ref.current = swiper);
                setSliderReach('start');

            }}
            onReachBeginning={() => {
                setSliderReach('start');
            }}
            onReachEnd={() => {
                setSliderReach('end');
            }}
        >
            {blogsData.map((blog, i) => (
                <SwiperSlide key={i}><Card data={blog} /></SwiperSlide>
            ))}
        </Swiper>
    );
});

BlogsSlider.displayName = 'BlogsSlider';

export default BlogsSlider;
