import Link from 'next/link'
import cn from 'classnames'
import { useRouter } from 'next/router'
import * as s from './nav.css'
import * as gs from '../styles/global.css'

const links = [
  { href: '/', label: 'Home' },
  { href: '/posts', label: 'Posts', partialMatch: true },
]

export const Nav = () => {
  const router = useRouter()

  return (
    <nav className={s.nav}>
      <div className={cn(gs.container, s.content)}>
        <Link href="/" passHref>
          <a className={s.title}>RB.ME</a>
        </Link>
        <div className={s.items}>
          {links.map((link) => (
            <Link href={link.href} passHref key={link.href}>
              <a
                className={cn(
                  s.item({
                    active: link.partialMatch
                      ? router.pathname.includes(link.href)
                      : router.pathname === link.href,
                  })
                )}
              >
                {link.label}
              </a>
            </Link>
          ))}
        </div>
      </div>
    </nav>
  )
}
