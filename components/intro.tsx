import { ExternalLink, GradientText, PageTitle } from './utils'
import * as s from './intro.css'
import { Section } from './section'
import { Avatar } from './avatar'

export const Intro = () => (
  <Section.Root className={s.intro}>
    <div className={s.contentWrapper}>
      <PageTitle>
        Hey, I&apos;m <GradientText>Rick Booth</GradientText>
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
      <Avatar />
    </div>
  </Section.Root>
)
