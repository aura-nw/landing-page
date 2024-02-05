import ic_discord from "@/assets/icons/ic_discord_none_bg.svg";
import ic_medium from "@/assets/icons/ic_medium.svg";
import ic_telegram from "@/assets/icons/ic_telegram_gray.svg";
import ic_x from "@/assets/icons/ic_x.svg";
import ic_logo from "@/assets/images/img_logo.svg";
import { SOCIAL } from "@/common";
import Image from "next/image";
import Link from "next/link";

const socials = [
  {
    name: "X",
    link: SOCIAL.TWITTER,
    icon: ic_x
  },
  {
    name: "Medium",
    link: "/",
    icon: ic_medium
  },
  {
    name: "Discord",
    link: SOCIAL.DISCORD,
    icon: ic_discord
  },
  {
    name: "Telegram",
    link: SOCIAL.TELEGRAM,
    icon: ic_telegram
  },
]

function Footer() {
  return (
    <footer className="bg-[url('../assets/images/img_bg_footer_mb.png')] bg-cover bg-no-repeat pt-[200px] md:pt-[320px] lg:pt-0">
      <div className="flex flex-col gap-[50px] border-b border-[rgba(150,140,124,0.20)] justify-end px-6 pb-[120px] bg-black xl:px-[313px] xl:pt-16 xl:pb-[240px]">
        <div className="flex flex-col gap-16 lg:gap-0 lg:flex-row justify-between">
          <div className="flex flex-col gap-6 lg:gap-8 xl:w-[378px]">
            <Image src={ic_logo} alt="logo" className="w-[117px] h-9" />
            <div className="flex gap-9">
              {socials.map((item) => (
                <Link key={item.name} href={item.link} target="_blank" className="block">
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
                <Link href='https://docs.aura.network/' target="_blank" className="text-medium-gray leading-6 font-normal">Docs</Link>
                <Link href='https://docs.aura.network/developer/' target="_blank" className="text-medium-gray leading-6 font-normal">Tools</Link>
                <Link href='https://bscscan.com/address/0x23c5D1164662758b3799103Effe19cC064d897D6' target="_blank" className="text-medium-gray leading-6 font-normal">Contracts</Link>
              </div>
            </div>

            <div className="flex flex-col gap-4 w-[133px] xl:w-auto xl:h-auto h-[124px]">
              <span className="font-ppmori-semibold font-semibold leading-5">
                Ecosystem
              </span>
              <div className="flex flex-col gap-2">
                <Link href='https://github.com/aura-nw/whitepaper/blob/main/release/Aura_Network___whitepaper.pdf' target="_blank" className="text-medium-gray leading-6 font-normal">Whitepaper</Link>
                <Link href='https://docs.aura.network/overview/intro/' target="_blank" className="text-medium-gray leading-6 font-normal">DApps</Link>
                <Link href='https://docs.aura.network/overview/tokenomic/' target="_blank" className="text-medium-gray leading-6 font-normal">Token</Link>
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
                <Link href='https://www.notion.so/Aura-Job-Board-172bb39a89d844b0a0e1d8871026dc23' target="_blank" className="text-medium-gray leading-6 font-normal">Jobs</Link>
              </div>
            </div>
          </div>
        </div>
        <div className="justify-center pt-8 hidden xl:flex xl:border-t border-[rgba(150,140,124,0.20)]">
          <span className="text-medium-gray leading-6 font-normal text-center">© Aura Network 2023. All rights reserved</span>
        </div>
      </div>
    </footer>

  );
}

export default Footer;
