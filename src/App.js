import 'slick-carousel/slick/slick-theme.css'
import 'slick-carousel/slick/slick.css'
import styled from 'styled-components'
import './App.css'
import Advantage from './components/Advantage'
import Feature from './components/Feature'
import Footer from './components/Footer'
import Gap from './components/Gap'
import Guide from './components/Guide'
import Header from './components/Header'
import Introdution from './components/Introduction'
import Partner from './components/Partner'
import Roadmap from './components/Roadmap'
import Spotlight from './components/Spotlight'
import StyledPointer from './components/StyledPointer'
const Wrap = styled.div`
    z-index: 2;
    position: relative;
`
function App() {
    return (
        <>
            <StyledPointer />
            <Wrap className='App'>
                <Header />
                <Gap height={64} mHeight={64} />
                <Introdution />
                <Spotlight />
                <Gap height={150} mHeight={64} />
                <Feature />
                <Gap height={150} mHeight={120} />
                <Advantage />
                <Gap height={200} mHeight={120} />
                <Guide />
                <Gap height={200} mHeight={120} />
                <Roadmap />
                <Gap height={200} mHeight={120} />
                <Partner />
                <Gap height={150} mHeight={100} />
                <Footer />
                <Gap height={50} />
            </Wrap>
        </>
    )
}

export default App
