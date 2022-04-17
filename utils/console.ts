const logWhiteMessage = (message: string) => {
  console.log(`%c▷ %c${message}`, 'color: #818cf8;', 'color: white;')
}

export const logSiteInfo = () => {
  console.groupCollapsed(
    '%cWant to know how this site was built?',
    'color: #ffc107; font-weight: bold; font-size: 24px; color: #818cf8;'
  )
  logWhiteMessage('Styled with Vanilla Extract')
  logWhiteMessage(
    'Built on top of NextJS making use of SSG (Static Site Generation)'
  )
  logWhiteMessage('Static type checking with TypeScript')
  logWhiteMessage('Custom page loading indicator with nextjs-progressbar')
  logWhiteMessage('MDX posts powered by mdx-loader and remark-prism')
  logWhiteMessage(
    'Dynamic social previews for home/posts/individual post pages'
  )
  logWhiteMessage('Hosted on Vercel')
  logWhiteMessage('Source code: https://github.com/Rixcy/rb2022')
  console.groupEnd()
}
