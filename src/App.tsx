import { useState } from 'react'
import {
  About,
  Features,
  Footer,
  Header,
  Hero,
  Join,
  Modal,
  Opportunities,
  Questions,
  Reviews,
  Ticker,
} from './components'

function App() {
  const [modalActive, setModalActive] = useState(false)
  return (
    <>
      <Header setActive={setModalActive} />
      <div className='container'>
        <Hero setActive={setModalActive} />
        <About />
      </div>
      <Join />
      <div className='container'>
        <Opportunities />
        <Features />
      </div>
      <Ticker setActive={setModalActive} />
      <Reviews />
      <Questions />
      <Footer />
      <Modal active={modalActive} setActive={setModalActive} />
    </>
  )
}

export default App
