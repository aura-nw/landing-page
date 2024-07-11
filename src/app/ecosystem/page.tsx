"use client";

import ahafast from "@/assets/images/ecosystem/aha_fast.png";
import ahamove from "@/assets/images/ecosystem/ahamove.png";
import aliniex from "@/assets/images/ecosystem/aliniex.png";
import aura_scan from "@/assets/images/ecosystem/aura_scan.png";
import band from "@/assets/images/ecosystem/band.png";
import bbb from "@/assets/images/ecosystem/bbb.png";
import bingx from "@/assets/images/ecosystem/bingx.png";
import c98 from "@/assets/images/ecosystem/c98.png";
import fpt_play from "@/assets/images/ecosystem/fpt_play.png";
import gate from "@/assets/images/ecosystem/gate.png";
import halotrade from "@/assets/images/ecosystem/halotrade.png";
import horo from "@/assets/images/ecosystem/horo.png";
import nimbus from "@/assets/images/ecosystem/img_nimbus.png";
import keplr from "@/assets/images/ecosystem/keplr.png";
import kimetsu from "@/assets/images/ecosystem/kimetsu.png";
import klever from "@/assets/images/ecosystem/klever.png";
import leap from "@/assets/images/ecosystem/leap.png";
import metamask from "@/assets/images/ecosystem/metamask.png";
import mexc from "@/assets/images/ecosystem/mexc.png";
import micro3 from "@/assets/images/ecosystem/micro3.png";
import monsterra from "@/assets/images/ecosystem/monsterra.png";
import yooldo from "@/assets/images/ecosystem/yooldo.png";
import nois from "@/assets/images/ecosystem/nois.png";
import onus from "@/assets/images/ecosystem/onus.png";
import pyxis from "@/assets/images/ecosystem/pyxis.png";
import seekhype from "@/assets/images/ecosystem/seekhype.png";
import squid from "@/assets/images/ecosystem/squid.png";
import stakify from "@/assets/images/ecosystem/stakify.png";
import sub_wallet from "@/assets/images/ecosystem/sub_wallet.png";
import tc_network from "@/assets/images/ecosystem/tc_network.png";
import the_data_nerd from "@/assets/images/ecosystem/the_data_nerd.png";

import { useEffect, useState } from "react";
import Card from "../../components/Card";
import Select from "../../components/Select";
import useWindowSize from "../../hooks/useWindowSize";

const options = [
    { value: 'All', label: 'All ' },
    { value: 'Tools', label: 'Tools' },
    { value: 'NFT', label: 'NFT' },
    { value: 'DEX', label: 'DEX' },
    { value: 'CEX', label: 'CEX' },
    { value: 'Web3 Game', label: 'Web3 Game' },
    { value: 'Wallet', label: 'Wallet' },
    { value: 'SocialFi', label: 'SocialFi' },
    { value: 'Oracle', label: 'Oracle' },
    { value: 'Others', label: 'Others' },

];

