import styled from 'styled-components'
const Wrap = styled.div`
    position: relative;
    flex: 0 1 320px;
    margin: 40px 12px;
    cursor: pointer;
    > img {
        position: absolute;
        top: 0%;
        left: 50%;
        transform: translate(-50%, -50%);
    }
    &:hover {
        filter: brightness(1.2);
    }
    @media only screen and (max-width: 1000px) {
        margin: 0px 6px 60px;
        flex: 0 1 calc(50% - 12px);
        > img {
            transform: translate(-50%, -50%) scale(0.8);
        }
    }
`
const MainCard = styled.div`
    background: linear-gradient(180deg, rgba(255, 255, 255, 0.03) -30.29%, rgba(255, 255, 255, 0) 144.92%);
    backdrop-filter: blur(10px);
    border-radius: 15px;
    position: relative;
    overflow: hidden;
    border: 1px solid transparent;
    background-image: linear-gradient(rgb(10 9 29), rgb(10 9 29)),
        linear-gradient(304.78deg, rgba(245, 251, 242, 0.44) -6.31%, rgba(245, 251, 242, 0) 110.8%);

    background-origin: border-box;
    background-clip: content-box, border-box;
    > div {
        padding: 50px 30px 12px;
        @media only screen and (max-width: 1000px) {
            padding: 42px 8px 12px;
        }
        text-align: center;
        > .title {
            font-weight: 600;
            font-size: 18px;
            line-height: 19px;
            margin-bottom: 8px;
        }
        > .description {
            margin-bottom: 8px;
            font-weight: 400;
            font-size: 14px;
            line-height: 15px;
        }
        > .text__color {
            background: linear-gradient(108.46deg, #5ee6d0 12.51%, #bfc6ff 51.13%, #ffba69 87.49%);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            background-clip: text;

            cursor: pointer;
            font-size: 12px;
            line-height: 13px;
        }
    }
    &::before {
        content: '';
        background-image: url(${(props) => props.backdrop});
        width: 117px;
        height: 120px;
        display: block;
        position: absolute;
        filter: blur(40px);
        left: calc(50% - 59px);
        top: -50%;
    }
`
export default function Card({ backdrop, children, logo, onClick }) {
    return (
        <Wrap onClick={onClick}>
            <MainCard backdrop={backdrop}>
                <div>{children}</div>
            </MainCard>
            <img src={logo} alt='logo' />
        </Wrap>
    )
}
