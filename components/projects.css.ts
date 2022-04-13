import { style } from '@vanilla-extract/css'
import { fonts, vars } from '../styles/theme.css'

export const wrapper = style({
  paddingBottom: vars.space[6],
})

export const title = style(fonts['2xl'])

export const projects = style({
  display: 'grid',
  gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
  columnGap: vars.space[8],
})

export const project = style([
  fonts.lg,
  {
    marginBottom: vars.space[2],
  },
])

export const description = style({
  color: vars.color.lightGrey,
})
