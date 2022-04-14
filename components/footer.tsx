import { ExternalLink, SrOnly } from './utils'
import cn from 'classnames'
import * as s from './footer.css'
import * as gs from '../styles/global.css'
import { Fragment } from 'react'
import { useConfig } from './config'

export const Footer = () => {
  return (
    <footer className={cn(s.footer, gs.container)}>
      <Name />
      <JobTitle />
      <LocationList />
      <LinksList />
      <CopyrightNotice />
    </footer>
  )
}

const Name = () => {
  const { name } = useConfig()
  return <p className={s.name}>{name}</p>
}

const JobTitle = () => {
  const { jobTitle } = useConfig()
  return (
    <p className={s.jobTitle}>
      <SrOnly>Job title:</SrOnly>
      {jobTitle}
    </p>
  )
}

const locations = ['Newcastle', 'London', 'Skipton']

const LocationList = () => (
  <ul className={s.locationList}>
    <SrOnly>Working locations:</SrOnly>
    {locations.map((location, index) => (
      <Fragment key={index}>
        <li>{location}</li>
        {index < locations.length - 1 && <span aria-hidden>•</span>}
      </Fragment>
    ))}
  </ul>
)

const links: LinkProps[] = [
  { href: 'https://github.com/rixcy', label: 'GitHub' },
  { href: 'https://twitter.com/rixcy', label: 'Twitter' },
  {
    href: 'https://www.linkedin.com/in/rick-booth-480677119/',
    label: 'LinkedIn',
  },
]

const LinksList = () => (
  <ul className={s.linksList}>
    <SrOnly>Links:</SrOnly>
    {links.map((link, index) => (
      <Fragment key={index}>
        <Link key={link.href} {...link} />
        {index < links.length - 1 && <span aria-hidden>/</span>}
      </Fragment>
    ))}
  </ul>
)

type LinkProps = {
  href: string
  label: string
}

const Link = (props: LinkProps) => {
  const { href, label } = props

  return (
    <ExternalLink href={href} className={s.link}>
      {label}
    </ExternalLink>
  )
}

const CopyrightNotice = () => {
  const { name } = useConfig()
  return (
    <p className={s.copyrightNotice}>
      &copy; {new Date().getFullYear()} {name}
    </p>
  )
}
