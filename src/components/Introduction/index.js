import styled from "styled-components"
import AuraTokenImg from "../../assets/images/Aura_logo_animated_1.gif"
import Button from "../Button"
import Container from "../Container"
import CustomCountdown from "./Countdown"
const Wrap = styled.div`
  position: relative;
  display: grid;
  grid-template-areas:
    "text img"
    "btn img"
    "cd img";
  padding: 86px 0px;
  grid-template-columns: 60% 40%;
  margin-top: 32px;
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
    min-height: 270px;
    display: flex;
    flex-direction: column;
    justify-content: end;
    @media only screen and (max-width: 1000px) {
      min-height: unset;
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
  .noti {
    position: absolute;
    left: 50%;
    top: 0;
    transform: translateX(-50%);
    display: flex;
    white-space: nowrap;
    align-items: center;
    gap: 18px;
    padding: 6px 20px;
    border-radius: 20px;
    z-index: 10;
    background: linear-gradient(108.46deg, #5ee6d01a 12.51%, #bfc6ff1a 51.13%, #ffba691a 87.49%);
    > span:first-child {
      background: linear-gradient(108.46deg, #5ee6d0 12.51%, #bfc6ff 51.13%, #ffba69 87.49%);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      background-clip: text;
    }
    button {
      border-radius: 999px;
      > div {
        border-radius: 999px;
        padding: 4px 20px;
      }
    }
  }
  @media only screen and (max-width: 1000px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    text-align: center;
    /* padding:  40px 0px; */
    padding:  0px;
    margin-top: 12px;
    .btn {
      margin: 16px 0px 40px;
    }
    .cd {
      min-height: 18px;
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
    .noti {
      white-space: pre-wrap;
      display: flex;
      flex-direction: column;
      text-align: center;
      transform: unset;
      display: flex;
      flex-direction: column;
      text-align: center;
      left: 0;
      right: 0;
      font-size: 14px;
      position: relative;
      button div {
        font-size: 12px;
      }
    }
  }
`
export default function Introdution() {
  return (
    <Container>
      <Wrap>
        <div className="noti">
          <span>Aura Network token migration is available. Folow our guide to migrate now! </span>
          <span>
            <Button onClick={() => window.open("https://insight.aura.network/aura-network-token-migration-guide/")}>
              Migrate Now
            </Button>
          </span>
        </div>
        <div className="text">
          <h1 className="text__large">Driving toward mass NFT adoption</h1>
          <p className="color__f4">A Permissioned Smart Contract Layer-1 Chain</p>
        </div>
        <div className="img">
          <img className="aura-img" src={AuraTokenImg} alt="" />
        </div>
        <div className="btn">
          <Button onClick={() => window.open(" https://docs.aura.network/")}>Discover more</Button>
        </div>
        <div className="cd">
          {new Date("03-20-2023 20:00").getTime() > Date.now() ? (
            <>
              <p className="countdown-title color__f4">The Xstaxy Mainnet launch starting in:</p>
              <CustomCountdown />
            </>
          ) : null}
        </div>
      </Wrap>
    </Container>
  )
}
