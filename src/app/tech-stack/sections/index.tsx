'use client'

import ic_arrow from "@/assets/icons/ic_arrow.svg";
import ic_labs from "@/assets/icons/ic_labs.svg";
import img_block_trophy from "@/assets/images/img_block_trophy.svg";
import img_block_universe from "@/assets/images/img_block_universe.svg";
import img_circle_horo from "@/assets/images/img_circle_horo.svg";
import img_circle_logo from "@/assets/images/img_circle_logo.png";
import img_circle_safe from "@/assets/images/img_circle_safe.svg";
import img_circle_wallet from "@/assets/images/img_circle_wallet.svg";
import GradientButton from "@/components/Button/GradientButton";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

const tableContents = [
    {
        key: "tech-stack",
        title: "Aura Network Tech Stack"
    },
    {
        key: "aura-daemon",
        title: "Aura Daemon"
    },
    {
        key: "foundation-contract",
        title: "Foundation Contract Suite"
    },
    {
        key: "development-kit",
        title: "Aura Software Development Kit"
    },
    {
        key: "infrastructure-application",
        title: "Infrastructure Application"
    }
]

const infraApps = ['Aurascan', 'Safe', 'Horoscope', 'Pay']
const sdk = ['AuraJS', 'Mobile SDK', '', '']
const contracts = ['Pyxis Smart Account', 'Fee Registry', 'Plugin Manager', '']
const aurad = ['Smart Account Module', 'Enforcement', 'CosmWasm Module', 'Other Cosmos Modules']

const Title = ({ children }: { children: React.ReactNode }) => (
    <span className="text-white font-ppmori-semibold text-2xl font-semibold leading-10 xl:text-4xl">{children}</span>
)

const SubTitle = ({ children }: { children: React.ReactNode }) => (
    <span className="text-white font-ppmori-semibold text-xl font-semibold leading-8 xl:text-2xl">{children}</span>
)

const CardDescription = ({ children }: { children: React.ReactNode }) => (
    <span className="text-medium-gray text-base font-normal leading-8">{children}</span>
)

const Description = ({ children }: { children: React.ReactNode }) => (
    <span className="text-medium-gray text-base font-normal leading-7">{children}</span>
)

