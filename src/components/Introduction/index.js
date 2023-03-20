import styled from 'styled-components'
import AuraTokenImg from '../../assets/images/Aura_logo_animated_1.gif'
import Button from '../Button'
import Container from '../Container'
import CustomCountdown from './Countdown'
const Wrap = styled.div`
    display: grid;
    grid-template-areas:
        'text img'
        'btn img'
        'cd img';
    padding: 86px 0px;
    grid-template-columns: 60% 40%;
    p {
        margin-bottom: 16px;
    }
    .countdown-title {
        font-size: 20px;
        line-height: 21px;
        margin-bottom: 12px;
    }
    .text {
        grid-area: text;
        > p:last-child {
            font-weight: 400;
            font-size: 24px;
            line-height: 36px;
        }
    }
    .btn {
        grid-area: btn;
        margin-bottom: 50px;
    }
    .cd {
        grid-area: cd;
        height: auto;
        min-height: 84px;
    }
    .img {
        grid-area: img;
        position: relative;
        > img {
            position: absolute;
            width: 170%;
            top: -50%;
            left: -26%;
        }
    }
    @media only screen and (max-width: 1000px) {
        display: flex;
        flex-direction: column;
        justify-content: center;
        text-align: center;

        .btn {
            margin: 16px 0px 40px;
        }
        .img {
            grid-area: img;
            position: relative;
            > img {
                position: relative;
                width: 100%;
                top: 0%;
                left: 0%;
            }
        }
    }
`
export default function Introdution() {
    return (
        <Container>
            <Wrap>
                <div className='text'>
                    <p className='text__large'>Driving toward mass NFT adoption</p>
                    <p className='color__f4'>A Permissioned Smart Contract Layer-1 Chain</p>
                </div>
                <div className='img'>
                    <img className='aura-img' src={AuraTokenImg} alt='' />
                </div>
                <div className='btn'>
                    <Button onClick={() => window.open(' https://docs.aura.network/')}>Discover more</Button>
                </div>
                <div className='cd'>
                    {new Date('03-20-2023 20:00').getTime() > Date.now() ? (
                        <>
                            <p className='countdown-title color__f4'>The Xstaxy Mainnet launch starting in:</p>
                            <CustomCountdown />
                        </>
                    ) : null}
                </div>
            </Wrap>
        </Container>
    )
}
