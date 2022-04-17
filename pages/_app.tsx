import NextNProgress from 'nextjs-progressbar'
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
import { ConfigContextProvider } from '../components/config'
import React, { useEffect } from 'react'
import { logSiteInfo } from '../utils/console'

function MyApp({ Component, pageProps }: AppProps) {
  useEffect(() => logSiteInfo(), [])

  /**
   * We disable strict mode in nextjs config since it causes useEffect hooks to be called twice
   * then re-enable it here once the initial console logs (site info) have been logged.
   */

  return (
    <React.StrictMode>
      <ConfigContextProvider>
        {({ baseTitle, baseDescription }) => (
          <MDXProvider>
            <NextNProgress color="#818cf8" options={{ showSpinner: false }} />

            <Head>
              <title>{baseTitle}</title>
              <meta name="description" content={baseDescription} />
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
        )}
      </ConfigContextProvider>
    </React.StrictMode>
  )
}

export default MyApp
