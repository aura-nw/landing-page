import styled from 'styled-components'

const Wrap = styled.div`
    background: linear-gradient(180deg, rgba(255, 255, 255, 0.03) -30.29%, rgba(255, 255, 255, 0) 144.92%);
    backdrop-filter: blur(10px);
    border-radius: 15px;
    position: relative;
    overflow: hidden;
    border: 1px solid transparent;
    background-image: linear-gradient(rgb(10 9 29), rgb(10 9 29)),
        linear-gradient(304.78deg, rgba(245, 251, 242, 0.13) -6.31%, rgba(245, 251, 242, 0) 110.8%);

    background-origin: border-box;
    background-clip: content-box, border-box;
    > div {
        padding: 19px 49px;
        @media only screen and (max-width: 1000px) {
            padding: 17px 20px;
        }
        text-align: center;
        > .title {
            font-weight: 600;
            font-size: 16px;
            line-height: 17px;
            margin-bottom: 8px;
        }
        > .description {
            font-weight: 400;
            font-size: 14px;
            line-height: 15px;
        }
    }
`
export default function Card({ children }) {
    return (
        <Wrap>
            <div>{children}</div>
        </Wrap>
    )
}
