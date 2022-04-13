/* eslint-disable */
import { withOGImage } from 'next-api-og-image'
import { Avatar } from '../../components/avatar'

const style = `
  body {
    font-family: 'Inconsolata', monospace;
    color: white;
  }
  .container {
    background-color: black;
    color: white;
    width: 100vw;
    height: 100vh;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
  }
  .titleWrapper {
    display: flex;
    flex-direction: column;
    max-width: 420px;
  }
  h1 {
    font-size: 2rem; 
    line-height: 1;
    font-weight: bold;
    margin-top: 24px;
    marginBottom: 24px;
  }
  p {
    font-size: 1.25rem;
    color: #818cf8;
  }
  .avatar {
    margin-left: 24px;
  }
  .avatar .glasses {
    stroke: white;
    fill: white;
  }
`

interface QueryParams {
  stage: string
  name: string
}

export default withOGImage<'query', QueryParams>({
  template: {
    react: async ({ name, stage }) => {
      return (
        <html>
          <head>
            <style dangerouslySetInnerHTML={{ __html: style }} />
            <link
              rel="stylesheet"
              href="https://fonts.googleapis.com/css2?family=Inconsolata&display=swap"
            ></link>
          </head>
          <body>
            <div className="container">
              <div className="titleWrapper">
                <h1>{stage}</h1>
                <p>RICKBOOTH.ME</p>
              </div>
              <div>
                <Avatar />
              </div>
            </div>
          </body>
        </html>
      )
    },
  },
  cacheControl: 'public, max-age=604800, immutable',
  dev: {
    inspectHtml: false,
  },
})
