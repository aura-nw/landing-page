import img_coins from '@/assets/images/img_coins_2.png'
import img_blocks from '@/assets/images/img_blocks_2.png'
import img_universe from '@/assets/images/img_universe_2.png'
import Card from './components/Card';
import GradientButton from '../../components/Button/GradientButton';
import Image from 'next/image';

const featuresData = [{
    img: img_universe,
    title: "Cross-Chain Interoperability Protocols",
    description: "LayerZero, Axelar, Wormhole, Celer, etc., offer secure and efficient cross-chain transactions."
},
{
    img: img_coins,
    title: "Account Abstraction",
    description: "AA enables us to create smart contract accounts, bundle multiple transactions into a single execution, and abstract gas fees from the user's perspective."
},
{
    img: img_blocks,
    title: "Chain Abstraction",
    description: "CA is a new paradigm that allows users to execute transactions or their intent to transact on any chain within Web3."
}]

function Features() {
    return (
        <div className="w-full flex flex-col lg:flex-row gap-6 lg:justify-between lg:px-10 lg:pt-[160px] lg:pb-[80px]">
            <div>
                <div className="flex flex-col gap-12 justify-center items-center self-stretch lg:items-start lg:justify-start lg:pt-20 lg:w-[540px] sticky top-[140px]">
                    <div className='flex flex-col gap-4 justify-center items-center self-stretch xl:items-start'>
                        <span className="text-light-yellow font-normal text-center text-sm xl:text-start xl:text-xl font-jetBrains-mono">AURA'S DISTINGUISHED FEATURES</span>
                        <h2 className="font-ppmori-semibold text-[28px] text-center font-semibold leading-9 min-w-[313px] xl:text-start xl:text-[48px] xl:leading-[56px]">Breaking down the barriers to mass adoption</h2>
                    </div>
                    <GradientButton className='hidden xl:flex' href='/introduction'>Learn more</GradientButton>
                </div>
            </div>
            <div className='flex flex-col gap-6 items-center justify-center'>
                <div className='flex flex-col gap-4 items-center justify-center'>
                    {featuresData.map((item, i) => (
                        <Card key={i} data={{ ...item, index: i }} />
                    ))}
                </div>
                <GradientButton className='xl:hidden' href='/introduction'>Learn more</GradientButton>
            </div>
        </div>
    );
}
export default Features;