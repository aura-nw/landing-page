import img_circel_gradient_logo from "@/assets/images/img_circel_gradient_logo.png";
import img_circle_pyxis from '@/assets/images/img_circle_pyxis.svg';
import img_halotrade from '@/assets/images/img_halotrade.svg';
import img_horoscope from '@/assets/images/img_horoscope.svg';
import Image from "next/image";
import GradientButton from "../../components/Button/GradientButton";
import Card from "../../sections/statistics/components/Card";
import { AURA_ECOSYSTEM } from "@/common";
import Link from "next/link";

const intro = [{
    value: "Integrate",
    title: "Begin integrating our infrastructure and native applications."
},
{
    value: "Our Tech Docs",
    title: "Read our tech docs to get started building on top of Aura."
},
]

const ecosystemData = [{
    img: img_halotrade,
    title: "HaloTrade",
    link: AURA_ECOSYSTEM.HALO_TRADE,
    description: "Deploy tokens and enable Aura users to swap and earn."
},
{
    img: img_horoscope,
    title: "Horoscope",
    link: AURA_ECOSYSTEM.HOROSCOPE,
    description: "Start indexing tokens and data on Cosmos with Horoscope"
},
{
    img: img_circel_gradient_logo,
    title: "AuraScan",
    link: AURA_ECOSYSTEM.AURA_SCAN,
    description: "Begin tracking wallets, active users, and other stats through AuraScan"
},
{
    img: img_circle_pyxis,
    title: "Pyxis",
    link: AURA_ECOSYSTEM.PYXIS_SAFE,
    description: "Use fully customizable multi-sig infrastructure to protect your assets."
}
]

function Build() {
    return (
        <div className="mb-[80px]">
            <div className="main-container">
                <div className="flex flex-col items-center gap-16 mt-[14px]">
                    <div className="xl:max-w-[867px] flex flex-col gap-10 px-2 items-center">
                        <div className="text-white self-stretch text-center lg:text-center text-[48px] lg:text-[80px] font-semibold leading-[52px] lg:leading-[80px] font-ppmori-semibold">
                            Build Modular Applications
                        </div>
                        <div className="flex lg:justify-center">
                            <GradientButton>Contact Us</GradientButton>
                        </div>
                    </div>
                    <div className="flex flex-col gap-3 xl:flex-row">
                        {intro.map((item, i) => (
                            <Card key={i} data={item} className="h-full w-full lg:w-full max-w-full hover:pb-8 p-14 lg:pt-14 basis-1/2" />
                        ))}
                    </div>

                    <div className="pt-14 pb-8 px-6 xl:pt-[100px] xl:pb-[160px] xl:px-[200px] bg-[url('../assets/images/img_bg_gradient_mask.png')] bg-cover bg-no-repeat w-screen xl:w-full flex flex-col gap-6 items-center lg:rounded-[40px]">
                        <div className="flex flex-col gap-4 items-center">
                            <div className="bg-[rgba(255,255,255,0.15)] border border-solid border-[rgba(255,255,255,0.20)] py-3 px-5 h-11 text-center rounded-full flex items-center">
                                <div className="font-semibold">Aura's Ecosystem</div>
                            </div>
                            <span className="font-ppmori-semibold text-[32px] text-center font-semibold leading-[40px] xl:text-[48px] xl:leading-[56px]">
                                Select an Aura-Native Application to Integrate
                            </span>
                        </div>
                        <div className='flex flex-col gap-4 xl:flex-row xl:flex-wrap xl:justify-between xl:gap-6'>
                            {ecosystemData.map((item, i) => (
                                <Link href={item.link} target="_blank" key={i} className={`bg-white rounded-3xl xl:basis-[calc(50%_-_12px)] border border-solid border-[rgba(254,119,108,0.16)] flex flex-col gap-8 lg:justify-between p-8`}>
                                    <Image className="w-12 h-12 lg:w-16 lg:h-16 rounded-full" src={item.img} alt={item.title}></Image>
                                    <div className="flex flex-col gap-2">
                                        <span className="text-black font-ppmori-semibold font-semibold text-2xl leading-7">{item.title}</span>
                                        <span className="text-black text-lg leading-7">{item.description}</span>
                                    </div>
                                </Link>
                            ))}
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
}

export default Build;