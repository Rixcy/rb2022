import { style } from '@vanilla-extract/css'
import { fonts, screen, vars } from '../../styles/theme.css'

export const section = style({
  marginBottom: vars.space[6],
  '@media': {
    [screen.sm]: {
      marginBottom: vars.space[8],
    },
  },
})

export const title = style([fonts['2xl']])
