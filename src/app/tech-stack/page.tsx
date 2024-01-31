import GradientButton from "@/components/Button/GradientButton";
import Link from "next/link";
import Image from "next/image";
import ic_labs from "@/assets/icons/ic_labs.svg";
import ic_arrow from "@/assets/icons/ic_arrow.svg";

const tableContents = [
    {
        key: 1,
        title: "Introducing Aura"
    },
    {
        key: 2,
        title: "Our Advantages"
    },
    {
        key: 3,
        title: "Aura Network Tech Stack"
    },
    {
        key: 4,
        title: "Foundation Contract Suite"
    },
    {
        key: 5,
        title: "Development Kit"
    }
]

const infraApps = ['Aurascan', 'Safe', 'Horoscope', 'Pay']
const sdk = ['AuraJS', 'Mobile SDK']
const contracts = ['Pyxis Smart Account', 'Fee Registry', 'Plugin Manager']
const aurad = ['Smart Account Module', 'Enforcement', 'CosmWasm Module', 'Other Cosmos Modules']

function Introduction() {
    return (
        <div className="mb-[118px] xl:mb-[80px]">
            <div className="main-container">
                <div className="flex flex-col items-center gap-16">
                    <div className="max-w-[867px] flex flex-col gap-10 px-2">
                        <div className="flex flex-col items-start lg:items-center">
                            <Image className="relative -left-[26px] lg:block" src={ic_labs} alt="ic_labs" />
                            <div className="flex flex-col gap-4 lg:gap-6 items-center">
                                <div className="text-white self-stretch text-start lg:text-center text-[48px] lg:text-[80px] font-semibold leading-[52px] lg:leading-[80px] font-ppmori-semibold">
                                    Aura Tech Stack
                                </div>
                                <div className="text-medium-gray text-start lg:text-center text-xl font-normal leading-8 max-w-[557px]">
                                    Aura Network is a high performance Layer 1 ecosystem with built-in modularity, leading the mass adoption of Web3 in emerging markets.
                                </div>
                            </div>
                        </div>
                        <div className="flex lg:justify-center">
                            <GradientButton>Contact Us</GradientButton>
                        </div>
                    </div>
                    <div className="flex flex-col gap-5">
                        <div className="lg:pt-[140x] w-full flex flex-col xl:flex-row xl:gap-[100px]">
                            <div className="rounded-full w-full pl-6 pr-4 py-4 flex justify-between items-center bg-dark-charcoal lg:hidden">
                                <span className="text-medium-gray">Jump to</span>
                                <Image className="group-hover:rotate-180 transition duration-200 ease-in" src={ic_arrow} alt="ic_arrow" />
                            </div>
                            <div className="hidden xl:flex flex-col bg-dark-charcoal p-8 rounded-3xl h-fit min-w-[340px]">
                                <span className="text-white font-ppmori-semibold text-xl font-semibold leading-8">Table of Contents</span>
                                <div>
                                    {tableContents.map((item, i) => (
                                        <Link href={`#${item.key}`} key={i} className="flex flex-col py-2 px-6">
                                            <span className="text-medium-gray font-ppmori-semibold text-base font-normal leading-8">{item.title}</span>
                                        </Link >
                                    ))}
                                </div>
                            </div>

                        </div>
                        <div className="mt-5 flex flex-col gap-6">
                            <div className="flex flex-col gap-3">
                                <span className="text-white font-ppmori-semibold text-2xl font-semibold leading-10">Aura Network Tech Stack</span>
                                <span className="text-medium-gray text-base font-normal leading-7">The Aura infrastructure landscape has been revamped to fully adopt innovation in user experience and sustainable economics. We can divide the landscape into 4 major planes.</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col mt-6 gap-6">
                    <div className="flex flex-col gap-2 w-full">
                        <span className="text-white font-ppmori-semibold text-[13px] font-semibold left-5">Infra Applications</span>
                        <div className="w-full flex gap-2 justify-between">
                            {infraApps.map((item, i) => (
                                <div key={i} className={`basis-1/${infraApps.length} flex items-center justify-center rounded-md bg-blur-brand-linear-gradient py-5 text-center text-[13px] leading-6`}>{item}</div>
                            ))}
                        </div>
                    </div>

                    <div className="flex flex-col gap-2 w-full">
                        <span className="text-white font-ppmori-semibold text-[13px] font-semibold left-5">SDK</span>
                        <div className="w-full flex gap-2 justify-between">
                            {sdk.map((item, i) => (
                                <div key={i} className={`basis-1/${sdk.length} flex items-center justify-center rounded-md bg-blur-brand-linear-gradient py-5 text-center text-[13px] leading-6`}>{item}</div>
                            ))}
                        </div>
                    </div>

                    <div className="flex flex-col gap-2 w-full">
                        <span className="text-white font-ppmori-semibold text-[13px] font-semibold left-5">Foundation Contract Suite</span>
                        <div className="w-full flex gap-2 justify-between">
                            {contracts.map((item, i) => (
                                <div key={i} className={`basis-1/${contracts.length} flex items-center justify-center rounded-md bg-blur-brand-linear-gradient py-5 text-center text-[13px] leading-6`}>{item}</div>
                            ))}
                        </div>
                    </div>

                    <div className="flex flex-col gap-2 w-full">
                        <span className="text-white font-ppmori-semibold text-[13px] font-semibold left-5">Aurad</span>
                        <div className="w-full flex gap-2 justify-between">
                            {aurad.map((item, i) => (
                                <div key={i} className={`basis-1/${aurad.length} flex items-center justify-center rounded-md bg-blur-brand-linear-gradient py-5 text-center text-[13px] leading-6`}>{item}</div>
                            ))}
                        </div>
                    </div>
                </div>

                <div className="mt-20"></div>
            </div>
        </div>
    );
}

export default Introduction;