import styled from 'styled-components'
import Container from '../Container'
import Card from './Card'

import Backdrop1 from '../../assets/images/backdrop__1.png'

import AuraLogo from '../../assets/images/aura.png'
import HoroscopeLogo from '../../assets/images/horoscope.png'
import PyxisLogo from '../../assets/images/pyxis.png'
const Wrap = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    @media only screen and (max-width: 1000px) {
        justify-content: flex-start;
    }
`
export default function Spotlight() {
    return (
        <Container>
            <Wrap>
                <Card backdrop={Backdrop1} logo={AuraLogo} onClick={() => window.open('https://aurascan.io/')}>
                    <p className='title'>Aura Scan</p>
                    <p className='description'>The next generation blockchain explorer for Aura Network.</p>
                    <p className='text__color'>Experience →</p>
                </Card>
                <Card backdrop={Backdrop1} logo={PyxisLogo} onClick={() => window.open('https://pyxis.aura.network/')}>
                    <p className='title'>Pyxis Safe</p>
                    <p className='description'>Multi-signature and fine-grain access control asset management tool.</p>
                    <p className='text__color'>Experience →</p>
                </Card>
                <Card
                    backdrop={Backdrop1}
                    logo={HoroscopeLogo}
                    onClick={() => window.open('https://horoscope.aura.network')}>
                    <p className='title'>Horoscope</p>
                    <p className='description'>An indexing service to provide real-time data for Aura ecosystem.</p>
                    <p className='text__color'>Experience →</p>
                </Card>
            </Wrap>
        </Container>
    )
}
