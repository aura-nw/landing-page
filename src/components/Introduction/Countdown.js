import Countdown, { zeroPad } from 'react-countdown'
import styled from 'styled-components'

const Wrap = styled.div`
    span {
        background: #24262e;
        border: 1px solid #494c58;
        border-radius: 8px;
        padding: 10px 0px;
        font-weight: 600;
        font-size: 16px;
        line-height: 20px;
        margin: 4px;
        min-width: 44px;
        text-align: center;
        display: inline-block;
    }
    span:first-child {
        margin-left: 0px;
    }
`
export default function CustomCountdown() {
    const renderer = ({ days, hours, minutes, seconds, completed }) => {
        if (completed) {
            return null
        } else {
            return (
                <>
                    <span>{zeroPad(days)}d</span>:<span>{zeroPad(hours)}h</span>:<span>{zeroPad(minutes)}m</span>:
                    <span>{zeroPad(seconds)}s</span>
                </>
            )
        }
    }
    return (
        <Wrap>
            <Countdown date={new Date('03-20-2023 20:00').getTime()} renderer={renderer} />
        </Wrap>
    )
}
