import { style } from '@vanilla-extract/css'
import { fonts, screen, vars } from '../styles/theme.css'

export const intro = style({
  display: 'flex',
  flexDirection: 'row',
  marginTop: vars.space[4],
  marginBottom: vars.space[4],
  '@media': {
    [screen.sm]: {
      marginTop: vars.space[12],
      marginBottom: vars.space[8],
    },
  },
})

export const contentWrapper = style({
  '@media': {
    [screen.sm]: {
      maxWidth: '35.5rem',
    },
  },
})

export const avatarWrapper = style({
  flex: 1,
  display: 'none',
  alignItems: 'baseline',
  justifyContent: 'flex-end',
  '@media': {
    [screen.md]: {
      display: 'flex',
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
