import ic_arrow from "@/assets/icons/ic_arrow.svg";
import ic_close from "@/assets/icons/ic_close.svg";
import ic_discord from "@/assets/icons/ic_discord.png";
import ic_github from "@/assets/icons/ic_github.png";
import ic_linkedIn from "@/assets/icons/ic_linkedIn.png";
import ic_menu from "@/assets/icons/ic_menu.svg";
import ic_seeMore from "@/assets/icons/ic_seeMore.svg";
import ic_telegram from "@/assets/icons/ic_telegram.svg";
import ic_x from "@/assets/icons/ic_x.svg";
import ic_logo from "@/assets/images/img_logo.svg";
import Image from "next/image";
import Link from "next/link";
import Button from "../Button";
import { PAGE_ROUTE } from "../../common";

const learnMenu = [
    {
        name: "Introduction",
        link: PAGE_ROUTE.INTRODUCTION,
    },
    {
        name: "Tech Stack",
        link: "/",
    },

    {
        name: "Docs",
        link: "/",
    }
]

const communityMenu = [
    {
        name: "Twitter",
        link: "/",
        icon: ic_x
    },
    {
        name: "Discord",
        link: "/",
        icon: ic_discord
    },

    {
        name: "GitHub",
        link: "/",
        icon: ic_github
    },
    {
        name: "Telegram",
        link: "/",
        icon: ic_telegram
    },
    {
        name: "LinkedIn",
        link: "/",
        icon: ic_linkedIn
    },
    {
        name: "See more",
        link: "/",
        icon: ic_seeMore
    },
]

function Header() {
    return (
        <header className="w-full fixed lg:flex justify-center top-6 lg:top-10 left-0 right-0 px-6 z-[9999]">
            <input className="nav-input hidden" type="checkbox" id="nav-input" />
            <div className="w-full bg-blur-dark-charcoal border border-solid border-blur-grayish-brown backdrop-blur-[20px] lg:max-w-[1038px] flex justify-between rounded-[32px] navbar-container lg:rounded-full h-[64px] lg:h-[70px] max-h-[70px] px-6 py-5 lg:py-2 lg:pl-[28px] lg:pr-2">
                <Image src={ic_logo} alt="logo" className="max-md:w-fit" />
                <label htmlFor="nav-input">
                    <Image className="lg:hidden nav-icon-menu" src={ic_menu} alt="menu" />
                    <Image className="lg:hidden nav-icon-close" src={ic_close} alt="ic_close" />
                </label>
                <div className="gap-1 hidden lg:flex">
                    <Link href={PAGE_ROUTE.HOME} className="w-24 px-6 py-4 hover:bg-medium-charcoal rounded-2xl text-lg flex justify-center items-center">Home</Link>
                    <div className="flex justify-center items-center">
                        <div className="group relative px-6 py-4 hover:bg-medium-charcoal rounded-2xl cursor-pointer">
                            <div className="flex items-center gap-[10px]">
                                <span className="text-lg">
                                    Learn
                                </span>
                                <Image className="group-hover:rotate-180 transition duration-200 ease-in" src={ic_arrow} alt="ic_arrow" />
                            </div>
                            <div className="group-hover:block absolute hidden h-auto left-0">
                                <div className="pt-5">
                                    <ul className="w-[175px] bg-medium-charcoal shadow rounded-2xl">
                                        {learnMenu.map((item) => (
                                            <li key={item.name} className="px-6 py-5 flex items-center hover:bg-light-charcoal rounded-2xl gap-[10px]">
                                                <Link href={item.link} className="block">{item.name}</Link>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    <Link href="/" className="w-24 px-6 py-4 hover:bg-medium-charcoal rounded-2xl text-lg flex justify-center items-center">Build</Link>
                    <div className="flex justify-center items-center">
                        <div className="group relative px-6 py-4 hover:bg-medium-charcoal rounded-2xl cursor-pointer w-[175px]">
                            <div className="flex items-center gap-[10px]">
                                <span className="text-lg">
                                    Community
                                </span>
                                <Image className="group-hover:rotate-180 transition duration-200 ease-in" src={ic_arrow} alt="ic_arrow" />
                            </div>
                            <div className="group-hover:block absolute hidden h-auto left-0">
                                <div className="pt-5">
                                    <ul className="w-[175px] bg-medium-charcoal shadow rounded-2xl">
                                        {communityMenu.map((item) => (
                                            <li key={item.name} className="px-6 py-5 flex items-center hover:bg-light-charcoal rounded-2xl gap-[10px]">
                                                <Image className="w-5 h-5" src={item.icon} alt={item.name} />
                                                <Link href={item.link} className="block">{item.name}</Link>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="hidden lg:contents">
                    <Button>Buy AURA</Button>
                </div>
            </div>
            <div className="hidden nav-menu lg:hidden">
                <div className="bg-[#1D1A18] flex flex-col border border-solid border-blur-grayish-brown rounded-b-2xl">
                    <Link href="/" className="w-full p-6 text-lg flex justify-center items-center border-b border-b-blur-grayish-brown">Learn</Link>
                    <Link href="/" className="w-full p-6 text-lg flex justify-center items-center border-b border-b-blur-grayish-brown">Build</Link>
                    <div className="flex justify-center items-center border-b border-b-blur-grayish-brown">
                        <div className="group relative dropdown p-6 cursor-pointer w-[175px]">
                            <div className="flex items-center gap-[10px]">
                                <span className="text-lg">
                                    Community
                                </span>
                                <Image className="arrow transition duration-200 ease-in" src={ic_arrow} alt="ic_arrow" />
                            </div>
                            <div className="group-hover:block absolute hidden h-auto left-0">
                                <div className="pt-5">
                                    <ul className="w-[175px] bg-medium-charcoal shadow rounded-2xl">
                                        {communityMenu.map((item) => (
                                            <li key={item.name} className="px-6 py-5 flex items-center hover:bg-light-charcoal rounded-2xl gap-[10px]">
                                                <Image className="w-5 h-5" src={item.icon} alt={item.name} />
                                                <Link href={item.link} className="block ">{item.name}</Link>
                                            </li>))}
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="p-6">
                        <Button>Buy AURA</Button>
                    </div>
                </div>
            </div>
        </header>
    );
}

export default Header;
