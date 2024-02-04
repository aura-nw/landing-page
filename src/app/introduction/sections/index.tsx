'use client'
import { useEffect, useState } from "react";
import ic_arrow from "@/assets/icons/ic_arrow.svg";
import ic_book from "@/assets/icons/ic_book.svg";
import ic_flag from "@/assets/icons/ic_flag.svg";
import ic_globe from "@/assets/icons/ic_globe.svg";
import ic_labs from "@/assets/icons/ic_labs.svg";
import img_hoz_universe from "@/assets/images/img_hoz_universe.png";
import img_small_blocks from "@/assets/images/img_small_blocks.png";
import img_universe_sun from "@/assets/images/img_universe_sun.png";
import { PAGE_ROUTE } from "@/common";
import GradientButton from "@/components/Button/GradientButton";
import Image from "next/image";
import Link from "next/link";

const contents = [
    {
        img: img_universe_sun,
        title: "Mass Adoption",
        description: "We define ‘mass adoption’ not only in terms of scale, but also in terms of Web3 having sustainable usage regardless of market cycle. In order to achieve this, it is critical to resolve both of the aforementioned bottlenecks. Utility needs to be intuitive and competitive with existing infrastructure, and the user onboarding process and general user experience has to be easy enough for the general public."
    },
    {
        img: img_small_blocks,
        title: "Built-in modularity",
        description: "‘Built-in Modularity’ of the Cosmos tech stack is crucial in this context because it provides the technical flexibility necessary to optimally apply improvements in user experience. Cosmos SDK consists of modules, which implement the business logic on top of the basic functionality. This means that advanced features that can either implement complex functionalities or abstract difficult user experiences can be applied without a complicated upgrade, i.e. soft or hard fork, of the base layer."
    },
    {
        img: img_hoz_universe,
        title: "Emerging Markets",
        description: "We define ‘mass adoption’ not only in terms of scale, but also in terms of Web3 having sustainable usage regardless of market cycle. In order to achieve this, it is critical to resolve both of the aforementioned bottlenecks. Utility needs to be intuitive and competitive with existing infrastructure, and the user onboarding process and general user experience has to be easy enough for the general public."
    }
]

const advantages = [
    {
        img: ic_globe,
        title: "Robust Partnership Network",
        description: "Aura Network has been able to establish prominent collaborations and integrations in SEA because of its unique position of being well connected to both Web2 and Web3 partners. The Aura team used to be an enterprise blockchain service provider within FPT Corporation, one of the largest IT conglomerates in SEA having 40,000+ employees operating in 29 countries, with 100+ Fortune 500 clientele. Even after the team spun out to become Aura Network, FPT Corp has been the largest backer and closest partner, allowing a young public blockchain network to gain unparalleled credibility and reputation in the region. The fact that a young network like Aura Network was able to establish a partnership with Creek and River, a major player in the Japanese IP industry and also a client of FPT Software, is a great example of this synergy."
    },
    {
        img: ic_book,
        title: "Expansive Engineering Resources",
        description: "Apart from the Web2 engineering capabilities supported by FPT Software and FPT Information Services, Aura has built an expansive engineering team of 50+ Web3 developers having professional experience in app development. Based on these resources Aura Network is already one of the leading contributors of the Cosmos ecosystem in terms of code commitments, ranking 4th overall with 20,500+ total commits and 1st monthly as of December 2023 [Dev3map, 2023]. We have also built a powerful suite of building tools including performant indexing (Horoscope), account abstraction library (smart accounts), QR payments of onchain assets (AuraPay), etc. (need to have links to detailed pages)."
    },
    {
        img: ic_flag,
        title: "Rich Track Record",
        description: "Aura Network has a rich track record of identifying opportunities in applying blockchain technology in diverse realms. As mentioned above, the Aura Network team used to be Akachain, an enterprise blockchain service provider for FPT corporation. Akachain operated for 4+ years from 2018 to 2022, working alongside Fortune 500 clientele including Panasonic Automotive, AIA, Bayer Group, etc. The track record of Akachain was acknowledged globally, and it received the 2020 Silver Stevie Award for Innovation in Technology in the Asia-Pacific and was recognized as one of the top 10 global Blockchain Service Providers by HFS Research."
    }
]

const tableContents = [
    {
        key: "",
        title: "Introducing Aura"
    },
    {
        key: "our-advantages",
        title: "Our Advantages"
    },
    {
        key: "tech-stack",
        path: PAGE_ROUTE.TECH_STACK,
        title: "Aura Network Tech Stack"
    },
    {
        key: "contract",
        title: "Foundation Contract Suite"
    },
    {
        key: "dev-kit",
        title: "Development Kit"
    }
]

