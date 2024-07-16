import img_aura_2 from '@/assets/images/img_aura_2.png';
import img_aura_thumb from '@/assets/images/img_aura_thumb.png';
import img_c98 from '@/assets/images/img_c98.png';
import img_cat_22 from '@/assets/images/img_cat-22.png';
import img_catze from '@/assets/images/img_catze.png';
import img_catze_1 from '@/assets/images/img_catze_1.png';
import img_catze_2 from '@/assets/images/img_catze_2.png';
import img_creek_river from '@/assets/images/img_creek_river.png';
import img_crescentshine from '@/assets/images/img_crescentshine.png';
import img_daisies from '@/assets/images/img_daisies.png';
import img_depip from '@/assets/images/img_depip.png';
import img_depip_2 from '@/assets/images/img_depip_2.png';
import img_keplr from '@/assets/images/img_keplr.png';
import img_klever from '@/assets/images/img_klever.png';
import img_leap from '@/assets/images/img_leap.png';
import img_metamask from '@/assets/images/img_metamask.png';
import img_monsterra from '@/assets/images/img_monsterra.png';
import img_peacock from '@/assets/images/img_peacock.png';
import img_punkga from '@/assets/images/img_punkga.png';
import img_punkga_1 from '@/assets/images/img_punkga_1.png';
import img_punkga_2 from '@/assets/images/img_punkga_2.png';
import img_punkga_3 from '@/assets/images/img_punkga_3.png';
import img_story_protocol from '@/assets/images/img_story_protocol.png';
import img_story_protocol_2 from '@/assets/images/img_story_protocol_2.png';
import img_subwallet from '@/assets/images/img_subwallet.png';



import Image from 'next/image';

