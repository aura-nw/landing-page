import styled from "styled-components"
import Container from "../Container"
import ArrowRight from "../../assets/images/arrow-right.svg"
import Img1 from "../../assets/images/feature_1.png"
import Img2 from "../../assets/images/feature_2.png"
import Img3 from "../../assets/images/feature_3.png"
import Img4 from "../../assets/images/feature_4.png"
import Button from "../Button"
import Gap from "../Gap"
import Slider from "react-slick"
import { useRef, useState } from "react"
import MFeature from "./mobileVersion"
const Wrap = styled.div`
    display: flex;
    > div {
        width: 45%;
        > p {
            text-align: start;
        }
        .text__medium {
            margin-bottom: 40px;
        }
    }
    > div:first-child {
        margin-right: 140px;
    }
    .feature-item {
        transition: all 0.5s ease;
        > img {
            transition: all 0.2s ease 0.3s;
        }
        display: flex;
        padding: 16px 20px;
        margin: 10px 0px;
        width: 100%;
        justify-content: space-between;
        cursor: pointer;
        width: 0%;
        border-radius: 8px;
        > p {
            font-size: 18px;
            line-height: 19px;
            white-space: nowrap;
        }
        &:not(.active) {
            > img {
                opacity: 0;
                transition: all 0.2s ease;
            }
        }
        &.active {
            background: linear-gradient(269.43deg, rgba(255, 255, 255, 0.05) 0%, rgba(255, 255, 255, 0.1) 100%);
            backdrop-filter: blur(10px);
            border-radius: 8px;
            width: 100%;
            > img {
                opacity: 1;
            }
            > p {
                font-weight: 600;
                background: linear-gradient(108.46deg, #5ee6d0 12.51%, #bfc6ff 51.13%, #ffba69 87.49%, #5ee6d0 100%);
                background-size: 200% auto;

                color: #000;
                background-clip: text;
                text-fill-color: transparent;
                -webkit-background-clip: text;
                -webkit-text-fill-color: transparent;

                animation: shine 5s linear infinite;
                @keyframes shine {
                    to {
                        background-position: -200% center;
                    }
                }
            }
        }
    }
    .slick-list {
        position: relative;
        -webkit-mask-image: linear-gradient(
            to right,
            transparent,
            black 28px,
            black calc(100% - 28px),
            transparent 100%
        );
        mask-image: linear-gradient(to right, transparent, black 28px, black calc(100% - 28px), transparent 100%);
    }
`
const Card = styled.div`
    > div {
        padding: 0px 28px;
    }
    p.title {
        font-weight: 700;
        font-size: 24px;
        line-height: 25px;
        margin: 48px 0px 8px;
    }
    p.des {
        font-weight: 400;
        font-size: 16px;
        line-height: 30px;
    }
`
export default function Feature() {
    const [index, setIndex] = useState(0)
    const sliderRef = useRef()
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        beforeChange: (current, next) => setIndex(next),
    }
    return (
        <Container
            style={{
                position: "relative",
                zIndex: 1,
            }}>
            <div className="desktop-only">
                <Wrap>
                    <div>
                        <h2 className="text__medium">One-stop destination to take the Web3 move</h2>
                        <div
                            className={`feature-item ${index === 0 ? "active" : ""}`}
                            onClick={() => sliderRef.current.slickGoTo(0)}>
                            <p>Coherent and mobile-friendly user experience</p>
                            <img src={ArrowRight} alt="arrow-right" />
                        </div>
                        <div
                            className={`feature-item ${index === 1 ? "active" : ""}`}
                            onClick={() => sliderRef.current.slickGoTo(1)}>
                            <p>Real-life NFT use cases and utility</p>
                            <img src={ArrowRight} alt="arrow-right" />
                        </div>
                        <div
                            className={`feature-item ${index === 2 ? "active" : ""}`}
                            onClick={() => sliderRef.current.slickGoTo(2)}>
                            <p>Business solution to transform to Web3</p>
                            <img src={ArrowRight} alt="arrow-right" />
                        </div>
                        <div
                            className={`feature-item ${index === 3 ? "active" : ""}`}
                            onClick={() => sliderRef.current.slickGoTo(3)}>
                            <p>Ecosystem funding and venture focused on Cosmos growth</p>
                            <img src={ArrowRight} alt="arrow-right" />
                        </div>
                        <Gap height={40} />
                        <Button onClick={() => window.open("https://docs.aura.network/overview/about/intro")}>
                            Discover more
                        </Button>
                    </div>
                    <div className="slider">
                        <Slider ref={(slider) => (sliderRef.current = slider)} {...settings}>
                            <Card>
                                <div>
                                    <img src={Img1} alt="" />
                                    <p className="title">Coherent and mobile-friendly user experience</p>
                                    <p className="des">
                                        Overcome the complex nature of Web3. Seamless navigation throughout main dApps
                                    </p>
                                </div>
                            </Card>
                            <Card>
                                <div>
                                    <img src={Img2} alt="" />
                                    <p className="title">Real-life NFT use cases and utility</p>
                                    <p className="des">
                                        Go beyond simply digital collectibles. Change the definition of ownership and
                                        value
                                    </p>
                                </div>
                            </Card>
                            <Card>
                                <div>
                                    <img src={Img3} alt="" />
                                    <p className="title">Business solution to transform to Web3</p>
                                    <p className="des">
                                        Empower businesses to stay ahead of the curve and leverage the potential of Web3
                                    </p>
                                </div>
                            </Card>
                            <Card>
                                <div>
                                    <img src={Img4} alt="" />
                                    <p className="title">Ecosystem funding and venture focused on Cosmos growth</p>
                                    <p className="des">
                                        Focused on Cosmos growth, ranging from infrastructure, applications, and other
                                        services
                                    </p>
                                </div>
                            </Card>
                        </Slider>
                    </div>
                </Wrap>
            </div>
            <div className="mobile-only">
                <MFeature />
            </div>
        </Container>
    )
}
