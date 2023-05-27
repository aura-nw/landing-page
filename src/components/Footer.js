import styled from "styled-components"
import AuraLogoImg from "../assets/images/aura-logo.svg"
import Discord from "../assets/images/Discord.svg"
import Github from "../assets/images/Github.svg"
import LinkedIn from "../assets/images/LinkedIn.svg"
import Telegram from "../assets/images/Telegram.svg"
import Twitter from "../assets/images/Twitter.svg"
import Container from "./Container"

const Wrap = styled.div`
    background: linear-gradient(269.9deg, rgba(34, 34, 34, 0.35) 0%, rgba(49, 49, 49, 0.35) 100.72%);
    backdrop-filter: blur(10px);
    border-radius: 20px;
    padding: 21px 25px 0px;
    > div:first-child {
        display: flex;
        justify-content: space-between;
        @media only screen and (max-width: 1000px) {
            flex-wrap: wrap;
        }
        .token-img {
            width: 124px;
            height: fit-content;
        }
        > .nav-bar {
            display: flex;
            @media only screen and (max-width: 1000px) {
                margin-right: 0px;
                margin-top: 16px;
            }
            .nav-bar-item {
                cursor: pointer;
            }
            > .nav-bar__col {
                margin-right: 40px;
                @media only screen and (max-width: 1000px) {
                    margin-right: 0px;
                    margin-left: 40px;
                }
            }
            p {
                font-size: 16px;
                line-height: 17px;
                margin-bottom: 8px;
                @media only screen and (max-width: 1000px) {
                    font-size: 14px;
                    line-height: 15px;
                }
            }
            a {
                display: block;
                color: #5578f1;
                text-decoration: none;
                @media only screen and (max-width: 1000px) {
                    font-size: 12px;
                    line-height: 20px;
                }
            }
        }
    }
    .links {
        display: flex;
        align-self: flex-end;
        align-items: center;
        @media only screen and (max-width: 1000px) {
            margin-top: 20px;
            margin-left: auto;
        }
        > img {
            margin-left: 24px;
            cursor: pointer;
            opacity: 0.6;
            transition: all 0.3s ease;
        }
        > img:hover {
            opacity: 1;
            -webkit-filter: drop-shadow(rgba(255, 255, 255, 0.6) 0px 0px 20px);
            filter: drop-shadow(rgba(255, 255, 255, 0.6) 0px 0px 20px);
        }
    }
`
const Copyright = styled.div`
    margin-top: 20px;
    border-top: 0.5px solid transparent;
    border-image: linear-gradient(
            68.36deg,
            rgba(95, 242, 221, 0.2) 4.39%,
            rgba(93, 227, 223, 0.2) 10.83%,
            rgba(90, 181, 230, 0.2) 31.59%,
            rgba(87, 147, 236, 0.2) 50.21%,
            rgba(85, 127, 239, 0.2) 65.96%,
            rgba(85, 120, 241, 0.2) 75.98%
        )
        1 stretch;
    font-weight: 300;
    font-size: 10px;
    line-height: 24px;
    text-align: center;
    background: linear-gradient(108.46deg, #5ee6d0 12.51%, #bfc6ff 51.13%, #ffba69 87.49%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
`
export default function Footer() {
    return (
        <Container>
            <Wrap>
                <div>
                    <img src={AuraLogoImg} alt="" className="token-img " />
                    <div className="nav-bar">
                        <div className="nav-bar__col">
                            <p>Developer</p>
                            <a
                                href="https://docs.aura.network/"
                                target="_blank"
                                rel="noreferrer"
                                className="nav-bar-item">
                                Docs
                            </a>
                            <a
                                href="https://docs.aura.network/developer/"
                                target="_blank"
                                rel="noreferrer"
                                className="nav-bar-item">
                                Tools
                            </a>
                            <a
                                href="https://bscscan.com/address/0x23c5D1164662758b3799103Effe19cC064d897D6"
                                target="_blank"
                                rel="noreferrer"
                                className="nav-bar-item">
                                Contracts{" "}
                            </a>
                        </div>
                        <div className="nav-bar__col">
                            <p>Ecosystem</p>
                            <a
                                href="https://github.com/aura-nw/whitepaper/blob/main/release/Aura_Network___whitepaper.pdf"
                                target="_blank"
                                rel="noreferrer"
                                className="nav-bar-item">
                                Whitepaper
                            </a>
                            <a
                                href="https://docs.aura.network/overview/intro/"
                                target="_blank"
                                rel="noreferrer"
                                className="nav-bar-item">
                                DApps
                            </a>
                            <a
                                href="https://docs.aura.network/overview/tokenomic/"
                                target="_blank"
                                rel="noreferrer"
                                className="nav-bar-item">
                                Token{" "}
                            </a>
                        </div>
                        <div className="nav-bar__col">
                            <p>Career</p>
                            <a
                                href="https://www.notion.so/Aura-Job-Board-172bb39a89d844b0a0e1d8871026dc23"
                                target="_blank"
                                rel="noreferrer"
                                className="nav-bar-item">
                                Jobs
                            </a>
                        </div>
                    </div>
                    <div className="links">
                        <img onClick={() => window.open(" https://twitter.com/AuraNetworkHQ")} src={Twitter} alt="" />
                        <img
                            onClick={() => window.open("https://discord.com/invite/ZFHepmtZvr")}
                            src={Discord}
                            alt=""
                        />
                        <img onClick={() => window.open("https://t.me/AuraNetworkOfficial")} src={Telegram} alt="" />
                        <img
                            onClick={() => window.open("https://www.linkedin.com/company/auranetwork/")}
                            src={LinkedIn}
                            alt=""
                        />
                        <img onClick={() => window.open("https://github.com/aura-nw")} src={Github} alt="" />
                    </div>
                </div>
                <Copyright>© Aura Network {new Date().getFullYear()}.</Copyright>
            </Wrap>
        </Container>
    )
}
