import img_halotrade from '@/assets/images/img_halotrade.svg'
import img_ahamove from '@/assets/images/img_ahamove.svg'
import img_horoscope from '@/assets/images/img_horoscope.svg'
import Card from './components/Card';

const ecosystemData = [{
    img: img_halotrade,
    title: "HaloTrade",
    description: "Experience the first DEX built on top of Aura to swap, farm, and earn."
},
{
    img: img_ahamove,
    title: "Ahamove",
    description: "Read more about the first mainstream integration of Aura, with the largest transport app in Vietnam."
},
{
    img: img_horoscope,
    title: "Horoscope",
    description: "Aura's native indexing protocol, the most advance indexing architecture in Cosmos."
}]


function Ecosystem() {
    return (
        <div className="pt-14 pb-8 bg-ecosystem-gradient w-screen lg:w-full flex flex-col gap-6 items-center">
            <div className="flex flex-col gap-4 items-center">
                <div className="bg-[rgba(255,255,255,0.15)] border border-solid border-[rgba(255,255,255,0.20)] py-3 px-5 h-11 text-center rounded-full flex items-center">
                    <div className="font-semibold">Aura's Ecosystem</div>
                </div>
                <span className="font-ppmori-semibold text-[32px] text-center font-semibold leading-[40px]">Real world use case highlight</span>
            </div>
            <div className='flex flex-col gap-4'>
                {ecosystemData.map((item, i) => (
                    <Card key={i} data={item} />
                ))}
            </div>
        </div>
    );
}

export default Ecosystem;