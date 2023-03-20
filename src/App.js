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
const Wrap = styled.div``
function App() {
    return (
        <Wrap className='App'>
            <Header />
            <Gap height={64} mHeight={64} />
            <Introdution />
            <Gap height={100} mHeight={0} />
            <Spotlight />
            <Gap height={150} />
            <Feature />
            <Gap height={150} />
            <Advantage />
            <Gap height={200} mHeight={50} />
            <Guide />
            <Gap height={200} mHeight={50} />
            <Roadmap />
            <Gap height={200} mHeight={50}/>
            <Partner />
            <Gap height={150} mHeight={100} />
            <Footer />
            <Gap height={50} />
        </Wrap>
    )
}

export default App
