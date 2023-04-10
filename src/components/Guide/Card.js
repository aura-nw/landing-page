import styled from 'styled-components'

const Wrap = styled.div`
    backdrop-filter: blur(10px);
    border-radius: 15px;
    position: relative;
    overflow: hidden;
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
    }&::after {
        content: '';
        position: absolute;
        inset: 0;
        border-radius: 15px;
        background: linear-gradient(304.78deg, rgba(245, 251, 242, 0.44) -6.31%, rgba(245, 251, 242, 0) 110.8%);
        -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
        -webkit-mask-composite: xor;
        mask-composite: exclude;
        padding: 1px;
    }
`
export default function Card({ children }) {
    return (
        <Wrap>
            <div>{children}</div>
        </Wrap>
    )
}
