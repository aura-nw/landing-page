import styled from 'styled-components'
import avatar from '../../assets/images/avatar.png'
import c98 from '../../assets/images/c98.png'
import crypto from '../../assets/images/crypto.png'
import fpt from '../../assets/images/fpt.png'
import gateio from '../../assets/images/gateio.png'
import gbv from '../../assets/images/gbv.png'
import guildfi from '../../assets/images/guildfi.png'
import hashed from '../../assets/images/hashed.png'
import impossible from '../../assets/images/impossible.png'
import istari from '../../assets/images/istari.png'
import k300 from '../../assets/images/k300.png'
import kucoin from '../../assets/images/kucoin.png'
import kyber from '../../assets/images/kyber.png'
import mexc from '../../assets/images/mexc.png'
import ngc from '../../assets/images/ngc.png'
import snz from '../../assets/images/snz.png'
const Wrap = styled.div`
    > p {
        font-weight: 600;
        font-size: 40px;
        line-height: 42px;
        @media only screen and (max-width: 1000px) {
            font-size: 24px;
            line-height: 25px;
            margin: 0px 24px;
            text-align: center;
        }
        text-align: center;
        text-transform: capitalize;
        background: linear-gradient(108.46deg, #5ee6d0 12.51%, #bfc6ff 51.13%, #ffba69 87.49%);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        background-clip: text;
    }
    > div {
        margin: 40px auto 0px;

        width: 1008px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        > img {
            opacity: 0.6;
            transition: all 0.3s ease;
        }
        > img:hover {
            opacity: 1;
            -webkit-filter: drop-shadow(rgba(255, 255, 255, 0.6) 0px 0px 20px);
            filter: drop-shadow(rgba(255, 255, 255, 0.6) 0px 0px 20px);
        }
    }
    @media only screen and (max-width: 1000px) {
        > div {
            flex-wrap: wrap;
            width: unset;
            padding: 0px 14px;
            margin-top: 32px;
            justify-content: space-evenly;
            > img {
                transform: scale(0.8);
            }
        }
    }
`
export default function Partner() {
    return (
        <Wrap>
            <p className='title'>Honored to be accompanied with</p>
            <div>
                <img src={fpt} alt='' />
                <img src={hashed} alt='' />
                <img src={c98} alt='' />
                <img src={guildfi} alt='' />
                <img src={crypto} alt='' />
            </div>
            <div>
                <img src={istari} alt='' />
                <img src={impossible} alt='' />
                <img src={gbv} alt='' />
                <img src={kyber} alt='' />
                <img src={ngc} alt='' />
            </div>
            <div>
                <img src={kucoin} alt='' />
                <img src={snz} alt='' />
                <img src={k300} alt='' />
                <img src={avatar} alt='' />
                <img src={mexc} alt='' />
                <img src={gateio} alt='' />
            </div>
        </Wrap>
    )
}
