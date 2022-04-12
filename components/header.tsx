import Link from 'next/link'
import cn from 'classnames'
import { useRouter } from 'next/router'
import * as s from './header.css'

const links = [{ href: '/', label: 'Home' }]

export const Header = () => {
  const router = useRouter()

  return (
    <header className={s.header}>
      <Link href="/" passHref>
        <a className={s.title}>RB.ME</a>
      </Link>
      <nav className={s.nav}>
        {links.map((link) => (
          <Link href={link.href} passHref key={link.href}>
            <a
              className={cn(s.item({ active: router.pathname === link.href }))}
            >
              {link.label}
            </a>
          </Link>
        ))}
      </nav>
    </header>
  )
}
