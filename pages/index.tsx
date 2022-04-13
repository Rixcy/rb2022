import type { NextPage } from 'next'
import { Footer } from '../components/footer'
import { Nav } from '../components/nav'
import { Intro } from '../components/intro'
import { Projects } from '../components/projects'
import * as globalStyles from '../styles/global.css'

const Home: NextPage = () => {
  return (
    <div className={globalStyles.container}>
      <Nav />
      <Intro />
      <Projects />
      <Footer />
    </div>
  )
}

export default Home
