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
import { PAGE_ROUTE } from "../../common";
import Button from "../Button";
import Item from "./Item";

const learnMenu = [
    {
        name: "Introduction",
        link: PAGE_ROUTE.INTRODUCTION,
    },
    {
        name: "Tech Stack",
        link: PAGE_ROUTE.TECH_STACK,
    },

    {
        name: "Docs",
        link: PAGE_ROUTE.DOCS,
    }
]

const communityMenu = [
    {
        name: "Twitter",
        link: "/Twitter",
        icon: ic_x
    },
    {
        name: "Discord",
        link: "/Discord",
        icon: ic_discord
    },

    {
        name: "GitHub",
        link: "/GitHub",
        icon: ic_github
    },
    {
        name: "Telegram",
        link: "/Telegram",
        icon: ic_telegram
    },
    {
        name: "LinkedIn",
        link: "/LinkedIn",
        icon: ic_linkedIn
    },
    {
        name: "See more",
        link: "/See",
        icon: ic_seeMore
    },
]

function Header() {
    return (
        <header className="header fixed z-[9999] top-6 lg:top-10 left-1/2 -translate-x-1/2 w-full lg:w-[1038px]">
            <input className="nav-input hidden" type="checkbox" id="nav-input" />
            <div className="w-full bg-blur-dark-charcoal border border-solid border-blur-grayish-brown backdrop-blur-[20px] flex justify-between rounded-[32px] nav-container lg:rounded-full h-[64px] lg:h-[70px] max-h-[70px] px-6 py-5 lg:py-2 lg:pl-[28px] lg:pr-2">
                <Link href={PAGE_ROUTE.HOME} className="flex">
                    <Image src={ic_logo} alt="logo" className="max-md:w-fit" />
                </Link>
                <label htmlFor="nav-input">
                    <Image className="lg:hidden nav-icon-menu" src={ic_menu} alt="menu" />
                    <Image className="lg:hidden nav-icon-close" src={ic_close} alt="ic_close" />
                </label>
                <div className="gap-1 hidden lg:flex">
                    <Item path={PAGE_ROUTE.HOME}>Home</Item>
                    <Item subItems={learnMenu}>Learn</Item>
                    <Item path={PAGE_ROUTE.BUILD}>Build</Item>
                    <Item subItems={communityMenu}>Community</Item>
                </div>
                <div className="hidden lg:contents">
                    <Button>Buy AURA</Button>
                </div>
            </div>
            <div className="hidden w-full nav-menu lg:hidden">
                <div className="bg-[#1D1A18] relative flex flex-col border border-solid border-blur-grayish-brown rounded-b-2xl">
                    <Item subItems={learnMenu}>Learn</Item>
                    <Item path={PAGE_ROUTE.BUILD}>Build</Item>
                    <Item subItems={communityMenu}>Community</Item>
                    <div className="p-6">
                        <Button>Buy AURA</Button>
                    </div>
                </div>
            </div>
        </header>
    );
}

export default Header;