function Sections() {
    const [currentSection, setCurrentSection] = useState('');

    const extractStringAfterHash = (path: string) => {
        const hashIndex = path.indexOf('#');
        if (hashIndex === -1) {
            return path;
        }
        return path.substring(hashIndex + 1);
    };

    useEffect(() => {
        const handleScroll = () => {
            const sectionEls = document.querySelectorAll('.section');
            sectionEls.forEach((sectionEl) => {
                if (window.scrollY >= (sectionEl as HTMLElement).offsetTop - sectionEl.clientHeight / 5) {
                    setCurrentSection(sectionEl.id);
                }
            });

            const navLinkEls = document.querySelectorAll('.content_link');
            navLinkEls.forEach((navEl) => {
                if (extractStringAfterHash((navEl as HTMLAnchorElement).href) === currentSection) {
                    const activeEl = document.querySelector('.active');
                    activeEl?.classList.remove('active');
                    navEl.classList.add('active');
                }
            });
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [currentSection]);
    
    return (
        <div className="mb-[217px] xl:mb-[80px]">
            <div className="main-container">
                <div className="flex flex-col items-center gap-16">
                    <section id="introduction" className="section max-w-[867px] flex flex-col gap-10 px-2">
                        <div className="flex flex-col items-start lg:items-center">
                            <Image className="relative -left-[26px] lg:block" src={ic_labs} alt="ic_labs" />
                            <div className="flex flex-col gap-4 lg:gap-6 items-center">
                                <div className="text-white self-stretch text-start lg:text-center text-[48px] lg:text-[80px] font-semibold leading-[52px] lg:leading-[80px] font-ppmori-semibold">
                                    Introducing Aura
                                </div>
                                <div className="text-medium-gray text-start lg:text-center text-xl font-normal leading-8 max-w-[557px]">
                                    Aura Network is a high performance Layer 1 ecosystem with built-in modularity, leading the mass adoption of Web3 in emerging markets.
                                </div>
                            </div>
                        </div>
                        <div className="flex lg:justify-center">
                            <GradientButton>Contact Us</GradientButton>
                        </div>
                    </section>
                    <div className="xl:pt-[140px] w-full flex flex-col xl:flex-row gap-5 xl:gap-[100px]">
                        <div className="flex flex-col xl:flex-row">
                            <input className="section-selector hidden" type="checkbox" id="section-selector" />
                            <label htmlFor="section-selector" className="section-selector-label rounded-full w-full pl-6 pr-4 py-4 flex justify-between items-center bg-dark-charcoal xl:hidden">
                                <span className="text-medium-gray">Jump to</span>
                                <Image className="group-hover:rotate-180 transition duration-200 ease-in" src={ic_arrow} alt="ic_arrow" />
                            </label>
                            <div className="hidden mt-2 w-full section-menu lg:flex xl:flex flex-col bg-dark-charcoal p-8 rounded-3xl xl:h-fit xl:min-w-[340px] xl:sticky xl:top-[140px]">
                                <span className="hidden xl:block text-white font-ppmori-semibold text-xl font-semibold leading-8">Table of Contents</span>
                                {tableContents.map((item, i) => (
                                    <Link href={`#${item.key}`} key={i} className="content_link flex flex-col py-2 pl-6 border-l-2 border-l-[#292521]">
                                        <span className="text-medium-gray font-ppmori-semibold text-base font-normal leading-8">{item.title}</span>
                                    </Link >
                                ))}
                            </div>
                        </div>
                        <div className="flex flex-col gap-[61px] xl:gap-[100px]">
                            <section className="section flex flex-col gap-8 xl:flex-row-reverse xl:gap-16 justify-between">
                                <div className="h-[250px] xl:h-[304px] flex justify-center items-center rounded-3xl bg-dark-charcoal">
                                    <Image className="xl:w-[406px] xl:h-[300px]" src={contents[0].img} alt="img"></Image>
                                </div>
                                <div className="flex flex-col gap-3 xl:max-w-[374px]">
                                    <span className="text-white font-ppmori-semibold text-2xl font-semibold leading-10">{contents[0].title}</span>
                                    <span className="text-medium-gray text-[16px] leading-7">{contents[0].description}</span>
                                </div>
                            </section>

                            <div className="flex flex-col gap-8 xl:flex-row xl:gap-16 justify-between">
                                <div className="h-[250px] xl:h-[304px] flex justify-center items-center rounded-3xl bg-dark-charcoal">
                                    <Image className="xl:w-[406px] xl:h-[300px]" src={contents[1].img} alt="img"></Image>
                                </div>
                                <div className="flex flex-col gap-3 xl:max-w-[374px]">
                                    <span className="text-white font-ppmori-semibold text-2xl font-semibold leading-10">{contents[1].title}</span>
                                    <span className="text-medium-gray text-[16px] leading-7">{contents[1].description}</span>
                                </div>
                            </div>

                            <div className="flex flex-col gap-8 xl:flex-col-reverse">
                                <div className="h-[250px] xl:h-[304px] flex justify-center items-center rounded-3xl bg-dark-charcoal">
                                    <Image className="xl:w-[406px] xl:h-[300px]" src={contents[2].img} alt="img"></Image>
                                </div>
                                <div className="flex flex-col gap-3 xl:gap-8">
                                    <span className="text-white font-ppmori-semibold text-2xl font-semibold leading-10">{contents[2].title}</span>
                                    <span className="text-medium-gray text-[16px] leading-7">{contents[2].description}</span>
                                </div>
                            </div>

                            <section id="our-advantages" className="section flex flex-col gap-8">
                                <span className="text-white font-ppmori-semibold text-2xl font-semibold leading-10">Our Advantages</span>
                                {advantages.map((item, i) => (
                                    <div key={i} className="flex flex-col gap-6 rounded-3xl bg-dark-charcoal p-8">
                                        <div className="flex flex-col gap-4">
                                            <Image src={item.img} alt="img"></Image>
                                            <span className="text-white font-ppmori-semibold text-2xl font-semibold leading-10">{item.title}</span>
                                        </div>
                                        <span className="text-medium-gray text-[16px] leading-8">{item.description}</span>
                                    </div>
                                ))}
                            </section>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Sections;