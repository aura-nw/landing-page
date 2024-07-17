"use client";

import ahafast from "@/assets/images/ecosystem/aha_fast.png";
import aliniex from "@/assets/images/ecosystem/aliniex.png";
import aura_scan from "@/assets/images/ecosystem/aura_scan.png";
import band from "@/assets/images/ecosystem/band.png";
import bingx from "@/assets/images/ecosystem/bingx.png";
import c98 from "@/assets/images/ecosystem/c98.png";
import dev3 from "@/assets/images/ecosystem/dev3.png";
import gate from "@/assets/images/ecosystem/gate.png";
import halotrade from "@/assets/images/ecosystem/halotrade.png";
import horo from "@/assets/images/ecosystem/horo.png";
import nimbus from "@/assets/images/ecosystem/img_nimbus.png";
import keplr from "@/assets/images/ecosystem/keplr.png";
import klever from "@/assets/images/ecosystem/klever.png";
import leap from "@/assets/images/ecosystem/leap.png";
import mexc from "@/assets/images/ecosystem/mexc.png";
import micro3 from "@/assets/images/ecosystem/micro3.png";
import monsterra from "@/assets/images/ecosystem/monsterra.png";
import nois from "@/assets/images/ecosystem/nois.png";
import onus from "@/assets/images/ecosystem/onus.png";
import pyxis from "@/assets/images/ecosystem/pyxis.png";
import seekhype from "@/assets/images/ecosystem/seekhype.png";
import stakify from "@/assets/images/ecosystem/stakify.png";
import sub_wallet from "@/assets/images/ecosystem/sub_wallet.png";
import validator_0 from "@/assets/images/ecosystem/validator_0.png";
import validator_1 from "@/assets/images/ecosystem/validator_1.png";
import validator_10 from "@/assets/images/ecosystem/validator_10.png";
import validator_11 from "@/assets/images/ecosystem/validator_11.png";
import validator_2 from "@/assets/images/ecosystem/validator_2.png";
import validator_3 from "@/assets/images/ecosystem/validator_3.png";
import validator_4 from "@/assets/images/ecosystem/validator_4.png";
import validator_5 from "@/assets/images/ecosystem/validator_5.png";
import validator_6 from "@/assets/images/ecosystem/validator_6.png";
import validator_7 from "@/assets/images/ecosystem/validator_7.png";
import validator_8 from "@/assets/images/ecosystem/validator_8.png";
import validator_9 from "@/assets/images/ecosystem/validator_9.png";
import yooldo from "@/assets/images/ecosystem/yooldo.png";


import { useEffect, useState } from "react";
import Card from "../../components/Card";
import Select from "../../components/Select";
import useWindowSize from "../../hooks/useWindowSize";

const options = [
    { value: 'All', label: 'All ' },
    { value: 'Infrastructure', label: 'Infrastructure' },
    { value: 'NFT', label: 'NFT' },
    { value: 'CEX', label: 'CEX' },
    { value: 'Wallet', label: 'Wallet' },
    { value: 'DeFi', label: 'DeFi' },
    { value: 'Validator', label: 'Validator' },
    { value: 'Web3 Game', label: 'Web3 Game' },
    { value: 'SocialFi', label: 'SocialFi' },
    { value: 'Web2 Transition', label: 'Web2 Transition' },
];

