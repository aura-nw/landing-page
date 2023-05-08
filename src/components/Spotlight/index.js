import styled from "styled-components"
import Container from "../Container"
import Card from "./Card"

import Backdrop1 from "../../assets/images/backdrop__1.png"
import Backdrop2 from "../../assets/images/backdrop__2.png"
import Backdrop3 from "../../assets/images/backdrop__3.png"

import AuraLogo from "../../assets/images/aura.svg"
import HoroscopeLogo from "../../assets/images/horoscope.svg"
import PyxisLogo from "../../assets/images/pyxis.svg"
import SeekHypeLogo from "../../assets/images/seekhype.svg"
import HaloTradeLogo from "../../assets/images/Halotrade.svg"
const Wrap = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
`
export default function Spotlight() {
    return (
        <Container>
            <Wrap>
                <Card backdrop={Backdrop1} logo={AuraLogo} onClick={() => window.open("https://aurascan.io/")}>
                    <p className="title">Aura Scan</p>
                    <p className="description">The next generation blockchain explorer for Aura Network.</p>
                    <p className="text__color">Experience →</p>
                </Card>
                <Card backdrop={Backdrop1} logo={PyxisLogo} onClick={() => window.open("https://pyxis.aura.network/")}>
                    <p className="title">Pyxis Safe</p>
                    <p className="description">Multi-signature and fine-grain access control asset management tool.</p>
                    <p className="text__color">Experience →</p>
                </Card>
                <Card
                    backdrop={Backdrop1}
                    logo={HoroscopeLogo}
                    onClick={() => window.open("https://horoscope.aura.network")}>
                    <p className="title">Horoscope</p>
                    <p className="description">An indexing service to provide real-time data for Aura ecosystem.</p>
                    <p className="text__color">Experience →</p>
                </Card>
                <Card backdrop={Backdrop2} logo={SeekHypeLogo} onClick={() => window.open("https://beta.seekhype.ai/")}>
                    <p className="title">SeekHYPE</p>
                    <p className="description">A personalized NFT marketplace powered by AI.</p>
                    <p className="text__color">Experience →</p>
                </Card>
                <Card backdrop={Backdrop3} logo={HaloTradeLogo} onClick={() => undefined}>
                    <p className="title">Halotrade</p>
                    <p className="description">The first DEX built on Aura Network to swap, farm and earn.</p>
                    <p className="text__color">Coming soon</p>
                </Card>
            </Wrap>
        </Container>
    )
}
