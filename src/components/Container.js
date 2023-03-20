import styled from 'styled-components'

export const Wrap = styled.div`
    max-width: 1160px;
    margin: auto;
    @media only screen and (max-width: 1280px) {
        max-width: 960px;
    }
    @media only screen and (max-width: 1000px) {
        margin: 0px 26px;
        max-width: unset;
    }
`
export default function Container({ children, style }) {
    return <Wrap style={style}>{children}</Wrap>
}