const data = [
    {
        title: 'Aurascan',
        description: 'The next generation blockchain explorer for Aura Network',
        tag: 'Infrastructure',
        img: aura_scan,
        link: 'https://aurascan.io/'
    },
    {
        title: 'Pyxis Safe',
        description: 'Multi-signature and fine -grain access control, asset management tool',
        tag: 'Infrastructure',
        img: pyxis,
        link: 'https://pyxis.aura.network/'
    },
    {
        title: 'Horoscope',
        description: 'An indexing service to provide real-time data for Aura ecosystem',
        tag: 'Infrastructure',
        img: horo,
        link: 'https://horoscope.aura.network/'
    },
    {
        title: 'Band Protocol',
        description: 'A cross-chain data oracle platform that aggregates and connects real-world data and APIs to smart contracts.',
        tag: 'Infrastructure',
        img: band,
        link: 'https://www.bandprotocol.com/'
    },
    {
        title: 'Nois Network',
        description: 'Reliable Randomness For the Interchain',
        tag: 'Infrastructure',
        img: nois,
        link: 'https://nois.network/'
    },
    {
        title: 'Dev3Map',
        description: 'The Interchain Developers Metrics Map',
        tag: 'Infrastructure',
        img: dev3,
        link: 'https://beta.dev3map.com/'
    },
    {
        title: 'Nimbus',
        description: 'A Personalized Portfolio for Crypto investors',
        tag: 'DeFi',
        img: nimbus,
        link: 'https://getnimbus.io/'
    },
    {
        title: 'Halotrade',
        description: 'Seamless crypto trading, built for all',
        tag: 'DeFi',
        img: halotrade,
        link: 'https://halotrade.zone/'
    },
    {
        title: 'BingX',
        tag: 'CEX',
        img: bingx,
        link: 'https://bingx.com/vi-vn/'
    },
    {
        title: 'MEXC',
        tag: 'CEX',
        img: mexc,
        link: 'https://www.mexc.com/'
    },
    {
        title: 'ONUS',
        tag: 'CEX',
        img: onus,
        link: 'https://goonus.io/'
    },
    {
        title: 'Gate',
        tag: 'CEX',
        img: gate,
        link: 'http://gate.io'
    },
    {
        title: 'Aliniex',
        tag: 'CEX',
        img: aliniex,
        link: 'https://aliniex.com/'

    },
    {
        title: 'Monsterra',
        description: 'A leading multi-chain NFT Game with free-to-play-and-earn mechanism developed by CrescentShine Studio, offering gamers an unparalleled and immersive gaming experience.',
        tag: 'Web3 Game',
        img: monsterra,
        link: 'https://monsterra.io/'
    },
    {
        title: 'Yooldo',
        description: 'Yooldo is a gaming platform renowned for its innovative Anti abuse system, Jury DAO',
        tag: 'Web3 Game',
        img: yooldo,
        link: 'https://www.yooldo.gg/'
    },
    {
        title: 'AhaFast Ride 2 Earn',
        description: 'Spearheading the Blockchain O2O (Online-to-offline) movement in Vietnam',
        tag: 'Web2 Transition',
        img: ahafast,
        link: 'https://twitter.com/ahafastofficial'
    },
    {
        title: 'Coin98',
        description: 'The #1 non-custodial, multi-chain wallet, and DeFi gateway, designed to seamlessly connect users to the crypto world in a safe and secure manner.',
        tag: 'Wallet',
        img: c98,
        link: 'https://coin98.com/wallet'
    },
    {
        title: 'Keplr',
        description: 'Wallet for the Inter blockchain ecosystem',
        tag: 'Wallet',
        img: keplr,
        link: 'https://www.klever.io/'
    },
    {
        title: 'Leap Wallet',
        description: 'The Super Wallet‍ for Web3',
        tag: 'Wallet',
        img: leap,
        link: 'https://www.leapwallet.io/'
    },
    {
        title: 'Subwallet',
        description: 'A non-custodial Web3 Wallet',
        tag: 'Wallet',
        img: sub_wallet,
        link: 'https://www.subwallet.app/'
    },
    {
        title: 'Klever',
        description: 'The Ultimate Crypto Wallet for Your Digital Assets',
        tag: 'Wallet',
        img: klever,
        link: 'https://www.klever.io/'
    },
    {
        title: 'SeekHYPE',
        description: 'NFT Marketplace for IP',
        tag: 'NFT',
        img: seekhype,
        link: 'https://beta.seekhype.io/'
    },
    {
        title: 'Stakify',
        description: 'NFT Staking Campaign Platform',
        tag: 'NFT',
        img: stakify,
        link: 'https://stakify.zone/'
    },
    {
        title: 'Aura Validators',
        tag: 'Validator',
        img: aura_scan,
        listImgs: [validator_0, validator_1, validator_2, validator_3, validator_4, validator_5, validator_6, validator_7, validator_8, validator_9, validator_10, validator_11],
        link: 'https://aurascan.io/validators'
    },
    {
        title: 'Micro3',
        description: 'A Decentralized SocialFi Mint-To-Earn platform that empowers Web3 projects and individuals through the creator economy, leveraging advanced LayerZero and Chainlink technologies.',
        tag: 'SocialFi',
        img: micro3,
        link: 'https://micro3.io/',
        isBigger: true
    },
]

