import { ComponentProps, ReactNode } from 'react'
import * as s from './section.css'
import cn from 'classnames'

export type RootProps = ComponentProps<'section'>

export const Root = ({ children, className, ...restProps }: RootProps) => (
  <section className={cn(s.section, className)} {...restProps}>
    {children}
  </section>
)

export const Title = ({ children }: { children: ReactNode }) => (
  <h2 className={s.title}>{children}</h2>
)
