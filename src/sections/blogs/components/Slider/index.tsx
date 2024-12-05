'use client'

import GhostContentAPI from '@tryghost/content-api';
import { forwardRef, useEffect, useState } from 'react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { A11y, Navigation, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import useWindowSize from '../../../../hooks/useWindowSize';
import Card, { Post } from '../Card';

const BlogsSlider = forwardRef((props, ref: any) => {
    const { isMobile } = useWindowSize();
    const [sliderReach, setSliderReach] = useState<string>("start")
    const [posts, setPosts] = useState<Post[]>([])

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

    useEffect(() => {
        const api = new GhostContentAPI({
            url: 'https://auranetwork.ghost.io',
            key: 'fdf46d36e3502cde83a5021c73',
            version: "v5.0"
        });

        api.posts.browse({
            limit: 5,
            include: "tags"
        })
            .then((posts) => {
                const listPosts = posts.map((post) => ({
                    id: post.id ?? '',
                    title: post.title ?? '',
                    featureImage: post.feature_image ?? '',
                    tag: post.tags ? (post.tags[0].name ?? '') : '',
                    url: post.url ?? ''
                }))
                setPosts(listPosts)
            })
            .catch((err) => {
                console.error(err);
            });
    }, [])

    return (
        <Swiper
            modules={[Navigation, Pagination, A11y]}
            spaceBetween={isMobile ? 20 : 32}
            slidesPerView="auto"
            pagination={{
                clickable: true,
                enabled: false
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
            onSlideChange={(element) => {
                if (!element.isBeginning && !element.isEnd) {
                    setSliderReach('');
                }
            }}
        >
            {posts.map((post: Post, i: number) => (
                <SwiperSlide key={post.id} className={`${ i === 0 && 'xl:ml-[calc((100vw_-_1408px)_/_2)]'} w-[318px] sm:w-[420px]`}><Card post={post} /></SwiperSlide>
            ))}
        </Swiper>
    );
});

BlogsSlider.displayName = 'BlogsSlider';

export default BlogsSlider;
