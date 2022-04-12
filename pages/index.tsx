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
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/site.webmanifest" />
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
