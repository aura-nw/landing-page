import styled from 'styled-components'
import Roadmapbackground from '../../assets/images/roadmap.svg'
import MRoadmapbackground from '../../assets/images/roadmap__mobile.svg'
const Wrap = styled.div`
    > div {
        margin-top: 100px;
        @media only screen and (max-width: 1000px) {
            margin-top: 0px;
        }
        position: relative;
        > img {
            width: 100%;
        }
    }
    > .title {
        font-weight: 600;
        font-size: 40px;
        line-height: 42px;
        text-align: center;
        text-transform: capitalize;
        background: linear-gradient(108.46deg, #5ee6d0 12.51%, #bfc6ff 51.13%, #ffba69 87.49%);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        background-clip: text;

        @media only screen and (max-width: 1000px) {
            font-size: 24px;
            line-height: 25px;
        }
    }
    .quarter {
        display: flex;
        flex-direction: column;
        max-width: 236px;
        width: 12vw;
        position: absolute;
        ul {
            padding-inline-start: 22px;
            margin: 0px;
            > li {
                font-weight: 200;
                font-size: 14px;
                line-height: 15px;
                margin: 3px 0px;
            }
        }
        &.fliped {
            flex-direction: column-reverse;
        }
        > div:first-child {
            font-weight: 300;
            font-size: 18px;
            line-height: 19px;
            text-align: center;
            text-transform: capitalize;
            background: linear-gradient(
                10.26deg,
                #5ff2dd 17.68%,
                #5de3df 25.08%,
                #5ab5e6 48.92%,
                #5793ec 70.31%,
                #557fef 88.4%,
                #5578f1 99.91%
            );
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            background-clip: text;
        }
        > div:last-child {
            padding: 10px;
        }
        &.active {
            background: linear-gradient(180deg, rgba(255, 255, 255, 0.05) -30.29%, rgba(255, 255, 255, 0.1) 144.92%);
            border-radius: 10px;
            > div:first-child {
                padding: 8px;
                background: linear-gradient(
                    68.49deg,
                    rgba(95, 242, 221, 0.2) 4.71%,
                    rgba(87, 147, 236, 0.2) 42.82%,
                    rgba(85, 120, 241, 0.2) 76.44%
                );
                border-radius: 0px 0px 10px 10px;
                > p {
                    background: linear-gradient(108.46deg, #5ee6d0 12.51%, #bfc6ff 51.13%, #ffba69 87.49%);
                    -webkit-background-clip: text;
                    -webkit-text-fill-color: transparent;
                    background-clip: text;
                }
            }
        }
    }
    .quarter-i {
        top: calc(50% - 46px);
        left: 25vw;
        transform: translate(-50%, -100%);
    }
    .quarter-ii {
        top: calc(50% + 38px);
        left: 41.4vw;
        transform: translate(-50%, 0%);
    }
    .quarter-iii {
        top: calc(50% - 46px);
        left: 58.4vw;
        transform: translate(-50%, -100%);
    }
    .quarter-iv {
        top: calc(50% + 38px);
        left: 74.9vw;
        transform: translate(-50%, 0%);
    }
    @media only screen and (max-width: 1000px) {
        .roadmap {
            max-width: 360px;
            margin: auto;
        }
        .quarter {
            min-width: 150px;
            > div:first-child {
                font-size: 14px;
                line-height: 15px;
            }
            > div:last-child {
                padding: 10px 10px 10px 5px;
            }
            ul {
                li {
                    font-size: 12px;
                    line-height: 13px;
                }
            }
            &.fliped {
                flex-direction: column;
            }
            &.active {
                > div:first-child {
                    border-radius: 10px 10px 0px 0px;
                }
            }
        }
        .quarter-i {
            left: calc(50% - 26px);
            top: 64.3%;
            transform: translateX(-100%);
        }
        .quarter-ii {
            left: calc(50% + 92px);
            top: 51.3%;
        }
        .quarter-iii {
            left: calc(50% - 26px);
            top: 37%;
            transform: translateX(-100%);
        }
        .quarter-iv {
            left: calc(50% + 92px);
            top: 21.3%;
        }
    }
`
export default function Roadmap() {
    return (
        <Wrap>
            <h3 className='title'>2023 Roadmap</h3>
            <div>
                <img src={Roadmapbackground} alt='roadmap' className='roadmap desktop-only' />
                <img src={MRoadmapbackground} alt='roadmap' className='roadmap mobile-only' />
                <div className='quarter quarter-i active fliped'>
                    <div>
                        <p>Quarter I</p>
                    </div>
                    <div>
                        <ul>
                            <li>Security Audit</li>
                            <li>Xstaxy Mainnet Launch</li>
                            <li>Aura Core Infrastructure product suite (Aurascan, Pyxis Safe, Horoscope)</li>
                        </ul>
                    </div>
                </div>
                <div className='quarter quarter-ii'>
                    <div>
                        <p>Quarter II</p>
                    </div>
                    <div>
                        <ul>
                            <li>SeekHYPE Marketplace</li>
                            <li>Halo Trade DEX</li>
                            <li>EVM support for core products</li>
                        </ul>
                    </div>
                </div>
                <div className='quarter quarter-iii fliped'>
                    <div>
                        <p>Quarter III</p>
                    </div>
                    <div>
                        <ul>
                            <li>Minigame Portal</li>
                            <li>Mobile SDK</li>
                            <li>MetaGrant onboarding solution</li>
                        </ul>
                    </div>
                </div>
                <div className='quarter quarter-iv'>
                    <div>
                        <p>Quarter IV</p>
                    </div>
                    <div>
                        <ul>
                            <li>Cross-chain game support through IBC</li>
                            <li>Market Insight with Whale Map</li>
                            <li>DeFi/ Liquid Staking Protocols</li>
                        </ul>
                    </div>
                </div>
            </div>
        </Wrap>
    )
}
