function SwiperButton({ onClickPrev, onClickNext }: any) {
    return (
        <div className="flex gap-6 items-center">
            <button id="btn-swiper-prev" className="bg-dark-charcoal rounded-full w-14 h-14 flex justify-center items-center" onClick={onClickPrev}>
                <svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M19.5 12H5.5" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                    <path d="M12.5 5L5.5 12L12.5 19" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                </svg>
            </button>

            <button id="btn-swiper-next" className="bg-dark-charcoal rounded-full w-14 h-14 flex justify-center items-center" onClick={onClickNext}>
                <svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M5.5 12H19.5" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                    <path d="M12.5 5L19.5 12L12.5 19" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                </svg>
            </button>
        </div>
    );
}

export default SwiperButton;