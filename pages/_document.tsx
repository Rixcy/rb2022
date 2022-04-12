import { Html, Head, Main, NextScript } from 'next/document'
import { themeClass } from '../styles/theme.css'

export default function Document() {
  return (
    <Html>
      <Head />
      <body className={themeClass}>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
