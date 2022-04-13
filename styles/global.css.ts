import { style } from '@vanilla-extract/css'
import { screen, vars } from './theme.css'

export const app = style({
  color: vars.color.white,
  backgroundColor: vars.color.black,
})

export const container = style({
  display: 'flex',
  flexDirection: 'column',
  maxWidth: '80rem',
  marginLeft: 'auto',
  marginRight: 'auto',
  minHeight: '100vh',
  paddingLeft: vars.space[2],
  paddingRight: vars.space[2],
  '@media': {
    [screen.sm]: {
      paddingLeft: vars.space[6],
      paddingRight: vars.space[6],
    },
    [screen.lg]: {
      paddingLeft: vars.space[8],
      paddingRight: vars.space[8],
    },
  },
})

export const content = style({
  display: 'flex',
  flexDirection: 'column',
  flex: 1,
})
