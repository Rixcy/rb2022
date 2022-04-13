import { style } from '@vanilla-extract/css'
import { fonts, screen, vars } from '../styles/theme.css'

export const intro = style({
  display: 'flex',
  flexDirection: 'column',
  marginTop: vars.space[4],
  marginBottom: vars.space[4],
  '@media': {
    [screen.sm]: {
      maxWidth: '35.5rem',
      marginTop: vars.space[12],
      marginBottom: vars.space[8],
    },
  },
})

export const title = style([
  fonts['5xl'],
  {
    fontWeight: 'bold',
    marginTop: 0,
    marginBottom: vars.space[6],
  },
])

export const name = style({
  color: 'transparent',
  backgroundClip: 'text',
  backgroundImage: `linear-gradient(to right, ${vars.color.white}, ${vars.color.theme[300]}, ${vars.color.theme[500]})`,
  whiteSpace: 'nowrap',
})

export const content = style([
  fonts['2xl'],
  {
    marginTop: 0,
    color: vars.color.lightGrey,
  },
])
