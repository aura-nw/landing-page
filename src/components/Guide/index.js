import styled from 'styled-components'
import Card from './Card'
import IsolationImg from '../../assets/images/Isolation_Mode.svg'
import IsolationImg2 from '../../assets/images/Isolation_Mode_2.svg'
import IsolationImg3 from '../../assets/images/Isolation_Mode_3.svg'
import IsolationImg4 from '../../assets/images/Isolation_Mode_4.svg'
import Button from '../Button'
const Wrap = styled.div`
    > p {
        z-index: 1;
        position: relative;
    }
    > div:not(.btns) {
        display: grid;
        grid-template-columns: repeat(2, 490px);
        justify-content: center;
        padding: 40px;
        gap: 28px;
    }
    > .btns {
        display: flex;
        justify-content: center;
        > button {
            margin: 0px 14px;
        }
    }
    @media only screen and (max-width: 1000px) {
        > div:not(.btns) {
            grid-template-columns: unset;
            grid-template-rows: repeat(4, 1fr);
            padding: 34px 44px;
            gap: 20px;
        }
        > .btns {
            display: none;
        }
    }
`
export default function Guide() {
    return (
        <Wrap>
            <p className='text__medium'>Build your DApp with Aura</p>
            <div>
                <Card>
                    <img src={IsolationImg} alt='' />
                    <p className='title'>Regional Scale and Cultivation</p>
                    <p className='description'>
                        Integrate with local digital services. Cultivate the NFT culture in different geographical areas
                        - heavy focused on Asia.
                    </p>
                </Card>
                <Card>
                    <img src={IsolationImg2} alt='' />
                    <p className='title'>Transform Web2 Portfolio</p>
                    <p className='description'>
                        Work with brands, game studios, IP owners on NFT adaptation. Expand the current Web3 user base.
                    </p>
                </Card>
                <Card>
                    <img src={IsolationImg3} alt='' />
                    <p className='title'>Enhanced UX for Mainstream Users</p>
                    <p className='description'>
                        Optimize user experience on mobile. Ensure coherent UX among core dApps and mainstream user
                        onboarding flows.
                    </p>
                </Card>
                <Card>
                    <img src={IsolationImg4} alt='' />
                    <p className='title'>Open Source and Interoperable</p>
                    <p className='description'>
                        Grow Cosmos’s open-source software. Interoperable with other Cosmos chains.
                    </p>
                </Card>
            </div>
            <div className='btns'>
                <Button onClick={() => window.open(' https://docs.aura.network/developer/')}>
                    Developer tutorials
                </Button>
                <Button onClick={() => window.open('https://docs.aura.network/validator/')}>Validator materials</Button>
            </div>
        </Wrap>
    )
}
