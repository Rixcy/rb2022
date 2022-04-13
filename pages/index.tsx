import type { NextPage } from 'next'
import { Footer } from '../components/footer'
import { Header } from '../components/header'
import { Intro } from '../components/intro'
import { Projects } from '../components/projects'
import * as globalStyles from '../styles/global.css'

const Home: NextPage = () => {
  return (
    <div className={globalStyles.container}>
      <Header />
      <Intro />
      <Projects />
      <Footer />
    </div>
  )
}

export default Home
