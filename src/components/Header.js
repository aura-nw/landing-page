import styled from 'styled-components'
import AuraLogoImg from '../assets/images/aura-logo.svg'
import AuraTokenImg from '../assets/images/aura-token.svg'
import AuraToken from '../assets/images/aura-token__large.svg'
import Halo from '../assets/images/halo.svg'
import Onus from '../assets/images/onus.svg'
import Impossible from '../assets/images/impossible.svg'
import Mexc from '../assets/images/mexc.svg'
import Bingx from '../assets/images/bingx.svg'
import Container from './Container'
// import 'reactjs-popup/dist/index.css'
import Popup from 'reactjs-popup'
import { useState } from 'react'
const Root = styled.div`
    position: fixed;
    width: 100%;
    z-index: 99;
`
const Wrap = styled.div`
    background: rgb(36 38 46 / 82%);
    backdrop-filter: blur(20px);
    border-radius: 0px 0px 24px 24px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px 12px;
    position: relative;
    z-index: 2;
    > img {
        cursor: pointer;
    }
    > .nav-bar {
        display: flex;
        > a {
            color: #f4f4f4;
            text-decoration: none;
            margin: 0px 20px;
            cursor: pointer;
        }
    }
    @media only screen and (max-width: 1000px) {
        > a,
        > img,
        > a > img {
            height: 28px;
        }
        > .nav-bar {
            > a {
                font-size: 12px;
                line-height: 13px;
                margin: 0px 5px;
            }
        }
    }
`
const PopupContent = styled.div`
  padding: 60px 50px 34px;
  @media only screen and (max-width: 1280px) {
    padding: 45px 22px 24px;
  }
  display: flex;
  align-items: center;
  flex-direction: column;
  > img {
    width: 100px;
    height: 100px;
  }
  > p {
    font-weight: 700;
    font-size: 24px;
    text-align: center;
    color: #fff;
    margin-top: 22px;
    @media only screen and (max-width: 1280px) {
      font-size: 22px;
    }
  }
  > div {
    margin-top: 20px;
    width: 100%;
    @media only screen and (max-width: 1280px) {
      margin-top: 45px;
    }
    > p {
      font-weight: 600;
      font-size: 20px;
      color: #f4f4f4;
      margin-bottom: 20px;
      text-align: center;
      @media only screen and (max-width: 1280px) {
        font-size: 18px;
      }
    }
    > div {
      display: grid;
      grid-template-columns: 1fr 1fr;
      column-gap: 20px;
      > div {
        padding: 15px 30px;
        background: linear-gradient(269.43deg, rgba(255, 255, 255, 0.15) 0%, rgba(255, 255, 255, 0.1) 100%);
        box-shadow: 0px 4px 15px rgba(0, 0, 0, 0.2);
        backdrop-filter: blur(10px);
        border-radius: 8px;
        cursor: pointer;
        display: flex;
        justify-content: center;
        align-items: center;
        @media only screen and (max-width: 1280px) {
          padding: 10px 16px;
          > img {
            width: 100%;
          }
        }
      }
    }
  }
  > a {
    background: linear-gradient(108.46deg, #5ee6d0 12.51%, #bfc6ff 51.13%, #ffba69 87.49%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    font-size: 16px;
    line-height: 17px;
    margin-top: 30px;
    @media only screen and (max-width: 1280px) {
      margin-top: 45px;
    }
  }
`
export default function Header() {
    const [open, setOpen] = useState(false)
    return (
      <Root>
        <Container>
          <Wrap>
            <a href="/" alt="">
              <img src={AuraLogoImg} alt="" className="logo-img" />
            </a>
            <div className="nav-bar">
              <a href="https://docs.aura.network/" target="_blank" rel="noreferrer" className="nav-bar-item">
                Ecosystem
              </a>
              <a href="https://insight.aura.network/" target="_blank" rel="noreferrer" className="nav-bar-item">
                Blog
              </a>
              <a href="http://lnk.bio/auranetwork" target="_blank" rel="noreferrer" className="nav-bar-item">
                Community{" "}
              </a>
            </div>
            <img onClick={() => setOpen(!open)} src={AuraTokenImg} alt="" className="token-img " />
            <Popup modal={true} lockScroll={true} onClose={() => setOpen(false)} open={open} position="top center">
              <span className="close" onClick={() => setOpen(false)}></span>
              <PopupContent>
                <img src={AuraToken} alt="" />
                <p>Buy AURA Now On</p>
                <div>
                  <div>
                    <div onClick={() => window.open("https://bingx.com/en-us/spot/AURAUSDT/")}>
                      <img src={Bingx} alt="" />
                    </div>
                    <div onClick={() => window.open("https://halotrade.zone/swap")}>
                      <img src={Halo} alt="" />
                    </div>
                  </div>
                </div>
                <div>
                  <div>
                    <div onClick={() => window.open("https://www.mexc.com/exchange/AURA_USDT")}>
                      <img src={Mexc} alt="" />
                    </div>
                    <div onClick={() => window.open("https://goonus.io/")}>
                      <img src={Onus} alt="" />
                    </div>
                  </div>
                </div>
                <a
                  href="https://insight.aura.network/tag/listing/?_ga=2.209879250.616355991.1678432068-522954093.1678432068"
                  target="_blank"
                  rel="noreferrer">
                  See more details
                </a>
              </PopupContent>
            </Popup>
          </Wrap>
        </Container>
      </Root>
    )
}
