import { ExternalLink, SrOnly } from './utils'
import * as s from './footer.css'

export const Footer = () => {
  return (
    <footer className={s.footer}>
      <Name />
      <JobTitle />
      <LocationList />
      <LinksList />
      <CopyrightNotice />
    </footer>
  )
}

const name = 'Rick Booth'

const Name = () => <p className={s.name}>{name}</p>

const JobTitle = () => (
  <p>
    <SrOnly>Job title:</SrOnly>Senior Frontend Developer
  </p>
)

const locations = ['Newcastle', 'London', 'Skipton']

const LocationList = () => (
  <ul className={s.locationList}>
    <SrOnly>Working locations:</SrOnly>
    {locations.map((location, index) => (
      <>
        <li>{location}</li>
        {index < locations.length - 1 && <span aria-hidden>•</span>}
      </>
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
      <>
        <Link key={link.href} {...link} />
        {index < links.length - 1 && <span aria-hidden>/</span>}
      </>
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

const CopyrightNotice = () => (
  <p className={s.copyrightNotice}>
    &copy; {new Date().getFullYear()} {name}
  </p>
)
