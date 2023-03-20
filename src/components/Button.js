import styled from 'styled-components'

const Wrap = styled.button`
    cursor: pointer;
    border: 1px solid transparent;
    background-image: linear-gradient(rgb(19, 20, 25), rgb(19, 20, 25)),
        linear-gradient(108.46deg, rgb(94, 230, 208) 12.51%, rgb(191, 198, 255) 51.13%, rgb(255, 186, 105) 87.49%);
    background-origin: border-box;
    background-clip: content-box, border-box;
    border-radius: 8px;
    font-weight: 400;
    font-size: 16px;
    line-height: 20px;
    text-align: center;
    letter-spacing: 0.01em;
    color: rgb(255, 255, 255);
    white-space: nowrap;
    background-color: transparent !important;
    padding: 0px !important;
    > div {
        background: linear-gradient(0deg, rgba(0, 0, 0, 0.64), rgba(0, 0, 0, 0.64)),
            linear-gradient(113.1deg, rgb(94, 230, 208) 13.45%, rgb(191, 198, 255) 50.33%, rgb(255, 186, 105) 85.05%);
        border-radius: 8px;
        padding: 10px 24px;
    }
    &:hover {
        filter: brightness(1.08);
    }
`
export default function Button({ onClick, children }) {
    return (
        <Wrap onClick={onClick}>
            <div>{children}</div>
        </Wrap>
    )
}
