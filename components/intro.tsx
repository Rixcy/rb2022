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
          <ExternalLink href="https://builder.ai">
            Builder.ai
          </ExternalLink>{' '}
          on delivering and designing custom software and serving as a subject expert for Ruby, React and React Native.
        </p>
      </div>
      <div className={s.avatarWrapper}>
        <Avatar />
      </div>
    </Section.Root>
  )
}
