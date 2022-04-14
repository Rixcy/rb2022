import { style } from '@vanilla-extract/css'
import { fonts, screen, vars } from '../styles/theme.css'

export const intro = style({
  display: 'flex',
  flexDirection: 'row',
})

export const contentWrapper = style({
  '@media': {
    [screen.sm]: {
      maxWidth: '35.5rem',
    },
  },
})

export const avatarWrapper = style({
  marginTop: vars.space[6],
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

export const content = style([
  fonts['2xl'],
  {
    margin: 0,
    color: vars.color.lightGrey,
  },
])
