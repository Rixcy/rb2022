import { ExternalLink, GradientText, PageTitle } from './utils'
import * as s from './intro.css'
import { Section } from './section'
import { Avatar } from './avatar'
import { useConfig } from './config'

export const Intro = () => {
  const { name, jobTitle } = useConfig()
  return (
    <Section.Root className={s.intro}>
      <div className={s.contentWrapper}>
        <PageTitle>
          Hey, I&apos;m <GradientText>{name}</GradientText>
        </PageTitle>
        <p className={s.content}>
          {jobTitle} based in Newcastle. Currently working at{' '}
          <ExternalLink href="https://zeroheight.com">zeroheight</ExternalLink>{' '}
          building design system software.
        </p>
      </div>
      <div className={s.avatarWrapper}>
        <Avatar />
      </div>
    </Section.Root>
  )
}