function Explore() {
    return (
        <div className='flex flex-col gap-10 w-full lg:gap-0'>

            {/* Infrastructure */}
            <div className='flex flex-col gap-4 lg:gap-10 lg:min-h-[652px] lg:order-2 lg:flex-row lg:items-start lg:sticky lg:top-[160px]'>
                <div className='flex flex-col gap-10'>
                    <div className="flex flex-col gap-6 items-center lg:order-first lg:flex-row lg:justify-between lg:sticky">
                        <span className='text-[28px] lg:text-[32px] font-ppmori-semibold lg:leading-9 leading-10 w-full lg:w-[360px]'>Explore Aura IP Network</span>
                    </div>
                    <div className='flex gap-5 items-center border-b border-[#221F19] py-[14px] lg:min-w-[360px]'>
                        <svg width="32" height="33" viewBox="0 0 32 33" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M4 5.58746H13M4 12.5875H28M4 19.5875H13M4 26.5875H13M19 5.58746H28M19 19.5875H28M19 26.5875H28" stroke="url(#paint0_linear_3094_4889)" stroke-width="2" stroke-linecap="round" />
                            <defs>
                                <linearGradient id="paint0_linear_3094_4889" x1="4" y1="3.57011" x2="-0.449862" y2="19.5524" gradientUnits="userSpaceOnUse">
                                    <stop offset="0.23" stop-color="#EC737E" />
                                    <stop offset="0.31" stop-color="#EC7977" />
                                    <stop offset="0.43" stop-color="#ED8A65" />
                                    <stop offset="0.44" stop-color="#ED8C63" />
                                    <stop offset="0.75" stop-color="#FFDF8F" />
                                </linearGradient>
                            </defs>
                        </svg>
                        <span className='font-ppmori-semibold text-2xl'>Infrastructure</span>
                    </div>
                </div>


                <div className='flex flex-col gap-5 lg:flex-row lg:flex-1 lg:bg-black-linear-gradient lg:pt-[120px]'>
                    <div className='border border-[#221F19] rounded-2xl bg-black-charcoal h-[252px] relative lg:flex-1'>
                        <div className='h-[120px]'>
                            <Image className='w-full rounded-t-2xl h-[120px]' alt='' src={img_story_protocol} />
                        </div>
                        <div className='flex flex-col absolute top-[84px] left-6 gap-6'>
                            <div className='w-16 h-16 rounded-xl border-4 border-[#221F19] bg-[#111111]'>
                                <Image className='w-full rounded-xl' alt='' src={img_story_protocol_2} />
                            </div>
                            <div className='flex flex-col gap-1'>
                                <span className='font-ppmori-semibold text-xl'>Story Protocol</span>
                                <span className='text-[16px] leading-6 text-medium-gray'>The Programmable IP Layer</span>
                            </div>
                        </div>
                    </div>
                    <div className='bg-dark-charcoal p-6 rounded-lg flex flex-col gap-6 border border-linear lg:flex-1'>
                        <span className='font-jetBrains-mono text-[16px] text-light-yellow'>COMING SOON</span>
                        <span className='font-ppmori-semibold text-[28px] leading-9'>Another L1/L2</span>
                    </div>
                </div>
            </div>

            {/* Abstraction Layer */}
            <div className='flex flex-col gap-4 lg:gap-10 lg:min-h-[652px] lg:order-3 lg:flex-row lg:items-start lg:sticky lg:top-[160px]'>
                <div className='flex gap-5 items-center border-b border-[#221F19] py-[14px] lg:min-w-[360px] lg:mt-[174px]'>
                    <svg width="32" height="33" viewBox="0 0 32 33" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M7 12.5875H28M4 19.5875H24.5M17 5.58746H28M4 26.5875H15.5" stroke="url(#paint0_linear_3094_4910)" stroke-width="2" stroke-linecap="round" />
                        <defs>
                            <linearGradient id="paint0_linear_3094_4910" x1="4" y1="3.57011" x2="-0.449864" y2="19.5524" gradientUnits="userSpaceOnUse">
                                <stop offset="0.23" stop-color="#EC737E" />
                                <stop offset="0.31" stop-color="#EC7977" />
                                <stop offset="0.43" stop-color="#ED8A65" />
                                <stop offset="0.44" stop-color="#ED8C63" />
                                <stop offset="0.75" stop-color="#FFDF8F" />
                            </linearGradient>
                        </defs>
                    </svg>
                    <span className='font-semibold font-ppmori-semibold text-2xl'>Abstraction Layer</span>
                </div>

                <div className='flex flex-col gap-5 lg:flex-row lg:pt-[120px] lg:bg-black-linear-gradient lg:w-full'>
                    <div className='border border-[#221F19] rounded-2xl bg-black-charcoal h-[276px] relative lg:flex-1'>
                        <div className='h-[120px]'>
                            <Image className='w-full rounded-t-2xl h-[120px]' alt='' src={img_aura_thumb} />
                        </div>
                        <div className='flex flex-col absolute top-[84px] gap-6 px-6 pb-6'>
                            <div className='w-16 h-16 rounded-xl border-4 border-[#221F19] bg-[#111111]'>
                                <Image className='w-full rounded-xl' alt='' src={img_aura_2} />
                            </div>
                            <div className='flex flex-col gap-1'>
                                <span className='font-ppmori-semibold text-xl'>Aura Network</span>
                                <span className='text-[16px] leading-6 text-medium-gray line-clamp-2'>The First Abstraction Layer for IPs offering Account Abstraction and Crosschain Communication</span>
                            </div>
                        </div>
                    </div>
                    <div className='border border-[#221F19] rounded-2xl bg-black-charcoal h-[276px] relative lg:flex-1'>
                        <div className='h-[120px]'>
                            <Image className='w-full rounded-t-2xl h-[120px]' alt='' src={img_depip} />
                        </div>
                        <div className='flex flex-col absolute top-[84px] gap-6 px-6 pb-6'>
                            <div className='w-16 h-16 rounded-xl border-4 border-[#221F19] bg-[#111111]'>
                                <Image className='w-full rounded-xl' alt='' src={img_depip_2} />
                            </div>
                            <div className='flex flex-col gap-1'>
                                <span className='font-ppmori-semibold text-xl'>DePIP</span>
                                <span className='text-[16px] leading-6 text-medium-gray line-clamp-2'>DePIP Studio is the first programmable IP studio offering AI agents to help creators register their IP as an NFT and trade/swap/transfer/do on-chain activities.</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* IP Source */}
            <div id='ip-source' className='flex flex-col gap-4 lg:gap-10 lg:h-[1172px] lg:order-last lg:flex-row lg:sticky lg:top-0'>
                <div className='flex gap-5 items-center border-b border-[#221F19] py-[14px] lg:max-h-[62px] lg:min-w-[360px] lg:mt-[942px]'>
                    <svg width="32" height="33" viewBox="0 0 32 33" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M11 10.5874V22.5874M11 10.5874H9M11 10.5874H13M11 22.5874H9M11 22.5874H13M17 22.5874V16.5874M17 16.5874V10.5874H21C22.6569 10.5874 24 11.9305 24 13.5874C24 15.2443 22.6569 16.5874 21 16.5874H17Z" stroke="url(#paint0_linear_3096_4953)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                        <rect x="3" y="5.5874" width="26" height="22" rx="4" stroke="url(#paint1_linear_3096_4953)" stroke-width="2" stroke-linecap="round" />
                        <defs>
                            <linearGradient id="paint0_linear_3096_4953" x1="4" y1="2.28185" x2="-1.68682" y2="20.1537" gradientUnits="userSpaceOnUse">
                                <stop offset="0.23" stop-color="#EC737E" />
                                <stop offset="0.31" stop-color="#EC7977" />
                                <stop offset="0.43" stop-color="#ED8A65" />
                                <stop offset="0.44" stop-color="#ED8C63" />
                                <stop offset="0.75" stop-color="#FFDF8F" />
                            </linearGradient>
                            <linearGradient id="paint1_linear_3096_4953" x1="3" y1="3.47398" x2="-1.52921" y2="20.2958" gradientUnits="userSpaceOnUse">
                                <stop offset="0.23" stop-color="#EC737E" />
                                <stop offset="0.31" stop-color="#EC7977" />
                                <stop offset="0.43" stop-color="#ED8A65" />
                                <stop offset="0.44" stop-color="#ED8C63" />
                                <stop offset="0.75" stop-color="#FFDF8F" />
                            </linearGradient>
                        </defs>
                    </svg>
                    <span className='font-semibold font-ppmori-semibold text-2xl'>IP Source</span>
                </div>

                <div className='flex flex-col gap-4 lg:gap-5 lg:bg-black-linear-gradient lg:pt-[280px]'>
                    <div className='border border-[#221F19] rounded-2xl bg-black-charcoal p-6 lg:flex lg:gap-6'>
                        <div className='flex flex-col gap-6 lg:py-[15px] lg:flex-1'>
                            <Image alt='' src={img_punkga} />
                            <div className='flex flex-col gap-2'>
                                <span className='font-ppmori-semibold text-xl'>Punkga.me</span>
                                <span className='text-[16px] leading-6 text-medium-gray line-clamp-2'>Punkga is a manga universe for those passionate about reading and creating with a pool of 200+ artists</span>
                            </div>
                        </div>
                        <div className='hidden lg:flex gap-2 w-[390px]'>
                            <Image className='rounded-lg' alt='' src={img_punkga_1} />
                            <Image className='rounded-lg' alt='' src={img_punkga_2} />
                            <Image className='rounded-lg' alt='' src={img_punkga_3} />
                        </div>
                    </div>

                    <div className='lg:flex lg:flex-row lg:gap-5'>
                        <div className='border border-[#221F19] rounded-2xl bg-black-charcoal h-[220px] lg:h-auto p-6 flex flex-col gap-6 lg:basis-1/3'>
                            <div className='w-16 h-16 rounded-xl border-4 border-[#221F19] bg-[#111111]'>
                                <Image className='w-full rounded-xl' alt='' src={img_crescentshine} />
                            </div>
                            <div className='flex flex-col gap-2'>
                                <span className='font-ppmori-semibold text-xl'>CrescentShine</span>
                                <span className='text-[16px] leading-6 text-medium-gray line-clamp-2'>CrescentShine is a community-based Web3 gaming ecosystem offering a diverse range of features, such as games, wallet, social-fi platform, game infrastructure, hybrid games, and learn2earn Dapp, to bring innovative gaming experiences and passive income opportunities to players.</span>
                            </div>
                            <div className='hidden lg:flex flex-col gap-4'>
                                <span className='font-ppmori-semibold'>Monsterra</span>
                                <Image className='w-full rounded-lg' alt='img_monsterra' src={img_monsterra} />
                            </div>
                        </div>

                        <div className='hidden lg:flex border border-[#221F19] rounded-2xl bg-black-charcoal h-[220px] lg:h-auto p-6 flex-col gap-6 lg:basis-2/3'>
                            <div className='w-16 h-16 rounded-xl border-4 border-[#221F19] bg-[#111111]'>
                                <Image className='w-full rounded-xl' alt='' src={img_catze} />
                            </div>
                            <div className='flex flex-col gap-2'>
                                <span className='font-ppmori-semibold text-xl'>Catze Labs</span>
                                <span className='text-[16px] leading-6 text-medium-gray line-clamp-2'>Catze Labs emerges as a pioneering force in the dynamic realm of blockchain gaming and Web3 infrastructure solutions.</span>
                            </div>
                            <div className='hidden lg:flex flex-col gap-4'>
                                <span className='font-ppmori-semibold'>Yooldo, TROUBLE PUNK: CYBER GALZ, Random Private Defense</span>
                                <div className='flex gap-2 object-cover'>
                                    <div className='w-full rounded-lg'>
                                        <Image className='w-full rounded-lg' alt='img_catze_1' src={img_catze_1} />
                                    </div>
                                    <div className='w-full rounded-lg object-cover'>
                                        <Image className='w-full rounded-lg' alt='img_catze_2' src={img_catze_2} />

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className='flex flex-col gap-4 lg:flex-row lg:gap-5'>
                        <div className='border border-[#221F19] rounded-2xl bg-black-charcoal p-6 flex flex-col gap-6 lg:flex-1'>
                            <div className='w-16 h-16 rounded-xl border-4 border-[#221F19] bg-[#111111]'>
                                <Image className='w-full rounded-xl' alt='' src={img_creek_river} />
                            </div>

                            <div className='flex flex-col gap-2'>
                                <span className='font-ppmori-semibold text-xl'>CREEK & RIVER</span>
                                <span className='text-[16px] leading-6 text-medium-gray line-clamp-2'>Creek and River Co., Ltd. was established in 1990 as a pioneer in the "creator agency" business. The key element of our business model is attending to every need of our clients by making appropriate use of our "creative network" consisting of about 60,000 creators and nearly 1,000 partner productions.</span>
                            </div>
                        </div>

                        <div className='lg:hidden border border-[#221F19] rounded-2xl bg-black-charcoal h-[220px] p-6 flex flex-col gap-6'>
                            <div className='w-16 h-16 rounded-xl border-4 border-[#221F19] bg-[#111111]'>
                                <Image className='w-full rounded-xl' alt='' src={img_catze} />
                            </div>
                            <div className='flex flex-col gap-2'>
                                <span className='font-ppmori-semibold text-xl'>Catze Labs</span>
                                <span className='text-[16px] leading-6 text-medium-gray line-clamp-2'>Catze Labs emerges as a pioneering force in the dynamic realm of blockchain gaming and Web3 infrastructure solutions.</span>
                            </div>
                        </div>

                        <div className='border border-[#221F19] rounded-2xl bg-black-charcoal p-6 flex flex-col gap-6 lg:flex-1'>
                            <div className='w-16 h-16 rounded-xl border-4 border-[#221F19] bg-[#111111]'>
                                <Image className='w-full rounded-xl' alt='' src={img_cat_22} />
                            </div>
                            <div className='flex flex-col gap-2'>
                                <span className='font-ppmori-semibold text-xl'>CAT-22</span>
                                <span className='text-[16px] leading-6 text-medium-gray line-clamp-2'>A visionary project at the forefront of Web3 Multimedia IP (Intellectual Property), spearheaded by the innovative brand - Avalook.</span>
                            </div>
                        </div>

                        <div className='border border-[#221F19] rounded-2xl bg-black-charcoal p-6 flex flex-col gap-6 lg:flex-1'>
                            <div className='w-16 h-16 rounded-xl border-4 border-[#221F19] bg-[#111111]'>
                                <Image className='w-full rounded-xl' alt='' src={img_daisies} />
                            </div>
                            <div className='flex flex-col gap-2'>
                                <span className='font-ppmori-semibold text-xl'>Daisies DayDreams</span>
                                <span className='text-[16px] leading-6 text-medium-gray line-clamp-2'>A flower’s fairy who is cheerful, confident, assertive and do likes to try something new. He comes in many forms, from NFT, postcard, sticker to toy figure.</span>
                            </div>
                        </div>

                        <div className='border border-[#221F19] rounded-2xl bg-black-charcoal p-6 flex flex-col gap-6 lg:flex-1'>
                            <div className='w-16 h-16 rounded-xl border-4 border-[#221F19] bg-[#111111]'>
                                <Image className='w-full rounded-xl' alt='' src={img_peacock} />
                            </div>
                            <div className='flex flex-col gap-2'>
                                <span className='font-ppmori-semibold text-xl'>Peacock Sea</span>
                                <span className='text-[16px] leading-6 text-medium-gray line-clamp-2'>Peacock Sea is a new story from the world of The Longclaw Teahouse; a world inspired by Fionn's travels in Asia Pacific. It sets the scene before rebellion breaks out across the Peacock Sea’s azure waters, from NFTs to physical prints.</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* IP Consumer */}
            <div id='ip-consumer' className='flex flex-col gap-4 lg:gap-10 lg:order-6 lg:min-h-[652px] lg:flex-row lg:items-start lg:sticky lg:top-[160px]'>
                <div className='flex gap-5 items-center border-b border-[#221F19] py-[14px] lg:min-w-[360px] lg:mt-[360px]'>
                    <svg width="32" height="33" viewBox="0 0 32 33" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <ellipse cx="16" cy="16.5874" rx="15" ry="6" stroke="url(#paint0_linear_3096_5028)" stroke-width="2" stroke-linecap="round" />
                        <path d="M17 27.5874C14.2386 27.5874 12 22.6625 12 16.5874C12 10.5123 14.2386 5.63225 17 5.63225M16 27.5874C9.92487 27.5874 5 22.6625 5 16.5874C5 10.5123 9.92487 5.5874 16 5.5874C22.0751 5.5874 27 10.5123 27 16.5874C27 22.6625 22.0751 27.5874 16 27.5874Z" stroke="url(#paint1_linear_3096_5028)" stroke-width="2" stroke-linecap="round" />
                        <defs>
                            <linearGradient id="paint0_linear_3096_5028" x1="-0.958215" y1="11.7101" x2="26.2257" y2="27.9969" gradientUnits="userSpaceOnUse">
                                <stop offset="0.23" stop-color="#EC737E" />
                                <stop offset="0.31" stop-color="#EC7977" />
                                <stop offset="0.43" stop-color="#ED8A65" />
                                <stop offset="0.44" stop-color="#ED8C63" />
                                <stop offset="0.75" stop-color="#FFDF8F" />
                            </linearGradient>
                            <linearGradient id="paint1_linear_3096_5028" x1="3.56398" y1="7.64563" x2="29.1833" y2="13.7854" gradientUnits="userSpaceOnUse">
                                <stop offset="0.23" stop-color="#EC737E" />
                                <stop offset="0.31" stop-color="#EC7977" />
                                <stop offset="0.43" stop-color="#ED8A65" />
                                <stop offset="0.44" stop-color="#ED8C63" />
                                <stop offset="0.75" stop-color="#FFDF8F" />
                            </linearGradient>
                        </defs>
                    </svg>
                    <span className='font-semibold font-ppmori-semibold text-2xl'>IP Consumer</span>
                </div>
                <div className='flex flex-col gap-4 lg:flex-row lg:flex-1 lg:pt-[120px] lg:min-h-[652px] lg:bg-black-linear-gradient'>
                    <div className='bg-dark-charcoal rounded-lg p-5 border-linear flex flex-col gap-5 lg:flex-1 lg:h-[200px] lg:p-9'>
                        <div className='flex flex-col gap-3 lg:justify-between h-full'>
                            <div className='bg-[#2C2825] rounded-full p-4 h-16 w-16'>
                                <svg width="32" height="33" viewBox="0 0 32 33" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M30.1954 15.9237C28.8698 9.9306 26.8748 6.73185 23.9154 5.8581C23.2934 5.6756 22.6481 5.58444 21.9998 5.58748C21.1429 5.58748 20.3967 5.79623 19.6073 6.01748C18.6561 6.28435 17.5754 6.58748 15.9998 6.58748C14.4242 6.58748 13.3429 6.28498 12.3898 6.0181C11.5998 5.79623 10.8542 5.58748 9.9998 5.58748C9.32944 5.58512 8.66201 5.67599 8.01668 5.85748C5.07293 6.72748 3.07918 9.92498 1.73418 15.92C0.287928 22.3712 0.999803 26.4443 3.73043 27.3893C4.10472 27.5213 4.49855 27.5893 4.89543 27.5906C6.76605 27.5906 8.26605 26.0325 9.29105 24.7568C10.4492 23.3131 11.8048 22.5806 15.9998 22.5806C19.7467 22.5806 21.2973 23.0887 22.6367 24.7568C23.4786 25.8056 24.2742 26.5393 25.0679 27.0012C26.1236 27.615 27.1786 27.7512 28.2029 27.3993C29.8167 26.8487 30.7417 25.3931 30.9529 23.0718C31.1136 21.2919 30.8661 18.9537 30.1954 15.9237ZM12.9998 15.5875H10.9998V17.5875C10.9998 17.8527 10.8944 18.107 10.7069 18.2946C10.5194 18.4821 10.265 18.5875 9.9998 18.5875C9.73459 18.5875 9.48023 18.4821 9.2927 18.2946C9.10516 18.107 8.9998 17.8527 8.9998 17.5875V15.5875H6.9998C6.73459 15.5875 6.48023 15.4821 6.2927 15.2946C6.10516 15.107 5.9998 14.8527 5.9998 14.5875C5.9998 14.3223 6.10516 14.0679 6.2927 13.8804C6.48023 13.6928 6.73459 13.5875 6.9998 13.5875H8.9998V11.5875C8.9998 11.3223 9.10516 11.0679 9.2927 10.8804C9.48023 10.6928 9.73459 10.5875 9.9998 10.5875C10.265 10.5875 10.5194 10.6928 10.7069 10.8804C10.8944 11.0679 10.9998 11.3223 10.9998 11.5875V13.5875H12.9998C13.265 13.5875 13.5194 13.6928 13.7069 13.8804C13.8944 14.0679 13.9998 14.3223 13.9998 14.5875C13.9998 14.8527 13.8944 15.107 13.7069 15.2946C13.5194 15.4821 13.265 15.5875 12.9998 15.5875ZM18.2498 15.8375C18.0026 15.8375 17.7609 15.7642 17.5553 15.6268C17.3498 15.4895 17.1896 15.2942 17.095 15.0658C17.0003 14.8374 16.9756 14.5861 17.0238 14.3436C17.0721 14.1011 17.1911 13.8784 17.3659 13.7036C17.5407 13.5288 17.7635 13.4097 18.0059 13.3615C18.2484 13.3133 18.4998 13.338 18.7282 13.4326C18.9566 13.5272 19.1518 13.6875 19.2891 13.893C19.4265 14.0986 19.4998 14.3402 19.4998 14.5875C19.4998 14.919 19.3681 15.2369 19.1337 15.4714C18.8993 15.7058 18.5813 15.8375 18.2498 15.8375ZM20.9998 18.5875C20.7524 18.5875 20.5106 18.5141 20.305 18.3766C20.0994 18.2391 19.9392 18.0437 19.8447 17.8151C19.7501 17.5865 19.7256 17.335 19.7741 17.0925C19.8225 16.8499 19.9419 16.6272 20.117 16.4525C20.2922 16.2778 20.5152 16.159 20.7579 16.1111C21.0005 16.0632 21.252 16.0884 21.4803 16.1835C21.7087 16.2786 21.9037 16.4393 22.0407 16.6453C22.1776 16.8513 22.2504 17.0932 22.2498 17.3406C22.249 17.6716 22.1169 17.9887 21.8826 18.2225C21.6483 18.4562 21.3308 18.5875 20.9998 18.5875ZM20.9998 13.0875C20.7526 13.0875 20.5109 13.0142 20.3053 12.8768C20.0998 12.7395 19.9396 12.5442 19.845 12.3158C19.7503 12.0874 19.7256 11.8361 19.7738 11.5936C19.8221 11.3511 19.9411 11.1284 20.1159 10.9536C20.2907 10.7788 20.5135 10.6597 20.7559 10.6115C20.9984 10.5633 21.2498 10.588 21.4782 10.6826C21.7066 10.7772 21.9018 10.9375 22.0391 11.143C22.1765 11.3486 22.2498 11.5902 22.2498 11.8375C22.2498 12.169 22.1181 12.4869 21.8837 12.7214C21.6493 12.9558 21.3313 13.0875 20.9998 13.0875ZM23.7498 15.8375C23.5026 15.8375 23.2609 15.7642 23.0553 15.6268C22.8498 15.4895 22.6896 15.2942 22.595 15.0658C22.5003 14.8374 22.4756 14.5861 22.5238 14.3436C22.5721 14.1011 22.6911 13.8784 22.8659 13.7036C23.0407 13.5288 23.2635 13.4097 23.5059 13.3615C23.7484 13.3133 23.9998 13.338 24.2282 13.4326C24.4566 13.5272 24.6518 13.6875 24.7891 13.893C24.9265 14.0986 24.9998 14.3402 24.9998 14.5875C24.9998 14.919 24.8681 15.2369 24.6337 15.4714C24.3993 15.7058 24.0813 15.8375 23.7498 15.8375Z" fill="url(#paint0_linear_3096_5035)" />
                                    <defs>
                                        <linearGradient id="paint0_linear_3096_5035" x1="21.8914" y1="22.979" x2="17.6969" y2="8.08303" gradientUnits="userSpaceOnUse">
                                            <stop stop-color="#FFD569" />
                                            <stop offset="0.515056" stop-color="#FC8E4F" />
                                            <stop offset="1" stop-color="#FF697B" />
                                        </linearGradient>
                                    </defs>
                                </svg>
                            </div>
                            <span className='font-ppmori-semibold text-xl'>Game</span>
                        </div>
                    </div>
                    <div className='bg-dark-charcoal rounded-lg p-5 border-linear flex flex-col gap-5 lg:flex-1 lg:h-[200px] lg:p-9'>
                        <div className='flex flex-col gap-3 lg:justify-between h-full'>
                            <div className='bg-[#2C2825] rounded-full p-4 h-16 w-16'>
                                <svg width="32" height="33" viewBox="0 0 32 33" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M10.8001 24.5875L14.6668 28.4542L18.5335 24.5875L26.0668 28.4209C26.3566 28.5773 26.6401 28.6218 26.9175 28.5542C27.1948 28.4866 27.4224 28.3644 27.6001 28.1875C27.7779 28.0106 27.9001 27.7831 27.9668 27.5049C28.0335 27.2266 27.989 26.9431 27.8335 26.6542L24.0001 19.1209L27.8668 15.2542L24.0001 11.3875V5.92087H18.5335L14.6668 2.0542L10.8001 5.92087H5.33346V11.3875L1.4668 15.2542L5.33346 19.1209V24.5875H10.8001ZM15.25 8.9209C15.25 8.50668 14.9142 8.1709 14.5 8.1709C14.0858 8.1709 13.75 8.50668 13.75 8.9209V10.1709H12.8333C12.0156 10.1709 11.2313 10.4957 10.6531 11.074C10.0749 11.6522 9.75 12.4365 9.75 13.2542C9.75 14.072 10.0749 14.8562 10.6531 15.4345C11.2313 16.0127 12.0156 16.3376 12.8333 16.3376H13.75V19.5042H10.5C10.0858 19.5042 9.75 19.84 9.75 20.2542C9.75 20.6684 10.0858 21.0042 10.5 21.0042H13.75V22.2542C13.75 22.6684 14.0858 23.0042 14.5 23.0042C14.9142 23.0042 15.25 22.6684 15.25 22.2542V21.0042H16.1667C16.9844 21.0042 17.7687 20.6794 18.3469 20.1011C18.9252 19.5229 19.25 18.7386 19.25 17.9209C19.25 17.1031 18.9252 16.3189 18.3469 15.7407C17.7687 15.1624 16.9844 14.8376 16.1667 14.8376H15.25V11.6709H17.8333C18.2475 11.6709 18.5833 11.3351 18.5833 10.9209C18.5833 10.5067 18.2475 10.1709 17.8333 10.1709H15.25V8.9209ZM12.8333 11.6709H13.75V14.8376H12.8333C12.4134 14.8376 12.0107 14.6707 11.7137 14.3738C11.4168 14.0769 11.25 13.6742 11.25 13.2542C11.25 12.8343 11.4168 12.4316 11.7137 12.1346C12.0107 11.8377 12.4134 11.6709 12.8333 11.6709ZM15.25 19.5042V16.3376H16.1667C16.5866 16.3376 16.9893 16.5044 17.2863 16.8013C17.5832 17.0982 17.75 17.501 17.75 17.9209C17.75 18.3408 17.5832 18.7436 17.2863 19.0405C16.9893 19.3374 16.5866 19.5042 16.1667 19.5042H15.25Z" fill="url(#paint0_linear_3096_5042)" />
                                    <defs>
                                        <linearGradient id="paint0_linear_3096_5042" x1="19.9411" y1="23.0242" x2="13.4549" y2="6.12932" gradientUnits="userSpaceOnUse">
                                            <stop stop-color="#FFD569" />
                                            <stop offset="0.515056" stop-color="#FC8E4F" />
                                            <stop offset="1" stop-color="#FF697B" />
                                        </linearGradient>
                                    </defs>
                                </svg>
                            </div>
                            <span className='font-ppmori-semibold text-xl'>IP-Fi</span>
                        </div>
                    </div>
                    <div className='bg-dark-charcoal rounded-lg p-5 border-linear flex flex-col gap-5 lg:flex-1 lg:h-[200px] lg:p-9'>
                        <div className='flex flex-col gap-3 lg:justify-between h-full'>
                            <div className='bg-[#2C2825] rounded-full p-4 h-16 w-16'>
                                <svg width="32" height="33" viewBox="0 0 32 33" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M13.3327 21.9207V20.5874H4.01268L3.99935 25.9207C3.99935 27.4007 5.18602 28.5874 6.66602 28.5874H25.3327C26.8127 28.5874 27.9993 27.4007 27.9993 25.9207V20.5874H18.666V21.9207H13.3327ZM26.666 9.92074H21.3193V7.25407L18.6527 4.5874H13.3193L10.6527 7.25407V9.92074H5.33268C3.86602 9.92074 2.66602 11.1207 2.66602 12.5874V16.5874C2.66602 18.0674 3.85268 19.2541 5.33268 19.2541H13.3327V16.5874H18.666V19.2541H26.666C28.1327 19.2541 29.3327 18.0541 29.3327 16.5874V12.5874C29.3327 11.1207 28.1327 9.92074 26.666 9.92074ZM18.666 9.92074H13.3327V7.25407H18.666V9.92074Z" fill="url(#paint0_linear_3096_5052)" />
                                    <defs>
                                        <linearGradient id="paint0_linear_3096_5052" x1="21.2355" y1="23.5573" x2="15.8227" y2="7.8914" gradientUnits="userSpaceOnUse">
                                            <stop stop-color="#FFD569" />
                                            <stop offset="0.515056" stop-color="#FC8E4F" />
                                            <stop offset="1" stop-color="#FF697B" />
                                        </linearGradient>
                                    </defs>
                                </svg>
                            </div>
                            <span className='font-ppmori-semibold text-xl'>Web2 Business</span>
                        </div>
                    </div>
                </div>
            </div>

            {/* Data Visualization */}
            <div className='flex flex-col gap-4 lg:gap-10 lg:order-4 lg:min-h-[652px] lg:flex-row lg:items-start lg:sticky lg:top-[160px]'>
                <div className='flex gap-5 items-center border-b border-[#221F19] py-[14px] lg:min-w-[360px] lg:mt-[236px]'>
                    <svg width="32" height="33" viewBox="0 0 32 33" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M5 22.5874L5 28.5874M12 28.5874V14.5874M19 4.5874L19 28.5874M26 19.5874V28.5874" stroke="url(#paint0_linear_3096_5060)" stroke-width="2" stroke-linecap="round" />
                        <defs>
                            <linearGradient id="paint0_linear_3096_5060" x1="5" y1="2.28185" x2="-1.32131" y2="19.6644" gradientUnits="userSpaceOnUse">
                                <stop offset="0.23" stop-color="#EC737E" />
                                <stop offset="0.31" stop-color="#EC7977" />
                                <stop offset="0.43" stop-color="#ED8A65" />
                                <stop offset="0.44" stop-color="#ED8C63" />
                                <stop offset="0.75" stop-color="#FFDF8F" />
                            </linearGradient>
                        </defs>
                    </svg>

                    <span className='font-semibold font-ppmori-semibold text-2xl'>Data Visualization</span>
                </div>
                <div className='lg:bg-black-linear-gradient lg:w-full lg:min-h-[652px] lg:pt-[120px]'>
                    <div className='bg-dark-charcoal p-6 rounded-lg flex flex-col gap-6 border border-linear lg:h-[140px] lg:flex-1'>
                        <span className='font-jetBrains-mono text-[16px] text-light-yellow'>COMING SOON</span>
                        <span className='font-ppmori-semibold text-[28px] leading-9'>IPScan</span>
                    </div>
                </div>
            </div>

            {/* Wallet */}
            <div id='wallet' className='flex flex-col gap-4 lg:gap-10 lg:order-5 lg:flex-row lg:h-[652px] lg:sticky lg:top-[160px]'>
                    <div className='flex gap-5 items-center border-b border-[#221F19] py-[14px] lg:max-h-[62px] lg:min-w-[360px]  lg:mt-[298px]'>
                        <svg width="32" height="33" viewBox="0 0 32 33" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M24 9.58728V8.49212C24 6.52102 22.1316 5.08553 20.227 5.59341L6.22701 9.32675C4.91375 9.67695 4 10.8663 4 12.2255V12.5873M24 9.58728H8C5.79086 9.58728 4 11.3781 4 13.5873V24.5873C4 26.7964 5.79086 28.5873 8 28.5873H24C26.2091 28.5873 28 26.7964 28 24.5873V13.5873C28 11.3781 26.2091 9.58728 24 9.58728Z" stroke="url(#paint0_linear_3096_5071)" stroke-width="2" stroke-linecap="round" />
                            <circle cx="22" cy="18.5874" r="1" stroke="#EC737E" stroke-width="2" stroke-linecap="round" />
                            <defs>
                                <linearGradient id="paint0_linear_3096_5071" x1="4" y1="3.27169" x2="-1.30286" y2="20.5885" gradientUnits="userSpaceOnUse">
                                    <stop offset="0.23" stop-color="#EC737E" />
                                    <stop offset="0.31" stop-color="#EC7977" />
                                    <stop offset="0.43" stop-color="#ED8A65" />
                                    <stop offset="0.44" stop-color="#ED8C63" />
                                    <stop offset="0.75" stop-color="#FFDF8F" />
                                </linearGradient>
                            </defs>
                        </svg>
                        <span className='font-semibold font-ppmori-semibold text-2xl'>Wallet</span>
                    </div>

                <div className="grid grid-cols-2 gap-4 p-4 lg:p-0 lg:grid-cols-3 lg:flex-1 lg:pt-[120px] lg:bg-black-linear-gradient lg:h-fit">
                    <div className="bg-dark-charcoal rounded-lg p-5 flex flex-col gap-3 border border-linear h-[128px] lg:h-[200px]">
                        <div className='w-12 h-12 rounded-xl border-4 border-[#221F19] bg-[#111111]'>
                            <Image className='w-full rounded-xl' alt='' src={img_c98} />
                        </div>
                        <span className='font-ppmori-semibold text-xl'>Coin98</span>
                    </div>

                    <div className="bg-dark-charcoal rounded-lg p-5 flex flex-col gap-3 border border-linear h-[128px] lg:h-[200px]">
                        <div className='w-12 h-12 rounded-xl border-4 border-[#221F19] bg-[#111111]'>
                            <Image className='w-full rounded-xl' alt='' src={img_keplr} />
                        </div>
                        <span className='font-ppmori-semibold text-xl'>Kelpr</span>
                    </div>


                    <div className="bg-dark-charcoal rounded-lg p-5 flex flex-col gap-3 border border-linear h-[128px] lg:h-[200px]">
                        <div className='w-12 h-12 rounded-xl border-4 border-[#221F19] bg-[#111111]'>
                            <Image className='w-full rounded-xl' alt='' src={img_leap} />
                        </div>
                        <span className='font-ppmori-semibold text-xl'>Leap Wallet</span>
                    </div>

                    <div className="bg-dark-charcoal rounded-lg p-5 flex flex-col gap-3 border border-linear h-[128px] lg:h-[200px]">
                        <div className='w-12 h-12 rounded-xl border-4 border-[#221F19] bg-[#111111]'>
                            <Image className='w-full rounded-xl' alt='' src={img_subwallet} />
                        </div>
                        <span className='font-ppmori-semibold text-xl'>Subwallet</span>
                    </div>

                    <div className="bg-dark-charcoal rounded-lg p-5 flex flex-col gap-3 border border-linear h-[128px] lg:h-[200px]">
                        <div className='w-12 h-12 rounded-xl border-4 border-[#221F19] bg-[#111111]'>
                            <Image className='w-full rounded-xl' alt='' src={img_metamask} />
                        </div>
                        <span className='font-ppmori-semibold text-xl'>Metamask</span>
                    </div>

                    <div className="bg-dark-charcoal rounded-lg p-5 flex flex-col gap-3 border border-linear h-[128px] lg:h-[200px]">
                        <div className='w-12 h-12 rounded-xl border-4 border-[#221F19] bg-[#111111]'>
                            <Image className='w-full rounded-xl' alt='' src={img_klever} />
                        </div>
                        <span className='font-ppmori-semibold text-xl'>Klever</span>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Explore;