import ic_discord from "@/assets/icons/ic_discord_none_bg.svg";
import ic_telegram from "@/assets/icons/ic_telegram.svg";
import ic_x from "@/assets/icons/ic_x.svg";
import logo_2 from "@/assets/images/logo_2.png";
import { PAGE_ROUTE, SOCIAL } from "@/common";
import Image from "next/image";
import Link from "next/link";

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

function Footer() {
  return (
    <footer className="bg-[#0b1d30]">
      <div className="mx-20 pb-10">
        <div className="flex flex-col gap-[50px] justify-end pt-[64px] sm:pt-[120px] pb-[64px] sm:pb-[40px]">
          <div className="flex flex-col gap-16 lg:gap-0 lg:flex-row">
            <div className="flex flex-col gap-6 lg:gap-8 xl:w-1/2">
              <Image src={logo_2} alt="logo" height={85} />
              <span className="text-white/80 text-base font-normal font-interTight leading-normal xl:w-[378px]">
                Building the next generation RWA chain, enabling enterprise, entertainment, and government on-chain solutions.
              </span>
              <div className="flex gap-9">
                {socials.map((item) => (
                  <Link key={item.name} href={item.link} target="_blank" className="block">
                    <Image className="w-5 h-5" src={item.icon} alt={item.name} />
                  </Link>
                ))}
              </div>
            </div>
            <div className="flex flex-wrap gap-16 xl:gap-[80px] justify-between">
              <div className="flex flex-col gap-4 w-[133px] xl:w-auto xl:h-auto h-[124px]">
                <span className="text-white text-base font-semibold font-interTight leading-normal">Explore</span>
                <div className="flex flex-col gap-2">
                  <Link href={PAGE_ROUTE.HOME} className="text-white/80 text-base font-normal font-interTight leading-normal">
                    Home
                  </Link>
                  <Link href="https://app.aura.network/" target="_blank" className="text-white/80 text-base font-normal font-interTight leading-normal">
                    Products
                  </Link>
                  <Link href="#press" className="text-white/80 text-base font-normal font-interTight leading-normal">
                    Insight
                  </Link>
                </div>
              </div>

              <div className="flex flex-col gap-4 w-[133px] xl:w-auto xl:h-auto h-[124px]">
                <span className="text-white text-base font-semibold font-interTight leading-normal">Legal</span>
                <div className="flex flex-col gap-2">
                  <Link href="https://images.aura.network/docs/Terms-of-Use.pdf" className="text-white/80 text-base font-normal font-interTight leading-normal">
                    Terms of use
                  </Link>
                  <Link href="#" className="text-white/80 text-base font-normal font-interTight leading-normal">
                    Privacy policy
                  </Link>
                  <Link href="#" className="text-white/80 text-base font-normal font-interTight leading-normal">
                    Legal terms
                  </Link>
                </div>
              </div>

              {/* <div className="flex flex-col gap-4 w-[133px] xl:w-auto xl:h-auto h-[124px]">
              <span className="font-ppmori-semibold font-semibold leading-5">
                Legal
              </span>
              <div className="flex flex-col gap-2">
                <span className="text-medium-gray leading-6 font-normal">Terms of use</span>
                <span className="text-medium-gray leading-6 font-normal">Privacy policy</span>
                <span className="text-medium-gray leading-6 font-normal">Legal terms</span>
              </div>
            </div> */}

              <div className="flex flex-col gap-4 w-[133px] xl:w-auto xl:h-auto">
                <span className="text-white text-base font-semibold font-interTight leading-normal">Career</span>
                <div className="flex flex-col gap-2">
                  <Link href="https://aura-network.notion.site/hiring" target="_blank" className="text-white/80 text-base font-normal font-interTight leading-normal">
                    Jobs
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="justify-start pt-2 sm:pt-8 flex border-t border-[rgba(150,140,124,0.20)]">
            <span className="text-white/80 text-sm font-normal font-interTight leading-tight">© Aura Network 2024. All rights reserved</span>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
