import { ComponentProps, ReactNode } from 'react'
import cn from 'classnames'
import * as s from './utils.css'

export const SrOnly = ({ children }: { children: ReactNode }) => (
  <span className="sr-only">{children}</span>
)

export const ExternalLink = (
  props: {
    href: string
    children: ReactNode
  } & ComponentProps<'a'>
) => {
  const { children, className, ...restProps } = props
  return (
    <a
      target="_blank"
      className={cn(s.link, className)}
      rel="noopener noreferrer"
      {...restProps}
    >
      {children}
    </a>
  )
}

export const PageTitle = ({ children }: { children: ReactNode }) => (
  <h1 className={s.title}>{children}</h1>
)

export const GradientText = ({ children }: { children: ReactNode }) => (
  <span className={s.gradientText}>{children}</span>
)
