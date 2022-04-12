import { ReactNode } from 'react'

export const SrOnly = ({ children }: { children: ReactNode }) => (
  <span className="sr-only">{children}</span>
)
