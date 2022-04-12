import { style } from '@vanilla-extract/css'
import { screen, vars } from './theme.css'

export const container = style({
  maxWidth: '80rem',
  marginLeft: 'auto',
  marginRight: 'auto',
  paddingLeft: vars.space['2'],
  paddingRight: vars.space['2'],
  '@media': {
    [screen.sm]: {
      paddingLeft: vars.space['6'],
      paddingRight: vars.space['6'],
    },
    [screen.lg]: {
      paddingLeft: vars.space['8'],
      paddingRight: vars.space['8'],
    },
  },
})
