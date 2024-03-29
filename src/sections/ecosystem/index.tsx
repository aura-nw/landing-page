import img_ahamove from '@/assets/images/img_ahamove.svg'
import img_halotrade from '@/assets/images/img_halotrade.svg'
import img_horoscope from '@/assets/images/img_horoscope.svg'
import img_bg_gradient_mask from '@/assets/images/img_bg_gradient_mask.webp'
import Card from './components/Card'
import { AURA_ECOSYSTEM } from '@/common'
import BgImage from '../../components/Image/BgImage'

const ecosystemData = [{
    img: img_halotrade,
    name: "halotrade",
    link: AURA_ECOSYSTEM.HALO_TRADE,
    title: "HaloTrade",
    description: "Experience the first DEX built on top of Aura to swap, farm, and earn."
},
{
    img: img_ahamove,
    name: "ahamove",
    title: "Ahamove",
    link: AURA_ECOSYSTEM.AHA_MOVE,
    description: "Read more about the first mainstream integration of Aura, with the largest transport app in Vietnam."
},
{
    img: img_horoscope,
    name: "horoscope",
    link: AURA_ECOSYSTEM.HOROSCOPE,
    title: "Horoscope",
    description: "Aura's native indexing protocol, the most advance indexing architecture in Cosmos."
}]


function Ecosystem() {
    return (
        <div className="pt-14 pb-8 xl:py-24 relative w-screen flex flex-col gap-6 items-center lg:w-[96vw] min-[2560px]:w-[80vw]">
            <BgImage fill alt='' src={img_bg_gradient_mask} className='lg:rounded-3xl'/>
            <div className="flex flex-col gap-4 items-center relative">
                <div className="bg-[rgba(255,255,255,0.15)] border border-solid border-[rgba(255,255,255,0.20)] py-3 px-5 h-11 text-center rounded-full flex items-center">
                    <h4 className="font-semibold">Aura's Ecosystem</h4>
                </div>
                <h3 className="font-ppmori-semibold text-[32px] text-center font-semibold leading-[40px] xl:text-[48px] xl:leading-[56px]">Real world use case highlight</h3>
            </div>
            <div className='flex flex-col gap-4 xl:flex-row'>
                {ecosystemData.map((item, i) => (
                    <Card key={i} data={item} />
                ))}
            </div>
        </div>
    );
}

export default Ecosystem;