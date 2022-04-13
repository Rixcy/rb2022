import { ExternalLink } from './utils'
import * as s from './intro.css'

export const Intro = () => (
  <main className={s.intro}>
    <p className={s.title}>
      Hello, I&apos;m <span className={s.name}>Rick Booth</span>
    </p>
    <p className={s.content}>
      Senior Frontend Developer based in Newcastle. Currently working at{' '}
      <ExternalLink href="https://progressionapp.com">Progression</ExternalLink>{' '}
      on Design Systems and building out the front end for an app specialising
      in building career frameworks.
    </p>
  </main>
)
