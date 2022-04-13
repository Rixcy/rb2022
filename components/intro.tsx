import { ExternalLink } from './utils'
import * as s from './intro.css'
import Image from 'next/image'
import avatar from '../public/avatar.png'

export const Intro = () => (
  <main className={s.intro}>
    <div className={s.contentWrapper}>
      <p className={s.title}>
        Hello, I&apos;m <span className={s.name}>Rick Booth</span>
      </p>
      <p className={s.content}>
        Senior Frontend Developer based in Newcastle. Currently working at{' '}
        <ExternalLink href="https://progressionapp.com">
          Progression
        </ExternalLink>{' '}
        on Design Systems and building out the front end for an app specialising
        in building career frameworks.
      </p>
    </div>
    <div className={s.avatarWrapper}>
      <Image src={avatar} alt="" height="150" width="150" />
    </div>
  </main>
)
