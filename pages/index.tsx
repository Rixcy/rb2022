import type { NextPage } from 'next'
import { Footer } from '../components/footer'
import { Header } from '../components/header'
import { Intro } from '../components/intro'
import * as globalStyles from '../styles/global.css'

const Home: NextPage = () => {
  return (
    <div className={globalStyles.container}>
      <Header />
      <Intro />
      <Footer />
    </div>
  )
}

export default Home
