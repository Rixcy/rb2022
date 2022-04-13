import cn from 'classnames'
import '../styles/globals.scss'
import '../styles/theme.css'
import '@fontsource/inconsolata'
import '@fontsource/inconsolata/700.css'
import type { AppProps } from 'next/app'
import Head from 'next/head'
import { MDXProvider } from '@mdx-js/react'
import { Nav } from '../components/nav'
import { Footer } from '../components/footer'
import * as gs from '../styles/global.css'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <MDXProvider>
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
      <Nav />
      <main className={cn(gs.container, gs.main, gs.content)}>
        <Component {...pageProps} />
      </main>
      <Footer />
    </MDXProvider>
  )
}

export default MyApp