const Card = ({ children }: { children: React.ReactNode }) => (
    <div className="h-full flex flex-col p-8 gap-6 bg-dark-charcoal rounded-3xl xl:py-14 xl:px-16 xl:gap-4">
        {children}
    </div>
)

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
                if (window.scrollY >= (sectionEl as HTMLElement).offsetTop - sectionEl.clientHeight / 3) {
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
        <div className="mb-[118px] xl:mb-[80px]">
            <div className="main-container">
                <div className="flex flex-col items-center">
                    <div className="flex flex-col items-center gap-16">
                        <section id="tech-stack" className="section w-full xl:max-w-[867px] flex flex-col gap-10 px-2">
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
                        </section>
                        <div className="xl:pt-[140px] w-full flex flex-col gap-5 xl:flex-row xl:gap-[100px]">
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

                            <div className="flex flex-col">
                                <section id="tech-stack" className="section flex flex-col gap-6 xl:gap-8 xl:mt-0">
                                    <div className="flex flex-col gap-3 xl:gap-8">
                                        <Title>Aura Network Tech Stack</Title>
                                        <Description>The Aura infrastructure landscape has been revamped to fully adopt innovation in user experience and sustainable economics. We can divide the landscape into 4 major planes.</Description>
                                    </div>
                                    <div className="flex flex-col gap-6 xl:gap-[30px]">
                                        <div className="flex flex-col gap-2 w-full xl:flex-row xl:gap-[46px]">
                                            <span className="text-white font-ppmori-semibold text-[13px] lg:text-base font-semibold left-5 xl:min-w-[150px] xl:max-w-[150px] xl:text-center xl:p-[10px] xl:min-h-[72px] xl:bg-dark-charcoal xl:rounded-md xl:flex xl:justify-center xl:items-center">Infra Applications</span>
                                            <div className="w-full flex gap-2 justify-between xl:gap-[18px] xl:justify-start">
                                                {infraApps.map((item, i) => {
                                                    if (!item) return <div key={i} className="xl:basis-1/4" />
                                                    return (
                                                        <div key={i} className="basis-1/4 flex items-center justify-center rounded-md bg-blur-brand-linear-gradient py-[18px] px-3 xl:max-h-[72px] text-center text-[13px] lg:text-base leading-6 text-light-yellow">{item}</div>
                                                    )
                                                })}
                                            </div>
                                        </div>

                                        <div className="flex flex-col gap-2 w-full xl:flex-row xl:gap-[46px]">
                                            <span className="text-white font-ppmori-semibold text-[13px] lg:text-base font-semibold left-5 xl:min-w-[150px] xl:max-w-[150px] xl:text-center xl:p-[10px] xl:min-h-[72px] xl:bg-dark-charcoal xl:rounded-md xl:flex xl:justify-center xl:items-center">SDK</span>
                                            <div className="w-full flex gap-2 justify-between xl:gap-[18px] xl:justify-start">
                                                {sdk.map((item, i) => {
                                                    if (!item) return <div key={i} className="xl:basis-1/4" />
                                                    return (
                                                        <div key={i} className="basis-1/2 xl:basis-1/4 flex items-center justify-center rounded-md bg-blur-brand-linear-gradient py-[18px] px-3 xl:max-h-[72px] text-center text-[13px] lg:text-base leading-6 text-light-yellow">{item}</div>
                                                    )
                                                })}
                                            </div>
                                        </div>

                                        <div className="flex flex-col gap-2 w-full xl:flex-row xl:gap-[46px]">
                                            <span className="text-white font-ppmori-semibold text-[13px] lg:text-base font-semibold left-5 xl:min-w-[150px] xl:max-w-[150px] xl:text-center xl:p-[10px] xl:min-h-[72px] xl:bg-dark-charcoal xl:rounded-md xl:flex xl:justify-center xl:items-center">Foundation Contract Suite</span>
                                            <div className="w-full flex gap-2 justify-between xl:gap-[18px] xl:justify-start">
                                                {contracts.map((item, i) => {
                                                    if (!item) return <div key={i} className="xl:basis-1/4" />
                                                    return (
                                                        <div key={i} className="basis-1/3 xl:basis-1/4 flex items-center justify-center rounded-md bg-blur-brand-linear-gradient py-[18px] px-3 xl:max-h-[72px] text-center text-[13px] lg:text-base leading-6 text-light-yellow">{item}</div>
                                                    )
                                                })}
                                            </div>
                                        </div>

                                        <div className="flex flex-col gap-2 w-full xl:flex-row xl:gap-[46px]">
                                            <span className="text-white font-ppmori-semibold text-[13px] lg:text-base font-semibold left-5 xl:min-w-[150px] xl:max-w-[150px] xl:text-center xl:p-[10px] xl:min-h-[72px] xl:bg-dark-charcoal xl:rounded-md xl:flex xl:justify-center xl:items-center">Aurad</span>
                                            <div className="w-full flex gap-2 justify-between xl:gap-[18px] xl:justify-start">
                                                {aurad.map((item, i) => {
                                                    if (!item) return <div key={i} className="xl:basis-1/4" />
                                                    return (
                                                        <div key={i} className="basis-1/4 flex items-center justify-center rounded-md bg-blur-brand-linear-gradient py-[18px] px-3 xl:max-h-[72px] text-center text-[13px] lg:text-base leading-6 text-light-yellow">{item}</div>
                                                    )
                                                })}
                                            </div>
                                        </div>
                                    </div>
                                </section>

                                <div className="w-full flex flex-col mt-20 gap-20 xl:mt-[100px]">
                                    <section id="aura-daemon" className="section flex flex-col gap-6 xl:gap-8">
                                        <div className="flex flex-col gap-3 xl:gap-8">
                                            <Title>Aura Daemon</Title>
                                            <Description>The main Aura node client. As this is implemented using the Cosmos SDK, Aura inherits the stability and security of the Cosmos stack. It is also IBC compatible, making Aura capable of directly communicating with more than 80 other Cosmos chains. Apart from the default Cosmos modules, there are 2 other modules implemented by Aura:</Description>
                                        </div>
                                        <Card>
                                            <SubTitle>Smart Accounts Module</SubTitle>
                                            <CardDescription>The native account abstraction module that enables programmable accounts. A Smart Account is a smart contract that represents an user account on the blockchain. SAM accepts transactions from a client, determines if the client is interacting with its smart account, then forwards the transaction to the contract. This process is plugged into the normal transaction flow of Cosmos so that the account can also perform normal transactions without creating a separate logic flow. </CardDescription>
                                        </Card>
                                        <Card>
                                            <SubTitle>Fee Enforcement</SubTitle>
                                            <CardDescription>This is a native module that implements sustainable economic design that includes a new approach to charging fees, with fees being applied at the application level (fees on application revenue) as opposed to the usual way of only being limited to the blockchain layer (gas fees). Enforcement of this requirement, to our knowledge, has never been done among permissionless networks, and Aura will be pioneering its implementation. This can be understood as an income tax for dApps to contribute to the community pool as they are directly benefiting from the public infrastructure of Aura.</CardDescription>
                                        </Card>
                                    </section>

                                    <section id="foundation-contract" className="section flex flex-col gap-10">
                                        <div className="flex flex-col gap-3 xl:gap-8">
                                            <Title>Foundation Contract Suite</Title>
                                            <div className="flex flex-col gap-3 xl:gap-6">
                                                <Description>A collection of smart contracts that are governance gated, highly privileged, and can directly communicate with Aurad to manage different types of transactions. Aurad has the SAM and Fee Enforcement Module serving as the entry point to different transaction logic. However, some particular logic paths are separated into a suite of highly privileged smart contracts so that we can have a more robust development architecture.</Description>
                                                <Description>We call this “Foundation Contract Suite” as they have an ecosystem-wide effect, and are implemented to directly complement the SAM and Fee Enforcement native module, rather than being implemented for independent DAPPs. There are currently 2 class of contracts:</Description>
                                            </div>
                                        </div>
                                        <div className="flex flex-col gap-6 xl:mt-[60px] xl:flex-row-reverse xl:gap-16 xl:items-center">
                                            <div className="flex justify-center items-center bg-dark-charcoal rounded-2xl py-[34px] xl:py-[42px] xl:h-[360px] xl:basis-1/2">
                                                <Image src={img_block_trophy} alt="img_block_trophy" />
                                            </div>
                                            <div className="flex flex-col gap-3 xl:gap-8 xl:basis-1/2">
                                                <Title>Pyxis Smart Account</Title>
                                                <Description>A collection of contracts serving the SAM. This includes a main smart account contract and a nimble architecture of plugins that can be easily enabled or disabled on demand.</Description>
                                            </div>
                                        </div>
                                        <div className="flex flex-col gap-6 xl:mt-[60px] xl:flex-row xl:gap-16 xl:items-center">
                                            <div className="flex justify-center items-center bg-dark-charcoal rounded-2xl py-[34px] xl:py-[42px] xl:h-[360px] pr-5 xl:basis-1/2">
                                                <Image src={img_block_universe} alt="img_block_universe" />
                                            </div>
                                            <div className="flex flex-col gap-3 xl:gap-8 xl:basis-1/2">
                                                <Title>Fee Registry</Title>
                                                <Description>A collection of contracts that captures value from various dApps deployed on top of Aura.</Description>
                                            </div>
                                        </div>
                                        <div className="xl:mt-[60px]">
                                            <Description>The foundation contract suite provides a highly modular approach to ecosystem wide features like AA and tax structure. The aim of this architecture is to be able to swap out, upgrade, and add modules as the protocol develops and swiftly accommodate demands for new requirements or adjustments. Accordingly, the design consists of many granular single-purpose logic units, starting from a runtime upgrade (aurad) and pushing the rest of the logic to application level (contract).</Description>
                                        </div>
                                    </section>

                                    <section id="development-kit" className="section flex flex-col gap-6 xl:gap-8">
                                        <div className="flex flex-col gap-3 xl:gap-8">
                                            <Title>Aura Software Development Kit</Title>
                                            <div className="flex flex-col gap-3 xl:gap-6">
                                                <Description>Client libraries for various dApps, web or mobile applications</Description>
                                                <div className="flex flex-col gap-3 xl:gap-8">
                                                    <div className="flex flex-col p-8 gap-6 bg-dark-charcoal rounded-3xl xl:py-14 xl:px-16">
                                                        <CardDescription>AuraJS remains to be the most popular client side library for front-end (javascript) to interact with Aura. All logic on how to construct transactions that interact with EOA or Smart Account are abstracted away from the client side.</CardDescription>
                                                    </div>
                                                    <div className="flex flex-col p-8 gap-6 bg-dark-charcoal rounded-3xl xl:py-14 xl:px-16">
                                                        <CardDescription>Native Flutter implementations for client libraries are also very important for the development of native mobile applications.</CardDescription>
                                                    </div>
                                                </div>

                                            </div>
                                        </div>

                                    </section>

                                    <section id="infrastructure-application" className="section flex flex-col gap-6 xl:gap-8">
                                        <div className="flex flex-col gap-3 xl:gap-8">
                                            <Title>Infrastructure Application</Title>
                                            <Description>The signature infrastructure applications developed by the Aura team remains the same with the addition of Aura Pay, a custodial infrastructure for facilitating Web3 onboarding. They are:</Description>
                                        </div>
                                        <div className="flex flex-col gap-6 xl:flex-row xl:flex-wrap xl:justify-between xl:gap-16">
                                            <div className="xl:basis-[calc(50%_-_32px)]">
                                                <Card>
                                                    <Image src={img_circle_logo} alt="img_circle_logo" />
                                                    <SubTitle>Aura Scan</SubTitle>
                                                    <CardDescription>AuraJS remains to be the most popular client side library for front-end (javascript) to interact with Aura. All logic on how to construct transactions that interact with EOA or Smart Account are abstracted away from the client side.</CardDescription>
                                                </Card>
                                            </div>
                                            <div className="xl:basis-[calc(50%_-_32px)]">
                                                <Card>
                                                    <Image src={img_circle_wallet} alt="img_circle_wallet" />
                                                    <SubTitle>Aura Pay</SubTitle>
                                                    <CardDescription>Pay is a collection of centralized, opt-in key custodial services that abstract the transaction execution of an account on Aura. This is an advanced version of the Pay Master concept of EVM blockchain where the Pay part can be directly invoked from Web2 payment gateway while retaining the transparency of Web3.</CardDescription>
                                                </Card>
                                            </div>
                                            <div className="xl:basis-[calc(50%_-_32px)]">
                                                <Card>
                                                    <Image src={img_circle_safe} alt="img_circle_safe" />
                                                    <SubTitle>Safe</SubTitle>
                                                    <CardDescription>The native multisig tool for asset management and chain interaction of Aura. However, with the addition of smart accounts, a new version of Safe will be available to support this new account type.</CardDescription>
                                                </Card>
                                            </div>
                                            <div className="xl:basis-[calc(50%_-_32px)]">
                                                <Card>
                                                    <Image src={img_circle_horo} alt="img_circle_horo" />
                                                    <SubTitle>Horoscope</SubTitle>
                                                    <CardDescription>The powerful indexing service that complements all dApps on Aura. Horoscope provides GraphQL interfaces and a powerful CLI tool for constructing sub-graph services. This remains the de facto data indexing pattern for dApp builders on Aura Network</CardDescription>
                                                </Card>
                                            </div>
                                        </div>
                                    </section>
                                </div>
                            </div>

                        </div>
                    </div>


                </div>


            </div>
        </div >
    );
}

export default Sections;