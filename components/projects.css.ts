import { style } from '@vanilla-extract/css'
import { fonts, vars } from '../styles/theme.css'

export const title = style(fonts['2xl'])

export const projects = style({
  display: 'grid',
  gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
  columnGap: vars.space[8],
})

export const name = style([
  fonts.lg,
  {
    textTransform: 'uppercase',
    marginBottom: vars.space[2],
    letterSpacing: '2px',
  },
])

export const description = style({
  color: vars.color.lightGrey,
})