function Ecosystem() {
    const { isMobile } = useWindowSize();
    const [selectedTag, setSelectedTag] = useState<string>('All');
    const [displayedItems, setDisplayedItems] = useState<number>(6);
    const [visibleItems, setVisibleItems] = useState(data.slice(0, 6));

    const filteredData = selectedTag && selectedTag !== 'All'
        ? data.filter(item => item.tag === selectedTag)
        : data;

    useEffect(() => {
        setDisplayedItems(isMobile ? 6 : 12);
    }, [isMobile]);

    useEffect(() => {
        setVisibleItems(filteredData.slice(0, displayedItems));
    }, [selectedTag, displayedItems, data]);

    const handleSelect = (option: string) => {
        setSelectedTag(option);
        setDisplayedItems(6);
    };

    const loadMore = () => {
        setDisplayedItems(prev => prev + 6);
    };


    return (
        <div className="mb-[60px] lg:mb-[160px]">
            <div className="main-container">
                <div className="flex flex-col items-center gap-6 lg:gap-16 mt-[14px] w-full lg:mt-0">
                    <div className="xl:max-w-[867px] flex flex-col gap-10 px-2 items-center">
                        <div className="flex flex-col items-center gap-16">
                            <div>
                                <div className="flex flex-col">
                                    <h1 className="text-white self-stretch text-center lg:text-center text-[36px] lg:text-[48px] font-semibold leading-[52px] lg:leading-[80px] font-ppmori-semibold">
                                        Ecosystem
                                    </h1>
                                    <span className="text-medium-gray text-[20px] leading-8 text-center">
                                        Explore applications and integrations in the Aura ecosystem.
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <Select
                        options={options}
                        selectedOption={selectedTag}
                        onSelect={handleSelect}
                    />
                    <div className="lg:flex lg:gap-10 w-full">
                        <div className="hidden lg:flex lg:flex-col min-w-[354px]">
                            {options.map((e, i) => (
                                <div key={i} className={`p-4 cursor-pointer h-16 text-medium-gray text-[20px] rounded-lg leading-8 ${selectedTag === e.value ? 'bg-[#171513]' : ''}`} onClick={() => handleSelect(e.value)}>
                                    {e.label}
                                </div>
                            ))}
                        </div>
                        <div className="flex flex-col gap-4 flex-1">
                            <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
                                {visibleItems.map((e, index) => {
                                    if (e.isBigger) {
                                        return (
                                            <div key={index} className="col-span-1 lg:col-span-2">
                                                <Card data={e} />
                                            </div>
                                        );
                                    }
                                    return (
                                        <div key={index} className="col-span-1">
                                            <Card data={e} />
                                        </div>
                                    );
                                }
                                )}
                            </div>
                            {visibleItems.length < filteredData.length && (
                                <button
                                    className="w-fit rounded-full bg-brand-gradient hover:text-[#FD9552] hover:bg-dark-charcoal hover:bg-none hover:border hover:border-[#262320] py-4 px-8 font-semibold text-black text-lg leading-normal h-[54px] flex items-center"
                                    onClick={loadMore}
                                >
                                    Load more
                                </button>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Ecosystem;
