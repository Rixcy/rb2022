import { style } from '@vanilla-extract/css'
import { fonts, vars } from './theme.css'

export const title = style([
  fonts['5xl'],
  {
    fontWeight: 'bold',
  },
])

export const intro = style({
  maxWidth: '35.5rem',
  color: vars.color.lightGrey,
  fontSize: '24px',
  lineHeight: 1.5,
})
