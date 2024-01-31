import ic_discord from "@/assets/icons/ic_discord_none_bg.svg";
import ic_medium from "@/assets/icons/ic_medium.svg";
import ic_telegram from "@/assets/icons/ic_telegram_gray.svg";
import ic_x from "@/assets/icons/ic_x.svg";
import ic_logo from "@/assets/images/img_logo.svg";
import Image from "next/image";
import Link from "next/link";

const socials = [
  {
    name: "X",
    link: "/",
    icon: ic_x
  },
  {
    name: "Medium",
    link: "/",
    icon: ic_medium
  },
  {
    name: "Discord",
    link: "/",
    icon: ic_discord
  },
  {
    name: "Telegram",
    link: "/",
    icon: ic_telegram
  },
]

function Footer() {
  return (
    <footer className="">
      <div className="bg-[url('../assets/images/img_footer_mb.png')] bg-no-repeat bg-cover pt-[200px] md:pt-[320px] lg:bg-none lg:pt-0">
        <div className="flex flex-col gap-[50px] border-b border-[rgba(150,140,124,0.20)] justify-end px-6 pb-[120px] bg-black xl:px-[313px] xl:pt-16 xl:pb-[240px]">
          <div className="flex justify-between">
            <div className="flex flex-col gap-6 lg:gap-8 xl:w-[378px]">
              <Image src={ic_logo} alt="logo" className="w-[117px] h-9" />
              <div className="flex gap-9">
                {socials.map((item) => (
                  <Link key={item.name} href={item.link} className="block">
                    <Image className="w-5 h-5" src={item.icon} alt={item.name} />
                  </Link>
                ))}
              </div>
              <span className="text-medium-gray font-normal leading-6">A scalable, agile and effortless Layer-1 blockchain with a comprehensive ecosystem to accelerate global NFTs adoption.</span>
            </div>
            <div className="flex flex-wrap gap-16 xl:gap-[80px] justify-between">
              <div className="flex flex-col gap-4 w-[133px] xl:w-auto xl:h-auto h-[124px]">
                <span className="font-ppmori-semibold font-semibold leading-5">
                  Developer
                </span>
                <div className="flex flex-col gap-2">
                  <span className="text-medium-gray leading-6 font-normal">Docs</span>
                  <span className="text-medium-gray leading-6 font-normal">Tools</span>
                  <span className="text-medium-gray leading-6 font-normal">Contracts</span>
                </div>
              </div>

              <div className="flex flex-col gap-4 w-[133px] xl:w-auto xl:h-auto h-[124px]">
                <span className="font-ppmori-semibold font-semibold leading-5">
                  Ecosystem
                </span>
                <div className="flex flex-col gap-2">
                  <span className="text-medium-gray leading-6 font-normal">Whitepaper</span>
                  <span className="text-medium-gray leading-6 font-normal">DApps</span>
                  <span className="text-medium-gray leading-6 font-normal">Token</span>
                </div>
              </div>

              <div className="flex flex-col gap-4 w-[133px] xl:w-auto xl:h-auto h-[124px]">
                <span className="font-ppmori-semibold font-semibold leading-5">
                  Legal
                </span>
                <div className="flex flex-col gap-2">
                  <span className="text-medium-gray leading-6 font-normal">Terms of use</span>
                  <span className="text-medium-gray leading-6 font-normal">Privacy policy</span>
                  <span className="text-medium-gray leading-6 font-normal">Legal terms</span>
                </div>
              </div>

              <div className="flex flex-col gap-4 w-[133px] xl:w-auto xl:h-auto">
                <span className="font-ppmori-semibold font-semibold leading-5">
                  Career
                </span>
                <div className="flex flex-col gap-2">
                  <span className="text-medium-gray leading-6 font-normal">Jobs</span>
                </div>
              </div>
            </div>
          </div>
          <div className="justify-center pt-8 hidden xl:flex xl:border-t border-[rgba(150,140,124,0.20)]">
              <span className="text-medium-gray leading-6 font-normal text-center">© Aura Network 2023. All rights reserved</span>
            </div>
        </div>
      </div>

    </footer>
  );
}

export default Footer;
