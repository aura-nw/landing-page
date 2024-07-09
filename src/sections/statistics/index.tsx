import Card from "./components/Card";

const statisticData = [
    {
        value: "1.5M+",
        title: "Transactions",
        img: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 7.5C10.7574 7.5 9.75 8.50736 9.75 9.75C9.75 10.9926 10.7574 12 12 12C13.2426 12 14.25 10.9926 14.25 9.75C14.25 8.50736 13.2426 7.5 12 7.5Z" fill="url(#paint0_linear_3109_1580)" />
            <path fill-rule="evenodd" clip-rule="evenodd" d="M1.5 4.875C1.5 3.83947 2.33947 3 3.375 3H20.625C21.6605 3 22.5 3.83947 22.5 4.875V14.625C22.5 15.6605 21.6605 16.5 20.625 16.5H3.375C2.33947 16.5 1.5 15.6605 1.5 14.625V4.875ZM8.25 9.75C8.25 7.67893 9.92893 6 12 6C14.0711 6 15.75 7.67893 15.75 9.75C15.75 11.8211 14.0711 13.5 12 13.5C9.92893 13.5 8.25 11.8211 8.25 9.75ZM18.75 9C18.3358 9 18 9.33579 18 9.75V9.7575C18 10.1717 18.3358 10.5075 18.75 10.5075H18.7575C19.1717 10.5075 19.5075 10.1717 19.5075 9.7575V9.75C19.5075 9.33579 19.1717 9 18.7575 9H18.75ZM4.5 9.75C4.5 9.33579 4.83579 9 5.25 9H5.2575C5.67171 9 6.0075 9.33579 6.0075 9.75V9.7575C6.0075 10.1717 5.67171 10.5075 5.2575 10.5075H5.25C4.83579 10.5075 4.5 10.1717 4.5 9.7575V9.75Z" fill="url(#paint1_linear_3109_1580)" />
            <path d="M2.25 18C1.83579 18 1.5 18.3358 1.5 18.75C1.5 19.1642 1.83579 19.5 2.25 19.5C7.65005 19.5 12.8802 20.2222 17.8498 21.5749C19.0404 21.899 20.25 21.0168 20.25 19.7551V18.75C20.25 18.3358 19.9142 18 19.5 18H2.25Z" fill="url(#paint2_linear_3109_1580)" />
            <defs>
                <linearGradient id="paint0_linear_3109_1580" x1="16.1234" y1="17.7351" x2="11.9643" y2="5.53119" gradientUnits="userSpaceOnUse">
                    <stop stop-color="#FFD569" />
                    <stop offset="0.515056" stop-color="#FC8E4F" />
                    <stop offset="1" stop-color="#FF697B" />
                </linearGradient>
                <linearGradient id="paint1_linear_3109_1580" x1="16.1234" y1="17.7351" x2="11.9643" y2="5.53119" gradientUnits="userSpaceOnUse">
                    <stop stop-color="#FFD569" />
                    <stop offset="0.515056" stop-color="#FC8E4F" />
                    <stop offset="1" stop-color="#FF697B" />
                </linearGradient>
                <linearGradient id="paint2_linear_3109_1580" x1="16.1234" y1="17.7351" x2="11.9643" y2="5.53119" gradientUnits="userSpaceOnUse">
                    <stop stop-color="#FFD569" />
                    <stop offset="0.515056" stop-color="#FC8E4F" />
                    <stop offset="1" stop-color="#FF697B" />
                </linearGradient>
            </defs>
        </svg>

    },
    {
        value: "10,000+",
        title: "Deployed smart contract",
        img: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M9.315 7.58365C12.1956 3.88296 16.6946 1.50021 21.75 1.5C21.9489 1.49999 22.1397 1.57901 22.2803 1.71966C22.421 1.86031 22.5 2.05108 22.5 2.25C22.5 7.30564 20.1173 11.805 16.4165 14.6859C16.4715 15.0329 16.5 15.3883 16.5 15.75C16.5 19.4779 13.4779 22.5 9.75 22.5C9.33579 22.5 9 22.1642 9 21.75V17.6185C8.99075 17.6118 8.98163 17.6049 8.97264 17.5978C8.02063 16.8429 7.15799 15.9803 6.40312 15.0282C6.39577 15.019 6.38866 15.0096 6.38179 15H2.25C1.83579 15 1.5 14.6642 1.5 14.25C1.5 10.5221 4.52208 7.5 8.25 7.5C8.61198 7.5 8.96772 7.52856 9.315 7.58365ZM15 6.75C13.7574 6.75 12.75 7.75736 12.75 9C12.75 10.2426 13.7574 11.25 15 11.25C16.2426 11.25 17.25 10.2426 17.25 9C17.25 7.75736 16.2426 6.75 15 6.75Z" fill="url(#paint0_linear_3109_632)" />
            <path d="M5.26036 17.2418C5.59237 16.9942 5.66074 16.5242 5.41306 16.1922C5.16539 15.8602 4.69546 15.7918 4.36345 16.0395C3.08209 16.9954 2.25 18.5256 2.25 20.2499C2.25 20.5255 2.27129 20.7966 2.31246 21.0615C2.36259 21.3842 2.61574 21.6373 2.93842 21.6875C3.20336 21.7286 3.47445 21.7499 3.75 21.7499C5.47434 21.7499 7.00452 20.9178 7.9604 19.6365C8.20808 19.3045 8.13971 18.8345 7.8077 18.5869C7.47569 18.3392 7.00576 18.4075 6.75809 18.7396C6.07313 19.6577 4.98081 20.2499 3.75 20.2499C3.75 19.0191 4.34218 17.9268 5.26036 17.2418Z" fill="url(#paint1_linear_3109_632)" />
            <defs>
                <linearGradient id="paint0_linear_3109_632" x1="16.1235" y1="18.0986" x2="10.9895" y2="4.72554" gradientUnits="userSpaceOnUse">
                    <stop stop-color="#FFD569" />
                    <stop offset="0.515056" stop-color="#FC8E4F" />
                    <stop offset="1" stop-color="#FF697B" />
                </linearGradient>
                <linearGradient id="paint1_linear_3109_632" x1="16.1235" y1="18.0986" x2="10.9895" y2="4.72554" gradientUnits="userSpaceOnUse">
                    <stop stop-color="#FFD569" />
                    <stop offset="0.515056" stop-color="#FC8E4F" />
                    <stop offset="1" stop-color="#FF697B" />
                </linearGradient>
            </defs>
        </svg>

    },
    {
        value: "41,000+",
        title: "Unique active addresses",
        img: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12.3779 1.60217C12.1444 1.46594 11.8556 1.46594 11.6221 1.60217L3 6.63172L12 11.8817L21 6.63172L12.3779 1.60217Z" fill="url(#paint0_linear_3109_659)" />
            <path d="M21.75 7.93078L12.75 13.1808V22.1808L21.3779 17.1478C21.6083 17.0134 21.75 16.7668 21.75 16.5V7.93078Z" fill="url(#paint1_linear_3109_659)" />
            <path d="M11.25 22.1808V13.1808L2.25 7.93078V16.5C2.25 16.7668 2.39168 17.0134 2.6221 17.1478L11.25 22.1808Z" fill="url(#paint2_linear_3109_659)" />
            <defs>
                <linearGradient id="paint0_linear_3109_659" x1="15.8289" y1="17.8463" x2="10.5514" y2="4.88426" gradientUnits="userSpaceOnUse">
                    <stop stop-color="#FFD569" />
                    <stop offset="0.515056" stop-color="#FC8E4F" />
                    <stop offset="1" stop-color="#FF697B" />
                </linearGradient>
                <linearGradient id="paint1_linear_3109_659" x1="15.8289" y1="17.8463" x2="10.5514" y2="4.88426" gradientUnits="userSpaceOnUse">
                    <stop stop-color="#FFD569" />
                    <stop offset="0.515056" stop-color="#FC8E4F" />
                    <stop offset="1" stop-color="#FF697B" />
                </linearGradient>
                <linearGradient id="paint2_linear_3109_659" x1="15.8289" y1="17.8463" x2="10.5514" y2="4.88426" gradientUnits="userSpaceOnUse">
                    <stop stop-color="#FFD569" />
                    <stop offset="0.515056" stop-color="#FC8E4F" />
                    <stop offset="1" stop-color="#FF697B" />
                </linearGradient>
            </defs>
        </svg>

    },
    {
        value: "20+",
        title: "DApps",
        img: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g clip-path="url(#clip0_3109_746)">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M3.05493 11.1138H7.05009C7.2743 8.35058 8.1991 5.69819 9.72571 3.4036C6.16881 4.32974 3.46801 7.37701 3.05493 11.1138ZM12 3.66457C10.3303 5.8157 9.30879 8.4006 9.05759 11.1138H14.9424C14.6912 8.4006 13.6697 5.8157 12 3.66457ZM14.9424 13.1138C14.6912 15.8269 13.6697 18.4118 12 20.563C10.3303 18.4118 9.30879 15.8269 9.05759 13.1138H14.9424ZM7.05009 13.1138H3.05493C3.46801 16.8505 6.16881 19.8978 9.72571 20.8239C8.1991 18.5293 7.2743 15.877 7.05009 13.1138ZM14.2743 20.8239C15.8009 18.5293 16.7257 15.877 16.9499 13.1138H20.9451C20.532 16.8505 17.8312 19.8978 14.2743 20.8239ZM20.9451 11.1138H16.9499C16.7257 8.35058 15.8009 5.69819 14.2743 3.4036C17.8312 4.32974 20.532 7.37701 20.9451 11.1138ZM1 12.1138C1 6.03864 5.92487 1.11377 12 1.11377C18.0751 1.11377 23 6.03864 23 12.1138C23 18.1889 18.0751 23.1138 12 23.1138C5.92487 23.1138 1 18.1889 1 12.1138Z" fill="url(#paint0_linear_3109_746)" />
            </g>
            <defs>
                <linearGradient id="paint0_linear_3109_746" x1="16.3198" y1="18.5028" x2="10.9413" y2="4.49291" gradientUnits="userSpaceOnUse">
                    <stop stop-color="#FFD569" />
                    <stop offset="0.515056" stop-color="#FC8E4F" />
                    <stop offset="1" stop-color="#FF697B" />
                </linearGradient>
                <clipPath id="clip0_3109_746">
                    <rect width="22.4146" height="22.4146" fill="white" transform="translate(0.792969 1.11377)" />
                </clipPath>
            </defs>
        </svg>

    }
]
function Statistics() {
    return (
        <div className="flex flex-col gap-6 w-full items-center lg:gap-14">
            <div className="flex flex-col gap-4 items-center">
                <span className="text-light-yellow text-sm lg:text-xl font-normal font-jetBrains-mono">AURA IN NUMBERS</span>
                <h2 className="font-ppmori-semibold self-stretch text-[28px] lg:text-[48px] text-center font-semibold leading-9 lg:leading-[56px] max-w-[659px] min-w-[313px]">The most thriving blockchain in emerging countries</h2>
            </div>
            <div className="flex flex-col gap-3 xl:flex-row xl:gap-6 w-full items-center justify-center">
                {statisticData.map((item, i) => (
                    <Card key={i} data={item} />
                ))}
            </div>
        </div>
    );
}

export default Statistics;