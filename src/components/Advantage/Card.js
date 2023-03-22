import styled from 'styled-components'
import AuraBackdrop from '../../assets/images/aura__gray.svg'
const Wrap = styled.div`
    background: linear-gradient(269.43deg, rgba(255, 255, 255, 0.15) 0%, rgba(255, 255, 255, 0.05) 100%);
    box-shadow: 0px 4px 15px rgba(0, 0, 0, 0.2);
    backdrop-filter: blur(10px);
    padding: 20px;
    border-radius: 8px;
    position: relative;
    flex: 1;
    display: flex;
    flex-direction: column;
    &::after {
        content: '';
        background: url(${AuraBackdrop});
        position: absolute;
        background-size: 100% 100%;
        height: 158px;
        width: 177px;
        right: 0;
        bottom: 0;
    }
    > p {
        color: #ffffff;
    }
    > p.title {
        font-weight: 700;
        font-size: 24px;
        line-height: 25px;
        margin-bottom: 10px;
        flex: 1;
        
    }
    > a {
        font-weight: 400;
        font-size: 16px;
        line-height: 17px;
        background: linear-gradient(108.46deg, #5ee6d0 12.51%, #bfc6ff 51.13%, #ffba69 87.49%);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        background-clip: text;
        
        width: fit-content;
    }
`
export default function Card({ children }) {
    return <Wrap>{children}</Wrap>
}
