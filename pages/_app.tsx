import '../styles/globals.css'
import '../styles/theme.css'
import type { AppProps } from 'next/app'
import Head from 'next/head'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>RICK BOOTH - FRONTEND DEVELOPER</title>
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
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