const data = [
    {
        title: 'Aurascan',
        description: 'The next generation blockchain explorer for Aura Network',
        tag: 'Tools',
        img: aura_scan
    },
    {
        title: 'Pyxis Safe',
        description: 'Multi-signature and fine -grain access control, asset management tool',
        tag: 'Tools',
        img: pyxis
    },
    {
        title: 'Horoscope',
        description: 'An indexing service to provide real-time data for Aura ecosystem',
        tag: 'Tools',
        img: horo
    },
    {
        title: 'Nimbus',
        description: 'A Personalized Portfolio for Crypto investors',
        tag: 'Tools',
        img: nimbus
    },
    {
        title: 'SeekHYPE',
        description: 'The Simplest NFT Marketplace',
        tag: 'NFT',
        img: seekhype
    },
    {
        title: 'Stakify',
        description: 'NFT Staking Campaign Platform',
        tag: 'NFT',
        img: stakify
    },
    {
        title: 'Halotrade',
        description: 'Seamless crypto trading, built for all',
        tag: 'DEX',
        img: halotrade
    },
    {
        title: 'BingX',
        tag: 'CEX',
        img: bingx
    },
    {
        title: 'MEXC',
        tag: 'CEX',
        img: mexc
    },
    {
        title: 'ONUS',
        tag: 'CEX',
        img: onus
    },
    {
        title: 'Gate',
        tag: 'CEX',
        img: gate
    },
    {
        title: 'Aliniex',
        tag: 'CEX',
        img: aliniex
    },
    {
        title: 'Monsterra',
        description: 'A leading multi-chain NFT Game with free-to-play-and-earn mechanism developed by CrescentShine Studio, offering gamers an unparalleled and immersive gaming experience.',
        tag: 'Web3 Game',
        img: monsterra
    },
    {
        title: 'Yooldo',
        description: 'Yooldo is a gaming platform renowned for its innovative Anti abuse system, Jury DAO',
        tag: 'Web3 Game',
        img: yooldo
    },
    {
        title: 'AhaFast Ride 2 Earn',
        description: 'Spearheading the Blockchain O2O (Online-to-offline) movement in Vietnam',
        tag: 'Tools',
        img: ahafast
    },
    {
        title: 'Nois Network',
        description: 'Reliable Randomness For the Interchain',
        tag: 'Others',
        img: nois
    },
    {
        title: 'Coin98',
        description: 'The #1 non-custodial, multi-chain wallet, and DeFi gateway, designed to seamlessly connect users to the crypto world in a safe and secure manner.',
        tag: 'Wallet',
        img: c98
    },
    {
        title: 'Keplr',
        description: 'Wallet for the Inter blockchain ecosystem',
        tag: 'Wallet',
        img: keplr
    },
    {
        title: 'Leap Wallet',
        description: 'The Super Wallet‍ for Web3',
        tag: 'Wallet',
        img: leap
    },
    {
        title: 'Subwallet',
        description: 'A non-custodial Web3 Wallet',
        tag: 'Wallet',
        img: sub_wallet
    },
    {
        title: 'Metamask',
        description: 'A non-custodial Web3 Wallet',
        tag: 'Wallet',
        img: metamask
    },
    {
        title: 'Klever',
        description: 'A non-custodial Web3 Wallet',
        tag: 'Wallet',
        img: klever
    },
    {
        title: 'FPT Play',
        description: 'One of the leading online TV streaming applications in Vietnam',
        tag: 'NFT',
        img: fpt_play
    },
    {
        title: 'Ahamove',
        description: 'Ahamove is an on-demand logistics company that connects motorbike and truck drivers with consumers for efficient, low-cost deliveries',
        tag: 'NFT',
        img: ahamove
    },
    {
        title: 'Business Bolar Bear',
        description: 'The Premier NFT collection on AuraNetwork that combines breathtaking visual art with powerful tools for accelerating communities on Cosmos ecosystems.',
        tag: 'NFT',
        img: bbb
    },
    {
        title: 'The Data Nerd',
        description: 'Research & analytics firm that gathers top minds and utilizes machine learning to create actionable insights & give alpha signals.',
        tag: 'NFT',
        img: the_data_nerd
    },
    {
        title: 'TC Network',
        description: 'NFT Creators include group of blockchain developers and enthusiasts who run nodes on Proof-of-Stake (PoS) blockchains.',
        tag: 'NFT',
        img: tc_network
    },
    {
        title: 'Aura x Kimetsu',
        description: 'An NFT collection inspired by Kimetsu No Yaiba (Demon Slayer)',
        tag: 'NFT',
        img: kimetsu
    },
    {
        title: 'Larking on the Blockchain',
        description: 'This collection is the result of a collaboration between GM Vietnam and Jay Tran to accelerate the Vietnamese blockchain ecosystem globally.',
        tag: 'NFT',
        img: kimetsu
    },
    {
        title: 'Band Protocol',
        description: 'A cross-chain data oracle platform that aggregates and connects real-world data and APIs to smart contracts.',
        tag: 'Oracle',
        img: band
    },
    {
        title: 'Squid',
        description: 'The first native-to-native cross-chain solution, replacing bridges with 1-click cross-chain swaps',
        tag: 'Oracle',
        img: squid
    },
    {
        title: 'Micro3',
        description: 'A Decentralized SocialFi Mint-To-Earn platform that empowers Web3 projects and individuals through the creator economy, leveraging advanced LayerZero and Chainlink technologies.',
        tag: 'SocialFi',
        img: micro3
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
                                <div key={i} className={`p-4 h-16 text-medium-gray text-[20px] rounded-lg leading-8 ${selectedTag === e.value ? 'bg-[#171513]' : ''}`} onClick={() => handleSelect(e.value)}>
                                    {e.label}
                                </div>
                            ))}
                        </div>
                        <div className="flex flex-col gap-4 flex-1">
                            <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
                                {visibleItems.map((e, index) => (
                                    <Card key={index} data={e} />
                                ))}
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
