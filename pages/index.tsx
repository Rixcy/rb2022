import type { NextPage } from 'next'
import Head from 'next/head'
import { Footer } from '../components/footer'
import { Header } from '../components/header'
import { ExternalLink } from '../components/utils'
import * as globalStyles from '../styles/global.css'
import * as s from '../styles/home.css'

const Home: NextPage = () => {
  return (
    <div className={globalStyles.container}>
      <Head>
        <title>RICKBOOTH.ME</title>
        <meta
          name="description"
          content="Rick Booth is Senior Frontend Developer based in Newcastle. Working at Progression on Design Systems and building out the front end for an app specialising in building career frameworks."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />

      <main>
        <p className={s.title}>Hello, I&apos;m Rick Booth</p>
        <p className={s.intro}>
          Senior Frontend Developer based in Newcastle. Currently at{' '}
          <ExternalLink href="https://progressionapp.com">
            Progression
          </ExternalLink>{' '}
          working on Design Systems and building out the front end for an app
          specialising in building career frameworks.
        </p>
      </main>

      <Footer />
    </div>
  )
}

export default Home
