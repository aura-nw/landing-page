import styled from 'styled-components'

const Wrap = styled.div`
    height: ${(props) => props.height}px;
    @media only screen and (max-width: 1000px) {
        height: ${(props) => props.mHeight}px;
    }
`
export default function Gap({ height, mHeight }) {
    return <Wrap height={height} mHeight={mHeight} />
}
