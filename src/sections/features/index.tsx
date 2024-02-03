import img_coins from '@/assets/images/img_coins.svg'
import img_blocks from '@/assets/images/img_blocks.svg'
import img_universe from '@/assets/images/img_universe.svg'
import Card from './components/Card';
import GradientButton from '../../components/Button/GradientButton';

const featuresData = [{
    img: img_coins,
    title: "Account Abstraction",
    description: "Aura brings account abstraction to Cosmos for the first time, allowing developers and chains to build mainstream-friendly DApps and create unparalleled improvements in user experience."
},
{
    img: img_blocks,
    title: "Account Abstraction",
    description: "Aura brings account abstraction to Cosmos for the first time, allowing developers and chains to build mainstream-friendly DApps and create unparalleled improvements in user experience."
},
{
    img: img_universe,
    title: "Account Abstraction",
    description: "Aura brings account abstraction to Cosmos for the first time, allowing developers and chains to build mainstream-friendly DApps and create unparalleled improvements in user experience."
}]

function Features() {
    return (
        <div className="w-full flex flex-col lg:flex-row gap-6 lg:justify-between lg:px-10 lg:py-[80px]">
            <div>
                <div className="flex flex-col gap-12 justify-center items-center self-stretch lg:items-start lg:justify-start lg:pt-20 lg:w-[540px] sticky top-[140px]">
                    <div className='flex flex-col gap-4 justify-center items-center self-stretch xl:items-start'>
                        <span className="text-light-yellow font-normal text-center xl:text-start xl:text-xl">Aura's distinguished features</span>
                        <span className="font-ppmori-semibold text-[28px] text-center font-semibold leading-9 min-w-[313px] xl:text-start xl:text-[48px] xl:leading-[56px]">Breaking down the barriers to mass adoption</span>
                    </div>
                    <GradientButton className='hidden xl:flex'>Learn more</GradientButton>
                </div>
            </div>
            <div className='flex flex-col gap-6 items-center justify-center'>
                <div className='flex flex-col gap-4 items-center justify-center'>
                    {featuresData.map((item, i) => (
                        <Card key={i} data={item} />
                    ))}
                </div>
                <GradientButton className='xl:hidden'>Learn more</GradientButton>
            </div>
        </div>
    );
}
export default Features;