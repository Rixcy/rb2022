import { Html, Head, Main, NextScript } from 'next/document'
import cn from 'classnames'
import { app } from '../styles/global.css'
import { themeClass } from '../styles/theme.css'

export default function Document() {
  return (
    <Html>
      <Head />
      <body className={cn(themeClass, app)}>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
