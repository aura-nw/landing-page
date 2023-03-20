import styled from 'styled-components'
import Container from '../Container'
import Card from './Card'
import Backdrop from '../../assets/images/advantage-backdrop.png'
import Button from '../Button'
import Gap from '../Gap'
const Wrap = styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    &::before {
        content: '';
        pointer-events: none;
        background-image: url(${Backdrop});
        position: absolute;
        height: 823px;
        width: 1318px;
        top: -316px;
        left: -80px;
        max-width: 100vw;
        z-index: 0;
        @media only screen and (max-width: 1000px) {
        }
    }
    > p {
        text-align: center;
        margin-bottom: 40px;
    }
    > div {
        display: grid;
        grid-template-columns: repeat(4, 1fr);
        column-gap: 26px;
    }
    @media only screen and (max-width: 1000px) {
        > div {
            grid-template-columns: unset;
            grid-template-rows: repeat(4, 1fr);
            row-gap: 20px;
        }
    }
`
export default function Advantage() {
    return (
        <Container>
            <Wrap>
                <p className='text__medium'>Powerful tools to BUIDL NFT projects</p>
                <div>
                    <Card>
                        <p className='title'>Sovereign blockchain using Cosmos SDK, CosmWasm and IBC compatible</p>
                    </Card>
                    <Card>
                        <p className='title'>Optimized modules and block spaces for customisable NFT solutions</p>
                    </Card>
                    <Card>
                        <p className='title'>Permissioned and audited solutions to protect Web3 users</p>
                    </Card>
                    <Card>
                        <p className='title'>Open-source and scalable infrastructure for the Interchain</p>
                    </Card>
                </div>
                <Gap height={32} mHeight={16} />
                <Button onClick={() => window.open('https://docs.aura.network/tutorials/Welcome')}>Build now</Button>
            </Wrap>
        </Container>
    )
}
