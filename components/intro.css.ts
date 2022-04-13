import { style } from '@vanilla-extract/css'
import { fonts, vars } from '../styles/theme.css'

export const intro = style({
  display: 'flex',
  flexDirection: 'column',
  maxWidth: '35.5rem',
  marginBottom: vars.space[8],
})

export const title = style([
  fonts['5xl'],
  {
    fontWeight: 'bold',
    marginBottom: 0,
  },
])

export const name = style({
  color: 'transparent',
  backgroundClip: 'text',
  backgroundImage: `linear-gradient(to right, ${vars.color.white}, ${vars.color.theme[300]}, ${vars.color.theme[500]})`,
})

export const content = style([
  fonts['2xl'],
  {
    color: vars.color.lightGrey,
  },
])
