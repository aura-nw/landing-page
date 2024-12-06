import ic_discord from "@/assets/icons/ic_discord_none_bg.svg";
import ic_telegram from "@/assets/icons/ic_telegram.svg";
import ic_x from "@/assets/icons/ic_x.svg";
import ic_logo from "@/assets/images/img_logo.svg";
import logo3 from "@/assets/images/logo3.svg";
import Image from "next/image";
import Link from "next/link";
import { PAGE_ROUTE, SOCIAL } from "../../common";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const socials = [
  {
    name: "X",
    link: SOCIAL.TWITTER,
    icon: ic_x,
  },
  {
    name: "Discord",
    link: SOCIAL.DISCORD,
    icon: ic_discord,
  },
  {
    name: "Telegram",
    link: SOCIAL.TELEGRAM,
    icon: ic_telegram,
  },
];
function Header() {
  const [isShow, setIsShow] = useState(false);
  const pathname = usePathname();
  // console.log(pathname);
  useEffect(() => {
    const navbar: any = document.getElementById("navbar");
    window.addEventListener("scroll", () => {
      if (window.scrollY > 50) {
        navbar.classList.add("bg-[#1a3151]/30", "backdrop-blur-md");
      } else {
        navbar.classList.remove("bg-[#1a3151]/30", "backdrop-blur-md");
      }
    });
  }, []);
  return (
    <>
      <header
        className="fixed z-40 left-1/2 -translate-x-1/2 w-full transition-all duration-300"
        id="navbar"
      >
        <div className="main-container">
          <div className="w-full flex justify-between items-center nav-container py-4">
            <Link href={PAGE_ROUTE.HOME} className="flex">
              <Image
                src={pathname === "/ecosystem/" ? logo3 : ic_logo}
                alt="logo"
                width={150}
                height={80}
                className="w-[114px] sm:w-[150px] h-[40px] sm:h-[80px]"
              />
            </Link>

            <div
              className={`${
                pathname === "/ecosystem/" ? "text-black" : "text-white"
              } text-lg font-semibold font-interTight leading-[27px] sm:hidden`}
              onClick={() => {
                setIsShow(true);
              }}
            >
              Menu
            </div>

            <div className="hidden lg:flex gap-10">
              <Link
                href={PAGE_ROUTE.HOME}
                className={`${
                  pathname === "/ecosystem/" ? "text-black" : "text-white"
                } flex transform transition-transform duration-300 hover:scale-110`}
              >
                Home
              </Link>
              <Link
                href={pathname !== "/ecosystem/" ? "#about" : PAGE_ROUTE.HOME}
                className={`${
                  pathname === "/ecosystem/" ? "text-black" : "text-white"
                } flex transform transition-transform duration-300 hover:scale-110`}
              >
                About
              </Link>
              <Link
                href={PAGE_ROUTE.ECOSYSTEM}
                className={`${
                  pathname === "/ecosystem/" ? "text-black" : "text-white"
                } flex transform transition-transform duration-300 hover:scale-110`}
              >
                Ecosystem
              </Link>
              <Link
                href="https://insight.aura.network/"
                target="_blank"
                className={`${
                  pathname === "/ecosystem/" ? "text-black" : "text-white"
                } flex transform transition-transform duration-300 hover:scale-110`}
              >
                Press
              </Link>
            </div>
          </div>
        </div>
      </header>
      {isShow && (
        <div className="fixed w-screen h-screen z-50 bg-[#2671cf] flex flex-col">
          <div className="grow">
            <div className="w-full justify-between items-center gap-10 inline-flex p-5 mb-10">
              <Link
                href={PAGE_ROUTE.HOME}
                onClick={() => {
                  setIsShow(false);
                }}
                className="flex"
              >
                <Image src={ic_logo} alt="logo" width={150} height={80} />
              </Link>
              <div
                className="text-white text-lg font-semibold font-interTight leading-[27px]"
                onClick={() => {
                  setIsShow(false);
                }}
              >
                Close
              </div>
            </div>
            <div className="h-[222px] flex-col justify-center items-start gap-3 inline-flex w-full">
              <Link
                href={PAGE_ROUTE.HOME}
                onClick={() => {
                  setIsShow(false);
                }}
                className="self-stretch px-5 py-3 border-b border-white/25 justify-center items-center gap-2 inline-flex"
              >
                <div className="grow shrink basis-0 text-white text-[38px] font-semibold font-nacelle leading-[41.80px]">
                  Home
                </div>
              </Link>
              <Link
                href={pathname !== "/ecosystem/" ? "#about" : PAGE_ROUTE.HOME}
                className="self-stretch px-5 py-3 border-b border-white/25 justify-center items-center gap-2 inline-flex"
              >
                <div className="grow shrink basis-0 text-white text-[38px] font-semibold font-nacelle leading-[41.80px]">
                  About
                </div>
              </Link>
              <Link
                href={PAGE_ROUTE.ECOSYSTEM}
                onClick={() => {
                  setIsShow(false);
                }}
                className="self-stretch px-5 py-3 border-b border-white/25 justify-center items-center gap-2 inline-flex"
              >
                <div className="grow shrink basis-0 text-white text-[38px] font-semibold font-nacelle leading-[41.80px]">
                  Ecosystem
                </div>
              </Link>
              <Link
                href="https://insight.aura.network/"
                target="_blank"
                className="self-stretch px-5 py-3 border-b border-white/25 justify-center items-center gap-2 inline-flex"
              >
                <div className="grow shrink basis-0 text-white text-[38px] font-semibold font-nacelle leading-[41.80px]">
                  Press
                </div>
              </Link>
            </div>
          </div>
          <div className="flex flex-col gap-6 p-5">
            <span className="text-white/80 text-base font-normal font-interTight leading-normal">
              Building the next generation of blockchain infrastructure,
              powering both enterprise transformation and entertainment
              innovation.
            </span>
            <div className="flex gap-9">
              {socials.map((item) => (
                <Link
                  key={item.name}
                  href={item.link}
                  target="_blank"
                  className="block"
                >
                  <Image className="w-5 h-5" src={item.icon} alt={item.name} />
                </Link>
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default Header;
