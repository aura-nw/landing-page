type Card = {
    value: string,
    title: string
}

type CardProps = {
    data: Card,
    className?: string
}

function Card({ data, className }: CardProps) {
    const { value, title } = data
    return (
        <div className={`h-[216px] lg:h-[352px] max-w-[344px] w-[344px] lg:w-[427px] lg:min-w-[427px] p-8 lg:px-14 lg:pt-20 lg:pb-14 rounded-3xl bg-dark-charcoal flex flex-col gap-6 justify-between hover:pb-[72px] card statistic-card group ${className}`}>
            <div className="h-16 w-16">
                <div className="w-12 h-12 lg:h-16 lg:w-16 flex justify-center items-center rocket-container group-hover:z-[1] group-hover:bg-brand-gradient bg-blur-brand-linear-gradient rounded-full">
                    <svg className="w-[18px] h-[18px] lg:h-6 lg:w-6" id="ic_rocket" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                        <path className="group-hover:fill-dark-charcoal" fill-rule="evenodd" clip-rule="evenodd" d="M9.315 7.58365C12.1956 3.88296 16.6946 1.50021 21.75 1.5C21.9489 1.49999 22.1397 1.57901 22.2803 1.71966C22.421 1.86031 22.5 2.05108 22.5 2.25C22.5 7.30564 20.1173 11.805 16.4165 14.6859C16.4715 15.0329 16.5 15.3883 16.5 15.75C16.5 19.4779 13.4779 22.5 9.75 22.5C9.33579 22.5 9 22.1642 9 21.75V17.6185C8.99075 17.6118 8.98163 17.6049 8.97264 17.5978C8.02063 16.8429 7.15799 15.9803 6.40312 15.0282C6.39577 15.019 6.38866 15.0096 6.38179 15H2.25C1.83579 15 1.5 14.6642 1.5 14.25C1.5 10.5221 4.52208 7.5 8.25 7.5C8.61198 7.5 8.96772 7.52856 9.315 7.58365ZM15 6.75C13.7574 6.75 12.75 7.75736 12.75 9C12.75 10.2426 13.7574 11.25 15 11.25C16.2426 11.25 17.25 10.2426 17.25 9C17.25 7.75736 16.2426 6.75 15 6.75Z" fill="url(#paint0_linear_566_10628)" />
                        <path className="group-hover:fill-dark-charcoal" d="M5.26036 17.2418C5.59237 16.9942 5.66074 16.5242 5.41306 16.1922C5.16539 15.8602 4.69546 15.7918 4.36345 16.0395C3.08209 16.9954 2.25 18.5256 2.25 20.2499C2.25 20.5255 2.27129 20.7966 2.31246 21.0615C2.36259 21.3842 2.61574 21.6373 2.93842 21.6875C3.20336 21.7286 3.47445 21.7499 3.75 21.7499C5.47434 21.7499 7.00452 20.9178 7.9604 19.6365C8.20808 19.3045 8.13971 18.8345 7.8077 18.5869C7.47569 18.3392 7.00576 18.4075 6.75809 18.7396C6.07313 19.6577 4.98081 20.2499 3.75 20.2499C3.75 19.0191 4.34218 17.9268 5.26036 17.2418Z" fill="url(#paint1_linear_566_10628)" />
                        <defs>
                            <linearGradient id="paint0_linear_566_10628" x1="16.1235" y1="18.0986" x2="10.9895" y2="4.72554" gradientUnits="userSpaceOnUse">
                                <stop stop-color="#FFD569" />
                                <stop offset="0.515056" stop-color="#FC8E4F" />
                                <stop offset="1" stop-color="#FF697B" />
                            </linearGradient>
                            <linearGradient id="paint1_linear_566_10628" x1="16.1235" y1="18.0986" x2="10.9895" y2="4.72554" gradientUnits="userSpaceOnUse">
                                <stop stop-color="#FFD569" />
                                <stop offset="0.515056" stop-color="#FC8E4F" />
                                <stop offset="1" stop-color="#FF697B" />
                            </linearGradient>
                        </defs>
                    </svg>
                </div>
            </div>
            <div className="flex flex-col gap-3">
                <span className="font-ppmori-semibold text-[40px] lg:text-[48px] font-semibold leading-[48px] lg:leading-[64px]">{value}</span>
                <span className="text-medium-gray text-xl lg:text-2xl font-normal leading-6 lg:leading-8">{title}</span>
            </div>
        </div>
    );
}

export default Card;