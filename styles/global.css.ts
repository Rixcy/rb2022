import { style } from '@vanilla-extract/css'
import { screen, vars } from './theme.css'

export const app = style({
  color: vars.color.white,
  backgroundColor: vars.color.black,
  display: 'flex',
  flexDirection: 'column',
})

export const container = style({
  display: 'flex',
  maxWidth: '80rem',
  marginLeft: 'auto',
  marginRight: 'auto',
  width: '100%',
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

export const main = style({
  flex: 1,
})

export const content = style({
  display: 'flex',
  flexDirection: 'column',
  flex: 1,
  width: '100%',
})
