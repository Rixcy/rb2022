import { ExternalLink, PageTitle } from './utils'
import * as s from './intro.css'
import Image from 'next/image'
import avatar from '../public/avatar.png'
import { Section } from './section'

export const Intro = () => (
  <Section.Root className={s.intro}>
    <div className={s.contentWrapper}>
      <PageTitle>
        Hey, I&apos;m <span className={s.name}>Rick Booth</span>
      </PageTitle>
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
  </Section.Root>
)
