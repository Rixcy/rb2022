import Link from 'next/link'
import cn from 'classnames'
import { useRouter } from 'next/router'
import * as s from './nav.css'

const links = [{ href: '/', label: 'Home' }]

export const Nav = () => {
  const router = useRouter()

  return (
    <nav className={s.nav}>
      <Link href="/" passHref>
        <a className={s.title}>RB.ME</a>
      </Link>
      <div className={s.items}>
        {links.map((link) => (
          <Link href={link.href} passHref key={link.href}>
            <a
              className={cn(s.item({ active: router.pathname === link.href }))}
            >
              {link.label}
            </a>
          </Link>
        ))}
      </div>
    </nav>
  )
}
