import { useState } from 'react'
import styled from 'styled-components'
import Arrow from '../../assets/images/arrow.svg'
import Img1 from '../../assets/images/feature_1.svg'
import Img2 from '../../assets/images/feature_2.svg'
import Img3 from '../../assets/images/feature_3.svg'
import Img4 from '../../assets/images/feature_4.svg'
const Wrap = styled.div`
    .feature-item {
        .feature-content {
            max-height: 0px;
            overflow: hidden;
            transition: all 0.5s ease;
        }
        &.active {
            .feature-banner img {
                transform: rotate(0deg);
            }
            .feature-content {
                max-height: 500px;
            }
        }
    }
    .feature-banner {
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 8px 18px;
        background: linear-gradient(269.43deg, rgba(255, 255, 255, 0.05) 0%, rgba(255, 255, 255, 0.1) 100%);
        backdrop-filter: blur(10px);
        border-radius: 8px;
        margin: 10px 0px;

        > img {
            transform: rotate(180deg);
            transition: all 0.5s ease;
        }
        > p {
            margin-right: 18px;
            font-weight: 600;
            background: linear-gradient(108.46deg, #5ee6d0 12.51%, #bfc6ff 51.13%, #ffba69 87.49%);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            background-clip: text;
        }
    }
`
const Card = styled.div`
    display: flex;
    justify-content: center;
    flex-direction: column;
    text-align: center;
    img {
        width: 90%;
        max-width: 360px;
    }
    > p.title {
        font-weight: 700;
        font-size: 18px;
        line-height: 19px;
        margin: 18px 0px 8px;
    }
    > p.des {
        font-weight: 400;
        font-size: 16px;
        line-height: 20px;
    }
`
export default function MFeature() {
    const [index, setIndex] = useState(-1)

    return (
        <Wrap>
            <p className='text__medium'>One-stop destination to take the Web3 move</p>
            <div>
                <div
                    className={`feature-item ${index === 0 ? 'active' : ''}`}
                    onClick={() => (index === 0 ? setIndex(-1) : setIndex(0))}>
                    <div className={`feature-banner `}>
                        <p>Mobile-friendly user experience</p>
                        <img src={Arrow} alt='arrow-right' />
                    </div>
                    <Card className='feature-content'>
                        <img src={Img1} alt='' />
                        <p className='title'>Coherent and mobile-friendly user experience</p>
                        <p className='des'>
                            Overcome the complex nature of Web3. Seamless navigation throughout main dApps
                        </p>
                    </Card>
                </div>
                <div
                    className={`feature-item ${index === 1 ? 'active' : ''}`}
                    onClick={() => (index === 1 ? setIndex(-1) : setIndex(1))}>
                    <div className={`feature-banner `}>
                        <p>Real-life NFT use cases and utility</p>
                        <img src={Arrow} alt='arrow-right' />
                    </div>
                    <Card className='feature-content'>
                        <img src={Img2} alt='' />
                        <p className='title'>Real-life NFT use cases and utility</p>
                        <p className='des'>
                            Go beyond simply digital collectibles. Change the definition of ownership and value
                        </p>
                    </Card>
                </div>
                <div
                    className={`feature-item ${index === 2 ? 'active' : ''}`}
                    onClick={() => (index === 2 ? setIndex(-1) : setIndex(2))}>
                    <div className={`feature-banner `}>
                        <p>Bussiness solution to transform to Web3</p>
                        <img src={Arrow} alt='arrow-right' />
                    </div>
                    <Card className='feature-content'>
                        <img src={Img3} alt='' />
                        <p className='title'>Bussiness solution to transform to Web3</p>
                        <p className='des'>
                            Empower businesses to stay ahead of the curve and leverage the potential of Web3
                        </p>
                    </Card>
                </div>
                <div
                    className={`feature-item ${index === 3 ? 'active' : ''}`}
                    onClick={() => (index === 3 ? setIndex(-1) : setIndex(3))}>
                    <div className={`feature-banner `}>
                        <p>Ecosystem funding and venture focused on Cosmos growth</p>
                        <img src={Arrow} alt='arrow-right' />
                    </div>
                    <Card className='feature-content'>
                        <img src={Img4} alt='' />
                        <p className='title'>Ecosystem funding and venture focused on Cosmos growth</p>
                        <p className='des'>
                            Focused on Cosmos growth, ranging from infrastructure, applications, and other services
                        </p>
                    </Card>
                </div>
            </div>
        </Wrap>
    )
}
